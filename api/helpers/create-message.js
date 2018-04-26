
module.exports = {


  friendlyName: 'Create message',


  description: '',


  inputs: {
    username: {
      type: 'string',
    },
    mesage: {
      type: 'string',
    },
  },


  exits: {
    invalid:{
      reponseType: 'badRequest',
      description: 'Message or username not valid'
    }
  },


  fn: async function (inputs, exits) {
    attr = {};

    attr.username = inputs.username;
    attr.message = inputs.message;
    if(inputs.message){
      var message = await Message.create(attr).fetch();
    }
    return exits.success(message);
  }


};

