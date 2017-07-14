"use strict";
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_js_1 = require('./app.module.js');
// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_js_1.AppModule);
//# sourceMappingURL=main.js.map