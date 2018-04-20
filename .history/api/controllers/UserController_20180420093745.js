/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    login: async function (req, res) {

        var user = await User.findOne({email: req.param('email')});

        if(!user){
            return res.notFound();
        }
    },

    logout: async function (req, res){

    },

    register: async function (req, res){

    }


};

