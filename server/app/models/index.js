import mongoose from 'mongoose';
import UserSchema from './schemas/User';
import RoleSchema from './schemas/Role';

const User = mongoose.model('Users', UserSchema);
const Role = mongoose.model('ROles', RoleSchema);

export {
  User,
  Role
}
