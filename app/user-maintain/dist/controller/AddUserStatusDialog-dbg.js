sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("ein.codes.admin.usermaintain.controller.AddUserStatusDialog", {

        name: "ein.codes.admin.usermaintain.view.fragments.AddUserStatus",

        onAfterClose(event) {
            event.getSource().destroy();
        },

        onStatusCodeChange(event) {
            const input = event.getSource();
            const value = input.getValue();
            if (value.length > 2) {
                input.setValueState(sap.ui.core.ValueState.Error);
                return;
            }
            input.setValueState();
        },

        onCancelPress(event) {
            event.getSource().getParent().close();
        },

        onConfirmPress(event) {
            const messageStripMandatory = this.byId("messagestrip-mandatory");
            const inputStatusCode = this.byId("input-status-code");
            const inputStatusName = this.byId("input-status-name");

            const statusCodeState = inputStatusCode.getValueState();
            const statusCode = inputStatusCode.getValue();
            const statusName = inputStatusName.getValue();
            const dialog = event.getSource().getParent();

            messageStripMandatory.setVisible(false);

            if (!statusCode || !statusName) {
                return messageStripMandatory.setVisible(true);
            }

            if (statusCodeState === sap.ui.core.ValueState.Error) {
                return;
            }

            dialog.close();

            this.userService.createUserStatus({
                model: this.getModel(),
                userStatusData: {
                    name: statusName,
                    ID: statusCode,
                }
            });
        },

    });

});
