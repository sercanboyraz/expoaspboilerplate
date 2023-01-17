import { action, makeObservable, observable } from 'mobx';

import { GetCurrentLoginInformations } from '../services/session/dto/getCurrentLoginInformations';
import sessionService from '../services/session/sessionService';

class SessionStore {
  constructor() {
    makeObservable(this);
  }
  
  @observable currentLogin: GetCurrentLoginInformations = new GetCurrentLoginInformations();

  @action.bound
  async getCurrentLoginInformations() {
    let result = await sessionService.getCurrentLoginInformations();
    this.currentLogin = result;
  }
}

export default SessionStore;
