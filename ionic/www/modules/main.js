/**
 * Created by yulin on 2015/4/15.
 */
require.config({
  //配置路径
  paths:{
    'ionic': '../lib/ionic/js/ionic.bundle',   //已经引入了angular
    'jquery': "../lib/jquery/jquery-1.11.1.min"
  },
  //这个配置是你在引入依赖的时候的包名
  shim:{
    'ionic': {
      deps: ['jquery']
    }
  }
})


require(['../modules/app.js'], function () {
  'use strict';
  angular.bootstrap(document, ['app']);//模块加载完毕，再手动启动

});