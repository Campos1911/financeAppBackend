import jwt from "jsonwebtoken";

const secret = "your_jwt_secret";

export const signToken = (payload: object) => {
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};
