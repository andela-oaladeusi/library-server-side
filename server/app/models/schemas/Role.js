import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  name: {
    type: String
  }
});

export default RoleSchema;
