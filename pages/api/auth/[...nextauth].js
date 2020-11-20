import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    // OAuth authentication providers...
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Enter your Username" },
        password: {  label: "Password", type: "password", placeholder:"Enter your Password" }
      },
      authorize: async (credentials) => {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: 'J Smith', permission: 'Admin'}
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return Promise.resolve(user)
        } else {
          // If you return null or false then the credentials will be rejected
          return Promise.resolve(null)
          // You can also Reject this callback with an Error or with a URL:
          // return Promise.reject(new Error('error message')) // Redirect to error page
          // return Promise.reject('/path/to/redirect')        // Redirect to a URL
        }
      }
    })
  ],
  // Optional SQL or MongoDB database to persist users
  database: process.env.DATABASE_URL,  
  }


export default (req, res) => NextAuth(req, res, options)