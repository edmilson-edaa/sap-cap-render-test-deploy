sap.ui.define([],function(){"use strict";return{createUserStatus({model:e,userStatusData:r}){e.create("/UserStatus",r,{success:e=>{console.log("ok")},error:e=>{console.log("error")}})},deleteUserStatusByPath({model:e,resourcePath:r}){e.remove(r,{success:e=>{console.log("ok")},error:e=>{console.log("error")}})}}});