import dotenv from 'dotenv';

dotenv.config({ silence: true });

let dbUrl = null;
const port = process.env.PORT || 3000;
const secret = process.env.SECRET || 'andela';

if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.DATABASE_URL_TEST
}

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  dbUrl = process.env.DATABASE_URL || 'mongodb://localhost/LibraryDB'
}
if (process.env.NODE_ENV === 'production') {
  dbUrl = process.env.DATABASE_URL
}

export {
  dbUrl,
  port,
  secret
}
