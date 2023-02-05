sap.ui.define([], function () {
    "use strict";

    return {
        createUserStatus({ model, userStatusData }) {
            model.create("/UserStatus", userStatusData, {
                success: (response) => {
                    // debugger;
                    console.log("ok");
                },
                error: (response) => {
                    // debugger;
                    console.log("error");
                },
            });
        },
        deleteUserStatusByPath({ model, resourcePath }) {
            model.remove(resourcePath, {
                success: (response) => {
                    // debugger;
                    console.log("ok");
                },
                error: (response) => {
                    // debugger;
                    console.log("error");
                },
            });
        },
    }
});
