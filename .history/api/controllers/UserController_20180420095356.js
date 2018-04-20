/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var bcrypt = require('bcryptjs');

module.exports = {

  login: async function (req, res) {

    var user = await User.findOne({email: req.param('email')});

    if(!user){
      return res.notFound();
    }

    await bcrypt.compare(req.param('password', user.password));

    var token = jwt.sign({user: user.id},"adlihazieazhaziodanzioebazidbz", {expiresIn: 3600});
  },

  logout: async function (req, res){

  },

  register: async function (req, res){

  }


};

