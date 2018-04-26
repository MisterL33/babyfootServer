/**
 * MessageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    index: async function(req, res){
        var messages = await Messages.find()
            .sort([
            { createdAt: 'ASC' },
        ]);

        return res.json(messages);
    },

    send: async function (req, res){
        // if(_.isUndefined(req.param('email'))){
        //     return res.badRequest('Pas de mail défini');
        // }
        // if(_.isUndefined(req.param('password'))){
        //     return res.badRequest('Pas de password défini');
        // }
        // if(req.param('password').length < 10){
        //     return res.badRequest('Mot de passe trop court');
        // }

        console.log(req.param('message'))


        var message = await sails.helpers.createMessage({
            username: req.param('username'),
            message: req.param('message')

        });

        // var token = jwt.sign({user: user.id },sails.config.jwt.jwtSecret, {expiresIn: sails.config.jwt.jwtExpiresIn});
        return res.ok(message);

    }
};

