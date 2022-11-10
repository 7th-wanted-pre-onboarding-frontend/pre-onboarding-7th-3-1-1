import { AxiosResponse } from 'axios';
import request from '../server/request';
import { Sicks } from '../types/Sick';

class SickService {
  getSick(keyword: string): Promise<AxiosResponse<Sicks>> {
    return request.get<Sicks>('/sick', {
      params: {
        q: keyword
      }
    });
  }

  isExpired(date: number) {
    const current = Date.now();
    const diff = current - date;
    const limit = 60 * 60 * 1000;
    return diff >= limit;
  }
}

export default new SickService();
