import { REGISTER_URL } from '../env'

const LWJ_API = '/services'

module.exports = {
  name: '惠享家 X POWERED BY Liweijia',
  prefix: 'LWJ',
  footerText: 'POWERED BY LIWEIJIA',
  logo: '/public/logo.svg',
  iconFontCSS: '/public/iconfont.css',
  iconFontJS: '/public/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  api: {
    currentTenant: `${LWJ_API}/userTenant/currentTenant`,
    isLogin: `${LWJ_API}/ums/isLogin`,
    userLogout: `${LWJ_API}/auth/logout`,
    getCurrentSystemProperty: `${LWJ_API}/salesSystemProperty/getCurrentSystemProperty`,
    dashboard: `${LWJ_API}/dashboard/info`,
    menus: `${LWJ_API}/menus`,
    financialSettlementApply: `${LWJ_API}/financial/settlementApply`,
    financialSettlementBatch: `${LWJ_API}/financial/settlementBatch`,
    financialPaymentBill: `${LWJ_API}/financial/payments`,
    financialAccountBalance: `${LWJ_API}/financial/financialAccount`,
    financialBalanceChangingApply: `${LWJ_API}/financial/balanceChangingApply`,
    financialReceipt: `${LWJ_API}/financial/receipts`,
    financialBill: `${LWJ_API}/financial/bills`,
    financialRecharge: `${LWJ_API}/userFinancialRecharge`,
    financialPay: `${LWJ_API}/pay`,
    financialAccountBalanceRecord: `${LWJ_API}/balanceRecord`,
    salesPaymenter: `${LWJ_API}/sales`,
    orderList: `${LWJ_API}/salesOrder`,
    role: `${LWJ_API}/role`,
    menu: `${LWJ_API}/menus`,
    product: `${LWJ_API}/product`,
    userTenant: `${LWJ_API}/userTenant`,
    resource: `${LWJ_API}/resource`,
    organization: `${LWJ_API}/organization`,
    distributor: `${LWJ_API}/sales/distributor`,
    region: `${LWJ_API}/region`,
    userSelection: `${LWJ_API}/userSelection`,
    configPrefix: `${LWJ_API}/config`,
    lwjRecharge: `${LWJ_API}/lwj`,
    contractOrders: `${LWJ_API}/contractOrders`,
    salesContractOrders: `${LWJ_API}/salesOrder/contractOrders`,
    securityMeta: `${LWJ_API}/securityMeta`,
    orderChangeApply: `${LWJ_API}/orderChangeApply`,
    userFinancialRecharge: `${LWJ_API}/userFinancialRecharge`,
    contractCancelApply: `${LWJ_API}/contractCancelApply`,
    coupons: `${LWJ_API}/coupons`,
    salesDistributoRegistryApplyService:`${LWJ_API}/wxapi/distributorRegistry`,
    transferToBalanceRecord:`${LWJ_API}/wxapi/payOrder`,
    //商品管理
    products: `${LWJ_API}/commodityLinked`,
    payOrderList :`${LWJ_API}/payOder`,

    //测试用例
    mismatchOMSMoneyOrderList: `${LWJ_API}/salesOrder`,
    readMismatchOMSMoneyOrderList: `${LWJ_API}/salesOrder`,
    SERVICE_ENDPOINT: `${LWJ_API}/`,


    // 报表测试
    report: `${LWJ_API}/report`,
    reportConfig: `${LWJ_API}/reportConfig`,
    // 分销市场
    shop:`${LWJ_API}/shop`,
    payOrder: `${LWJ_API}/payOder`,
    pay: `${LWJ_API}/pay`,
    recommend: `${LWJ_API}/recommendGoods`,
    level: `${LWJ_API}/level`
  },
  defaultPageSize: 10,
  ROLE_ADMIN_ID: '3',
  DOMAIN: 'http://admin-staging.liweijia.com',
  REGISTER_URL: REGISTER_URL
}
