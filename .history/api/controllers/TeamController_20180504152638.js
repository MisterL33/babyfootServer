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



      var user = await sails.helpers.createTeam({
        id: req.param('id'),
        nom: req.param('nom'),



      });

      var token = jwt.sign({ user: user.id }, sails.config.jwt.jwtSecret, { expiresIn: sails.config.jwt.jwtExpiresIn });
      return res.ok(token);
    }



  },
}
