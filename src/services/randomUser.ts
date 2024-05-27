import axios from 'axios';
import { User } from '../config/types/types';

export class RandomUserService {
  serviceUrl: string;
  headers: {};
  _requestConfig: {};

  constructor() {
    this.serviceUrl = `https://randomuser.me/api/`;
    this.headers = {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'pragma': 'no-cache',
      'Accept': 'application / json'
    };

    this._requestConfig = {
      headers: this.headers
    };
  }

  async getUser(options: {} = {}): Promise<any> {
    let endpoint = ''
    let reqConfig = {
      params: options
    };
    return axios.get(`${this.serviceUrl}/${endpoint}`, reqConfig)
      .then(res => res.data)
      .catch(err => {
        if (err && err.response) {
          throw err.response.data;
        }
        throw err;
      });
  }
}
