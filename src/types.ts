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
   user: user|null;
}