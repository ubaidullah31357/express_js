import { type Request, type Response, type NextFunction } from "express";

function userAuthentication(req: Request, res: Response, next: NextFunction) {
  console.log(`Username: "Ubaid Ullah"`);
  console.log(`Email: "ubaidullah31@gmail.com"`);
  console.log(`Password: "123456"`);
  next();
}

export default userAuthentication;
