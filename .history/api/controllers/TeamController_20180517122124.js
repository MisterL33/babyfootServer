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

      //on link manuellement la team a l'user

      await User.update({id:req.body.owner})
      .set({team:team.id});

      return res.ok(team);
    }



  },

};
