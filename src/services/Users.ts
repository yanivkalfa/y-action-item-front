import axios from 'axios';
import { User } from '../config/types/types';

export class UsersService {
  serviceUrl: string;
  headers: {};
  _requestConfig: {};

  constructor() {
    this.serviceUrl = `http://localhost:8000/user`;
    this.headers = {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'pragma': 'no-cache'
    };

    this._requestConfig = {
      headers: this.headers
    };
  }

  getAllUsers(): Promise<unknown> {
    let endpoint = ``
    return axios.get(`${this.serviceUrl}/${endpoint}`, {})
      .then(res => res.data)
      .catch(err => {
        if (err && err.response) {
          throw err.response.data;
        }
        throw err;
      });
  }

  saveUser(user: User):Promise<unknown> {
    let endpoint = ''
    let { isSaved, ...userDetails } = user;
    return axios.post(`${this.serviceUrl}/${endpoint}`, userDetails, {})
      .then(res => res.data)
      .catch(err => {
        if (err && err.response) {
          throw err.response.data;
        }
        throw err;
      });
  }

  deleteUser(email: string): Promise<unknown> {
    let endpoint = `${email}`
    return axios.delete(`${this.serviceUrl}/${endpoint}`, {})
      .then(res => res.data)
      .catch(err => {
        if (err && err.response) {
          throw err.response.data;
        }
        throw err;
      });
  }

  updateSavedUser(email: string, user: User): Promise<unknown> {
    let endpoint = `${email}`;
    let { isSaved, ...userDetails } = user;
    return axios.patch(`${this.serviceUrl}/${endpoint}`, userDetails, {})
      .then(res => res.data)
      .catch(err => {
        if (err && err.response) {
          throw err.response.data;
        }
        throw err;
      });
  }
}
