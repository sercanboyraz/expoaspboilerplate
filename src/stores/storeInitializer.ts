import AccountStore from "./accountStore";
import AuthenticationStore from "./authenticationStore";
import RoleStore from "./roleStore";
import SessionStore from "./sessionStore";
import TenantStore from "./tenantStore";
import UserStore from "./userStore";

export default function initializeStores() {
  return {
    authenticationStore: new AuthenticationStore(),
    roleStore: new RoleStore(),
    tenantStore: new TenantStore(),
    sessionStore: new SessionStore(),
    accountStore: new AccountStore(),
    userStore: new UserStore()
  };
}
