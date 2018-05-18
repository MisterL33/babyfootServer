module.exports = {


  friendlyName: 'Create team',


  description: '',


  inputs: {
    Owner: {
      type: 'string',

    },
    nom: {
      type: 'string',
      
    },
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    attr = {};
    attr.Owner = inputs.owner;
    attr.nom = inputs.nom;

    return exits.success();

  }


};

