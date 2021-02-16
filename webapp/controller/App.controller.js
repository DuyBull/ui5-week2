sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,
	formatter,
	Filter,
	FilterOperator) {
		"use strict";

		return Controller.extend("opensap.ui5week2.controller.App", {
			formatter: formatter,

			onInit: function () {

			},

			onPress: function (sValue) {
				// sap.ui.require(["sap/m/MessageToast"], function (oMessage) {
				// 	oMessage.show("Searching...");
				// });

				sap.ui.require(["sap/m/MessageToast"], function (oMessage) {
					var oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
					oMessage.show(oResourceBundle.getText("search") + sValue);
				}.bind(this) );

				var sCity = this.byId('city').getValue(),
				sGenre    = this.byId('genre').getSelectedItem().getKey(),
				oCalendar = this.byId('calendar'),
				oRowBinding = oCalendar.getBinding("rows"),
				oFilterGenre,
				oFilterCity;

				
			}
		});
	});
