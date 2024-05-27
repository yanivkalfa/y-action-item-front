export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  title: string;
  first: string;
  last: string;
  email: string;
  dob: Date
  street: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  gender: string;
  picture: Picture;
  isSaved?: boolean
}

export interface UserState {
  list: User[]
}