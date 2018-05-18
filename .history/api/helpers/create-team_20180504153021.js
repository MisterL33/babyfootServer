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

    // All done.
    return exits.success();

  }


};

