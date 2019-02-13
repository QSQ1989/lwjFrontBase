import React from 'react'
import NProgress from 'nprogress'
import PropTypes from 'prop-types'
import pathToRegexp from 'path-to-regexp'
import { connect } from 'dva'
import { Layout, Loader } from 'components'
import { classnames, config } from 'utils'
import { Helmet } from 'react-helmet'
import { withRouter } from 'dva/router'
import 'antd/dist/antd.less'
import 'themes/index.less'
import './App.less'

const { prefix, openPages } = config
const { Header, Bread, Footer, Sider, styles } = Layout
let lastHref

const App = ({ children, dispatch, app, loading, location }) => {
  const {
    user,
    tenant,
    siderFold,
    darkTheme,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    menu,
    permissions
  } = app
  let { pathname } = location
  pathname = pathname.startsWith('/')
    ? pathname
    : `/${pathname}`
  const { iconFontJS, iconFontCSS } = config
  const { logo, displayName } = tenant
  const current = menu.filter(item => pathToRegexp(item.route || '').exec(pathname))
  const hasPermission = current.length
    ? permissions
      .visit
      .includes(current[0].id)
    : false
  const href = window.location.href

  if (lastHref !== href) {
    NProgress.start()
    if (!loading.global) {
      NProgress.done()
      lastHref = href
    }
  }

  const headerProps = {
    menu,
    user,
    tenant,
    location,
    siderFold,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    switchMenuPopover() {
      dispatch({ type: 'app/switchMenuPopver' })
    },
    logout() {
      const returnUrl = `http://${window.location.host}`
      window.location.href = `/security/auth/logout?returnUrl=${encodeURI(returnUrl)}`
      // dispatch({type: 'app/logout'})
    },
    switchSider() {
      dispatch({ type: 'app/switchSider' })
    },
    changeOpenKeys(openKeys) {
      dispatch({
        type: 'app/handleNavOpenKeys',
        payload: {
          navOpenKeys: openKeys
        }
      })
    }
  }

  const siderProps = {
    menu,
    logo,
    location,
    siderFold,
    darkTheme,
    navOpenKeys,
    changeTheme() {
      dispatch({ type: 'app/switchTheme' })
    },
    changeOpenKeys(openKeys) {
      window
        .localStorage
        .setItem(`${prefix}navOpenKeys`, JSON.stringify(openKeys))
      dispatch({
        type: 'app/handleNavOpenKeys',
        payload: {
          navOpenKeys: openKeys
        }
      })
    }
  }

  const breadProps = {
    menu,
    location
  }
  if (openPages && openPages.includes(pathname)) {
    return (
      <div>
        <Loader fullScreen spinning={loading.effects['app/initApp']} /> {children}
      </div>
    )
  }

  return (
    <div>
      <div>
        <Loader fullScreen spinning={loading.effects['app/initApp']} />
        <Helmet>
          <title>{`${_.isEmpty(displayName) ? "" : displayName} X POWERD BY Liweijia`}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href={logo} type="image/x-icon" /> {iconFontJS && <script src={iconFontJS} />}
          {iconFontCSS && <link rel="stylesheet" href={iconFontCSS} />}
        </Helmet>
        <div
          className={classnames(styles.layout, {
            [styles.fold]: isNavbar
              ? false
              : siderFold
          }, {
              [styles.withnavbar]: isNavbar
            })}>
          {!isNavbar
            ? <aside
              className={classnames(styles.sider, {
                [styles.light]: !darkTheme
              })}>
              {siderProps.menu.length === 0
                ? null
                : <Sider {...siderProps} />}
            </aside>
            : ''}
          <div className={styles.main}>
            <Header {...headerProps} />
            <div className={styles.container}>
              <div className={styles.content}>
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object
}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App))
