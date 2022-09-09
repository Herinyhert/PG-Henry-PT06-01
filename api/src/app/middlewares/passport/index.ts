import passport from 'passport';
import googleStrategy from './strategies/google';
import jwtStrategy from './strategies/jwt';

const auth = passport
auth.use(jwtStrategy)
auth.use(googleStrategy)

export default auth