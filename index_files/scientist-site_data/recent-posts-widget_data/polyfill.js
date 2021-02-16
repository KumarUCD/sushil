/* Disable minification (remove `.min` from URL path) for more info */

(function(undefined) {if (!('reduce' in Array.prototype)) {Array.prototype.reduce=function(t){if(this===undefined||null===this)throw new TypeError(this+" is not an object");if("function"!=typeof t)throw new TypeError(t+" is not a function");var n,i=Object(this),r=i instanceof String?i.split(""):i,e=Math.max(Math.min(r.length,9007199254740991),0)||0,o=-1;if(1 in arguments)n=arguments[1];else{for(;++o<e&&!(o in r););if(o>=e)throw new TypeError("Reduce of empty array with no initial value");n=r[o]}for(;++o<e;)o in r&&(n=t(n,r[o],o,i));return n};}if (!('keys' in Object && (function () {
	// Safari 5.0 bug where Object.keys doesn't work with arguments
	return (Object.keys(arguments)).length === 2;
}(1, 2)) && (function () {
	try {
		// In ES6 Object.keys works on all object except `null` and `undefined`.
		Object.keys('');
		return true;
	} catch (e) {
		return false;
	}
}()))) {Object.keys=function(){"use strict";function t(t){var e=r.call(t),n="[object Arguments]"===e;return n||(n="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===r.call(t.callee)),n}var e=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,o=!n.call({toString:null},"toString"),l=n.call(function(){},"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],i=function(t){var e=t.constructor;return e&&e.prototype===t},u={$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},a=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!u["$"+t]&&e.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{i(window[t])}catch(r){return!0}}catch(r){return!0}return!1}(),f=function(t){if("undefined"==typeof window||!a)return i(t);try{return i(t)}catch(e){return!1}};return function(n){var i="[object Function]"===r.call(n),u=t(n),a="[object String]"===r.call(n),p=[];if(n===undefined||null===n)throw new TypeError("Cannot convert undefined or null to object");var s=l&&i;if(a&&n.length>0&&!e.call(n,0))for(var g=0;g<n.length;++g)p.push(String(g));if(u&&n.length>0)for(var w=0;w<n.length;++w)p.push(String(w));else for(var y in n)s&&"prototype"===y||!e.call(n,y)||p.push(String(y));if(o)for(var h=f(n),$=0;$<c.length;++$)h&&"constructor"===c[$]||!e.call(n,c[$])||p.push(c[$]);return p}}();}if (!('entries' in Object)) {Object.entries=function(e){return Object.keys(e).reduce(function(r,t){var n="string"==typeof t&&e.propertyIsEnumerable(t)?[[t,e[t]]]:[];return r.concat(n)},[])};}if (!('map' in Array.prototype)) {Array.prototype.map=function(t){if(this===undefined||null===this)throw new TypeError(this+" is not an object");if("function"!=typeof t)throw new TypeError(t+" is not a function");for(var n=Object(this),i=arguments[1],r=n instanceof String?n.split(""):n,o=Math.max(Math.min(r.length,9007199254740991),0)||0,e=-1,a=[];++e<o;)e in r&&(a[e]=t.call(i,r[e],e,n));return a};}if (!(// In IE8, defineProperty could only act on DOM elements, so full support
// for the feature requires the ability to set a property on an arbitrary object
'defineProperty' in Object && (function() {
	try {
		var a = {};
		Object.defineProperty(a, 'test', {value:42});
		return true;
	} catch(e) {
		return false
	}
}()))) {!function(e){var t=Object.prototype.hasOwnProperty("__defineGetter__"),r="A property cannot both have accessors and be writable or have a value";Object.defineProperty=function(n,o,i){if(e&&(n===window||n===document||n===Element.prototype||n instanceof Element))return e(n,o,i);if(null===n||!(n instanceof Object||"object"==typeof n))throw new TypeError("Object.defineProperty called on non-object");if(!(i instanceof Object))throw new TypeError("Property description must be an object");var c=String(o),a="value"in i||"writable"in i,f="get"in i&&typeof i.get,p="set"in i&&typeof i.set;if(f){if("function"!==f)throw new TypeError("Getter must be a function");if(!t)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(a)throw new TypeError(r);Object.__defineGetter__.call(n,c,i.get)}else n[c]=i.value;if(p){if("function"!==p)throw new TypeError("Setter must be a function");if(!t)throw new TypeError("Getters & setters cannot be defined on this javascript engine");if(a)throw new TypeError(r);Object.__defineSetter__.call(n,c,i.set)}return"value"in i&&(n[c]=i.value),n}}(Object.defineProperty);}if (!('values' in Object)) {!function(){Object.defineProperty(Object,"values",{configurable:!0,enumerable:!1,value:function(e){return Object.keys(e).map(function(n){return e[n]})},writable:!0})}();}if (!('Symbol' in this && 'iterator' in this.Symbol && !!Array.prototype[Symbol.iterator] && !!Array.prototype.values && (Array.prototype[Symbol.iterator] === Array.prototype.values))) {Object.defineProperty(Array.prototype,"values",{value:Array.prototype[Symbol.iterator],enumerable:!1,writable:!1});}var Iterator=function(){var e=function(){return this.length=0,this},t=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function");return e},_=function(e,n){if(!(this instanceof _))return new _(e,n);Object.defineProperties(this,{__list__:{writable:!0,value:e},__context__:{writable:!0,value:n},__nextIndex__:{writable:!0,value:0}}),n&&(t(n.on),n.on("_add",this._onAdd.bind(this)),n.on("_delete",this._onDelete.bind(this)),n.on("_clear",this._onClear.bind(this)))};return Object.defineProperties(_.prototype,Object.assign({constructor:{value:_,configurable:!0,enumerable:!1,writable:!0},_next:{value:function(){var e;if(this.__list__)return this.__redo__&&(e=this.__redo__.shift())!==undefined?e:this.__nextIndex__<this.__list__.length?this.__nextIndex__++:void this._unBind()},configurable:!0,enumerable:!1,writable:!0},next:{value:function(){return this._createResult(this._next())},configurable:!0,enumerable:!1,writable:!0},_createResult:{value:function(e){return e===undefined?{done:!0,value:undefined}:{done:!1,value:this._resolve(e)}},configurable:!0,enumerable:!1,writable:!0},_resolve:{value:function(e){return this.__list__[e]},configurable:!0,enumerable:!1,writable:!0},_unBind:{value:function(){this.__list__=null,delete this.__redo__,this.__context__&&(this.__context__.off("_add",this._onAdd.bind(this)),this.__context__.off("_delete",this._onDelete.bind(this)),this.__context__.off("_clear",this._onClear.bind(this)),this.__context__=null)},configurable:!0,enumerable:!1,writable:!0},toString:{value:function(){return"[object Iterator]"},configurable:!0,enumerable:!1,writable:!0}},{_onAdd:{value:function(e){if(!(e>=this.__nextIndex__)){if(++this.__nextIndex__,!this.__redo__)return void Object.defineProperty(this,"__redo__",{value:[e],configurable:!0,enumerable:!1,writable:!1});this.__redo__.forEach(function(t,_){t>=e&&(this.__redo__[_]=++t)},this),this.__redo__.push(e)}},configurable:!0,enumerable:!1,writable:!0},_onDelete:{value:function(e){var t;e>=this.__nextIndex__||(--this.__nextIndex__,this.__redo__&&(t=this.__redo__.indexOf(e),-1!==t&&this.__redo__.splice(t,1),this.__redo__.forEach(function(t,_){t>e&&(this.__redo__[_]=--t)},this)))},configurable:!0,enumerable:!1,writable:!0},_onClear:{value:function(){this.__redo__&&e.call(this.__redo__),this.__nextIndex__=0},configurable:!0,enumerable:!1,writable:!0}})),Object.defineProperty(_.prototype,Symbol.iterator,{value:function(){return this},configurable:!0,enumerable:!1,writable:!0}),Object.defineProperty(_.prototype,Symbol.toStringTag,{value:"Iterator",configurable:!1,enumerable:!1,writable:!0}),_}();var ArrayIterator=function(){var e=function(t,r){if(!(this instanceof e))return new e(t,r);Iterator.call(this,t),r=r?String.prototype.contains.call(r,"key+value")?"key+value":String.prototype.contains.call(r,"key")?"key":"value":"value",Object.defineProperty(this,"__kind__",{value:r,configurable:!1,enumerable:!1,writable:!1})};return Object.setPrototypeOf&&Object.setPrototypeOf(e,Iterator.prototype),e.prototype=Object.create(Iterator.prototype,{constructor:{value:e,configurable:!0,enumerable:!1,writable:!0},_resolve:{value:function(e){return"value"===this.__kind__?this.__list__[e]:"key+value"===this.__kind__?[e,this.__list__[e]]:e},configurable:!0,enumerable:!1,writable:!0},toString:{value:function(){return"[object Array Iterator]"},configurable:!0,enumerable:!1,writable:!0}}),e}();}).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});