/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    email: {
      type: 'string',
      unique: true,
      required: true,
      isEmail: true,
      maxLength: 250,
      example: 'example@gmail.com'
    },
    nom: {
      type: 'string',
      maxLength: 200
    },
    prenom: {
      type: 'string',
      maxLength: 200
    },
    naissance: {
      type: 'string',
      example: '2018/04/05'
    },
    sexe: {
      type: 'string',
      isIn: ['Homme', 'Femme'],
      example: 'Homme'
    },
    password: {
      type: 'string',
      maxLength: 200,
      required:true,
      encrypt: true,
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝


    team:
    {
      collection: 'userTeam',
      via: 'team'
    },

    match:
    {
      model: 'match'
    },

    userMatch:
    {
      collection: 'userMatch',
      via: 'user'
    }


  },

};

