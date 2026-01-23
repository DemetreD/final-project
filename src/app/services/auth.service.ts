import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { AuthUser, Role } from '../models/auth';

type StoredUser = { email: string; fullName: string; password: string; role: Role };

const LS_USERS = 'fp_users';
const LS_AUTH  = 'fp_auth';

function loadUsers(): StoredUser[] {
  try {
    return JSON.parse(localStorage.getItem(LS_USERS) || '[]');
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(LS_USERS, JSON.stringify(users));
}

function makeFakeToken(email: string) {
  return btoa(`${email}:${Date.now()}:${Math.random()}`);
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<AuthUser | null>(this.readAuth());
  user$ = this.userSubject.asObservable();

  constructor() {
    this.ensureAdminSeed();
  }

  private readAuth(): AuthUser | null {
    try {
      return JSON.parse(localStorage.getItem(LS_AUTH) || 'null');
    } catch {
      return null;
    }
  }

  private writeAuth(user: AuthUser | null) {
    if (!user) localStorage.removeItem(LS_AUTH);
    else localStorage.setItem(LS_AUTH, JSON.stringify(user));
    this.userSubject.next(user);
  }

  private ensureAdminSeed() {
    const users = loadUsers();
    const exists = users.some(u => u.email === 'admin@admin.com');
    if (!exists) {
      users.push({
        email: 'admin@admin.com',
        fullName: 'Admin',
        password: 'admin123',
        role: 'admin'
      });
      saveUsers(users);
    }
  }

  isLoggedIn(): boolean {
    return !!this.userSubject.value?.token;
  }

  currentRole(): Role | null {
    return this.userSubject.value?.role ?? null;
  }

  register(fullName: string, email: string, password: string): Observable<AuthUser> {
    const users = loadUsers();
    const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) return throwError(() => new Error('Email already registered'));

    users.push({ fullName, email, password, role: 'user' });
    saveUsers(users);

    const authUser: AuthUser = { fullName, email, role: 'user', token: makeFakeToken(email) };
    this.writeAuth(authUser);

    return of(authUser);
  }

  login(email: string, password: string): Observable<AuthUser> {
    const users = loadUsers();
    const match = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!match) return throwError(() => new Error('Invalid email or password'));

    const authUser: AuthUser = {
      email: match.email,
      fullName: match.fullName,
      role: match.role,
      token: makeFakeToken(match.email)
    };

    this.writeAuth(authUser);
    return of(authUser);
  }

  logout() {
    this.writeAuth(null);
  }
}
