sap.ui.define([
	// "sap/ui/base/ManagedObject"
], function(
	// ManagedObject
) {
	"use strict";

	// return ManagedObject.extend("opensap.ui5week2.model.formatter", {
	// });
	return {
		formatDate: function (sValue) {
			if (!sValue) {
				return null
			}

			return new Date(sValue);
		}
	}
});