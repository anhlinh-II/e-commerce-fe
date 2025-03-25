export interface Address {
     id?: number;
     address: string;
     name: string;
     mobile: string;
     pinCode: string;
     locality: string;
     city: string;
     region: string;
}

export enum UserRole {
     ROLE_CUSTOMER = 'ROLE_CUSTOMER',
     ROLE_ADMIN = 'ROLE_ADMIN',
     ROLE_SELLER = 'ROLE_SELLER'
}

export interface User {
     id?: number;
     password: string;
     email: string;
     fullName: string;
     mobile?: string;
     role: UserRole;
     addresses?: Address[];
}

export interface UserState {
     user: User | null;
     loading: boolean;
     error: string | null;
     profileUpdated: boolean;
}