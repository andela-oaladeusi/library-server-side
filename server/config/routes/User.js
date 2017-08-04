import express from 'express';
import { User } from '../../app/controllers';

const userRoute = express.Router();

userRoute.route('/')
.post(User.create)
.get(User.index);


export default userRoute;
