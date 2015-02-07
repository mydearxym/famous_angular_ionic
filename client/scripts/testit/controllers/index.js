'use strict';

module.exports = function(app) {
    // inject:start
    require('./testcontroller')(app);
    // inject:end
};