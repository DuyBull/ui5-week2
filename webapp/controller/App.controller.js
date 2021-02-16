sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/core/UIComponent"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,
	formatter,
	Filter,
	FilterOperator,
	UIComponent,
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

				var sCity       = this.byId('city').getValue();
				var sGenre      = this.byId('genre').getSelectedItem().getKey();
				var oCalendar   = this.byId('calendar');
				var oRowBinding = oCalendar.getBinding("rows");
				var oFilterGenre;
				var oFilterCity;

				// Create filter 
				oFilterCity = sCity ? new Filter("info", FilterOperator.Contains, sCity) : null;
				oFilterGenre = sGenre ? new Filter("genre", FilterOperator.EQ, sGenre) : null;

				// Apply genre filter to rows
				oRowBinding.filter(oFilterGenre);

				// Apply city filter to row appointments
				var aRows = oCalendar.getAggregation("rows");
				aRows.forEach(function (oItem) {
					var oAppointmentsBinding = oItem.getBinding("appointments");
					oAppointmentsBinding.filter(oFilterCity);
				})
			},
			onAppointmentSelect: function (oAppointment) {
				var oContext = oAppointment.getBindingContext("movies");
				var sPath    = oContext.getPath();
				var aParameter = sPath.split("/");
				UIComponent.getRouterFor(this).navTo("Detail", {
					movieId: aParameter[2],
					appointmentId: aParameter[4]
				});
			}
		});
	});
