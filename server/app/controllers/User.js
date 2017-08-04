import * as db from '../models';

const User = {

  create(req, res) {
    let newUser = new db.User(req.body);
    newUser.save(function(err, result){
      if (err) {
        return res.send(err);
      }
      return res.send(result);
    })
  },

  index(req, res) {
    db.User.find({}, function(err, users){
      if(err) {
        return res.send(err);
      }
      return res.send(users);
    });
  }

}

export default User;
