(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{162:function(t,e,n){t.exports=n.p+"assets/img/wxsdk.de0b302a.png"},172:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://lbs.qq.com/guides/startup.html",target:"_blank",rel:"noopener noreferrer",default:"[object Object]"}},[t._v("微信位置服务官网"),s("OutboundLink")],1),t._v(" 在这里下载对应的微信小程序的sdk包")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://lbs.qq.com/console/mykey.html",target:"_blank",rel:"noopener noreferrer",default:"[object Object]"}},[t._v("微信位置服务key申请"),s("OutboundLink")],1),t._v(" 在这里申请对应的key\n然后在对应的key管理里面，记得选中这2个"),s("img",{attrs:{src:n(162),alt:"key设置"}})]),t._v(" "),s("li",[t._v("在taro项目src目录下新建utils文件夹，然后把下载的sdk 解压放进去。")]),t._v(" "),s("li",[t._v("不要忘记在微信小程序的后台request合法域名中添加 https://apis.map.qq.com")]),t._v(" "),s("li",[t._v("在组件中直接使用")])]),t._v(" "),t._m(2)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"taro"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#taro","aria-hidden":"true"}},[this._v("#")]),this._v(" Taro")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"taro-接入微信位置服务sdk的方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#taro-接入微信位置服务sdk的方法","aria-hidden":"true"}},[this._v("#")]),this._v(" taro 接入微信位置服务sdk的方法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("const QQMapWX = require('../../utils/qqmap-wx-jssdk');\nexport interface HomeState {\n  location: any;\n  qqMapSdk: any;\n}\n\nclass Index extends Component<{}, HomeState> {\n  constructor(props: {}) {\n    super(props);\n    // 这里输入自己申请的key\n    const qqMapSdk = new QQMapWX({ key: 'XXXXXXXXXXXXXX' });\n    this.state = {\n      location: '',\n      qqMapSdk: qqMapSdk\n    };\n  }\n\n  config: Config = {\n    navigationBarTitleText: '流年的樱花逝',\n    navigationBarBackgroundColor: '#187b80'\n  };\n\n  componentDidMount() {\n    const { qqMapSdk } = this.state;\n    let _this = this;\n    Taro.getLocation()\n      .then(res => {\n        qqMapSdk.reverseGeocoder({\n          location: { latitude: res.latitude, longitude: res.longitude },\n          success: function(res) {\n            _this.setState({ location: res.result.address });\n          },\n          fail: function(res) {\n            console.log(res);\n          }\n        });\n      })\n      .catch(error => {\n        console.log(error);\n      });\n  }\n  ....\n")])])])}],!1,null,null,null);a.options.__file="README.md";e.default=a.exports}}]);