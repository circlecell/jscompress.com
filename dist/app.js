var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _matreshka = __webpack_require__(2);
	
	var _matreshka2 = _interopRequireDefault(_matreshka);
	
	var _upload = __webpack_require__(3);
	
	var _upload2 = _interopRequireDefault(_upload);
	
	var _copyPaste = __webpack_require__(8);
	
	var _copyPaste2 = _interopRequireDefault(_copyPaste);
	
	var _output = __webpack_require__(9);
	
	var _output2 = _interopRequireDefault(_output);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	module.exports = new (function (_MK$Object) {
		_inherits(Application, _MK$Object);
	
		function Application() {
			var _this;
	
			_classCallCheck(this, Application);
	
			(_this = _possibleConstructorReturn(this, Object.getPrototypeOf(Application).call(this)), _this).set({
				activeTabName: 'upload'
			}).addDataKeys('upload copyPaste output').setClassFor({
				upload: _upload2.default,
				copyPaste: _copyPaste2.default,
				output: _output2.default
			}).on({
				'*@change:active': function changeActive(evt) {
					if (evt.value === true) {
						var _iteratorNormalCompletion = true;
						var _didIteratorError = false;
						var _iteratorError = undefined;
	
						try {
							for (var _iterator = _this[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
								var tab = _step.value;
	
								if (tab !== evt.self) {
									tab.active = false;
								}
							}
						} catch (err) {
							_didIteratorError = true;
							_iteratorError = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion && _iterator.return) {
									_iterator.return();
								}
							} finally {
								if (_didIteratorError) {
									throw _iteratorError;
								}
							}
						}
					}
				},
				'upload@submitCode copyPaste@submitCode': function uploadSubmitCodeCopyPasteSubmitCode(code) {
					_this.output.active = true;
					_this.output.inputCode = code;
				}
			});
			return _this;
		}
	
		return Application;
	}(_matreshka2.default.Object))();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;;(function(__root) {
	/*
		Matreshka v1.9.1 (2016-05-21)
		JavaScript Framework by Andrey Gubanov
		Released under the MIT license
		More info: http://matreshka.io
	*/
	var matreshka_dir_xclass, matreshka_dir_core_var_core, matreshka_dir_core_util_common, matreshka_dir_core_var_map, matreshka_dir_core_bindings_binders, matreshka_dir_core_dom_lib_bquery, matreshka_dir_core_dom_lib_dollar_lib, matreshka_dir_core_dom_lib_used_lib, matreshka_dir_core_initmk, matreshka_dir_core_definespecial, matreshka_dir_core_util_define, matreshka_dir_core_util_linkprops, matreshka_dir_core_util_mediate, matreshka_dir_core_get_set_remove, matreshka_dir_core_bindings_bindnode, matreshka_dir_core_bindings_unbindnode, matreshka_dir_core_bindings_parsebindings, matreshka_dir_core_bindings_getnodes, matreshka_dir_core_var_domevtreg, matreshka_dir_core_events_trigger, matreshka_dir_core_events_on, matreshka_dir_core_events_off, matreshka_dir_core_var_specialevtreg, matreshka_dir_core_events_addlistener, matreshka_dir_core_events_removelistener, matreshka_dir_core_events_delegatelistener, matreshka_dir_core_events_undelegatelistener, matreshka_dir_core_events_domevents, matreshka_dir_core_events_adddomlistener, matreshka_dir_core_events_removedomlistener, matreshka_dir_core_events_once, matreshka_dir_core_events_ondebounce, matreshka_dir_matreshka_magic, matreshka_dir_matreshka_dynamic, matreshka_dir_matreshka_static, matreshka_dir_matreshkaclass, matreshka_dir_matreshka_object_dynamic, matreshka_dir_matreshka_object_iterator, matreshka_dir_core_var_sym_iterator, matreshka_dir_matreshka_objectclass, matreshka_dir_matreshka_array_processrendering, matreshka_dir_matreshka_array_triggermodify, matreshka_dir_matreshka_array_recreate, matreshka_dir_matreshka_array_native_dynamic, matreshka_dir_matreshka_array_native_static, matreshka_dir_matreshka_array_custom_dynamic, matreshka_dir_matreshka_array_iterator, matreshka_dir_matreshka_arrayclass, matreshka_dir_amd_modules_matreshka, matreshka;
	matreshka_dir_xclass = function () {
	  var ie = typeof document != 'undefined' ? document.documentMode : null;
	  /* istanbul ignore if  */
	  if (ie && ie < 9) {
	    throw Error('Internet Explorer ' + ie + ' isn\'t supported');
	  }
	  return function Class(prototype, staticProps) {
	    var Constructor = prototype.constructor !== Object ? prototype.constructor : function EmptyConstructor() {
	      }, Parent = prototype['extends'] = prototype['extends'] || prototype.extend, proto, typeofParent, key, assign = Object.assign || function (target, firstSource) {
	        if (target === undefined || target === null) {
	          throw new TypeError('Cannot convert first argument to object');
	        }
	        var to = Object(target);
	        for (var i = 1; i < arguments.length; i++) {
	          var nextSource = arguments[i];
	          if (nextSource === undefined || nextSource === null) {
	            continue;
	          }
	          var keysArray = Object.keys(Object(nextSource));
	          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	            var nextKey = keysArray[nextIndex];
	            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	            if (desc !== undefined && desc.enumerable) {
	              to[nextKey] = nextSource[nextKey];
	            }
	          }
	        }
	        return to;
	      };
	    proto = Object.create(Parent ? Parent.prototype : {});
	    assign(proto, prototype);
	    if (staticProps && typeof staticProps == 'object') {
	      assign(Constructor, staticProps);
	    }
	    proto.instanceOf = function () {
	      return this instanceof Constructor;
	    };
	    Constructor.prototype = proto;
	    if (this instanceof Class) {
	      return new Constructor();
	    } else {
	      return Constructor;
	    }
	  };
	}();
	matreshka_dir_core_var_core = {};
	matreshka_dir_core_util_common = function (core) {
	  var extend = function (o1, o2) {
	      var i, j;
	      if (o1) {
	        for (i = 1; i < arguments.length; i++) {
	          o2 = arguments[i];
	          if (o2) {
	            for (j in o2) {
	              if (o2.hasOwnProperty(j)) {
	                o1[j] = o2[j];
	              }
	            }
	          }
	        }
	      }
	      return o1;
	    }, util = {
	      extend: extend,
	      trim: function (s) {
	        return s.trim ? s.trim() : s.replace(/^\s+|\s+$/g, '');
	      },
	      randomString: function () {
	        return (new Date().getTime() - new Date(2013, 4, 3).getTime()).toString(36) + Math.floor(Math.random() * 1679616).toString(36);
	      },
	      toArray: function (object, start) {
	        var array = [], l = object.length, i;
	        start = start || 0;
	        for (i = start; i < l; i++) {
	          array[i - start] = object[i];
	        }
	        return array;
	      },
	      debounce: function (f, d, thisArg) {
	        var timeout;
	        if (typeof d !== 'number') {
	          thisArg = d;
	          d = 0;
	        }
	        return function () {
	          var args = arguments, ctx = this;
	          clearTimeout(timeout);
	          timeout = setTimeout(function () {
	            f.apply(thisArg || ctx, args);
	          }, d || 0);
	        };
	      },
	      each: function (o, f, thisArg) {
	        if (!o)
	          return;
	        if (o.isMK && typeof o.each == 'function') {
	          o.each(f, thisArg);
	        } else if ('length' in o) {
	          [].forEach.call(o, f, thisArg);
	        } else {
	          for (var i in o) {
	            if (o.hasOwnProperty(i)) {
	              f.call(thisArg, o[i], i, o);
	            }
	          }
	        }
	        return o;
	      },
	      deepFind: function (obj, path) {
	        var paths = typeof path == 'string' ? path.split('.') : path, current = obj, i;
	        for (i = 0; i < paths.length; ++i) {
	          if (typeof current[paths[i]] == 'undefined') {
	            return undefined;
	          } else {
	            current = current[paths[i]];
	          }
	        }
	        return current;
	      },
	      noop: function () {
	      },
	      orderBy: function (arr, keys, orders) {
	        var defaultOrder = 'asc', newArr, length, i, commonOrder;
	        if ('length' in arr && typeof arr == 'object') {
	          if (!(orders instanceof Array)) {
	            commonOrder = orders || defaultOrder;
	          }
	          length = arr.length;
	          newArr = Array(length);
	          for (i = 0; i < length; i++) {
	            newArr[i] = arr[i];
	          }
	          if (!keys)
	            return newArr;
	          keys = keys instanceof Array ? keys : [keys];
	          return newArr.sort(function (a, b) {
	            var length = keys.length, i, order, key;
	            if (a && b) {
	              for (i = 0; i < length; i++) {
	                key = keys[i];
	                order = (commonOrder || orders[i]) != 'desc' ? -1 : 1;
	                if (a[key] > b[key]) {
	                  return -order;
	                } else if (a[key] < b[key]) {
	                  return order;
	                }
	              }
	            }
	            return 0;
	          });
	        } else {
	          return [];
	        }
	      }
	    };
	  function PseudoMap() {
	  }
	  extend(PseudoMap.prototype, {
	    get: function (obj) {
	      return obj.matreshkaData;
	    },
	    set: function (obj, data) {
	      Object.defineProperty(obj, 'matreshkaData', {
	        value: data,
	        enumerable: false,
	        writable: false,
	        configurable: false
	      });
	    },
	    has: function (obj) {
	      return 'matreshkaData' in obj;
	    }
	  });
	  util.PseudoMap = PseudoMap;
	  extend(core, util);
	  return util;
	}(matreshka_dir_core_var_core);
	matreshka_dir_core_var_map = function (util) {
	  var mkId = 'mk-' + util.randomString();
	  return typeof WeakMap == 'undefined' ? new util.PseudoMap() : new WeakMap();
	}(matreshka_dir_core_util_common);
	matreshka_dir_core_bindings_binders = function (core) {
	  var readFiles = function (files, readAs, callback) {
	      var length = files.length, i = 0, filesArray = core.toArray(files), file;
	      if (readAs) {
	        filesArray.forEach(function (file) {
	          var reader = new FileReader();
	          reader.onloadend = function (evt) {
	            file.readerResult = reader.result;
	            if (++i == length) {
	              callback(filesArray);
	            }
	          };
	          reader[readAs](file);
	        });
	      } else {
	        callback(filesArray);
	      }
	    }, getReadAs = function (readAs) {
	      /* istanbul ignore if  */
	      if (typeof FileReader == 'undefined') {
	        throw Error('FileReader is not supported by this browser');
	      }
	      if (readAs) {
	        readAs = 'readAs' + readAs[0].toUpperCase() + readAs.slice(1);
	        if (!FileReader.prototype[readAs]) {
	          throw Error(readAs + ' is not supported by FileReader');
	        }
	      }
	      return readAs;
	    }, binders;
	  core.binders = binders = {
	    innerHTML: function () {
	      return {
	        on: 'input',
	        getValue: function () {
	          return this.innerHTML;
	        },
	        setValue: function (v) {
	          this.innerHTML = v + '';
	        }
	      };
	    },
	    innerText: function () {
	      return {
	        on: 'input',
	        getValue: function () {
	          return this.textContent;
	        },
	        setValue: function (v) {
	          this.textContent = v + '';
	        }
	      };
	    },
	    className: function (className) {
	      var not = className.indexOf('!') === 0;
	      if (not) {
	        className = className.replace('!', '');
	      }
	      return {
	        on: null,
	        getValue: function () {
	          var _this = this, contains = _this.classList ? _this.classList.contains(className) : hasClass(_this, className);
	          return not ? !contains : !!contains;
	        },
	        setValue: function (v) {
	          var _this = this, add = not ? !v : !!v;
	          _this.classList ? _this.classList[add ? 'add' : 'remove'](className) : add ? addClass(_this, className) : removeClass(_this, className);
	        }
	      };
	      // @IE9
	      // thanks to Iliya Kantor
	      function addClass(o, c) {
	        var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
	        if (re.test(o.className))
	          return;
	        o.className = (o.className + ' ' + c).replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
	      }
	      function removeClass(o, c) {
	        var re = new RegExp('(^|\\s)' + c + '(\\s|$)', 'g');
	        o.className = o.className.replace(re, '$1').replace(/\s+/g, ' ').replace(/(^ | $)/g, '');
	      }
	      function hasClass(o, c) {
	        return new RegExp('(\\s|^)' + c + '(\\s|$)').test(o.className);
	      }
	    },
	    property: function (propertyName) {
	      return {
	        on: null,
	        getValue: function () {
	          return this[propertyName];
	        },
	        setValue: function (v) {
	          // in case when you're trying to set read-only property
	          try {
	            this[propertyName] = v;
	          } catch (e) {
	          }
	        }
	      };
	    },
	    attribute: function (attributeName) {
	      return {
	        on: null,
	        getValue: function () {
	          return this.getAttribute(attributeName);
	        },
	        setValue: function (v) {
	          this.setAttribute(attributeName, v);
	        }
	      };
	    },
	    dataset: function (prop) {
	      // replace namesLikeThis with names-like-this
	      function toDashed(name) {
	        return 'data-' + name.replace(/([A-Z])/g, function (u) {
	          return '-' + u.toLowerCase();
	        });
	      }
	      return {
	        on: null,
	        getValue: function () {
	          var _this = this;
	          return _this.dataset ? _this.dataset[prop] : _this.getAttribute(toDashed(prop));
	        },
	        setValue: function (v) {
	          var _this = this;
	          if (_this.dataset) {
	            _this.dataset[prop] = v;
	          } else {
	            _this.setAttribute(toDashed(prop), v);
	          }
	        }
	      };
	    },
	    textarea: function () {
	      return binders.input('text');
	    },
	    progress: function () {
	      return binders.input();
	    },
	    input: function (type, options) {
	      var on;
	      switch (type) {
	      case 'checkbox':
	        return {
	          on: 'click keyup',
	          getValue: function () {
	            return this.checked;
	          },
	          setValue: function (v) {
	            this.checked = v;
	          }
	        };
	      case 'radio':
	        return {
	          on: 'click keyup',
	          getValue: function () {
	            return this.value;
	          },
	          setValue: function (v) {
	            this.checked = typeof v != 'undefined' && this.value == v;
	          }
	        };
	      case 'submit':
	      case 'button':
	      case 'image':
	      case 'reset':
	        return {};
	      case 'hidden':
	        on = null;
	        break;
	      case 'file':
	        on = 'change';
	        break;
	      /*
	      case 'text':
	      case 'password':
	      case 'date':
	      case 'datetime':
	      case 'datetime-local':
	      case 'month':
	      case 'time':
	      case 'week':
	      case 'range':
	      case 'color':
	      case 'search':
	      case 'email':
	      case 'tel':
	      case 'url':
	                  case 'file':
	      case 'number':  */
	      default:
	        // other future (HTML6+) inputs
	        on = 'input';
	      }
	      return {
	        on: on,
	        getValue: function () {
	          return this.value;
	        },
	        setValue: function (v) {
	          this.value = v;
	        }
	      };
	    },
	    output: function () {
	      return {
	        on: null,
	        getValue: function () {
	          var _this = this;
	          return _this.value || _this.textContent;
	        },
	        setValue: function (v) {
	          var _this = this;
	          _this['form' in _this ? 'value' : 'textContent'] = v === null ? '' : v + '';
	        }
	      };
	    },
	    select: function (multiple) {
	      var i;
	      if (multiple) {
	        return {
	          on: 'change',
	          getValue: function () {
	            var i = 0, options = this.options, result = [];
	            for (; options.length > i; i++) {
	              if (options[i].selected) {
	                result.push(options[i].value);
	              }
	            }
	            return result;
	          },
	          setValue: function (v) {
	            v = typeof v == 'string' ? [v] : v;
	            for (i = this.options.length - 1; i >= 0; i--) {
	              this.options[i].selected = ~v.indexOf(this.options[i].value);
	            }
	          }
	        };
	      } else {
	        return {
	          on: 'change',
	          getValue: function () {
	            return this.value;
	          },
	          setValue: function (v) {
	            var _this = this, options;
	            _this.value = v;
	            if (!v) {
	              options = _this.options;
	              for (i = options.length - 1; i >= 0; i--) {
	                if (!options[i].value) {
	                  options[i].selected = true;
	                }
	              }
	            }
	          }
	        };
	      }
	    },
	    display: function (value) {
	      value = typeof value == 'undefined' ? true : value;
	      return {
	        on: null,
	        getValue: function () {
	          var _this = this, v = _this.style.display || (window.getComputedStyle ? getComputedStyle(_this, null).getPropertyValue('display') : _this.currentStyle.display), none = v == 'none';
	          return value ? !none : !!none;
	        },
	        setValue: function (v) {
	          this.style.display = value ? v ? '' : 'none' : v ? 'none' : '';
	        }
	      };
	    },
	    style: function (property) {
	      return {
	        on: null,
	        getValue: function () {
	          var _this = this;
	          return _this.style[property] || getComputedStyle(_this, null).getPropertyValue(property);
	        },
	        setValue: function (v) {
	          this.style[property] = v;
	        }
	      };
	    },
	    file: function (readAs) {
	      readAs = getReadAs(readAs);
	      return {
	        on: function (callback) {
	          this.addEventListener('change', function () {
	            var files = this.files;
	            if (files.length) {
	              readFiles(files, readAs, callback);
	            } else {
	              callback([]);
	            }
	          });
	        },
	        getValue: function (evt) {
	          var files = evt.domEvent || [];
	          return this.multiple ? files : files[0] || null;
	        },
	        setValue: null
	      };
	    },
	    dropFiles: function (readAs) {
	      readAs = getReadAs(readAs);
	      return {
	        on: function (callback) {
	          this.addEventListener('drop', function (evt) {
	            evt.preventDefault();
	            var files = evt.dataTransfer.files;
	            if (files.length) {
	              readFiles(files, readAs, callback);
	            } else {
	              callback([]);
	            }
	          });
	          this.addEventListener('dragover', function (evt) {
	            evt.preventDefault();
	            evt.dataTransfer.dropEffect = 'copy';
	          });
	        },
	        getValue: function (o) {
	          return o.domEvent || [];
	        },
	        setValue: null
	      };
	    },
	    dragOver: function () {
	      return {
	        on: 'dragover dragenter dragleave dragend drop',
	        getValue: function (evt) {
	          var eventType = evt.domEvent && evt.domEvent.type;
	          return eventType == 'dragover' || eventType == 'dragenter';
	        },
	        setValue: null
	      };
	    }
	  };
	  binders.visibility = binders.display;
	  binders.html = binders.innerHTML;
	  binders.text = binders.innerText;
	  binders.prop = binders.property;
	  binders.attr = binders.attribute;
	  return binders;
	}(matreshka_dir_core_var_core);
	matreshka_dir_core_dom_lib_bquery = function () {
	  /* istanbul ignore if  */
	  if (typeof window == 'undefined') {
	    return;
	  }
	  var s_classList = 'classList', nsReg = /\.(.+)/, allEvents = {}, nodeIndex = 0, fn = [];
	  function $b(s, context) {
	    return new $b.i(s, context);
	  }
	  $b.i = function (s, context) {
	    var result, l, i;
	    if (s) {
	      if (s.nodeType || s == window) {
	        result = [s];
	      } else if (typeof s == 'string') {
	        if (/</.test(s)) {
	          result = $b.parseHTML(s);
	        } else {
	          if (context) {
	            if (context = $b(context)[0]) {
	              result = context.querySelectorAll(s);
	            }
	          } else {
	            result = document.querySelectorAll(s);
	          }
	        }
	      } else if (s instanceof Function) {
	        // typeof nodeList returns "function" in old WebKit
	        if (document.readyState == 'loading') {
	          document.addEventListener('DOMContentLoaded', s);
	        } else {
	          s();
	        }
	      } else {
	        result = s;
	      }
	    }
	    l = result && result.length;
	    if (l) {
	      for (i = 0; i < l; i++) {
	        this.push(result[i]);
	      }
	    }
	  };
	  $b.fn = $b.i.fn = $b.i.prototype = fn;
	  $b.extend = function (obj) {
	    var k = arguments, i, j, l;
	    for (i = 1; i < k.length; i++) {
	      if (l = k[i]) {
	        for (j in l) {
	          obj[j] = l[j];
	        }
	      }
	    }
	    return obj;
	  };
	  $b.extend(fn, {
	    is: function (s) {
	      var node = this[0];
	      return node ? (node.matches || node.webkitMatchesSelector || node.mozMatchesSelector || node.msMatchesSelector || node.oMatchesSelector).call(node, s) : false;
	    },
	    on: function (names, selector, handler) {
	      var _this = this, delegate, name, namespace, node, nodeID, events, event, exist, i, j, k;
	      if (typeof selector == 'function') {
	        handler = selector;
	        selector = null;
	      }
	      if (selector) {
	        delegate = function (evt) {
	          var randomID = 'x' + String(Math.random()).split('.')[1], node = this, scopeSelector, is;
	          node.setAttribute(randomID, randomID);
	          scopeSelector = '[' + randomID + '="' + randomID + '"] ';
	          is = selector.split(',').map(function (sel) {
	            return scopeSelector + sel + ',' + scopeSelector + sel + ' *';
	          }).join(',');
	          if ($b(evt.target).is(is)) {
	            handler.call(node, evt);
	          }
	          node.removeAttribute(randomID);
	        };
	      }
	      names = names.split(/\s/);
	      for (i = 0; i < names.length; i++) {
	        name = names[i].split(nsReg);
	        namespace = name[1];
	        name = name[0];
	        for (j = 0; j < _this.length; j++) {
	          node = _this[j];
	          nodeID = node.b$ = node.b$ || ++nodeIndex, events = allEvents[name + nodeID] = allEvents[name + nodeID] || [], exist = false;
	          for (k = 0; k < events.length; k++) {
	            event = events[k];
	            if (handler == event.handler && (!selector || selector == event.selector)) {
	              exist = true;
	              break;
	            }
	          }
	          if (!exist) {
	            events.push({
	              delegate: delegate,
	              handler: handler,
	              namespace: namespace,
	              selector: selector
	            });
	            node.addEventListener(name, delegate || handler, false);
	          }
	        }
	      }
	      return _this;
	    },
	    off: function (names, selector, handler) {
	      var _this = this, name, namespace, node, events, event, i, j, k;
	      if (typeof selector == 'function') {
	        handler = selector;
	        selector = null;
	      }
	      names = names.split(/\s/);
	      for (i = 0; i < names.length; i++) {
	        name = names[i].split(nsReg);
	        namespace = name[1];
	        name = name[0];
	        for (j = 0; j < _this.length; j++) {
	          node = _this[j];
	          events = allEvents[name + node.b$];
	          if (events) {
	            for (k = 0; k < events.length; k++) {
	              event = events[k];
	              if ((!handler || handler == event.handler || handler == event.delegate) && (!namespace || namespace == event.namespace) && (!selector || selector == event.selector)) {
	                node.removeEventListener(name, event.delegate || event.handler);
	                events.splice(k--, 1);
	              }
	            }
	          } else {
	            if (!namespace && !selector) {
	              node.removeEventListener(name, handler);
	            }
	          }
	        }
	      }
	      return _this;
	    },
	    add: function (s) {
	      var result = $b(this), map = {}, nodeID, node, i;
	      s = $b(s);
	      for (i = 0; i < result.length; i++) {
	        node = result[i];
	        nodeID = node.b$ = node.b$ || ++nodeIndex;
	        map[nodeID] = 1;
	      }
	      for (i = 0; i < s.length; i++) {
	        node = s[i];
	        nodeID = node.b$ = node.b$ || ++nodeIndex;
	        if (!map[nodeID]) {
	          map[nodeID] = 1;
	          result.push(node);
	        }
	      }
	      return result;
	    },
	    not: function (s) {
	      var result = $b(this), index, i;
	      s = $b(s);
	      for (i = 0; i < s.length; i++) {
	        if (~(index = result.indexOf(s[i]))) {
	          result.splice(index, 1);
	        }
	      }
	      return result;
	    },
	    find: function (s) {
	      var result = $b();
	      this.forEach(function (item) {
	        result = result.add($b(s, item));
	      });
	      return result;
	    }
	  });
	  // simple html parser
	  $b.parseHTML = function (html) {
	    var node = document.createElement('div'),
	      // wrapMap is taken from jQuery
	      wrapMap = {
	        option: [
	          1,
	          '<select multiple=\'multiple\'>',
	          '</select>'
	        ],
	        legend: [
	          1,
	          '<fieldset>',
	          '</fieldset>'
	        ],
	        thead: [
	          1,
	          '<table>',
	          '</table>'
	        ],
	        tr: [
	          2,
	          '<table><tbody>',
	          '</tbody></table>'
	        ],
	        td: [
	          3,
	          '<table><tbody><tr>',
	          '</tr></tbody></table>'
	        ],
	        col: [
	          2,
	          '<table><tbody></tbody><colgroup>',
	          '</colgroup></table>'
	        ],
	        area: [
	          1,
	          '<map>',
	          '</map>'
	        ],
	        _: [
	          0,
	          '',
	          ''
	        ]
	      }, wrapper, i, ex;
	    html = html.replace(/^\s+|\s+$/g, '');
	    wrapMap.optgroup = wrapMap.option;
	    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	    wrapMap.th = wrapMap.td;
	    ex = /<([\w:]+)/.exec(html);
	    wrapper = ex && wrapMap[ex[1]] || wrapMap._;
	    node.innerHTML = wrapper[1] + html + wrapper[2];
	    i = wrapper[0];
	    while (i--) {
	      node = node.children[0];
	    }
	    return $b(node.childNodes);
	  };
	  $b.create = function create(tagName, props) {
	    var el, i, j, prop;
	    if (typeof tagName == 'object') {
	      props = tagName;
	      tagName = props.tagName;
	    }
	    el = document.createElement(tagName);
	    if (props)
	      for (i in props) {
	        prop = props[i];
	        if (i == 'attributes' && typeof prop == 'object') {
	          for (j in prop)
	            if (prop.hasOwnProperty(j)) {
	              el.setAttribute(j, prop[j]);
	            }
	        } else if (i == 'tagName') {
	          continue;
	        } else if (i == 'children' && prop) {
	          for (j = 0; j < prop.length; j++) {
	            el.appendChild(create(prop[j]));
	          }
	        } else if (typeof el[i] == 'object' && el[i] !== null && typeof props == 'object') {
	          for (j in prop)
	            if (prop.hasOwnProperty(j)) {
	              el[i][j] = prop[j];
	            }
	        } else {
	          el[i] = prop;
	        }
	      }
	    return el;
	  };
	  $b.one = function (s, context) {
	    return $b(s, context)[0] || null;
	  };
	  return $b;
	}();
	matreshka_dir_core_dom_lib_dollar_lib = function ($b) {
	  /* istanbul ignore if  */
	  if (typeof window == 'undefined') {
	    return;
	  }
	  var neededMethods = 'on off is add not find'.split(/\s/), dollar = typeof window.$ == 'function' ? window.$ : null, useDollar = true, fn, i;
	  if (dollar) {
	    fn = dollar.fn || dollar.prototype;
	    for (i = 0; i < neededMethods.length; i++) {
	      if (!fn[neededMethods[i]]) {
	        useDollar = false;
	        break;
	      }
	    }
	    if (useDollar && !dollar.parseHTML) {
	      dollar.parseHTML = $b.parseHTML;
	    }
	  } else {
	    useDollar = false;
	  }
	  return useDollar ? dollar : $b;
	}(matreshka_dir_core_dom_lib_bquery);
	matreshka_dir_core_dom_lib_used_lib = function (core, $b, $) {
	  core.$ = $ || noop;
	  core.$b = core.balalaika = core.bQuery = core.bquery = $b || noop;
	  core.useAs$ = function (_$) {
	    return core.$ = this.$ = $ = _$;
	  };
	  /* istanbul ignore next */
	  // used as DOM library placeholder in non-browser environment (eg nodejs)
	  function noop() {
	    return [];
	  }
	}(matreshka_dir_core_var_core, matreshka_dir_core_dom_lib_bquery, matreshka_dir_core_dom_lib_dollar_lib);
	matreshka_dir_core_initmk = function (core, map) {
	  var initMK = core.initMK = function (object) {
	    if (!map.has(object)) {
	      map.set(object, {
	        events: {},
	        special: {},
	        id: 'mk' + Math.random()
	      });
	    }
	    return object;
	  };
	  return function (object) {
	    object._initMK ? object._initMK() : initMK(object);
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_definespecial = function (core, map) {
	  core._defineSpecial = function (object, key, noAccessors) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object' || !map.has(object))
	      return object;
	    var objectData = map.get(object), specialProps = objectData.special[key];
	    if (!specialProps) {
	      specialProps = objectData.special[key] = {
	        $nodes: core.$(),
	        value: object[key],
	        getter: null,
	        setter: null,
	        mediator: null
	      };
	      if (!noAccessors && key != 'sandbox') {
	        Object.defineProperty(object, key, {
	          configurable: true,
	          enumerable: true,
	          get: function () {
	            return specialProps.getter ? specialProps.getter.call(object) : specialProps.value;
	          },
	          set: function (v) {
	            specialProps.setter ? specialProps.setter.call(object, v) : core.set(object, key, v, { fromSetter: true });
	          }
	        });
	      }
	    }
	    return specialProps;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_util_define = function (core, initMK) {
	  var _define, defineGetter, defineSetter;
	  _define = core.define = function (object, key, descriptor) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var i;
	    if (typeof key == 'object') {
	      for (i in key) {
	        _define(object, i, key[i]);
	      }
	      return object;
	    }
	    Object.defineProperty(object, key, descriptor);
	    return object;
	  };
	  defineGetter = core.defineGetter = function (object, key, getter) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var i, special;
	    if (typeof key == 'object') {
	      for (i in key)
	        if (key.hasOwnProperty(i)) {
	          defineGetter(object, i, key[i]);
	        }
	      return object;
	    }
	    special = core._defineSpecial(object, key);
	    special.getter = function () {
	      return getter.call(object, {
	        value: special.value,
	        key: key,
	        self: object
	      });
	    };
	    return object;
	  };
	  defineSetter = core.defineSetter = function (object, key, setter) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var i;
	    if (typeof key == 'object') {
	      for (i in key)
	        if (key.hasOwnProperty(i)) {
	          defineSetter(object, i, key[i]);
	        }
	      return object;
	    }
	    core._defineSpecial(object, key).setter = function (v) {
	      return setter.call(object, v, {
	        value: v,
	        key: key,
	        self: object
	      });
	    };
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk);
	matreshka_dir_core_util_linkprops = function (core, map, initMK, util) {
	  var linkProps = core.linkProps = function (object, key, keys, getter, evtOptions) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var optionsType = typeof evtOptions, objectData = map.get(object), _this, _key, _keys, i, j, path, t, setOnInit, onChange;
	    onChange = function (evt) {
	      var values = [], _protect = evt._protect;
	      if (!_protect) {
	        _protect = evt._protect = evt._protect || {};
	        for (i in evtOptions) {
	          evt[i] = evtOptions[i];
	        }
	      }
	      if (!(key + objectData.id in _protect)) {
	        if (typeof keys[0] == 'object') {
	          for (i = 0; i < keys.length; i += 2) {
	            _this = keys[i];
	            _keys = typeof keys[i + 1] == 'string' ? keys[i + 1].split(/\s/) : keys[i + 1];
	            for (j = 0; j < _keys.length; j++) {
	              values.push(util.deepFind(_this, _keys[j]));
	            }
	          }
	        } else {
	          for (i = 0; i < keys.length; i++) {
	            _key = keys[i];
	            _this = object;
	            values.push(util.deepFind(_this, _key));
	          }
	        }
	        _protect[evt.key + objectData.id] = 1;
	        core._defineSpecial(object, key, evtOptions.hideProperty);
	        core.set(object, key, getter.apply(object, values), evt);
	      }
	    };
	    keys = typeof keys == 'string' ? keys.split(/\s+/) : keys;
	    // backward compability for setOnInit
	    if (optionsType == 'boolean') {
	      setOnInit = evtOptions;
	    }
	    if (optionsType != 'object') {
	      evtOptions = {};
	    }
	    if (optionsType == 'boolean') {
	      evtOptions.setOnInit = setOnInit;
	    }
	    evtOptions.fromDependency = true;
	    getter = getter || function (value) {
	      return value;
	    };
	    function getEvtName(path) {
	      var evtName, sliceIndex;
	      if (path.length > 1) {
	        sliceIndex = path.length - 1;
	        evtName = path.slice(0, sliceIndex).join('.') + '@' + '_rundependencies:' + path[sliceIndex];
	      } else {
	        evtName = '_rundependencies:' + path;
	      }
	      return evtName;
	    }
	    onChange = evtOptions.debounce ? util.debounce(onChange) : onChange;
	    // TODO refactor this shi..
	    if (typeof keys[0] == 'object') {
	      for (i = 0; i < keys.length; i += 2) {
	        _this = initMK(keys[i]);
	        _keys = typeof keys[i + 1] == 'string' ? keys[i + 1].split(/\s/) : keys[i + 1];
	        for (j = 0; j < _keys.length; j++) {
	          path = _keys[j].split('.');
	          core[path.length > 1 ? 'on' : '_fastAddListener'](_this, getEvtName(path), onChange);
	        }
	      }
	    } else {
	      for (i = 0; i < keys.length; i++) {
	        _key = keys[i];
	        _this = object;
	        path = _key.split('.');
	        core[path.length > 1 ? 'on' : '_fastAddListener'](_this, getEvtName(path), onChange);
	      }
	    }
	    evtOptions.setOnInit !== false && onChange.call(typeof keys[0] == 'object' ? keys[0] : object, { key: typeof keys[0] == 'object' ? keys[1] : keys[0] });
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map, matreshka_dir_core_initmk, matreshka_dir_core_util_common);
	matreshka_dir_core_util_mediate = function (core, initMK) {
	  var mediate = core.mediate = function (object, keys, mediator) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var type = typeof keys, i, special;
	    if (type == 'object' && !(keys instanceof Array)) {
	      for (i in keys) {
	        if (keys.hasOwnProperty(i)) {
	          core.mediate(object, i, keys[i]);
	        }
	      }
	      return object;
	    }
	    keys = type == 'string' ? keys.split(/\s/) : keys;
	    for (i = 0; i < keys.length; i++)
	      (function (key) {
	        special = core._defineSpecial(object, key);
	        special.mediator = function (v) {
	          return mediator.call(object, v, special.value, key, object);
	        };
	        core.set(object, key, special.mediator(special.value), { fromMediator: true });
	      }(keys[i]));
	    return object;
	  };
	  var setClassFor = core.setClassFor = function (object, keys, Class, updateFunction) {
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var type = typeof keys, i;
	    if (type == 'object' && !(keys instanceof Array)) {
	      for (i in keys)
	        if (keys.hasOwnProperty(i)) {
	          core.setClassFor(object, i, keys[i], Class);
	        }
	      return object;
	    }
	    keys = type == 'string' ? keys.split(/\s/) : keys;
	    updateFunction = updateFunction || function (instance, data) {
	      var i, keys, removeKeys;
	      if (instance.isMKArray) {
	        instance.recreate(data);
	      } else if (instance.isMKObject) {
	        keys = instance.keys();
	        removeKeys = [];
	        for (i = 0; i < keys.length; i++) {
	          if (!(keys[i] in data)) {
	            removeKeys.push(keys[i]);
	          }
	        }
	        instance.jset(data).removeDataKeys(removeKeys);
	      } else {
	        for (i in data) {
	          if (data.hasOwnProperty(i)) {
	            instance[i] = data[i];
	          }
	        }
	      }
	    };
	    for (i = 0; i < keys.length; i++) {
	      core.mediate(object, keys[i], function (v, prevVal, key) {
	        var result;
	        if (prevVal && (prevVal.instanceOf ? prevVal.instanceOf(Class) : prevVal instanceof Class)) {
	          updateFunction.call(object, prevVal, v, key);
	          result = prevVal;
	        } else {
	          result = new Class(v, object, key);
	        }
	        return result;
	      });
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk);
	matreshka_dir_core_get_set_remove = function (core, map) {
	  var set;
	  core.get = function (object, key) {
	    return object && object[key];
	  };
	  // set method is the most often used method
	  // we need to optimize it as good as possible
	  set = core.set = function (object, key, v, evt) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var type = typeof key, _isNaN = Number.isNaN || function (value) {
	        return typeof value == 'number' && isNaN(value);
	      }, objectData, special, events, prevVal, newV, i, _evt, isChanged, triggerChange;
	    if (type == 'undefined')
	      return object;
	    if (type == 'object') {
	      for (i in key) {
	        if (key.hasOwnProperty(i)) {
	          set(object, i, key[i], v);
	        }
	      }
	      return object;
	    }
	    objectData = map.get(object);
	    if (!objectData || !objectData.special[key]) {
	      object[key] = v;
	      return object;
	    }
	    special = objectData.special[key];
	    events = objectData.events;
	    prevVal = special.value;
	    if (special.mediator && v !== prevVal && (!evt || !evt.skipMediator && !evt.fromMediator)) {
	      newV = special.mediator(v, prevVal, key, object);
	    } else {
	      newV = v;
	    }
	    isChanged = newV !== prevVal;
	    _evt = {
	      originalEvent: evt,
	      value: newV,
	      previousValue: prevVal,
	      key: key,
	      node: special.$nodes[0] || null,
	      $nodes: special.$nodes,
	      self: object,
	      isChanged: isChanged
	    };
	    if (evt && typeof evt == 'object') {
	      for (i in evt) {
	        _evt[i] = _evt[i] || evt[i];
	      }
	    }
	    triggerChange = (isChanged || _evt.force) && !_evt.silent;
	    if (triggerChange) {
	      events['beforechange:' + key] && core._fastTrigger(object, 'beforechange:' + key, _evt);
	      events.beforechange && core._fastTrigger(object, 'beforechange', _evt);
	    }
	    special.value = newV;
	    if (isChanged || _evt.force || _evt.forceHTML || newV !== v && !_isNaN(newV)) {
	      if (!_evt.silentHTML) {
	        events['_runbindings:' + key] && core._fastTrigger(object, '_runbindings:' + key, _evt);
	      }
	    }
	    if (triggerChange) {
	      events['change:' + key] && core._fastTrigger(object, 'change:' + key, _evt);
	      events.change && core._fastTrigger(object, 'change', _evt);
	    }
	    if ((isChanged || _evt.force) && !_evt.skipLinks) {
	      events['_rundependencies:' + key] && core._fastTrigger(object, '_rundependencies:' + key, _evt);
	    }
	    return object;
	  };
	  core.remove = function (object, key, evt) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object' || typeof key !== 'string')
	      return object;
	    var keys = key.split(/\s+/), _evt = { keys: keys }, objectData = map.get(object), exists, i;
	    if (evt && typeof evt == 'object') {
	      for (i in evt) {
	        _evt[i] = evt[i];
	      }
	    }
	    for (i = 0; i < keys.length; i++) {
	      key = keys[i];
	      exists = key in object;
	      if (exists) {
	        _evt.key = key;
	        _evt.value = object[key];
	        delete object[key];
	        if (objectData) {
	          core.unbindNode(object, key);
	          core.off(object, 'change:' + key + ' beforechange:' + key + ' _runbindings:' + key + ' _rundependencies:' + key);
	          delete objectData.special[key];
	          if (!_evt.silent) {
	            core._fastTrigger(object, 'delete', _evt);
	            core._fastTrigger(object, 'delete:' + key, _evt);
	          }
	        }
	      }
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_bindings_bindnode = function (core, map, initMK, util) {
	  var defaultBinders, lookForBinder;
	  defaultBinders = core.defaultBinders = [function (node) {
	      var tagName = node.tagName, binders = core.binders, b;
	      if (tagName == 'INPUT') {
	        b = binders.input(node.type);
	      } else if (tagName == 'TEXTAREA') {
	        b = binders.textarea();
	      } else if (tagName == 'SELECT') {
	        b = binders.select(node.multiple);
	      } else if (tagName == 'PROGRESS') {
	        b = binders.progress();
	      } else if (tagName == 'OUTPUT') {
	        b = binders.output();
	      }
	      return b;
	    }];
	  lookForBinder = core.lookForBinder = function (node) {
	    var result, ep = defaultBinders, i;
	    for (i = 0; i < ep.length; i++) {
	      if (result = ep[i].call(node, node)) {
	        return result;
	      }
	    }
	  };
	  core.bindOptionalNode = function (object, key, node, binder, evt) {
	    if (typeof key == 'object') {
	      /*
	      * this.bindNode({ key: $() }, { on: 'evt' }, { silent: true });
	      */
	      bindNode(object, key, node, binder, true);
	    } else {
	      bindNode(object, key, node, binder, evt, true);
	    }
	    return object;
	  };
	  var bindSandbox = core.bindSandbox = function (object, node, evt) {
	    var $nodes = core.$(node), _evt, special, i;
	    initMK(object);
	    if (!$nodes.length) {
	      throw Error('Binding error: node is missing for "sandbox".' + (typeof node == 'string' ? ' The selector is "' + node + '"' : ''));
	    }
	    special = core._defineSpecial(object, 'sandbox');
	    special.$nodes = special.$nodes.length ? special.$nodes.add($nodes) : $nodes;
	    if (object.isMK) {
	      object.$sandbox = $nodes;
	      object.sandbox = $nodes[0];
	      object.$nodes.sandbox = special.$nodes;
	      object.nodes.sandbox = special.$nodes[0];
	    }
	    if (!evt || !evt.silent) {
	      _evt = {
	        key: 'sandbox',
	        $nodes: $nodes,
	        node: $nodes[0] || null
	      };
	      if (evt) {
	        for (i in evt) {
	          _evt[i] = evt[i];
	        }
	      }
	      core._fastTrigger(object, 'bind:sandbox', _evt);
	      core._fastTrigger(object, 'bind', _evt);
	    }
	    return object;
	  };
	  var bindNode = core.bindNode = function (object, key, node, binder, evt, optional) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    if (key == 'sandbox') {
	      return bindSandbox(object, node, evt, optional);
	    }
	    initMK(object);
	    var objectData = map.get(object), win = typeof window != 'undefined' ? window : null, $nodes, keys, i, special, path, listenKey, changeHandler, _evt;
	    /*
	     * this.bindNode([['key', $(), {on:'evt'}], [{key: $(), {on: 'evt'}}]], { silent: true });
	     */
	    if (key instanceof Array) {
	      for (i = 0; i < key.length; i++) {
	        bindNode(object, key[i][0], key[i][1], key[i][2] || evt, node);
	      }
	      return object;
	    }
	    /*
	     * this.bindNode('key1 key2', node, binder, { silent: true });
	     */
	    if (typeof key == 'string' && ~key.indexOf(' ')) {
	      keys = key.split(/\s+/);
	      if (keys.length > 1) {
	        for (i = 0; i < keys.length; i++) {
	          bindNode(object, keys[i], node, binder, evt, optional);
	        }
	        return object;
	      }
	    }
	    /*
	     * this.bindNode({ key: $() }, { on: 'evt' }, { silent: true });
	     */
	    if (typeof key == 'object') {
	      for (i in key) {
	        if (key.hasOwnProperty(i)) {
	          bindNode(object, i, key[i], node, binder, evt);
	        }
	      }
	      return object;
	    }
	    /*
	     * this.bindNode('key', [ node, binder ], { silent: true });
	     */
	    // node !== win is the most uncommon bugfix ever. Don't ask what does it mean.
	    // This is about iframes, CORS and deprecated DOM API.
	    if (node && node.length == 2 && node !== win && !node[1].nodeName && (node[1].setValue || node[1].getValue)) {
	      return bindNode(object, key, node[0], node[1], binder, optional);
	    }
	    $nodes = core._getNodes(object, node);
	    if (!$nodes.length) {
	      if (optional) {
	        return object;
	      } else {
	        throw Error('Binding error: node is missing for "' + key + '".' + (typeof node == 'string' ? ' The selector is "' + node + '"' : ''));
	      }
	    }
	    if ((!evt || evt.deep !== false) && ~key.indexOf('.')) {
	      path = key.split('.');
	      changeHandler = function (evt) {
	        evt = evt && evt.originalEvent;
	        var target = evt && evt.value, i;
	        if (!target) {
	          target = object;
	          for (i = 0; i < path.length - 1; i++) {
	            target = target[path[i]];
	          }
	        }
	        bindNode(target, path[path.length - 1], $nodes, binder, evt, optional);
	        if (evt && evt.previousValue) {
	          core.unbindNode(evt.previousValue, path[path.length - 1], $nodes);
	        }
	      };
	      core._delegateListener(object, path.slice(0, path.length - 2).join('.'), 'change:' + path[path.length - 2], changeHandler);
	      changeHandler();
	      return object;
	    }
	    evt = evt || {};
	    special = core._defineSpecial(object, key);
	    special.$nodes = special.$nodes.length ? special.$nodes.add($nodes) : $nodes;
	    if (object.isMK) {
	      object.$nodes[key] = special.$nodes;
	      object.nodes[key] = special.$nodes[0];
	    }
	    for (i = 0; i < $nodes.length; i++) {
	      initBinding(object, objectData, key, $nodes, i, binder, evt, special);
	    }
	    if (!evt.silent) {
	      _evt = {
	        key: key,
	        $nodes: $nodes,
	        node: $nodes[0] || null
	      };
	      for (i in evt) {
	        _evt[i] = evt[i];
	      }
	      core._fastTrigger(object, 'bind:' + key, _evt);
	      core._fastTrigger(object, 'bind', _evt);
	    }
	    return object;
	  };
	  function initBinding(object, objectData, key, $nodes, index, binder, evt, special) {
	    var options = {
	        self: object,
	        key: key,
	        $nodes: $nodes,
	        node: $nodes[0]
	      }, node = $nodes[index], isUndefined = typeof special.value == 'undefined', _binder, _evt, foundBinder, _options, i, domEvt, mkHandler, val;
	    if (binder === null) {
	      _binder = {};
	    } else {
	      foundBinder = lookForBinder(node);
	      if (foundBinder) {
	        if (binder) {
	          for (i in binder) {
	            foundBinder[i] = binder[i];
	          }
	        }
	        _binder = foundBinder;
	      } else {
	        _binder = binder || {};
	      }
	    }
	    if (_binder.initialize) {
	      _options = { value: special.value };
	      for (i in options) {
	        _options[i] = options[i];
	      }
	      _binder.initialize.call(node, _options);
	    }
	    if (_binder.getValue && (isUndefined && evt.assignDefaultValue !== false || evt.assignDefaultValue === true)) {
	      _evt = { fromNode: true };
	      for (i in evt) {
	        _evt[i] = evt[i];
	      }
	      val = _binder.getValue.call(node, options);
	      isUndefined = typeof val == 'undefined';
	      core.set(object, key, val, _evt);
	    }
	    if (_binder.setValue) {
	      mkHandler = function (evt) {
	        var v = objectData.special[key].value,
	          // dirty hack for this one https://github.com/matreshkajs/matreshka/issues/19
	          _v = evt && typeof evt.onChangeValue == 'string' && typeof v == 'number' ? v + '' : v, i;
	        if (evt && evt.changedNode == node && evt.onChangeValue == _v && evt.binder == _binder)
	          return;
	        _options = { value: v };
	        for (i in options) {
	          _options[i] = options[i];
	        }
	        _binder.setValue.call(node, v, _options);
	      };
	      if (evt.debounce) {
	        mkHandler = util.debounce(mkHandler);
	      }
	      core._fastAddListener(object, '_runbindings:' + key, mkHandler, null, { node: node });
	      !isUndefined && mkHandler();
	    }
	    if (_binder.getValue && _binder.on) {
	      domEvt = {
	        node: node,
	        on: _binder.on,
	        instance: object,
	        key: key,
	        mkHandler: mkHandler,
	        handler: function (evt) {
	          if (domEvt.removed)
	            return;
	          var oldvalue = object[key], value, j, _options = {
	              value: oldvalue,
	              domEvent: evt,
	              originalEvent: evt.originalEvent || evt,
	              preventDefault: function () {
	                evt.preventDefault();
	              },
	              stopPropagation: function () {
	                evt.stopPropagation();
	              },
	              which: evt.which,
	              target: evt.target
	            };
	          // hasOwnProperty is not required there
	          for (j in options) {
	            _options[j] = options[j];
	          }
	          value = _binder.getValue.call(node, _options);
	          if (value !== oldvalue) {
	            core.set(object, key, value, {
	              fromNode: true,
	              changedNode: node,
	              onChangeValue: value,
	              binder: _binder
	            });
	          }
	        }
	      };
	      core.domEvents.add(domEvt);
	    }
	  }
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map, matreshka_dir_core_initmk, matreshka_dir_core_util_common);
	matreshka_dir_core_bindings_unbindnode = function (core, map, initMK) {
	  var unbindNode = core.unbindNode = function (object, key, node, evt) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var type = typeof key, objectData = map.get(object), special = objectData.special[key], $nodes, keys, i, indexOfDot, path, listenKey, _evt;
	    if (key instanceof Array) {
	      for (i = 0; i < key.length; i++) {
	        evt = node;
	        unbindNode(object, key[i][0], key[i][1] || evt, evt);
	      }
	      return object;
	    }
	    if (type == 'string') {
	      keys = key.split(/\s/);
	      if (keys.length > 1) {
	        for (i = 0; i < keys.length; i++) {
	          unbindNode(object, keys[i], node, evt);
	        }
	        return object;
	      }
	      indexOfDot = key.indexOf('.');
	      if (~indexOfDot) {
	        path = key.split('.');
	        var target = object;
	        for (i = 0; i < path.length - 1; i++) {
	          target = target[path[i]];
	        }
	        core._undelegateListener(object, path.slice(0, path.length - 2), 'change:' + path[path.length - 2]);
	        unbindNode(target, path[path.length - 1], node, evt);
	        return object;
	      }
	    }
	    if (key === null) {
	      for (key in objectData.special) {
	        if (objectData.special.hasOwnProperty(key)) {
	          unbindNode(object, key, node, evt);
	        }
	      }
	      return object;
	    } else if (type == 'object') {
	      for (i in key)
	        if (key.hasOwnProperty(i)) {
	          unbindNode(object, i, key[i], node);
	        }
	      return object;
	    } else if (!node) {
	      if (special && special.$nodes) {
	        return unbindNode(object, key, special.$nodes, evt);
	      } else {
	        return object;
	      }
	    } else if (node.length == 2 && !node[1].nodeName && (node[1].setValue || node[1].getValue || node[1].on)) {
	      // It actually ignores binder. With such a syntax you can assign definite binders to some variable and then easily delete all at once using
	      return unbindNode(object, key, node[0], evt);
	    } else if (!special) {
	      return object;
	    }
	    $nodes = core._getNodes(object, node);
	    for (i = 0; i < $nodes.length; i++) {
	      core.domEvents.remove({
	        key: key,
	        node: $nodes[i],
	        instance: object
	      });
	      special.$nodes = special.$nodes.not($nodes[i]);
	      (function (node) {
	        core._removeListener(object, '_runbindings:' + key, null, null, {
	          node: node,
	          howToRemove: function (onData, offData) {
	            return onData.node == offData.node;
	          }
	        });
	      }($nodes[i]));
	    }
	    if (object.isMK) {
	      object.$nodes[key] = special.$nodes;
	      object.nodes[key] = special.$nodes[0] || null;
	      if (key == 'sandbox') {
	        object.sandbox = special.$nodes[0] || null;
	        object.$sandbox = special.$nodes;
	      }
	    }
	    if (!evt || !evt.silent) {
	      _evt = {
	        key: key,
	        $nodes: $nodes,
	        node: $nodes[0] || null
	      };
	      for (i in evt) {
	        _evt[i] = evt[i];
	      }
	      core._fastTrigger(object, 'unbind:' + key, _evt);
	      core._fastTrigger(object, 'unbind', _evt);
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map, matreshka_dir_core_initmk);
	matreshka_dir_core_bindings_parsebindings = function (core, map, initMK, util) {
	  core.parserBrackets = {
	    left: '{{',
	    right: '}}'
	  };
	  var parseBindings = core.parseBindings = function (object, nodes) {
	    var objectData, $ = core.$, brackets = core.parserBrackets, leftBracket = brackets.left, rightBracket = brackets.right, escLeftBracket = leftBracket.replace(/(\[|\(|\?)/g, '\\$1'), escRightBracket = rightBracket.replace(/(\]|\)|\?)/g, '\\$1'), bindingsReg = new RegExp(escLeftBracket + '(.+?)' + escRightBracket, 'g'), strictBindingsReg = new RegExp('^' + escLeftBracket + '(.+?)' + escRightBracket + '$', 'g');
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return $();
	    initMK(object);
	    objectData = map.get(object);
	    if (typeof nodes == 'string') {
	      if (!~nodes.indexOf('<')) {
	        nodes = core._getNodes(object, nodes);
	      } else {
	        if (!~nodes.indexOf(leftBracket)) {
	          return $.parseHTML(nodes.replace(/^\s+|\s+$/g, ''));
	        } else {
	          nodes = $.parseHTML(nodes.replace(/^\s+|\s+$/g, ''));
	        }
	      }
	    } else if (!nodes) {
	      nodes = objectData && objectData.special && objectData.special.sandbox && objectData.special.sandbox.$nodes;
	      if (!nodes || !nodes.length) {
	        return object;
	      }
	    } else {
	      nodes = $(nodes);
	    }
	    var all = [], k = 0, childNodes, i, j, node, bindHTMLKey, atts, attr, attrValue, attrName, keys, key, binder, previous, textContent, childNode, body, matched;
	    function initLink(key, keys, attrValue) {
	      var regs = {}, i;
	      for (i = 0; i < keys.length; i++) {
	        regs[keys[i]] = new RegExp(escLeftBracket + keys[i] + escRightBracket, 'g');
	      }
	      core.linkProps(object, key, keys, function () {
	        var v = attrValue, i;
	        for (i = 0; i < keys.length; i++) {
	          v = v.replace(regs[keys[i]], arguments[i]);
	        }
	        return v;
	      }, {
	        hideProperty: true,
	        setOnInit: true
	      });
	    }
	    for (i = 0; i < nodes.length; i++) {
	      node = nodes[i];
	      // we need 2 if's for old firefoxes
	      if (node.outerHTML) {
	        // this is for firefox too
	        if (!~node.outerHTML.indexOf(leftBracket) && !~node.outerHTML.indexOf(encodeURI(leftBracket))) {
	          continue;
	        }
	      }
	      childNodes = node.getElementsByTagName('*');
	      for (j = 0; j < childNodes.length; j++) {
	        all[k++] = childNodes[j];
	      }
	      all[k++] = node;
	    }
	    if (!all.length) {
	      return $();
	    }
	    for (j = 0; j < all.length; j++) {
	      node = all[j];
	      if (node.tagName != 'TEXTAREA') {
	        for (i = 0; i < node.childNodes.length; i++) {
	          childNode = node.childNodes[i];
	          if (childNode.nodeType == 3 && ~childNode.nodeValue.indexOf(leftBracket)) {
	            textContent = childNode.nodeValue.replace(bindingsReg, '<span mk-html="$1"></span>');
	            insertHTML(node, childNode, textContent);
	            node.removeChild(childNode);
	          }
	        }
	      }
	    }
	    for (i = 0; i < nodes.length; i++) {
	      childNodes = nodes[i].querySelectorAll('[mk-html]');
	      for (j = 0; j < childNodes.length; j++) {
	        all[k++] = childNodes[j];
	      }
	    }
	    for (i = 0; i < all.length; i++) {
	      node = all[i];
	      bindHTMLKey = node.getAttribute('mk-html');
	      if (bindHTMLKey) {
	        node.removeAttribute('mk-html');
	        core.bindNode(object, bindHTMLKey, node, {
	          setValue: function (v) {
	            this.innerHTML = v;
	          }
	        });
	      }
	      atts = node.attributes;
	      for (j = 0; j < atts.length; j++) {
	        attr = atts[j];
	        attrValue = attr.value;
	        attrName = attr.name;
	        matched = attrValue.match(bindingsReg);
	        if (matched) {
	          keys = matched.map(function (key) {
	            return key.replace(bindingsReg, '$1');
	          });
	          if (keys.length == 1 && strictBindingsReg.test(attrValue)) {
	            key = keys[0];
	          } else {
	            key = core.randomString();
	            initLink(key, keys, attrValue);
	          }
	          if ((attrName == 'value' && node.type != 'checkbox' && node.type != 'radio' || attrName == 'checked' && (node.type == 'checkbox' || node.type == 'radio')) && core.lookForBinder(node)) {
	            node.setAttribute(attrName, '');
	            core.bindNode(object, key, node);
	          } else {
	            core.bindNode(object, key, node, core.binders.attr(attrName));
	          }
	        }
	      }
	    }
	    return nodes;
	  };
	  function insertHTML(node, childNode, html) {
	    var previous = childNode.previousSibling, body;
	    try {
	      if (previous) {
	        previous.insertAdjacentHTML('afterend', html);
	      } else {
	        node.insertAdjacentHTML('afterbegin', html);
	      }
	    } catch (e) {
	      // in case user uses very old webkit-based browser
	      /* istanbul ignore next */
	      body = document.body;
	      /* istanbul ignore next */
	      if (previous) {
	        body.appendChild(previous);
	        previous.insertAdjacentHTML('afterend', html);
	        body.removeChild(previous);
	      } else {
	        body.appendChild(node);
	        node.insertAdjacentHTML('afterbegin', html);
	        body.removeChild(node);
	      }
	    }
	  }
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map, matreshka_dir_core_initmk, matreshka_dir_core_util_common);
	matreshka_dir_core_bindings_getnodes = function (core, map, initMK, util) {
	  var selectAll, boundAll, bound;
	  /**
	  * @private
	  * @summary selectNodes selects nodes match to custom selectors such as :sandbox and :bound(KEY)
	  */
	  function selectNodes(object, selectors) {
	    var objectData = map.get(object), $ = core.$, result = $(), execResult, $bound, node, selector, i, j, random, subSelector, key, selected;
	    if (!object || typeof object != 'object' || !objectData)
	      return result;
	    // replacing :sandbox to :bound(sandbox)
	    selectors = selectors.split(',');
	    for (i = 0; i < selectors.length; i++) {
	      selector = selectors[i];
	      if (execResult = /\s*:bound\(([^(]*)\)\s*([\S\s]*)\s*|\s*:sandbox\s*([\S\s]*)\s*/.exec(selector)) {
	        key = execResult[3] !== undefined ? 'sandbox' : execResult[1];
	        subSelector = execResult[3] !== undefined ? execResult[3] : execResult[2];
	        // getting KEY from :bound(KEY)
	        $bound = objectData.special[key] && objectData.special[key].$nodes;
	        if (!$bound || !$bound.length) {
	          continue;
	        }
	        // if native selector passed after :bound(KEY) is not empty string
	        // for example ":bound(KEY) .my-selector"
	        if (subSelector) {
	          // if native selector contains children selector
	          // for example ":bound(KEY) > .my-selector"
	          if (subSelector.indexOf('>') === 0) {
	            // selecting children
	            for (j = 0; j < $bound.length; j++) {
	              node = $bound[j];
	              random = 'm' + core.randomString();
	              node.setAttribute(random, random);
	              selected = node.querySelectorAll('[' + random + '="' + random + '"]' + subSelector);
	              result = result.add(util.toArray(selected));
	              node.removeAttribute(random);
	            }
	          } else {
	            // if native selector doesn't contain children selector
	            result = result.add($bound.find(subSelector));
	          }
	        } else {
	          // if native selector is empty string
	          result = result.add($bound);
	        }  // if it's native selector
	      } else {
	        result = result.add(selector);
	      }
	    }
	    return result;
	  }
	  selectAll = core.selectAll = function (object, s) {
	    var $sandbox, objectData = map.get(object);
	    if (!objectData || typeof s != 'string')
	      return core.$();
	    if (/:sandbox|:bound\(([^(]*)\)/.test(s)) {
	      return selectNodes(object, s);
	    } else {
	      $sandbox = objectData.special;
	      $sandbox = $sandbox && $sandbox.sandbox && $sandbox.sandbox.$nodes;
	      return $sandbox && $sandbox.find(s);
	    }
	  }, core.select = function (object, s) {
	    var sandbox, objectData = map.get(object);
	    if (!objectData || typeof s != 'string')
	      return null;
	    if (/:sandbox|:bound\(([^(]*)\)/.test(s)) {
	      return selectNodes(object, s)[0] || null;
	    } else {
	      sandbox = objectData.special;
	      sandbox = sandbox && sandbox.sandbox && sandbox.sandbox.$nodes && sandbox.sandbox.$nodes[0];
	      return sandbox && sandbox.querySelector(s);
	    }
	  };
	  boundAll = core.boundAll = function (object, key) {
	    var $ = core.$, objectData = map.get(object), special, keys, $nodes, i;
	    if (!objectData)
	      return $();
	    if (key && ~key.indexOf('.')) {
	      keys = key.split('.');
	      key = keys.splice(-1)[0];
	      return boundAll(util.deepFind(object, keys), key);
	    }
	    initMK(object);
	    special = objectData.special, key = !key ? 'sandbox' : key;
	    keys = typeof key == 'string' ? key.split(/\s+/) : key;
	    if (keys.length <= 1) {
	      return keys[0] in special ? special[keys[0]].$nodes : $();
	    } else {
	      $nodes = $();
	      for (i = 0; i < keys.length; i++) {
	        $nodes = $nodes.add(special[keys[i]].$nodes);
	      }
	      return $nodes;
	    }
	  };
	  core.$bound = function (object, key) {
	    return boundAll(object, key);
	  };
	  bound = core.bound = function (object, key) {
	    var objectData = map.get(object), special, keys, i;
	    if (!objectData)
	      return null;
	    if (key && ~key.indexOf('.')) {
	      keys = key.split('.');
	      key = keys.splice(-1)[0];
	      return bound(util.deepFind(object, keys), key);
	    }
	    initMK(object);
	    special = objectData.special;
	    key = !key ? 'sandbox' : key;
	    keys = typeof key == 'string' ? key.split(/\s+/) : key;
	    if (keys.length <= 1) {
	      return keys[0] in special ? special[keys[0]].$nodes[0] || null : null;
	    } else {
	      for (i = 0; i < keys.length; i++) {
	        if (keys[i] in special && special[keys[i]].$nodes.length) {
	          return special[keys[i]].$nodes[0];
	        }
	      }
	    }
	    return null;
	  };
	  core._getNodes = function (object, s) {
	    return typeof s == 'string' && !/</.test(s) && /:sandbox|:bound\(([^(]*)\)/.test(s) ? selectNodes(object, s) : core.$(s);
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map, matreshka_dir_core_initmk, matreshka_dir_core_util_common);
	matreshka_dir_core_var_domevtreg = /([^\:\:]+)(::([^\(\)]+)?(\((.*)\))?)?/;
	matreshka_dir_core_events_trigger = function (core, map, utils, domEvtReg) {
	  var triggerDOMEvent = function (el, name, args) {
	    var doc = document, event;
	    if (doc.createEvent) {
	      /* istanbul ignore next */
	      event = doc.createEvent('Event');
	      event.initEvent(name, true, true);
	      event.mkArgs = args;
	      el.dispatchEvent(event);
	    } else if (typeof Event != 'undefined') {
	      event = new Event(name, {
	        bubbles: true,
	        cancelable: true
	      });
	      event.mkArgs = args;
	      el.dispatchEvent(event);
	    } else {
	      /* istanbul ignore next */
	      throw Error('Cannot trigger DOM event');
	    }
	    return event;
	  };
	  core.trigger = function (object, names) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var objectData = map.get(object), allEvents = objectData && objectData.events, args, i, j, l, events, ev, name, executed, nodes, _nodes, selector;
	    if (names && allEvents) {
	      args = utils.toArray(arguments, 2);
	      names = names.split(/\s/);
	      for (i = 0; i < names.length; i++) {
	        name = names[i];
	        if (~name.indexOf('::')) {
	          executed = domEvtReg.exec(name);
	          nodes = objectData.special[executed[3] || 'sandbox'];
	          nodes = nodes && nodes.$nodes;
	          _nodes = core.$();
	          selector = executed[5];
	          if (selector) {
	            for (j = 0; j < nodes.length; j++) {
	              _nodes = _nodes.add(nodes.find(selector));
	            }
	          } else {
	            _nodes = nodes;
	          }
	          for (j = 0; j < _nodes.length; j++) {
	            triggerDOMEvent(_nodes[i], executed[1], args);
	          }
	        } else {
	          events = allEvents[name];
	          if (events) {
	            j = -1, l = events.length;
	            while (++j < l)
	              (ev = events[j]).callback.apply(ev.ctx, args);
	          }
	        }
	      }
	    }
	    return object;
	  };
	  core._fastTrigger = function (object, name, evt) {
	    var events = map.get(object).events[name], i, l, ev;
	    if (events) {
	      i = -1, l = events.length;
	      while (++i < l)
	        (ev = events[i]).callback.call(ev.ctx, evt);
	    }
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map, matreshka_dir_core_util_common, matreshka_dir_core_var_domevtreg);
	matreshka_dir_core_events_on = function (core, initMK, util) {
	  var on = core.on = function (object, names, callback, triggerOnInit, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var t, i, name, path, lastIndexOfET;
	    // if event-callback object is passed to the function
	    if (typeof names == 'object' && !(names instanceof Array)) {
	      for (i in names) {
	        if (names.hasOwnProperty(i)) {
	          on(object, i, names[i], callback, triggerOnInit);
	        }
	      }
	      return object;
	    }
	    // callback is required
	    if (!callback)
	      throw Error('callback is not a function for event(s) "' + names + '"');
	    names = names instanceof Array ? names : util.trim(names).replace(/\s+/g, ' ')  // single spaces only
	.split(/\s(?![^(]*\))/g)  // split by spaces
	;
	    // allow to flip triggerOnInit and context
	    if (typeof triggerOnInit != 'boolean' && typeof triggerOnInit != 'undefined') {
	      t = context;
	      context = triggerOnInit;
	      triggerOnInit = t;
	    }
	    for (i = 0; i < names.length; i++) {
	      name = names[i];
	      // index of @
	      lastIndexOfET = name.lastIndexOf('@');
	      if (~lastIndexOfET) {
	        path = name.slice(0, lastIndexOfET);
	        // fallback for older apps
	        if (!path) {
	          path = '*';
	        } else if (~path.indexOf('@')) {
	          path = path.replace(/([^@]*)@/g, function ($0, key) {
	            return (key || '*') + '.';
	          }).replace(/\.$/, '.*') || '*';
	        }
	        name = name.slice(lastIndexOfET + 1);
	        core._delegateListener(object, path, name, callback, context || object, evtData);
	      } else {
	        core._addListener(object, name, callback, context, evtData);
	      }
	    }
	    // trigger after event is initialized
	    if (triggerOnInit === true) {
	      callback.call(context || object, { triggeredOnInit: true });
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk, matreshka_dir_core_util_common);
	matreshka_dir_core_events_off = function (core, initMK, util, map) {
	  var off = core.off = function (object, names, callback, context) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var objectData = map.get(object), i, path, lastIndexOfET, name;
	    if (!objectData)
	      return object;
	    // if event-callback object is passed to the function
	    if (typeof names == 'object' && !(names instanceof Array)) {
	      for (i in names)
	        if (names.hasOwnProperty(i)) {
	          off(object, i, names[i], callback);
	        }
	      return object;
	    }
	    if (!names && !callback && !context) {
	      objectData.events = {};
	      return object;
	    }
	    names = util.trim(names).replace(/\s+/g, ' ')  // single spaces only
	.split(/\s(?![^(]*\))/g);
	    if (typeof object != 'object') {
	      return object;
	    }
	    for (i = 0; i < names.length; i++) {
	      name = names[i];
	      // index of @
	      lastIndexOfET = name.lastIndexOf('@');
	      if (~lastIndexOfET) {
	        path = name.slice(0, lastIndexOfET);
	        name = name.slice(lastIndexOfET + 1).replace(/@/g, '.');
	        core._undelegateListener(object, path, name, callback, context);
	      } else {
	        core._removeListener(object, name, callback, context);
	      }
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk, matreshka_dir_core_util_common, matreshka_dir_core_var_map);
	matreshka_dir_core_var_specialevtreg = /_rundependencies:|_runbindings:|change:/;
	matreshka_dir_core_events_addlistener = function (core, initMK, map, specialEvtReg, domEvtReg) {
	  var _addListener;
	  core._fastAddListener = function (object, name, callback, context, evtData) {
	    var allEvents = map.get(object).events, events = allEvents[name] || (allEvents[name] = []);
	    events.push({
	      callback: callback,
	      context: context,
	      ctx: context || object,
	      name: name,
	      node: evtData && evtData.node
	    });
	    if (specialEvtReg.test(name)) {
	      // define needed accessors for KEY
	      core._defineSpecial(object, name.replace(specialEvtReg, ''));
	    }
	    return object;
	  };
	  _addListener = core._addListener = function (object, name, callback, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return false;
	    initMK(object);
	    var ctx = context || object, allEvents = map.get(object).events, events = allEvents[name] || (allEvents[name] = []), l = events.length, defaultEvtData = {
	        callback: callback,
	        //_callback: callback._callback || callback,
	        context: context,
	        ctx: ctx,
	        //howToRemove: null,
	        name: name
	      }, i, ev, _evtData, executed;
	    for (i = 0; i < l; i++) {
	      ev = events[i];
	      if ((ev.callback == callback || ev.callback == callback._callback) && ev.context == context) {
	        return false;
	      }
	    }
	    if (evtData) {
	      _evtData = {};
	      for (i in evtData) {
	        _evtData[i] = evtData[i];
	      }
	      for (i in defaultEvtData) {
	        _evtData[i] = defaultEvtData[i];
	      }
	    } else {
	      _evtData = defaultEvtData;
	    }
	    events.push(_evtData);
	    executed = domEvtReg.exec(name);
	    if (executed && executed[2]) {
	      core._addDOMListener(object, executed[3] || 'sandbox', executed[1], executed[5], callback, ctx, _evtData);
	    } else if (specialEvtReg.test(name)) {
	      // define needed accessors for KEY
	      core._defineSpecial(object, name.replace(specialEvtReg, ''));
	    }
	    core._fastTrigger(object, 'addevent:' + name, _evtData);
	    core._fastTrigger(object, 'addevent', _evtData);
	    return true;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk, matreshka_dir_core_var_map, matreshka_dir_core_var_specialevtreg, matreshka_dir_core_var_domevtreg);
	matreshka_dir_core_events_removelistener = function (core, map) {
	  var domEvtNameRegExp = /([^\:\:]+)(::([^\(\)]+)(\((.*)\))?)?/;
	  core._removeListener = function (object, name, callback, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var objectData = map.get(object), j = 0, l, events, retain, evt, i, executed, howToRemove, removeEvtData;
	    if (!objectData)
	      return object;
	    events = objectData.events[name] || [];
	    retain = objectData.events[name] = [];
	    l = events.length;
	    evtData = evtData || {};
	    executed = domEvtNameRegExp.exec(name);
	    if (executed && executed[2]) {
	      core._removeDOMListener(object, executed[3], executed[1], executed[5], callback, context);
	    } else {
	      for (i = 0; i < l; i++) {
	        evt = events[i];
	        howToRemove = evt.howToRemove || evtData.howToRemove;
	        if (howToRemove ? !howToRemove(evt, evtData) : callback && (callback !== evt.callback && callback._callback !== evt.callback) || context && context !== evt.context) {
	          retain[j++] = evt;
	        } else {
	          removeEvtData = {
	            name: name,
	            callback: evt.callback,
	            context: evt.context
	          };
	          core._fastTrigger(object, 'removeevent:' + name, removeEvtData);
	          core._fastTrigger(object, 'removeevent', removeEvtData);
	        }
	      }
	      if (!retain.length) {
	        delete objectData.events[name];
	      }
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_events_delegatelistener = function (core, initMK, map, specialEvtReg) {
	  var _delegateListener = core._delegateListener = function (object, path, name, callback, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    var objectData = map.get(object), executed = /([^\.]+)\.(.*)/.exec(path), f, firstKey = executed ? executed[1] : path, changeKey, obj;
	    path = executed ? executed[2] : '';
	    evtData = evtData || {};
	    if (firstKey) {
	      if (firstKey == '*') {
	        if (object.isMKArray) {
	          f = function (evt) {
	            (evt && evt.added ? evt.added : object).forEach(function (item) {
	              item && _delegateListener(item, path, name, callback, context, evtData);
	            });
	          };
	          f._callback = callback;
	          core._addListener(object, 'add', f, context, evtData);
	          f();
	        } else if (object.isMKObject) {
	          f = function (evt) {
	            var target = object[evt.key];
	            if (target && evt && evt.key in objectData.keys) {
	              _delegateListener(target, path, name, callback, context, evtData);
	            }
	          };
	          object.each(function (item) {
	            _delegateListener(item, path, name, callback, context, evtData);
	          });
	          f._callback = callback;
	          core._addListener(object, 'change', f, context, evtData);
	        }  /* else {
	           	throw Error('"*" events are only allowed for MK.Array and MK.Object');
	           }*/
	      } else {
	        f = function (evt) {
	          if (evt && evt._silent)
	            return;
	          var target = object[firstKey], changeKey, triggerChange = true, i, changeEvents;
	          evtData.path = path;
	          evtData.previousValue = evt && evt.previousValue || evtData.previousValue && evtData.previousValue[firstKey];
	          if (evt && evt.previousValue && map.has(evt.previousValue)) {
	            core._undelegateListener(evt.previousValue, path, name, callback, context, evtData);
	          }
	          if (typeof target == 'object' && target) {
	            _delegateListener(target, path, name, callback, context, evtData);
	          }
	          if (specialEvtReg.test(name)) {
	            changeKey = name.replace(specialEvtReg, '');
	            if (!path && evtData.previousValue && evtData.previousValue[changeKey] !== target[changeKey]) {
	              changeEvents = map.get(evtData.previousValue).events[name];
	              if (changeEvents) {
	                for (i = 0; i < changeEvents.length; i++) {
	                  if (changeEvents[i].path === path) {
	                    triggerChange = false;
	                  }
	                }
	              }
	              if (triggerChange) {
	                core.set(target, changeKey, target[changeKey], {
	                  force: true,
	                  previousValue: evtData.previousValue[changeKey],
	                  previousObject: evtData.previousValue,
	                  _silent: true
	                });
	              }
	            }
	          }
	        };
	        f._callback = callback;
	        core._addListener(object, 'change:' + firstKey, f, context, evtData);
	        f();
	      }
	    } else {
	      core._addListener(object, name, callback, context, evtData);
	    }
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk, matreshka_dir_core_var_map, matreshka_dir_core_var_specialevtreg);
	matreshka_dir_core_events_undelegatelistener = function (core, map) {
	  var _undelegateListener = core._undelegateListener = function (object, path, name, callback, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var executed = /([^\.]+)\.(.*)/.exec(path), firstKey = executed ? executed[1] : path, p = path, objectData = map.get(object), events, i;
	    path = executed ? executed[2] : '';
	    if (firstKey) {
	      if (firstKey == '*') {
	        if (object.isMKArray) {
	          if (callback) {
	            _undelegateListener(object, path, 'add', callback, context, evtData);
	          } else {
	            events = objectData.events.add || [];
	            for (i = 0; i < events.length; i++) {
	              if (events[i].path == p) {
	                _undelegateListener(object, path, 'add', events[i].callback);
	              }
	            }
	          }
	          object.forEach(function (item) {
	            item && _undelegateListener(item, path, name, callback, context);
	          });
	        } else if (object.isMKObject) {
	          if (callback) {
	            _undelegateListener(object, path, 'change', callback, context);
	          } else {
	            events = objectData.events.change || [];
	            for (i = 0; i < events.length; i++) {
	              if (events[i].path == p) {
	                _undelegateListener(object, path, 'change', events[i].callback);
	              }
	            }
	          }
	          object.each(function (item) {
	            item && _undelegateListener(item, path, name, callback, context);
	          });
	        }
	      } else {
	        if (callback) {
	          core._removeListener(object, 'change:' + firstKey, callback, context, evtData);
	        } else {
	          events = objectData.events['change:' + firstKey] || [];
	          for (i = 0; i < events.length; i++) {
	            if (events[i].path == p) {
	              core._removeListener(object, 'change:' + firstKey, events[i].callback);
	            }
	          }
	        }
	        if (typeof object[firstKey] == 'object') {
	          _undelegateListener(object[firstKey], path, name, callback, context, evtData);
	        }
	      }
	    } else {
	      core._removeListener(object, name, callback, context, evtData);
	    }
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_events_domevents = function (core, map) {
	  var list = {};
	  /**
	  * @private
	  * @since 0.0.4
	  * @todo optimize
	  * @summary This object is used to map DOM nodes and their DOM events
	  */
	  core.domEvents = {
	    // adds events to the map
	    add: function (o) {
	      var $ = core.$, objectData = map.get(o.instance);
	      if (o.node) {
	        if (typeof o.on == 'function') {
	          o.on.call(o.node, o.handler);
	        } else {
	          $(o.node).on(o.on.split(/\s+/).join('.mk ') + '.mk', o.handler);
	        }
	      }
	      (list[objectData.id] = list[objectData.id] || []).push(o);
	    },
	    // removes events from the map
	    remove: function (o) {
	      var objectData = map.get(o.instance), evts = list[objectData.id], $ = core.$, evt, i;
	      if (!evts)
	        return;
	      for (i = 0; i < evts.length; i++) {
	        evt = evts[i];
	        if (evt.node !== o.node)
	          continue;
	        // remove Matreshka event
	        evt.mkHandler && core._removeListener(o.instance, '_runbindings:' + o.key, evt.mkHandler);
	        // remove DOM event
	        if (typeof evt.on == 'string') {
	          $(o.node).off(evt.on + '.mk', evt.handler);
	        }
	        evt.removed = true;
	        list[objectData.id].splice(i--, 1);
	      }
	    }
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_events_adddomlistener = function (core, initMK, map) {
	  core._addDOMListener = function (object, key, domEvtName, selector, callback, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    initMK(object);
	    selector = selector || null;
	    evtData = evtData || {};
	    var objectData = map.get(object), domEvtHandler = function (domEvt) {
	        var node = this, $ = core.$, $nodes = $(node), mkArgs = domEvt.originalEvent ? domEvt.originalEvent.mkArgs : domEvt.mkArgs, evt = {
	            self: object,
	            node: node,
	            $nodes: $nodes,
	            key: key,
	            domEvent: domEvt,
	            originalEvent: domEvt.originalEvent || domEvt,
	            preventDefault: function () {
	              domEvt.preventDefault();
	            },
	            stopPropagation: function () {
	              domEvt.stopPropagation();
	            },
	            which: domEvt.which,
	            target: domEvt.target
	          }, randomID, is;
	        callback.apply(context, mkArgs ? mkArgs : [evt]);
	      }, fullEvtName = domEvtName + '.' + objectData.id + key, bindHandler = function (evt) {
	        evt && evt.$nodes && evt.$nodes.on(fullEvtName, selector, domEvtHandler);
	      }, unbindHandler = function (evt) {
	        evt && evt.$nodes && evt.$nodes.off(fullEvtName, selector, domEvtHandler);
	      };
	    domEvtHandler._callback = callback;
	    core._defineSpecial(object, key);
	    bindHandler._callback = unbindHandler._callback = callback;
	    if (core._addListener(object, 'bind:' + key, bindHandler, context, evtData) && core._addListener(object, 'unbind:' + key, unbindHandler, context, evtData)) {
	      bindHandler({ $nodes: objectData.special[key] && objectData.special[key].$nodes });
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk, matreshka_dir_core_var_map);
	matreshka_dir_core_events_removedomlistener = function (core, map) {
	  core._removeDOMListener = function (object, key, domEvtName, selector, callback, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var objectData = map.get(object);
	    if (!objectData)
	      return object;
	    selector = selector || null;
	    evtData = evtData || {};
	    if (key && objectData.special[key]) {
	      objectData.special[key].$nodes.off(domEvtName + '.' + objectData.id + key, selector, callback);
	      core._removeListener(object, 'bind:' + key, callback, context, evtData);
	      core._removeListener(object, 'unbind:' + key, callback, context, evtData);
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_core_events_once = function (core, initMK) {
	  var once = core.once = function (object, names, callback, context, evtData) {
	    var i;
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    if (typeof names == 'object') {
	      for (i in names)
	        if (names.hasOwnProperty(i)) {
	          once(object, i, names[i], callback, context);
	        }
	      return object;
	    }
	    if (!callback)
	      throw Error('callback is not function for event "' + names + '"');
	    initMK(object);
	    names = names.split(/\s+/);
	    for (i = 0; i < names.length; i++) {
	      (function (name) {
	        var once = function (func) {
	          var ran = false, memo;
	          return function () {
	            if (ran)
	              return memo;
	            ran = true;
	            memo = func.apply(this, arguments);
	            func = null;
	            return memo;
	          };
	        }(callback);
	        once._callback = callback;
	        core.on(object, name, once, context);
	      }(names[i]));
	    }
	    return object;
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk);
	matreshka_dir_core_events_ondebounce = function (core, initMK, util) {
	  var onDebounce = core.onDebounce = function (object, names, callback, debounceDelay, triggerOnInit, context, evtData) {
	    /* istanbul ignore if  */
	    if (!object || typeof object != 'object')
	      return object;
	    var cbc, i;
	    if (typeof names == 'object') {
	      for (i in names)
	        if (names.hasOwnProperty(i)) {
	          onDebounce(object, i, names[i], callback, debounceDelay, triggerOnInit, context);
	        }
	      return object;
	    }
	    // flip args
	    if (typeof debounceDelay != 'number') {
	      evtData = context;
	      context = triggerOnInit;
	      triggerOnInit = debounceDelay;
	      debounceDelay = 0;
	    }
	    cbc = util.debounce(callback, debounceDelay);
	    // set reference to real callback for .off method
	    cbc._callback = callback;
	    return core.on(object, names, cbc, triggerOnInit, context, evtData);
	  };
	}(matreshka_dir_core_var_core, matreshka_dir_core_initmk, matreshka_dir_core_util_common);
	matreshka_dir_matreshka_magic = function (core, map) {
	  core.map = map;
	  return core;
	}(matreshka_dir_core_var_core, matreshka_dir_core_var_map);
	matreshka_dir_matreshka_dynamic = function (magic, map) {
	  /*
	  
	  	This is the list of methods that inherited from magic. We need a way how to
	  	inherit them dynamically. method.apply is slow	*/
	  return {
	    isMK: true,
	    on: function (names, callback, triggerOnInit, context, evtData) {
	      return magic.on(this, names, callback, triggerOnInit, context, evtData);
	    },
	    onDebounce: function (names, callback, debounceDelay, triggerOnInit, context, evtData) {
	      return magic.onDebounce(this, names, callback, debounceDelay, triggerOnInit, context, evtData);
	    },
	    once: function (names, callback, context) {
	      return magic.once(this, names, callback, context);
	    },
	    off: function (names, callback, context) {
	      return magic.off(this, names, callback, context);
	    },
	    trigger: function () {
	      var args = magic.toArray(arguments);
	      args.unshift(this);
	      return magic.trigger.apply(magic, args);
	    },
	    bindNode: function (key, node, binder, evt, optional) {
	      return magic.bindNode(this, key, node, binder, evt, optional);
	    },
	    bindOptionalNode: function (key, node, binder, evt) {
	      return magic.bindOptionalNode(this, key, node, binder, evt);
	    },
	    bindSandbox: function (node, evt) {
	      return magic.bindSandbox(this, node, evt);
	    },
	    unbindNode: function (key, node, evt) {
	      return magic.unbindNode(this, key, node, evt);
	    },
	    boundAll: function (key) {
	      return magic.boundAll(this, key);
	    },
	    $bound: function (key) {
	      return magic.boundAll(this, key);
	    },
	    bound: function (key) {
	      return magic.bound(this, key);
	    },
	    selectAll: function (s) {
	      return magic.selectAll(this, s);
	    },
	    $: function (s) {
	      return magic.selectAll(this, s);
	    },
	    select: function (s) {
	      return magic.select(this, s);
	    },
	    defineGetter: function (key, getter) {
	      return magic.defineGetter(this, key, getter);
	    },
	    defineSetter: function (key, setter) {
	      return magic.defineSetter(this, key, setter);
	    },
	    mediate: function (keys, mediator) {
	      return magic.mediate(this, keys, mediator);
	    },
	    setClassFor: function (keys, Class, updateFunction) {
	      return magic.setClassFor(this, keys, Class, updateFunction);
	    },
	    linkProps: function (key, keys, getter, setOnInit) {
	      return magic.linkProps(this, key, keys, getter, setOnInit);
	    },
	    get: function (key) {
	      return this[key];
	    },
	    set: function (key, v, evt) {
	      return magic.set(this, key, v, evt);
	    },
	    remove: function (key, evt) {
	      return magic.remove(this, key, evt);
	    },
	    define: function (key, descriptor) {
	      return magic.define(this, key, descriptor);
	    },
	    delay: function (f, delay, thisArg) {
	      var _this = this;
	      if (typeof delay == 'object') {
	        thisArg = delay;
	        delay = 0;
	      }
	      setTimeout(function () {
	        f.call(thisArg || _this);
	      }, delay || 0);
	      return _this;
	    },
	    parseBindings: function (nodes) {
	      return magic.parseBindings(this, nodes);
	    },
	    _initMK: function () {
	      var _this = this;
	      if (map.has(_this))
	        return _this;
	      magic.initMK(_this);
	      _this.nodes = {};
	      _this.$nodes = {};
	      _this.sandbox = null;
	      _this.$sandbox = magic.$();
	      return _this;
	    },
	    toString: function () {
	      return '[object Matreshka]';
	    },
	    constructor: function Matreshka() {
	      /* istanbul ignore if  */
	      if (!(this instanceof Matreshka)) {
	        throw new TypeError('Cannot call a class as a function');
	      }
	      return this._initMK();
	    }
	  };
	}(matreshka_dir_matreshka_magic, matreshka_dir_core_var_map);
	matreshka_dir_matreshka_static = function (Class) {
	  return {
	    version: 'dev',
	    Class: Class
	  };
	}(matreshka_dir_xclass);
	matreshka_dir_matreshkaclass = function (Class, magic, dynamic, _static) {
	  /* istanbul ignore if  */
	  if (!Class)
	    throw Error('Class function is missing');
	  _static.to = function (data) {
	    var result, i;
	    if (typeof data == 'object') {
	      if ('length' in data) {
	        result = [];
	        for (i = 0; i < data.length; i++) {
	          result[i] = MK.to(data[i]);
	        }
	        result = new MK.Array().recreate(result);
	      } else {
	        result = {};
	        for (i in data) {
	          if (data.hasOwnProperty(i)) {
	            result[i] = MK.to(data[i]);
	          }
	        }
	        result = new MK.Object(result);
	      }
	    } else {
	      result = data;
	    }
	    return result;
	  };
	  var MK = Class(dynamic, _static);
	  MK.setProto = function (proto) {
	    /* jshint proto: true */
	    var __proto__ = '__proto__', prototype = MK.prototype;
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(MK.prototype, proto);
	    } else {
	      if (!(__proto__ in MK.prototype)) {
	        Object.defineProperty(prototype, __proto__, Object.getOwnPropertyDescriptor(Object.prototype, __proto__));
	      }
	      MK.prototype[__proto__] = proto;
	    }
	    return MK;
	  };
	  return magic.extend(MK.Matreshka = MK.prototype.Matreshka = MK, magic);
	}(matreshka_dir_xclass, matreshka_dir_matreshka_magic, matreshka_dir_matreshka_dynamic, matreshka_dir_matreshka_static);
	matreshka_dir_matreshka_object_dynamic = function (map, MK) {
	  return {
	    keys: function () {
	      var _this = this._initMK(), keys = map.get(_this).keys, result = [], p;
	      for (p in keys)
	        if (keys.hasOwnProperty(p)) {
	          result.push(p);
	        }
	      return result;
	    },
	    toObject: function () {
	      var _this = this._initMK(), o = {}, keys = map.get(_this).keys, p;
	      for (p in keys) {
	        if (keys.hasOwnProperty(p)) {
	          o[p] = _this[p];
	        }
	      }
	      return o;
	    },
	    toNative: function () {
	      return this.toObject();
	    },
	    toJSON: function () {
	      var _this = this._initMK(), JSON = {}, keys = map.get(_this).keys, p;
	      for (p in keys)
	        if (keys.hasOwnProperty(p)) {
	          JSON[p] = _this[p] && _this[p].toJSON ? _this[p].toJSON() : _this[p];
	        }
	      return JSON;
	    },
	    keyOf: function (o) {
	      var _this = this._initMK(), keys = map.get(_this).keys, p;
	      for (p in keys)
	        if (keys.hasOwnProperty(p)) {
	          if (o && o.isMK) {
	            if (o.eq(_this[p])) {
	              return p;
	            }
	          } else if (o === _this[p]) {
	            return p;
	          }
	        }
	      return null;
	    },
	    jset: function (key, v, evt) {
	      var _this = this._initMK(), type = typeof key, objectData = map.get(_this), i;
	      if (type == 'undefined')
	        return _this;
	      if (key && type == 'object') {
	        key = key.toJSON ? key.toJSON() : key;
	        for (i in key) {
	          objectData.keys[i] = 1;
	          MK._defineSpecial(_this, i);
	          _this.set(i, key[i], v);
	        }
	        return _this;
	      }
	      objectData.keys[key] = 1;
	      MK._defineSpecial(_this, key);
	      return _this.set(key, v, evt);
	    },
	    addDataKeys: function (_keys) {
	      var _this = this._initMK(), objectData = map.get(_this), args = arguments, i, keys;
	      if (!args.length || !_keys)
	        return _this;
	      keys = args.length > 1 ? args : _keys instanceof Array ? _keys : MK.trim(_keys).split(/\s+/);
	      for (i = 0; i < keys.length; i++) {
	        if (!objectData.keys[keys[i]]) {
	          objectData.keys[keys[i]] = 1;
	          MK._defineSpecial(_this, keys[i]);
	          MK._fastTrigger(_this, 'modify', {
	            key: keys[i],
	            value: _this[keys[i]]
	          });
	        }
	      }
	      return _this;
	    },
	    removeDataKeys: function (keys) {
	      var _this = this._initMK(), objectData = map.get(_this), args = arguments, i, evt;
	      if (!args.length || !keys)
	        return _this;
	      keys = args.length > 1 ? args : keys instanceof Array ? keys : MK.trim(keys).split(/\s+/);
	      for (i = 0; i < keys.length; i++) {
	        if (objectData.keys[keys[i]]) {
	          delete objectData.keys[keys[i]];
	          evt = {
	            key: keys[i],
	            value: _this[keys[i]]
	          };
	          MK._fastTrigger(_this, 'remove', evt);
	          MK._fastTrigger(_this, 'modify', evt);
	        }
	      }
	      return _this;
	    },
	    each: function (callback, thisArg) {
	      var _this = this._initMK(), objectData = map.get(_this), p;
	      for (p in objectData.keys)
	        if (objectData.keys.hasOwnProperty(p)) {
	          callback.call(thisArg, _this[p], p, _this);
	        }
	      return _this;
	    }
	  };
	}(matreshka_dir_core_var_map, matreshka_dir_matreshkaclass);
	matreshka_dir_matreshka_object_iterator = function () {
	  var _this = this, keys = _this.keys(), i = 0;
	  return {
	    next: function () {
	      if (i > keys.length - 1) {
	        return { done: true };
	      } else {
	        return {
	          done: false,
	          value: _this[keys[i++]]
	        };
	      }
	    }
	  };
	};
	matreshka_dir_core_var_sym_iterator = typeof Symbol != 'undefined' ? Symbol.iterator : '@@iterator';
	matreshka_dir_matreshka_objectclass = function (MK, dynamic, iterator, symIterator, map) {
	  /* istanbul ignore if  */
	  if (!MK)
	    throw new Error('Matreshka is missing');
	  var i, prototype = {
	      'extends': MK,
	      isMKObject: true,
	      renderer: null,
	      constructor: function MatreshkaObject(object) {
	        /* istanbul ignore if  */
	        if (!(this instanceof MatreshkaObject)) {
	          throw new TypeError('Cannot call a class as a function');
	        }
	        return this.jset(object);
	      },
	      _initMK: function () {
	        var _this = this, objectData, addedEvents;
	        if (map.has(_this))
	          return _this;
	        MK.prototype._initMK.call(_this);
	        objectData = map.get(_this);
	        objectData.keys = {};
	        MK._fastAddListener(_this, 'addevent:modify', function (evt) {
	          if (!addedEvents) {
	            MK._fastAddListener(_this, 'change', function (evt) {
	              if (evt && evt.key in objectData.keys && !evt.silent) {
	                MK._fastTrigger(_this, 'modify', evt);
	              }
	            });
	            MK._fastAddListener(_this, 'delete', function (evt) {
	              if (evt && evt.key in objectData.keys) {
	                delete objectData.keys[evt.key];
	                if (!evt.silent) {
	                  MK._fastTrigger(_this, 'remove', evt);
	                  MK._fastTrigger(_this, 'modify', evt);
	                }
	              }
	            });
	            addedEvents = true;
	          }
	        });
	        return _this;
	      },
	      hasOwnProperty: function (key) {
	        return map.get(this._initMK()).keys.hasOwnProperty(key);
	      }
	    };
	  MK.extend(prototype, dynamic);
	  prototype[symIterator] = iterator;
	  return MK.Object = MK.Class(prototype);
	}(matreshka_dir_matreshkaclass, matreshka_dir_matreshka_object_dynamic, matreshka_dir_matreshka_object_iterator, matreshka_dir_core_var_sym_iterator, matreshka_dir_core_var_map);
	matreshka_dir_matreshka_array_processrendering = function (map, initMK, MK) {
	  var getNode = function (_this, item, evt) {
	    var thisData = map.get(_this), itemData = map.get(item), id = thisData.id, $ = MK.$, arraysNodes = itemData.arraysNodes = itemData.arraysNodes || {}, node = arraysNodes[id], itemRenderer = _this.itemRenderer, renderer = item.renderer, usedRenderer = renderer || itemRenderer, isOwnRenderer = usedRenderer === renderer, rendererContext = isOwnRenderer ? item : _this, knownRendererNode = itemData.rendererNode, rendererHasBindings = itemData.rendererHasBindings, knownItemRendererNode = thisData.itemRendererNode, itemRendererHasBindings = thisData.itemRendererHasBindings, useBindingsParser = _this.useBindingsParser !== false, useCache = true, hasBindings = false, wrapper, sandboxes, i;
	    if (!usedRenderer)
	      return;
	    if (evt.moveSandbox) {
	      if (node = MK.bound(item, ['sandbox'])) {
	        arraysNodes[id] = node;
	      }
	      return node;
	    }
	    if (node) {
	      if (evt.forceRerender) {
	        sandboxes = MK.boundAll(item, ['sandbox']);
	        for (i = 0; i < sandboxes.length; i++) {
	          if (node == sandboxes[i]) {
	            MK.unbindNode(item, 'sandbox', node);
	            break;
	          }
	        }
	        node = arraysNodes[id] = null;
	      } else {
	        return node;
	      }
	    }
	    if (!evt.forceRerender && typeof usedRenderer != 'function') {
	      if (knownRendererNode) {
	        if (rendererHasBindings && useBindingsParser) {
	          node = MK.parseBindings(item, knownRendererNode.cloneNode(true))[0];
	        } else {
	          node = knownRendererNode.cloneNode(true);
	        }
	      }
	      if (knownItemRendererNode) {
	        if (itemRendererHasBindings && useBindingsParser) {
	          node = MK.parseBindings(item, knownItemRendererNode.cloneNode(true))[0];
	        } else {
	          node = knownItemRendererNode.cloneNode(true);
	        }
	      }
	    }
	    if (!node) {
	      if (typeof usedRenderer == 'function') {
	        useCache = false;
	        usedRenderer = usedRenderer.call(rendererContext, item);
	      }
	      if (typeof usedRenderer == 'string') {
	        if (!/</.test(usedRenderer)) {
	          usedRenderer = MK._getNodes(rendererContext, usedRenderer)[0];
	          if (usedRenderer) {
	            usedRenderer = usedRenderer.innerHTML;
	          } else {
	            throw Error('renderer node is missing');
	          }
	        }
	        if (/{{/.test(usedRenderer)) {
	          hasBindings = true;
	        }
	        usedRenderer = $.parseHTML(MK.trim(usedRenderer));
	        if (usedRenderer.length > 1) {
	          wrapper = document.createElement('span');
	          for (i = 0; i < usedRenderer.length; i++) {
	            wrapper.appendChild(usedRenderer[i]);
	          }
	          usedRenderer = wrapper;
	        } else {
	          usedRenderer = usedRenderer[0];
	        }
	      }
	      if (useCache) {
	        if (isOwnRenderer) {
	          itemData.rendererNode = usedRenderer;
	          itemData.rendererHasBindings = hasBindings;
	        } else {
	          thisData.itemRendererNode = usedRenderer;
	          thisData.itemRendererHasBindings = hasBindings;
	        }
	      } else {
	        if (isOwnRenderer) {
	          itemData.rendererNode = null;
	          itemData.rendererHasBindings = false;
	        } else {
	          thisData.itemRendererNode = null;
	          thisData.itemRendererHasBindings = false;
	        }
	      }
	      if (hasBindings && useBindingsParser) {
	        node = MK.parseBindings(item, usedRenderer.cloneNode(true))[0];
	      } else {
	        node = usedRenderer.cloneNode(true);
	      }
	    }
	    return arraysNodes[id] = node;
	  };
	  var renderOne = function (_this, item, evt) {
	    var itemEvt, node, objectData;
	    if (!item || typeof item != 'object' || !_this.renderIfPossible || evt.dontRender)
	      return;
	    initMK(item);
	    objectData = map.get(item);
	    node = getNode(_this, item, evt);
	    if (!node)
	      return;
	    if (item.bindRenderedAsSandbox !== false) {
	      MK.bindSandbox(item, node);
	    }
	    if (!evt.silent) {
	      itemEvt = {
	        node: node,
	        $nodes: MK.$(node),
	        self: item,
	        parentArray: _this
	      };
	      item.onRender && item.onRender(itemEvt);
	      _this.onItemRender && _this.onItemRender(item, itemEvt);
	      MK._fastTrigger(item, 'render', itemEvt);
	      // TODO make this code smarter, don't use setTimeout
	      objectData.events.afterrender && setTimeout(function () {
	        MK._fastTrigger(item, 'afterrender', itemEvt);
	      }, 0);
	    }
	    return node;
	  };
	  return function (_this, evt) {
	    var objectData = map.get(_this), id = objectData.id, l = _this.length, added = evt.added, removed = evt.removed, addedLength = added && added.length, removedLength = removed && removed.length, container = objectData.special.container || objectData.special.sandbox, node, next, i, item, itemData;
	    container = container && container.$nodes;
	    container = container && container[0];
	    if (!container)
	      return _this;
	    switch (evt.method) {
	    case 'push':
	      for (i = l - addedLength; i < l; i++) {
	        if (node = renderOne(_this, _this[i], evt)) {
	          container.appendChild(node);
	        }
	      }
	      break;
	    case 'unshift':
	      for (i = addedLength - 1; i + 1; i--) {
	        if (node = renderOne(_this, _this[i], evt)) {
	          if (container.firstChild) {
	            container.insertBefore(node, container.firstChild);
	          } else {
	            container.appendChild(node);
	          }
	        }
	      }
	      break;
	    case 'pull':
	    case 'pop':
	    case 'shift':
	      for (i = 0; i < removedLength; i++) {
	        item = removed[i];
	        itemData = map.get(item);
	        node = itemData.arraysNodes && itemData.arraysNodes[id];
	        if (node) {
	          container.removeChild(node);
	        }
	      }
	      break;
	    case 'sort':
	    case 'reverse':
	      for (i = 0; i < l; i++) {
	        item = _this[i];
	        itemData = map.get(item);
	        if (node = itemData && itemData.arraysNodes[id]) {
	          container.appendChild(node);
	        }
	      }
	      break;
	    case 'rerender':
	      if (evt.forceRerender) {
	        for (i = 0; i < l; i++) {
	          item = _this[i];
	          itemData = map.get(item);
	          node = itemData && itemData.arraysNodes && itemData.arraysNodes[id];
	          if (node) {
	            container.removeChild(node);
	          }
	        }
	      }
	      for (i = 0; i < l; i++) {
	        if (node = renderOne(_this, _this[i], evt)) {
	          container.appendChild(node);
	        }
	      }
	      break;
	    case 'recreate':
	      for (i = 0; i < removedLength; i++) {
	        item = removed[i];
	        itemData = map.get(item);
	        node = itemData && itemData.arraysNodes && itemData.arraysNodes[id];
	        if (node) {
	          container.removeChild(node);
	        }
	      }
	      for (i = 0; i < l; i++) {
	        if (node = renderOne(_this, _this[i], evt)) {
	          container.appendChild(node);
	        }
	      }
	      break;
	    case 'splice':
	      next = _this[evt.args[0] < 0 ? l + evt.args[0] - addedLength + removedLength - 1 : evt.args[0] - 1];
	      next = map.get(next);
	      next = next && next.arraysNodes;
	      next = next && next[id];
	      next = next && next.nextSibling;
	      next = next || container.firstChild;
	      for (i = 0; i < addedLength; i++) {
	        if (node = renderOne(_this, added[i], evt)) {
	          container.insertBefore(node, next);
	        }
	      }
	      for (i = 0; i < removedLength; i++) {
	        item = removed[i];
	        itemData = map.get(item);
	        node = itemData && itemData.arraysNodes && itemData.arraysNodes[id];
	        if (node) {
	          container.removeChild(node);
	        }
	      }
	      break;
	    }
	    return _this;
	  };
	}(matreshka_dir_core_var_map, matreshka_dir_core_initmk, matreshka_dir_matreshkaclass);
	matreshka_dir_matreshka_array_triggermodify = function (MK, map, processRendering) {
	  return function (_this, evt, additional) {
	    var added = evt.added, removed = evt.removed, events = map.get(_this).events, method = evt.method, modified = added.length || removed.length || method == 'sort' || method == 'reverse', i;
	    if (!evt.silent) {
	      if (additional) {
	        events[additional] && MK._fastTrigger(_this, additional, evt);
	      }
	      if (added.length) {
	        events.add && MK._fastTrigger(_this, 'add', evt);
	        if (events.addone) {
	          for (i = 0; i < added.length; i++) {
	            MK._fastTrigger(_this, 'addone', {
	              self: _this,
	              added: added[i]
	            });
	          }
	        }
	      }
	      if (removed.length) {
	        events.remove && MK._fastTrigger(_this, 'remove', evt);
	        if (events.removeone) {
	          for (i = 0; i < removed.length; i++) {
	            MK._fastTrigger(_this, 'removeone', {
	              self: _this,
	              removed: removed[i]
	            });
	          }
	        }
	      }
	      if (modified) {
	        events.modify && MK._fastTrigger(_this, 'modify', evt);
	      }
	    }
	    if (modified && !evt.dontRender) {
	      processRendering(_this, evt);
	    }
	  };
	}(matreshka_dir_matreshkaclass, matreshka_dir_core_var_map, matreshka_dir_matreshka_array_processrendering);
	matreshka_dir_matreshka_array_recreate = function (_this, array) {
	  array = array || [];
	  var diff = _this.length - array.length, prepared, i;
	  for (i = 0; i < array.length; i++) {
	    _this[i] = array[i];
	  }
	  for (i = 0; i < diff; i++) {
	    _this.remove(i + array.length, { silent: true });
	  }
	  _this.length = array.length;
	  return _this;
	};
	matreshka_dir_matreshka_array_native_dynamic = function (MK, util, triggerModify, recreate) {
	  var methods = {}, Array_prototype = Array.prototype, toArray = util.toArray;
	  function createMethod(name, hasOptions) {
	    switch (name) {
	    case 'forEach':
	      return function (callback, thisArg) {
	        var _this = this;
	        Array_prototype[name].call(_this, callback, thisArg);
	        return _this;
	      };
	    case 'map':
	    case 'filter':
	    case 'slice':
	      return function (a, b) {
	        var _this = this;
	        return MK.Array.from(Array_prototype[name].call(_this, a, b));
	      };
	    case 'every':
	    case 'some':
	      return function (callback, thisArg) {
	        var _this = this;
	        return Array_prototype[name].call(_this, callback, thisArg);
	      };
	    case 'join':
	      return function (separator) {
	        var _this = this;
	        return Array_prototype[name].call(_this, separator || ',');
	      };
	    case 'indexOf':
	    case 'lastIndexOf':
	      return function (item) {
	        var _this = this;
	        return Array_prototype[name].call(_this, item);
	      };
	    case 'reduce':
	    case 'reduceRight':
	      return function () {
	        var _this = this;
	        return Array_prototype[name].apply(_this, arguments);
	      };
	    case 'sort':
	    case 'reverse':
	      return function (a, b) {
	        if (this.length <= 1)
	          return _this;
	        var _this = this._initMK(), evt, array, returns, i, _evt;
	        evt = hasOptions ? (name == 'sort' && b ? b : a) || {} : {};
	        returns = Array_prototype[name].call(_this, a);
	        _evt = {
	          method: name,
	          self: _this,
	          added: [],
	          removed: []
	        };
	        for (i in evt) {
	          _evt[i] = evt[i];
	        }
	        triggerModify(_this, _evt, name);
	        return _this;
	      };
	    case 'pop':
	    case 'shift':
	      return function (evtOptions) {
	        if (!this.length)
	          return;
	        var _this = this._initMK(), evt, array, returns, added, removed, i, _evt;
	        evt = hasOptions ? evtOptions || {} : {};
	        returns = Array_prototype[name].call(_this);
	        _evt = {
	          method: name,
	          self: _this,
	          added: added = [],
	          removed: removed = [returns]
	        };
	        for (i in evt) {
	          _evt[i] = evt[i];
	        }
	        triggerModify(_this, _evt, name);
	        return returns;
	      };
	    case 'push':
	    case 'unshift':
	      return function () {
	        var _this = this._initMK(), _arguments = arguments, args = new Array(_arguments.length), length = _this.length, argsLength = args.length, evt, array, returns, added, removed, i, _evt;
	        for (i = 0; i < argsLength; i++) {
	          args[i] = _arguments[i];
	        }
	        evt = hasOptions ? args[argsLength - 1] || {} : {};
	        if (hasOptions) {
	          args.pop();
	          argsLength--;
	        }
	        if (!argsLength) {
	          return length;
	        }
	        if (!evt.skipMediator && typeof _this._itemMediator == 'function') {
	          for (i = 0; i < argsLength; i++) {
	            args[i] = _this._itemMediator.call(_this, args[i], name == 'push' ? i + length : i);
	          }
	        }
	        if (name == 'push') {
	          for (i = 0; i < argsLength; i++) {
	            _this[length + i] = args[i];
	          }
	        } else if (name == 'unshift') {
	          for (i = length - 1; i >= 0; i--) {
	            _this[argsLength + i] = _this[i];
	          }
	          for (i = 0; i < argsLength; i++) {
	            _this[i] = args[i];
	          }
	        }
	        _this.length = length = length + argsLength;
	        _evt = {
	          method: name,
	          self: _this,
	          added: args,
	          removed: []
	        };
	        for (i in evt) {
	          _evt[i] = evt[i];
	        }
	        triggerModify(_this, _evt, name);
	        return length;
	      };
	    case 'splice':
	      return function () {
	        var _this = this._initMK(), _arguments = arguments, args = new Array(_arguments.length), length = _this.length, argsLength = args.length, added = [], start, evt, array, returns, removed, i, _evt;
	        for (i = 0; i < argsLength; i++) {
	          args[i] = _arguments[i];
	        }
	        start = args[0];
	        evt = hasOptions ? args[argsLength - 1] || {} : {};
	        start = start < 0 ? length + start : start;
	        if (hasOptions) {
	          args.pop();
	          argsLength--;
	        }
	        if (!evt.skipMediator && typeof _this._itemMediator == 'function') {
	          for (i = 2; i < argsLength; i++) {
	            args[i] = _this._itemMediator.call(_this, args[i], start + i - 2);
	          }
	        }
	        for (i = 2; i < argsLength; i++) {
	          if (i >= 2) {
	            added[i - 2] = args[i];
	          }
	        }
	        returns = Array_prototype[name].apply(_this, args);
	        removed = returns;
	        if (added.length || removed.length) {
	          _evt = {
	            args: args,
	            method: name,
	            self: _this,
	            added: added,
	            removed: removed
	          };
	          for (i in evt) {
	            _evt[i] = evt[i];
	          }
	          triggerModify(_this, _evt, name);
	        }
	        return MK.Array.from(returns);
	      };
	    }
	  }
	  'push pop unshift shift sort reverse splice map filter slice every some reduce reduceRight forEach join indexOf lastIndexOf'.split(' ').forEach(function (name) {
	    methods[name] = createMethod(name);
	  });
	  'push pop unshift shift sort reverse splice'.split(' ').forEach(function (name) {
	    methods[name + '_'] = createMethod(name, true);
	  });
	  methods.each = methods.forEach;
	  methods.concat = function () {
	    var args = arguments, result = this.toArray(), arg, i, j;
	    for (i = 0; i < args.length; i++) {
	      arg = args[i];
	      if (arg instanceof Array || arg instanceof MK.Array || arg && arg.instanceOf && arg.instanceOf(MK.Array)) {
	        for (j = 0; j < arg.length; j++) {
	          result.push(arg[j]);
	        }
	      }
	    }
	    return MK.Array.from(result);
	  };
	  methods.toString = function () {
	    return this.toArray().join(',');
	  };
	  return methods;
	}(matreshka_dir_matreshkaclass, matreshka_dir_core_util_common, matreshka_dir_matreshka_array_triggermodify, matreshka_dir_matreshka_array_recreate);
	matreshka_dir_matreshka_array_native_static = function (MK) {
	  return {
	    of: function () {
	      var result = new MK.Array(), args = arguments, i;
	      result.length = args.length;
	      for (i = 0; i < args.length; i++) {
	        result[i] = args[i];
	      }
	      return result;
	    },
	    // Doesn't work with maps and sets yet
	    from: function (arrayLike, mapFn, thisArg) {
	      var result = new MK.Array(), i;
	      result.length = arrayLike.length;
	      for (i = 0; i < arrayLike.length; i++) {
	        result[i] = mapFn ? mapFn.call(thisArg, arrayLike[i], i, arrayLike) : arrayLike[i];
	      }
	      return result;
	    }
	  };
	}(matreshka_dir_matreshkaclass);
	matreshka_dir_matreshka_array_custom_dynamic = function (map, MK, processRendering, triggerModify, recreate, initMK) {
	  return {
	    mediateItem: function (itemMediator) {
	      var _this = this, l = _this.length, i;
	      _this._itemMediator = itemMediator;
	      for (i = 0; i < l; i++) {
	        _this[i] = itemMediator.call(_this, _this[i], i);
	      }
	      return _this;
	    },
	    recreate: function (array, evt) {
	      array = array || [];
	      var _this = this._initMK(), newLength = array.length, oldLength = _this.length, diff = oldLength - newLength, was = _this.toArray(), trackBy = _this.trackBy, prepared, i, j, _evt, trackMap, added, removed, now;
	      evt = evt || {};
	      function update(instance, data) {
	        var i;
	        if (instance.isMKArray) {
	          instance.recreate(data);
	        } else if (instance.isMKObject) {
	          instance.jset(data);
	        } else {
	          for (i in data) {
	            if (data.hasOwnProperty(i)) {
	              instance[i] = data[i];
	            }
	          }
	        }
	        return instance;
	      }
	      if (trackBy) {
	        trackMap = {};
	        if (trackBy == '$index') {
	          for (i = 0; i < newLength; i++) {
	            array[i] = _this[i] ? update(_this[i], array[i]) : array[i];
	          }
	        } else {
	          for (i = 0; i < _this.length; i++) {
	            trackMap[_this[i][trackBy]] = _this[i];
	          }
	          for (i = 0; i < newLength; i++) {
	            if (array[i][trackBy] in trackMap) {
	              array[i] = update(trackMap[array[i][trackBy]], array[i]);
	            }
	          }
	        }
	      }
	      if (_this._itemMediator && !evt.skipMediator) {
	        prepared = [];
	        for (i = 0; i < newLength; i++) {
	          prepared[i] = _this._itemMediator.call(_this, array[i], i);
	        }
	        array = prepared;
	      }
	      for (i = 0; i < newLength; i++) {
	        _this[i] = array[i];
	      }
	      for (i = 0; i < diff; i++) {
	        delete _this[i + newLength];
	        delete map.get(_this).special[i + newLength];
	      }
	      _this.length = newLength;
	      if (evt.silent && evt.dontRender) {
	        return _this;
	      }
	      now = _this.toArray();
	      if (now.length) {
	        if (was.length) {
	          removed = [];
	          j = 0;
	          for (i = 0; i < was.length; i++) {
	            if (!~now.indexOf(was[i])) {
	              removed[j++] = was[i];
	            }
	          }
	        } else {
	          removed = [];
	        }
	      } else {
	        removed = was;
	      }
	      if (was.length) {
	        if (now.length) {
	          added = [];
	          j = 0;
	          for (i = 0; i < now.length; i++) {
	            if (!~was.indexOf(now[i])) {
	              added[j++] = now[i];
	            }
	          }
	        } else {
	          added = [];
	        }
	      } else {
	        added = now;
	      }
	      _evt = {
	        added: added,
	        removed: removed,
	        was: was,
	        now: now,
	        method: 'recreate',
	        self: _this
	      };
	      for (i in evt) {
	        _evt[i] = evt[i];
	      }
	      triggerModify(_this, _evt, 'recreate');
	      return _this;
	    },
	    toArray: function () {
	      var _this = this, array = [], l = _this.length, i;
	      array = [];
	      for (i = 0; i < l; i++) {
	        array[i] = _this[i];
	      }
	      return array;
	    },
	    toNative: function () {
	      return this.toArray();
	    },
	    rerender: function (evt) {
	      var _evt = { method: 'rerender' }, i;
	      if (evt && typeof evt == 'object') {
	        for (i in evt) {
	          _evt[i] = evt[i];
	        }
	      }
	      return processRendering(this, _evt);
	    },
	    toJSON: function () {
	      var _this = this, JSON = [], l = _this.length, i;
	      for (i = 0; i < l; i++) {
	        _this[i] && _this[i].toJSON ? JSON.push(_this[i].toJSON()) : JSON.push(_this[i]);
	      }
	      return JSON;
	    },
	    pull: function (index, evt) {
	      var _this = this._initMK(), array = _this.toArray(), _index = index, type = typeof index, returns, removed, _evt, i;
	      if (type != 'number' && type != 'string') {
	        index = _this.indexOf(index);
	        if (!~index) {
	          return null;
	        }
	      }
	      returns = array.splice(index, 1)[0] || null;
	      if (returns) {
	        recreate(_this, array, evt);
	        _evt = {
	          returns: returns,
	          args: [_index],
	          method: 'pull',
	          self: _this,
	          added: [],
	          removed: removed = returns ? [returns] : []
	        };
	        if (evt) {
	          for (i in evt) {
	            _evt[i] = evt[i];
	          }
	        }
	        triggerModify(_this, _evt, 'pull');
	      }
	      return returns;
	    },
	    restore: function (selector, evt) {
	      var _this = this._initMK(), objectData = map.get(_this), id = objectData.id, Model = _this.Model, nodes, node, container, i, item, arraysNodes, itemEvt, result, _evt;
	      if (selector) {
	        nodes = MK._getNodes(_this, selector);
	      } else {
	        container = objectData.special.container || objectData.special.sandbox;
	        container = container && container.$nodes;
	        container = container && container[0];
	        nodes = container && container.children;
	      }
	      if (nodes && nodes.length) {
	        result = [];
	        for (i = 0; i < nodes.length; i++) {
	          node = nodes[i];
	          item = Model ? new Model() : {};
	          initMK(item);
	          arraysNodes = objectData.arraysNodes = {};
	          arraysNodes[id] = node;
	          if (item.bindRenderedAsSandbox !== false) {
	            MK.bindNode(item, 'sandbox', node);
	          }
	          if (!evt || !evt.silent) {
	            itemEvt = {
	              node: node,
	              $nodes: MK.$(node),
	              self: item,
	              parentArray: _this
	            };
	            item.onRender && item.onRender(itemEvt);
	            _this.onItemRender && _this.onItemRender(item, itemEvt);
	            MK._fastTrigger(item, 'render', itemEvt);
	          }
	          result[i] = item;
	        }
	        _evt = { dontRender: true };
	        if (evt) {
	          for (i in evt) {
	            _evt[i] = evt[i];
	          }
	        }
	        _this.recreate(result, _evt);
	      }
	      return _this;
	    },
	    orderBy: function (keys, orders, evt) {
	      var _this = this, _evt, i;
	      if (_this.length > 1) {
	        recreate(_this, MK.orderBy(_this, keys, orders));
	        _evt = {
	          method: 'sort',
	          // allows to listen "sort" event
	          self: _this,
	          added: [],
	          removed: []
	        };
	        if (evt) {
	          for (i in evt) {
	            _evt[i] = evt[i];
	          }
	        }
	        triggerModify(_this, _evt, 'sort');
	      }
	      return _this;
	    }
	  };
	}(matreshka_dir_core_var_map, matreshka_dir_matreshkaclass, matreshka_dir_matreshka_array_processrendering, matreshka_dir_matreshka_array_triggermodify, matreshka_dir_matreshka_array_recreate, matreshka_dir_core_initmk);
	matreshka_dir_matreshka_array_iterator = function () {
	  var _this = this, i = 0;
	  return {
	    next: function () {
	      if (i > _this.length - 1) {
	        return { done: true };
	      } else {
	        return {
	          done: false,
	          value: _this[i++]
	        };
	      }
	    }
	  };
	};
	matreshka_dir_matreshka_arrayclass = function (MK, map, nDynamic, nStatic, cDynamic, triggerModify, processRendering, iterator, symIterator) {
	  /* istanbul ignore if  */
	  if (!MK)
	    throw new Error('Matreshka is missing');
	  var prototype = {
	    'extends': MK,
	    isMKArray: true,
	    length: 0,
	    itemRenderer: null,
	    renderIfPossible: true,
	    Model: null,
	    constructor: function MatreshkaArray(length) {
	      /* istanbul ignore if  */
	      if (!(this instanceof MatreshkaArray)) {
	        throw new TypeError('Cannot call a class as a function');
	      }
	      var _this = this._initMK(), al = arguments.length, i;
	      if (al == 1 && typeof length == 'number') {
	        _this.length = length;
	      } else {
	        for (i = 0; i < al; i++) {
	          _this[i] = arguments[i];
	        }
	        _this.length = al;
	      }
	      return _this;
	    },
	    _initMK: function () {
	      var _this = this, changeModel;
	      if (map.has(_this))
	        return _this;
	      if ('Model' in _this && _this.Model !== null && typeof _this.Model != 'function') {
	        throw Error('Only function or null are valid values for Model, not "' + typeof _this.Model + '"');
	      }
	      changeModel = function () {
	        var Model = _this.Model;
	        if (Model) {
	          _this.mediateItem(function (item, i) {
	            return !item || !(item.instanceOf ? item.instanceOf(Model) : item instanceof Model) ? new Model(item && item.toJSON ? item.toJSON() : item, _this, i) : item;
	          });
	        }
	      };
	      MK.prototype._initMK.call(_this);
	      MK._fastAddListener(_this, 'change:Model', changeModel);
	      MK._fastAddListener(_this, 'change:itemRenderer', function (evt) {
	        _this.rerender({ forceRerender: evt && 'forceRerender' in evt ? evt.forceRerender : true });
	      });
	      changeModel();
	      return _this;
	    },
	    toJSON: function () {
	      var _this = this, JSON = [], l = _this.length, i;
	      for (i = 0; i < l; i++) {
	        _this[i] && _this[i].toJSON ? JSON[i] = _this[i].toJSON() : JSON[i] = _this[i];
	      }
	      return JSON;
	    },
	    hasOwnProperty: function (p) {
	      return p == 'length' || p < this.length && p >= 0;
	    }
	  };
	  MK.extend(prototype, nDynamic, cDynamic);
	  prototype[symIterator] = iterator;
	  MK.Array = MK.Class(prototype, nStatic);
	  return MK.Array;
	}(matreshka_dir_matreshkaclass, matreshka_dir_core_var_map, matreshka_dir_matreshka_array_native_dynamic, matreshka_dir_matreshka_array_native_static, matreshka_dir_matreshka_array_custom_dynamic, matreshka_dir_matreshka_array_triggermodify, matreshka_dir_matreshka_array_processrendering, matreshka_dir_matreshka_array_iterator, matreshka_dir_core_var_sym_iterator);
	matreshka_dir_amd_modules_matreshka = function (MK, MK_Object, MK_Array, MK_binders) {
	  return MK;
	}(matreshka_dir_matreshkaclass, matreshka_dir_matreshka_objectclass, matreshka_dir_matreshka_arrayclass);
	matreshka = function (MK) {
	  return MK;
	}(matreshka_dir_amd_modules_matreshka);
	 matreshka.version="1.9.1";									(function () {
				// hack for systemjs builder
				var d = "define";
				// I don't know how to define modules with no dependencies (since we use AMDClean)
				// so I have to hack it, unfortunatelly
				if (typeof __root != 'undefined') {
					/* global matreshka, balalaika, matreshka_magic, xclass, __root */
					if (true) {
						if (__root[d]) {
							__root[d]('matreshka', function() {
								return matreshka;
							});
							__root[d]('bquery', function() {
								return matreshka.$b;
							});
							__root[d]('balalaika', function() {
								return matreshka.$b;
							});
							__root[d]('xclass', function() {
								return matreshka.Class;
							});
							__root[d]('matreshka-magic', function() {
								return matreshka_magic;
							});
						}
	
						!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
							return matreshka;
						}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
					} else if (typeof exports == "object") {
						module.exports = matreshka;
					} else {
						__root.Matreshka = __root.MK = matreshka;
						__root.$b = matreshka.$b;
						__root.Class = matreshka.Class;
					}
				}
			})()								})(typeof window != "undefined" ? window : Function("return this")());

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _tab = __webpack_require__(4);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _fileList = __webpack_require__(5);
	
	var _fileList2 = _interopRequireDefault(_fileList);
	
	var _matreshka = __webpack_require__(2);
	
	var _matreshka2 = _interopRequireDefault(_matreshka);
	
	var _validate2 = __webpack_require__(6);
	
	var _validate3 = _interopRequireDefault(_validate2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _MK$binders = _matreshka2.default.binders;
	var dropFiles = _MK$binders.dropFiles;
	var file = _MK$binders.file;
	var className = _MK$binders.className;
	var dragOver = _MK$binders.dragOver;
	
	var Upload = function (_Tab) {
		_inherits(Upload, _Tab);
	
		function Upload() {
			var _Object$getPrototypeO;
	
			var _this;
	
			_classCallCheck(this, Upload);
	
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			(_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Upload)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this).setClassFor('fileList', _fileList2.default).bindNode({
				fileWrapper: ':sandbox .file-wrapper',
				files: [':bound(fileWrapper)', dropFiles('text')],
				dragovered: [':bound(fileWrapper)', dragOver()],
				'fileList.length': [':sandbox .clear, :sandbox .compress', {
					setValue: function setValue(v) {
						this.disabled = !v;
					}
				}]
			}).bindNode({
				files: [':sandbox .file-input', file('text')],
				dragovered: [':bound(fileWrapper)', className('dragovered')]
			}).on({
				'change:files': function changeFiles() {
					var _this$fileList;
	
					(_this$fileList = _this.fileList).push.apply(_this$fileList, _toConsumableArray(_this.files.map(function (_ref) {
						var name = _ref.name;
						var readerResult = _ref.readerResult;
						return { name: name, readerResult: readerResult };
					})));
				},
				'click::(.clear)': function clickClear() {
					_this.fileList.recreate();
					_this.error = '';
				},
				'click::(.compress)': function clickCompress() {
					var errors = [],
					    results = [];
	
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;
	
					try {
						for (var _iterator = _this.fileList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var item = _step.value;
							var readerResult = item.readerResult;
							var name = item.name;
	
							var _validate = (0, _validate3.default)(readerResult);
	
							var isValid = _validate.isValid;
							var error = _validate.error;
	
	
							results.push(readerResult);
	
							if (!isValid) {
								errors.push('File ' + name + ': ' + error);
							}
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
	
					if (errors.length) {
						_this.error = errors.join('\n');
					} else {
						_this.error = '';
	
						_this.trigger('submitCode', results.join(';'));
					}
				}
			});
			return _this;
		}
	
		return Upload;
	}(_tab2.default);
	
	exports.default = Upload;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _matreshka = __webpack_require__(2);
	
	var _matreshka2 = _interopRequireDefault(_matreshka);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _MK$binders = _matreshka2.default.binders;
	var display = _MK$binders.display;
	var className = _MK$binders.className;
	
	var Tab = function (_MK$Object) {
		_inherits(Tab, _MK$Object);
	
		function Tab() {
			var data = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
			var parent = arguments[1];
	
			var _this;
	
			var name = arguments[2];
	
			_classCallCheck(this, Tab);
	
			(_this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tab).call(this, data)), _this).set({
				active: false
			}).bindNode({
				sandbox: '#' + name,
				navItem: '.tab-nav-item[data-tab="' + name + '"]',
				active: [':sandbox', display()]
			}).bindNode({
				active: [':bound(navItem)', className('active')]
			}).bindOptionalNode('error', ':sandbox .error').on({
				'click::navItem': function clickNavItem() {
					_this.active = true;
				}
			});
			return _this;
		}
	
		return Tab;
	}(_matreshka2.default.Object);
	
	exports.default = Tab;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _matreshka = __webpack_require__(2);
	
	var _matreshka2 = _interopRequireDefault(_matreshka);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FileList = function (_MK$Array) {
		_inherits(FileList, _MK$Array);
	
		function FileList() {
			var _Object$getPrototypeO;
	
			var _temp, _this;
	
			var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	
			_classCallCheck(this, FileList);
	
			(_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FileList)).call.apply(_Object$getPrototypeO, [this].concat(_toConsumableArray(data)))), _this), _this.itemRenderer = '\n\t\t<div class="file-item">\n\t\t\t{{name}}\n\t\t\t<span class="remove"></span>\n\t\t</div>\n\t', _temp).bindNode({
				sandbox: '#upload',
				container: ':sandbox .file-list'
			}).on({
				'*@click::(.remove)': function clickRemove(_ref) {
					var self = _ref.self;
					return _this.pull(self);
				}
			}).rerender();
			return _this;
		}
	
		return FileList;
	}(_matreshka2.default.Array);
	
	exports.default = FileList;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = validate;
	
	var _uglifyJsBrowser = __webpack_require__(7);
	
	var _uglifyJsBrowser2 = _interopRequireDefault(_uglifyJsBrowser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(code) {
		var isValid = true,
		    error = null;
	
		if (!code) {
			isValid = false;
			error = 'Falsy value is not valid code';
		} else {
			try {
				_uglifyJsBrowser2.default.parse(code);
			} catch (e) {
				var line = e.line;
				var col = e.col;
				var _e$message = e.message;
				var message = _e$message === undefined ? 'Unknown error' : _e$message;
	
				var info = '';
	
				if (line || col) {
					info = ' (line: ' + line + ', col: ' + col + ')';
				}
	
				isValid = false;
				error = message + info;
			}
		}
	
		return { isValid: isValid, error: error };
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	!function(n,e){"use strict";function t(n){for(var e=Object.create(null),t=0;t<n.length;++t)e[n[t]]=!0;return e}function r(n){return n.split("")}function i(n,e){return e.indexOf(n)>=0}function o(n,e){for(var t=0,r=e.length;t<r;++t)if(n(e[t]))return e[t]}function a(n,e){if(e<=0)return"";if(1==e)return n;var t=a(n,e>>1);return t+=t,1&e&&(t+=n),t}function u(n,e){Error.call(this,n),this.msg=n,this.defs=e}function s(n,e,t){n===!0&&(n={});var r=n||{};if(t)for(var i in r)g(r,i)&&!g(e,i)&&u.croak("`"+i+"` is not a supported option",e);for(var i in e)g(e,i)&&(r[i]=n&&g(n,i)?n[i]:e[i]);return r}function c(n,e){var t=0;for(var r in e)g(e,r)&&(n[r]=e[r],t++);return t}function f(){}function l(n,e){n.indexOf(e)<0&&n.push(e)}function p(n,e){return n.replace(/\{(.+?)\}/g,function(n,t){return e[t]})}function d(n,e){for(var t=n.length;--t>=0;)n[t]===e&&n.splice(t,1)}function h(n,e){function t(n,t){for(var r=[],i=0,o=0,a=0;i<n.length&&o<t.length;)e(n[i],t[o])<=0?r[a++]=n[i++]:r[a++]=t[o++];return i<n.length&&r.push.apply(r,n.slice(i)),o<t.length&&r.push.apply(r,t.slice(o)),r}function r(n){if(n.length<=1)return n;var e=Math.floor(n.length/2),i=n.slice(0,e),o=n.slice(e);return i=r(i),o=r(o),t(i,o)}return n.length<2?n.slice():r(n)}function v(n){function e(n){return JSON.stringify(n).replace(/[\u2028\u2029]/g,function(n){switch(n){case"\u2028":return"\\u2028";case"\u2029":return"\\u2029"}return n})}function t(n){if(1==n.length)return r+="return str === "+e(n[0])+";";r+="switch(str){";for(var t=0;t<n.length;++t)r+="case "+e(n[t])+":";r+="return true}return false;"}n instanceof Array||(n=n.split(" "));var r="",i=[];n:for(var o=0;o<n.length;++o){for(var a=0;a<i.length;++a)if(i[a][0].length==n[o].length){i[a].push(n[o]);continue n}i.push([n[o]])}if(i.length>3){i.sort(function(n,e){return e.length-n.length}),r+="switch(str.length){";for(var o=0;o<i.length;++o){var u=i[o];r+="case "+u[0].length+":",t(u)}r+="}"}else t(n);return new Function("str",r)}function m(n,e){for(var t=n.length;--t>=0;)if(!e(n[t]))return!1;return!0}function _(){this._values=Object.create(null),this._size=0}function g(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function b(e,t,r,i){arguments.length<4&&(i=W),t=t?t.split(/\s+/):[];var o=t;i&&i.PROPS&&(t=t.concat(i.PROPS));for(var a="return function AST_"+e+"(props){ if (props) { ",u=t.length;--u>=0;)a+="this."+t[u]+" = props."+t[u]+";";var s=i&&new i;(s&&s.initialize||r&&r.initialize)&&(a+="this.initialize();"),a+="}}";var c=new Function(a)();if(s&&(c.prototype=s,c.BASE=i),i&&i.SUBCLASSES.push(c),c.prototype.CTOR=c,c.PROPS=t||null,c.SELF_PROPS=o,c.SUBCLASSES=[],e&&(c.prototype.TYPE=c.TYPE=e),r)for(u in r)g(r,u)&&(/^\$/.test(u)?c[u.substr(1)]=r[u]:c.prototype[u]=r[u]);return c.DEFMETHOD=function(n,e){this.prototype[n]=e},n["AST_"+e]=c,c}function y(n,e){n.body instanceof G?n.body._walk(e):n.body.forEach(function(n){n._walk(e)})}function A(n){this.visit=n,this.stack=[],this.directives=Object.create(null)}function w(n){return n>=97&&n<=122||n>=65&&n<=90||n>=170&&Ne.letter.test(String.fromCharCode(n))}function E(n){return n>=48&&n<=57}function D(n){return E(n)||w(n)}function k(n){return Ne.digit.test(String.fromCharCode(n))}function x(n){return Ne.non_spacing_mark.test(n)||Ne.space_combining_mark.test(n)}function F(n){return Ne.connector_punctuation.test(n)}function C(n){return!Ce(n)&&/^[a-z_$][a-z0-9_$]*$/i.test(n)}function B(n){return 36==n||95==n||w(n)}function S(n){var e=n.charCodeAt(0);return B(e)||E(e)||8204==e||8205==e||x(n)||F(n)||k(e)}function T(n){return/^[a-z_$][a-z0-9_$]*$/i.test(n)}function $(n){if(Te.test(n))return parseInt(n.substr(2),16);if($e.test(n))return parseInt(n.substr(1),8);var e=parseFloat(n);return e==n?e:void 0}function O(n,e,t,r,i){this.message=n,this.filename=e,this.line=t,this.col=r,this.pos=i,this.stack=(new Error).stack}function q(n,e,t,r,i){throw new O(n,e,t,r,i)}function M(n,e,t){return n.type==e&&(null==t||n.value==t)}function z(n,e,t,r){function i(){return T.text.charAt(T.pos)}function o(n,e){var t=T.text.charAt(T.pos++);if(n&&!t)throw je;return Me(t)?(T.newline_before=T.newline_before||!e,++T.line,T.col=0,e||"\r"!=t||"\n"!=i()||(++T.pos,t="\n")):++T.col,t}function a(n){for(;n-- >0;)o()}function u(n){return T.text.substr(T.pos,n.length)==n}function s(){for(var n=T.text,e=T.pos,t=T.text.length;e<t;++e){var r=n[e];if(Me(r))return e}return-1}function c(n,e){var t=T.text.indexOf(n,T.pos);if(e&&t==-1)throw je;return t}function f(){T.tokline=T.line,T.tokcol=T.col,T.tokpos=T.pos}function l(t,r,i){T.regex_allowed="operator"==t&&!Re(r)||"keyword"==t&&Be(r)||"punc"==t&&ze(r),O="punc"==t&&"."==r;var o={type:t,value:r,line:T.tokline,col:T.tokcol,pos:T.tokpos,endline:T.line,endcol:T.col,endpos:T.pos,nlb:T.newline_before,file:e};if(/^(?:num|string|regexp)$/i.test(t)&&(o.raw=n.substring(o.pos,o.endpos)),!i){o.comments_before=T.comments_before,T.comments_before=[];for(var a=0,u=o.comments_before.length;a<u;a++)o.nlb=o.nlb||o.comments_before[a].nlb}return T.newline_before=!1,new Y(o)}function p(){for(;qe(i());)o()}function d(n){for(var e,t="",r=0;(e=i())&&n(e,r++);)t+=o();return t}function h(n){q(n,e,T.tokline,T.tokcol,T.tokpos)}function v(n){var e=!1,t=!1,r=!1,i="."==n,o=d(function(o,a){var u=o.charCodeAt(0);switch(u){case 120:case 88:return!r&&(r=!0);case 101:case 69:return!!r||!e&&(e=t=!0);case 45:return t||0==a&&!n;case 43:return t;case t=!1,46:return!(i||r||e)&&(i=!0)}return D(u)});n&&(o=n+o);var a=$(o);return isNaN(a)?void h("SyntaxError: Invalid syntax: "+o):l("num",a)}function m(n){var e=o(!0,n);switch(e.charCodeAt(0)){case 110:return"\n";case 114:return"\r";case 116:return"\t";case 98:return"\b";case 118:return"\v";case 102:return"\f";case 120:return String.fromCharCode(g(2));case 117:return String.fromCharCode(g(4));case 10:return"";case 13:if("\n"==i())return o(!0,n),""}return e>="0"&&e<="7"?_(e):e}function _(n){var e=i();return e>="0"&&e<="7"&&(n+=o(!0),n[0]<="3"&&(e=i())>="0"&&e<="7"&&(n+=o(!0))),"0"===n?"\0":(n.length>0&&C.has_directive("use strict")&&h("SyntaxError: Octal literals are not allowed in strict mode"),String.fromCharCode(parseInt(n,8)))}function g(n){for(var e=0;n>0;--n){var t=parseInt(o(!0),16);isNaN(t)&&h("SyntaxError: Invalid hex-character pattern in string"),e=e<<4|t}return e}function b(n){var e,t=T.regex_allowed,r=s();return r==-1?(e=T.text.substr(T.pos),T.pos=T.text.length):(e=T.text.substring(T.pos,r),T.pos=r),T.col=T.tokcol+(T.pos-T.tokpos),T.comments_before.push(l(n,e,!0)),T.regex_allowed=t,C}function y(){for(var n,e,t=!1,r="",a=!1;null!=(n=i());)if(t)"u"!=n&&h("SyntaxError: Expecting UnicodeEscapeSequence -- uXXXX"),n=m(),S(n)||h("SyntaxError: Unicode char: "+n.charCodeAt(0)+" is not valid in identifier"),r+=n,t=!1;else if("\\"==n)a=t=!0,o();else{if(!S(n))break;r+=o()}return xe(r)&&a&&(e=r.charCodeAt(0).toString(16).toUpperCase(),r="\\u"+"0000".substr(e.length)+e+r.slice(1)),r}function A(n){function e(n){if(!i())return n;var t=n+i();return Oe(t)?(o(),e(t)):n}return l("operator",e(n||o()))}function w(){switch(o(),i()){case"/":return o(),b("comment1");case"*":return o(),z()}return T.regex_allowed?H(""):A("/")}function k(){return o(),E(i().charCodeAt(0))?v("."):l("punc",".")}function x(){var n=y();return O?l("name",n):Fe(n)?l("atom",n):xe(n)?Oe(n)?l("operator",n):l("keyword",n):l("name",n)}function F(n,e){return function(t){try{return e(t)}catch(e){if(e!==je)throw e;h(n)}}}function C(n){if(null!=n)return H(n);for(;;){if(p(),f(),t){if(u("<!--")){a(4),b("comment3");continue}if(u("-->")&&T.newline_before){a(3),b("comment4");continue}}var e=i();if(!e)return l("eof");var s=e.charCodeAt(0);switch(s){case 34:case 39:return M(e);case 46:return k();case 47:var c=w();if(c===C)continue;return c}if(E(s))return v();if(He(e))return l("punc",o());if(Se(e))return A();if(92==s||B(s))return x();if(!r||0!=T.pos||!u("#!"))break;a(2),b("comment5")}h("SyntaxError: Unexpected character '"+e+"'")}var T={text:n,filename:e,pos:0,tokpos:0,line:1,tokline:0,col:0,tokcol:0,newline_before:!1,regex_allowed:!1,comments_before:[],directives:{},directive_stack:[]},O=!1,M=F("SyntaxError: Unterminated string constant",function(n){for(var e=o(),t="";;){var r=o(!0,!0);if("\\"==r)r=m(!0);else if(Me(r))h("SyntaxError: Unterminated string constant");else if(r==e)break;t+=r}var i=l("string",t);return i.quote=n,i}),z=F("SyntaxError: Unterminated multiline comment",function(){var n=T.regex_allowed,e=c("*/",!0),t=T.text.substring(T.pos,e).replace(/\r\n|\r|\u2028|\u2029/g,"\n");return a(t.length+2),T.comments_before.push(l("comment2",t,!0)),T.regex_allowed=n,C}),H=F("SyntaxError: Unterminated regular expression",function(n){for(var e,t=!1,r=!1;e=o(!0);)if(Me(e))h("SyntaxError: Unexpected line terminator");else if(t)n+="\\"+e,t=!1;else if("["==e)r=!0,n+=e;else if("]"==e&&r)r=!1,n+=e;else{if("/"==e&&!r)break;"\\"==e?t=!0:n+=e}var i=y();try{return l("regexp",new RegExp(n,i))}catch(n){h(n.message)}});return C.context=function(n){return n&&(T=n),T},C.add_directive=function(n){T.directive_stack[T.directive_stack.length-1].push(n),void 0===T.directives[n]?T.directives[n]=1:T.directives[n]++},C.push_directives_stack=function(){T.directive_stack.push([])},C.pop_directives_stack=function(){for(var n=T.directive_stack[T.directive_stack.length-1],e=0;e<n.length;e++)T.directives[n[e]]--;T.directive_stack.pop()},C.has_directive=function(n){return void 0!==T.directives[n]&&T.directives[n]>0},C}function H(n,e){function t(n,e){return M(U.token,n,e)}function r(){return U.peeked||(U.peeked=U.input())}function i(){return U.prev=U.token,U.peeked?(U.token=U.peeked,U.peeked=null):U.token=U.input(),U.in_directives=U.in_directives&&("string"==U.token.type||t("punc",";")),U.token}function a(){return U.prev}function u(n,e,t,r){var i=U.input.context();q(n,i.filename,null!=e?e:i.tokline,null!=t?t:i.tokcol,null!=r?r:i.tokpos)}function c(n,e){u(e,n.line,n.col)}function f(n){null==n&&(n=U.token),c(n,"SyntaxError: Unexpected token: "+n.type+" ("+n.value+")")}function l(n,e){return t(n,e)?i():void c(U.token,"SyntaxError: Unexpected token "+U.token.type+" «"+U.token.value+"», expected "+n+" «"+e+"»")}function p(n){return l("punc",n)}function d(){return!e.strict&&(U.token.nlb||t("eof")||t("punc","}"))}function h(n){t("punc",";")?i():n||d()||f()}function v(){p("(");var n=xn(!0);return p(")"),n}function m(n){return function(){var e=U.token,t=n(),r=a();return t.start=e,t.end=r,t}}function _(){(t("operator","/")||t("operator","/="))&&(U.peeked=null,U.token=U.input(U.token.value.substr(1)))}function g(){var n=N(ce);o(function(e){return e.name==n.name},U.labels)&&u("SyntaxError: Label "+n.name+" defined twice"),p(":"),U.labels.push(n);var e=L();return U.labels.pop(),e instanceof rn||n.references.forEach(function(e){e instanceof En&&(e=e.label.start,u("SyntaxError: Continue label `"+n.name+"` refers to non-IterationStatement.",e.line,e.col,e.pos))}),new tn({body:e,label:n})}function b(n){return new K({body:(n=xn(!0),h(),n)})}function y(n){var e,t=null;d()||(t=N(le,!0)),null!=t?(e=o(function(n){return n.name==t.name},U.labels),e||u("SyntaxError: Undefined label "+t.name),t.thedef=e):0==U.in_loop&&u("SyntaxError: "+n.TYPE+" not inside a loop or switch"),h();var r=new n({label:t});return e&&e.references.push(r),r}function A(){p("(");var n=null;return!t("punc",";")&&(n=t("keyword","var")?(i(),Y(!0)):xn(!0,!0),t("operator","in"))?(n instanceof On&&n.definitions.length>1&&u("SyntaxError: Only one variable declaration allowed in for..in loop"),i(),E(n)):w(n)}function w(n){p(";");var e=t("punc",";")?null:xn(!0);p(";");var r=t("punc",")")?null:xn(!0);return p(")"),new sn({init:n,condition:e,step:r,body:I(L)})}function E(n){var e=n instanceof On?n.definitions[0].name:null,t=xn(!0);return p(")"),new cn({init:n,name:e,object:t,body:I(L)})}function D(){var n=v(),e=L(),r=null;return t("keyword","else")&&(i(),r=L()),new Dn({condition:n,body:e,alternative:r})}function k(){p("{");for(var n=[];!t("punc","}");)t("eof")&&f(),n.push(L());return i(),n}function x(){p("{");for(var n,e=[],r=null,o=null;!t("punc","}");)t("eof")&&f(),t("keyword","case")?(o&&(o.end=a()),r=[],o=new Cn({start:(n=U.token,i(),n),expression:xn(!0),body:r}),e.push(o),p(":")):t("keyword","default")?(o&&(o.end=a()),r=[],o=new Fn({start:(n=U.token,i(),p(":"),n),body:r}),e.push(o)):(r||f(),r.push(L()));return o&&(o.end=a()),i(),e}function F(){var n=k(),e=null,r=null;if(t("keyword","catch")){var o=U.token;i(),p("(");var s=N(se);p(")"),e=new Sn({start:o,argname:s,body:k(),end:a()})}if(t("keyword","finally")){var o=U.token;i(),r=new Tn({start:o,body:k(),end:a()})}return e||r||u("SyntaxError: Missing catch/finally blocks"),new Bn({body:n,bcatch:e,bfinally:r})}function C(n,e){for(var r=[];r.push(new Mn({start:U.token,name:N(e?ie:re),value:t("operator","=")?(i(),xn(!1,n)):null,end:a()})),t("punc",",");)i();return r}function B(){var n,e=U.token;switch(e.type){case"name":case"keyword":n=H(fe);break;case"num":n=new ve({start:e,end:e,value:e.value});break;case"string":n=new he({start:e,end:e,value:e.value,quote:e.quote});break;case"regexp":n=new me({start:e,end:e,value:e.value});break;case"atom":switch(e.value){case"false":n=new De({start:e,end:e});break;case"true":n=new ke({start:e,end:e});break;case"null":n=new ge({start:e,end:e})}break;case"operator":T(e.value)||u("SyntaxError: Invalid getter/setter name: "+e.value,e.line,e.col,e.pos),n=H(fe)}return i(),n}function S(n,e,r){for(var o=!0,a=[];!t("punc",n)&&(o?o=!1:p(","),!e||!t("punc",n));)t("punc",",")&&r?a.push(new Ae({start:U.token,end:U.token})):a.push(xn(!1));return i(),a}function $(){var n=U.token;switch(i(),n.type){case"num":case"string":case"name":case"operator":case"keyword":case"atom":return n.value;default:f()}}function O(){var n=U.token;switch(i(),n.type){case"name":case"operator":case"keyword":case"atom":return n.value;default:f()}}function H(n){var e=U.token.value;return new("this"==e?pe:n)({name:String(e),start:U.token,end:U.token})}function N(n,e){if(!t("name"))return e||u("SyntaxError: Name expected"),null;var r=H(n);return i(),r}function j(n,e,t){return"++"!=e&&"--"!=e||R(t)||u("SyntaxError: Invalid use of "+e+" operator"),new n({operator:e,expression:t})}function P(n){return _n(dn(!0),0,n)}function R(n){return!e.strict||!(n instanceof pe)&&(n instanceof jn||n instanceof ne)}function I(n){++U.in_loop;var e=n();return--U.in_loop,e}e=s(e,{strict:!1,filename:null,toplevel:null,expression:!1,html5_comments:!0,bare_returns:!1,shebang:!0});var U={input:"string"==typeof n?z(n,e.filename,e.html5_comments,e.shebang):n,token:null,prev:null,peeked:null,in_function:0,in_directives:!0,in_loop:0,labels:[]};U.token=i();var L=m(function(){var n;switch(_(),U.token.type){case"string":var o=!1;U.in_directives===!0&&((M(r(),"punc",";")||r().nlb)&&U.token.raw.indexOf("\\")===-1?U.input.add_directive(U.token.value):U.in_directives=!1);var o=U.in_directives,s=b();return o?new X({start:s.body.start,end:s.body.end,quote:s.body.quote,value:s.body.value}):s;case"num":case"regexp":case"operator":case"atom":return b();case"name":return M(r(),"punc",":")?g():b();case"punc":switch(U.token.value){case"{":return new Q({start:U.token,body:k(),end:a()});case"[":case"(":return b();case";":return U.in_directives=!1,i(),new nn;default:f()}case"keyword":switch(n=U.token.value,i(),n){case"break":return y(wn);case"continue":return y(En);case"debugger":return h(),new J;case"do":return new an({body:I(L),condition:(l("keyword","while"),n=v(),h(!0),n)});case"while":return new un({condition:v(),body:I(L)});case"for":return A();case"function":return V(mn);case"if":return D();case"return":return 0!=U.in_function||e.bare_returns||u("SyntaxError: 'return' outside of function"),new bn({value:t("punc",";")?(i(),null):d()?null:(n=xn(!0),h(),n)});case"switch":return new kn({expression:v(),body:I(x)});case"throw":return U.token.nlb&&u("SyntaxError: Illegal newline after 'throw'"),new yn({value:(n=xn(!0),h(),n)});case"try":return F();case"var":return n=Y(),h(),n;case"const":return n=W(),h(),n;case"with":return U.input.has_directive("use strict")&&u("SyntaxError: Strict mode may not include a with statement"),new fn({expression:v(),body:L()});default:f()}}}),V=function(n){var e=n===mn,r=t("name")?N(e?ae:ue):null;return e&&!r&&f(),p("("),new n({name:r,argnames:function(n,e){for(;!t("punc",")");)n?n=!1:p(","),e.push(N(oe));return i(),e}(!0,[]),body:function(n,e){++U.in_function,U.in_directives=!0,U.input.push_directives_stack(),U.in_loop=0,U.labels=[];var t=k();return U.input.pop_directives_stack(),--U.in_function,U.in_loop=n,U.labels=e,t}(U.in_loop,U.labels)})},Y=function(n){return new On({start:a(),definitions:C(n,!1),end:a()})},W=function(){return new qn({start:a(),definitions:C(!1,!0),end:a()})},G=function(n){var e=U.token;l("operator","new");var r,o=Z(!1);return t("punc","(")?(i(),r=S(")")):r=[],ln(new Hn({start:e,expression:o,args:r,end:a()}),n)},Z=function(n){if(t("operator","new"))return G(n);var e=U.token;if(t("punc")){switch(e.value){case"(":i();var r=xn(!0);return r.start=e,r.end=U.token,p(")"),ln(r,n);case"[":return ln(en(),n);case"{":return ln(on(),n)}f()}if(t("keyword","function")){i();var o=V(vn);return o.start=e,o.end=a(),ln(o,n)}return Le[U.token.type]?ln(B(),n):void f()},en=m(function(){return p("["),new Gn({elements:S("]",!e.strict,!0)})}),on=m(function(){p("{");for(var n=!0,r=[];!t("punc","}")&&(n?n=!1:p(","),e.strict||!t("punc","}"));){var o=U.token,u=o.type,s=$();if("name"==u&&!t("punc",":")){if("get"==s){r.push(new Qn({start:o,key:B(),value:V(hn),end:a()}));continue}if("set"==s){r.push(new Zn({start:o,key:B(),value:V(hn),end:a()}));continue}}p(":"),r.push(new Kn({start:o,quote:o.quote,key:s,value:xn(!1),end:a()}))}return i(),new Jn({properties:r})}),ln=function(n,e){var r=n.start;if(t("punc","."))return i(),ln(new Pn({start:r,expression:n,property:O(),end:a()}),e);if(t("punc","[")){i();var o=xn(!0);return p("]"),ln(new Rn({start:r,expression:n,property:o,end:a()}),e)}return e&&t("punc","(")?(i(),ln(new zn({start:r,expression:n,args:S(")"),end:a()}),!0)):n},dn=function(n){var e=U.token;if(t("operator")&&Pe(e.value)){i(),_();var r=j(Un,e.value,dn(n));return r.start=e,r.end=a(),r}for(var o=Z(n);t("operator")&&Re(U.token.value)&&!U.token.nlb;)o=j(Ln,U.token.value,o),o.start=e,o.end=U.token,i();return o},_n=function(n,e,r){var o=t("operator")?U.token.value:null;"in"==o&&r&&(o=null);var a=null!=o?Ue[o]:null;if(null!=a&&a>e){i();var u=_n(dn(!0),a,r);return _n(new Vn({start:n.start,left:n,operator:o,right:u,end:u.end}),e,r)}return n},gn=function(n){var e=U.token,r=P(n);if(t("operator","?")){i();var o=xn(!1);return p(":"),new Yn({start:e,condition:r,consequent:o,alternative:xn(!1,n),end:a()})}return r},An=function(n){var e=U.token,r=gn(n),o=U.token.value;if(t("operator")&&Ie(o)){if(R(r))return i(),new Wn({start:e,left:r,operator:o,right:An(n),end:a()});u("SyntaxError: Invalid assignment")}return r},xn=function(n,e){var o=U.token,a=An(e);return n&&t("punc",",")?(i(),new Nn({start:o,car:a,cdr:xn(!0,e),end:r()})):a};return e.expression?xn(!0):function(){var n=U.token,r=[];for(U.input.push_directives_stack();!t("eof");)r.push(L());U.input.pop_directives_stack();var i=a(),o=e.toplevel;return o?(o.body=o.body.concat(r),o.end=i):o=new pn({start:n,body:r,end:i}),o}()}function N(n,e){A.call(this),this.before=n,this.after=e}function j(n,e,t){this.name=t.name,this.orig=[t],this.scope=n,this.references=[],this.global=!1,this.mangled_name=null,this.undeclared=!1,this.constant=!1,this.index=e,this.id=j.next_id++}function P(n){function e(n,e){return n.replace(/[\u0000-\u001f\u007f-\uffff]/g,function(n){var t=n.charCodeAt(0).toString(16);if(t.length<=2&&!e){for(;t.length<2;)t="0"+t;return"\\x"+t}for(;t.length<4;)t="0"+t;return"\\u"+t})}function t(t,r){function i(){return"'"+t.replace(/\x27/g,"\\'")+"'"}function o(){return'"'+t.replace(/\x22/g,'\\"')+'"'}var a=0,u=0;switch(t=t.replace(/[\\\b\f\n\r\v\t\x22\x27\u2028\u2029\0\ufeff]/g,function(e,r){switch(e){case'"':return++a,'"';case"'":return++u,"'";case"\\":return"\\\\";case"\n":return"\\n";case"\r":return"\\r";case"\t":return"\\t";case"\b":return"\\b";case"\f":return"\\f";case"\v":return n.screw_ie8?"\\v":"\\x0B";case"\u2028":return"\\u2028";case"\u2029":return"\\u2029";case"\ufeff":return"\\ufeff";case"\0":return/[0-7]/.test(t.charAt(r+1))?"\\x00":"\\0"}return e}),n.ascii_only&&(t=e(t)),n.quote_style){case 1:return i();case 2:return o();case 3:return"'"==r?i():o();default:return a>u?i():o()}}function r(e,r){var i=t(e,r);return n.inline_script&&(i=i.replace(/<\x2fscript([>\/\t\n\f\r ])/gi,"<\\/script$1"),i=i.replace(/\x3c!--/g,"\\x3c!--"),i=i.replace(/--\x3e/g,"--\\x3e")),i}function i(t){return t=t.toString(),n.ascii_only&&(t=e(t,!0)),t}function o(e){return a(" ",n.indent_start+A-e*n.indent_level)}function u(){return C.charAt(C.length-1)}function c(){n.max_line_len&&w>n.max_line_len&&l("\n")}function l(e){e=String(e);var t=e.charAt(0);if(F&&(F=!1,t&&!(";}".indexOf(t)<0)||/[;]$/.test(C)||(n.semicolons||B(t)?(k+=";",w++,D++):(k+="\n",D++,E++,w=0,/^\s+$/.test(e)&&(F=!0)),n.beautify||(x=!1))),!n.beautify&&n.preserve_line&&H[H.length-1])for(var r=H[H.length-1].start.line;E<r;)k+="\n",D++,E++,w=0,x=!1;if(x){var i=u();(S(i)&&(S(t)||"\\"==t)||/^[\+\-\/]$/.test(t)&&t==i)&&(k+=" ",w++,D++),x=!1}var o=e.split(/\r?\n/),a=o.length-1;E+=a,0==a?w+=o[a].length:w=o[a].length,D+=e.length,C=e,k+=e}function p(){F=!1,l(";")}function d(){return A+n.indent_level}function h(n){var e;return l("{"),q(),O(d(),function(){e=n()}),$(),l("}"),e}function m(n){l("(");var e=n();return l(")"),e}function _(n){l("[");var e=n();return l("]"),e}function g(){l(","),T()}function b(){l(":"),n.space_colon&&T()}function y(){return k}n=s(n,{indent_start:0,indent_level:4,quote_keys:!1,space_colon:!0,ascii_only:!1,unescape_regexps:!1,inline_script:!1,width:80,max_line_len:32e3,beautify:!1,source_map:null,bracketize:!1,semicolons:!0,comments:!1,shebang:!0,preserve_line:!1,screw_ie8:!0,preamble:null,quote_style:0,keep_quoted_props:!1},!0);var A=0,w=0,E=1,D=0,k="",x=!1,F=!1,C=null,B=v("( [ + * / - , ."),T=n.beautify?function(){l(" ")}:function(){x=!0},$=n.beautify?function(e){n.beautify&&l(o(e?.5:0))}:f,O=n.beautify?function(n,e){n===!0&&(n=d());var t=A;A=n;var r=e();return A=t,r}:function(n,e){return e()},q=n.beautify?function(){l("\n")}:c,M=n.beautify?function(){l(";")}:function(){F=!0},z=n.source_map?function(e,t){try{e&&n.source_map.add(e.file||"?",E,w,e.line,e.col,t||"name"!=e.type?t:e.value)}catch(n){W.warn("Couldn't figure out mapping for {file}:{line},{col} → {cline},{ccol} [{name}]",{file:e.file,line:e.line,col:e.col,cline:E,ccol:w,name:t||""})}}:f;n.preamble&&l(n.preamble.replace(/\r\n?|[\n\u2028\u2029]|\s*$/g,"\n"));var H=[];return{get:y,toString:y,indent:$,indentation:function(){return A},current_width:function(){return w-A},should_break:function(){return n.width&&this.current_width()>=n.width},newline:q,print:l,space:T,comma:g,colon:b,last:function(){return C},semicolon:M,force_semicolon:p,to_ascii:e,print_name:function(n){l(i(n))},print_string:function(n,e,t){var i=r(n,e);t===!0&&i.indexOf("\\")===-1&&(Ye.test(k)||p(),p()),l(i)},encode_string:r,next_indent:d,with_indent:O,with_block:h,with_parens:m,with_square:_,add_mapping:z,option:function(e){return n[e]},line:function(){return E},col:function(){return w},pos:function(){return D},push_node:function(n){H.push(n)},pop_node:function(){return H.pop()},stack:function(){return H},parent:function(n){return H[H.length-2-(n||0)]}}}function R(n,e){if(!(this instanceof R))return new R(n,e);N.call(this,this.before,this.after),this.options=s(n,{sequences:!e,properties:!e,dead_code:!e,drop_debugger:!e,unsafe:!1,unsafe_comps:!1,conditionals:!e,comparisons:!e,evaluate:!e,booleans:!e,loops:!e,unused:!e,hoist_funs:!e,keep_fargs:!0,keep_fnames:!1,hoist_vars:!1,if_return:!e,join_vars:!e,collapse_vars:!1,cascade:!e,side_effects:!e,pure_getters:!1,pure_funcs:null,negate_iife:!e,screw_ie8:!0,drop_console:!1,angular:!1,warnings:!0,global_defs:{},passes:1},!0);var t=this.options.sequences;this.sequences_limit=1==t?200:0|t,this.warnings_produced={}}function I(n){function e(e,i,o,a,u,s){if(r){var c=r.originalPositionFor({line:a,column:u});if(null===c.source)return;e=c.source,a=c.line,u=c.column,s=c.name||s}t.addMapping({generated:{line:i+n.dest_line_diff,column:o},original:{line:a+n.orig_line_diff,column:u},source:e,name:s})}n=s(n,{file:null,root:null,orig:null,orig_line_diff:0,dest_line_diff:0});var t=new MOZ_SourceMap.SourceMapGenerator({file:n.file,sourceRoot:n.root}),r=n.orig&&new MOZ_SourceMap.SourceMapConsumer(n.orig);return{add:e,get:function(){return t},toString:function(){return JSON.stringify(t.toJSON())}}}function U(){function n(n){l(e,n)}var e=[];return[Object,Array,Function,Number,String,Boolean,Error,Math,Date,RegExp].forEach(function(e){Object.getOwnPropertyNames(e).map(n),e.prototype&&Object.getOwnPropertyNames(e.prototype).map(n)}),e}function L(n,e){function t(n){return!(v.indexOf(n)>=0)&&(!(c.indexOf(n)>=0)&&(e.only_cache?f.props.has(n):!/^[0-9.]+$/.test(n)))}function r(n){return!(p&&!p.test(n))&&(!(c.indexOf(n)>=0)&&(f.props.has(n)||h.indexOf(n)>=0))}function i(n){t(n)&&l(h,n),r(n)||l(v,n)}function o(n){if(!r(n))return n;var e=f.props.get(n);if(!e){do e=Ve(++f.cname);while(!t(e));f.props.set(n,e)}return e}function a(n){var e={};try{!function n(t){t.walk(new A(function(t){if(t instanceof Nn)return n(t.cdr),!0;if(t instanceof he)return i(t.value),!0;if(t instanceof Yn)return n(t.consequent),n(t.alternative),!0;throw e}))}(n)}catch(n){if(n!==e)throw n}}function u(n){return n.transform(new N(function(n){return n instanceof Nn?n.cdr=u(n.cdr):n instanceof he?n.value=o(n.value):n instanceof Yn&&(n.consequent=u(n.consequent),n.alternative=u(n.alternative)),n}))}e=s(e,{reserved:null,cache:null,only_cache:!1,regex:null,ignore_quoted:!1});var c=e.reserved;null==c&&(c=U());var f=e.cache;null==f&&(f={cname:-1,props:new _});var p=e.regex,d=e.ignore_quoted,h=[],v=[];return n.walk(new A(function(n){n instanceof Kn?d&&n.quote||i(n.key):n instanceof Xn?i(n.key.name):n instanceof Pn?this.parent()instanceof Wn&&i(n.property):n instanceof Rn&&this.parent()instanceof Wn&&(d||a(n.property))})),n.transform(new N(function(n){n instanceof Kn?d&&n.quote||(n.key=o(n.key)):n instanceof Xn?n.key.name=o(n.key.name):n instanceof Pn?n.property=o(n.property):n instanceof Rn&&(d||(n.property=u(n.property)))}))}u.prototype=Object.create(Error.prototype),u.prototype.constructor=u,u.croak=function(n,e){throw new u(n,e)};var V=function(){function n(n,o,a){function u(){var u=o(n[s],s),l=u instanceof r;return l&&(u=u.v),u instanceof e?(u=u.v,u instanceof t?f.push.apply(f,a?u.v.slice().reverse():u.v):f.push(u)):u!==i&&(u instanceof t?c.push.apply(c,a?u.v.slice().reverse():u.v):c.push(u)),l}var s,c=[],f=[];if(n instanceof Array)if(a){for(s=n.length;--s>=0&&!u(););c.reverse(),f.reverse()}else for(s=0;s<n.length&&!u();++s);else for(s in n)if(g(n,s)&&u())break;return f.concat(c)}function e(n){this.v=n}function t(n){this.v=n}function r(n){this.v=n}n.at_top=function(n){return new e(n)},n.splice=function(n){return new t(n)},n.last=function(n){return new r(n)};var i=n.skip={};return n}();_.prototype={set:function(n,e){return this.has(n)||++this._size,this._values["$"+n]=e,this},add:function(n,e){return this.has(n)?this.get(n).push(e):this.set(n,[e]),this},get:function(n){return this._values["$"+n]},del:function(n){return this.has(n)&&(--this._size,delete this._values["$"+n]),this},has:function(n){return"$"+n in this._values},each:function(n){for(var e in this._values)n(this._values[e],e.substr(1))},size:function(){return this._size},map:function(n){var e=[];for(var t in this._values)e.push(n(this._values[t],t.substr(1)));return e},toObject:function(){return this._values}},_.fromObject=function(n){var e=new _;return e._size=c(e._values,n),e};var Y=b("Token","type value line col pos endline endcol endpos nlb comments_before file raw",{},null),W=b("Node","start end",{clone:function(){return new this.CTOR(this)},$documentation:"Base class of all AST nodes",$propdoc:{start:"[AST_Token] The first token of this node",end:"[AST_Token] The last token of this node"},_walk:function(n){return n._visit(this)},walk:function(n){return this._walk(n)}},null);W.warn_function=null,W.warn=function(n,e){W.warn_function&&W.warn_function(p(n,e))};var G=b("Statement",null,{$documentation:"Base class of all statements"}),J=b("Debugger",null,{$documentation:"Represents a debugger statement"},G),X=b("Directive","value scope quote",{$documentation:'Represents a directive, like "use strict";',$propdoc:{value:"[string] The value of this directive as a plain string (it's not an AST_String!)",scope:"[AST_Scope/S] The scope that this directive affects",quote:"[string] the original quote character"}},G),K=b("SimpleStatement","body",{$documentation:"A statement consisting of an expression, i.e. a = 1 + 2",$propdoc:{body:"[AST_Node] an expression node (should not be instanceof AST_Statement)"},_walk:function(n){return n._visit(this,function(){this.body._walk(n)})}},G),Z=b("Block","body",{$documentation:"A body of statements (usually bracketed)",$propdoc:{body:"[AST_Statement*] an array of statements"},_walk:function(n){return n._visit(this,function(){y(this,n)})}},G),Q=b("BlockStatement",null,{$documentation:"A block statement"},Z),nn=b("EmptyStatement",null,{$documentation:"The empty statement (empty block or simply a semicolon)",_walk:function(n){return n._visit(this)}},G),en=b("StatementWithBody","body",{$documentation:"Base class for all statements that contain one nested body: `For`, `ForIn`, `Do`, `While`, `With`",$propdoc:{body:"[AST_Statement] the body; this should always be present, even if it's an AST_EmptyStatement"},_walk:function(n){return n._visit(this,function(){this.body._walk(n)})}},G),tn=b("LabeledStatement","label",{$documentation:"Statement with a label",$propdoc:{label:"[AST_Label] a label definition"},_walk:function(n){return n._visit(this,function(){this.label._walk(n),this.body._walk(n)})}},en),rn=b("IterationStatement",null,{$documentation:"Internal class.  All loops inherit from it."},en),on=b("DWLoop","condition",{$documentation:"Base class for do/while statements",$propdoc:{condition:"[AST_Node] the loop condition.  Should not be instanceof AST_Statement"}},rn),an=b("Do",null,{$documentation:"A `do` statement",_walk:function(n){return n._visit(this,function(){this.body._walk(n),this.condition._walk(n)})}},on),un=b("While",null,{$documentation:"A `while` statement",_walk:function(n){return n._visit(this,function(){this.condition._walk(n),this.body._walk(n)})}},on),sn=b("For","init condition step",{$documentation:"A `for` statement",$propdoc:{init:"[AST_Node?] the `for` initialization code, or null if empty",condition:"[AST_Node?] the `for` termination clause, or null if empty",step:"[AST_Node?] the `for` update clause, or null if empty"},_walk:function(n){return n._visit(this,function(){this.init&&this.init._walk(n),this.condition&&this.condition._walk(n),this.step&&this.step._walk(n),this.body._walk(n)})}},rn),cn=b("ForIn","init name object",{$documentation:"A `for ... in` statement",$propdoc:{init:"[AST_Node] the `for/in` initialization code",name:"[AST_SymbolRef?] the loop variable, only if `init` is AST_Var",object:"[AST_Node] the object that we're looping through"},_walk:function(n){return n._visit(this,function(){this.init._walk(n),this.object._walk(n),this.body._walk(n)})}},rn),fn=b("With","expression",{$documentation:"A `with` statement",$propdoc:{expression:"[AST_Node] the `with` expression"},_walk:function(n){return n._visit(this,function(){this.expression._walk(n),this.body._walk(n)})}},en),ln=b("Scope","directives variables functions uses_with uses_eval parent_scope enclosed cname",{$documentation:"Base class for all statements introducing a lexical scope",$propdoc:{directives:"[string*/S] an array of directives declared in this scope",variables:"[Object/S] a map of name -> SymbolDef for all variables/functions defined in this scope",functions:"[Object/S] like `variables`, but only lists function declarations",uses_with:"[boolean/S] tells whether this scope uses the `with` statement",
	uses_eval:"[boolean/S] tells whether this scope contains a direct call to the global `eval`",parent_scope:"[AST_Scope?/S] link to the parent scope",enclosed:"[SymbolDef*/S] a list of all symbol definitions that are accessed from this scope or any subscopes",cname:"[integer/S] current index for mangling variables (used internally by the mangler)"}},Z),pn=b("Toplevel","globals",{$documentation:"The toplevel scope",$propdoc:{globals:"[Object/S] a map of name -> SymbolDef for all undeclared names"},wrap_enclose:function(n){var e=this,t=[],r=[];n.forEach(function(n){var e=n.lastIndexOf(":");t.push(n.substr(0,e)),r.push(n.substr(e+1))});var i="(function("+r.join(",")+"){ '$ORIG'; })("+t.join(",")+")";return i=H(i),i=i.transform(new N(function(n){if(n instanceof X&&"$ORIG"==n.value)return V.splice(e.body)}))},wrap_commonjs:function(n,e){var t=this,r=[];e&&(t.figure_out_scope(),t.walk(new A(function(n){n instanceof te&&n.definition().global&&(o(function(e){return e.name==n.name},r)||r.push(n))})));var i="(function(exports, global){ '$ORIG'; '$EXPORTS'; global['"+n+"'] = exports; }({}, (function(){return this}())))";return i=H(i),i=i.transform(new N(function(n){if(n instanceof X)switch(n.value){case"$ORIG":return V.splice(t.body);case"$EXPORTS":var e=[];return r.forEach(function(n){e.push(new K({body:new Wn({left:new Rn({expression:new fe({name:"exports"}),property:new he({value:n.name})}),operator:"=",right:new fe(n)})}))}),V.splice(e)}}))}},ln),dn=b("Lambda","name argnames uses_arguments",{$documentation:"Base class for functions",$propdoc:{name:"[AST_SymbolDeclaration?] the name of this function",argnames:"[AST_SymbolFunarg*] array of function arguments",uses_arguments:"[boolean/S] tells whether this function accesses the arguments array"},_walk:function(n){return n._visit(this,function(){this.name&&this.name._walk(n),this.argnames.forEach(function(e){e._walk(n)}),y(this,n)})}},ln),hn=b("Accessor",null,{$documentation:"A setter/getter function.  The `name` property is always null."},dn),vn=b("Function",null,{$documentation:"A function expression"},dn),mn=b("Defun",null,{$documentation:"A function definition"},dn),_n=b("Jump",null,{$documentation:"Base class for “jumps” (for now that's `return`, `throw`, `break` and `continue`)"},G),gn=b("Exit","value",{$documentation:"Base class for “exits” (`return` and `throw`)",$propdoc:{value:"[AST_Node?] the value returned or thrown by this statement; could be null for AST_Return"},_walk:function(n){return n._visit(this,this.value&&function(){this.value._walk(n)})}},_n),bn=b("Return",null,{$documentation:"A `return` statement"},gn),yn=b("Throw",null,{$documentation:"A `throw` statement"},gn),An=b("LoopControl","label",{$documentation:"Base class for loop control statements (`break` and `continue`)",$propdoc:{label:"[AST_LabelRef?] the label, or null if none"},_walk:function(n){return n._visit(this,this.label&&function(){this.label._walk(n)})}},_n),wn=b("Break",null,{$documentation:"A `break` statement"},An),En=b("Continue",null,{$documentation:"A `continue` statement"},An),Dn=b("If","condition alternative",{$documentation:"A `if` statement",$propdoc:{condition:"[AST_Node] the `if` condition",alternative:"[AST_Statement?] the `else` part, or null if not present"},_walk:function(n){return n._visit(this,function(){this.condition._walk(n),this.body._walk(n),this.alternative&&this.alternative._walk(n)})}},en),kn=b("Switch","expression",{$documentation:"A `switch` statement",$propdoc:{expression:"[AST_Node] the `switch` “discriminant”"},_walk:function(n){return n._visit(this,function(){this.expression._walk(n),y(this,n)})}},Z),xn=b("SwitchBranch",null,{$documentation:"Base class for `switch` branches"},Z),Fn=b("Default",null,{$documentation:"A `default` switch branch"},xn),Cn=b("Case","expression",{$documentation:"A `case` switch branch",$propdoc:{expression:"[AST_Node] the `case` expression"},_walk:function(n){return n._visit(this,function(){this.expression._walk(n),y(this,n)})}},xn),Bn=b("Try","bcatch bfinally",{$documentation:"A `try` statement",$propdoc:{bcatch:"[AST_Catch?] the catch block, or null if not present",bfinally:"[AST_Finally?] the finally block, or null if not present"},_walk:function(n){return n._visit(this,function(){y(this,n),this.bcatch&&this.bcatch._walk(n),this.bfinally&&this.bfinally._walk(n)})}},Z),Sn=b("Catch","argname",{$documentation:"A `catch` node; only makes sense as part of a `try` statement",$propdoc:{argname:"[AST_SymbolCatch] symbol for the exception"},_walk:function(n){return n._visit(this,function(){this.argname._walk(n),y(this,n)})}},Z),Tn=b("Finally",null,{$documentation:"A `finally` node; only makes sense as part of a `try` statement"},Z),$n=b("Definitions","definitions",{$documentation:"Base class for `var` or `const` nodes (variable declarations/initializations)",$propdoc:{definitions:"[AST_VarDef*] array of variable definitions"},_walk:function(n){return n._visit(this,function(){this.definitions.forEach(function(e){e._walk(n)})})}},G),On=b("Var",null,{$documentation:"A `var` statement"},$n),qn=b("Const",null,{$documentation:"A `const` statement"},$n),Mn=b("VarDef","name value",{$documentation:"A variable declaration; only appears in a AST_Definitions node",$propdoc:{name:"[AST_SymbolVar|AST_SymbolConst] name of the variable",value:"[AST_Node?] initializer, or null of there's no initializer"},_walk:function(n){return n._visit(this,function(){this.name._walk(n),this.value&&this.value._walk(n)})}}),zn=b("Call","expression args",{$documentation:"A function call expression",$propdoc:{expression:"[AST_Node] expression to invoke as function",args:"[AST_Node*] array of arguments"},_walk:function(n){return n._visit(this,function(){this.expression._walk(n),this.args.forEach(function(e){e._walk(n)})})}}),Hn=b("New",null,{$documentation:"An object instantiation.  Derives from a function call since it has exactly the same properties"},zn),Nn=b("Seq","car cdr",{$documentation:"A sequence expression (two comma-separated expressions)",$propdoc:{car:"[AST_Node] first element in sequence",cdr:"[AST_Node] second element in sequence"},$cons:function(n,e){var t=new Nn(n);return t.car=n,t.cdr=e,t},$from_array:function(n){if(0==n.length)return null;if(1==n.length)return n[0].clone();for(var e=null,t=n.length;--t>=0;)e=Nn.cons(n[t],e);for(var r=e;r;){if(r.cdr&&!r.cdr.cdr){r.cdr=r.cdr.car;break}r=r.cdr}return e},to_array:function(){for(var n=this,e=[];n;){if(e.push(n.car),n.cdr&&!(n.cdr instanceof Nn)){e.push(n.cdr);break}n=n.cdr}return e},add:function(n){for(var e=this;e;){if(!(e.cdr instanceof Nn)){var t=Nn.cons(e.cdr,n);return e.cdr=t}e=e.cdr}},len:function(){return this.cdr instanceof Nn?this.cdr.len()+1:2},_walk:function(n){return n._visit(this,function(){this.car._walk(n),this.cdr&&this.cdr._walk(n)})}}),jn=b("PropAccess","expression property",{$documentation:'Base class for property access expressions, i.e. `a.foo` or `a["foo"]`',$propdoc:{expression:"[AST_Node] the “container” expression",property:"[AST_Node|string] the property to access.  For AST_Dot this is always a plain string, while for AST_Sub it's an arbitrary AST_Node"}}),Pn=b("Dot",null,{$documentation:"A dotted property access expression",_walk:function(n){return n._visit(this,function(){this.expression._walk(n)})}},jn),Rn=b("Sub",null,{$documentation:'Index-style property access, i.e. `a["foo"]`',_walk:function(n){return n._visit(this,function(){this.expression._walk(n),this.property._walk(n)})}},jn),In=b("Unary","operator expression",{$documentation:"Base class for unary expressions",$propdoc:{operator:"[string] the operator",expression:"[AST_Node] expression that this unary operator applies to"},_walk:function(n){return n._visit(this,function(){this.expression._walk(n)})}}),Un=b("UnaryPrefix",null,{$documentation:"Unary prefix expression, i.e. `typeof i` or `++i`"},In),Ln=b("UnaryPostfix",null,{$documentation:"Unary postfix expression, i.e. `i++`"},In),Vn=b("Binary","left operator right",{$documentation:"Binary expression, i.e. `a + b`",$propdoc:{left:"[AST_Node] left-hand side expression",operator:"[string] the operator",right:"[AST_Node] right-hand side expression"},_walk:function(n){return n._visit(this,function(){this.left._walk(n),this.right._walk(n)})}}),Yn=b("Conditional","condition consequent alternative",{$documentation:"Conditional expression using the ternary operator, i.e. `a ? b : c`",$propdoc:{condition:"[AST_Node]",consequent:"[AST_Node]",alternative:"[AST_Node]"},_walk:function(n){return n._visit(this,function(){this.condition._walk(n),this.consequent._walk(n),this.alternative._walk(n)})}}),Wn=b("Assign",null,{$documentation:"An assignment expression — `a = b + 5`"},Vn),Gn=b("Array","elements",{$documentation:"An array literal",$propdoc:{elements:"[AST_Node*] array of elements"},_walk:function(n){return n._visit(this,function(){this.elements.forEach(function(e){e._walk(n)})})}}),Jn=b("Object","properties",{$documentation:"An object literal",$propdoc:{properties:"[AST_ObjectProperty*] array of properties"},_walk:function(n){return n._visit(this,function(){this.properties.forEach(function(e){e._walk(n)})})}}),Xn=b("ObjectProperty","key value",{$documentation:"Base class for literal object properties",$propdoc:{key:"[string] the property name converted to a string for ObjectKeyVal.  For setters and getters this is an arbitrary AST_Node.",value:"[AST_Node] property value.  For setters and getters this is an AST_Function."},_walk:function(n){return n._visit(this,function(){this.value._walk(n)})}}),Kn=b("ObjectKeyVal","quote",{$documentation:"A key: value object property",$propdoc:{quote:"[string] the original quote character"}},Xn),Zn=b("ObjectSetter",null,{$documentation:"An object setter property"},Xn),Qn=b("ObjectGetter",null,{$documentation:"An object getter property"},Xn),ne=b("Symbol","scope name thedef",{$propdoc:{name:"[string] name of this symbol",scope:"[AST_Scope/S] the current scope (not necessarily the definition scope)",thedef:"[SymbolDef/S] the definition of this symbol"},$documentation:"Base class for all symbols"}),ee=b("SymbolAccessor",null,{$documentation:"The name of a property accessor (setter/getter function)"},ne),te=b("SymbolDeclaration","init",{$documentation:"A declaration symbol (symbol in var/const, function name or argument, symbol in catch)",$propdoc:{init:"[AST_Node*/S] array of initializers for this declaration."}},ne),re=b("SymbolVar",null,{$documentation:"Symbol defining a variable"},te),ie=b("SymbolConst",null,{$documentation:"A constant declaration"},te),oe=b("SymbolFunarg",null,{$documentation:"Symbol naming a function argument"},re),ae=b("SymbolDefun",null,{$documentation:"Symbol defining a function"},te),ue=b("SymbolLambda",null,{$documentation:"Symbol naming a function expression"},te),se=b("SymbolCatch",null,{$documentation:"Symbol naming the exception in catch"},te),ce=b("Label","references",{$documentation:"Symbol naming a label (declaration)",$propdoc:{references:"[AST_LoopControl*] a list of nodes referring to this label"},initialize:function(){this.references=[],this.thedef=this}},ne),fe=b("SymbolRef",null,{$documentation:"Reference to some symbol (not definition/declaration)"},ne),le=b("LabelRef",null,{$documentation:"Reference to a label symbol"},ne),pe=b("This",null,{$documentation:"The `this` symbol"},ne),de=b("Constant",null,{$documentation:"Base class for all constants",getValue:function(){return this.value}}),he=b("String","value quote",{$documentation:"A string literal",$propdoc:{value:"[string] the contents of this string",quote:"[string] the original quote character"}},de),ve=b("Number","value literal",{$documentation:"A number literal",$propdoc:{value:"[number] the numeric value",literal:"[string] numeric value as string (optional)"}},de),me=b("RegExp","value",{$documentation:"A regexp literal",$propdoc:{value:"[RegExp] the actual regexp"}},de),_e=b("Atom",null,{$documentation:"Base class for atoms"},de),ge=b("Null",null,{$documentation:"The `null` atom",value:null},_e),be=b("NaN",null,{$documentation:"The impossible value",value:NaN},_e),ye=b("Undefined",null,{$documentation:"The `undefined` value",value:void 0},_e),Ae=b("Hole",null,{$documentation:"A hole in an array",value:void 0},_e),we=b("Infinity",null,{$documentation:"The `Infinity` value",value:1/0},_e),Ee=b("Boolean",null,{$documentation:"Base class for booleans"},_e),De=b("False",null,{$documentation:"The `false` atom",value:!1},Ee),ke=b("True",null,{$documentation:"The `true` atom",value:!0},Ee);A.prototype={_visit:function(n,e){this.push(n);var t=this.visit(n,e?function(){e.call(n)}:f);return!t&&e&&e.call(n),this.pop(n),t},parent:function(n){return this.stack[this.stack.length-2-(n||0)]},push:function(n){n instanceof dn?this.directives=Object.create(this.directives):n instanceof X&&(this.directives[n.value]=!this.directives[n.value]||"up"),this.stack.push(n)},pop:function(n){this.stack.pop(),n instanceof dn&&(this.directives=Object.getPrototypeOf(this.directives))},self:function(){return this.stack[this.stack.length-1]},find_parent:function(n){for(var e=this.stack,t=e.length;--t>=0;){var r=e[t];if(r instanceof n)return r}},has_directive:function(n){var e=this.directives[n];if(e)return e;var t=this.stack[this.stack.length-1];if(t instanceof ln)for(var r=0;r<t.body.length;++r){var i=t.body[r];if(!(i instanceof X))break;if(i.value==n)return!0}},in_boolean_context:function(){for(var n=this.stack,e=n.length,t=n[--e];e>0;){var r=n[--e];if(r instanceof Dn&&r.condition===t||r instanceof Yn&&r.condition===t||r instanceof on&&r.condition===t||r instanceof sn&&r.condition===t||r instanceof Un&&"!"==r.operator&&r.expression===t)return!0;if(!(r instanceof Vn)||"&&"!=r.operator&&"||"!=r.operator)return!1;t=r}},loopcontrol_target:function(n){var e=this.stack;if(n)for(var t=e.length;--t>=0;){var r=e[t];if(r instanceof tn&&r.label.name==n.name)return r.body}else for(var t=e.length;--t>=0;){var r=e[t];if(r instanceof kn||r instanceof rn)return r}}};var xe="break case catch const continue debugger default delete do else finally for function if in instanceof new return switch throw try typeof var void while with",Fe="false null true",Ce="abstract boolean byte char class double enum export extends final float goto implements import int interface let long native package private protected public short static super synchronized this throws transient volatile yield "+Fe+" "+xe,Be="return new delete throw else case";xe=v(xe),Ce=v(Ce),Be=v(Be),Fe=v(Fe);var Se=v(r("+-*&%=<>!?|~^")),Te=/^0x[0-9a-f]+$/i,$e=/^0[0-7]+$/,Oe=v(["in","instanceof","typeof","new","void","delete","++","--","+","-","!","~","&","|","^","*","/","%",">>","<<",">>>","<",">","<=",">=","==","===","!=","!==","?","=","+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&=","&&","||"]),qe=v(r("  \n\r\t\f\v​           \u2028\u2029  　\ufeff")),Me=v(r("\n\r\u2028\u2029")),ze=v(r("[{(,.;:")),He=v(r("[]{}(),;:")),Ne=(v(r("gmsiy")),{letter:new RegExp("[\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]"),digit:new RegExp("[\\u0030-\\u0039\\u0660-\\u0669\\u06F0-\\u06F9\\u07C0-\\u07C9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE6-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0DE6-\\u0DEF\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29\\u1040-\\u1049\\u1090-\\u1099\\u17E0-\\u17E9\\u1810-\\u1819\\u1946-\\u194F\\u19D0-\\u19D9\\u1A80-\\u1A89\\u1A90-\\u1A99\\u1B50-\\u1B59\\u1BB0-\\u1BB9\\u1C40-\\u1C49\\u1C50-\\u1C59\\uA620-\\uA629\\uA8D0-\\uA8D9\\uA900-\\uA909\\uA9D0-\\uA9D9\\uA9F0-\\uA9F9\\uAA50-\\uAA59\\uABF0-\\uABF9\\uFF10-\\uFF19]"),non_spacing_mark:new RegExp("[\\u0300-\\u036F\\u0483-\\u0487\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u0610-\\u061A\\u064B-\\u065E\\u0670\\u06D6-\\u06DC\\u06DF-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0711\\u0730-\\u074A\\u07A6-\\u07B0\\u07EB-\\u07F3\\u0816-\\u0819\\u081B-\\u0823\\u0825-\\u0827\\u0829-\\u082D\\u0900-\\u0902\\u093C\\u0941-\\u0948\\u094D\\u0951-\\u0955\\u0962\\u0963\\u0981\\u09BC\\u09C1-\\u09C4\\u09CD\\u09E2\\u09E3\\u0A01\\u0A02\\u0A3C\\u0A41\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A70\\u0A71\\u0A75\\u0A81\\u0A82\\u0ABC\\u0AC1-\\u0AC5\\u0AC7\\u0AC8\\u0ACD\\u0AE2\\u0AE3\\u0B01\\u0B3C\\u0B3F\\u0B41-\\u0B44\\u0B4D\\u0B56\\u0B62\\u0B63\\u0B82\\u0BC0\\u0BCD\\u0C3E-\\u0C40\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C62\\u0C63\\u0CBC\\u0CBF\\u0CC6\\u0CCC\\u0CCD\\u0CE2\\u0CE3\\u0D41-\\u0D44\\u0D4D\\u0D62\\u0D63\\u0DCA\\u0DD2-\\u0DD4\\u0DD6\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F71-\\u0F7E\\u0F80-\\u0F84\\u0F86\\u0F87\\u0F90-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u102D-\\u1030\\u1032-\\u1037\\u1039\\u103A\\u103D\\u103E\\u1058\\u1059\\u105E-\\u1060\\u1071-\\u1074\\u1082\\u1085\\u1086\\u108D\\u109D\\u135F\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17B7-\\u17BD\\u17C6\\u17C9-\\u17D3\\u17DD\\u180B-\\u180D\\u18A9\\u1920-\\u1922\\u1927\\u1928\\u1932\\u1939-\\u193B\\u1A17\\u1A18\\u1A56\\u1A58-\\u1A5E\\u1A60\\u1A62\\u1A65-\\u1A6C\\u1A73-\\u1A7C\\u1A7F\\u1B00-\\u1B03\\u1B34\\u1B36-\\u1B3A\\u1B3C\\u1B42\\u1B6B-\\u1B73\\u1B80\\u1B81\\u1BA2-\\u1BA5\\u1BA8\\u1BA9\\u1C2C-\\u1C33\\u1C36\\u1C37\\u1CD0-\\u1CD2\\u1CD4-\\u1CE0\\u1CE2-\\u1CE8\\u1CED\\u1DC0-\\u1DE6\\u1DFD-\\u1DFF\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2CEF-\\u2CF1\\u2DE0-\\u2DFF\\u302A-\\u302F\\u3099\\u309A\\uA66F\\uA67C\\uA67D\\uA6F0\\uA6F1\\uA802\\uA806\\uA80B\\uA825\\uA826\\uA8C4\\uA8E0-\\uA8F1\\uA926-\\uA92D\\uA947-\\uA951\\uA980-\\uA982\\uA9B3\\uA9B6-\\uA9B9\\uA9BC\\uAA29-\\uAA2E\\uAA31\\uAA32\\uAA35\\uAA36\\uAA43\\uAA4C\\uAAB0\\uAAB2-\\uAAB4\\uAAB7\\uAAB8\\uAABE\\uAABF\\uAAC1\\uABE5\\uABE8\\uABED\\uFB1E\\uFE00-\\uFE0F\\uFE20-\\uFE26]"),space_combining_mark:new RegExp("[\\u0903\\u093E-\\u0940\\u0949-\\u094C\\u094E\\u0982\\u0983\\u09BE-\\u09C0\\u09C7\\u09C8\\u09CB\\u09CC\\u09D7\\u0A03\\u0A3E-\\u0A40\\u0A83\\u0ABE-\\u0AC0\\u0AC9\\u0ACB\\u0ACC\\u0B02\\u0B03\\u0B3E\\u0B40\\u0B47\\u0B48\\u0B4B\\u0B4C\\u0B57\\u0BBE\\u0BBF\\u0BC1\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCC\\u0BD7\\u0C01-\\u0C03\\u0C41-\\u0C44\\u0C82\\u0C83\\u0CBE\\u0CC0-\\u0CC4\\u0CC7\\u0CC8\\u0CCA\\u0CCB\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D40\\u0D46-\\u0D48\\u0D4A-\\u0D4C\\u0D57\\u0D82\\u0D83\\u0DCF-\\u0DD1\\u0DD8-\\u0DDF\\u0DF2\\u0DF3\\u0F3E\\u0F3F\\u0F7F\\u102B\\u102C\\u1031\\u1038\\u103B\\u103C\\u1056\\u1057\\u1062-\\u1064\\u1067-\\u106D\\u1083\\u1084\\u1087-\\u108C\\u108F\\u109A-\\u109C\\u17B6\\u17BE-\\u17C5\\u17C7\\u17C8\\u1923-\\u1926\\u1929-\\u192B\\u1930\\u1931\\u1933-\\u1938\\u19B0-\\u19C0\\u19C8\\u19C9\\u1A19-\\u1A1B\\u1A55\\u1A57\\u1A61\\u1A63\\u1A64\\u1A6D-\\u1A72\\u1B04\\u1B35\\u1B3B\\u1B3D-\\u1B41\\u1B43\\u1B44\\u1B82\\u1BA1\\u1BA6\\u1BA7\\u1BAA\\u1C24-\\u1C2B\\u1C34\\u1C35\\u1CE1\\u1CF2\\uA823\\uA824\\uA827\\uA880\\uA881\\uA8B4-\\uA8C3\\uA952\\uA953\\uA983\\uA9B4\\uA9B5\\uA9BA\\uA9BB\\uA9BD-\\uA9C0\\uAA2F\\uAA30\\uAA33\\uAA34\\uAA4D\\uAA7B\\uABE3\\uABE4\\uABE6\\uABE7\\uABE9\\uABEA\\uABEC]"),connector_punctuation:new RegExp("[\\u005F\\u203F\\u2040\\u2054\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFF3F]")});O.prototype.toString=function(){return this.message+" (line: "+this.line+", col: "+this.col+", pos: "+this.pos+")\n\n"+this.stack};var je={},Pe=v(["typeof","void","delete","--","++","!","~","-","+"]),Re=v(["--","++"]),Ie=v(["=","+=","-=","/=","*=","%=",">>=","<<=",">>>=","|=","^=","&="]),Ue=function(n,e){for(var t=0;t<n.length;++t)for(var r=n[t],i=0;i<r.length;++i)e[r[i]]=t+1;return e}([["||"],["&&"],["|"],["^"],["&"],["==","===","!=","!=="],["<",">","<=",">=","in","instanceof"],[">>","<<",">>>"],["+","-"],["*","/","%"]],{}),Le=(t(["for","do","while","switch"]),t(["atom","num","string","regexp","name"]));N.prototype=new A,function(n){function e(e,t){e.DEFMETHOD("transform",function(e,r){var i,o;return e.push(this),e.before&&(i=e.before(this,t,r)),i===n&&(e.after?(e.stack[e.stack.length-1]=i=this,t(i,e),o=e.after(i,r),o!==n&&(i=o)):(i=this,t(i,e))),e.pop(this),i})}function t(n,e){return V(n,function(n){return n.transform(e,!0)})}e(W,f),e(tn,function(n,e){n.label=n.label.transform(e),n.body=n.body.transform(e)}),e(K,function(n,e){n.body=n.body.transform(e)}),e(Z,function(n,e){n.body=t(n.body,e)}),e(on,function(n,e){n.condition=n.condition.transform(e),n.body=n.body.transform(e)}),e(sn,function(n,e){n.init&&(n.init=n.init.transform(e)),n.condition&&(n.condition=n.condition.transform(e)),n.step&&(n.step=n.step.transform(e)),n.body=n.body.transform(e)}),e(cn,function(n,e){n.init=n.init.transform(e),n.object=n.object.transform(e),n.body=n.body.transform(e)}),e(fn,function(n,e){n.expression=n.expression.transform(e),n.body=n.body.transform(e)}),e(gn,function(n,e){n.value&&(n.value=n.value.transform(e))}),e(An,function(n,e){n.label&&(n.label=n.label.transform(e))}),e(Dn,function(n,e){n.condition=n.condition.transform(e),n.body=n.body.transform(e),n.alternative&&(n.alternative=n.alternative.transform(e))}),e(kn,function(n,e){n.expression=n.expression.transform(e),n.body=t(n.body,e)}),e(Cn,function(n,e){n.expression=n.expression.transform(e),n.body=t(n.body,e)}),e(Bn,function(n,e){n.body=t(n.body,e),n.bcatch&&(n.bcatch=n.bcatch.transform(e)),n.bfinally&&(n.bfinally=n.bfinally.transform(e))}),e(Sn,function(n,e){n.argname=n.argname.transform(e),n.body=t(n.body,e)}),e($n,function(n,e){n.definitions=t(n.definitions,e)}),e(Mn,function(n,e){n.name=n.name.transform(e),n.value&&(n.value=n.value.transform(e))}),e(dn,function(n,e){n.name&&(n.name=n.name.transform(e)),n.argnames=t(n.argnames,e),n.body=t(n.body,e)}),e(zn,function(n,e){n.expression=n.expression.transform(e),n.args=t(n.args,e)}),e(Nn,function(n,e){n.car=n.car.transform(e),n.cdr=n.cdr.transform(e)}),e(Pn,function(n,e){n.expression=n.expression.transform(e)}),e(Rn,function(n,e){n.expression=n.expression.transform(e),n.property=n.property.transform(e)}),e(In,function(n,e){n.expression=n.expression.transform(e)}),e(Vn,function(n,e){n.left=n.left.transform(e),n.right=n.right.transform(e)}),e(Yn,function(n,e){n.condition=n.condition.transform(e),n.consequent=n.consequent.transform(e),n.alternative=n.alternative.transform(e)}),e(Gn,function(n,e){n.elements=t(n.elements,e)}),e(Jn,function(n,e){n.properties=t(n.properties,e)}),e(Xn,function(n,e){n.value=n.value.transform(e)})}(),j.next_id=1,j.prototype={unmangleable:function(n){return n||(n={}),this.global&&!n.toplevel||this.undeclared||!n.eval&&(this.scope.uses_eval||this.scope.uses_with)||n.keep_fnames&&(this.orig[0]instanceof ue||this.orig[0]instanceof ae)},mangle:function(n){var e=n.cache&&n.cache.props;if(this.global&&e&&e.has(this.name))this.mangled_name=e.get(this.name);else if(!this.mangled_name&&!this.unmangleable(n)){var t=this.scope;!n.screw_ie8&&this.orig[0]instanceof ue&&(t=t.parent_scope),this.mangled_name=t.next_mangled(n,this),this.global&&e&&e.set(this.name,this.mangled_name)}}},pn.DEFMETHOD("figure_out_scope",function(n){n=s(n,{screw_ie8:!0,cache:null});var e=this,t=e.parent_scope=null,r=new _,i=null,o=!1,a=0,u=new A(function(e,s){if(n.screw_ie8&&e instanceof Sn){var c=t;return t=new ln(e),t.init_scope_vars(a),t.parent_scope=c,s(),t=c,!0}if(e instanceof ln){e.init_scope_vars(a);var c=e.parent_scope=t,f=i,l=r;return i=t=e,r=new _,++a,s(),--a,t=c,i=f,r=l,!0}if(e instanceof tn){var d=e.label;if(r.has(d.name))throw new Error(p("Label {name} defined twice",d));return r.set(d.name,d),s(),r.del(d.name),!0}if(e instanceof fn)for(var h=t;h;h=h.parent_scope)h.uses_with=!0;else if(e instanceof ne&&(e.scope=t),e instanceof ce&&(e.thedef=e,e.references=[]),e instanceof ue)i.def_function(e);else if(e instanceof ae)(e.scope=i.parent_scope).def_function(e);else if(e instanceof On)o=e.has_const_pragma();else if(e instanceof re||e instanceof ie){var v=i.def_variable(e);v.constant=e instanceof ie||o,v.init=u.parent().value}else if(e instanceof se)(n.screw_ie8?t:i).def_variable(e);else if(e instanceof le){var m=r.get(e.name);if(!m)throw new Error(p("Undefined label {name} [{line},{col}]",{name:e.name,line:e.start.line,col:e.start.col}));e.thedef=m}});e.walk(u);var c=null,f=e.globals=new _,u=new A(function(n,t){if(n instanceof dn){var r=c;return c=n,t(),c=r,!0}if(n instanceof An&&n.label)return n.label.thedef.references.push(n),!0;if(n instanceof fe){var i=n.name;if("eval"==i&&u.parent()instanceof zn)for(var o=n.scope;o&&!o.uses_eval;o=o.parent_scope)o.uses_eval=!0;var a=n.scope.find_variable(i);if(a)n.thedef=a;else{var s;f.has(i)?s=f.get(i):(s=new j(e,f.size(),n),s.undeclared=!0,s.global=!0,f.set(i,s)),n.thedef=s,c&&"arguments"==i&&(c.uses_arguments=!0)}return n.reference(),!0}});e.walk(u),n.cache&&(this.cname=n.cache.cname)}),ln.DEFMETHOD("init_scope_vars",function(n){this.variables=new _,this.functions=new _,this.uses_with=!1,this.uses_eval=!1,this.parent_scope=null,this.enclosed=[],this.cname=-1,this.nesting=n}),dn.DEFMETHOD("init_scope_vars",function(){ln.prototype.init_scope_vars.apply(this,arguments),this.uses_arguments=!1;var n=new Mn({name:"arguments",start:this.start,end:this.end}),e=new j(this,this.variables.size(),n);this.variables.set(n.name,e)}),fe.DEFMETHOD("reference",function(){var n=this.definition();n.references.push(this);for(var e=this.scope;e&&(l(e.enclosed,n),e!==n.scope);)e=e.parent_scope;this.frame=this.scope.nesting-n.scope.nesting}),ln.DEFMETHOD("find_variable",function(n){return n instanceof ne&&(n=n.name),this.variables.get(n)||this.parent_scope&&this.parent_scope.find_variable(n)}),ln.DEFMETHOD("def_function",function(n){this.functions.set(n.name,this.def_variable(n))}),ln.DEFMETHOD("def_variable",function(n){var e;return this.variables.has(n.name)?(e=this.variables.get(n.name),e.orig.push(n)):(e=new j(this,this.variables.size(),n),this.variables.set(n.name,e),e.global=!this.parent_scope),n.thedef=e}),ln.DEFMETHOD("next_mangled",function(n){var e=this.enclosed;n:for(;;){var t=Ve(++this.cname);if(C(t)&&!(n.except.indexOf(t)>=0)){for(var r=e.length;--r>=0;){var i=e[r],o=i.mangled_name||i.unmangleable(n)&&i.name;if(t==o)continue n}return t}}}),vn.DEFMETHOD("next_mangled",function(n,e){for(var t=e.orig[0]instanceof oe&&this.name&&this.name.definition();;){var r=dn.prototype.next_mangled.call(this,n,e);if(!t||t.mangled_name!=r)return r}}),ln.DEFMETHOD("references",function(n){return n instanceof ne&&(n=n.definition()),this.enclosed.indexOf(n)<0?null:n}),ne.DEFMETHOD("unmangleable",function(n){return this.definition().unmangleable(n)}),ee.DEFMETHOD("unmangleable",function(){return!0}),ce.DEFMETHOD("unmangleable",function(){return!1}),ne.DEFMETHOD("unreferenced",function(){return 0==this.definition().references.length&&!(this.scope.uses_eval||this.scope.uses_with)}),ne.DEFMETHOD("undeclared",function(){return this.definition().undeclared}),le.DEFMETHOD("undeclared",function(){return!1}),ce.DEFMETHOD("undeclared",function(){return!1}),ne.DEFMETHOD("definition",function(){return this.thedef}),ne.DEFMETHOD("global",function(){return this.definition().global}),On.DEFMETHOD("has_const_pragma",function(){var n=this.start&&this.start.comments_before,e=n&&n[n.length-1];return e&&/@const\b/.test(e.value)}),pn.DEFMETHOD("_default_mangler_options",function(n){return s(n,{except:[],eval:!1,
	sort:!1,toplevel:!1,screw_ie8:!0,keep_fnames:!1})}),pn.DEFMETHOD("mangle_names",function(n){n=this._default_mangler_options(n),n.except.push("arguments");var e=-1,t=[];n.cache&&this.globals.each(function(e){n.except.indexOf(e.name)<0&&t.push(e)});var r=new A(function(i,o){if(i instanceof tn){var a=e;return o(),e=a,!0}if(i instanceof ln){var u=(r.parent(),[]);return i.variables.each(function(e){n.except.indexOf(e.name)<0&&u.push(e)}),void t.push.apply(t,u)}if(i instanceof ce){var s;do s=Ve(++e);while(!C(s));return i.mangled_name=s,!0}if(n.screw_ie8&&i instanceof se)return void t.push(i.definition())});this.walk(r),t.forEach(function(e){e.mangle(n)}),n.cache&&(n.cache.cname=this.cname)}),pn.DEFMETHOD("compute_char_frequency",function(n){n=this._default_mangler_options(n);var e=new A(function(e){e instanceof de?Ve.consider(e.print_to_string()):e instanceof bn?Ve.consider("return"):e instanceof yn?Ve.consider("throw"):e instanceof En?Ve.consider("continue"):e instanceof wn?Ve.consider("break"):e instanceof J?Ve.consider("debugger"):e instanceof X?Ve.consider(e.value):e instanceof un?Ve.consider("while"):e instanceof an?Ve.consider("do while"):e instanceof Dn?(Ve.consider("if"),e.alternative&&Ve.consider("else")):e instanceof On?Ve.consider("var"):e instanceof qn?Ve.consider("const"):e instanceof dn?Ve.consider("function"):e instanceof sn?Ve.consider("for"):e instanceof cn?Ve.consider("for in"):e instanceof kn?Ve.consider("switch"):e instanceof Cn?Ve.consider("case"):e instanceof Fn?Ve.consider("default"):e instanceof fn?Ve.consider("with"):e instanceof Zn?Ve.consider("set"+e.key):e instanceof Qn?Ve.consider("get"+e.key):e instanceof Kn?Ve.consider(e.key):e instanceof Hn?Ve.consider("new"):e instanceof pe?Ve.consider("this"):e instanceof Bn?Ve.consider("try"):e instanceof Sn?Ve.consider("catch"):e instanceof Tn?Ve.consider("finally"):e instanceof ne&&e.unmangleable(n)?Ve.consider(e.name):e instanceof In||e instanceof Vn?Ve.consider(e.operator):e instanceof Pn&&Ve.consider(e.property)});this.walk(e),Ve.sort()});var Ve=function(){function n(){r=Object.create(null),t=i.split("").map(function(n){return n.charCodeAt(0)}),t.forEach(function(n){r[n]=0})}function e(n){var e="",r=54;n++;do n--,e+=String.fromCharCode(t[n%r]),n=Math.floor(n/r),r=64;while(n>0);return e}var t,r,i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";return e.consider=function(n){for(var e=n.length;--e>=0;){var t=n.charCodeAt(e);t in r&&++r[t]}},e.sort=function(){t=h(t,function(n,e){return E(n)&&!E(e)?1:E(e)&&!E(n)?-1:r[e]-r[n]})},e.reset=n,n(),e.get=function(){return t},e.freq=function(){return r},e}();pn.DEFMETHOD("scope_warnings",function(n){n=s(n,{undeclared:!1,unreferenced:!0,assign_to_global:!0,func_arguments:!0,nested_defuns:!0,eval:!0});var e=new A(function(t){if(n.undeclared&&t instanceof fe&&t.undeclared()&&W.warn("Undeclared symbol: {name} [{file}:{line},{col}]",{name:t.name,file:t.start.file,line:t.start.line,col:t.start.col}),n.assign_to_global){var r=null;t instanceof Wn&&t.left instanceof fe?r=t.left:t instanceof cn&&t.init instanceof fe&&(r=t.init),r&&(r.undeclared()||r.global()&&r.scope!==r.definition().scope)&&W.warn("{msg}: {name} [{file}:{line},{col}]",{msg:r.undeclared()?"Accidental global?":"Assignment to global",name:r.name,file:r.start.file,line:r.start.line,col:r.start.col})}n.eval&&t instanceof fe&&t.undeclared()&&"eval"==t.name&&W.warn("Eval is used [{file}:{line},{col}]",t.start),n.unreferenced&&(t instanceof te||t instanceof ce)&&!(t instanceof se)&&t.unreferenced()&&W.warn("{type} {name} is declared but not referenced [{file}:{line},{col}]",{type:t instanceof ce?"Label":"Symbol",name:t.name,file:t.start.file,line:t.start.line,col:t.start.col}),n.func_arguments&&t instanceof dn&&t.uses_arguments&&W.warn("arguments used in function {name} [{file}:{line},{col}]",{name:t.name?t.name.name:"anonymous",file:t.start.file,line:t.start.line,col:t.start.col}),n.nested_defuns&&t instanceof mn&&!(e.parent()instanceof ln)&&W.warn('Function {name} declared in nested statement "{type}" [{file}:{line},{col}]',{name:t.name.name,type:e.parent().TYPE,file:t.start.file,line:t.start.line,col:t.start.col})});this.walk(e)});var Ye=/^$|[;{][\s\n]*$/;!function(){function n(n,e){n.DEFMETHOD("_codegen",e)}function e(n,t){Array.isArray(n)?n.forEach(function(n){e(n,t)}):n.DEFMETHOD("needs_parens",t)}function t(n,e,t,r){var i=n.length-1;_=r,n.forEach(function(n,r){_!==!0||n instanceof X||n instanceof nn||n instanceof K&&n.body instanceof he||(_=!1),n instanceof nn||(t.indent(),n.print(t),r==i&&e||(t.newline(),e&&t.newline())),_===!0&&n instanceof K&&n.body instanceof he&&(_=!1)}),_=!1}function r(n,e,r){n.length>0?e.with_block(function(){t(n,!1,e,r)}):e.print("{}")}function i(n,e){if(e.option("bracketize"))return void d(n.body,e);if(!n.body)return e.force_semicolon();if(n.body instanceof an)return void d(n.body,e);for(var t=n.body;;)if(t instanceof Dn){if(!t.alternative)return void d(n.body,e);t=t.alternative}else{if(!(t instanceof en))break;t=t.body}u(n.body,e)}function o(n,e,t){if(t)try{n.walk(new A(function(n){if(n instanceof Vn&&"in"==n.operator)throw e})),n.print(e)}catch(t){if(t!==e)throw t;n.print(e,!0)}else n.print(e)}function a(n){return[92,47,46,43,42,63,40,41,91,93,123,125,36,94,58,124,33,10,13,0,65279,8232,8233].indexOf(n)<0}function u(n,e){e.option("bracketize")?!n||n instanceof nn?e.print("{}"):n instanceof Q?n.print(e):e.with_block(function(){e.indent(),n.print(e),e.newline()}):!n||n instanceof nn?e.force_semicolon():n.print(e)}function s(n){for(var e=n.stack(),t=e.length,r=e[--t],i=e[--t];t>0;){if(i instanceof G&&i.body===r)return!0;if(!(i instanceof Nn&&i.car===r||i instanceof zn&&i.expression===r&&!(i instanceof Hn)||i instanceof Pn&&i.expression===r||i instanceof Rn&&i.expression===r||i instanceof Yn&&i.condition===r||i instanceof Vn&&i.left===r||i instanceof Ln&&i.expression===r))return!1;r=i,i=e[--t]}}function c(n,e){return n.args.length>0||e.option("beautify")}function l(n){for(var e=n[0],t=e.length,r=1;r<n.length;++r)n[r].length<t&&(e=n[r],t=e.length);return e}function p(n){var e,t=n.toString(10),r=[t.replace(/^0\./,".").replace("e+","e")];return Math.floor(n)===n?(n>=0?r.push("0x"+n.toString(16).toLowerCase(),"0"+n.toString(8)):r.push("-0x"+(-n).toString(16).toLowerCase(),"-0"+(-n).toString(8)),(e=/^(.*?)(0+)$/.exec(n))&&r.push(e[1]+"e"+e[2].length)):(e=/^0?\.(0+)(.*)$/.exec(n))&&r.push(e[2]+"e-"+(e[1].length+e[2].length),t.substr(t.indexOf("."))),l(r)}function d(n,e){return n instanceof Q?void n.print(e):void e.with_block(function(){e.indent(),n.print(e),e.newline()})}function h(n,e){n.DEFMETHOD("add_source_map",function(n){e(this,n)})}function v(n,e){e.add_mapping(n.start)}var m=!1,_=!1;W.DEFMETHOD("print",function(n,e){function t(){r.add_comments(n),r.add_source_map(n),i(r,n)}var r=this,i=r._codegen,o=m;r instanceof X&&"use asm"==r.value&&n.parent()instanceof ln&&(m=!0),n.push_node(r),e||r.needs_parens(n)?n.with_parens(t):t(),n.pop_node(),r instanceof ln&&(m=o)}),W.DEFMETHOD("print_to_string",function(n){var e=P(n);return n||(e._readonly=!0),this.print(e),e.get()}),W.DEFMETHOD("add_comments",function(n){if(!n._readonly){var e=n.option("comments"),t=this,r=t.start;if(r&&!r._comments_dumped){r._comments_dumped=!0;var i=r.comments_before||[];t instanceof gn&&t.value&&t.value.walk(new A(function(n){if(n.start&&n.start.comments_before&&(i=i.concat(n.start.comments_before),n.start.comments_before=[]),n instanceof vn||n instanceof Gn||n instanceof Jn)return!0})),e?e.test?i=i.filter(function(n){return"comment5"==n.type||e.test(n.value)}):"function"==typeof e&&(i=i.filter(function(n){return"comment5"==n.type||e(t,n)})):i=i.filter(function(n){return"comment5"==n.type}),!n.option("beautify")&&i.length>0&&/comment[134]/.test(i[0].type)&&0!==n.col()&&i[0].nlb&&n.print("\n"),i.forEach(function(e){/comment[134]/.test(e.type)?(n.print("//"+e.value+"\n"),n.indent()):"comment2"==e.type?(n.print("/*"+e.value+"*/"),r.nlb?(n.print("\n"),n.indent()):n.space()):0===n.pos()&&"comment5"==e.type&&n.option("shebang")&&(n.print("#!"+e.value+"\n"),n.indent())})}}}),e(W,function(){return!1}),e(vn,function(n){return s(n)}),e(Jn,function(n){return s(n)}),e([In,ye],function(n){var e=n.parent();return e instanceof jn&&e.expression===this||e instanceof Hn}),e(Nn,function(n){var e=n.parent();return e instanceof zn||e instanceof In||e instanceof Vn||e instanceof Mn||e instanceof jn||e instanceof Gn||e instanceof Xn||e instanceof Yn}),e(Vn,function(n){var e=n.parent();if(e instanceof zn&&e.expression===this)return!0;if(e instanceof In)return!0;if(e instanceof jn&&e.expression===this)return!0;if(e instanceof Vn){var t=e.operator,r=Ue[t],i=this.operator,o=Ue[i];if(r>o||r==o&&this===e.right)return!0}}),e(jn,function(n){var e=n.parent();if(e instanceof Hn&&e.expression===this)try{this.walk(new A(function(n){if(n instanceof zn)throw e}))}catch(n){if(n!==e)throw n;return!0}}),e(zn,function(n){var e,t=n.parent();return t instanceof Hn&&t.expression===this||this.expression instanceof vn&&t instanceof jn&&t.expression===this&&(e=n.parent(1))instanceof Wn&&e.left===t}),e(Hn,function(n){var e=n.parent();if(!c(this,n)&&(e instanceof jn||e instanceof zn&&e.expression===this))return!0}),e(ve,function(n){var e=n.parent();if(e instanceof jn&&e.expression===this){var t=this.getValue();if(t<0||/^0/.test(p(t)))return!0}}),e([Wn,Yn],function(n){var e=n.parent();return e instanceof In||(e instanceof Vn&&!(e instanceof Wn)||(e instanceof zn&&e.expression===this||(e instanceof Yn&&e.condition===this||(e instanceof jn&&e.expression===this||void 0))))}),n(X,function(n,e){e.print_string(n.value,n.quote),e.semicolon()}),n(J,function(n,e){e.print("debugger"),e.semicolon()}),en.DEFMETHOD("_do_print_body",function(n){u(this.body,n)}),n(G,function(n,e){n.body.print(e),e.semicolon()}),n(pn,function(n,e){t(n.body,!0,e,!0),e.print("")}),n(tn,function(n,e){n.label.print(e),e.colon(),n.body.print(e)}),n(K,function(n,e){n.body.print(e),e.semicolon()}),n(Q,function(n,e){r(n.body,e)}),n(nn,function(n,e){e.semicolon()}),n(an,function(n,e){e.print("do"),e.space(),n._do_print_body(e),e.space(),e.print("while"),e.space(),e.with_parens(function(){n.condition.print(e)}),e.semicolon()}),n(un,function(n,e){e.print("while"),e.space(),e.with_parens(function(){n.condition.print(e)}),e.space(),n._do_print_body(e)}),n(sn,function(n,e){e.print("for"),e.space(),e.with_parens(function(){!n.init||n.init instanceof nn?e.print(";"):(n.init instanceof $n?n.init.print(e):o(n.init,e,!0),e.print(";"),e.space()),n.condition?(n.condition.print(e),e.print(";"),e.space()):e.print(";"),n.step&&n.step.print(e)}),e.space(),n._do_print_body(e)}),n(cn,function(n,e){e.print("for"),e.space(),e.with_parens(function(){n.init.print(e),e.space(),e.print("in"),e.space(),n.object.print(e)}),e.space(),n._do_print_body(e)}),n(fn,function(n,e){e.print("with"),e.space(),e.with_parens(function(){n.expression.print(e)}),e.space(),n._do_print_body(e)}),dn.DEFMETHOD("_do_print",function(n,e){var t=this;e||n.print("function"),t.name&&(n.space(),t.name.print(n)),n.with_parens(function(){t.argnames.forEach(function(e,t){t&&n.comma(),e.print(n)})}),n.space(),r(t.body,n,!0)}),n(dn,function(n,e){n._do_print(e)}),gn.DEFMETHOD("_do_print",function(n,e){n.print(e),this.value&&(n.space(),this.value.print(n)),n.semicolon()}),n(bn,function(n,e){n._do_print(e,"return")}),n(yn,function(n,e){n._do_print(e,"throw")}),An.DEFMETHOD("_do_print",function(n,e){n.print(e),this.label&&(n.space(),this.label.print(n)),n.semicolon()}),n(wn,function(n,e){n._do_print(e,"break")}),n(En,function(n,e){n._do_print(e,"continue")}),n(Dn,function(n,e){e.print("if"),e.space(),e.with_parens(function(){n.condition.print(e)}),e.space(),n.alternative?(i(n,e),e.space(),e.print("else"),e.space(),u(n.alternative,e)):n._do_print_body(e)}),n(kn,function(n,e){e.print("switch"),e.space(),e.with_parens(function(){n.expression.print(e)}),e.space(),n.body.length>0?e.with_block(function(){n.body.forEach(function(n,t){t&&e.newline(),e.indent(!0),n.print(e)})}):e.print("{}")}),xn.DEFMETHOD("_do_print_body",function(n){this.body.length>0&&(n.newline(),this.body.forEach(function(e){n.indent(),e.print(n),n.newline()}))}),n(Fn,function(n,e){e.print("default:"),n._do_print_body(e)}),n(Cn,function(n,e){e.print("case"),e.space(),n.expression.print(e),e.print(":"),n._do_print_body(e)}),n(Bn,function(n,e){e.print("try"),e.space(),r(n.body,e),n.bcatch&&(e.space(),n.bcatch.print(e)),n.bfinally&&(e.space(),n.bfinally.print(e))}),n(Sn,function(n,e){e.print("catch"),e.space(),e.with_parens(function(){n.argname.print(e)}),e.space(),r(n.body,e)}),n(Tn,function(n,e){e.print("finally"),e.space(),r(n.body,e)}),$n.DEFMETHOD("_do_print",function(n,e){n.print(e),n.space(),this.definitions.forEach(function(e,t){t&&n.comma(),e.print(n)});var t=n.parent(),r=t instanceof sn||t instanceof cn,i=r&&t.init===this;i||n.semicolon()}),n(On,function(n,e){n._do_print(e,"var")}),n(qn,function(n,e){n._do_print(e,"const")}),n(Mn,function(n,e){if(n.name.print(e),n.value){e.space(),e.print("="),e.space();var t=e.parent(1),r=t instanceof sn||t instanceof cn;o(n.value,e,r)}}),n(zn,function(n,e){n.expression.print(e),n instanceof Hn&&!c(n,e)||e.with_parens(function(){n.args.forEach(function(n,t){t&&e.comma(),n.print(e)})})}),n(Hn,function(n,e){e.print("new"),e.space(),zn.prototype._codegen(n,e)}),Nn.DEFMETHOD("_do_print",function(n){this.car.print(n),this.cdr&&(n.comma(),n.should_break()&&(n.newline(),n.indent()),this.cdr.print(n))}),n(Nn,function(n,e){n._do_print(e)}),n(Pn,function(n,e){var t=n.expression;t.print(e),t instanceof ve&&t.getValue()>=0&&(/[xa-f.)]/i.test(e.last())||e.print(".")),e.print("."),e.add_mapping(n.end),e.print_name(n.property)}),n(Rn,function(n,e){n.expression.print(e),e.print("["),n.property.print(e),e.print("]")}),n(Un,function(n,e){var t=n.operator;e.print(t),(/^[a-z]/i.test(t)||/[+-]$/.test(t)&&n.expression instanceof Un&&/^[+-]/.test(n.expression.operator))&&e.space(),n.expression.print(e)}),n(Ln,function(n,e){n.expression.print(e),e.print(n.operator)}),n(Vn,function(n,e){var t=n.operator;n.left.print(e),">"==t[0]&&n.left instanceof Ln&&"--"==n.left.operator?e.print(" "):e.space(),e.print(t),("<"==t||"<<"==t)&&n.right instanceof Un&&"!"==n.right.operator&&n.right.expression instanceof Un&&"--"==n.right.expression.operator?e.print(" "):e.space(),n.right.print(e)}),n(Yn,function(n,e){n.condition.print(e),e.space(),e.print("?"),e.space(),n.consequent.print(e),e.space(),e.colon(),n.alternative.print(e)}),n(Gn,function(n,e){e.with_square(function(){var t=n.elements,r=t.length;r>0&&e.space(),t.forEach(function(n,t){t&&e.comma(),n.print(e),t===r-1&&n instanceof Ae&&e.comma()}),r>0&&e.space()})}),n(Jn,function(n,e){n.properties.length>0?e.with_block(function(){n.properties.forEach(function(n,t){t&&(e.print(","),e.newline()),e.indent(),n.print(e)}),e.newline()}):e.print("{}")}),n(Kn,function(n,e){var t=n.key,r=n.quote;e.option("quote_keys")?e.print_string(t+""):("number"==typeof t||!e.option("beautify")&&+t+""==t)&&parseFloat(t)>=0?e.print(p(t)):(Ce(t)?e.option("screw_ie8"):T(t))?r&&e.option("keep_quoted_props")?e.print_string(t,r):e.print_name(t):e.print_string(t,r),e.colon(),n.value.print(e)}),n(Zn,function(n,e){e.print("set"),e.space(),n.key.print(e),n.value._do_print(e,!0)}),n(Qn,function(n,e){e.print("get"),e.space(),n.key.print(e),n.value._do_print(e,!0)}),n(ne,function(n,e){var t=n.definition();e.print_name(t?t.mangled_name||t.name:n.name)}),n(ye,function(n,e){e.print("void 0")}),n(Ae,f),n(we,function(n,e){e.print("Infinity")}),n(be,function(n,e){e.print("NaN")}),n(pe,function(n,e){e.print("this")}),n(de,function(n,e){e.print(n.getValue())}),n(he,function(n,e){e.print_string(n.getValue(),n.quote,_)}),n(ve,function(n,e){m&&n.start&&null!=n.start.raw?e.print(n.start.raw):e.print(p(n.getValue()))}),n(me,function(n,e){var t=n.getValue().toString();e.option("ascii_only")?t=e.to_ascii(t):e.option("unescape_regexps")&&(t=t.split("\\\\").map(function(n){return n.replace(/\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}/g,function(n){var e=parseInt(n.substr(2),16);return a(e)?String.fromCharCode(e):n})}).join("\\\\")),e.print(t);var r=e.parent();r instanceof Vn&&/^in/.test(r.operator)&&r.left===n&&e.print(" ")}),h(W,f),h(X,v),h(J,v),h(ne,v),h(_n,v),h(en,v),h(tn,f),h(dn,v),h(kn,v),h(xn,v),h(Q,v),h(pn,f),h(Hn,v),h(Bn,v),h(Sn,v),h(Tn,v),h($n,v),h(de,v),h(Zn,function(n,e){e.add_mapping(n.start,n.key.name)}),h(Qn,function(n,e){e.add_mapping(n.start,n.key.name)}),h(Xn,function(n,e){e.add_mapping(n.start,n.key)})}(),R.prototype=new N,c(R.prototype,{option:function(n){return this.options[n]},compress:function(n){for(var e=+this.options.passes||1,t=0;t<e&&t<3;++t)t>0&&n.clear_opt_flags(),n=n.transform(this);return n},warn:function(n,e){if(this.options.warnings){var t=p(n,e);t in this.warnings_produced||(this.warnings_produced[t]=!0,W.warn.apply(W,arguments))}},clear_warnings:function(){this.warnings_produced={}},before:function(n,e,t){if(n._squeezed)return n;var r=!1;return n instanceof ln&&(n=n.hoist_declarations(this),r=!0),e(n,this),n=n.optimize(this),r&&n instanceof ln&&(n.drop_unused(this),e(n,this)),n._squeezed=!0,n}}),function(){function n(n,e){n.DEFMETHOD("optimize",function(n){var t=this;if(t._optimized)return t;if(n.has_directive("use asm"))return t;var r=e(t,n);return r._optimized=!0,r===t?r:r.transform(n)})}function e(n,e,t){return t||(t={}),e&&(t.start||(t.start=e.start),t.end||(t.end=e.end)),new n(t)}function t(n,t,r){if(t instanceof W)return t.transform(n);switch(typeof t){case"string":return e(he,r,{value:t}).optimize(n);case"number":return isNaN(t)?e(be,r):1/t<0?e(Un,r,{operator:"-",expression:e(ve,r,{value:-t})}):e(ve,r,{value:t}).optimize(n);case"boolean":return e(t?ke:De,r).optimize(n);case"undefined":return e(ye,r).optimize(n);default:if(null===t)return e(ge,r,{value:null}).optimize(n);if(t instanceof RegExp)return e(me,r,{value:t}).optimize(n);throw new Error(p("Can't handle constant of type: {type}",{type:typeof t}))}}function r(n,t,r){return n instanceof zn&&n.expression===t&&(r instanceof jn||r instanceof fe&&"eval"===r.name)?e(Nn,t,{car:e(ve,t,{value:0}),cdr:r}):r}function a(n){if(null===n)return[];if(n instanceof Q)return n.body;if(n instanceof nn)return[];if(n instanceof G)return[n];throw new Error("Can't convert thing to statement array")}function u(n){return null===n||(n instanceof nn||n instanceof Q&&0==n.body.length)}function s(n){return n instanceof kn?n:(n instanceof sn||n instanceof cn||n instanceof on)&&n.body instanceof Q?n.body:n}function c(n,t){function i(n,t){function o(n,e){return n instanceof fe&&(e instanceof Wn&&n===e.left||e instanceof In&&e.expression===n&&("++"==e.operator||"--"==e.operator))}function a(i,a,c){if(o(i,a))return i;var p=r(a,i,y.value);return y.value=null,d.splice(g,1),0===d.length&&(n[l]=e(nn,u),s=!0),f.clear_opt_flags(),t.warn("Replacing "+(c?"constant":"variable")+" "+w+" [{file}:{line},{col}]",i.start),b=!0,p}for(var u=t.self(),s=!1,c=n.length;--c>=0;){var f=n[c];if(!(f instanceof $n)){if([f,f.body,f.alternative,f.bcatch,f.bfinally].forEach(function(n){n&&n.body&&i(n.body,t)}),c<=0)break;var l=c-1,p=n[l];if(p instanceof $n){var d=p.definitions;if(null!=d)for(var h={},v=!1,m=!1,_={},g=d.length;--g>=0;){var y=d[g];if(null==y.value)break;var w=y.name.name;if(!w||!w.length)break;if(w in h)break;h[w]=!0;var E=u.find_variable&&u.find_variable(w);if(E&&E.references&&1===E.references.length&&"arguments"!=w){var D=E.references[0];if(D.scope.uses_eval||D.scope.uses_with)break;if(y.value instanceof me||!y.value.is_constant(t)){if(!(v|=m))if(D.scope===u){var k=new A(function(n){n instanceof fe&&o(n,k.parent())&&(_[n.name]=m=!0)});y.value.walk(k);var x=!1,F=new N(function(n){if(x)return n;var e=F.parent();return n instanceof dn||n instanceof Bn||n instanceof fn||n instanceof Cn||n instanceof rn||e instanceof Dn&&n!==e.condition||e instanceof Yn&&n!==e.condition||e instanceof Vn&&("&&"==e.operator||"||"==e.operator)&&n===e.right||e instanceof kn&&n!==e.expression?(v=x=!0,n):void 0},function(n){return x?n:n===D?(x=!0,a(n,F.parent(),!1)):(v|=n.has_side_effects(t))?(x=!0,n):m&&n instanceof fe&&n.name in _?(v=!0,x=!0,n):void 0});f.transform(F)}else v|=y.value.has_side_effects(t)}else{var C=new N(function(n){if(n===D)return a(n,C.parent(),!0)});f.transform(C)}}else v=!0}}}}if(s)for(var B=n.length;--B>=0;)n.length>1&&n[B]instanceof nn&&n.splice(B,1);return n}function o(n){function r(n){return/@ngInject/.test(n.value)}function i(n){return n.argnames.map(function(n){return e(he,n,{value:n.name})})}function o(n,t){return e(Gn,n,{elements:t})}function a(n,t){return e(K,n,{body:e(Wn,n,{operator:"=",left:e(Pn,t,{expression:e(fe,t,t),property:"$inject"}),right:o(n,i(n))})})}function u(n){n&&n.args&&(n.args.forEach(function(n,e,t){var a=n.start.comments_before;n instanceof dn&&a.length&&r(a[0])&&(t[e]=o(n,i(n).concat(n)))}),n.expression&&n.expression.expression&&u(n.expression.expression))}return n.reduce(function(n,e){if(n.push(e),e.body&&e.body.args)u(e.body);else{var i=e.start,o=i.comments_before;if(o&&o.length>0){var s=o.pop();r(s)&&(e instanceof mn?n.push(a(e,e.name)):e instanceof $n?e.definitions.forEach(function(e){e.value&&e.value instanceof dn&&n.push(a(e.value,e.name))}):t.warn("Unknown statement marked with @ngInject [{file}:{line},{col}]",i))}}return n},[])}function u(n){var e=[];return n.reduce(function(n,t){return t instanceof Q?(b=!0,n.push.apply(n,u(t.body))):t instanceof nn?b=!0:t instanceof X?e.indexOf(t.value)<0?(n.push(t),e.push(t.value)):b=!0:n.push(t),n},[])}function c(n,t){function r(n){for(var e=0,t=n.length;--t>=0;){var r=n[t];if(r instanceof Dn&&r.body instanceof bn&&++e>1)return!0}return!1}var i=t.self(),o=r(n),u=i instanceof dn,c=[];n:for(var l=n.length;--l>=0;){var p=n[l];switch(!0){case u&&p instanceof bn&&!p.value&&0==c.length:b=!0;continue n;case p instanceof Dn:if(p.body instanceof bn){if((u&&0==c.length||c[0]instanceof bn&&!c[0].value)&&!p.body.value&&!p.alternative){b=!0;var h=e(K,p.condition,{body:p.condition});c.unshift(h);continue n}if(c[0]instanceof bn&&p.body.value&&c[0].value&&!p.alternative){b=!0,p=p.clone(),p.alternative=c[0],c[0]=p.transform(t);continue n}if(o&&(0==c.length||c[0]instanceof bn)&&p.body.value&&!p.alternative&&u){b=!0,p=p.clone(),p.alternative=c[0]||e(bn,p,{value:e(ye,p)}),c[0]=p.transform(t);continue n}if(!p.body.value&&u){b=!0,p=p.clone(),p.condition=p.condition.negate(t);var v=a(p.alternative).concat(c),m=f(v);p.body=e(Q,p,{body:v}),p.alternative=null,c=m.concat([p.transform(t)]);continue n}if(t.option("sequences")&&1==c.length&&u&&c[0]instanceof K&&(!p.alternative||p.alternative instanceof K)){b=!0,c.push(e(bn,c[0],{value:e(ye,c[0])}).transform(t)),c=a(p.alternative).concat(c),c.unshift(p);continue n}}var _=y(p.body),g=_ instanceof An?t.loopcontrol_target(_.label):null;if(_&&(_ instanceof bn&&!_.value&&u||_ instanceof En&&i===s(g)||_ instanceof wn&&g instanceof Q&&i===g)){_.label&&d(_.label.thedef.references,_),b=!0;var v=a(p.body).slice(0,-1);p=p.clone(),p.condition=p.condition.negate(t),p.body=e(Q,p,{body:a(p.alternative).concat(c)}),p.alternative=e(Q,p,{body:v}),c=[p.transform(t)];continue n}var _=y(p.alternative),g=_ instanceof An?t.loopcontrol_target(_.label):null;if(_&&(_ instanceof bn&&!_.value&&u||_ instanceof En&&i===s(g)||_ instanceof wn&&g instanceof Q&&i===g)){_.label&&d(_.label.thedef.references,_),b=!0,p=p.clone(),p.body=e(Q,p.body,{body:a(p.body).concat(c)}),p.alternative=e(Q,p.alternative,{body:a(p.alternative).slice(0,-1)}),c=[p.transform(t)];continue n}c.unshift(p);break;default:c.unshift(p)}}return c}function p(n,e){var t=!1,r=n.length,i=e.self();return n=n.reduce(function(n,r){if(t)l(e,r,n);else{if(r instanceof An){var o=e.loopcontrol_target(r.label);r instanceof wn&&o instanceof Q&&s(o)===i||r instanceof En&&s(o)===i?r.label&&d(r.label.thedef.references,r):n.push(r)}else n.push(r);y(r)&&(t=!0)}return n},[]),b=n.length!=r,n}function h(n,t){function r(){i=Nn.from_array(i),i&&o.push(e(K,i,{body:i})),i=[]}if(n.length<2)return n;var i=[],o=[];return n.forEach(function(n){n instanceof K&&v(i)<t.sequences_limit?i.push(n.body):(r(),o.push(n))}),r(),o=m(o,t),b=o.length!=n.length,o}function v(n){for(var e=0,t=0;t<n.length;++t){var r=n[t];r instanceof Nn?e+=r.len():e++}return e}function m(n,t){function r(n){i.pop();var e=o.body;return e instanceof Nn?e.add(n):e=Nn.cons(e,n),e.transform(t)}var i=[],o=null;return n.forEach(function(n){if(o)if(n instanceof sn){var t={};try{o.body.walk(new A(function(n){if(n instanceof Vn&&"in"==n.operator)throw t})),!n.init||n.init instanceof $n?n.init||(n.init=o.body,i.pop()):n.init=r(n.init)}catch(n){if(n!==t)throw n}}else n instanceof Dn?n.condition=r(n.condition):n instanceof fn?n.expression=r(n.expression):n instanceof gn&&n.value?n.value=r(n.value):n instanceof gn?n.value=r(e(ye,n)):n instanceof kn&&(n.expression=r(n.expression));i.push(n),o=n instanceof K?n:null}),i}function _(n,e){var t=null;return n.reduce(function(n,e){return e instanceof $n&&t&&t.TYPE==e.TYPE?(t.definitions=t.definitions.concat(e.definitions),b=!0):e instanceof sn&&t instanceof $n&&(!e.init||e.init.TYPE==t.TYPE)?(b=!0,n.pop(),e.init?e.init.definitions=t.definitions.concat(e.init.definitions):e.init=t,n.push(e),t=e):(t=e,n.push(e)),n},[])}function g(n,t){n.forEach(function(n){n instanceof K&&(n.body=function n(t){return t.transform(new N(function(t){if(t instanceof Hn)return t;if(t instanceof zn&&t.expression instanceof vn)return e(Un,t,{operator:"!",expression:t});if(t instanceof zn)t.expression=n(t.expression);else if(t instanceof Nn)t.car=n(t.car);else if(t instanceof Yn){var r=n(t.condition);if(r!==t.condition){t.condition=r;var i=t.consequent;t.consequent=t.alternative,t.alternative=i}}return t}))}(n.body))})}var b,w=10;do b=!1,t.option("angular")&&(n=o(n)),n=u(n),t.option("dead_code")&&(n=p(n,t)),t.option("if_return")&&(n=c(n,t)),t.sequences_limit>0&&(n=h(n,t)),t.option("join_vars")&&(n=_(n,t)),t.option("collapse_vars")&&(n=i(n,t));while(b&&w-- >0);return t.option("negate_iife")&&g(n,t),n}function f(n){for(var e=[],t=n.length-1;t>=0;--t){var r=n[t];r instanceof mn&&(n.splice(t,1),e.unshift(r))}return e}function l(n,e,t){e instanceof mn||n.warn("Dropping unreachable code [{file}:{line},{col}]",e.start),e.walk(new A(function(e){return e instanceof $n?(n.warn("Declarations in unreachable code! [{file}:{line},{col}]",e.start),e.remove_initializers(),t.push(e),!0):e instanceof mn?(t.push(e),!0):e instanceof ln||void 0}))}function b(n,e){return n.print_to_string().length>e.print_to_string().length?e:n}function y(n){return n&&n.aborts()}function w(n,t){function r(r){r=a(r),n.body instanceof Q?(n.body=n.body.clone(),n.body.body=r.concat(n.body.body.slice(1)),n.body=n.body.transform(t)):n.body=e(Q,n.body,{body:r}).transform(t),w(n,t)}var i=n.body instanceof Q?n.body.body[0]:n.body;i instanceof Dn&&(i.body instanceof wn&&t.loopcontrol_target(i.body.label)===n?(n.condition?n.condition=e(Vn,n.condition,{left:n.condition,operator:"&&",right:i.condition.negate(t)}):n.condition=i.condition.negate(t),r(i.alternative)):i.alternative instanceof wn&&t.loopcontrol_target(i.alternative.label)===n&&(n.condition?n.condition=e(Vn,n.condition,{left:n.condition,operator:"&&",right:i.condition}):n.condition=i.condition,r(i.body)))}function E(n,e){var t=e.option("pure_getters");e.options.pure_getters=!1;var r=n.has_side_effects(e);return e.options.pure_getters=t,r}function D(n,t){return t.option("booleans")&&t.in_boolean_context()&&!n.has_side_effects(t)?e(ke,n):n}n(W,function(n,e){return n}),W.DEFMETHOD("equivalent_to",function(n){return this.print_to_string()==n.print_to_string()}),W.DEFMETHOD("clear_opt_flags",function(){this.walk(new A(function(n){n instanceof X||n instanceof de||(n._squeezed=!1,n._optimized=!1)}))}),function(n){var e=["!","delete"],t=["in","instanceof","==","!=","===","!==","<","<=",">=",">"];n(W,function(){return!1}),n(Un,function(){return i(this.operator,e)}),n(Vn,function(){return i(this.operator,t)||("&&"==this.operator||"||"==this.operator)&&this.left.is_boolean()&&this.right.is_boolean()}),n(Yn,function(){return this.consequent.is_boolean()&&this.alternative.is_boolean()}),n(Wn,function(){return"="==this.operator&&this.right.is_boolean()}),n(Nn,function(){return this.cdr.is_boolean()}),n(ke,function(){return!0}),n(De,function(){return!0})}(function(n,e){n.DEFMETHOD("is_boolean",e)}),function(n){n(W,function(){return!1}),n(he,function(){return!0}),n(Un,function(){return"typeof"==this.operator}),n(Vn,function(n){return"+"==this.operator&&(this.left.is_string(n)||this.right.is_string(n))}),n(Wn,function(n){return("="==this.operator||"+="==this.operator)&&this.right.is_string(n)}),n(Nn,function(n){return this.cdr.is_string(n)}),n(Yn,function(n){return this.consequent.is_string(n)&&this.alternative.is_string(n)}),n(zn,function(n){return n.option("unsafe")&&this.expression instanceof fe&&"String"==this.expression.name&&this.expression.undeclared()})}(function(n,e){n.DEFMETHOD("is_string",e)}),function(n){function e(n,e){if(!e)throw new Error("Compressor must be passed");return n._eval(e)}W.DEFMETHOD("evaluate",function(e){if(!e.option("evaluate"))return[this];try{var r=this._eval(e);return[b(t(e,r,this),this),r]}catch(e){if(e!==n)throw e;return[this]}}),W.DEFMETHOD("is_constant",function(n){return this instanceof de||this instanceof Un&&"!"==this.operator&&this.expression instanceof de||this.evaluate(n).length>1}),W.DEFMETHOD("constant_value",function(n){if(this instanceof de)return this.value;if(this instanceof Un&&"!"==this.operator&&this.expression instanceof de)return!this.expression.value;var e=this.evaluate(n);return e.length>1?e[1]:void 0}),n(G,function(){throw new Error(p("Cannot evaluate a statement [{file}:{line},{col}]",this.start))}),n(vn,function(){throw n}),n(W,function(){throw n}),n(de,function(){return this.getValue()}),n(Un,function(t){var r=this.expression;switch(this.operator){case"!":return!e(r,t);case"typeof":if(r instanceof vn)return"function";if(r=e(r,t),r instanceof RegExp)throw n;return typeof r;case"void":return void e(r,t);case"~":return~e(r,t);case"-":return-e(r,t);case"+":return+e(r,t)}throw n}),n(Vn,function(t){var r,i=this.left,o=this.right;switch(this.operator){case"&&":r=e(i,t)&&e(o,t);break;case"||":r=e(i,t)||e(o,t);break;case"|":r=e(i,t)|e(o,t);break;case"&":r=e(i,t)&e(o,t);break;case"^":r=e(i,t)^e(o,t);break;case"+":r=e(i,t)+e(o,t);break;case"*":r=e(i,t)*e(o,t);break;case"/":r=e(i,t)/e(o,t);break;case"%":r=e(i,t)%e(o,t);break;case"-":r=e(i,t)-e(o,t);break;case"<<":r=e(i,t)<<e(o,t);break;case">>":r=e(i,t)>>e(o,t);break;case">>>":r=e(i,t)>>>e(o,t);break;case"==":r=e(i,t)==e(o,t);break;case"===":r=e(i,t)===e(o,t);break;case"!=":r=e(i,t)!=e(o,t);break;case"!==":r=e(i,t)!==e(o,t);break;case"<":r=e(i,t)<e(o,t);break;case"<=":r=e(i,t)<=e(o,t);break;case">":r=e(i,t)>e(o,t);break;case">=":r=e(i,t)>=e(o,t);break;default:throw n}if(isNaN(r)&&t.find_parent(fn))throw n;return r}),n(Yn,function(n){return e(this.condition,n)?e(this.consequent,n):e(this.alternative,n)}),n(fe,function(t){if(this._evaluating)throw n;this._evaluating=!0;try{var r=this.definition();if(r&&r.constant&&r.init)return e(r.init,t)}finally{this._evaluating=!1}throw n}),n(Pn,function(t){if(t.option("unsafe")&&"length"==this.property){var r=e(this.expression,t);if("string"==typeof r)return r.length}throw n})}(function(n,e){n.DEFMETHOD("_eval",e)}),function(n){function t(n){return e(Un,n,{operator:"!",expression:n})}n(W,function(){return t(this)}),n(G,function(){throw new Error("Cannot negate a statement")}),n(vn,function(){return t(this)}),n(Un,function(){return"!"==this.operator?this.expression:t(this)}),n(Nn,function(n){var e=this.clone();return e.cdr=e.cdr.negate(n),e}),n(Yn,function(n){var e=this.clone();return e.consequent=e.consequent.negate(n),e.alternative=e.alternative.negate(n),b(t(this),e)}),n(Vn,function(n){var e=this.clone(),r=this.operator;if(n.option("unsafe_comps"))switch(r){case"<=":return e.operator=">",e;case"<":return e.operator=">=",e;case">=":return e.operator="<",e;case">":
	return e.operator="<=",e}switch(r){case"==":return e.operator="!=",e;case"!=":return e.operator="==",e;case"===":return e.operator="!==",e;case"!==":return e.operator="===",e;case"&&":return e.operator="||",e.left=e.left.negate(n),e.right=e.right.negate(n),b(t(this),e);case"||":return e.operator="&&",e.left=e.left.negate(n),e.right=e.right.negate(n),b(t(this),e)}return t(this)})}(function(n,e){n.DEFMETHOD("negate",function(n){return e.call(this,n)})}),function(n){n(W,function(n){return!0}),n(nn,function(n){return!1}),n(de,function(n){return!1}),n(pe,function(n){return!1}),n(zn,function(n){var e=n.option("pure_funcs");return!e||("function"==typeof e?e(this):e.indexOf(this.expression.print_to_string())<0)}),n(Z,function(n){for(var e=this.body.length;--e>=0;)if(this.body[e].has_side_effects(n))return!0;return!1}),n(K,function(n){return this.body.has_side_effects(n)}),n(mn,function(n){return!0}),n(vn,function(n){return!1}),n(Vn,function(n){return this.left.has_side_effects(n)||this.right.has_side_effects(n)}),n(Wn,function(n){return!0}),n(Yn,function(n){return this.condition.has_side_effects(n)||this.consequent.has_side_effects(n)||this.alternative.has_side_effects(n)}),n(In,function(n){return"delete"==this.operator||"++"==this.operator||"--"==this.operator||this.expression.has_side_effects(n)}),n(fe,function(n){return this.global()&&this.undeclared()}),n(Jn,function(n){for(var e=this.properties.length;--e>=0;)if(this.properties[e].has_side_effects(n))return!0;return!1}),n(Xn,function(n){return this.value.has_side_effects(n)}),n(Gn,function(n){for(var e=this.elements.length;--e>=0;)if(this.elements[e].has_side_effects(n))return!0;return!1}),n(Pn,function(n){return!n.option("pure_getters")||this.expression.has_side_effects(n)}),n(Rn,function(n){return!n.option("pure_getters")||(this.expression.has_side_effects(n)||this.property.has_side_effects(n))}),n(jn,function(n){return!n.option("pure_getters")}),n(Nn,function(n){return this.car.has_side_effects(n)||this.cdr.has_side_effects(n)})}(function(n,e){n.DEFMETHOD("has_side_effects",e)}),function(n){function e(){var n=this.body.length;return n>0&&y(this.body[n-1])}n(G,function(){return null}),n(_n,function(){return this}),n(Q,e),n(xn,e),n(Dn,function(){return this.alternative&&y(this.body)&&y(this.alternative)&&this})}(function(n,e){n.DEFMETHOD("aborts",e)}),n(X,function(n,t){return"up"===t.has_directive(n.value)?e(nn,n):n}),n(J,function(n,t){return t.option("drop_debugger")?e(nn,n):n}),n(tn,function(n,t){return n.body instanceof wn&&t.loopcontrol_target(n.body.label)===n.body?e(nn,n):0==n.label.references.length?n.body:n}),n(Z,function(n,e){return n.body=c(n.body,e),n}),n(Q,function(n,t){switch(n.body=c(n.body,t),n.body.length){case 1:return n.body[0];case 0:return e(nn,n)}return n}),ln.DEFMETHOD("drop_unused",function(n){var t=this;if(n.has_directive("use asm"))return t;if(n.option("unused")&&!(t instanceof pn)&&!t.uses_eval&&!t.uses_with){var r=[],i={},o=new _,a=this,u=new A(function(e,s){if(e!==t){if(e instanceof mn)return o.add(e.name.name,e),!0;if(e instanceof $n&&a===t)return e.definitions.forEach(function(e){e.value&&(o.add(e.name.name,e.value),e.value.has_side_effects(n)&&e.value.walk(u))}),!0;if(e instanceof fe){var c=e.definition();return c.id in i||(i[c.id]=!0,r.push(c)),!0}if(e instanceof ln){var f=a;return a=e,s(),a=f,!0}}});t.walk(u);for(var s=0;s<r.length;++s)r[s].orig.forEach(function(n){var e=o.get(n.name);e&&e.forEach(function(n){var e=new A(function(n){if(n instanceof fe){var e=n.definition();e.id in i||(i[e.id]=!0,r.push(e))}});n.walk(e)})});var c=new N(function(r,o,a){if(r instanceof dn&&!(r instanceof hn)&&!n.option("keep_fargs"))for(var u=r.argnames,s=u.length;--s>=0;){var f=u[s];if(!f.unreferenced())break;u.pop(),n.warn("Dropping unused function argument {name} [{file}:{line},{col}]",{name:f.name,file:f.start.file,line:f.start.line,col:f.start.col})}if(r instanceof mn&&r!==t)return r.name.definition().id in i?r:(n.warn("Dropping unused function {name} [{file}:{line},{col}]",{name:r.name.name,file:r.name.start.file,line:r.name.start.line,col:r.name.start.col}),e(nn,r));if(r instanceof $n&&!(c.parent()instanceof cn)){var l=r.definitions.filter(function(e){if(e.name.definition().id in i)return!0;var t={name:e.name.name,file:e.name.start.file,line:e.name.start.line,col:e.name.start.col};return e.value&&e.value.has_side_effects(n)?(e._unused_side_effects=!0,n.warn("Side effects in initialization of unused variable {name} [{file}:{line},{col}]",t),!0):(n.warn("Dropping unused variable {name} [{file}:{line},{col}]",t),!1)});l=h(l,function(n,e){return!n.value&&e.value?-1:!e.value&&n.value?1:0});for(var p=[],s=0;s<l.length;){var d=l[s];d._unused_side_effects?(p.push(d.value),l.splice(s,1)):(p.length>0&&(p.push(d.value),d.value=Nn.from_array(p),p=[]),++s)}return p=p.length>0?e(Q,r,{body:[e(K,r,{body:Nn.from_array(p)})]}):null,0!=l.length||p?0==l.length?a?V.splice(p.body):p:(r.definitions=l,p?(p.body.unshift(r),a?V.splice(p.body):p):r):e(nn,r)}if(r instanceof sn&&(o(r,this),r.init instanceof Q)){var v=r.init.body.slice(0,-1);return r.init=r.init.body.slice(-1)[0].body,v.push(r),a?V.splice(v):e(Q,r,{body:v})}return r instanceof ln&&r!==t?r:void 0});t.transform(c)}}),ln.DEFMETHOD("hoist_declarations",function(n){var t=this;if(n.has_directive("use asm"))return t;var r=n.option("hoist_funs"),i=n.option("hoist_vars");if(r||i){var a=[],u=[],s=new _,c=0,f=0;t.walk(new A(function(n){return n instanceof ln&&n!==t||(n instanceof On?(++f,!0):void 0)})),i=i&&f>1;var l=new N(function(n){if(n!==t){if(n instanceof X)return a.push(n),e(nn,n);if(n instanceof mn&&r)return u.push(n),e(nn,n);if(n instanceof On&&i){n.definitions.forEach(function(n){s.set(n.name.name,n),++c});var o=n.to_assignments(),f=l.parent();if(f instanceof cn&&f.init===n){if(null==o){var p=n.definitions[0].name;return e(fe,p,p)}return o}return f instanceof sn&&f.init===n?o:o?e(K,n,{body:o}):e(nn,n)}if(n instanceof ln)return n}});if(t=t.transform(l),c>0){var p=[];if(s.each(function(n,e){t instanceof dn&&o(function(e){return e.name==n.name.name},t.argnames)?s.del(e):(n=n.clone(),n.value=null,p.push(n),s.set(e,n))}),p.length>0){for(var h=0;h<t.body.length;){if(t.body[h]instanceof K){var v,m,g=t.body[h].body;if(g instanceof Wn&&"="==g.operator&&(v=g.left)instanceof ne&&s.has(v.name)){var b=s.get(v.name);if(b.value)break;b.value=g.right,d(p,b),p.push(b),t.body.splice(h,1);continue}if(g instanceof Nn&&(m=g.car)instanceof Wn&&"="==m.operator&&(v=m.left)instanceof ne&&s.has(v.name)){var b=s.get(v.name);if(b.value)break;b.value=m.right,d(p,b),p.push(b),t.body[h].body=g.cdr;continue}}if(t.body[h]instanceof nn)t.body.splice(h,1);else{if(!(t.body[h]instanceof Q))break;var y=[h,1].concat(t.body[h].body);t.body.splice.apply(t.body,y)}}p=e(On,t,{definitions:p}),u.push(p)}}t.body=a.concat(u,t.body)}return t}),n(K,function(n,t){return t.option("side_effects")&&!n.body.has_side_effects(t)?(t.warn("Dropping side-effect-free statement [{file}:{line},{col}]",n.start),e(nn,n)):n}),n(on,function(n,t){var r=n.condition.evaluate(t);if(n.condition=r[0],!t.option("loops"))return n;if(r.length>1){if(r[1])return e(sn,n,{body:n.body});if(n instanceof un&&t.option("dead_code")){var i=[];return l(t,n.body,i),e(Q,n,{body:i})}}return n}),n(un,function(n,t){return t.option("loops")?(n=on.prototype.optimize.call(n,t),n instanceof un&&(w(n,t),n=e(sn,n,n).transform(t)),n):n}),n(sn,function(n,t){var r=n.condition;if(r&&(r=r.evaluate(t),n.condition=r[0]),!t.option("loops"))return n;if(r&&r.length>1&&!r[1]&&t.option("dead_code")){var i=[];return n.init instanceof G?i.push(n.init):n.init&&i.push(e(K,n.init,{body:n.init})),l(t,n.body,i),e(Q,n,{body:i})}return w(n,t),n}),n(Dn,function(n,t){if(!t.option("conditionals"))return n;var r=n.condition.evaluate(t);if(n.condition=r[0],r.length>1)if(r[1]){if(t.warn("Condition always true [{file}:{line},{col}]",n.condition.start),t.option("dead_code")){var i=[];return n.alternative&&l(t,n.alternative,i),i.push(n.body),e(Q,n,{body:i}).transform(t)}}else if(t.warn("Condition always false [{file}:{line},{col}]",n.condition.start),t.option("dead_code")){var i=[];return l(t,n.body,i),n.alternative&&i.push(n.alternative),e(Q,n,{body:i}).transform(t)}u(n.alternative)&&(n.alternative=null);var o=n.condition.negate(t),a=n.condition.print_to_string().length,s=o.print_to_string().length,c=s<a;if(n.alternative&&c){c=!1,n.condition=o;var f=n.body;n.body=n.alternative||e(nn),n.alternative=f}if(u(n.body)&&u(n.alternative))return e(K,n.condition,{body:n.condition}).transform(t);if(n.body instanceof K&&n.alternative instanceof K)return e(K,n,{body:e(Yn,n,{condition:n.condition,consequent:n.body.body,alternative:n.alternative.body})}).transform(t);if(u(n.alternative)&&n.body instanceof K)return a===s&&!c&&n.condition instanceof Vn&&"||"==n.condition.operator&&(c=!0),c?e(K,n,{body:e(Vn,n,{operator:"||",left:o,right:n.body.body})}).transform(t):e(K,n,{body:e(Vn,n,{operator:"&&",left:n.condition,right:n.body.body})}).transform(t);if(n.body instanceof nn&&n.alternative&&n.alternative instanceof K)return e(K,n,{body:e(Vn,n,{operator:"||",left:n.condition,right:n.alternative.body})}).transform(t);if(n.body instanceof gn&&n.alternative instanceof gn&&n.body.TYPE==n.alternative.TYPE)return e(n.body.CTOR,n,{value:e(Yn,n,{condition:n.condition,consequent:n.body.value||e(ye,n.body).optimize(t),alternative:n.alternative.value||e(ye,n.alternative).optimize(t)})}).transform(t);if(n.body instanceof Dn&&!n.body.alternative&&!n.alternative&&(n.condition=e(Vn,n.condition,{operator:"&&",left:n.condition,right:n.body.condition}).transform(t),n.body=n.body.body),y(n.body)&&n.alternative){var p=n.alternative;return n.alternative=null,e(Q,n,{body:[n,p]}).transform(t)}if(y(n.alternative)){var d=n.body;return n.body=n.alternative,n.condition=c?o:n.condition.negate(t),n.alternative=null,e(Q,n,{body:[n,d]}).transform(t)}return n}),n(kn,function(n,t){if(0==n.body.length&&t.option("conditionals"))return e(K,n,{body:n.expression}).transform(t);for(;;){var r=n.body[n.body.length-1];if(r){var i=r.body[r.body.length-1];if(i instanceof wn&&s(t.loopcontrol_target(i.label))===n&&r.body.pop(),r instanceof Fn&&0==r.body.length){n.body.pop();continue}}break}var o=n.expression.evaluate(t);n:if(2==o.length)try{if(n.expression=o[0],!t.option("dead_code"))break n;var a=o[1],u=!1,c=!1,f=!1,l=!1,p=!1,d=new N(function(r,i,o){if(r instanceof dn||r instanceof K)return r;if(r instanceof kn&&r===n)return r=r.clone(),i(r,this),p?r:e(Q,r,{body:r.body.reduce(function(n,e){return n.concat(e.body)},[])}).transform(t);if(r instanceof Dn||r instanceof Bn){var s=u;return u=!c,i(r,this),u=s,r}if(r instanceof en||r instanceof kn){var s=c;return c=!0,i(r,this),c=s,r}if(r instanceof wn&&this.loopcontrol_target(r.label)===n)return u?(p=!0,r):c?r:(l=!0,o?V.skip:e(nn,r));if(r instanceof xn&&this.parent()===n){if(l)return V.skip;if(r instanceof Cn){var d=r.expression.evaluate(t);if(d.length<2)throw n;return d[1]===a||f?(f=!0,y(r)&&(l=!0),i(r,this),r):V.skip}return i(r,this),r}});d.stack=t.stack.slice(),n=n.transform(d)}catch(e){if(e!==n)throw e}return n}),n(Cn,function(n,e){return n.body=c(n.body,e),n}),n(Bn,function(n,e){return n.body=c(n.body,e),n}),$n.DEFMETHOD("remove_initializers",function(){this.definitions.forEach(function(n){n.value=null})}),$n.DEFMETHOD("to_assignments",function(){var n=this.definitions.reduce(function(n,t){if(t.value){var r=e(fe,t.name,t.name);n.push(e(Wn,t,{operator:"=",left:r,right:t.value}))}return n},[]);return 0==n.length?null:Nn.from_array(n)}),n($n,function(n,t){return 0==n.definitions.length?e(nn,n):n}),n(vn,function(n,e){return n=dn.prototype.optimize.call(n,e),e.option("unused")&&!e.option("keep_fnames")&&n.name&&n.name.unreferenced()&&(n.name=null),n}),n(zn,function(n,r){if(r.option("unsafe")){var i=n.expression;if(i instanceof fe&&i.undeclared())switch(i.name){case"Array":if(1!=n.args.length)return e(Gn,n,{elements:n.args}).transform(r);break;case"Object":if(0==n.args.length)return e(Jn,n,{properties:[]});break;case"String":if(0==n.args.length)return e(he,n,{value:""});if(n.args.length<=1)return e(Vn,n,{left:n.args[0],operator:"+",right:e(he,n,{value:""})}).transform(r);break;case"Number":if(0==n.args.length)return e(ve,n,{value:0});if(1==n.args.length)return e(Un,n,{expression:n.args[0],operator:"+"}).transform(r);case"Boolean":if(0==n.args.length)return e(De,n);if(1==n.args.length)return e(Un,n,{expression:e(Un,null,{expression:n.args[0],operator:"!"}),operator:"!"}).transform(r);break;case"Function":if(0==n.args.length)return e(vn,n,{argnames:[],body:[]});if(m(n.args,function(n){return n instanceof he}))try{var o="(function("+n.args.slice(0,-1).map(function(n){return n.value}).join(",")+"){"+n.args[n.args.length-1].value+"})()",a=H(o);a.figure_out_scope({screw_ie8:r.option("screw_ie8")});var u=new R(r.options);a=a.transform(u),a.figure_out_scope({screw_ie8:r.option("screw_ie8")}),a.mangle_names();var s;try{a.walk(new A(function(n){if(n instanceof dn)throw s=n,a}))}catch(n){if(n!==a)throw n}if(!s)return n;var c=s.argnames.map(function(t,r){return e(he,n.args[r],{value:t.print_to_string()})}),o=P();return Q.prototype._codegen.call(s,s,o),o=o.toString().replace(/^\{|\}$/g,""),c.push(e(he,n.args[n.args.length-1],{value:o})),n.args=c,n}catch(e){if(!(e instanceof O))throw console.log(e),e;r.warn("Error parsing code passed to new Function [{file}:{line},{col}]",n.args[n.args.length-1].start),r.warn(e.toString())}}else{if(i instanceof Pn&&"toString"==i.property&&0==n.args.length)return e(Vn,n,{left:e(he,n,{value:""}),operator:"+",right:i.expression}).transform(r);if(i instanceof Pn&&i.expression instanceof Gn&&"join"==i.property){var f=0==n.args.length?",":n.args[0].evaluate(r)[1];if(null!=f){var l=i.expression.elements.reduce(function(n,e){if(e=e.evaluate(r),0==n.length||1==e.length)n.push(e);else{var i=n[n.length-1];if(2==i.length){var o=""+i[1]+f+e[1];n[n.length-1]=[t(r,o,i[0]),o]}else n.push(e)}return n},[]);if(0==l.length)return e(he,n,{value:""});if(1==l.length)return l[0][0];if(""==f){var p;return p=l[0][0]instanceof he||l[1][0]instanceof he?l.shift()[0]:e(he,n,{value:""}),l.reduce(function(n,t){return e(Vn,t[0],{operator:"+",left:n,right:t[0]})},p).transform(r)}var d=n.clone();return d.expression=d.expression.clone(),d.expression.expression=d.expression.expression.clone(),d.expression.expression.elements=l.map(function(n){return n[0]}),b(n,d)}}}}if(r.option("side_effects")&&n.expression instanceof vn&&0==n.args.length&&!Z.prototype.has_side_effects.call(n.expression,r))return e(ye,n).transform(r);if(r.option("drop_console")&&n.expression instanceof jn){for(var h=n.expression.expression;h.expression;)h=h.expression;if(h instanceof fe&&"console"==h.name&&h.undeclared())return e(ye,n).transform(r)}return n.evaluate(r)[0]}),n(Hn,function(n,t){if(t.option("unsafe")){var r=n.expression;if(r instanceof fe&&r.undeclared())switch(r.name){case"Object":case"RegExp":case"Function":case"Error":case"Array":return e(zn,n,n).transform(t)}}return n}),n(Nn,function(n,t){if(!t.option("side_effects"))return n;if(!n.car.has_side_effects(t))return r(t.parent(),n,n.cdr);if(t.option("cascade")){if(n.car instanceof Wn&&!n.car.left.has_side_effects(t)){if(n.car.left.equivalent_to(n.cdr))return n.car;if(n.cdr instanceof zn&&n.cdr.expression.equivalent_to(n.car.left))return n.cdr.expression=n.car,n.cdr}if(!n.car.has_side_effects(t)&&!n.cdr.has_side_effects(t)&&n.car.equivalent_to(n.cdr))return n.car}return n.cdr instanceof Un&&"void"==n.cdr.operator&&!n.cdr.expression.has_side_effects(t)?(n.cdr.expression=n.car,n.cdr):n.cdr instanceof ye?e(Un,n,{operator:"void",expression:n.car}):n}),In.DEFMETHOD("lift_sequences",function(n){if(n.option("sequences")&&this.expression instanceof Nn){var e=this.expression,t=e.to_array();return this.expression=t.pop(),t.push(this),e=Nn.from_array(t).transform(n)}return this}),n(Ln,function(n,e){return n.lift_sequences(e)}),n(Un,function(n,t){n=n.lift_sequences(t);var r=n.expression;if(t.option("booleans")&&t.in_boolean_context()){switch(n.operator){case"!":if(r instanceof Un&&"!"==r.operator)return r.expression;break;case"typeof":return t.warn("Boolean expression always true [{file}:{line},{col}]",n.start),e(ke,n)}r instanceof Vn&&"!"==n.operator&&(n=b(n,r.negate(t)))}return n.evaluate(t)[0]}),Vn.DEFMETHOD("lift_sequences",function(n){if(n.option("sequences")){if(this.left instanceof Nn){var e=this.left,t=e.to_array();return this.left=t.pop(),t.push(this),e=Nn.from_array(t).transform(n)}if(this.right instanceof Nn&&this instanceof Wn&&!E(this.left,n)){var e=this.right,t=e.to_array();return this.right=t.pop(),t.push(this),e=Nn.from_array(t).transform(n)}}return this});var k=v("== === != !== * & | ^");n(Vn,function(n,t){function i(e,r){if(r||!n.left.has_side_effects(t)&&!n.right.has_side_effects(t)){e&&(n.operator=e);var i=n.left;n.left=n.right,n.right=i}}if(k(n.operator)&&(n.right instanceof de&&!(n.left instanceof de)&&(n.left instanceof Vn&&Ue[n.left.operator]>=Ue[n.operator]||i(null,!0)),/^[!=]==?$/.test(n.operator))){if(n.left instanceof fe&&n.right instanceof Yn){if(n.right.consequent instanceof fe&&n.right.consequent.definition()===n.left.definition()){if(/^==/.test(n.operator))return n.right.condition;if(/^!=/.test(n.operator))return n.right.condition.negate(t)}if(n.right.alternative instanceof fe&&n.right.alternative.definition()===n.left.definition()){if(/^==/.test(n.operator))return n.right.condition.negate(t);if(/^!=/.test(n.operator))return n.right.condition}}if(n.right instanceof fe&&n.left instanceof Yn){if(n.left.consequent instanceof fe&&n.left.consequent.definition()===n.right.definition()){if(/^==/.test(n.operator))return n.left.condition;if(/^!=/.test(n.operator))return n.left.condition.negate(t)}if(n.left.alternative instanceof fe&&n.left.alternative.definition()===n.right.definition()){if(/^==/.test(n.operator))return n.left.condition.negate(t);if(/^!=/.test(n.operator))return n.left.condition}}}if(n=n.lift_sequences(t),t.option("comparisons"))switch(n.operator){case"===":case"!==":(n.left.is_string(t)&&n.right.is_string(t)||n.left.is_boolean()&&n.right.is_boolean())&&(n.operator=n.operator.substr(0,2));case"==":case"!=":n.left instanceof he&&"undefined"==n.left.value&&n.right instanceof Un&&"typeof"==n.right.operator&&t.option("unsafe")&&(n.right.expression instanceof fe&&n.right.expression.undeclared()||(n.right=n.right.expression,n.left=e(ye,n.left).optimize(t),2==n.operator.length&&(n.operator+="=")))}if(t.option("conditionals"))if("&&"==n.operator){var o=n.left.evaluate(t);if(o.length>1)return o[1]?(t.warn("Condition left of && always true [{file}:{line},{col}]",n.start),r(t.parent(),n,n.right.evaluate(t)[0])):(t.warn("Condition left of && always false [{file}:{line},{col}]",n.start),r(t.parent(),n,o[0]))}else if("||"==n.operator){var o=n.left.evaluate(t);if(o.length>1)return o[1]?(t.warn("Condition left of || always true [{file}:{line},{col}]",n.start),r(t.parent(),n,o[0])):(t.warn("Condition left of || always false [{file}:{line},{col}]",n.start),r(t.parent(),n,n.right.evaluate(t)[0]))}if(t.option("booleans")&&t.in_boolean_context())switch(n.operator){case"&&":var o=n.left.evaluate(t),a=n.right.evaluate(t);if(o.length>1&&!o[1]||a.length>1&&!a[1])return t.warn("Boolean && always false [{file}:{line},{col}]",n.start),n.left.has_side_effects(t)?e(Nn,n,{car:n.left,cdr:e(De)}).optimize(t):e(De,n);if(o.length>1&&o[1])return a[0];if(a.length>1&&a[1])return o[0];break;case"||":var o=n.left.evaluate(t),a=n.right.evaluate(t);if(o.length>1&&o[1]||a.length>1&&a[1])return t.warn("Boolean || always true [{file}:{line},{col}]",n.start),n.left.has_side_effects(t)?e(Nn,n,{car:n.left,cdr:e(ke)}).optimize(t):e(ke,n);if(o.length>1&&!o[1])return a[0];if(a.length>1&&!a[1])return o[0];break;case"+":var o=n.left.evaluate(t),a=n.right.evaluate(t);if(o.length>1&&o[0]instanceof he&&o[1]||a.length>1&&a[0]instanceof he&&a[1])return t.warn("+ in boolean context always true [{file}:{line},{col}]",n.start),e(ke,n)}if(t.option("comparisons")&&n.is_boolean()){if(!(t.parent()instanceof Vn)||t.parent()instanceof Wn){var u=e(Un,n,{operator:"!",expression:n.negate(t)});n=b(n,u)}if(t.option("unsafe_comps"))switch(n.operator){case"<":i(">");break;case"<=":i(">=")}}return"+"==n.operator&&n.right instanceof he&&""===n.right.getValue()&&n.left instanceof Vn&&"+"==n.left.operator&&n.left.is_string(t)?n.left:(t.option("evaluate")&&"+"==n.operator&&(n.left instanceof de&&n.right instanceof Vn&&"+"==n.right.operator&&n.right.left instanceof de&&n.right.is_string(t)&&(n=e(Vn,n,{operator:"+",left:e(he,null,{value:""+n.left.getValue()+n.right.left.getValue(),start:n.left.start,end:n.right.left.end}),right:n.right.right})),n.right instanceof de&&n.left instanceof Vn&&"+"==n.left.operator&&n.left.right instanceof de&&n.left.is_string(t)&&(n=e(Vn,n,{operator:"+",left:n.left.left,right:e(he,null,{value:""+n.left.right.getValue()+n.right.getValue(),start:n.left.right.start,end:n.right.end})})),n.left instanceof Vn&&"+"==n.left.operator&&n.left.is_string(t)&&n.left.right instanceof de&&n.right instanceof Vn&&"+"==n.right.operator&&n.right.left instanceof de&&n.right.is_string(t)&&(n=e(Vn,n,{operator:"+",left:e(Vn,n.left,{operator:"+",left:n.left.left,right:e(he,null,{value:""+n.left.right.getValue()+n.right.left.getValue(),start:n.left.right.start,end:n.right.left.end})}),right:n.right.right}))),n.right instanceof Vn&&n.right.operator==n.operator&&("&&"==n.operator||"||"==n.operator)?(n.left=e(Vn,n.left,{operator:n.operator,left:n.left,right:n.right.left}),n.right=n.right.right,n.transform(t)):n.evaluate(t)[0])}),n(fe,function(n,r){function i(n,e){return e instanceof Vn&&"="===e.operator&&e.left===n}if(n.undeclared()&&!i(n,r.parent())){var o=r.option("global_defs");if(o&&g(o,n.name))return t(r,o[n.name],n);if(!n.scope.uses_with||!r.find_parent(fn))switch(n.name){case"undefined":return e(ye,n);case"NaN":return e(be,n).transform(r);case"Infinity":return e(we,n).transform(r)}}return n}),n(we,function(n,t){return e(Vn,n,{operator:"/",left:e(ve,n,{value:1}),right:e(ve,n,{value:0})})}),n(ye,function(n,t){if(t.option("unsafe")){var r=t.find_parent(ln),i=r.find_variable("undefined");if(i){var o=e(fe,n,{name:"undefined",scope:r,thedef:i});return o.reference(),o}}return n});var x=["+","-","/","*","%",">>","<<",">>>","|","^","&"];n(Wn,function(n,e){return n=n.lift_sequences(e),"="==n.operator&&n.left instanceof fe&&n.right instanceof Vn&&n.right.left instanceof fe&&n.right.left.name==n.left.name&&i(n.right.operator,x)&&(n.operator=n.right.operator+"=",n.right=n.right.right),n}),n(Yn,function(n,i){function o(n){return n.is_boolean()?n:e(Un,n,{operator:"!",expression:n.negate(i)})}function a(n){return n instanceof ke||n instanceof Un&&"!"==n.operator&&n.expression instanceof de&&!n.expression.value}function u(n){return n instanceof De||n instanceof Un&&"!"==n.operator&&n.expression instanceof de&&!!n.expression.value}if(!i.option("conditionals"))return n;if(n.condition instanceof Nn){var s=n.condition.car;return n.condition=n.condition.cdr,Nn.cons(s,n)}var c=n.condition.evaluate(i);if(c.length>1)return c[1]?(i.warn("Condition always true [{file}:{line},{col}]",n.start),r(i.parent(),n,n.consequent)):(i.warn("Condition always false [{file}:{line},{col}]",n.start),r(i.parent(),n,n.alternative));var f=c[0].negate(i);b(c[0],f)===f&&(n=e(Yn,n,{condition:f,consequent:n.alternative,alternative:n.consequent}));var l=n.consequent,p=n.alternative;if(l instanceof Wn&&p instanceof Wn&&l.operator==p.operator&&l.left.equivalent_to(p.left)&&!l.left.has_side_effects(i))return e(Wn,n,{operator:l.operator,left:l.left,right:e(Yn,n,{condition:n.condition,consequent:l.right,alternative:p.right})});if(l instanceof zn&&p.TYPE===l.TYPE&&l.args.length==p.args.length&&!l.expression.has_side_effects(i)&&l.expression.equivalent_to(p.expression)){if(0==l.args.length)return e(Nn,n,{car:n.condition,cdr:l});if(1==l.args.length)return l.args[0]=e(Yn,n,{condition:n.condition,consequent:l.args[0],alternative:p.args[0]}),l}if(l instanceof Yn&&l.alternative.equivalent_to(p))return e(Yn,n,{condition:e(Vn,n,{left:n.condition,operator:"&&",right:l.condition}),consequent:l.consequent,alternative:p});if(l.is_constant(i)&&p.is_constant(i)&&l.equivalent_to(p)){var d=l.constant_value(i);return n.condition.has_side_effects(i)?Nn.from_array([n.condition,t(i,d,n)]):t(i,d,n)}return a(n.consequent)?u(n.alternative)?o(n.condition):e(Vn,n,{operator:"||",left:o(n.condition),right:n.alternative}):u(n.consequent)?a(n.alternative)?o(n.condition.negate(i)):e(Vn,n,{operator:"&&",left:o(n.condition.negate(i)),right:n.alternative}):a(n.alternative)?e(Vn,n,{operator:"||",left:o(n.condition.negate(i)),right:n.consequent}):u(n.alternative)?e(Vn,n,{operator:"&&",left:o(n.condition),right:n.consequent}):n}),n(Ee,function(n,t){if(t.option("booleans")){var r=t.parent();return r instanceof Vn&&("=="==r.operator||"!="==r.operator)?(t.warn("Non-strict equality against boolean: {operator} {value} [{file}:{line},{col}]",{operator:r.operator,value:n.value,file:r.start.file,line:r.start.line,col:r.start.col}),e(ve,n,{value:+n.value})):e(Un,n,{operator:"!",expression:e(ve,n,{value:1-n.value})})}return n}),n(Rn,function(n,t){var r=n.property;if(r instanceof he&&t.option("properties")){if(r=r.getValue(),Ce(r)?t.option("screw_ie8"):T(r))return e(Pn,n,{expression:n.expression,property:r}).optimize(t);var i=parseFloat(r);isNaN(i)||i.toString()!=r||(n.property=e(ve,n.property,{value:i}))}return n}),n(Pn,function(n,t){var r=n.property;return Ce(r)&&!t.option("screw_ie8")?e(Rn,n,{expression:n.expression,property:e(he,n,{value:r})}).optimize(t):n.evaluate(t)[0]}),n(Gn,D),n(Jn,D),n(me,D),n(bn,function(n,e){return n.value instanceof ye&&(n.value=null),n})}(),function(){function e(n){if("Literal"==n.type)return null!=n.raw?n.raw:n.value+""}function t(n){var t=n.loc,r=t&&t.start,i=n.range;return new Y({file:t&&t.source,line:r&&r.line,col:r&&r.column,pos:i?i[0]:n.start,endline:r&&r.line,endcol:r&&r.column,endpos:i?i[0]:n.start,raw:e(n)})}function r(n){var t=n.loc,r=t&&t.end,i=n.range;return new Y({file:t&&t.source,line:r&&r.line,col:r&&r.column,pos:i?i[1]:n.end,endline:r&&r.line,endcol:r&&r.column,endpos:i?i[1]:n.end,raw:e(n)})}function i(e,i,a){var f="function From_Moz_"+e+"(M){\n";f+="return new U2."+i.name+"({\nstart: my_start_token(M),\nend: my_end_token(M)";var p="function To_Moz_"+e+"(M){\n";p+="return {\ntype: "+JSON.stringify(e),a&&a.split(/\s*,\s*/).forEach(function(n){var e=/([a-z0-9$_]+)(=|@|>|%)([a-z0-9$_]+)/i.exec(n);if(!e)throw new Error("Can't understand property map: "+n);var t=e[1],r=e[2],i=e[3];switch(f+=",\n"+i+": ",p+=",\n"+t+": ",r){case"@":f+="M."+t+".map(from_moz)",p+="M."+i+".map(to_moz)";break;case">":f+="from_moz(M."+t+")",p+="to_moz(M."+i+")";break;case"=":f+="M."+t,p+="M."+i;break;case"%":f+="from_moz(M."+t+").body",p+="to_moz_block(M)";break;default:throw new Error("Can't understand operator in propmap: "+n)}}),f+="\n})\n}",p+="\n}\n}",f=new Function("U2","my_start_token","my_end_token","from_moz","return("+f+")")(n,t,r,o),p=new Function("to_moz","to_moz_block","return("+p+")")(s,c),l[e]=f,u(i,p)}function o(n){p.push(n);var e=null!=n?l[n.type](n):null;return p.pop(),e}function a(n,e,t){var r=n.start,i=n.end;return null!=r.pos&&null!=i.endpos&&(e.range=[r.pos,i.endpos]),r.line&&(e.loc={start:{line:r.line,column:r.col},end:i.endline?{line:i.endline,column:i.endcol}:null},r.file&&(e.loc.source=r.file)),e}function u(n,e){n.DEFMETHOD("to_mozilla_ast",function(){return a(this,e(this))})}function s(n){return null!=n?n.to_mozilla_ast():null}function c(n){return{type:"BlockStatement",body:n.body.map(s)}}var f=function(n){for(var e=!0,t=0;t<n.length;t++)e&&n[t]instanceof G&&n[t].body instanceof he?n[t]=new X({start:n[t].start,end:n[t].end,value:n[t].body.value}):!e||n[t]instanceof G&&n[t].body instanceof he||(e=!1);return n},l={Program:function(n){return new pn({start:t(n),end:r(n),body:f(n.body.map(o))})},FunctionDeclaration:function(n){return new mn({start:t(n),end:r(n),name:o(n.id),argnames:n.params.map(o),body:f(o(n.body).body)})},FunctionExpression:function(n){return new vn({start:t(n),end:r(n),name:o(n.id),argnames:n.params.map(o),body:f(o(n.body).body)})},ExpressionStatement:function(n){return new K({start:t(n),end:r(n),body:o(n.expression)})},TryStatement:function(n){var e=n.handlers||[n.handler];if(e.length>1||n.guardedHandlers&&n.guardedHandlers.length)throw new Error("Multiple catch clauses are not supported.");return new Bn({start:t(n),end:r(n),body:o(n.block).body,bcatch:o(e[0]),bfinally:n.finalizer?new Tn(o(n.finalizer)):null})},Property:function(n){var e=n.key,i="Identifier"==e.type?e.name:e.value,a={start:t(e),end:r(n.value),key:i,value:o(n.value)};switch(n.kind){case"init":return new Kn(a);case"set":return a.value.name=o(e),new Zn(a);case"get":return a.value.name=o(e),new Qn(a)}},ArrayExpression:function(n){return new Gn({start:t(n),end:r(n),elements:n.elements.map(function(n){return null===n?new Ae:o(n)})})},ObjectExpression:function(n){return new Jn({start:t(n),end:r(n),properties:n.properties.map(function(n){return n.type="Property",o(n)})})},SequenceExpression:function(n){return Nn.from_array(n.expressions.map(o))},MemberExpression:function(n){return new(n.computed?Rn:Pn)({start:t(n),end:r(n),property:n.computed?o(n.property):n.property.name,expression:o(n.object)})},SwitchCase:function(n){return new(n.test?Cn:Fn)({start:t(n),end:r(n),expression:o(n.test),body:n.consequent.map(o)})},VariableDeclaration:function(n){return new("const"===n.kind?qn:On)({start:t(n),end:r(n),definitions:n.declarations.map(o)})},Literal:function(n){var e=n.value,i={start:t(n),end:r(n)};if(null===e)return new ge(i);switch(typeof e){case"string":return i.value=e,new he(i);case"number":return i.value=e,new ve(i);case"boolean":return new(e?ke:De)(i);default:var o=n.regex;return o&&o.pattern?i.value=new RegExp(o.pattern,o.flags).toString():i.value=n.regex&&n.raw?n.raw:e,new me(i)}},Identifier:function(n){var e=p[p.length-2];return new("LabeledStatement"==e.type?ce:"VariableDeclarator"==e.type&&e.id===n?"const"==e.kind?ie:re:"FunctionExpression"==e.type?e.id===n?ue:oe:"FunctionDeclaration"==e.type?e.id===n?ae:oe:"CatchClause"==e.type?se:"BreakStatement"==e.type||"ContinueStatement"==e.type?le:fe)({start:t(n),end:r(n),name:n.name})}};l.UpdateExpression=l.UnaryExpression=function(n){var e="prefix"in n?n.prefix:"UnaryExpression"==n.type;return new(e?Un:Ln)({start:t(n),end:r(n),operator:n.operator,expression:o(n.argument)})},i("EmptyStatement",nn),i("BlockStatement",Q,"body@body"),i("IfStatement",Dn,"test>condition, consequent>body, alternate>alternative"),i("LabeledStatement",tn,"label>label, body>body"),i("BreakStatement",wn,"label>label"),i("ContinueStatement",En,"label>label"),i("WithStatement",fn,"object>expression, body>body"),i("SwitchStatement",kn,"discriminant>expression, cases@body"),i("ReturnStatement",bn,"argument>value"),i("ThrowStatement",yn,"argument>value"),i("WhileStatement",un,"test>condition, body>body"),i("DoWhileStatement",an,"test>condition, body>body"),i("ForStatement",sn,"init>init, test>condition, update>step, body>body"),i("ForInStatement",cn,"left>init, right>object, body>body"),i("DebuggerStatement",J),i("VariableDeclarator",Mn,"id>name, init>value"),i("CatchClause",Sn,"param>argname, body%body"),i("ThisExpression",pe),i("BinaryExpression",Vn,"operator=operator, left>left, right>right"),i("LogicalExpression",Vn,"operator=operator, left>left, right>right"),i("AssignmentExpression",Wn,"operator=operator, left>left, right>right"),i("ConditionalExpression",Yn,"test>condition, consequent>consequent, alternate>alternative"),i("NewExpression",Hn,"callee>expression, arguments@args"),i("CallExpression",zn,"callee>expression, arguments@args"),u(pn,function(n){return{type:"Program",body:n.body.map(s)}}),u(mn,function(n){return{type:"FunctionDeclaration",id:s(n.name),params:n.argnames.map(s),body:c(n)}}),u(vn,function(n){return{type:"FunctionExpression",id:s(n.name),params:n.argnames.map(s),body:c(n)}}),u(X,function(n){return{
	type:"ExpressionStatement",expression:{type:"Literal",value:n.value}}}),u(K,function(n){return{type:"ExpressionStatement",expression:s(n.body)}}),u(xn,function(n){return{type:"SwitchCase",test:s(n.expression),consequent:n.body.map(s)}}),u(Bn,function(n){return{type:"TryStatement",block:c(n),handler:s(n.bcatch),guardedHandlers:[],finalizer:s(n.bfinally)}}),u(Sn,function(n){return{type:"CatchClause",param:s(n.argname),guard:null,body:c(n)}}),u($n,function(n){return{type:"VariableDeclaration",kind:n instanceof qn?"const":"var",declarations:n.definitions.map(s)}}),u(Nn,function(n){return{type:"SequenceExpression",expressions:n.to_array().map(s)}}),u(jn,function(n){var e=n instanceof Rn;return{type:"MemberExpression",object:s(n.expression),computed:e,property:e?s(n.property):{type:"Identifier",name:n.property}}}),u(In,function(n){return{type:"++"==n.operator||"--"==n.operator?"UpdateExpression":"UnaryExpression",operator:n.operator,prefix:n instanceof Un,argument:s(n.expression)}}),u(Vn,function(n){return{type:"&&"==n.operator||"||"==n.operator?"LogicalExpression":"BinaryExpression",left:s(n.left),operator:n.operator,right:s(n.right)}}),u(Gn,function(n){return{type:"ArrayExpression",elements:n.elements.map(s)}}),u(Jn,function(n){return{type:"ObjectExpression",properties:n.properties.map(s)}}),u(Xn,function(n){var e,t=C(n.key)?{type:"Identifier",name:n.key}:{type:"Literal",value:n.key};return n instanceof Kn?e="init":n instanceof Qn?e="get":n instanceof Zn&&(e="set"),{type:"Property",kind:e,key:t,value:s(n.value)}}),u(ne,function(n){var e=n.definition();return{type:"Identifier",name:e?e.mangled_name||e.name:n.name}}),u(me,function(n){var e=n.value;return{type:"Literal",value:e,raw:e.toString(),regex:{pattern:e.source,flags:e.toString().match(/[gimuy]*$/)[0]}}}),u(de,function(n){var e=n.value;return"number"==typeof e&&(e<0||0===e&&1/e<0)?{type:"UnaryExpression",operator:"-",prefix:!0,argument:{type:"Literal",value:-e,raw:n.start.raw}}:{type:"Literal",value:e,raw:n.start.raw}}),u(_e,function(n){return{type:"Identifier",name:String(n.value)}}),Ee.DEFMETHOD("to_mozilla_ast",de.prototype.to_mozilla_ast),ge.DEFMETHOD("to_mozilla_ast",de.prototype.to_mozilla_ast),Ae.DEFMETHOD("to_mozilla_ast",function(){return null}),Z.DEFMETHOD("to_mozilla_ast",Q.prototype.to_mozilla_ast),dn.DEFMETHOD("to_mozilla_ast",vn.prototype.to_mozilla_ast);var p=null;W.from_mozilla_ast=function(n){var e=p;p=[];var t=o(n);return p=e,t}}(),n.Compressor=R,n.DefaultsError=u,n.Dictionary=_,n.JS_Parse_Error=O,n.MAP=V,n.OutputStream=P,n.SourceMap=I,n.TreeTransformer=N,n.TreeWalker=A,n.base54=Ve,n.defaults=s,n.mangle_properties=L,n.merge=c,n.parse=H,n.push_uniq=l,n.string_template=p,n.tokenizer=z,n.is_identifier=C,n.SymbolDef=j,"undefined"!="boolean"&&(false)&&(n.EXPECT_DIRECTIVE=Ye),e.UglifyJS=n}({},function(){return this}());
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = UglifyJS;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _tab = __webpack_require__(4);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _validate2 = __webpack_require__(6);
	
	var _validate3 = _interopRequireDefault(_validate2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CopyPaste = function (_Tab) {
		_inherits(CopyPaste, _Tab);
	
		function CopyPaste() {
			var _Object$getPrototypeO;
	
			var _this;
	
			_classCallCheck(this, CopyPaste);
	
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			(_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(CopyPaste)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this).set({
				active: true
			}).bindNode({
				form: ':sandbox form[name="copyPasteForm"]',
				code: ':bound(form) [name="code"]'
			}).on({
				'submit::form': function submitForm(evt) {
					evt.preventDefault();
	
					var _this2 = _this;
					var code = _this2.code;
	
					var _validate = (0, _validate3.default)(code);
	
					var isValid = _validate.isValid;
					var error = _validate.error;
	
	
					if (!isValid) {
						_this.error = error;
					} else {
						_this.error = '';
						_this.trigger('submitCode', code);
					}
				},
				'change:code': function changeCode() {
					_this.error = '';
				}
			});
			return _this;
		}
	
		return CopyPaste;
	}(_tab2.default);
	
	exports.default = CopyPaste;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _matreshka = __webpack_require__(2);
	
	var _matreshka2 = _interopRequireDefault(_matreshka);
	
	var _tab = __webpack_require__(4);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _minify = __webpack_require__(10);
	
	var _minify2 = _interopRequireDefault(_minify);
	
	var _lodash = __webpack_require__(11);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var getJSBlob = function getJSBlob(data) {
		return new Blob([data], {
			type: 'text/javascript'
		});
	};
	
	var getBlobSize = function getBlobSize(blob) {
		return blob.size;
	};
	
	var prop = _matreshka2.default.binders.prop;
	
	var Output = function (_Tab) {
		_inherits(Output, _Tab);
	
		function Output() {
			var _Object$getPrototypeO;
	
			var _this;
	
			_classCallCheck(this, Output);
	
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}
	
			(_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Output)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this).set({
				inputCode: ''
			}).bindNode({
				outputDataURI: [':sandbox .download', prop('href')],
				compression: ':sandbox .compression',
				saving: ':sandbox .saving',
				outputCode: ':sandbox .output-code'
			}).linkProps('inputBlob', 'inputCode', getJSBlob).linkProps('inputSize', 'inputBlob', getBlobSize).linkProps('outputCode', 'inputCode', _minify2.default, { setOnInit: false }).linkProps('outputBlob', 'outputCode', getJSBlob).linkProps('outputSize', 'outputBlob', getBlobSize).linkProps('outputDataURI', 'outputBlob', URL.createObjectURL).linkProps('compression', 'inputSize outputSize', function (inSize, outSize) {
				return (0, _lodash2.default)(100 - outSize / inSize * 100 || 0, 2);
			}).linkProps('saving', 'inputSize outputSize', function (inSize, outSize) {
				return (0, _lodash2.default)((inSize - outSize) / 1024, 2);
			}).on({
				'keypress::outputCode': function keypressOutputCode(evt) {
					return evt.preventDefault();
				}
			});
			return _this;
		}
	
		return Output;
	}(_tab2.default);
	
	exports.default = Output;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = minify;
	
	var _uglifyJsBrowser = __webpack_require__(7);
	
	var _uglifyJsBrowser2 = _interopRequireDefault(_uglifyJsBrowser);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function minify(code) {
		var compressor = _uglifyJsBrowser2.default.Compressor({});
		var ast = _uglifyJsBrowser2.default.parse(code);
	
		ast.figure_out_scope();
		ast = ast.transform(compressor);
		ast.mangle_names();
		return ast.print_to_string();
	} /* eslint new-cap: ["error", {"capIsNewExceptions": ["UglifyJS.Compressor"]}] */

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	var toString = __webpack_require__(12);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Creates a function like `_.round`.
	 *
	 * @private
	 * @param {string} methodName The name of the `Math` method to use when rounding.
	 * @returns {Function} Returns the new round function.
	 */
	function createRound(methodName) {
	  var func = Math[methodName];
	  return function(number, precision) {
	    number = toNumber(number);
	    precision = toInteger(precision);
	    if (precision) {
	      // Shift with exponential notation to avoid floating-point issues.
	      // See [MDN](https://mdn.io/round#Examples) for more details.
	      var pair = (toString(number) + 'e').split('e'),
	          value = func(pair[0] + 'e' + (+pair[1] + precision));
	
	      pair = (toString(value) + 'e').split('e');
	      return +(pair[0] + 'e' + (+pair[1] - precision));
	    }
	    return func(number);
	  };
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? (remainder ? result - remainder : result) : 0;
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	/**
	 * Computes `number` rounded to `precision`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.10.0
	 * @category Math
	 * @param {number} number The number to round.
	 * @param {number} [precision=0] The precision to round to.
	 * @returns {number} Returns the rounded number.
	 * @example
	 *
	 * _.round(4.006);
	 * // => 4
	 *
	 * _.round(4.006, 2);
	 * // => 4.01
	 *
	 * _.round(4060, -2);
	 * // => 4100
	 */
	var round = createRound('round');
	
	module.exports = round;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};
	
	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;
	
	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
	
	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);
	
	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);
	
	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
	
	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();
	
	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module), (function() { return this; }())))

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map