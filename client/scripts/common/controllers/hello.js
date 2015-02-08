'use strict';
var controllername = 'hello';

module.exports = function (app) {
  /*jshint validthis: true */

  var deps = [];

  function controller() {
    var vm = this;
    vm.message = 'hello famous';
    vm.callme = function(){
      alert("vm.callme");
    }

    var activate = function () {

    };
    activate();
  }

  controller.$inject = deps;
  app.controller(app.name + '.' + controllername, controller);
};