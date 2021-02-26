export interface credentials {
   username: string;
   password: string;
}

export interface newUser {
   firstName: string;
   lastName: string;
   email: string;
   username: string;
   password: string;
   confirmedPassword: string;
}

export interface user {
   id: number;
   username: string;
   email: string;
}

export interface action {
   type: string;
   user: userState;
}

export interface userState {
   user: user|null;
   loading: boolean;
}

export interface accountType {
   id: number;
   type: string;
}

export interface account {
   id: number;
   type: accountType;
   description: string;
   balance: number;
   userId: number;
}

export interface accounts {
   accounts: account[];
}