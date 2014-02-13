/***********************************
File:    log.js
Author  : filippo pacini <filippo.pacini@gmail.com>
License :
The contents of this file are subject to the Mozilla Public
License Version 1.1 (the "License"); you may not use this file
except in compliance with the License. You may obtain a copy of
the License at http://www.mozilla.org/MPL/

Software distributed under the License is distributed on an "AS IS"
basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See
the License for the specific language governing rights and
limitations under the License.
The Initial Developer of the Original Code is S.G. Consulting
srl. Portions created by S.G. Consulting s.r.l. are Copyright (C)
2008-2010 S.G. Consulting srl. All Rights Reserved.

************************************/


var sg = (function(mod) {
	      var log = {};
	      log.memory = function() {
		  if (console.memory) {
		      return console.memory;
		  }
		  return null;
	      };

	      log.debug = (function() {
			       var l = function(x) { return x; };
			       if (console.debug) {
				   l = function(x) { console.debug(x); };
			       } else if (console.log) {
				   l = function(x) { console.log(x); };
			       }
			       return l;
			   }());

	      log.error = (function() {
			       var l = function(x) { return x; };
			       if (console.error) {
				   l = function(x) { console.error(x); };
			       } else if (console.log) {
				   l = function(x) { console.log(x); };
			       }
			       return l;
			   }());

	      log.info = (function() {
			      var l = function(x) { return x; };
			      if (console.info) {
				  l = function(x) { console.info(x); };
			      } else if (console.log) {
				  l = function(x) { console.log(x); };
			      }
			      return l;
			   }());

	      log.warn = (function() {
			      var l = function(x) { return x; };
			      if (console.warn) {
				  l = function(x) { console.warn(x); };
			      } else if (console.log) {
				  l = function(x) { console.log(x); };
			      }
			      return l;
			   }());


	      mod.log = log;

	      return mod;
	  }(sg));

