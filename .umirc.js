import {
  resolve
} from "path";
/**
 * 配置代理路径
 */
const PROXY_API = 'http://aojia.sales-staging.liweijia.com:28033';
// const PROXY_API = 'http://aojia.sales-local.liweijia.com:8088';
export default {
  targets: {
    ie: 9
  },
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      dll: false,
      hardSource: false,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ],
      },
      pwa: {
        manifestOptions: {
          srcPath: 'manifest.json'
        },
      }
    }],
  ],
  theme: "./theme.config.js",
  // 接口代理示例
  proxy: {
    "/security": {
      "target": `${PROXY_API}`,
      "changeOrigin": true,
      "secure": false,
      "origin": `${PROXY_API}`,
      "headers": {
        "host": `${PROXY_API}`
      }
    },
    "/services": {
      "target": `${PROXY_API}`,
      "changeOrigin": true,
      "origin": `${PROXY_API}`,
      "headers": {
        "host": `${PROXY_API}`
      }
    },
    "/api": {
      "target": `${PROXY_API}`,
      "changeOrigin": true,
      "origin": `${PROXY_API}`,
      "headers": {
        "host": `${PROXY_API}`
      }
    },
  },
  alias: {
    themes: resolve(__dirname, './src/themes'),
    components: resolve(__dirname, "./src/components"),
    utils: resolve(__dirname, "./src/utils"),
    config: resolve(__dirname, "./src/utils/config"),
    enums: resolve(__dirname, "./src/utils/enums"),
    services: resolve(__dirname, "./src/services"),
    models: resolve(__dirname, "./src/models"),
    routes: resolve(__dirname, "./src/routes"),
  }
}
