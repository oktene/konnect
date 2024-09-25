import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authHandler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                const { email, password } = credentials;

                try {
                    // Enviar credenciais para sua API de autenticação
                    const response = await fetch(`process.env.API_BASE_URL/sign-in`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email, password }),
                    });

                    const data = await response.json();

                    if (response.ok && data.user) {
                        return {
                            id: data.user.id,
                            name: data.user.name,
                            email: data.user.email,
                        };
                    } else {
                        return null;
                    }
                } catch (error) {
                    console.error('Error during authentication:', error);
                    return null;
                }
            },
        }),
        // Adicione outros provedores conforme necessário
    ],
    pages: {
        signIn: '/auth/sign-in',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    id: token.id as number,
                    email: token.email as string,
                    name: token.name as string,
                };
            }
            return session;
        },
    },
});

export { authHandler as GET, authHandler as POST };