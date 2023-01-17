import { action, makeObservable, observable } from 'mobx';

import IsTenantAvaibleOutput from '../services/account/dto/isTenantAvailableOutput';
import accountService from '../services/account/accountService';

class AccountStore {
  constructor() {
      makeObservable(this);
  }
  
  @observable tenant: IsTenantAvaibleOutput = new IsTenantAvaibleOutput();

  @action.bound
  public isTenantAvailable = async (tenancyName: string) => {
    this.tenant = await accountService.isTenantAvailable({ tenancyName: tenancyName });
  };
}

export default AccountStore;
