import http from './httpService';

class DatamindUserConfigurationService {
  public async getAll() {
    const result = await http.get('/DatamindUserConfiguration/GetAll');
    return result;
  }
}

export default new DatamindUserConfigurationService();
