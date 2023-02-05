sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"./service/UserService",
], function (Controller, JSONModel, UserService) {
	"use strict";

	return Controller.extend("ein.codes.admin.usermaintain.controller.BaseController", {
		userService: UserService,

		getRouter() {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},

		getModel(sName) {
			return this.getView().getModel(sName);
		},

		setModel(oModel, sName) {
			return this.getView().setModel(oModel, sName);
		},

		getResourceBundle() {
			return this.getOwnerComponent().getModel("i18n").getResourceBundle();
		},

		createJsonModel(data) {
			return new JSONModel(data);
		},

	});

});