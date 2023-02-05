sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("ein.codes.admin.usermaintain.controller.Main", {
        onInit: function () { },


        onTilePress: function (event) {
            // debugger
            const { routeName } = event.getSource().data();
            const route = this.getRouter().getRoute(routeName);

            if (!route) {
                sap.m.MessageToast.show("Problem during app navigation! Contact the system admistrator.")
                throw new Error("route not found during onTilePress event");
            }
            this.getRouter().navTo(routeName);
        }

    });
});
