import jwt from 'jsonwebtoken';

const JWT_SECRET = "ngomanage"; // Use a strong secret in production

export const verifyVolunteerToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: "Unauthorized: No token" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.volunteer = decoded; // attach decoded token
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
