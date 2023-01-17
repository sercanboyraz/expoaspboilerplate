import { action, makeObservable, observable } from 'mobx';

import AppConsts from './../lib/appconst';
import LoginModel from '../models/Login/loginModel';
import tokenAuthService from '../services/tokenAuth/tokenAuthService';

declare var datamind: any;

class AuthenticationStore {
  constructor() {
      makeObservable(this);
  }
  
  @observable loginModel: LoginModel = new LoginModel();

  get isAuthenticated(): boolean {
    if (!datamind.session.userId) return false;

    return true;
  }

  @action.bound
  public async login(model: LoginModel) {
    let result = await tokenAuthService.authenticate({
      userNameOrEmailAddress: model.userNameOrEmailAddress,
      password: model.password,
      rememberClient: model.rememberMe,
    });

    var tokenExpireDate = model.rememberMe ? new Date(new Date().getTime() + 1000 * result.expireInSeconds) : undefined;
    datamind.auth.setToken(result.accessToken, tokenExpireDate);
    datamind.utils.setCookieValue(AppConsts.authorization.encrptedAuthTokenName, result.encryptedAccessToken, tokenExpireDate, datamind.appPath);
  }

  @action.bound
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    datamind.auth.clearToken();
  }
}
export default AuthenticationStore;
