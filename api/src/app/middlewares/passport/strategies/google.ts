import { Strategy } from "passport-google-oauth20";
import prisma from "../../../../db";
import passport from "..";
import sendemail from "../../../controller/enviomail";

const googleStrategy = new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: "/auth/google/success",
  },
  async function (accestoken, refreshToken, profile, done) {
    const emailObj = profile.emails?.find(({ verified }) => verified);
    if (!emailObj) {
      return done(null, false);
    }
    const email = emailObj.value;
    let user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      user = await prisma.user.create({
        data: {
          name: profile.name?.givenName || "",
          surname: profile.name?.familyName || "",
          email: email,
        },
      });
      const name = String(profile.name?.givenName);
      const surname = String(profile.name?.familyName);
      sendemail({ email: email, name: name, surname: surname });
    }
    return done(null, user);
  }
);

export default googleStrategy;
