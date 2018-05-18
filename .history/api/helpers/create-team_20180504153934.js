module.exports = {


  friendlyName: 'Create team',


  description: '',


  inputs: {
    owner: {
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
    attr.owner = inputs.owner;
    attr.nom = inputs.nom;
    var team = await Team.create(attr)
    .intercept('E_UNIQUE', () => 'NameAlreadyInUse')
    .intercept({name: 'UsageError'}, () => 'invalid')
    .fetch();
    return exits.success(team);

  }


};

