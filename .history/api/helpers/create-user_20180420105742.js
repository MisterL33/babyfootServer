module.exports = {


  friendlyName: 'Create user',


  description: '',


  inputs: {
    email: {
      type: string,

    }
    password: {
      type: string,
      
    }

  },


  exits: {
    invalid: 'badRequest',
    description: 'Email or password not valid'
  },


  fn: async function (inputs, exits) {

    // All done.
    return exits.success();

  }


};

