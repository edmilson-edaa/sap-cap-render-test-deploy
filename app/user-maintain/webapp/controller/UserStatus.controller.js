sap.ui.define([
    "./BaseController",
    "./addUserStatusDialog",
], function (BaseController, addUserStatusDialog) {
    "use strict";

    return BaseController.extend("ein.codes.admin.usermaintain.controller.UserStatus", {

        onInit() {
            this.addUserStatusDialog = new addUserStatusDialog();
            const viewModel = this.createJsonModel({
                isEditable: false,
                isModified: false,
            });
            this.setModel(viewModel, "userStatusView");
        },

        onAddPress() {
            const { name } = this.addUserStatusDialog;
            this.loadFragment({ name }).then((dialog) => dialog.open());
        },

        onListItemDeletePress(event) {
            const { listItem } = event.getParameters();
            const resourcePath = listItem.getBindingContextPath();
            this.userService.deleteUserStatusByPath({
                model: this.getModel(),
                resourcePath,
            })
        },


    });
});
