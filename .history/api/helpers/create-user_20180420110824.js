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
    attr.email = inputs.email.toLowerCase();
    if(inputs.password){
      attr.password = await bcrypt.hash(inputs.password, 10);
      var user = await user.create(attr).intercept('E_UNIQUE', () => 'EmailAlreadyInUse');
    }

    return exits.success();

  }


};

