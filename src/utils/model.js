import modelExtend from 'dva-model-extend'
import { config } from '../utils'

const { defaultPageSize } = config

const model = {
  state: {

  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
}

const pageModel = modelExtend(model, {

  state: {
    list: [],
    pagination: {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `Total ${total} Items`,
      current: 1,
      total: 0
    }
  },

  reducers: {
    querySuccess(state, { payload }) {
      const { list, pagination } = payload
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination
        }
      }
    }
  }
})

const lwjPageModel = modelExtend(model, {

  state: {
    items: [],
    pagination: {
      current: 1,
      total: 0,
      showTotal: total => `共 ${total} 条`,
      showSizeChanger: true,
      showQuickJumper: true,
      defaultPageSize: defaultPageSize
    },
    pageOptions: {
      sort: 'createTime',
      order: 'DESC',
    },
    queryParam: {}
  },

  reducers: {
    querySuccess(state, { payload }) {
      return {
        ...state,
        items: payload.content,
        pagination: {
          ...state.pagination,
          current: payload.number + 1,
          total: payload.totalElements
        },
        pageOptions:{
          ...state.pageOptions,
          limit:payload.size
        }
      }
    },

    showSuccess(state, { payload }) {
      state.currentItem = payload

      return {
        ...state
      }
    },

    asyncData(state, { payload }) {
      if (payload.isTablePagination) {
        delete payload.isTablePagination;
        return {
          ...state,
          queryParam: {
            ...state.queryParam,
            ...payload
          }
        }
      } else {
        return {
          ...state,
          queryParam: {
            ...payload
          }
        }
      }
    },
  }
})

module.exports = {
  model,
  pageModel,
  lwjPageModel
}
