import modelExtend from 'dva-model-extend'
import { model } from 'utils/model'
import pathToRegexp from 'path-to-regexp';

export default modelExtend(model, {
  namespace: 'dashboard',
  state: {
    title:"欢迎来到丽维家科技"
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/dashboard').exec(pathname);
       
      })
    }
  },
  effects:{},
  reducers: {}
})
