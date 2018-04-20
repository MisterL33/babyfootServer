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

    var token = jwt.sign({user: user.id},sails.jwt.jwtSecret, {expiresIn: sails.jwt.jwtExpiresIn});
    return res.ok(token);
  },



  register: async function (req, res){
    if(_.isUndefined(req.param('email'))){
        return res.badRequest('Pas de mail défini');
    }
    if(_.isUndefined(req.param('password'))){
        return res.badRequest('Pas de password défini');
    }
    if(req.param('password').length < 10){
        return res.badRequest('Mot de passe trop court');
    }


    var user = await.sails.helpers.createUser({
        email: req.param('email');
        password: req.param('password');
    });
    
    var token = jwt.sign({user: user.id},sails.jwt.jwtSecret, {expiresIn: sails.jwt.jwtExpiresIn});
    return res.ok(token);

  }


};

