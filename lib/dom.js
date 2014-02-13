var sg = (function(mod) {
	      var dom = {};

	      if (!window) { // not in a browser => no dom
		  mod.dom = dom;
		  return mod;
	      }

	      dom.byId = function(elId) {
		      return document.getElementById(elId);
	      };

	      dom.find = function(query, el) {
		  if (typeof(el) !== 'undefined') {
		      return el.querySelectorAll(query);
		  }
		  return document.querySelectorAll(query);
	      };

	      mod.dom = dom;

	      return mod;
	  });