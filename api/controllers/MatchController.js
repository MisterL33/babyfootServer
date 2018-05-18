/**
 * MatchController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    join: async function(req,res){
        var match = await Match.findOne({
            babyFoot: 1
        });

        if (!match) {
            match = await Match.create({
                babyFoot: 1
            });
        }

        return res.ok(match);
    }

};

