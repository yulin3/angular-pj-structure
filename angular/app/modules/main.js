/**
 * Created by yulin on 2015/4/15.
 */
require.config({
  //配置angular的路径
  paths:{
    "angular":"../lib/angular/angular",
    "angular-route":"../lib/angular-route/angular-route"
  },
  //这个配置是你在引入依赖的时候的包名
  shim:{
    "angular":{
      exports:"angular"
    },
    "angular-route":{
      exports:"angular-route",
      deps: ['angular']
    }
  }
})


require(['modules/app.js'], function () {
  'use strict';
  angular.bootstrap(document, ['app']);//模块加载完毕，再手动启动

});