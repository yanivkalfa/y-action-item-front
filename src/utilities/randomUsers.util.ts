import { RandomUserService } from '../services/randomUser';
import { User } from '../config/types/types';
import { UsersService } from '../services/Users';
const rs = new RandomUserService();
const userService = new UsersService();

export async function getUsers(options: {} = {}):Promise<User[]>{
  let resultUsers = await rs.getUser(options);
  let users: User[] = [];
  for (let key in resultUsers.results) {
    let currentUser = resultUsers.results[key];
    let street = currentUser.location.street;
    let user: User = {
      title: currentUser.name.title,
      first: currentUser.name.first,
      last: currentUser.name.last,
      email: currentUser.email,
      dob: currentUser.dob.date,
      street: `${street.name} ${street.null}`,
      city: currentUser.location.city,
      state: currentUser.location.state,
      country: currentUser.location.country,
      phone: currentUser.phone,
      gender: currentUser.gender,
      picture: currentUser.picture,
      isSaved: false
    };
    users.push(user)
  }
  return users;
}

export async function getSavedUsers(options: {} = {}): Promise<any> {
  let resultUsers = await userService.getAllUsers() as User[];
  let users: User[] = [];
  for (let key in resultUsers) {
    let currentUser = resultUsers[key];
    let user: User = {
      title: currentUser.title,
      first: currentUser.first,
      last: currentUser.last,
      email: currentUser.email,
      dob: currentUser.dob,
      street: currentUser.street,
      city: currentUser.city,
      state: currentUser.state,
      country: currentUser.country,
      phone: currentUser.phone,
      gender: currentUser.gender,
      picture: currentUser.picture,
      isSaved: true
    };
    users.push(user)
  }
  return users;
}