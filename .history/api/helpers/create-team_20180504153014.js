module.exports = {


  friendlyName: 'Create team',


  description: '',


  inputs: {
    email: {
      type: 'string',

    },
    password: {
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

