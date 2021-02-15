/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"opensap/ui5-week2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
