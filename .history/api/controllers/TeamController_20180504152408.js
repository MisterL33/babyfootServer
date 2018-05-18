/**
 * TeamController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function (req, res) {

    var team = await Team.findOne({ nom: req.body.nom });

    if (!team) {

      if (_.isUndefined(req.param('nom'))) {
        return res.badRequest('Pas de nom défini');
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
    }



  },
}
