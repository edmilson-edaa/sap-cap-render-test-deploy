sap.ui.define([
    "./BaseController",
    "./AddUserStatusDialog",
], function (BaseController, AddUserStatusDialog) {
    "use strict";

    return BaseController.extend("ein.codes.admin.usermaintain.controller.UserStatus", {

        onInit() {
            this.AddUserStatusDialog = new AddUserStatusDialog();
            const viewModel = this.createJsonModel({
                isEditable: false,
                isModified: false,
            });
            this.setModel(viewModel, "userStatusView");
        },

        onAddPress() {
            const { name } = this.AddUserStatusDialog;
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
