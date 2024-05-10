const AUTH_GOOGLE_ID = process.env.AUTH_GOOGLE_ID as string;
const AUTH_GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET as string;
const AUTH_SECRET = process.env.AUTH_SECRET as string;

const Environment = {
  AUTH_GOOGLE_ID,
  AUTH_GOOGLE_SECRET,
  AUTH_SECRET,
};

export default Environment;
