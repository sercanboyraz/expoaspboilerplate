import { action, makeObservable, observable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppConsts from './../lib/appconst';
import LoginModel from '../models/Login/loginModel';
import tokenAuthService from '../services/tokenAuth/tokenAuthService';
import { } from './sessionStore';

class AuthenticationStore {
  constructor() {
    makeObservable(this);
  }

  @observable loginModel: LoginModel = new LoginModel();
  @observable token: string = "";
  @observable encryptedAccessToken: string = "";
  @observable userId: number = 0;

  get isAuthenticated(): boolean {
    if (this.userId <= 0) return false;
    return true;
  }

  @action.bound
  public async login(model?: LoginModel) {
    let result = await tokenAuthService.authenticate({
      userNameOrEmailAddress: model.userNameOrEmailAddress,
      password: model.password,
      rememberClient: model.rememberMe,
    });

    if (model.rememberMe) {
      await AsyncStorage.setItem('aspboilerplate:token', result.accessToken);
      await AsyncStorage.setItem('aspboilerplate:' + AppConsts.authorization.encrptedAuthTokenName, result.encryptedAccessToken);
      await AsyncStorage.setItem('aspboilerplate:userId', result.userId.toString());
      await AsyncStorage.setItem('aspboilerplate:tenantId', result.userId.toString());
    }
    this.token = result.accessToken;
    this.encryptedAccessToken = result.encryptedAccessToken;
    this.userId = result.userId;
  }

  @action.bound
  logout() {
    AsyncStorage.clear();
    sessionStorage.clear();
  }
}
export default AuthenticationStore;
