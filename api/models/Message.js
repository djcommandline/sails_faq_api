/**
* Message.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    text: { type: 'string'},
    id: { type: 'string'},
    question:{
      model: 'faq'
    },
    author: {
      model: 'user'
    },
    // custom instance
    sponsor: function() {
      return this.text;
    }
  }
};
