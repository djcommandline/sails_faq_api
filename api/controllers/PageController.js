/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	about: function(req, res) {
		res.view(null, {
			title: 'About',
			meta: 'mission statement, history, founding story, value proposition'
		})
	},

	contact: function(req, res) {
		res.view(null, {
			title: 'Contact',
			meta: 'contact info, phone number, address, email'
		})
	},

	faq: function(req, res) {
		res.view(null, {
			title: 'FAQ',
			meta: 'faq, information, questions, answers'
		})
	},

	styleguide: function(req, res) {
		res.view(null, {
			title: 'Style Guide',
			meta: 'styleguide, info, standards'
		})
	}


};
