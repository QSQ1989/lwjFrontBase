/* global window */
/* global document */
/* global location */
import config from 'config'
import {isLoginUser, getCurrentTenant, boundUI} from 'services/app'
import * as menusService from 'services/menus'
import queryString from 'query-string'
import {routerRedux} from 'dva/router'

const {prefix} = config
const loginUrl = encodeURIComponent(window.location.href)

export default {
  namespace : 'app',
  state : {
    user: {},
    tenant: {},
    permissions: {
      visit: []
    },
    menu: [],
    menuPopoverVisible: false,
    siderFold: window
      .localStorage
      .getItem(`${prefix}siderFold`) === 'true',
    darkTheme: window
      .localStorage
      .getItem(`${prefix}darkTheme`) === 'true',
    isNavbar: document.body.clientWidth < 769,
    navOpenKeys: JSON.parse(window.localStorage.getItem(`${prefix}navOpenKeys`)) || [],
    locationPathname: '',
    locationQuery: {},
    resources: []
  },
  subscriptions : {
    setupHistory({dispatch, history}) {
      history.listen((location) => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: queryString.parse(location.search)
          }
        })
      })
    },

    setup({dispatch}) {
      dispatch({type: 'initApp'})
      let tid
      window.onresize = () => {
        clearTimeout(tid)
        tid = setTimeout(() => {
          dispatch({type: 'changeNavbar'})
        }, 300)
      }
    }
  },
  effects : {
    * initApp({
      payload
    }, {call, put, select, take}) {
      const {result: user} = yield call(isLoginUser, payload)
      if (user.name === 'anonymous') {
        // yield window.location.href = `/dashboard`
        // yield put(routerRedux.push(`/orderList/myOrder`, {  }));
        window.location.href = `/security/auth/login?returnUrl=${loginUrl}`
        yield take('initApp/@@end')
      }

      const {result: tenant} = yield call(getCurrentTenant)
      let {list} = yield call(menusService.query)
      const {result: resources} = yield call(boundUI)

      yield put({
        type: 'updateState',
        payload: {
          user: user,
          menu: list,
          tenant,
          resources
        }
      })
    },

    * logout({
      payload
    }, {call, put}) {
      // const data = yield call(logout, parse(payload)) if (data.success) {     yield
      // put({type: 'query'}) } else {     throw(data) }
      const returnUrl = `http://${window.location.host}`
      yield window.location.href = `/security/auth/logout?returnUrl=${encodeURI(returnUrl)}`
    },

    * changeNavbar(action, {put, select}) {
      const {app} = yield(select(_ => _))
      const isNavbar = document.body.clientWidth < 769
      if (isNavbar !== app.isNavbar) {
        yield put({type: 'handleNavbar', payload: isNavbar})
      }
    }
  },
  reducers : {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    },

    switchSider(state) {
      window
        .localStorage
        .setItem(`${prefix}siderFold`, !state.siderFold)
      return {
        ...state,
        siderFold: !state.siderFold
      }
    },

    switchTheme(state) {
      window
        .localStorage
        .setItem(`${prefix}darkTheme`, !state.darkTheme)
      return {
        ...state,
        darkTheme: !state.darkTheme
      }
    },

    switchMenuPopver(state) {
      return {
        ...state,
        menuPopoverVisible: !state.menuPopoverVisible
      }
    },

    handleNavbar(state, {payload}) {
      return {
        ...state,
        isNavbar: payload
      }
    },

    handleNavOpenKeys(state, {payload: navOpenKeys}) {
      return {
        ...state,
        ...navOpenKeys
      }
    }
  }
}
