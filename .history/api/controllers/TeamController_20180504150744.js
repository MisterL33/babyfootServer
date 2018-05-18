/**
 * TeamController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: async function (req, res) {
        
            var team = await Team.findOne({nom: req.body.nom});
        
            if(!user){
              return res.notFound();
            }
        
            await bcrypt.compareSync((req.body.password), user.password);
        
            var token = jwt.sign({user: user.id},sails.config.jwt.jwtSecret, {expiresIn: sails.config.jwt.jwtExpiresIn});
            var obj = {
              id: user.id,
              email: user.email,
              nom: user.nom,
              prenom: user.prenom,
              token: token
            };
            return res.ok(obj);
          },

};

