/**
 * TeamController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  register: async function (req, res) {

    var team = await Team.findOne({ nom: req.body.nom });
    
    if (!team) { // si la team n'existe pas déjà
 
      if (_.isUndefined(req.param('nom'))) { // et si le nom de team est entré
        return res.badRequest('Pas de nom défini');
      }
    
      team = await sails.helpers.createTeam({ // on créer une nouvelle team
        owner: req.param('owner'),
        nom: req.param('nom')
      });
      console.log(team);
      //on link manuellement la team a l'user
      User.update(
        {id: req.body.owner}, //this is find
        {team: team.id} // this is update
      ).exec(function(err, updatedModel) {

      });
      return res.ok(team);
    }
  },
  

  join: async function(req,res){



    User.update(
      {id: req.body.id}, //this is find
      {team: req.body.team} // this is update
    ).exec(function(err, updatedModel) {

    });

    return res.ok();
  }

  

};
