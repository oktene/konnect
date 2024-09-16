import NextAuth from 'next-auth';
import { DefaultSession, DefaultUser } from 'next-auth';

// Adicione propriedades ao tipo `User` do NextAuth
declare module 'next-auth' {
  interface User {
    id: number;
    name: string;
    email: string;
  }

  interface Session {
    user: {
      id: number;
      name: string;
      email: string;
    } & DefaultSession['user'];
  }

  interface Token {
    id: number;
    name: string;
    email: string;
  }
}