import { GetCurrentLoginInformations } from './dto/getCurrentLoginInformations';
import http from '../httpService';

declare var datamind: any;

class SessionService {
  public async getCurrentLoginInformations(): Promise<GetCurrentLoginInformations> {
    let result = await http.get('api/services/app/Session/GetCurrentLoginInformations', {
      headers: {
        'Datamind.TenantId': datamind.multiTenancy.getTenantIdCookie(),
      },
    });

    return result.data.result;
  }
}

export default new SessionService();