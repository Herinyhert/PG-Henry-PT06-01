import prisma from "../../db";
import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../config/config";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtsecret,
};

export default new Strategy(opts, async (payload, done) => {
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
