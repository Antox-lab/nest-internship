export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface FindUser {
  firstName: string;
}

export interface FindId {
  id: number;
}
