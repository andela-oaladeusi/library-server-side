import * as db from '../models';

const Role = {

  create(req, res) {
    let newRole = new db.Role(req.body);
    newRole.save(function(err, result){
      if (err) {
        return res.send(err);
      }
      return res.send(result);
    })
  },

  index(req, res) {
    db.Role.find({}, function(err, roles){
      if(err) {
        return res.send(err);
      }
      return res.send(roles);
    });
  }

}

export default Role;
