var bcrypt = require('bcryptjs');
module.exports = {


  friendlyName: 'Create user',


  description: '',


  inputs: {
    email: {
      type: 'string',

    },
    password: {
      type: 'string',
      
    },
    nom: {
      type: 'string',
      
    },
    prenom: {
      type: 'string',
    },
    sexe: {
      type: 'string',
      
    },
    naissance: {
      type: 'string',
      
    },

  },


  exits: {
    invalid:{
      reponseType: 'badRequest',
      description: 'Email or password not valid'
    },
    EmailAlreadyInUse: {
      statutCode: 409,
      description: 'Email already in use'
    }
  },


  fn: async function (inputs, exits) {
    attr = {};
    attr.email = inputs.email.toLowerCase();
    attr.nom = inputs.nom;
    attr.prenom = inputs.prenom;
    attr.sexe = inputs.sexe;
    attr.naissance = inputs.naissance;
    if(inputs.password){
      attr.password = await bcrypt.hash(inputs.password, 10);
      var user = await User.create(attr)
      .intercept('E_UNIQUE', () => 'EmailAlreadyInUse')
      .intercept({name: 'UsageError'}, () => 'invalid')
      .fetch();
    }
    return exits.success(user);
  }


};

