import prisma from "../../../../db";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";


const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRETE || 'Abacabb22',
};

const jwtStrategy = new Strategy(opts, async (payload, done) => {
  const user = await prisma.user.findUnique({
    where: {
      id: payload.id,
    },
  });
  if (user) {
    return done(null, user);
  }
  return done(null, false);
});

export default jwtStrategy
