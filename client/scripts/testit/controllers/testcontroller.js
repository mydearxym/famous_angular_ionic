'use strict';
var controllername = 'testcontroller';

module.exports = function(app) {
    /*jshint validthis: true */
    var deps = [];

    function controller() {
      var self = this;
      self.msg = 'data binding';

      self.functest = function(){
        self.msg = 'data changel';
        console.log("functest");
      }

      self.functest();
    }

    controller.$inject = deps;
    app.controller(app.name + '.' + controllername, controller);
};

//var tabs = [
//  { title: '首页', content: "Tabs will become paginated if there isn't enough room for them."},
//  { title: '第2页', content: "You can swipe left and right on a mobile device to change tabs."},
//  { title: '第3页', content: "You can bind the selected tab via the selected attribute on the md-tabs element."},
//  { title: '第4页', content: "If you set the selected tab binding to -1, it will leave no tab selected."},
//  { title: '第5页', content: "If you're still reading this, you should just go check out the API docs for tabs!"}
//];
//
//self.tabs = tabs;
//self.selectedIndex = 2;