export type Role = 'user' | 'admin';

export interface AuthUser {
  email: string;
  fullName: string;
  role: Role;
  token: string; 
}
