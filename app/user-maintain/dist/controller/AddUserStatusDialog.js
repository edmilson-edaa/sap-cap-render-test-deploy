sap.ui.define(["./BaseController"],function(e){"use strict";return e.extend("ein.codes.admin.usermaintain.controller.AddUserStatusDialog",{name:"ein.codes.admin.usermaintain.view.fragments.AddUserStatus",onAfterClose(e){e.getSource().destroy()},onStatusCodeChange(e){const t=e.getSource();const s=t.getValue();if(s.length>2){t.setValueState(sap.ui.core.ValueState.Error);return}t.setValueState()},onCancelPress(e){e.getSource().getParent().close()},onConfirmPress(e){const t=this.byId("messagestrip-mandatory");const s=this.byId("input-status-code");const a=this.byId("input-status-name");const r=s.getValueState();const n=s.getValue();const o=a.getValue();const u=e.getSource().getParent();t.setVisible(false);if(!n||!o){return t.setVisible(true)}if(r===sap.ui.core.ValueState.Error){return}u.close();this.userService.createUserStatus({model:this.getModel(),userStatusData:{name:o,ID:n}})}})});