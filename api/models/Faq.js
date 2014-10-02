/**
* Faq.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    question: { type: 'string' },
    answer: { type: 'string' },
    joint: { type: 'string' },
    comments: {
      collection: 'message',
      via: 'question'
    }
  }
};
