/**
 * TeamController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  register: async function (req, res) {

    var team = await Team.findOne({ nom: req.body.nom });

    if (!team) {

      if (_.isUndefined(req.param('nom'))) {
        return res.badRequest('Pas de nom défini');
      }

      team = await sails.helpers.createTeam({
        owner: req.param('owner'),
        nom: req.param('nom')
      });

      return res.ok(team);
    }

  },

  check: async function (req, res) {

    var team = await Team.findOne({ team: req.body.userId });
    

    if (!team) {
        return res.ok(false); // l'user n'a pas de team
    }else{
        return res.ok(true); // l'user a une team
    }

  }
};
