import { debug } from "util";

/**
 * 小程序入驻类型
 */
export const registryTypes = {
  'ROLE_TENANT_HXJBUSINESS': '商家',
  'ROLE_TENANT_HXJWORKER': '安装师傅',
  'ROLE_TENANT_HXJPM': '项目经理',
  'ROLE_TENANT_HXJDESIGNER': '设计师',
  'ROLE_TENANT_HXJSALES_PM': '销售经理'
}

/**
 * 提现状态
 */
export const transferStatus = {
  "PENDING":"待审核",
  "CHECK_APPROVED":"审核通过待处理",
  "CHECK_DENY":"审核不通过",
  "NULL":"提现异常",
  "SUCCESS":"提现成功",
  "FAILED":"提现失败"
}


/**
 * 入驻审核状态
 */
export const auditStatus = {
  "PENDING":"等待审核",
  "AUDIT_SUCCESS":"已通过",
  "AUDIT_FAIL":"未通过",
  "UNSUBMIT": "待提交"
}

/**
 * 配送方式
 */
export const distributionWay = {
  "TAKE_BY_SELF": "物流网点自提",
  "DOOR_TO_DOOR" : "送货上门安装"
};
/**
 * 订单支付状态
 */
export const payOrderStatus = {
  "UNPAY": "待支付",
  "PENDING_PAID" : "等待支付结果",
  "PAID": "已支付",
  "EXPIRED": "已作废",
  "CANCELED":"已取消"
};
/**
 * 财务结算类型
 */
export const purchaseType = {
  "SELF_OPERATED": "平台自营",
  "TAKE_PURCHASE": "平台代采",
  "SELF_PURCHASE": "自采",
};
export const financialSettlementStatus = {
  "NULL": "待结算",
  "PAYMENT_STAY": "待支付",
  "SETTLE_SUCCESS": "已结算",
  "SETTLE_FAIL": "结算失败",
  "SETTLE_LOCK": "已锁定"
};
export const sourceSystem = {
  "NULL": "分销系统",
  "LWJ_SHOP": "丽维家商城",
  "YOUZAN_SHOP": "有赞商城",
  "SAlES_MARKET":"分销市场",
  "WX_LITE":"小程序"
};
export const profitsStatus = {
  "PENDING_PROFITS": "可分润",
  "PROFITS": "待分润",
  "DIVIDED_PROFITS": "已分润",
  "DENY_PROFITS": "不能分润"
};

export const timeCheckout = (time) => {
  return time === "Invalid date" ? "暂无时间" : time
};

export const receiptStatus = {
  "CREATE": "创建",
  "AUDIT_SUCCESS": "审核通过",
  "AUDIT_FAIIL": "审核不通过",
  "PAY_SUCCESS": "支付成功",
  "PAY_FAIIL": "支付不成功"
};

/**
 * 财务业务类型
 */
export const financialBusinessType = {
  "NONE": "无",
  "PERCENTAGE": "提成",
  "WITHHOLD": "扣款",
  "PLACE_ORDER": "下单",
  "PLACE_ORDER_RATIO": "下单(首付款)",
  "PAY_FOR_UNPAID": "下单(尾款)",
  "CANCEL_ORDER": "取消",
  "COMPENSATION": "补差",
  "CHARGE": "充值",
  "CONTRACTCHANGE": "合同变更",
  "AFTERSALE_COMPENSATION": "售后赔偿",
  "AFTERSALE_BUSINESSREFUND": "退款",
  "CHANGE": "调账",
  "BALANCE_CHARGE": "余额调增",
  "BALANCE_WITHHOLD": "余额调减",
  "PROFITS_DISTRIBUTION": "分润",
  "PROFITS_LITE": "小程序分润",
  "TRANS_FINANCIALACCOUNT": "账户转移",
  "SYNC_ORDER": "商城同步",
  "CONPONS": "优惠券",
  "TRANSFER_TO_BALANCE": "提现",
};

export const receiptType = {
  "RECEIPT": "收款单",
  "PAYMENT_RECEIPT": "付款收款单",
  "LWJ_RECEIPT": "线下充值",
  "FROM_THIRD": "第三方收款单",
  "PROFITS_DISTRIBUTION": "分润",
  "TRANS_FINANCIALACCOUNT": "账户转移",
  "CONPONS": "优惠券",
  "PROFITS_LITE": "小程序分润"
}
export const quoteType = {
  "BALANCE": "余额支付",
  "COUPONS": "优惠券支付",
}
export const couponsAddType = {
  "COUPON_RECHARGE": "优惠券充值",
}


/**
 * 财务结算操作类型
 */
export const financialSettlementApplyHandleType = {
  "CREATE": "创建",
  "SETTLEMENT": "结算",
  "PAY": "支付",
  "SETTLEMENT_BACK": "结算退回"
};

/**
 * 财务付款单审核状态
 */
export const financialPaymentBillAuditStatus = {
  "NULL": "待审核",
  "AUDIT_SUCCESS": "审核通过",
  "AUDIT_FAIL": "审核不通过"
};

/**
 * 财务付款单审核状态
 */
export const financialPaymentBillPaymentStatus = {
  "PAYMENT_STAY": "待付款",
  "PAYMENT_SUCCESS": "付款成功",
  "PAYMENT_FAIL": "付款失败",
  "NONE": "待审核"
};

/**
 * 财务 付款单 收款单 操作类型
 */
export const financialBillHandleType = {
  "CREATE": "创建",
  "AUDIT_SUCCESS": "审核通过",
  "AUDIT_FAIIL": "审核不通过",
  "PAY_SUCCESS": "支付成功",
  "PAY_FAIIL": "支付不成功"
};

/**
 * 订单状态类型
 */
export const orderStatus = {
  "DRAFT": " 待下单",
  "IN_SALES_PROGRESS": "已下单"
}
export const couponStatus = {
  "CAN_USE": " 可用",
  "UN_CHECKED": "待审核",
  "USED": "已使用",
  "ABANDONED": "已作废",
  "FAIL_CHECK": "审核不通过"
}
// return (item.name === "ROLE_STORE_ADMIN" || item.name === "ROLE_STORE_ADMIN" || item.name === "ROLE_STORE_ADMIN")
export const checkIsStoreRoles = (obj) => {
  const roles = obj.roles;
  if (Array.isArray(roles)) {
    if (roles.every((item) => {
      return item.name !== "ROLE_ADMIN";
    })) {
      return roles.some((item) => {
        return (item.name === "ROLE_STORE_ADMIN" || item.name === "ROLE_STORE_EMPLOYEE" || item.name === "ROLE_STORE_SALESMAN");
      })
    }
    return false;
  }
}
export const checkIsDesigner = (obj) => {
  const roles = obj.roles;
  if (Array.isArray(roles)) {
    if (roles.every((item) => {
      return item.name !== "ROLE_ADMIN";
    })) {
      return roles.some((item) => {
        return (item.name === "ROLE_TENANT_DESIGNER");
      })
    }
    return false;
  }
}
export const checkIsStoreAdmin = (obj) => {
  const roles = obj.roles;
  if (Array.isArray(roles)) {
    if (roles.every((item) => {
      return item.name !== "ROLE_ADMIN";
    })) {
      return roles.some((item) => {
        return (item.name === "ROLE_STORE_ADMIN");
      })
    }
    return false;
  }
}
export const checkIsStoreEmployee = (obj) => {
  const roles = obj.roles;
  if (Array.isArray(roles)) {
    if (roles.every((item) => {
      return item.name !== "ROLE_ADMIN";
    })) {
      return roles.some((item) => {
        return (item.name === "ROLE_STORE_EMPLOYEE");
      })
    }
    return false;
  }
}
export const checkCurrentRole = (obj) => {
  if (checkIsStoreAdmin(obj)) {
    return "storeAdmin"
  }
  if (checkIsDesigner(obj)) {
    return "designer"
  }
  if (checkIsStoreEmployee(obj)) {
    return "storeEmployee"
  }
}
export const checkAmount = (amount) => {
  if (amount === undefined || amount === null) {
    return "";
  }
  return _.toNumber(amount).toFixed(2);
}
export const storeAdminArr = [
  {
    "status": "DRAFT",
    "display": "草稿",
    "deal":true
  }, {
    "status": "PENDING_CONFIRM_DESIGN_NEED",
    "display": "待确认设计(需设计)",
    "deal":true
  }, {
    "status": "DENIED_DESIGN_NO_NEED",
    "display": "设计不通过(不需设计)",
    "deal":true
  }, {
    "status": "PENDING_CONFIRM_QUOTED",
    "display": "待确认报价",
    "deal":true
  }, {
    "status": "PUBLISHED",
    "display": "待丽维家报价"
  }, {
    "status": "OMS_FACTORY_AUDIT_FAILED",
    "display": "工艺审核不通过"
  }, {
    "status": "PENDING_CONFIRM_OMS_QUOTED",
    "display": "待确认丽维家报价"
  }, {
    "status": "PUBLISHED_TO_OMS",
    "display": "已生产"
  }
]
export const storeEmployeeArr = [
  {
    "status": "DRAFT",
    "display": "草稿",
    "deal":true
  }, {
    "status": "PENDING_CONFIRM_DESIGN_NEED",
    "display": "待确认设计(需设计)",
    "deal":true
  }, {
    "status": "DENIED_DESIGN_NO_NEED",
    "display": "设计不通过(不需设计)",
    "deal":true
  }, {
    "status": "PUBLISHED",
    "display": "待丽维家报价"
  }, {
    "status": "OMS_FACTORY_AUDIT_FAILED",
    "display": "工艺审核不通过"
  }, {
    "status": "PENDING_CONFIRM_OMS_QUOTED",
    "display": "待确认丽维家报价"
  }, {
    "status": "PUBLISHED_TO_OMS",
    "display": "已生产"
  }
]
export const designerArr = [
  {
    "status": "PENDING_DESIGN",
    "display": "待设计",
    "deal":true
  }, {
    "status": "PENDING_CONFIRM_DESIGN_NO_NEED",
    "display": "待确认设计(不需设计)",
    "deal":true
  }, {
    "status": "DENIED_DESIGN_NEED",
    "display": "设计不通过(需设计)",
    "deal":true
  }, {
    "status": "PENDING_QUOTE",
    "display": "待报价",
    "deal":true
  }, {
    "status": "DENIED_QUOTED",
    "display": "报价不通过",
    "deal":true
  }, {
    "status": "PENDING_PUBLISH",
    "display": "待下单",
    "deal":true
  }, {
    "status": "OMS_FACTORY_AUDIT_FAILED",
    "display": "工艺审核不通过",
    "deal":true
  }, {
    "status": "PUBLISHED_TO_OMS",
    "display": "已生产"
  }
]
export const contractStatusArr = [
  {
    "status": "DRAFT",
    "display": "草稿",
    "deal":true
  }, {
    "status": "PENDING_DESIGN",
    "display": "待设计",
    "deal":true
  }, {
    "status": "PENDING_CONFIRM_DESIGN_NEED",
    "display": "待确认设计(需设计)",
    "deal":true
  }, {
    "status": "PENDING_CONFIRM_DESIGN_NO_NEED",
    "display": "待确认设计(不需设计)",
    "deal":true
  }, {
    "status": "DENIED_DESIGN_NEED",
    "display": "设计不通过(需设计)",
    "deal":true
  }, {
    "status": "DENIED_DESIGN_NO_NEED",
    "display": "设计不通过(不需设计)",
    "deal":true
  }, {
    "status": "PENDING_QUOTE",
    "display": "待报价",
    "deal":true
  }, {
    "status": "PENDING_CONFIRM_QUOTED",
    "display": "待确认报价",
    "deal":true
  }, {
    "status": "DENIED_QUOTED",
    "display": "报价不通过",
    "deal":true
  }, {
    "status": "PENDING_PUBLISH",
    "display": "待下单",
    "deal":true
  }, {
    "status": "PUBLISHED",
    "display": "待丽维家报价",
    "deal":true
  }, {
    "status": "OMS_FACTORY_AUDIT_FAILED",
    "display": "工艺审核不通过",
    "deal":true
  }, {
    "status": "PENDING_CONFIRM_OMS_QUOTED",
    "display": "待确认丽维家报价",
    "deal":true
  }, {
    "status": "PUBLISHED_TO_OMS",
    "display": "已生产",
    "deal":true
  }
]

/**
 * 订单状态颜色
 */
export const orderStatusColor = {
  "DRAFT": "default",
  "IN_SALES_PROGRESS": "processing"
}

export const contractChangeStatus = {
  "NULL": "default",
  "CHANGING": "变更中"
}

/**
 * 合同订单状态
 */
export const contractOrderStatus = {
  "DRAFT": "草稿",
  "PENDING_DESIGN": "待设计",
  "PENDING_CONFIRM_DESIGN": "待确认设计",
  "DENIED_DESIGN": "设计不通过",
  "PENDING_QUOTE": "待报价",
  "PENDING_CONFIRM_QUOTED": "待确认报价",
  "DENIED_QUOTED": "报价不通过",
  "PENDING_PUBLISH": "待下单",
  "PUBLISHED": "待丽维家报价",
  "OMS_FACTORY_AUDIT_FAILED": "丽维家工艺审核不通过",
  "PENDING_CONFIRM_OMS_QUOTED": "待确认丽维家报价",
  "PUBLISHED_TO_OMS": "已生产",
  "PENDING_PURCHASE": "待下单",
  "CHANGING": "变更中",
  "PENDING_PRODUCTION": "待生产",
}

/**
 * 合同订单操作类型
 */
export const contractActionType = {
  "EDIT": "编辑",
  "PLACE_ORDER": "提交",
  "DESIGN": "设计",
  "DELETE": "删除",
  "CONFIRM_DESIGN": "确认设计",
  "QUOTE": "报价",
  "CONFIRM_QUOTE": "确认报价",
  "PUBLISH": "下单到丽维家",
  "PURCHASE": "下单到丽维家",
  "PUBLISH_AGAIN": "再次下单"
}

/**
 * 付款方式
 */
export const paymentType = {
  "ONLINE": "线上支付",
  "OFFLINE": "线下支付"
}

/**
 * 订单类型
 */
export const contractOrderType = {
  "CUSTOMIZE": "定制",
  "END": "成品"
}

/**
 * 产品类型
 */
export const productType = {
  "CUPBOARD": "橱柜",
  "WARDROBE": "衣柜",
  "END": "成品",
  "DOORPLANK":"门板"
}

/**
 * 订单类型
 * @param {*} record
 */
export const dealTypeOfOrder = (record) => {
  if (record.salesOrderType === 'CUSTOMIZE' && record.designable === true) {
    return '设计意向订单'
  } else {
    return '报价意向单'
  }
}

// 菜单配置
export const menusData = {
  "ALL": {},
  "myOrder": {}
}

// 产品类型配置
export const ProductTypes = {
  CUPBOARD: '橱柜',
  WARDROBE: '衣柜'
}

/**
 * 订单变更
 * 申请单状态
 * @type {{DRAFT: string, TO_AUDIT: string, AUDIT_SUCCESS: string, AUDIT_FAIL: string}}
 */
export const statusOrderChangeApply = {
  DRAFT: "待提交",
  TO_AUDIT: "待审核",
  AUDIT_SUCCESS: "审核通过",
  AUDIT_FAIL: "审核未通过",
}

/**
 * 订单变更
 * 变更状态
 * @type {{INFORMATION: string, AMOUNT: string}}
 */
export const contractChangeType = {
  AMOUNT: "金额变更",
  INFORMATION: "信息变更",
}

/**
 * 订单变更
 * 变更业务类型
 * @type {{SUPPLEMENT: string, REFUND: string}}
 */
export const contractChangeBusinessType = {
  SUPPLEMENT: "补款",
  REFUND: "退款"
}

/**
 * 订单变更
 * 变更原因
 * @type {{QUOTATIONERROR: string, DESIGNCHANGES: string, CANCELGOODS: string, OTHER: string}}
 */
export const contractChangeReason = {
  QUOTATIONERROR: "报价错误",
  DESIGNCHANGES: "设计方案变动",
  CANCELGOODS: "取消部分商品",
  OTHER: "其他",
}

/**
 * 物流状态
 */
export const logisticsStatus = {
  NONE: "已生产",
  PENDING_PLAN: "待计划",
  PENDING_SHIP: "待发货",
  SHIPPING: "运输中",
  ARRIVED: "已到达"
}
export const logisticsCancelStatus = {
  PENDING: "取消中",
  CANCELLED: "已取消",
}
export const breakStatus = {
  NULL: "老数据",
  UN_BREAK: "未拆分",
  BREAKED: "已拆分",
}

/**
 * 合同取消状态
 */
export const contractCancelStatus = {
  NULL: "未取消",
  CANCELING: "取消中",
  CANCELED: "已取消",
}

/**
 * 结算类型
 */
export const settlementType = {
  RECEIVABLE: "应收",
  PAYABLE: "应付"
}
/**
 * 时间兼容
 */
export const timeUtils = {
  "Invalid date": "暂无时间"
}

/**
 * 余额变更类型
 * @type {{add: string, reduce: string}}
 */
export const balanceChangeType = {
  BALANCE_MORE: '余额调增',
  BALANCE_LESS: '余额调减'
}

/**
 * 余额变更原因
 * @type {{one: string, two: string, three: string, four: string, five: string, six: string}}
 */
export const balanceChangeReason = {
  AFTER_SALE: '售后赔付',
  SUPPLEMENT_RESPONSIBILITY: '返补追责',
  RETURN_REFUND: '退货退款',
  MORE_RECEIVING_REFUND: '多收款退款',
  WITHDRAW_DEPOSIT: '提现',
  OTHER: '其他',
}

export const balanceChangeStatus = {
  DRAFT: '待提交',
  AUDIT_STAY: '待审核',
  AUDIT_SUCCESS: '审核成功',
  AUDIT_FAILURE: '审核失败'
}

export const checkContractAddress = (currentContractDetail) => {
  if (_.isEmpty(currentContractDetail)) {
    return ""
  }
  const getName = (obj) => {
    return _.isEmpty(obj) ? "" : obj.name
  }
  return getName(currentContractDetail.consigneeProvince) + getName(currentContractDetail.consigneeCity) + getName(currentContractDetail.consigneeDistrict) + currentContractDetail.consigneeAddress
}


