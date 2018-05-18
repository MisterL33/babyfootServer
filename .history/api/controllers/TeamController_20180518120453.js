/**
 * TeamController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  register: async function (req, res) {

    console.log(req.body)
      return res.ok();
    }
  },
  

  join: async function(req,res){



    User.update(
      {id: req.body.id}, //this is find
      {team: req.body.team} // this is update
    ).exec(function(err, updatedModel) {
      if(err)
        console.error(err);
      console.log(updatedModel);
    });

    return res.ok();
  }

};
