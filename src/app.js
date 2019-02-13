import _ from 'lodash'
import { Modal } from 'antd'

export const dva = {
  config: {
    onError (err) {
      err.preventDefault()
      Modal.error({
        'title': '错误',
        'content': err.message
      })
    },
  },
}

