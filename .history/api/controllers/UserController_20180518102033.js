/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


module.exports = {

  login: async function (req, res) {

    var user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.notFound();
    }

    await bcrypt.compareSync((req.body.password), user.password);

    var token = jwt.sign({ user: user.id }, sails.config.jwt.jwtSecret, { expiresIn: sails.config.jwt.jwtExpiresIn });
    var obj = {
      id: user.id,
      email: user.email,
      nom: user.nom,
      prenom: user.prenom,
      team: user.team,
      token: token
    };
    return res.ok(obj);
  },



  register: async function (req, res) {
    if (_.isUndefined(req.param('email'))) {
      return res.badRequest('Pas de mail défini');
    }
    if (_.isUndefined(req.param('password'))) {
      return res.badRequest('Pas de password défini');
    }
    if (req.param('password').length < 10) {
      return res.badRequest('Mot de passe trop court');
    }


    var user = await sails.helpers.createUser({
      email: req.param('email'),
      nom: req.param('nom'),
      prenom: req.param('prenom'),
      password: req.param('password'),
      naissance: req.param('naissance'),
      sexe: req.param('sexe')

    });

    var token = jwt.sign({ user: user.id }, sails.config.jwt.jwtSecret, { expiresIn: sails.config.jwt.jwtExpiresIn });
    return res.ok(token);

  },

  update: async function (req, res) {


    var user = await User.findOne({ id: req.body.id }).populate('team');;
    
    if (!user) {
      return res.notFound();
    }


    var token = jwt.sign({ user: user.id }, sails.config.jwt.jwtSecret, { expiresIn: sails.config.jwt.jwtExpiresIn });
    var obj = {
      id: user.id,
      email: user.email,
      nom: user.nom,
      prenom: user.prenom,
      team: user.team,
      token: token
    };

    console.log(obj);
    return res.ok(obj);

  }


};

