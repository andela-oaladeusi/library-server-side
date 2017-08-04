import express from 'express';
import { Role } from '../../app/controllers';

const roleRoute = express.Router();

roleRoute.route('/')
.post(Role.create)
.get(Role.index);


export default roleRoute;
