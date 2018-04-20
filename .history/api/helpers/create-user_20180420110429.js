module.exports = {


  friendlyName: 'Create user',


  description: '',


  inputs: {
    email: {
      type: string,

    },
    password: {
      type: string,
      
    }

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
    if(inputs.password){
      attr.password = await bcrypt.hash(inputs.password);
    }
    return exits.success();

  }


};

