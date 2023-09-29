/******/ (() => {
	// webpackBootstrap
	/******/ var __webpack_modules__ = {
		/***/ 3732: /***/ () => {
			const hiddenContainer = document.querySelector(".card__container");
			const checkbox = document.getElementById("otherPersonOrdering");
			checkbox.addEventListener("change", () => {
				checkbox.classList.toggle("accordion-open");
				if (checkbox.classList.contains("accordion-open")) {
					hiddenContainer.style.maxHeight = hiddenContainer.scrollHeight + "px";
				} else {
					hiddenContainer.style.maxHeight = null;
				}
			});

			/***/
		},

		/***/ 1880: /***/ () => {
			const doctorOstCities = [
				"Алматы",
				"Челябинск",
				"Екатеринбург",
				"Нижний Новгород",
				"Казань",
				"Краснодар",
				"Красноярск",
				"Новосибирск",
				"Пермь",
				"Самара",
				"Тюмень",
				"Уфа",
			];
			const detiIndigoCities = ["Алматы", "Челябинск", "Краснодар"];
			const fillialContainer = document.querySelector(".hero__filials");

			// обсервер изменений на городе
			const cityToggle = document.getElementById("city");
			const observer = new MutationObserver(function (mutations) {
				mutations.forEach(function (mutation) {
					if (mutation.type === "attributes") {
						// Example of accessing the element for which
						// event was triggered
						// mutation.target.textContent = "Attribute of the element changed";
						let currentValue = mutation.target.getAttribute("data-value");
						if (doctorOstCities.includes(currentValue) && detiIndigoCities.includes(currentValue)) {
							mutation.target.classList.add("hero__toggle-show-filialls");
						} else {
							mutation.target.classList.remove("hero__toggle-show-filialls");
							fillialContainer.setAttribute("data-value", "");
						}
					}
				});
			});
			observer.observe(cityToggle, {
				attributeFilter: ["data-value"], //configure it to listen to attribute changes
			});

			// переключение филиалов
			const filialls = document.querySelectorAll(".hero__filial");
			let activeFillial = document.querySelector(".hero__filial-active");
			filialls.forEach((el) => {
				el.addEventListener("click", () => {
					if (activeFillial !== el && activeFillial) {
						activeFillial.classList.remove("hero__filial-active");
					}
					fillialContainer.setAttribute("data-value", el.getAttribute("data-value"));
					el.classList.add("hero__filial-active");
					activeFillial = el;
				});
			});

			/***/
		},

		/***/ 8566: /***/ () => {
			const marks = document.querySelectorAll(".card__mark");
			const genderInput = document.getElementById("gender");
			let activeMark = document.querySelector(".card__mark-active");
			marks.forEach((mark) => {
				mark.addEventListener("click", () => {
					genderInput.setAttribute("value", mark.getAttribute("data-value"));
					if (activeMark) {
						activeMark.classList.remove("card__mark-active");
					}
					mark.classList.add("card__mark-active");
					activeMark = mark;
				});
			});

			/***/
		},

		/***/ 9612: /***/ () => {
			const nextButton = document.querySelector(".hero__button-next");
			const cardSection = document.querySelector(".card");
			nextButton.addEventListener("click", (e) => {
				e.preventDefault();
				cardSection.classList.add("card-visible");
			});

			/***/
		},

		/***/ 303: /***/ () => {
			const phoneButtons = document.querySelectorAll(".card__button-phone");
			const hiddenPhoneInputs = document.querySelectorAll(".card__input-phone-hidden");
			if (phoneButtons) {
				phoneButtons.forEach((btn, idx) => {
					btn.addEventListener("click", () => {
						hiddenPhoneInputs[idx].classList.toggle("card__input-phone-hidden");
					});
				});
			}
			document.querySelector(".card__form").addEventListener("submit", (e) => {
				e.preventDefault();
			});

			/***/
		},

		/***/ 8355: /***/ () => {
			window.addEventListener("DOMContentLoaded", function () {
				[].forEach.call(document.querySelectorAll(".phone-mask-input"), function (input) {
					var keyCode;
					function mask(event) {
						event.keyCode && (keyCode = event.keyCode);
						var pos = this.selectionStart;
						if (pos < 3) event.preventDefault();
						var matrix = "+7 (___)-___-__-__",
							i = 0,
							def = matrix.replace(/\D/g, ""),
							val = this.value.replace(/\D/g, ""),
							new_value = matrix.replace(/[_\d]/g, function (a) {
								return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
							});
						i = new_value.indexOf("_");
						if (i != -1) {
							i < 5 && (i = 3);
							new_value = new_value.slice(0, i);
						}
						var reg = matrix
							.substr(0, this.value.length)
							.replace(/_+/g, function (a) {
								return "\\d{1," + a.length + "}";
							})
							.replace(/[+()]/g, "\\$&");
						reg = new RegExp("^" + reg + "$");
						if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58))
							this.value = new_value;
						if (event.type == "blur" && this.value.length < 5) this.value = "";
					}
					input.addEventListener("input", mask, false);
					input.addEventListener("focus", mask, false);
					input.addEventListener("blur", mask, false);
					input.addEventListener("keydown", mask, false);
				});
			});

			/***/
		},

		/***/ 457: /***/ () => {
			const regions = [
				{
					id: 1,
					district_id: 2,
					name: "Республика Адыгея",
				},
				{
					id: 4,
					district_id: 5,
					name: "Республика Алтай",
				},
				{
					id: 22,
					district_id: 5,
					name: "Алтайский край",
				},
				{
					id: 28,
					district_id: 4,
					name: "Амурская область",
				},
				{
					id: 29,
					district_id: 3,
					name: "Архангельская область",
				},
				{
					id: 30,
					district_id: 2,
					name: "Астраханская область",
				},
				{
					id: 2,
					district_id: 7,
					name: "Республика Башкортостан",
				},
				{
					id: 31,
					district_id: 1,
					name: "Белгородская область",
				},
				{
					id: 32,
					district_id: 1,
					name: "Брянская область",
				},
				{
					id: 3,
					district_id: 5,
					name: "Республика Бурятия",
				},
				{
					id: 33,
					district_id: 1,
					name: "Владимирская область",
				},
				{
					id: 34,
					district_id: 2,
					name: "Волгоградская область",
				},
				{
					id: 35,
					district_id: 3,
					name: "Вологодская область",
				},
				{
					id: 36,
					district_id: 1,
					name: "Воронежская область",
				},
				{
					id: 5,
					district_id: 8,
					name: "Республика Дагестан",
				},
				{
					id: 79,
					district_id: 4,
					name: "Еврейская АО",
				},
				{
					id: 75,
					district_id: 5,
					name: "Забайкальский край",
				},
				{
					id: 37,
					district_id: 1,
					name: "Ивановская область",
				},
				{
					id: 6,
					district_id: 8,
					name: "Республика Ингушетия",
				},
				{
					id: 38,
					district_id: 5,
					name: "Иркутская область",
				},
				{
					id: 7,
					district_id: 8,
					name: "Кабардино-Балкарская Республика",
				},
				{
					id: 39,
					district_id: 3,
					name: "Калининградская область",
				},
				{
					id: 8,
					district_id: 2,
					name: "Республика Калмыкия",
				},
				{
					id: 40,
					district_id: 1,
					name: "Калужская область",
				},
				{
					id: 41,
					district_id: 4,
					name: "Камчатский край",
				},
				{
					id: 9,
					district_id: 8,
					name: "Карачаево-Черкесская Республика",
				},
				{
					id: 10,
					district_id: 3,
					name: "Республика Карелия",
				},
				{
					id: 42,
					district_id: 5,
					name: "Кемеровская область",
				},
				{
					id: 43,
					district_id: 7,
					name: "Кировская область",
				},
				{
					id: 11,
					district_id: 3,
					name: "Республика Коми",
				},
				{
					id: 44,
					district_id: 1,
					name: "Костромская область",
				},
				{
					id: 23,
					district_id: 2,
					name: "Краснодарский край",
				},
				{
					id: 24,
					district_id: 5,
					name: "Красноярский край",
				},
				{
					id: 45,
					district_id: 6,
					name: "Курганская область",
				},
				{
					id: 46,
					district_id: 1,
					name: "Курская область",
				},
				{
					id: 47,
					district_id: 3,
					name: "Ленинградская область",
				},
				{
					id: 78,
					district_id: 3,
					name: "Санкт-Петербург и пригород",
				},
				{
					id: 48,
					district_id: 1,
					name: "Липецкая область",
				},
				{
					id: 49,
					district_id: 4,
					name: "Магаданская область",
				},
				{
					id: 12,
					district_id: 7,
					name: "Республика Марий Эл",
				},
				{
					id: 13,
					district_id: 7,
					name: "Республика Мордовия",
				},
				{
					id: 50,
					district_id: 1,
					name: "Московская область",
				},
				{
					id: 77,
					district_id: 1,
					name: "Москва и пригород",
				},
				{
					id: 51,
					district_id: 3,
					name: "Мурманская область",
				},
				{
					id: 83,
					district_id: 3,
					name: "Ненецкий АО",
				},
				{
					id: 52,
					district_id: 7,
					name: "Нижегородская область",
				},
				{
					id: 53,
					district_id: 3,
					name: "Новгородская область",
				},
				{
					id: 54,
					district_id: 5,
					name: "Новосибирская область",
				},
				{
					id: 55,
					district_id: 5,
					name: "Омская область",
				},
				{
					id: 56,
					district_id: 7,
					name: "Оренбургская область",
				},
				{
					id: 57,
					district_id: 1,
					name: "Орловская область",
				},
				{
					id: 58,
					district_id: 7,
					name: "Пензенская область",
				},
				{
					id: 59,
					district_id: 7,
					name: "Пермский край",
				},
				{
					id: 25,
					district_id: 4,
					name: "Приморский край",
				},
				{
					id: 60,
					district_id: 3,
					name: "Псковская область",
				},
				{
					id: 61,
					district_id: 2,
					name: "Ростовская область",
				},
				{
					id: 62,
					district_id: 1,
					name: "Рязанская область",
				},
				{
					id: 63,
					district_id: 7,
					name: "Самарская область",
				},
				{
					id: 64,
					district_id: 7,
					name: "Саратовская область",
				},
				{
					id: 14,
					district_id: 4,
					name: "Республика Сахалин (Якутия)",
				},
				{
					id: 65,
					district_id: 4,
					name: "Сахалинская область",
				},
				{
					id: 66,
					district_id: 6,
					name: "Свердловская область",
				},
				{
					id: 15,
					district_id: 8,
					name: "Республика Северная Осетия - Алания",
				},
				{
					id: 67,
					district_id: 1,
					name: "Смоленская область",
				},
				{
					id: 26,
					district_id: 8,
					name: "Ставропольский край",
				},
				{
					id: 68,
					district_id: 1,
					name: "Тамбовская область",
				},
				{
					id: 16,
					district_id: 7,
					name: "Республика Татарстан",
				},
				{
					id: 69,
					district_id: 1,
					name: "Тверская область",
				},
				{
					id: 70,
					district_id: 5,
					name: "Томская область",
				},
				{
					id: 71,
					district_id: 1,
					name: "Тульская область",
				},
				{
					id: 17,
					district_id: 5,
					name: "Республика Тыва",
				},
				{
					id: 72,
					district_id: 6,
					name: "Тюменская область",
				},
				{
					id: 18,
					district_id: 7,
					name: "Удмуртская Республика",
				},
				{
					id: 73,
					district_id: 7,
					name: "Ульяновская область",
				},
				{
					id: 27,
					district_id: 4,
					name: "Хабаровский край",
				},
				{
					id: 19,
					district_id: 5,
					name: "Республика Хакасия",
				},
				{
					id: 86,
					district_id: 6,
					name: "Ханты-Мансийский Автономный округ",
				},
				{
					id: 74,
					district_id: 6,
					name: "Челябинская область",
				},
				{
					id: 20,
					district_id: 8,
					name: "Чеченская Республика",
				},
				{
					id: 21,
					district_id: 7,
					name: "Чувашская Республика",
				},
				{
					id: 87,
					district_id: 4,
					name: "Чукотский АО",
				},
				{
					id: 89,
					district_id: 6,
					name: "Ямало-Ненецкий АО",
				},
				{
					id: 76,
					district_id: 1,
					name: "Ярославская область",
				},
			];
			const regionInput = document.getElementById("region");
			regionInput.addEventListener("input", () => {
				let matchedRegions = regions.filter(function (region) {
					const name = region.name;
					return name.includes(regionInput.value);
				});
				if (matchedRegions.length > 0) {
					redrawList(matchedRegions, "simplebar-content");
				} else {
					redrawList(
						[
							{
								name: "Совпадений нет",
							},
						],
						"simplebar-content"
					);
				}
			});
			function redrawList(array, listClass) {
				const list = document.querySelector(`.${listClass}`);
				list.innerHTML = "";
				array.forEach((region) => {
					let div = document.createElement("div");
					div.classList = "card__item";
					div.innerHTML = region.name;
					div.addEventListener("click", () => {
						regionInput.value = div.innerHTML;
					});
					list.appendChild(div);
				});
			}
			redrawList(regions, "card__list");

			/***/
		},

		/***/ 8207: /***/ () => {
			const toggles = document.querySelectorAll(".hero__toggle");
			let activeToggle = document.querySelector(".hero__toggle-active");
			toggles.forEach((toggleEl) => {
				let control = toggleEl.querySelector(".hero__control");
				control.addEventListener("click", () => {
					if (activeToggle !== null && activeToggle !== toggleEl) {
						activeToggle.classList.remove("hero__toggle-active");
					}
					activeToggle = toggleEl;
					toggleEl.classList.toggle("hero__toggle-active");
				});
				const items = toggleEl.querySelectorAll(".hero__item");
				const valueSpan = toggleEl.querySelector(".hero__text-toggle");
				if (!valueSpan.classList.contains("hero__text-toggle-empty")) {
					valueSpan.style.width = valueSpan.clientWidth + 50 + "px";
				}
				items.forEach((item) => {
					item.addEventListener("click", () => {
						itemValue = item.getAttribute("data-value");
						toggleEl.setAttribute("data-value", itemValue);
						activeToggle.classList.toggle("hero__toggle-active");
						activeToggle = null;
						valueSpan.innerHTML = itemValue;
					});
				});
				const list = toggleEl.querySelector(".hero__list");
				if (list.scrollHeight > list.clientHeight) {
					list.style.paddingRight = "10px";
				}
			});

			/***/
		},

		/***/ 1807: /***/ (module) => {
			var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);

			module.exports = canUseDOM;

			/***/
		},

		/***/ 9662: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var isCallable = __webpack_require__(614);
			var tryToString = __webpack_require__(6330);

			var $TypeError = TypeError;

			// `Assert: IsCallable(argument) is true`
			module.exports = function (argument) {
				if (isCallable(argument)) return argument;
				throw $TypeError(tryToString(argument) + " is not a function");
			};

			/***/
		},

		/***/ 6077: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var isCallable = __webpack_require__(614);

			var $String = String;
			var $TypeError = TypeError;

			module.exports = function (argument) {
				if (typeof argument == "object" || isCallable(argument)) return argument;
				throw $TypeError("Can't set " + $String(argument) + " as a prototype");
			};

			/***/
		},

		/***/ 1223: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var wellKnownSymbol = __webpack_require__(5112);
			var create = __webpack_require__(30);
			var defineProperty = __webpack_require__(3070).f;

			var UNSCOPABLES = wellKnownSymbol("unscopables");
			var ArrayPrototype = Array.prototype;

			// Array.prototype[@@unscopables]
			// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
			if (ArrayPrototype[UNSCOPABLES] === undefined) {
				defineProperty(ArrayPrototype, UNSCOPABLES, {
					configurable: true,
					value: create(null),
				});
			}

			// add a key to Array.prototype[@@unscopables]
			module.exports = function (key) {
				ArrayPrototype[UNSCOPABLES][key] = true;
			};

			/***/
		},

		/***/ 1530: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var charAt = __webpack_require__(8710).charAt;

			// `AdvanceStringIndex` abstract operation
			// https://tc39.es/ecma262/#sec-advancestringindex
			module.exports = function (S, index, unicode) {
				return index + (unicode ? charAt(S, index).length : 1);
			};

			/***/
		},

		/***/ 5787: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var isPrototypeOf = __webpack_require__(7976);

			var $TypeError = TypeError;

			module.exports = function (it, Prototype) {
				if (isPrototypeOf(Prototype, it)) return it;
				throw $TypeError("Incorrect invocation");
			};

			/***/
		},

		/***/ 9670: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var isObject = __webpack_require__(111);

			var $String = String;
			var $TypeError = TypeError;

			// `Assert: Type(argument) is Object`
			module.exports = function (argument) {
				if (isObject(argument)) return argument;
				throw $TypeError($String(argument) + " is not an object");
			};

			/***/
		},

		/***/ 7556: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
			var fails = __webpack_require__(7293);

			module.exports = fails(function () {
				if (typeof ArrayBuffer == "function") {
					var buffer = new ArrayBuffer(8);
					// eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
					if (Object.isExtensible(buffer)) Object.defineProperty(buffer, "a", { value: 8 });
				}
			});

			/***/
		},

		/***/ 8533: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var $forEach = __webpack_require__(2092).forEach;
			var arrayMethodIsStrict = __webpack_require__(9341);

			var STRICT_METHOD = arrayMethodIsStrict("forEach");

			// `Array.prototype.forEach` method implementation
			// https://tc39.es/ecma262/#sec-array.prototype.foreach
			module.exports = !STRICT_METHOD
				? function forEach(callbackfn /* , thisArg */) {
						return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
						// eslint-disable-next-line es/no-array-prototype-foreach -- safe
				  }
				: [].forEach;

			/***/
		},

		/***/ 1318: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var toIndexedObject = __webpack_require__(5656);
			var toAbsoluteIndex = __webpack_require__(1400);
			var lengthOfArrayLike = __webpack_require__(6244);

			// `Array.prototype.{ indexOf, includes }` methods implementation
			var createMethod = function (IS_INCLUDES) {
				return function ($this, el, fromIndex) {
					var O = toIndexedObject($this);
					var length = lengthOfArrayLike(O);
					var index = toAbsoluteIndex(fromIndex, length);
					var value;
					// Array#includes uses SameValueZero equality algorithm
					// eslint-disable-next-line no-self-compare -- NaN check
					if (IS_INCLUDES && el !== el)
						while (length > index) {
							value = O[index++];
							// eslint-disable-next-line no-self-compare -- NaN check
							if (value !== value) return true;
							// Array#indexOf ignores holes, Array#includes - not
						}
					else
						for (; length > index; index++) {
							if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
						}
					return !IS_INCLUDES && -1;
				};
			};

			module.exports = {
				// `Array.prototype.includes` method
				// https://tc39.es/ecma262/#sec-array.prototype.includes
				includes: createMethod(true),
				// `Array.prototype.indexOf` method
				// https://tc39.es/ecma262/#sec-array.prototype.indexof
				indexOf: createMethod(false),
			};

			/***/
		},

		/***/ 2092: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var bind = __webpack_require__(9974);
			var uncurryThis = __webpack_require__(1702);
			var IndexedObject = __webpack_require__(8361);
			var toObject = __webpack_require__(7908);
			var lengthOfArrayLike = __webpack_require__(6244);
			var arraySpeciesCreate = __webpack_require__(5417);

			var push = uncurryThis([].push);

			// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
			var createMethod = function (TYPE) {
				var IS_MAP = TYPE === 1;
				var IS_FILTER = TYPE === 2;
				var IS_SOME = TYPE === 3;
				var IS_EVERY = TYPE === 4;
				var IS_FIND_INDEX = TYPE === 6;
				var IS_FILTER_REJECT = TYPE === 7;
				var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
				return function ($this, callbackfn, that, specificCreate) {
					var O = toObject($this);
					var self = IndexedObject(O);
					var boundFunction = bind(callbackfn, that);
					var length = lengthOfArrayLike(self);
					var index = 0;
					var create = specificCreate || arraySpeciesCreate;
					var target = IS_MAP
						? create($this, length)
						: IS_FILTER || IS_FILTER_REJECT
						? create($this, 0)
						: undefined;
					var value, result;
					for (; length > index; index++)
						if (NO_HOLES || index in self) {
							value = self[index];
							result = boundFunction(value, index, O);
							if (TYPE) {
								if (IS_MAP) target[index] = result; // map
								else if (result)
									switch (TYPE) {
										case 3:
											return true; // some
										case 5:
											return value; // find
										case 6:
											return index; // findIndex
										case 2:
											push(target, value); // filter
									}
								else
									switch (TYPE) {
										case 4:
											return false; // every
										case 7:
											push(target, value); // filterReject
									}
							}
						}
					return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
				};
			};

			module.exports = {
				// `Array.prototype.forEach` method
				// https://tc39.es/ecma262/#sec-array.prototype.foreach
				forEach: createMethod(0),
				// `Array.prototype.map` method
				// https://tc39.es/ecma262/#sec-array.prototype.map
				map: createMethod(1),
				// `Array.prototype.filter` method
				// https://tc39.es/ecma262/#sec-array.prototype.filter
				filter: createMethod(2),
				// `Array.prototype.some` method
				// https://tc39.es/ecma262/#sec-array.prototype.some
				some: createMethod(3),
				// `Array.prototype.every` method
				// https://tc39.es/ecma262/#sec-array.prototype.every
				every: createMethod(4),
				// `Array.prototype.find` method
				// https://tc39.es/ecma262/#sec-array.prototype.find
				find: createMethod(5),
				// `Array.prototype.findIndex` method
				// https://tc39.es/ecma262/#sec-array.prototype.findIndex
				findIndex: createMethod(6),
				// `Array.prototype.filterReject` method
				// https://github.com/tc39/proposal-array-filtering
				filterReject: createMethod(7),
			};

			/***/
		},

		/***/ 1194: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var fails = __webpack_require__(7293);
			var wellKnownSymbol = __webpack_require__(5112);
			var V8_VERSION = __webpack_require__(7392);

			var SPECIES = wellKnownSymbol("species");

			module.exports = function (METHOD_NAME) {
				// We can't use this feature detection in V8 since it causes
				// deoptimization and serious performance degradation
				// https://github.com/zloirock/core-js/issues/677
				return (
					V8_VERSION >= 51 ||
					!fails(function () {
						var array = [];
						var constructor = (array.constructor = {});
						constructor[SPECIES] = function () {
							return { foo: 1 };
						};
						return array[METHOD_NAME](Boolean).foo !== 1;
					})
				);
			};

			/***/
		},

		/***/ 9341: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var fails = __webpack_require__(7293);

			module.exports = function (METHOD_NAME, argument) {
				var method = [][METHOD_NAME];
				return (
					!!method &&
					fails(function () {
						// eslint-disable-next-line no-useless-call -- required for testing
						method.call(
							null,
							argument ||
								function () {
									return 1;
								},
							1
						);
					})
				);
			};

			/***/
		},

		/***/ 3671: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var aCallable = __webpack_require__(9662);
			var toObject = __webpack_require__(7908);
			var IndexedObject = __webpack_require__(8361);
			var lengthOfArrayLike = __webpack_require__(6244);

			var $TypeError = TypeError;

			// `Array.prototype.{ reduce, reduceRight }` methods implementation
			var createMethod = function (IS_RIGHT) {
				return function (that, callbackfn, argumentsLength, memo) {
					aCallable(callbackfn);
					var O = toObject(that);
					var self = IndexedObject(O);
					var length = lengthOfArrayLike(O);
					var index = IS_RIGHT ? length - 1 : 0;
					var i = IS_RIGHT ? -1 : 1;
					if (argumentsLength < 2)
						while (true) {
							if (index in self) {
								memo = self[index];
								index += i;
								break;
							}
							index += i;
							if (IS_RIGHT ? index < 0 : length <= index) {
								throw $TypeError("Reduce of empty array with no initial value");
							}
						}
					for (; IS_RIGHT ? index >= 0 : length > index; index += i)
						if (index in self) {
							memo = callbackfn(memo, self[index], index, O);
						}
					return memo;
				};
			};

			module.exports = {
				// `Array.prototype.reduce` method
				// https://tc39.es/ecma262/#sec-array.prototype.reduce
				left: createMethod(false),
				// `Array.prototype.reduceRight` method
				// https://tc39.es/ecma262/#sec-array.prototype.reduceright
				right: createMethod(true),
			};

			/***/
		},

		/***/ 1589: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var toAbsoluteIndex = __webpack_require__(1400);
			var lengthOfArrayLike = __webpack_require__(6244);
			var createProperty = __webpack_require__(6135);

			var $Array = Array;
			var max = Math.max;

			module.exports = function (O, start, end) {
				var length = lengthOfArrayLike(O);
				var k = toAbsoluteIndex(start, length);
				var fin = toAbsoluteIndex(end === undefined ? length : end, length);
				var result = $Array(max(fin - k, 0));
				var n = 0;
				for (; k < fin; k++, n++) createProperty(result, n, O[k]);
				result.length = n;
				return result;
			};

			/***/
		},

		/***/ 7475: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var isArray = __webpack_require__(3157);
			var isConstructor = __webpack_require__(4411);
			var isObject = __webpack_require__(111);
			var wellKnownSymbol = __webpack_require__(5112);

			var SPECIES = wellKnownSymbol("species");
			var $Array = Array;

			// a part of `ArraySpeciesCreate` abstract operation
			// https://tc39.es/ecma262/#sec-arrayspeciescreate
			module.exports = function (originalArray) {
				var C;
				if (isArray(originalArray)) {
					C = originalArray.constructor;
					// cross-realm fallback
					if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
					else if (isObject(C)) {
						C = C[SPECIES];
						if (C === null) C = undefined;
					}
				}
				return C === undefined ? $Array : C;
			};

			/***/
		},

		/***/ 5417: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var arraySpeciesConstructor = __webpack_require__(7475);

			// `ArraySpeciesCreate` abstract operation
			// https://tc39.es/ecma262/#sec-arrayspeciescreate
			module.exports = function (originalArray, length) {
				return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
			};

			/***/
		},

		/***/ 7072: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var wellKnownSymbol = __webpack_require__(5112);

			var ITERATOR = wellKnownSymbol("iterator");
			var SAFE_CLOSING = false;

			try {
				var called = 0;
				var iteratorWithReturn = {
					next: function () {
						return { done: !!called++ };
					},
					return: function () {
						SAFE_CLOSING = true;
					},
				};
				iteratorWithReturn[ITERATOR] = function () {
					return this;
				};
				// eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
				Array.from(iteratorWithReturn, function () {
					throw 2;
				});
			} catch (error) {
				/* empty */
			}

			module.exports = function (exec, SKIP_CLOSING) {
				try {
					if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
				} catch (error) {
					return false;
				} // workaround of old WebKit + `eval` bug
				var ITERATION_SUPPORT = false;
				try {
					var object = {};
					object[ITERATOR] = function () {
						return {
							next: function () {
								return { done: (ITERATION_SUPPORT = true) };
							},
						};
					};
					exec(object);
				} catch (error) {
					/* empty */
				}
				return ITERATION_SUPPORT;
			};

			/***/
		},

		/***/ 4326: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);

			var toString = uncurryThis({}.toString);
			var stringSlice = uncurryThis("".slice);

			module.exports = function (it) {
				return stringSlice(toString(it), 8, -1);
			};

			/***/
		},

		/***/ 648: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
			var isCallable = __webpack_require__(614);
			var classofRaw = __webpack_require__(4326);
			var wellKnownSymbol = __webpack_require__(5112);

			var TO_STRING_TAG = wellKnownSymbol("toStringTag");
			var $Object = Object;

			// ES3 wrong here
			var CORRECT_ARGUMENTS =
				classofRaw(
					(function () {
						return arguments;
					})()
				) === "Arguments";

			// fallback for IE11 Script Access Denied error
			var tryGet = function (it, key) {
				try {
					return it[key];
				} catch (error) {
					/* empty */
				}
			};

			// getting tag from ES6+ `Object.prototype.toString`
			module.exports = TO_STRING_TAG_SUPPORT
				? classofRaw
				: function (it) {
						var O, tag, result;
						return it === undefined
							? "Undefined"
							: it === null
							? "Null"
							: // @@toStringTag case
							typeof (tag = tryGet((O = $Object(it)), TO_STRING_TAG)) == "string"
							? tag
							: // builtinTag case
							CORRECT_ARGUMENTS
							? classofRaw(O)
							: // ES3 arguments fallback
							(result = classofRaw(O)) === "Object" && isCallable(O.callee)
							? "Arguments"
							: result;
				  };

			/***/
		},

		/***/ 9320: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);
			var defineBuiltIns = __webpack_require__(9190);
			var getWeakData = __webpack_require__(2423).getWeakData;
			var anInstance = __webpack_require__(5787);
			var anObject = __webpack_require__(9670);
			var isNullOrUndefined = __webpack_require__(8554);
			var isObject = __webpack_require__(111);
			var iterate = __webpack_require__(408);
			var ArrayIterationModule = __webpack_require__(2092);
			var hasOwn = __webpack_require__(2597);
			var InternalStateModule = __webpack_require__(9909);

			var setInternalState = InternalStateModule.set;
			var internalStateGetterFor = InternalStateModule.getterFor;
			var find = ArrayIterationModule.find;
			var findIndex = ArrayIterationModule.findIndex;
			var splice = uncurryThis([].splice);
			var id = 0;

			// fallback for uncaught frozen keys
			var uncaughtFrozenStore = function (state) {
				return state.frozen || (state.frozen = new UncaughtFrozenStore());
			};

			var UncaughtFrozenStore = function () {
				this.entries = [];
			};

			var findUncaughtFrozen = function (store, key) {
				return find(store.entries, function (it) {
					return it[0] === key;
				});
			};

			UncaughtFrozenStore.prototype = {
				get: function (key) {
					var entry = findUncaughtFrozen(this, key);
					if (entry) return entry[1];
				},
				has: function (key) {
					return !!findUncaughtFrozen(this, key);
				},
				set: function (key, value) {
					var entry = findUncaughtFrozen(this, key);
					if (entry) entry[1] = value;
					else this.entries.push([key, value]);
				},
				delete: function (key) {
					var index = findIndex(this.entries, function (it) {
						return it[0] === key;
					});
					if (~index) splice(this.entries, index, 1);
					return !!~index;
				},
			};

			module.exports = {
				getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
					var Constructor = wrapper(function (that, iterable) {
						anInstance(that, Prototype);
						setInternalState(that, {
							type: CONSTRUCTOR_NAME,
							id: id++,
							frozen: undefined,
						});
						if (!isNullOrUndefined(iterable))
							iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
					});

					var Prototype = Constructor.prototype;

					var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

					var define = function (that, key, value) {
						var state = getInternalState(that);
						var data = getWeakData(anObject(key), true);
						if (data === true) uncaughtFrozenStore(state).set(key, value);
						else data[state.id] = value;
						return that;
					};

					defineBuiltIns(Prototype, {
						// `{ WeakMap, WeakSet }.prototype.delete(key)` methods
						// https://tc39.es/ecma262/#sec-weakmap.prototype.delete
						// https://tc39.es/ecma262/#sec-weakset.prototype.delete
						delete: function (key) {
							var state = getInternalState(this);
							if (!isObject(key)) return false;
							var data = getWeakData(key);
							if (data === true) return uncaughtFrozenStore(state)["delete"](key);
							return data && hasOwn(data, state.id) && delete data[state.id];
						},
						// `{ WeakMap, WeakSet }.prototype.has(key)` methods
						// https://tc39.es/ecma262/#sec-weakmap.prototype.has
						// https://tc39.es/ecma262/#sec-weakset.prototype.has
						has: function has(key) {
							var state = getInternalState(this);
							if (!isObject(key)) return false;
							var data = getWeakData(key);
							if (data === true) return uncaughtFrozenStore(state).has(key);
							return data && hasOwn(data, state.id);
						},
					});

					defineBuiltIns(
						Prototype,
						IS_MAP
							? {
									// `WeakMap.prototype.get(key)` method
									// https://tc39.es/ecma262/#sec-weakmap.prototype.get
									get: function get(key) {
										var state = getInternalState(this);
										if (isObject(key)) {
											var data = getWeakData(key);
											if (data === true) return uncaughtFrozenStore(state).get(key);
											return data ? data[state.id] : undefined;
										}
									},
									// `WeakMap.prototype.set(key, value)` method
									// https://tc39.es/ecma262/#sec-weakmap.prototype.set
									set: function set(key, value) {
										return define(this, key, value);
									},
							  }
							: {
									// `WeakSet.prototype.add(value)` method
									// https://tc39.es/ecma262/#sec-weakset.prototype.add
									add: function add(value) {
										return define(this, value, true);
									},
							  }
					);

					return Constructor;
				},
			};

			/***/
		},

		/***/ 7710: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var $ = __webpack_require__(2109);
			var global = __webpack_require__(7854);
			var uncurryThis = __webpack_require__(1702);
			var isForced = __webpack_require__(4705);
			var defineBuiltIn = __webpack_require__(8052);
			var InternalMetadataModule = __webpack_require__(2423);
			var iterate = __webpack_require__(408);
			var anInstance = __webpack_require__(5787);
			var isCallable = __webpack_require__(614);
			var isNullOrUndefined = __webpack_require__(8554);
			var isObject = __webpack_require__(111);
			var fails = __webpack_require__(7293);
			var checkCorrectnessOfIteration = __webpack_require__(7072);
			var setToStringTag = __webpack_require__(8003);
			var inheritIfRequired = __webpack_require__(9587);

			module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
				var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
				var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
				var ADDER = IS_MAP ? "set" : "add";
				var NativeConstructor = global[CONSTRUCTOR_NAME];
				var NativePrototype = NativeConstructor && NativeConstructor.prototype;
				var Constructor = NativeConstructor;
				var exported = {};

				var fixMethod = function (KEY) {
					var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
					defineBuiltIn(
						NativePrototype,
						KEY,
						KEY === "add"
							? function add(value) {
									uncurriedNativeMethod(this, value === 0 ? 0 : value);
									return this;
							  }
							: KEY === "delete"
							? function (key) {
									return IS_WEAK && !isObject(key)
										? false
										: uncurriedNativeMethod(this, key === 0 ? 0 : key);
							  }
							: KEY === "get"
							? function get(key) {
									return IS_WEAK && !isObject(key)
										? undefined
										: uncurriedNativeMethod(this, key === 0 ? 0 : key);
							  }
							: KEY === "has"
							? function has(key) {
									return IS_WEAK && !isObject(key)
										? false
										: uncurriedNativeMethod(this, key === 0 ? 0 : key);
							  }
							: function set(key, value) {
									uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
									return this;
							  }
					);
				};

				var REPLACE = isForced(
					CONSTRUCTOR_NAME,
					!isCallable(NativeConstructor) ||
						!(
							IS_WEAK ||
							(NativePrototype.forEach &&
								!fails(function () {
									new NativeConstructor().entries().next();
								}))
						)
				);

				if (REPLACE) {
					// create collection constructor
					Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
					InternalMetadataModule.enable();
				} else if (isForced(CONSTRUCTOR_NAME, true)) {
					var instance = new Constructor();
					// early implementations not supports chaining
					var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
					// V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
					var THROWS_ON_PRIMITIVES = fails(function () {
						instance.has(1);
					});
					// most early implementations doesn't supports iterables, most modern - not close it correctly
					// eslint-disable-next-line no-new -- required for testing
					var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
						new NativeConstructor(iterable);
					});
					// for early implementations -0 and +0 not the same
					var BUGGY_ZERO =
						!IS_WEAK &&
						fails(function () {
							// V8 ~ Chromium 42- fails only with 5+ elements
							var $instance = new NativeConstructor();
							var index = 5;
							while (index--) $instance[ADDER](index, index);
							return !$instance.has(-0);
						});

					if (!ACCEPT_ITERABLES) {
						Constructor = wrapper(function (dummy, iterable) {
							anInstance(dummy, NativePrototype);
							var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
							if (!isNullOrUndefined(iterable))
								iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
							return that;
						});
						Constructor.prototype = NativePrototype;
						NativePrototype.constructor = Constructor;
					}

					if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
						fixMethod("delete");
						fixMethod("has");
						IS_MAP && fixMethod("get");
					}

					if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

					// weak collections should not contains .clear method
					if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
				}

				exported[CONSTRUCTOR_NAME] = Constructor;
				$({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

				setToStringTag(Constructor, CONSTRUCTOR_NAME);

				if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

				return Constructor;
			};

			/***/
		},

		/***/ 9920: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var hasOwn = __webpack_require__(2597);
			var ownKeys = __webpack_require__(3887);
			var getOwnPropertyDescriptorModule = __webpack_require__(1236);
			var definePropertyModule = __webpack_require__(3070);

			module.exports = function (target, source, exceptions) {
				var keys = ownKeys(source);
				var defineProperty = definePropertyModule.f;
				var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
				for (var i = 0; i < keys.length; i++) {
					var key = keys[i];
					if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
						defineProperty(target, key, getOwnPropertyDescriptor(source, key));
					}
				}
			};

			/***/
		},

		/***/ 8544: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var fails = __webpack_require__(7293);

			module.exports = !fails(function () {
				function F() {
					/* empty */
				}
				F.prototype.constructor = null;
				// eslint-disable-next-line es/no-object-getprototypeof -- required for testing
				return Object.getPrototypeOf(new F()) !== F.prototype;
			});

			/***/
		},

		/***/ 6178: /***/ (module) => {
			"use strict";

			// `CreateIterResultObject` abstract operation
			// https://tc39.es/ecma262/#sec-createiterresultobject
			module.exports = function (value, done) {
				return { value: value, done: done };
			};

			/***/
		},

		/***/ 8880: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var DESCRIPTORS = __webpack_require__(9781);
			var definePropertyModule = __webpack_require__(3070);
			var createPropertyDescriptor = __webpack_require__(9114);

			module.exports = DESCRIPTORS
				? function (object, key, value) {
						return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
				  }
				: function (object, key, value) {
						object[key] = value;
						return object;
				  };

			/***/
		},

		/***/ 9114: /***/ (module) => {
			"use strict";

			module.exports = function (bitmap, value) {
				return {
					enumerable: !(bitmap & 1),
					configurable: !(bitmap & 2),
					writable: !(bitmap & 4),
					value: value,
				};
			};

			/***/
		},

		/***/ 6135: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var toPropertyKey = __webpack_require__(4948);
			var definePropertyModule = __webpack_require__(3070);
			var createPropertyDescriptor = __webpack_require__(9114);

			module.exports = function (object, key, value) {
				var propertyKey = toPropertyKey(key);
				if (propertyKey in object)
					definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
				else object[propertyKey] = value;
			};

			/***/
		},

		/***/ 7045: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var makeBuiltIn = __webpack_require__(6339);
			var defineProperty = __webpack_require__(3070);

			module.exports = function (target, name, descriptor) {
				if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
				if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
				return defineProperty.f(target, name, descriptor);
			};

			/***/
		},

		/***/ 8052: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var isCallable = __webpack_require__(614);
			var definePropertyModule = __webpack_require__(3070);
			var makeBuiltIn = __webpack_require__(6339);
			var defineGlobalProperty = __webpack_require__(3072);

			module.exports = function (O, key, value, options) {
				if (!options) options = {};
				var simple = options.enumerable;
				var name = options.name !== undefined ? options.name : key;
				if (isCallable(value)) makeBuiltIn(value, name, options);
				if (options.global) {
					if (simple) O[key] = value;
					else defineGlobalProperty(key, value);
				} else {
					try {
						if (!options.unsafe) delete O[key];
						else if (O[key]) simple = true;
					} catch (error) {
						/* empty */
					}
					if (simple) O[key] = value;
					else
						definePropertyModule.f(O, key, {
							value: value,
							enumerable: false,
							configurable: !options.nonConfigurable,
							writable: !options.nonWritable,
						});
				}
				return O;
			};

			/***/
		},

		/***/ 9190: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var defineBuiltIn = __webpack_require__(8052);

			module.exports = function (target, src, options) {
				for (var key in src) defineBuiltIn(target, key, src[key], options);
				return target;
			};

			/***/
		},

		/***/ 3072: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var global = __webpack_require__(7854);

			// eslint-disable-next-line es/no-object-defineproperty -- safe
			var defineProperty = Object.defineProperty;

			module.exports = function (key, value) {
				try {
					defineProperty(global, key, { value: value, configurable: true, writable: true });
				} catch (error) {
					global[key] = value;
				}
				return value;
			};

			/***/
		},

		/***/ 9781: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var fails = __webpack_require__(7293);

			// Detect IE8's incomplete defineProperty implementation
			module.exports = !fails(function () {
				// eslint-disable-next-line es/no-object-defineproperty -- required for testing
				return (
					Object.defineProperty({}, 1, {
						get: function () {
							return 7;
						},
					})[1] !== 7
				);
			});

			/***/
		},

		/***/ 4154: /***/ (module) => {
			"use strict";

			var documentAll = typeof document == "object" && document.all;

			// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
			// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
			var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;

			module.exports = {
				all: documentAll,
				IS_HTMLDDA: IS_HTMLDDA,
			};

			/***/
		},

		/***/ 317: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var global = __webpack_require__(7854);
			var isObject = __webpack_require__(111);

			var document = global.document;
			// typeof document.createElement is 'object' in old IE
			var EXISTS = isObject(document) && isObject(document.createElement);

			module.exports = function (it) {
				return EXISTS ? document.createElement(it) : {};
			};

			/***/
		},

		/***/ 8324: /***/ (module) => {
			"use strict";

			// iterable DOM collections
			// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
			module.exports = {
				CSSRuleList: 0,
				CSSStyleDeclaration: 0,
				CSSValueList: 0,
				ClientRectList: 0,
				DOMRectList: 0,
				DOMStringList: 0,
				DOMTokenList: 1,
				DataTransferItemList: 0,
				FileList: 0,
				HTMLAllCollection: 0,
				HTMLCollection: 0,
				HTMLFormElement: 0,
				HTMLSelectElement: 0,
				MediaList: 0,
				MimeTypeArray: 0,
				NamedNodeMap: 0,
				NodeList: 1,
				PaintRequestList: 0,
				Plugin: 0,
				PluginArray: 0,
				SVGLengthList: 0,
				SVGNumberList: 0,
				SVGPathSegList: 0,
				SVGPointList: 0,
				SVGStringList: 0,
				SVGTransformList: 0,
				SourceBufferList: 0,
				StyleSheetList: 0,
				TextTrackCueList: 0,
				TextTrackList: 0,
				TouchList: 0,
			};

			/***/
		},

		/***/ 8509: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
			var documentCreateElement = __webpack_require__(317);

			var classList = documentCreateElement("span").classList;
			var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

			module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

			/***/
		},

		/***/ 5268: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var global = __webpack_require__(7854);
			var classof = __webpack_require__(4326);

			module.exports = classof(global.process) === "process";

			/***/
		},

		/***/ 8113: /***/ (module) => {
			"use strict";

			module.exports = (typeof navigator != "undefined" && String(navigator.userAgent)) || "";

			/***/
		},

		/***/ 7392: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var global = __webpack_require__(7854);
			var userAgent = __webpack_require__(8113);

			var process = global.process;
			var Deno = global.Deno;
			var versions = (process && process.versions) || (Deno && Deno.version);
			var v8 = versions && versions.v8;
			var match, version;

			if (v8) {
				match = v8.split(".");
				// in old Chrome, versions of V8 isn't V8 = Chrome / 10
				// but their correct versions are not interesting for us
				version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
			}

			// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
			// so check `userAgent` even if `.v8` exists, but 0
			if (!version && userAgent) {
				match = userAgent.match(/Edge\/(\d+)/);
				if (!match || match[1] >= 74) {
					match = userAgent.match(/Chrome\/(\d+)/);
					if (match) version = +match[1];
				}
			}

			module.exports = version;

			/***/
		},

		/***/ 748: /***/ (module) => {
			"use strict";

			// IE8- don't enum bug keys
			module.exports = [
				"constructor",
				"hasOwnProperty",
				"isPrototypeOf",
				"propertyIsEnumerable",
				"toLocaleString",
				"toString",
				"valueOf",
			];

			/***/
		},

		/***/ 2109: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var global = __webpack_require__(7854);
			var getOwnPropertyDescriptor = __webpack_require__(1236).f;
			var createNonEnumerableProperty = __webpack_require__(8880);
			var defineBuiltIn = __webpack_require__(8052);
			var defineGlobalProperty = __webpack_require__(3072);
			var copyConstructorProperties = __webpack_require__(9920);
			var isForced = __webpack_require__(4705);

			/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
			module.exports = function (options, source) {
				var TARGET = options.target;
				var GLOBAL = options.global;
				var STATIC = options.stat;
				var FORCED, target, key, targetProperty, sourceProperty, descriptor;
				if (GLOBAL) {
					target = global;
				} else if (STATIC) {
					target = global[TARGET] || defineGlobalProperty(TARGET, {});
				} else {
					target = (global[TARGET] || {}).prototype;
				}
				if (target)
					for (key in source) {
						sourceProperty = source[key];
						if (options.dontCallGetSet) {
							descriptor = getOwnPropertyDescriptor(target, key);
							targetProperty = descriptor && descriptor.value;
						} else targetProperty = target[key];
						FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
						// contained in target
						if (!FORCED && targetProperty !== undefined) {
							if (typeof sourceProperty == typeof targetProperty) continue;
							copyConstructorProperties(sourceProperty, targetProperty);
						}
						// add a flag to not completely full polyfills
						if (options.sham || (targetProperty && targetProperty.sham)) {
							createNonEnumerableProperty(sourceProperty, "sham", true);
						}
						defineBuiltIn(target, key, sourceProperty, options);
					}
			};

			/***/
		},

		/***/ 7293: /***/ (module) => {
			"use strict";

			module.exports = function (exec) {
				try {
					return !!exec();
				} catch (error) {
					return true;
				}
			};

			/***/
		},

		/***/ 7007: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			// TODO: Remove from `core-js@4` since it's moved to entry points
			__webpack_require__(4916);
			var uncurryThis = __webpack_require__(1470);
			var defineBuiltIn = __webpack_require__(8052);
			var regexpExec = __webpack_require__(2261);
			var fails = __webpack_require__(7293);
			var wellKnownSymbol = __webpack_require__(5112);
			var createNonEnumerableProperty = __webpack_require__(8880);

			var SPECIES = wellKnownSymbol("species");
			var RegExpPrototype = RegExp.prototype;

			module.exports = function (KEY, exec, FORCED, SHAM) {
				var SYMBOL = wellKnownSymbol(KEY);

				var DELEGATES_TO_SYMBOL = !fails(function () {
					// String methods call symbol-named RegEp methods
					var O = {};
					O[SYMBOL] = function () {
						return 7;
					};
					return ""[KEY](O) !== 7;
				});

				var DELEGATES_TO_EXEC =
					DELEGATES_TO_SYMBOL &&
					!fails(function () {
						// Symbol-named RegExp methods call .exec
						var execCalled = false;
						var re = /a/;

						if (KEY === "split") {
							// We can't use real regex here since it causes deoptimization
							// and serious performance degradation in V8
							// https://github.com/zloirock/core-js/issues/306
							re = {};
							// RegExp[@@split] doesn't call the regex's exec method, but first creates
							// a new one. We need to return the patched regex when creating the new one.
							re.constructor = {};
							re.constructor[SPECIES] = function () {
								return re;
							};
							re.flags = "";
							re[SYMBOL] = /./[SYMBOL];
						}

						re.exec = function () {
							execCalled = true;
							return null;
						};

						re[SYMBOL]("");
						return !execCalled;
					});

				if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
					var uncurriedNativeRegExpMethod = uncurryThis(/./[SYMBOL]);
					var methods = exec(SYMBOL, ""[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
						var uncurriedNativeMethod = uncurryThis(nativeMethod);
						var $exec = regexp.exec;
						if ($exec === regexpExec || $exec === RegExpPrototype.exec) {
							if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
								// The native String method already delegates to @@method (this
								// polyfilled function), leasing to infinite recursion.
								// We avoid it by directly calling the native @@method method.
								return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
							}
							return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
						}
						return { done: false };
					});

					defineBuiltIn(String.prototype, KEY, methods[0]);
					defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
				}

				if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], "sham", true);
			};

			/***/
		},

		/***/ 6677: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var fails = __webpack_require__(7293);

			module.exports = !fails(function () {
				// eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
				return Object.isExtensible(Object.preventExtensions({}));
			});

			/***/
		},

		/***/ 2104: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var NATIVE_BIND = __webpack_require__(4374);

			var FunctionPrototype = Function.prototype;
			var apply = FunctionPrototype.apply;
			var call = FunctionPrototype.call;

			// eslint-disable-next-line es/no-reflect -- safe
			module.exports =
				(typeof Reflect == "object" && Reflect.apply) ||
				(NATIVE_BIND
					? call.bind(apply)
					: function () {
							return call.apply(apply, arguments);
					  });

			/***/
		},

		/***/ 9974: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1470);
			var aCallable = __webpack_require__(9662);
			var NATIVE_BIND = __webpack_require__(4374);

			var bind = uncurryThis(uncurryThis.bind);

			// optional / simple context binding
			module.exports = function (fn, that) {
				aCallable(fn);
				return that === undefined
					? fn
					: NATIVE_BIND
					? bind(fn, that)
					: function (/* ...args */) {
							return fn.apply(that, arguments);
					  };
			};

			/***/
		},

		/***/ 4374: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var fails = __webpack_require__(7293);

			module.exports = !fails(function () {
				// eslint-disable-next-line es/no-function-prototype-bind -- safe
				var test = function () {
					/* empty */
				}.bind();
				// eslint-disable-next-line no-prototype-builtins -- safe
				return typeof test != "function" || test.hasOwnProperty("prototype");
			});

			/***/
		},

		/***/ 6916: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var NATIVE_BIND = __webpack_require__(4374);

			var call = Function.prototype.call;

			module.exports = NATIVE_BIND
				? call.bind(call)
				: function () {
						return call.apply(call, arguments);
				  };

			/***/
		},

		/***/ 6530: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var DESCRIPTORS = __webpack_require__(9781);
			var hasOwn = __webpack_require__(2597);

			var FunctionPrototype = Function.prototype;
			// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
			var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

			var EXISTS = hasOwn(FunctionPrototype, "name");
			// additional protection from minified / mangled / dropped function names
			var PROPER =
				EXISTS &&
				function something() {
					/* empty */
				}.name === "something";
			var CONFIGURABLE =
				EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable));

			module.exports = {
				EXISTS: EXISTS,
				PROPER: PROPER,
				CONFIGURABLE: CONFIGURABLE,
			};

			/***/
		},

		/***/ 5668: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);
			var aCallable = __webpack_require__(9662);

			module.exports = function (object, key, method) {
				try {
					// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
					return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
				} catch (error) {
					/* empty */
				}
			};

			/***/
		},

		/***/ 1470: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var classofRaw = __webpack_require__(4326);
			var uncurryThis = __webpack_require__(1702);

			module.exports = function (fn) {
				// Nashorn bug:
				//   https://github.com/zloirock/core-js/issues/1128
				//   https://github.com/zloirock/core-js/issues/1130
				if (classofRaw(fn) === "Function") return uncurryThis(fn);
			};

			/***/
		},

		/***/ 1702: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var NATIVE_BIND = __webpack_require__(4374);

			var FunctionPrototype = Function.prototype;
			var call = FunctionPrototype.call;
			var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

			module.exports = NATIVE_BIND
				? uncurryThisWithBind
				: function (fn) {
						return function () {
							return call.apply(fn, arguments);
						};
				  };

			/***/
		},

		/***/ 5005: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var global = __webpack_require__(7854);
			var isCallable = __webpack_require__(614);

			var aFunction = function (argument) {
				return isCallable(argument) ? argument : undefined;
			};

			module.exports = function (namespace, method) {
				return arguments.length < 2
					? aFunction(global[namespace])
					: global[namespace] && global[namespace][method];
			};

			/***/
		},

		/***/ 1246: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var classof = __webpack_require__(648);
			var getMethod = __webpack_require__(8173);
			var isNullOrUndefined = __webpack_require__(8554);
			var Iterators = __webpack_require__(7497);
			var wellKnownSymbol = __webpack_require__(5112);

			var ITERATOR = wellKnownSymbol("iterator");

			module.exports = function (it) {
				if (!isNullOrUndefined(it))
					return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
			};

			/***/
		},

		/***/ 4121: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var call = __webpack_require__(6916);
			var aCallable = __webpack_require__(9662);
			var anObject = __webpack_require__(9670);
			var tryToString = __webpack_require__(6330);
			var getIteratorMethod = __webpack_require__(1246);

			var $TypeError = TypeError;

			module.exports = function (argument, usingIterator) {
				var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
				if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
				throw $TypeError(tryToString(argument) + " is not iterable");
			};

			/***/
		},

		/***/ 8173: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var aCallable = __webpack_require__(9662);
			var isNullOrUndefined = __webpack_require__(8554);

			// `GetMethod` abstract operation
			// https://tc39.es/ecma262/#sec-getmethod
			module.exports = function (V, P) {
				var func = V[P];
				return isNullOrUndefined(func) ? undefined : aCallable(func);
			};

			/***/
		},

		/***/ 647: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);
			var toObject = __webpack_require__(7908);

			var floor = Math.floor;
			var charAt = uncurryThis("".charAt);
			var replace = uncurryThis("".replace);
			var stringSlice = uncurryThis("".slice);
			// eslint-disable-next-line redos/no-vulnerable -- safe
			var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
			var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

			// `GetSubstitution` abstract operation
			// https://tc39.es/ecma262/#sec-getsubstitution
			module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
				var tailPos = position + matched.length;
				var m = captures.length;
				var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
				if (namedCaptures !== undefined) {
					namedCaptures = toObject(namedCaptures);
					symbols = SUBSTITUTION_SYMBOLS;
				}
				return replace(replacement, symbols, function (match, ch) {
					var capture;
					switch (charAt(ch, 0)) {
						case "$":
							return "$";
						case "&":
							return matched;
						case "`":
							return stringSlice(str, 0, position);
						case "'":
							return stringSlice(str, tailPos);
						case "<":
							capture = namedCaptures[stringSlice(ch, 1, -1)];
							break;
						default: // \d\d?
							var n = +ch;
							if (n === 0) return match;
							if (n > m) {
								var f = floor(n / 10);
								if (f === 0) return match;
								if (f <= m)
									return captures[f - 1] === undefined
										? charAt(ch, 1)
										: captures[f - 1] + charAt(ch, 1);
								return match;
							}
							capture = captures[n - 1];
					}
					return capture === undefined ? "" : capture;
				});
			};

			/***/
		},

		/***/ 7854: /***/ function (module, __unused_webpack_exports, __webpack_require__) {
			"use strict";

			var check = function (it) {
				return it && it.Math === Math && it;
			};

			// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
			module.exports =
				// eslint-disable-next-line es/no-global-this -- safe
				check(typeof globalThis == "object" && globalThis) ||
				check(typeof window == "object" && window) ||
				// eslint-disable-next-line no-restricted-globals -- safe
				check(typeof self == "object" && self) ||
				check(typeof __webpack_require__.g == "object" && __webpack_require__.g) ||
				// eslint-disable-next-line no-new-func -- fallback
				(function () {
					return this;
				})() ||
				this ||
				Function("return this")();

			/***/
		},

		/***/ 2597: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);
			var toObject = __webpack_require__(7908);

			var hasOwnProperty = uncurryThis({}.hasOwnProperty);

			// `HasOwnProperty` abstract operation
			// https://tc39.es/ecma262/#sec-hasownproperty
			// eslint-disable-next-line es/no-object-hasown -- safe
			module.exports =
				Object.hasOwn ||
				function hasOwn(it, key) {
					return hasOwnProperty(toObject(it), key);
				};

			/***/
		},

		/***/ 3501: /***/ (module) => {
			"use strict";

			module.exports = {};

			/***/
		},

		/***/ 490: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var getBuiltIn = __webpack_require__(5005);

			module.exports = getBuiltIn("document", "documentElement");

			/***/
		},

		/***/ 4664: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var DESCRIPTORS = __webpack_require__(9781);
			var fails = __webpack_require__(7293);
			var createElement = __webpack_require__(317);

			// Thanks to IE8 for its funny defineProperty
			module.exports =
				!DESCRIPTORS &&
				!fails(function () {
					// eslint-disable-next-line es/no-object-defineproperty -- required for testing
					return (
						Object.defineProperty(createElement("div"), "a", {
							get: function () {
								return 7;
							},
						}).a !== 7
					);
				});

			/***/
		},

		/***/ 8361: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);
			var fails = __webpack_require__(7293);
			var classof = __webpack_require__(4326);

			var $Object = Object;
			var split = uncurryThis("".split);

			// fallback for non-array-like ES3 and non-enumerable old V8 strings
			module.exports = fails(function () {
				// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
				// eslint-disable-next-line no-prototype-builtins -- safe
				return !$Object("z").propertyIsEnumerable(0);
			})
				? function (it) {
						return classof(it) === "String" ? split(it, "") : $Object(it);
				  }
				: $Object;

			/***/
		},

		/***/ 9587: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var isCallable = __webpack_require__(614);
			var isObject = __webpack_require__(111);
			var setPrototypeOf = __webpack_require__(7674);

			// makes subclassing work correct for wrapped built-ins
			module.exports = function ($this, dummy, Wrapper) {
				var NewTarget, NewTargetPrototype;
				if (
					// it can work only with native `setPrototypeOf`
					setPrototypeOf &&
					// we haven't completely correct pre-ES6 way for getting `new.target`, so use this
					isCallable((NewTarget = dummy.constructor)) &&
					NewTarget !== Wrapper &&
					isObject((NewTargetPrototype = NewTarget.prototype)) &&
					NewTargetPrototype !== Wrapper.prototype
				)
					setPrototypeOf($this, NewTargetPrototype);
				return $this;
			};

			/***/
		},

		/***/ 2788: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);
			var isCallable = __webpack_require__(614);
			var store = __webpack_require__(5465);

			var functionToString = uncurryThis(Function.toString);

			// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
			if (!isCallable(store.inspectSource)) {
				store.inspectSource = function (it) {
					return functionToString(it);
				};
			}

			module.exports = store.inspectSource;

			/***/
		},

		/***/ 2423: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var $ = __webpack_require__(2109);
			var uncurryThis = __webpack_require__(1702);
			var hiddenKeys = __webpack_require__(3501);
			var isObject = __webpack_require__(111);
			var hasOwn = __webpack_require__(2597);
			var defineProperty = __webpack_require__(3070).f;
			var getOwnPropertyNamesModule = __webpack_require__(8006);
			var getOwnPropertyNamesExternalModule = __webpack_require__(1156);
			var isExtensible = __webpack_require__(2050);
			var uid = __webpack_require__(9711);
			var FREEZING = __webpack_require__(6677);

			var REQUIRED = false;
			var METADATA = uid("meta");
			var id = 0;

			var setMetadata = function (it) {
				defineProperty(it, METADATA, {
					value: {
						objectID: "O" + id++, // object ID
						weakData: {}, // weak collections IDs
					},
				});
			};

			var fastKey = function (it, create) {
				// return a primitive with prefix
				if (!isObject(it)) return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
				if (!hasOwn(it, METADATA)) {
					// can't set metadata to uncaught frozen object
					if (!isExtensible(it)) return "F";
					// not necessary to add metadata
					if (!create) return "E";
					// add missing metadata
					setMetadata(it);
					// return object ID
				}
				return it[METADATA].objectID;
			};

			var getWeakData = function (it, create) {
				if (!hasOwn(it, METADATA)) {
					// can't set metadata to uncaught frozen object
					if (!isExtensible(it)) return true;
					// not necessary to add metadata
					if (!create) return false;
					// add missing metadata
					setMetadata(it);
					// return the store of weak collections IDs
				}
				return it[METADATA].weakData;
			};

			// add metadata on freeze-family methods calling
			var onFreeze = function (it) {
				if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
				return it;
			};

			var enable = function () {
				meta.enable = function () {
					/* empty */
				};
				REQUIRED = true;
				var getOwnPropertyNames = getOwnPropertyNamesModule.f;
				var splice = uncurryThis([].splice);
				var test = {};
				test[METADATA] = 1;

				// prevent exposing of metadata key
				if (getOwnPropertyNames(test).length) {
					getOwnPropertyNamesModule.f = function (it) {
						var result = getOwnPropertyNames(it);
						for (var i = 0, length = result.length; i < length; i++) {
							if (result[i] === METADATA) {
								splice(result, i, 1);
								break;
							}
						}
						return result;
					};

					$(
						{ target: "Object", stat: true, forced: true },
						{
							getOwnPropertyNames: getOwnPropertyNamesExternalModule.f,
						}
					);
				}
			};

			var meta = (module.exports = {
				enable: enable,
				fastKey: fastKey,
				getWeakData: getWeakData,
				onFreeze: onFreeze,
			});

			hiddenKeys[METADATA] = true;

			/***/
		},

		/***/ 9909: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var NATIVE_WEAK_MAP = __webpack_require__(4811);
			var global = __webpack_require__(7854);
			var isObject = __webpack_require__(111);
			var createNonEnumerableProperty = __webpack_require__(8880);
			var hasOwn = __webpack_require__(2597);
			var shared = __webpack_require__(5465);
			var sharedKey = __webpack_require__(6200);
			var hiddenKeys = __webpack_require__(3501);

			var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
			var TypeError = global.TypeError;
			var WeakMap = global.WeakMap;
			var set, get, has;

			var enforce = function (it) {
				return has(it) ? get(it) : set(it, {});
			};

			var getterFor = function (TYPE) {
				return function (it) {
					var state;
					if (!isObject(it) || (state = get(it)).type !== TYPE) {
						throw TypeError("Incompatible receiver, " + TYPE + " required");
					}
					return state;
				};
			};

			if (NATIVE_WEAK_MAP || shared.state) {
				var store = shared.state || (shared.state = new WeakMap());
				/* eslint-disable no-self-assign -- prototype methods protection */
				store.get = store.get;
				store.has = store.has;
				store.set = store.set;
				/* eslint-enable no-self-assign -- prototype methods protection */
				set = function (it, metadata) {
					if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
					metadata.facade = it;
					store.set(it, metadata);
					return metadata;
				};
				get = function (it) {
					return store.get(it) || {};
				};
				has = function (it) {
					return store.has(it);
				};
			} else {
				var STATE = sharedKey("state");
				hiddenKeys[STATE] = true;
				set = function (it, metadata) {
					if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
					metadata.facade = it;
					createNonEnumerableProperty(it, STATE, metadata);
					return metadata;
				};
				get = function (it) {
					return hasOwn(it, STATE) ? it[STATE] : {};
				};
				has = function (it) {
					return hasOwn(it, STATE);
				};
			}

			module.exports = {
				set: set,
				get: get,
				has: has,
				enforce: enforce,
				getterFor: getterFor,
			};

			/***/
		},

		/***/ 7659: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var wellKnownSymbol = __webpack_require__(5112);
			var Iterators = __webpack_require__(7497);

			var ITERATOR = wellKnownSymbol("iterator");
			var ArrayPrototype = Array.prototype;

			// check on default Array iterator
			module.exports = function (it) {
				return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
			};

			/***/
		},

		/***/ 3157: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var classof = __webpack_require__(4326);

			// `IsArray` abstract operation
			// https://tc39.es/ecma262/#sec-isarray
			// eslint-disable-next-line es/no-array-isarray -- safe
			module.exports =
				Array.isArray ||
				function isArray(argument) {
					return classof(argument) === "Array";
				};

			/***/
		},

		/***/ 614: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var $documentAll = __webpack_require__(4154);

			var documentAll = $documentAll.all;

			// `IsCallable` abstract operation
			// https://tc39.es/ecma262/#sec-iscallable
			module.exports = $documentAll.IS_HTMLDDA
				? function (argument) {
						return typeof argument == "function" || argument === documentAll;
				  }
				: function (argument) {
						return typeof argument == "function";
				  };

			/***/
		},

		/***/ 4411: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);
			var fails = __webpack_require__(7293);
			var isCallable = __webpack_require__(614);
			var classof = __webpack_require__(648);
			var getBuiltIn = __webpack_require__(5005);
			var inspectSource = __webpack_require__(2788);

			var noop = function () {
				/* empty */
			};
			var empty = [];
			var construct = getBuiltIn("Reflect", "construct");
			var constructorRegExp = /^\s*(?:class|function)\b/;
			var exec = uncurryThis(constructorRegExp.exec);
			var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

			var isConstructorModern = function isConstructor(argument) {
				if (!isCallable(argument)) return false;
				try {
					construct(noop, empty, argument);
					return true;
				} catch (error) {
					return false;
				}
			};

			var isConstructorLegacy = function isConstructor(argument) {
				if (!isCallable(argument)) return false;
				switch (classof(argument)) {
					case "AsyncFunction":
					case "GeneratorFunction":
					case "AsyncGeneratorFunction":
						return false;
				}
				try {
					// we can't check .prototype since constructors produced by .bind haven't it
					// `Function#toString` throws on some built-it function in some legacy engines
					// (for example, `DOMQuad` and similar in FF41-)
					return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
				} catch (error) {
					return true;
				}
			};

			isConstructorLegacy.sham = true;

			// `IsConstructor` abstract operation
			// https://tc39.es/ecma262/#sec-isconstructor
			module.exports =
				!construct ||
				fails(function () {
					var called;
					return (
						isConstructorModern(isConstructorModern.call) ||
						!isConstructorModern(Object) ||
						!isConstructorModern(function () {
							called = true;
						}) ||
						called
					);
				})
					? isConstructorLegacy
					: isConstructorModern;

			/***/
		},

		/***/ 4705: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var fails = __webpack_require__(7293);
			var isCallable = __webpack_require__(614);

			var replacement = /#|\.prototype\./;

			var isForced = function (feature, detection) {
				var value = data[normalize(feature)];
				return value === POLYFILL
					? true
					: value === NATIVE
					? false
					: isCallable(detection)
					? fails(detection)
					: !!detection;
			};

			var normalize = (isForced.normalize = function (string) {
				return String(string).replace(replacement, ".").toLowerCase();
			});

			var data = (isForced.data = {});
			var NATIVE = (isForced.NATIVE = "N");
			var POLYFILL = (isForced.POLYFILL = "P");

			module.exports = isForced;

			/***/
		},

		/***/ 8554: /***/ (module) => {
			"use strict";

			// we can't use just `it == null` since of `document.all` special case
			// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
			module.exports = function (it) {
				return it === null || it === undefined;
			};

			/***/
		},

		/***/ 111: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var isCallable = __webpack_require__(614);
			var $documentAll = __webpack_require__(4154);

			var documentAll = $documentAll.all;

			module.exports = $documentAll.IS_HTMLDDA
				? function (it) {
						return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
				  }
				: function (it) {
						return typeof it == "object" ? it !== null : isCallable(it);
				  };

			/***/
		},

		/***/ 1913: /***/ (module) => {
			"use strict";

			module.exports = false;

			/***/
		},

		/***/ 2190: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var getBuiltIn = __webpack_require__(5005);
			var isCallable = __webpack_require__(614);
			var isPrototypeOf = __webpack_require__(7976);
			var USE_SYMBOL_AS_UID = __webpack_require__(3307);

			var $Object = Object;

			module.exports = USE_SYMBOL_AS_UID
				? function (it) {
						return typeof it == "symbol";
				  }
				: function (it) {
						var $Symbol = getBuiltIn("Symbol");
						return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
				  };

			/***/
		},

		/***/ 408: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var bind = __webpack_require__(9974);
			var call = __webpack_require__(6916);
			var anObject = __webpack_require__(9670);
			var tryToString = __webpack_require__(6330);
			var isArrayIteratorMethod = __webpack_require__(7659);
			var lengthOfArrayLike = __webpack_require__(6244);
			var isPrototypeOf = __webpack_require__(7976);
			var getIterator = __webpack_require__(4121);
			var getIteratorMethod = __webpack_require__(1246);
			var iteratorClose = __webpack_require__(9212);

			var $TypeError = TypeError;

			var Result = function (stopped, result) {
				this.stopped = stopped;
				this.result = result;
			};

			var ResultPrototype = Result.prototype;

			module.exports = function (iterable, unboundFunction, options) {
				var that = options && options.that;
				var AS_ENTRIES = !!(options && options.AS_ENTRIES);
				var IS_RECORD = !!(options && options.IS_RECORD);
				var IS_ITERATOR = !!(options && options.IS_ITERATOR);
				var INTERRUPTED = !!(options && options.INTERRUPTED);
				var fn = bind(unboundFunction, that);
				var iterator, iterFn, index, length, result, next, step;

				var stop = function (condition) {
					if (iterator) iteratorClose(iterator, "normal", condition);
					return new Result(true, condition);
				};

				var callFn = function (value) {
					if (AS_ENTRIES) {
						anObject(value);
						return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
					}
					return INTERRUPTED ? fn(value, stop) : fn(value);
				};

				if (IS_RECORD) {
					iterator = iterable.iterator;
				} else if (IS_ITERATOR) {
					iterator = iterable;
				} else {
					iterFn = getIteratorMethod(iterable);
					if (!iterFn) throw $TypeError(tryToString(iterable) + " is not iterable");
					// optimisation for array iterators
					if (isArrayIteratorMethod(iterFn)) {
						for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
							result = callFn(iterable[index]);
							if (result && isPrototypeOf(ResultPrototype, result)) return result;
						}
						return new Result(false);
					}
					iterator = getIterator(iterable, iterFn);
				}

				next = IS_RECORD ? iterable.next : iterator.next;
				while (!(step = call(next, iterator)).done) {
					try {
						result = callFn(step.value);
					} catch (error) {
						iteratorClose(iterator, "throw", error);
					}
					if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
				}
				return new Result(false);
			};

			/***/
		},

		/***/ 9212: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var call = __webpack_require__(6916);
			var anObject = __webpack_require__(9670);
			var getMethod = __webpack_require__(8173);

			module.exports = function (iterator, kind, value) {
				var innerResult, innerError;
				anObject(iterator);
				try {
					innerResult = getMethod(iterator, "return");
					if (!innerResult) {
						if (kind === "throw") throw value;
						return value;
					}
					innerResult = call(innerResult, iterator);
				} catch (error) {
					innerError = true;
					innerResult = error;
				}
				if (kind === "throw") throw value;
				if (innerError) throw innerResult;
				anObject(innerResult);
				return value;
			};

			/***/
		},

		/***/ 3061: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var IteratorPrototype = __webpack_require__(3383).IteratorPrototype;
			var create = __webpack_require__(30);
			var createPropertyDescriptor = __webpack_require__(9114);
			var setToStringTag = __webpack_require__(8003);
			var Iterators = __webpack_require__(7497);

			var returnThis = function () {
				return this;
			};

			module.exports = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
				var TO_STRING_TAG = NAME + " Iterator";
				IteratorConstructor.prototype = create(IteratorPrototype, {
					next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next),
				});
				setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
				Iterators[TO_STRING_TAG] = returnThis;
				return IteratorConstructor;
			};

			/***/
		},

		/***/ 1656: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var $ = __webpack_require__(2109);
			var call = __webpack_require__(6916);
			var IS_PURE = __webpack_require__(1913);
			var FunctionName = __webpack_require__(6530);
			var isCallable = __webpack_require__(614);
			var createIteratorConstructor = __webpack_require__(3061);
			var getPrototypeOf = __webpack_require__(9518);
			var setPrototypeOf = __webpack_require__(7674);
			var setToStringTag = __webpack_require__(8003);
			var createNonEnumerableProperty = __webpack_require__(8880);
			var defineBuiltIn = __webpack_require__(8052);
			var wellKnownSymbol = __webpack_require__(5112);
			var Iterators = __webpack_require__(7497);
			var IteratorsCore = __webpack_require__(3383);

			var PROPER_FUNCTION_NAME = FunctionName.PROPER;
			var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
			var IteratorPrototype = IteratorsCore.IteratorPrototype;
			var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
			var ITERATOR = wellKnownSymbol("iterator");
			var KEYS = "keys";
			var VALUES = "values";
			var ENTRIES = "entries";

			var returnThis = function () {
				return this;
			};

			module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
				createIteratorConstructor(IteratorConstructor, NAME, next);

				var getIterationMethod = function (KIND) {
					if (KIND === DEFAULT && defaultIterator) return defaultIterator;
					if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];

					switch (KIND) {
						case KEYS:
							return function keys() {
								return new IteratorConstructor(this, KIND);
							};
						case VALUES:
							return function values() {
								return new IteratorConstructor(this, KIND);
							};
						case ENTRIES:
							return function entries() {
								return new IteratorConstructor(this, KIND);
							};
					}

					return function () {
						return new IteratorConstructor(this);
					};
				};

				var TO_STRING_TAG = NAME + " Iterator";
				var INCORRECT_VALUES_NAME = false;
				var IterablePrototype = Iterable.prototype;
				var nativeIterator =
					IterablePrototype[ITERATOR] ||
					IterablePrototype["@@iterator"] ||
					(DEFAULT && IterablePrototype[DEFAULT]);
				var defaultIterator = (!BUGGY_SAFARI_ITERATORS && nativeIterator) || getIterationMethod(DEFAULT);
				var anyNativeIterator = NAME === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
				var CurrentIteratorPrototype, methods, KEY;

				// fix native
				if (anyNativeIterator) {
					CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
					if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
						if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
							if (setPrototypeOf) {
								setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
							} else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
								defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
							}
						}
						// Set @@toStringTag to native iterators
						setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
						if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
					}
				}

				// fix Array.prototype.{ values, @@iterator }.name in V8 / FF
				if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
					if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
						createNonEnumerableProperty(IterablePrototype, "name", VALUES);
					} else {
						INCORRECT_VALUES_NAME = true;
						defaultIterator = function values() {
							return call(nativeIterator, this);
						};
					}
				}

				// export additional methods
				if (DEFAULT) {
					methods = {
						values: getIterationMethod(VALUES),
						keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
						entries: getIterationMethod(ENTRIES),
					};
					if (FORCED)
						for (KEY in methods) {
							if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
								defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
							}
						}
					else
						$(
							{ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME },
							methods
						);
				}

				// define iterator
				if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
					defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
				}
				Iterators[NAME] = defaultIterator;

				return methods;
			};

			/***/
		},

		/***/ 3383: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var fails = __webpack_require__(7293);
			var isCallable = __webpack_require__(614);
			var isObject = __webpack_require__(111);
			var create = __webpack_require__(30);
			var getPrototypeOf = __webpack_require__(9518);
			var defineBuiltIn = __webpack_require__(8052);
			var wellKnownSymbol = __webpack_require__(5112);
			var IS_PURE = __webpack_require__(1913);

			var ITERATOR = wellKnownSymbol("iterator");
			var BUGGY_SAFARI_ITERATORS = false;

			// `%IteratorPrototype%` object
			// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
			var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

			/* eslint-disable es/no-array-prototype-keys -- safe */
			if ([].keys) {
				arrayIterator = [].keys();
				// Safari 8 has buggy iterators w/o `next`
				if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
				else {
					PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
					if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
						IteratorPrototype = PrototypeOfArrayIteratorPrototype;
				}
			}

			var NEW_ITERATOR_PROTOTYPE =
				!isObject(IteratorPrototype) ||
				fails(function () {
					var test = {};
					// FF44- legacy iterators case
					return IteratorPrototype[ITERATOR].call(test) !== test;
				});

			if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
			else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);

			// `%IteratorPrototype%[@@iterator]()` method
			// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
			if (!isCallable(IteratorPrototype[ITERATOR])) {
				defineBuiltIn(IteratorPrototype, ITERATOR, function () {
					return this;
				});
			}

			module.exports = {
				IteratorPrototype: IteratorPrototype,
				BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS,
			};

			/***/
		},

		/***/ 7497: /***/ (module) => {
			"use strict";

			module.exports = {};

			/***/
		},

		/***/ 6244: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var toLength = __webpack_require__(7466);

			// `LengthOfArrayLike` abstract operation
			// https://tc39.es/ecma262/#sec-lengthofarraylike
			module.exports = function (obj) {
				return toLength(obj.length);
			};

			/***/
		},

		/***/ 6339: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);
			var fails = __webpack_require__(7293);
			var isCallable = __webpack_require__(614);
			var hasOwn = __webpack_require__(2597);
			var DESCRIPTORS = __webpack_require__(9781);
			var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(6530).CONFIGURABLE;
			var inspectSource = __webpack_require__(2788);
			var InternalStateModule = __webpack_require__(9909);

			var enforceInternalState = InternalStateModule.enforce;
			var getInternalState = InternalStateModule.get;
			var $String = String;
			// eslint-disable-next-line es/no-object-defineproperty -- safe
			var defineProperty = Object.defineProperty;
			var stringSlice = uncurryThis("".slice);
			var replace = uncurryThis("".replace);
			var join = uncurryThis([].join);

			var CONFIGURABLE_LENGTH =
				DESCRIPTORS &&
				!fails(function () {
					return (
						defineProperty(
							function () {
								/* empty */
							},
							"length",
							{ value: 8 }
						).length !== 8
					);
				});

			var TEMPLATE = String(String).split("String");

			var makeBuiltIn = (module.exports = function (value, name, options) {
				if (stringSlice($String(name), 0, 7) === "Symbol(") {
					name = "[" + replace($String(name), /^Symbol\(([^)]*)\)/, "$1") + "]";
				}
				if (options && options.getter) name = "get " + name;
				if (options && options.setter) name = "set " + name;
				if (!hasOwn(value, "name") || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
					if (DESCRIPTORS) defineProperty(value, "name", { value: name, configurable: true });
					else value.name = name;
				}
				if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
					defineProperty(value, "length", { value: options.arity });
				}
				try {
					if (options && hasOwn(options, "constructor") && options.constructor) {
						if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
						// in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
					} else if (value.prototype) value.prototype = undefined;
				} catch (error) {
					/* empty */
				}
				var state = enforceInternalState(value);
				if (!hasOwn(state, "source")) {
					state.source = join(TEMPLATE, typeof name == "string" ? name : "");
				}
				return value;
			});

			// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
			// eslint-disable-next-line no-extend-native -- required
			Function.prototype.toString = makeBuiltIn(function toString() {
				return (isCallable(this) && getInternalState(this).source) || inspectSource(this);
			}, "toString");

			/***/
		},

		/***/ 4758: /***/ (module) => {
			"use strict";

			var ceil = Math.ceil;
			var floor = Math.floor;

			// `Math.trunc` method
			// https://tc39.es/ecma262/#sec-math.trunc
			// eslint-disable-next-line es/no-math-trunc -- safe
			module.exports =
				Math.trunc ||
				function trunc(x) {
					var n = +x;
					return (n > 0 ? floor : ceil)(n);
				};

			/***/
		},

		/***/ 3009: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var global = __webpack_require__(7854);
			var fails = __webpack_require__(7293);
			var uncurryThis = __webpack_require__(1702);
			var toString = __webpack_require__(1340);
			var trim = __webpack_require__(3111).trim;
			var whitespaces = __webpack_require__(1361);

			var $parseInt = global.parseInt;
			var Symbol = global.Symbol;
			var ITERATOR = Symbol && Symbol.iterator;
			var hex = /^[+-]?0x/i;
			var exec = uncurryThis(hex.exec);
			var FORCED =
				$parseInt(whitespaces + "08") !== 8 ||
				$parseInt(whitespaces + "0x16") !== 22 ||
				// MS Edge 18- broken with boxed symbols
				(ITERATOR &&
					!fails(function () {
						$parseInt(Object(ITERATOR));
					}));

			// `parseInt` method
			// https://tc39.es/ecma262/#sec-parseint-string-radix
			module.exports = FORCED
				? function parseInt(string, radix) {
						var S = trim(toString(string));
						return $parseInt(S, radix >>> 0 || (exec(hex, S) ? 16 : 10));
				  }
				: $parseInt;

			/***/
		},

		/***/ 1574: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var DESCRIPTORS = __webpack_require__(9781);
			var uncurryThis = __webpack_require__(1702);
			var call = __webpack_require__(6916);
			var fails = __webpack_require__(7293);
			var objectKeys = __webpack_require__(1956);
			var getOwnPropertySymbolsModule = __webpack_require__(5181);
			var propertyIsEnumerableModule = __webpack_require__(5296);
			var toObject = __webpack_require__(7908);
			var IndexedObject = __webpack_require__(8361);

			// eslint-disable-next-line es/no-object-assign -- safe
			var $assign = Object.assign;
			// eslint-disable-next-line es/no-object-defineproperty -- required for testing
			var defineProperty = Object.defineProperty;
			var concat = uncurryThis([].concat);

			// `Object.assign` method
			// https://tc39.es/ecma262/#sec-object.assign
			module.exports =
				!$assign ||
				fails(function () {
					// should have correct order of operations (Edge bug)
					if (
						DESCRIPTORS &&
						$assign(
							{ b: 1 },
							$assign(
								defineProperty({}, "a", {
									enumerable: true,
									get: function () {
										defineProperty(this, "b", {
											value: 3,
											enumerable: false,
										});
									},
								}),
								{ b: 2 }
							)
						).b !== 1
					)
						return true;
					// should work with symbols and should have deterministic property order (V8 bug)
					var A = {};
					var B = {};
					// eslint-disable-next-line es/no-symbol -- safe
					var symbol = Symbol("assign detection");
					var alphabet = "abcdefghijklmnopqrst";
					A[symbol] = 7;
					alphabet.split("").forEach(function (chr) {
						B[chr] = chr;
					});
					return $assign({}, A)[symbol] !== 7 || objectKeys($assign({}, B)).join("") !== alphabet;
				})
					? function assign(target, source) {
							// eslint-disable-line no-unused-vars -- required for `.length`
							var T = toObject(target);
							var argumentsLength = arguments.length;
							var index = 1;
							var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
							var propertyIsEnumerable = propertyIsEnumerableModule.f;
							while (argumentsLength > index) {
								var S = IndexedObject(arguments[index++]);
								var keys = getOwnPropertySymbols
									? concat(objectKeys(S), getOwnPropertySymbols(S))
									: objectKeys(S);
								var length = keys.length;
								var j = 0;
								var key;
								while (length > j) {
									key = keys[j++];
									if (!DESCRIPTORS || call(propertyIsEnumerable, S, key)) T[key] = S[key];
								}
							}
							return T;
					  }
					: $assign;

			/***/
		},

		/***/ 30: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			/* global ActiveXObject -- old IE, WSH */
			var anObject = __webpack_require__(9670);
			var definePropertiesModule = __webpack_require__(6048);
			var enumBugKeys = __webpack_require__(748);
			var hiddenKeys = __webpack_require__(3501);
			var html = __webpack_require__(490);
			var documentCreateElement = __webpack_require__(317);
			var sharedKey = __webpack_require__(6200);

			var GT = ">";
			var LT = "<";
			var PROTOTYPE = "prototype";
			var SCRIPT = "script";
			var IE_PROTO = sharedKey("IE_PROTO");

			var EmptyConstructor = function () {
				/* empty */
			};

			var scriptTag = function (content) {
				return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
			};

			// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
			var NullProtoObjectViaActiveX = function (activeXDocument) {
				activeXDocument.write(scriptTag(""));
				activeXDocument.close();
				var temp = activeXDocument.parentWindow.Object;
				activeXDocument = null; // avoid memory leak
				return temp;
			};

			// Create object with fake `null` prototype: use iframe Object with cleared prototype
			var NullProtoObjectViaIFrame = function () {
				// Thrash, waste and sodomy: IE GC bug
				var iframe = documentCreateElement("iframe");
				var JS = "java" + SCRIPT + ":";
				var iframeDocument;
				iframe.style.display = "none";
				html.appendChild(iframe);
				// https://github.com/zloirock/core-js/issues/475
				iframe.src = String(JS);
				iframeDocument = iframe.contentWindow.document;
				iframeDocument.open();
				iframeDocument.write(scriptTag("document.F=Object"));
				iframeDocument.close();
				return iframeDocument.F;
			};

			// Check for document.domain and active x support
			// No need to use active x approach when document.domain is not set
			// see https://github.com/es-shims/es5-shim/issues/150
			// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
			// avoid IE GC bug
			var activeXDocument;
			var NullProtoObject = function () {
				try {
					activeXDocument = new ActiveXObject("htmlfile");
				} catch (error) {
					/* ignore */
				}
				NullProtoObject =
					typeof document != "undefined"
						? document.domain && activeXDocument
							? NullProtoObjectViaActiveX(activeXDocument) // old IE
							: NullProtoObjectViaIFrame()
						: NullProtoObjectViaActiveX(activeXDocument); // WSH
				var length = enumBugKeys.length;
				while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
				return NullProtoObject();
			};

			hiddenKeys[IE_PROTO] = true;

			// `Object.create` method
			// https://tc39.es/ecma262/#sec-object.create
			// eslint-disable-next-line es/no-object-create -- safe
			module.exports =
				Object.create ||
				function create(O, Properties) {
					var result;
					if (O !== null) {
						EmptyConstructor[PROTOTYPE] = anObject(O);
						result = new EmptyConstructor();
						EmptyConstructor[PROTOTYPE] = null;
						// add "__proto__" for Object.getPrototypeOf polyfill
						result[IE_PROTO] = O;
					} else result = NullProtoObject();
					return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
				};

			/***/
		},

		/***/ 6048: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
			"use strict";

			var DESCRIPTORS = __webpack_require__(9781);
			var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
			var definePropertyModule = __webpack_require__(3070);
			var anObject = __webpack_require__(9670);
			var toIndexedObject = __webpack_require__(5656);
			var objectKeys = __webpack_require__(1956);

			// `Object.defineProperties` method
			// https://tc39.es/ecma262/#sec-object.defineproperties
			// eslint-disable-next-line es/no-object-defineproperties -- safe
			exports.f =
				DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG
					? Object.defineProperties
					: function defineProperties(O, Properties) {
							anObject(O);
							var props = toIndexedObject(Properties);
							var keys = objectKeys(Properties);
							var length = keys.length;
							var index = 0;
							var key;
							while (length > index) definePropertyModule.f(O, (key = keys[index++]), props[key]);
							return O;
					  };

			/***/
		},

		/***/ 3070: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
			"use strict";

			var DESCRIPTORS = __webpack_require__(9781);
			var IE8_DOM_DEFINE = __webpack_require__(4664);
			var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3353);
			var anObject = __webpack_require__(9670);
			var toPropertyKey = __webpack_require__(4948);

			var $TypeError = TypeError;
			// eslint-disable-next-line es/no-object-defineproperty -- safe
			var $defineProperty = Object.defineProperty;
			// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
			var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
			var ENUMERABLE = "enumerable";
			var CONFIGURABLE = "configurable";
			var WRITABLE = "writable";

			// `Object.defineProperty` method
			// https://tc39.es/ecma262/#sec-object.defineproperty
			exports.f = DESCRIPTORS
				? V8_PROTOTYPE_DEFINE_BUG
					? function defineProperty(O, P, Attributes) {
							anObject(O);
							P = toPropertyKey(P);
							anObject(Attributes);
							if (
								typeof O === "function" &&
								P === "prototype" &&
								"value" in Attributes &&
								WRITABLE in Attributes &&
								!Attributes[WRITABLE]
							) {
								var current = $getOwnPropertyDescriptor(O, P);
								if (current && current[WRITABLE]) {
									O[P] = Attributes.value;
									Attributes = {
										configurable:
											CONFIGURABLE in Attributes
												? Attributes[CONFIGURABLE]
												: current[CONFIGURABLE],
										enumerable:
											ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
										writable: false,
									};
								}
							}
							return $defineProperty(O, P, Attributes);
					  }
					: $defineProperty
				: function defineProperty(O, P, Attributes) {
						anObject(O);
						P = toPropertyKey(P);
						anObject(Attributes);
						if (IE8_DOM_DEFINE)
							try {
								return $defineProperty(O, P, Attributes);
							} catch (error) {
								/* empty */
							}
						if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
						if ("value" in Attributes) O[P] = Attributes.value;
						return O;
				  };

			/***/
		},

		/***/ 1236: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
			"use strict";

			var DESCRIPTORS = __webpack_require__(9781);
			var call = __webpack_require__(6916);
			var propertyIsEnumerableModule = __webpack_require__(5296);
			var createPropertyDescriptor = __webpack_require__(9114);
			var toIndexedObject = __webpack_require__(5656);
			var toPropertyKey = __webpack_require__(4948);
			var hasOwn = __webpack_require__(2597);
			var IE8_DOM_DEFINE = __webpack_require__(4664);

			// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
			var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

			// `Object.getOwnPropertyDescriptor` method
			// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
			exports.f = DESCRIPTORS
				? $getOwnPropertyDescriptor
				: function getOwnPropertyDescriptor(O, P) {
						O = toIndexedObject(O);
						P = toPropertyKey(P);
						if (IE8_DOM_DEFINE)
							try {
								return $getOwnPropertyDescriptor(O, P);
							} catch (error) {
								/* empty */
							}
						if (hasOwn(O, P))
							return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
				  };

			/***/
		},

		/***/ 1156: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			/* eslint-disable es/no-object-getownpropertynames -- safe */
			var classof = __webpack_require__(4326);
			var toIndexedObject = __webpack_require__(5656);
			var $getOwnPropertyNames = __webpack_require__(8006).f;
			var arraySlice = __webpack_require__(1589);

			var windowNames =
				typeof window == "object" && window && Object.getOwnPropertyNames
					? Object.getOwnPropertyNames(window)
					: [];

			var getWindowNames = function (it) {
				try {
					return $getOwnPropertyNames(it);
				} catch (error) {
					return arraySlice(windowNames);
				}
			};

			// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
			module.exports.f = function getOwnPropertyNames(it) {
				return windowNames && classof(it) === "Window"
					? getWindowNames(it)
					: $getOwnPropertyNames(toIndexedObject(it));
			};

			/***/
		},

		/***/ 8006: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
			"use strict";

			var internalObjectKeys = __webpack_require__(6324);
			var enumBugKeys = __webpack_require__(748);

			var hiddenKeys = enumBugKeys.concat("length", "prototype");

			// `Object.getOwnPropertyNames` method
			// https://tc39.es/ecma262/#sec-object.getownpropertynames
			// eslint-disable-next-line es/no-object-getownpropertynames -- safe
			exports.f =
				Object.getOwnPropertyNames ||
				function getOwnPropertyNames(O) {
					return internalObjectKeys(O, hiddenKeys);
				};

			/***/
		},

		/***/ 5181: /***/ (__unused_webpack_module, exports) => {
			"use strict";

			// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
			exports.f = Object.getOwnPropertySymbols;

			/***/
		},

		/***/ 9518: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var hasOwn = __webpack_require__(2597);
			var isCallable = __webpack_require__(614);
			var toObject = __webpack_require__(7908);
			var sharedKey = __webpack_require__(6200);
			var CORRECT_PROTOTYPE_GETTER = __webpack_require__(8544);

			var IE_PROTO = sharedKey("IE_PROTO");
			var $Object = Object;
			var ObjectPrototype = $Object.prototype;

			// `Object.getPrototypeOf` method
			// https://tc39.es/ecma262/#sec-object.getprototypeof
			// eslint-disable-next-line es/no-object-getprototypeof -- safe
			module.exports = CORRECT_PROTOTYPE_GETTER
				? $Object.getPrototypeOf
				: function (O) {
						var object = toObject(O);
						if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
						var constructor = object.constructor;
						if (isCallable(constructor) && object instanceof constructor) {
							return constructor.prototype;
						}
						return object instanceof $Object ? ObjectPrototype : null;
				  };

			/***/
		},

		/***/ 2050: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var fails = __webpack_require__(7293);
			var isObject = __webpack_require__(111);
			var classof = __webpack_require__(4326);
			var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(7556);

			// eslint-disable-next-line es/no-object-isextensible -- safe
			var $isExtensible = Object.isExtensible;
			var FAILS_ON_PRIMITIVES = fails(function () {
				$isExtensible(1);
			});

			// `Object.isExtensible` method
			// https://tc39.es/ecma262/#sec-object.isextensible
			module.exports =
				FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE
					? function isExtensible(it) {
							if (!isObject(it)) return false;
							if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === "ArrayBuffer") return false;
							return $isExtensible ? $isExtensible(it) : true;
					  }
					: $isExtensible;

			/***/
		},

		/***/ 7976: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);

			module.exports = uncurryThis({}.isPrototypeOf);

			/***/
		},

		/***/ 6324: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);
			var hasOwn = __webpack_require__(2597);
			var toIndexedObject = __webpack_require__(5656);
			var indexOf = __webpack_require__(1318).indexOf;
			var hiddenKeys = __webpack_require__(3501);

			var push = uncurryThis([].push);

			module.exports = function (object, names) {
				var O = toIndexedObject(object);
				var i = 0;
				var result = [];
				var key;
				for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
				// Don't enum bug & hidden keys
				while (names.length > i)
					if (hasOwn(O, (key = names[i++]))) {
						~indexOf(result, key) || push(result, key);
					}
				return result;
			};

			/***/
		},

		/***/ 1956: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var internalObjectKeys = __webpack_require__(6324);
			var enumBugKeys = __webpack_require__(748);

			// `Object.keys` method
			// https://tc39.es/ecma262/#sec-object.keys
			// eslint-disable-next-line es/no-object-keys -- safe
			module.exports =
				Object.keys ||
				function keys(O) {
					return internalObjectKeys(O, enumBugKeys);
				};

			/***/
		},

		/***/ 5296: /***/ (__unused_webpack_module, exports) => {
			"use strict";

			var $propertyIsEnumerable = {}.propertyIsEnumerable;
			// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
			var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

			// Nashorn ~ JDK8 bug
			var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

			// `Object.prototype.propertyIsEnumerable` method implementation
			// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
			exports.f = NASHORN_BUG
				? function propertyIsEnumerable(V) {
						var descriptor = getOwnPropertyDescriptor(this, V);
						return !!descriptor && descriptor.enumerable;
				  }
				: $propertyIsEnumerable;

			/***/
		},

		/***/ 7674: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			/* eslint-disable no-proto -- safe */
			var uncurryThisAccessor = __webpack_require__(5668);
			var anObject = __webpack_require__(9670);
			var aPossiblePrototype = __webpack_require__(6077);

			// `Object.setPrototypeOf` method
			// https://tc39.es/ecma262/#sec-object.setprototypeof
			// Works with __proto__ only. Old v8 can't work with null proto objects.
			// eslint-disable-next-line es/no-object-setprototypeof -- safe
			module.exports =
				Object.setPrototypeOf ||
				("__proto__" in {}
					? (function () {
							var CORRECT_SETTER = false;
							var test = {};
							var setter;
							try {
								setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
								setter(test, []);
								CORRECT_SETTER = test instanceof Array;
							} catch (error) {
								/* empty */
							}
							return function setPrototypeOf(O, proto) {
								anObject(O);
								aPossiblePrototype(proto);
								if (CORRECT_SETTER) setter(O, proto);
								else O.__proto__ = proto;
								return O;
							};
					  })()
					: undefined);

			/***/
		},

		/***/ 288: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
			var classof = __webpack_require__(648);

			// `Object.prototype.toString` method implementation
			// https://tc39.es/ecma262/#sec-object.prototype.tostring
			module.exports = TO_STRING_TAG_SUPPORT
				? {}.toString
				: function toString() {
						return "[object " + classof(this) + "]";
				  };

			/***/
		},

		/***/ 2140: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var call = __webpack_require__(6916);
			var isCallable = __webpack_require__(614);
			var isObject = __webpack_require__(111);

			var $TypeError = TypeError;

			// `OrdinaryToPrimitive` abstract operation
			// https://tc39.es/ecma262/#sec-ordinarytoprimitive
			module.exports = function (input, pref) {
				var fn, val;
				if (pref === "string" && isCallable((fn = input.toString)) && !isObject((val = call(fn, input))))
					return val;
				if (isCallable((fn = input.valueOf)) && !isObject((val = call(fn, input)))) return val;
				if (pref !== "string" && isCallable((fn = input.toString)) && !isObject((val = call(fn, input))))
					return val;
				throw $TypeError("Can't convert object to primitive value");
			};

			/***/
		},

		/***/ 3887: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var getBuiltIn = __webpack_require__(5005);
			var uncurryThis = __webpack_require__(1702);
			var getOwnPropertyNamesModule = __webpack_require__(8006);
			var getOwnPropertySymbolsModule = __webpack_require__(5181);
			var anObject = __webpack_require__(9670);

			var concat = uncurryThis([].concat);

			// all object keys, includes non-enumerable and symbols
			module.exports =
				getBuiltIn("Reflect", "ownKeys") ||
				function ownKeys(it) {
					var keys = getOwnPropertyNamesModule.f(anObject(it));
					var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
					return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
				};

			/***/
		},

		/***/ 7651: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var call = __webpack_require__(6916);
			var anObject = __webpack_require__(9670);
			var isCallable = __webpack_require__(614);
			var classof = __webpack_require__(4326);
			var regexpExec = __webpack_require__(2261);

			var $TypeError = TypeError;

			// `RegExpExec` abstract operation
			// https://tc39.es/ecma262/#sec-regexpexec
			module.exports = function (R, S) {
				var exec = R.exec;
				if (isCallable(exec)) {
					var result = call(exec, R, S);
					if (result !== null) anObject(result);
					return result;
				}
				if (classof(R) === "RegExp") return call(regexpExec, R, S);
				throw $TypeError("RegExp#exec called on incompatible receiver");
			};

			/***/
		},

		/***/ 2261: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
			/* eslint-disable regexp/no-useless-quantifier -- testing */
			var call = __webpack_require__(6916);
			var uncurryThis = __webpack_require__(1702);
			var toString = __webpack_require__(1340);
			var regexpFlags = __webpack_require__(7066);
			var stickyHelpers = __webpack_require__(2999);
			var shared = __webpack_require__(2309);
			var create = __webpack_require__(30);
			var getInternalState = __webpack_require__(9909).get;
			var UNSUPPORTED_DOT_ALL = __webpack_require__(9441);
			var UNSUPPORTED_NCG = __webpack_require__(7168);

			var nativeReplace = shared("native-string-replace", String.prototype.replace);
			var nativeExec = RegExp.prototype.exec;
			var patchedExec = nativeExec;
			var charAt = uncurryThis("".charAt);
			var indexOf = uncurryThis("".indexOf);
			var replace = uncurryThis("".replace);
			var stringSlice = uncurryThis("".slice);

			var UPDATES_LAST_INDEX_WRONG = (function () {
				var re1 = /a/;
				var re2 = /b*/g;
				call(nativeExec, re1, "a");
				call(nativeExec, re2, "a");
				return re1.lastIndex !== 0 || re2.lastIndex !== 0;
			})();

			var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

			// nonparticipating capturing group, copied from es5-shim's String#split patch.
			var NPCG_INCLUDED = /()??/.exec("")[1] !== undefined;

			var PATCH =
				UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

			if (PATCH) {
				patchedExec = function exec(string) {
					var re = this;
					var state = getInternalState(re);
					var str = toString(string);
					var raw = state.raw;
					var result, reCopy, lastIndex, match, i, object, group;

					if (raw) {
						raw.lastIndex = re.lastIndex;
						result = call(patchedExec, raw, str);
						re.lastIndex = raw.lastIndex;
						return result;
					}

					var groups = state.groups;
					var sticky = UNSUPPORTED_Y && re.sticky;
					var flags = call(regexpFlags, re);
					var source = re.source;
					var charsAdded = 0;
					var strCopy = str;

					if (sticky) {
						flags = replace(flags, "y", "");
						if (indexOf(flags, "g") === -1) {
							flags += "g";
						}

						strCopy = stringSlice(str, re.lastIndex);
						// Support anchored sticky behavior.
						if (
							re.lastIndex > 0 &&
							(!re.multiline || (re.multiline && charAt(str, re.lastIndex - 1) !== "\n"))
						) {
							source = "(?: " + source + ")";
							strCopy = " " + strCopy;
							charsAdded++;
						}
						// ^(? + rx + ) is needed, in combination with some str slicing, to
						// simulate the 'y' flag.
						reCopy = new RegExp("^(?:" + source + ")", flags);
					}

					if (NPCG_INCLUDED) {
						reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
					}
					if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

					match = call(nativeExec, sticky ? reCopy : re, strCopy);

					if (sticky) {
						if (match) {
							match.input = stringSlice(match.input, charsAdded);
							match[0] = stringSlice(match[0], charsAdded);
							match.index = re.lastIndex;
							re.lastIndex += match[0].length;
						} else re.lastIndex = 0;
					} else if (UPDATES_LAST_INDEX_WRONG && match) {
						re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
					}
					if (NPCG_INCLUDED && match && match.length > 1) {
						// Fix browsers whose `exec` methods don't consistently return `undefined`
						// for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
						call(nativeReplace, match[0], reCopy, function () {
							for (i = 1; i < arguments.length - 2; i++) {
								if (arguments[i] === undefined) match[i] = undefined;
							}
						});
					}

					if (match && groups) {
						match.groups = object = create(null);
						for (i = 0; i < groups.length; i++) {
							group = groups[i];
							object[group[0]] = match[group[1]];
						}
					}

					return match;
				};
			}

			module.exports = patchedExec;

			/***/
		},

		/***/ 7066: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var anObject = __webpack_require__(9670);

			// `RegExp.prototype.flags` getter implementation
			// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
			module.exports = function () {
				var that = anObject(this);
				var result = "";
				if (that.hasIndices) result += "d";
				if (that.global) result += "g";
				if (that.ignoreCase) result += "i";
				if (that.multiline) result += "m";
				if (that.dotAll) result += "s";
				if (that.unicode) result += "u";
				if (that.unicodeSets) result += "v";
				if (that.sticky) result += "y";
				return result;
			};

			/***/
		},

		/***/ 2999: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var fails = __webpack_require__(7293);
			var global = __webpack_require__(7854);

			// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
			var $RegExp = global.RegExp;

			var UNSUPPORTED_Y = fails(function () {
				var re = $RegExp("a", "y");
				re.lastIndex = 2;
				return re.exec("abcd") !== null;
			});

			// UC Browser bug
			// https://github.com/zloirock/core-js/issues/1008
			var MISSED_STICKY =
				UNSUPPORTED_Y ||
				fails(function () {
					return !$RegExp("a", "y").sticky;
				});

			var BROKEN_CARET =
				UNSUPPORTED_Y ||
				fails(function () {
					// https://bugzilla.mozilla.org/show_bug.cgi?id=773687
					var re = $RegExp("^r", "gy");
					re.lastIndex = 2;
					return re.exec("str") !== null;
				});

			module.exports = {
				BROKEN_CARET: BROKEN_CARET,
				MISSED_STICKY: MISSED_STICKY,
				UNSUPPORTED_Y: UNSUPPORTED_Y,
			};

			/***/
		},

		/***/ 9441: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var fails = __webpack_require__(7293);
			var global = __webpack_require__(7854);

			// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
			var $RegExp = global.RegExp;

			module.exports = fails(function () {
				var re = $RegExp(".", "s");
				return !(re.dotAll && re.exec("\n") && re.flags === "s");
			});

			/***/
		},

		/***/ 7168: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var fails = __webpack_require__(7293);
			var global = __webpack_require__(7854);

			// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
			var $RegExp = global.RegExp;

			module.exports = fails(function () {
				var re = $RegExp("(?<a>b)", "g");
				return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
			});

			/***/
		},

		/***/ 4488: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var isNullOrUndefined = __webpack_require__(8554);

			var $TypeError = TypeError;

			// `RequireObjectCoercible` abstract operation
			// https://tc39.es/ecma262/#sec-requireobjectcoercible
			module.exports = function (it) {
				if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
				return it;
			};

			/***/
		},

		/***/ 8003: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var defineProperty = __webpack_require__(3070).f;
			var hasOwn = __webpack_require__(2597);
			var wellKnownSymbol = __webpack_require__(5112);

			var TO_STRING_TAG = wellKnownSymbol("toStringTag");

			module.exports = function (target, TAG, STATIC) {
				if (target && !STATIC) target = target.prototype;
				if (target && !hasOwn(target, TO_STRING_TAG)) {
					defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
				}
			};

			/***/
		},

		/***/ 6200: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var shared = __webpack_require__(2309);
			var uid = __webpack_require__(9711);

			var keys = shared("keys");

			module.exports = function (key) {
				return keys[key] || (keys[key] = uid(key));
			};

			/***/
		},

		/***/ 5465: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var global = __webpack_require__(7854);
			var defineGlobalProperty = __webpack_require__(3072);

			var SHARED = "__core-js_shared__";
			var store = global[SHARED] || defineGlobalProperty(SHARED, {});

			module.exports = store;

			/***/
		},

		/***/ 2309: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var IS_PURE = __webpack_require__(1913);
			var store = __webpack_require__(5465);

			(module.exports = function (key, value) {
				return store[key] || (store[key] = value !== undefined ? value : {});
			})("versions", []).push({
				version: "3.32.2",
				mode: IS_PURE ? "pure" : "global",
				copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
				license: "https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",
				source: "https://github.com/zloirock/core-js",
			});

			/***/
		},

		/***/ 8710: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);
			var toIntegerOrInfinity = __webpack_require__(9303);
			var toString = __webpack_require__(1340);
			var requireObjectCoercible = __webpack_require__(4488);

			var charAt = uncurryThis("".charAt);
			var charCodeAt = uncurryThis("".charCodeAt);
			var stringSlice = uncurryThis("".slice);

			var createMethod = function (CONVERT_TO_STRING) {
				return function ($this, pos) {
					var S = toString(requireObjectCoercible($this));
					var position = toIntegerOrInfinity(pos);
					var size = S.length;
					var first, second;
					if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : undefined;
					first = charCodeAt(S, position);
					return first < 0xd800 ||
						first > 0xdbff ||
						position + 1 === size ||
						(second = charCodeAt(S, position + 1)) < 0xdc00 ||
						second > 0xdfff
						? CONVERT_TO_STRING
							? charAt(S, position)
							: first
						: CONVERT_TO_STRING
						? stringSlice(S, position, position + 2)
						: ((first - 0xd800) << 10) + (second - 0xdc00) + 0x10000;
				};
			};

			module.exports = {
				// `String.prototype.codePointAt` method
				// https://tc39.es/ecma262/#sec-string.prototype.codepointat
				codeAt: createMethod(false),
				// `String.prototype.at` method
				// https://github.com/mathiasbynens/String.prototype.at
				charAt: createMethod(true),
			};

			/***/
		},

		/***/ 3111: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);
			var requireObjectCoercible = __webpack_require__(4488);
			var toString = __webpack_require__(1340);
			var whitespaces = __webpack_require__(1361);

			var replace = uncurryThis("".replace);
			var ltrim = RegExp("^[" + whitespaces + "]+");
			var rtrim = RegExp("(^|[^" + whitespaces + "])[" + whitespaces + "]+$");

			// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
			var createMethod = function (TYPE) {
				return function ($this) {
					var string = toString(requireObjectCoercible($this));
					if (TYPE & 1) string = replace(string, ltrim, "");
					if (TYPE & 2) string = replace(string, rtrim, "$1");
					return string;
				};
			};

			module.exports = {
				// `String.prototype.{ trimLeft, trimStart }` methods
				// https://tc39.es/ecma262/#sec-string.prototype.trimstart
				start: createMethod(1),
				// `String.prototype.{ trimRight, trimEnd }` methods
				// https://tc39.es/ecma262/#sec-string.prototype.trimend
				end: createMethod(2),
				// `String.prototype.trim` method
				// https://tc39.es/ecma262/#sec-string.prototype.trim
				trim: createMethod(3),
			};

			/***/
		},

		/***/ 6293: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			/* eslint-disable es/no-symbol -- required for testing */
			var V8_VERSION = __webpack_require__(7392);
			var fails = __webpack_require__(7293);
			var global = __webpack_require__(7854);

			var $String = global.String;

			// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
			module.exports =
				!!Object.getOwnPropertySymbols &&
				!fails(function () {
					var symbol = Symbol("symbol detection");
					// Chrome 38 Symbol has incorrect toString conversion
					// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
					// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
					// of course, fail.
					return (
						!$String(symbol) ||
						!(Object(symbol) instanceof Symbol) ||
						// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
						(!Symbol.sham && V8_VERSION && V8_VERSION < 41)
					);
				});

			/***/
		},

		/***/ 1400: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var toIntegerOrInfinity = __webpack_require__(9303);

			var max = Math.max;
			var min = Math.min;

			// Helper for a popular repeating case of the spec:
			// Let integer be ? ToInteger(index).
			// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
			module.exports = function (index, length) {
				var integer = toIntegerOrInfinity(index);
				return integer < 0 ? max(integer + length, 0) : min(integer, length);
			};

			/***/
		},

		/***/ 5656: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			// toObject with fallback for non-array-like ES3 strings
			var IndexedObject = __webpack_require__(8361);
			var requireObjectCoercible = __webpack_require__(4488);

			module.exports = function (it) {
				return IndexedObject(requireObjectCoercible(it));
			};

			/***/
		},

		/***/ 9303: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var trunc = __webpack_require__(4758);

			// `ToIntegerOrInfinity` abstract operation
			// https://tc39.es/ecma262/#sec-tointegerorinfinity
			module.exports = function (argument) {
				var number = +argument;
				// eslint-disable-next-line no-self-compare -- NaN check
				return number !== number || number === 0 ? 0 : trunc(number);
			};

			/***/
		},

		/***/ 7466: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var toIntegerOrInfinity = __webpack_require__(9303);

			var min = Math.min;

			// `ToLength` abstract operation
			// https://tc39.es/ecma262/#sec-tolength
			module.exports = function (argument) {
				return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
			};

			/***/
		},

		/***/ 7908: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var requireObjectCoercible = __webpack_require__(4488);

			var $Object = Object;

			// `ToObject` abstract operation
			// https://tc39.es/ecma262/#sec-toobject
			module.exports = function (argument) {
				return $Object(requireObjectCoercible(argument));
			};

			/***/
		},

		/***/ 7593: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var call = __webpack_require__(6916);
			var isObject = __webpack_require__(111);
			var isSymbol = __webpack_require__(2190);
			var getMethod = __webpack_require__(8173);
			var ordinaryToPrimitive = __webpack_require__(2140);
			var wellKnownSymbol = __webpack_require__(5112);

			var $TypeError = TypeError;
			var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");

			// `ToPrimitive` abstract operation
			// https://tc39.es/ecma262/#sec-toprimitive
			module.exports = function (input, pref) {
				if (!isObject(input) || isSymbol(input)) return input;
				var exoticToPrim = getMethod(input, TO_PRIMITIVE);
				var result;
				if (exoticToPrim) {
					if (pref === undefined) pref = "default";
					result = call(exoticToPrim, input, pref);
					if (!isObject(result) || isSymbol(result)) return result;
					throw $TypeError("Can't convert object to primitive value");
				}
				if (pref === undefined) pref = "number";
				return ordinaryToPrimitive(input, pref);
			};

			/***/
		},

		/***/ 4948: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var toPrimitive = __webpack_require__(7593);
			var isSymbol = __webpack_require__(2190);

			// `ToPropertyKey` abstract operation
			// https://tc39.es/ecma262/#sec-topropertykey
			module.exports = function (argument) {
				var key = toPrimitive(argument, "string");
				return isSymbol(key) ? key : key + "";
			};

			/***/
		},

		/***/ 1694: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var wellKnownSymbol = __webpack_require__(5112);

			var TO_STRING_TAG = wellKnownSymbol("toStringTag");
			var test = {};

			test[TO_STRING_TAG] = "z";

			module.exports = String(test) === "[object z]";

			/***/
		},

		/***/ 1340: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var classof = __webpack_require__(648);

			var $String = String;

			module.exports = function (argument) {
				if (classof(argument) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
				return $String(argument);
			};

			/***/
		},

		/***/ 6330: /***/ (module) => {
			"use strict";

			var $String = String;

			module.exports = function (argument) {
				try {
					return $String(argument);
				} catch (error) {
					return "Object";
				}
			};

			/***/
		},

		/***/ 9711: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var uncurryThis = __webpack_require__(1702);

			var id = 0;
			var postfix = Math.random();
			var toString = uncurryThis((1.0).toString);

			module.exports = function (key) {
				return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
			};

			/***/
		},

		/***/ 3307: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			/* eslint-disable es/no-symbol -- required for testing */
			var NATIVE_SYMBOL = __webpack_require__(6293);

			module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

			/***/
		},

		/***/ 3353: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var DESCRIPTORS = __webpack_require__(9781);
			var fails = __webpack_require__(7293);

			// V8 ~ Chrome 36-
			// https://bugs.chromium.org/p/v8/issues/detail?id=3334
			module.exports =
				DESCRIPTORS &&
				fails(function () {
					// eslint-disable-next-line es/no-object-defineproperty -- required for testing
					return (
						Object.defineProperty(
							function () {
								/* empty */
							},
							"prototype",
							{
								value: 42,
								writable: false,
							}
						).prototype !== 42
					);
				});

			/***/
		},

		/***/ 4811: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var global = __webpack_require__(7854);
			var isCallable = __webpack_require__(614);

			var WeakMap = global.WeakMap;

			module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

			/***/
		},

		/***/ 5112: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var global = __webpack_require__(7854);
			var shared = __webpack_require__(2309);
			var hasOwn = __webpack_require__(2597);
			var uid = __webpack_require__(9711);
			var NATIVE_SYMBOL = __webpack_require__(6293);
			var USE_SYMBOL_AS_UID = __webpack_require__(3307);

			var Symbol = global.Symbol;
			var WellKnownSymbolsStore = shared("wks");
			var createWellKnownSymbol = USE_SYMBOL_AS_UID
				? Symbol["for"] || Symbol
				: (Symbol && Symbol.withoutSetter) || uid;

			module.exports = function (name) {
				if (!hasOwn(WellKnownSymbolsStore, name)) {
					WellKnownSymbolsStore[name] =
						NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
				}
				return WellKnownSymbolsStore[name];
			};

			/***/
		},

		/***/ 1361: /***/ (module) => {
			"use strict";

			// a string of all valid unicode whitespaces
			module.exports =
				"\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002" +
				"\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

			/***/
		},

		/***/ 7327: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var $ = __webpack_require__(2109);
			var $filter = __webpack_require__(2092).filter;
			var arrayMethodHasSpeciesSupport = __webpack_require__(1194);

			var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("filter");

			// `Array.prototype.filter` method
			// https://tc39.es/ecma262/#sec-array.prototype.filter
			// with adding support of @@species
			$(
				{ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT },
				{
					filter: function filter(callbackfn /* , thisArg */) {
						return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
					},
				}
			);

			/***/
		},

		/***/ 6992: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var toIndexedObject = __webpack_require__(5656);
			var addToUnscopables = __webpack_require__(1223);
			var Iterators = __webpack_require__(7497);
			var InternalStateModule = __webpack_require__(9909);
			var defineProperty = __webpack_require__(3070).f;
			var defineIterator = __webpack_require__(1656);
			var createIterResultObject = __webpack_require__(6178);
			var IS_PURE = __webpack_require__(1913);
			var DESCRIPTORS = __webpack_require__(9781);

			var ARRAY_ITERATOR = "Array Iterator";
			var setInternalState = InternalStateModule.set;
			var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

			// `Array.prototype.entries` method
			// https://tc39.es/ecma262/#sec-array.prototype.entries
			// `Array.prototype.keys` method
			// https://tc39.es/ecma262/#sec-array.prototype.keys
			// `Array.prototype.values` method
			// https://tc39.es/ecma262/#sec-array.prototype.values
			// `Array.prototype[@@iterator]` method
			// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
			// `CreateArrayIterator` internal method
			// https://tc39.es/ecma262/#sec-createarrayiterator
			module.exports = defineIterator(
				Array,
				"Array",
				function (iterated, kind) {
					setInternalState(this, {
						type: ARRAY_ITERATOR,
						target: toIndexedObject(iterated), // target
						index: 0, // next index
						kind: kind, // kind
					});
					// `%ArrayIteratorPrototype%.next` method
					// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
				},
				function () {
					var state = getInternalState(this);
					var target = state.target;
					var kind = state.kind;
					var index = state.index++;
					if (!target || index >= target.length) {
						state.target = undefined;
						return createIterResultObject(undefined, true);
					}
					switch (kind) {
						case "keys":
							return createIterResultObject(index, false);
						case "values":
							return createIterResultObject(target[index], false);
					}
					return createIterResultObject([index, target[index]], false);
				},
				"values"
			);

			// argumentsList[@@iterator] is %ArrayProto_values%
			// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
			// https://tc39.es/ecma262/#sec-createmappedargumentsobject
			var values = (Iterators.Arguments = Iterators.Array);

			// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
			addToUnscopables("keys");
			addToUnscopables("values");
			addToUnscopables("entries");

			// V8 ~ Chrome 45- bug
			if (!IS_PURE && DESCRIPTORS && values.name !== "values")
				try {
					defineProperty(values, "name", { value: "values" });
				} catch (error) {
					/* empty */
				}

			/***/
		},

		/***/ 5827: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var $ = __webpack_require__(2109);
			var $reduce = __webpack_require__(3671).left;
			var arrayMethodIsStrict = __webpack_require__(9341);
			var CHROME_VERSION = __webpack_require__(7392);
			var IS_NODE = __webpack_require__(5268);

			// Chrome 80-82 has a critical bug
			// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
			var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
			var FORCED = CHROME_BUG || !arrayMethodIsStrict("reduce");

			// `Array.prototype.reduce` method
			// https://tc39.es/ecma262/#sec-array.prototype.reduce
			$(
				{ target: "Array", proto: true, forced: FORCED },
				{
					reduce: function reduce(callbackfn /* , initialValue */) {
						var length = arguments.length;
						return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
					},
				}
			);

			/***/
		},

		/***/ 8309: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var DESCRIPTORS = __webpack_require__(9781);
			var FUNCTION_NAME_EXISTS = __webpack_require__(6530).EXISTS;
			var uncurryThis = __webpack_require__(1702);
			var defineBuiltInAccessor = __webpack_require__(7045);

			var FunctionPrototype = Function.prototype;
			var functionToString = uncurryThis(FunctionPrototype.toString);
			var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
			var regExpExec = uncurryThis(nameRE.exec);
			var NAME = "name";

			// Function instances `.name` property
			// https://tc39.es/ecma262/#sec-function-instances-name
			if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
				defineBuiltInAccessor(FunctionPrototype, NAME, {
					configurable: true,
					get: function () {
						try {
							return regExpExec(nameRE, functionToString(this))[1];
						} catch (error) {
							return "";
						}
					},
				});
			}

			/***/
		},

		/***/ 9601: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var $ = __webpack_require__(2109);
			var assign = __webpack_require__(1574);

			// `Object.assign` method
			// https://tc39.es/ecma262/#sec-object.assign
			// eslint-disable-next-line es/no-object-assign -- required for testing
			$(
				{ target: "Object", stat: true, arity: 2, forced: Object.assign !== assign },
				{
					assign: assign,
				}
			);

			/***/
		},

		/***/ 1539: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var TO_STRING_TAG_SUPPORT = __webpack_require__(1694);
			var defineBuiltIn = __webpack_require__(8052);
			var toString = __webpack_require__(288);

			// `Object.prototype.toString` method
			// https://tc39.es/ecma262/#sec-object.prototype.tostring
			if (!TO_STRING_TAG_SUPPORT) {
				defineBuiltIn(Object.prototype, "toString", toString, { unsafe: true });
			}

			/***/
		},

		/***/ 1058: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var $ = __webpack_require__(2109);
			var $parseInt = __webpack_require__(3009);

			// `parseInt` method
			// https://tc39.es/ecma262/#sec-parseint-string-radix
			$(
				{ global: true, forced: parseInt !== $parseInt },
				{
					parseInt: $parseInt,
				}
			);

			/***/
		},

		/***/ 4916: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var $ = __webpack_require__(2109);
			var exec = __webpack_require__(2261);

			// `RegExp.prototype.exec` method
			// https://tc39.es/ecma262/#sec-regexp.prototype.exec
			$(
				{ target: "RegExp", proto: true, forced: /./.exec !== exec },
				{
					exec: exec,
				}
			);

			/***/
		},

		/***/ 8783: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var charAt = __webpack_require__(8710).charAt;
			var toString = __webpack_require__(1340);
			var InternalStateModule = __webpack_require__(9909);
			var defineIterator = __webpack_require__(1656);
			var createIterResultObject = __webpack_require__(6178);

			var STRING_ITERATOR = "String Iterator";
			var setInternalState = InternalStateModule.set;
			var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

			// `String.prototype[@@iterator]` method
			// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
			defineIterator(
				String,
				"String",
				function (iterated) {
					setInternalState(this, {
						type: STRING_ITERATOR,
						string: toString(iterated),
						index: 0,
					});
					// `%StringIteratorPrototype%.next` method
					// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
				},
				function next() {
					var state = getInternalState(this);
					var string = state.string;
					var index = state.index;
					var point;
					if (index >= string.length) return createIterResultObject(undefined, true);
					point = charAt(string, index);
					state.index += point.length;
					return createIterResultObject(point, false);
				}
			);

			/***/
		},

		/***/ 4723: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var call = __webpack_require__(6916);
			var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
			var anObject = __webpack_require__(9670);
			var isNullOrUndefined = __webpack_require__(8554);
			var toLength = __webpack_require__(7466);
			var toString = __webpack_require__(1340);
			var requireObjectCoercible = __webpack_require__(4488);
			var getMethod = __webpack_require__(8173);
			var advanceStringIndex = __webpack_require__(1530);
			var regExpExec = __webpack_require__(7651);

			// @@match logic
			fixRegExpWellKnownSymbolLogic("match", function (MATCH, nativeMatch, maybeCallNative) {
				return [
					// `String.prototype.match` method
					// https://tc39.es/ecma262/#sec-string.prototype.match
					function match(regexp) {
						var O = requireObjectCoercible(this);
						var matcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, MATCH);
						return matcher ? call(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString(O));
					},
					// `RegExp.prototype[@@match]` method
					// https://tc39.es/ecma262/#sec-regexp.prototype-@@match
					function (string) {
						var rx = anObject(this);
						var S = toString(string);
						var res = maybeCallNative(nativeMatch, rx, S);

						if (res.done) return res.value;

						if (!rx.global) return regExpExec(rx, S);

						var fullUnicode = rx.unicode;
						rx.lastIndex = 0;
						var A = [];
						var n = 0;
						var result;
						while ((result = regExpExec(rx, S)) !== null) {
							var matchStr = toString(result[0]);
							A[n] = matchStr;
							if (matchStr === "")
								rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
							n++;
						}
						return n === 0 ? null : A;
					},
				];
			});

			/***/
		},

		/***/ 5306: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var apply = __webpack_require__(2104);
			var call = __webpack_require__(6916);
			var uncurryThis = __webpack_require__(1702);
			var fixRegExpWellKnownSymbolLogic = __webpack_require__(7007);
			var fails = __webpack_require__(7293);
			var anObject = __webpack_require__(9670);
			var isCallable = __webpack_require__(614);
			var isNullOrUndefined = __webpack_require__(8554);
			var toIntegerOrInfinity = __webpack_require__(9303);
			var toLength = __webpack_require__(7466);
			var toString = __webpack_require__(1340);
			var requireObjectCoercible = __webpack_require__(4488);
			var advanceStringIndex = __webpack_require__(1530);
			var getMethod = __webpack_require__(8173);
			var getSubstitution = __webpack_require__(647);
			var regExpExec = __webpack_require__(7651);
			var wellKnownSymbol = __webpack_require__(5112);

			var REPLACE = wellKnownSymbol("replace");
			var max = Math.max;
			var min = Math.min;
			var concat = uncurryThis([].concat);
			var push = uncurryThis([].push);
			var stringIndexOf = uncurryThis("".indexOf);
			var stringSlice = uncurryThis("".slice);

			var maybeToString = function (it) {
				return it === undefined ? it : String(it);
			};

			// IE <= 11 replaces $0 with the whole match, as if it was $&
			// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
			var REPLACE_KEEPS_$0 = (function () {
				// eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
				return "a".replace(/./, "$0") === "$0";
			})();

			// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
			var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
				if (/./[REPLACE]) {
					return /./[REPLACE]("a", "$0") === "";
				}
				return false;
			})();

			var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
				var re = /./;
				re.exec = function () {
					var result = [];
					result.groups = { a: "7" };
					return result;
				};
				// eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
				return "".replace(re, "$<a>") !== "7";
			});

			// @@replace logic
			fixRegExpWellKnownSymbolLogic(
				"replace",
				function (_, nativeReplace, maybeCallNative) {
					var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";

					return [
						// `String.prototype.replace` method
						// https://tc39.es/ecma262/#sec-string.prototype.replace
						function replace(searchValue, replaceValue) {
							var O = requireObjectCoercible(this);
							var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
							return replacer
								? call(replacer, searchValue, O, replaceValue)
								: call(nativeReplace, toString(O), searchValue, replaceValue);
						},
						// `RegExp.prototype[@@replace]` method
						// https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
						function (string, replaceValue) {
							var rx = anObject(this);
							var S = toString(string);

							if (
								typeof replaceValue == "string" &&
								stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
								stringIndexOf(replaceValue, "$<") === -1
							) {
								var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
								if (res.done) return res.value;
							}

							var functionalReplace = isCallable(replaceValue);
							if (!functionalReplace) replaceValue = toString(replaceValue);

							var global = rx.global;
							var fullUnicode;
							if (global) {
								fullUnicode = rx.unicode;
								rx.lastIndex = 0;
							}

							var results = [];
							var result;
							while (true) {
								result = regExpExec(rx, S);
								if (result === null) break;

								push(results, result);
								if (!global) break;

								var matchStr = toString(result[0]);
								if (matchStr === "")
									rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
							}

							var accumulatedResult = "";
							var nextSourcePosition = 0;
							for (var i = 0; i < results.length; i++) {
								result = results[i];

								var matched = toString(result[0]);
								var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
								var captures = [];
								var replacement;
								// NOTE: This is equivalent to
								//   captures = result.slice(1).map(maybeToString)
								// but for some reason `nativeSlice.call(result, 1, result.length)` (called in
								// the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
								// causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
								for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
								var namedCaptures = result.groups;
								if (functionalReplace) {
									var replacerArgs = concat([matched], captures, position, S);
									if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
									replacement = toString(apply(replaceValue, undefined, replacerArgs));
								} else {
									replacement = getSubstitution(
										matched,
										S,
										position,
										captures,
										namedCaptures,
										replaceValue
									);
								}
								if (position >= nextSourcePosition) {
									accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
									nextSourcePosition = position + matched.length;
								}
							}

							return accumulatedResult + stringSlice(S, nextSourcePosition);
						},
					];
				},
				!REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
			);

			/***/
		},

		/***/ 1202: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var FREEZING = __webpack_require__(6677);
			var global = __webpack_require__(7854);
			var uncurryThis = __webpack_require__(1702);
			var defineBuiltIns = __webpack_require__(9190);
			var InternalMetadataModule = __webpack_require__(2423);
			var collection = __webpack_require__(7710);
			var collectionWeak = __webpack_require__(9320);
			var isObject = __webpack_require__(111);
			var enforceInternalState = __webpack_require__(9909).enforce;
			var fails = __webpack_require__(7293);
			var NATIVE_WEAK_MAP = __webpack_require__(4811);

			var $Object = Object;
			// eslint-disable-next-line es/no-array-isarray -- safe
			var isArray = Array.isArray;
			// eslint-disable-next-line es/no-object-isextensible -- safe
			var isExtensible = $Object.isExtensible;
			// eslint-disable-next-line es/no-object-isfrozen -- safe
			var isFrozen = $Object.isFrozen;
			// eslint-disable-next-line es/no-object-issealed -- safe
			var isSealed = $Object.isSealed;
			// eslint-disable-next-line es/no-object-freeze -- safe
			var freeze = $Object.freeze;
			// eslint-disable-next-line es/no-object-seal -- safe
			var seal = $Object.seal;

			var FROZEN = {};
			var SEALED = {};
			var IS_IE11 = !global.ActiveXObject && "ActiveXObject" in global;
			var InternalWeakMap;

			var wrapper = function (init) {
				return function WeakMap() {
					return init(this, arguments.length ? arguments[0] : undefined);
				};
			};

			// `WeakMap` constructor
			// https://tc39.es/ecma262/#sec-weakmap-constructor
			var $WeakMap = collection("WeakMap", wrapper, collectionWeak);
			var WeakMapPrototype = $WeakMap.prototype;
			var nativeSet = uncurryThis(WeakMapPrototype.set);

			// Chakra Edge bug: adding frozen arrays to WeakMap unfreeze them
			var hasMSEdgeFreezingBug = function () {
				return (
					FREEZING &&
					fails(function () {
						var frozenArray = freeze([]);
						nativeSet(new $WeakMap(), frozenArray, 1);
						return !isFrozen(frozenArray);
					})
				);
			};

			// IE11 WeakMap frozen keys fix
			// We can't use feature detection because it crash some old IE builds
			// https://github.com/zloirock/core-js/issues/485
			if (NATIVE_WEAK_MAP)
				if (IS_IE11) {
					InternalWeakMap = collectionWeak.getConstructor(wrapper, "WeakMap", true);
					InternalMetadataModule.enable();
					var nativeDelete = uncurryThis(WeakMapPrototype["delete"]);
					var nativeHas = uncurryThis(WeakMapPrototype.has);
					var nativeGet = uncurryThis(WeakMapPrototype.get);
					defineBuiltIns(WeakMapPrototype, {
						delete: function (key) {
							if (isObject(key) && !isExtensible(key)) {
								var state = enforceInternalState(this);
								if (!state.frozen) state.frozen = new InternalWeakMap();
								return nativeDelete(this, key) || state.frozen["delete"](key);
							}
							return nativeDelete(this, key);
						},
						has: function has(key) {
							if (isObject(key) && !isExtensible(key)) {
								var state = enforceInternalState(this);
								if (!state.frozen) state.frozen = new InternalWeakMap();
								return nativeHas(this, key) || state.frozen.has(key);
							}
							return nativeHas(this, key);
						},
						get: function get(key) {
							if (isObject(key) && !isExtensible(key)) {
								var state = enforceInternalState(this);
								if (!state.frozen) state.frozen = new InternalWeakMap();
								return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
							}
							return nativeGet(this, key);
						},
						set: function set(key, value) {
							if (isObject(key) && !isExtensible(key)) {
								var state = enforceInternalState(this);
								if (!state.frozen) state.frozen = new InternalWeakMap();
								nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
							} else nativeSet(this, key, value);
							return this;
						},
					});
					// Chakra Edge frozen keys fix
				} else if (hasMSEdgeFreezingBug()) {
					defineBuiltIns(WeakMapPrototype, {
						set: function set(key, value) {
							var arrayIntegrityLevel;
							if (isArray(key)) {
								if (isFrozen(key)) arrayIntegrityLevel = FROZEN;
								else if (isSealed(key)) arrayIntegrityLevel = SEALED;
							}
							nativeSet(this, key, value);
							if (arrayIntegrityLevel === FROZEN) freeze(key);
							if (arrayIntegrityLevel === SEALED) seal(key);
							return this;
						},
					});
				}

			/***/
		},

		/***/ 4129: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			// TODO: Remove this module from `core-js@4` since it's replaced to module below
			__webpack_require__(1202);

			/***/
		},

		/***/ 4747: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var global = __webpack_require__(7854);
			var DOMIterables = __webpack_require__(8324);
			var DOMTokenListPrototype = __webpack_require__(8509);
			var forEach = __webpack_require__(8533);
			var createNonEnumerableProperty = __webpack_require__(8880);

			var handlePrototype = function (CollectionPrototype) {
				// some Chrome versions have non-configurable methods on DOMTokenList
				if (CollectionPrototype && CollectionPrototype.forEach !== forEach)
					try {
						createNonEnumerableProperty(CollectionPrototype, "forEach", forEach);
					} catch (error) {
						CollectionPrototype.forEach = forEach;
					}
			};

			for (var COLLECTION_NAME in DOMIterables) {
				if (DOMIterables[COLLECTION_NAME]) {
					handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
				}
			}

			handlePrototype(DOMTokenListPrototype);

			/***/
		},

		/***/ 3948: /***/ (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
			"use strict";

			var global = __webpack_require__(7854);
			var DOMIterables = __webpack_require__(8324);
			var DOMTokenListPrototype = __webpack_require__(8509);
			var ArrayIteratorMethods = __webpack_require__(6992);
			var createNonEnumerableProperty = __webpack_require__(8880);
			var wellKnownSymbol = __webpack_require__(5112);

			var ITERATOR = wellKnownSymbol("iterator");
			var TO_STRING_TAG = wellKnownSymbol("toStringTag");
			var ArrayValues = ArrayIteratorMethods.values;

			var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
				if (CollectionPrototype) {
					// some Chrome versions have non-configurable methods on DOMTokenList
					if (CollectionPrototype[ITERATOR] !== ArrayValues)
						try {
							createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
						} catch (error) {
							CollectionPrototype[ITERATOR] = ArrayValues;
						}
					if (!CollectionPrototype[TO_STRING_TAG]) {
						createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
					}
					if (DOMIterables[COLLECTION_NAME])
						for (var METHOD_NAME in ArrayIteratorMethods) {
							// some Chrome versions have non-configurable methods on DOMTokenList
							if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME])
								try {
									createNonEnumerableProperty(
										CollectionPrototype,
										METHOD_NAME,
										ArrayIteratorMethods[METHOD_NAME]
									);
								} catch (error) {
									CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
								}
						}
				}
			};

			for (var COLLECTION_NAME in DOMIterables) {
				handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);
			}

			handlePrototype(DOMTokenListPrototype, "DOMTokenList");

			/***/
		},

		/***/ 1296: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			/**
			 * lodash (Custom Build) <https://lodash.com/>
			 * Build: `lodash modularize exports="npm" -o ./`
			 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
			 * Released under MIT license <https://lodash.com/license>
			 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
			 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
			 */

			/** Used as the `TypeError` message for "Functions" methods. */
			var FUNC_ERROR_TEXT = "Expected a function";

			/** Used as references for various `Number` constants. */
			var NAN = 0 / 0;

			/** `Object#toString` result references. */
			var symbolTag = "[object Symbol]";

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

			/** Detect free variable `global` from Node.js. */
			var freeGlobal =
				typeof __webpack_require__.g == "object" &&
				__webpack_require__.g &&
				__webpack_require__.g.Object === Object &&
				__webpack_require__.g;

			/** Detect free variable `self`. */
			var freeSelf = typeof self == "object" && self && self.Object === Object && self;

			/** Used as a reference to the global object. */
			var root = freeGlobal || freeSelf || Function("return this")();

			/** Used for built-in method references. */
			var objectProto = Object.prototype;

			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var objectToString = objectProto.toString;

			/* Built-in method references for those with the same name as other `lodash` methods. */
			var nativeMax = Math.max,
				nativeMin = Math.min;

			/**
			 * Gets the timestamp of the number of milliseconds that have elapsed since
			 * the Unix epoch (1 January 1970 00:00:00 UTC).
			 *
			 * @static
			 * @memberOf _
			 * @since 2.4.0
			 * @category Date
			 * @returns {number} Returns the timestamp.
			 * @example
			 *
			 * _.defer(function(stamp) {
			 *   console.log(_.now() - stamp);
			 * }, _.now());
			 * // => Logs the number of milliseconds it took for the deferred invocation.
			 */
			var now = function () {
				return root.Date.now();
			};

			/**
			 * Creates a debounced function that delays invoking `func` until after `wait`
			 * milliseconds have elapsed since the last time the debounced function was
			 * invoked. The debounced function comes with a `cancel` method to cancel
			 * delayed `func` invocations and a `flush` method to immediately invoke them.
			 * Provide `options` to indicate whether `func` should be invoked on the
			 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
			 * with the last arguments provided to the debounced function. Subsequent
			 * calls to the debounced function return the result of the last `func`
			 * invocation.
			 *
			 * **Note:** If `leading` and `trailing` options are `true`, `func` is
			 * invoked on the trailing edge of the timeout only if the debounced function
			 * is invoked more than once during the `wait` timeout.
			 *
			 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
			 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
			 *
			 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
			 * for details over the differences between `_.debounce` and `_.throttle`.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Function
			 * @param {Function} func The function to debounce.
			 * @param {number} [wait=0] The number of milliseconds to delay.
			 * @param {Object} [options={}] The options object.
			 * @param {boolean} [options.leading=false]
			 *  Specify invoking on the leading edge of the timeout.
			 * @param {number} [options.maxWait]
			 *  The maximum time `func` is allowed to be delayed before it's invoked.
			 * @param {boolean} [options.trailing=true]
			 *  Specify invoking on the trailing edge of the timeout.
			 * @returns {Function} Returns the new debounced function.
			 * @example
			 *
			 * // Avoid costly calculations while the window size is in flux.
			 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
			 *
			 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
			 * jQuery(element).on('click', _.debounce(sendMail, 300, {
			 *   'leading': true,
			 *   'trailing': false
			 * }));
			 *
			 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
			 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
			 * var source = new EventSource('/stream');
			 * jQuery(source).on('message', debounced);
			 *
			 * // Cancel the trailing debounced invocation.
			 * jQuery(window).on('popstate', debounced.cancel);
			 */
			function debounce(func, wait, options) {
				var lastArgs,
					lastThis,
					maxWait,
					result,
					timerId,
					lastCallTime,
					lastInvokeTime = 0,
					leading = false,
					maxing = false,
					trailing = true;

				if (typeof func != "function") {
					throw new TypeError(FUNC_ERROR_TEXT);
				}
				wait = toNumber(wait) || 0;
				if (isObject(options)) {
					leading = !!options.leading;
					maxing = "maxWait" in options;
					maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
					trailing = "trailing" in options ? !!options.trailing : trailing;
				}

				function invokeFunc(time) {
					var args = lastArgs,
						thisArg = lastThis;

					lastArgs = lastThis = undefined;
					lastInvokeTime = time;
					result = func.apply(thisArg, args);
					return result;
				}

				function leadingEdge(time) {
					// Reset any `maxWait` timer.
					lastInvokeTime = time;
					// Start the timer for the trailing edge.
					timerId = setTimeout(timerExpired, wait);
					// Invoke the leading edge.
					return leading ? invokeFunc(time) : result;
				}

				function remainingWait(time) {
					var timeSinceLastCall = time - lastCallTime,
						timeSinceLastInvoke = time - lastInvokeTime,
						result = wait - timeSinceLastCall;

					return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
				}

				function shouldInvoke(time) {
					var timeSinceLastCall = time - lastCallTime,
						timeSinceLastInvoke = time - lastInvokeTime;

					// Either this is the first call, activity has stopped and we're at the
					// trailing edge, the system time has gone backwards and we're treating
					// it as the trailing edge, or we've hit the `maxWait` limit.
					return (
						lastCallTime === undefined ||
						timeSinceLastCall >= wait ||
						timeSinceLastCall < 0 ||
						(maxing && timeSinceLastInvoke >= maxWait)
					);
				}

				function timerExpired() {
					var time = now();
					if (shouldInvoke(time)) {
						return trailingEdge(time);
					}
					// Restart the timer.
					timerId = setTimeout(timerExpired, remainingWait(time));
				}

				function trailingEdge(time) {
					timerId = undefined;

					// Only invoke if we have `lastArgs` which means `func` has been
					// debounced at least once.
					if (trailing && lastArgs) {
						return invokeFunc(time);
					}
					lastArgs = lastThis = undefined;
					return result;
				}

				function cancel() {
					if (timerId !== undefined) {
						clearTimeout(timerId);
					}
					lastInvokeTime = 0;
					lastArgs = lastCallTime = lastThis = timerId = undefined;
				}

				function flush() {
					return timerId === undefined ? result : trailingEdge(now());
				}

				function debounced() {
					var time = now(),
						isInvoking = shouldInvoke(time);

					lastArgs = arguments;
					lastThis = this;
					lastCallTime = time;

					if (isInvoking) {
						if (timerId === undefined) {
							return leadingEdge(lastCallTime);
						}
						if (maxing) {
							// Handle invocations in a tight loop.
							timerId = setTimeout(timerExpired, wait);
							return invokeFunc(lastCallTime);
						}
					}
					if (timerId === undefined) {
						timerId = setTimeout(timerExpired, wait);
					}
					return result;
				}
				debounced.cancel = cancel;
				debounced.flush = flush;
				return debounced;
			}

			/**
			 * Checks if `value` is the
			 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
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
				return !!value && (type == "object" || type == "function");
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
				return !!value && typeof value == "object";
			}

			/**
			 * Checks if `value` is classified as a `Symbol` primitive or object.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
			 * @example
			 *
			 * _.isSymbol(Symbol.iterator);
			 * // => true
			 *
			 * _.isSymbol('abc');
			 * // => false
			 */
			function isSymbol(value) {
				return typeof value == "symbol" || (isObjectLike(value) && objectToString.call(value) == symbolTag);
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
				if (typeof value == "number") {
					return value;
				}
				if (isSymbol(value)) {
					return NAN;
				}
				if (isObject(value)) {
					var other = typeof value.valueOf == "function" ? value.valueOf() : value;
					value = isObject(other) ? other + "" : other;
				}
				if (typeof value != "string") {
					return value === 0 ? value : +value;
				}
				value = value.replace(reTrim, "");
				var isBinary = reIsBinary.test(value);
				return isBinary || reIsOctal.test(value)
					? freeParseInt(value.slice(2), isBinary ? 2 : 8)
					: reIsBadHex.test(value)
					? NAN
					: +value;
			}

			module.exports = debounce;

			/***/
		},

		/***/ 773: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			/**
			 * lodash (Custom Build) <https://lodash.com/>
			 * Build: `lodash modularize exports="npm" -o ./`
			 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
			 * Released under MIT license <https://lodash.com/license>
			 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
			 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
			 */

			/** Used as the `TypeError` message for "Functions" methods. */
			var FUNC_ERROR_TEXT = "Expected a function";

			/** Used to stand-in for `undefined` hash values. */
			var HASH_UNDEFINED = "__lodash_hash_undefined__";

			/** `Object#toString` result references. */
			var funcTag = "[object Function]",
				genTag = "[object GeneratorFunction]";

			/**
			 * Used to match `RegExp`
			 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
			 */
			var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

			/** Used to detect host constructors (Safari). */
			var reIsHostCtor = /^\[object .+?Constructor\]$/;

			/** Detect free variable `global` from Node.js. */
			var freeGlobal =
				typeof __webpack_require__.g == "object" &&
				__webpack_require__.g &&
				__webpack_require__.g.Object === Object &&
				__webpack_require__.g;

			/** Detect free variable `self`. */
			var freeSelf = typeof self == "object" && self && self.Object === Object && self;

			/** Used as a reference to the global object. */
			var root = freeGlobal || freeSelf || Function("return this")();

			/**
			 * Gets the value at `key` of `object`.
			 *
			 * @private
			 * @param {Object} [object] The object to query.
			 * @param {string} key The key of the property to get.
			 * @returns {*} Returns the property value.
			 */
			function getValue(object, key) {
				return object == null ? undefined : object[key];
			}

			/**
			 * Checks if `value` is a host object in IE < 9.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
			 */
			function isHostObject(value) {
				// Many host objects are `Object` objects that can coerce to strings
				// despite having improperly defined `toString` methods.
				var result = false;
				if (value != null && typeof value.toString != "function") {
					try {
						result = !!(value + "");
					} catch (e) {}
				}
				return result;
			}

			/** Used for built-in method references. */
			var arrayProto = Array.prototype,
				funcProto = Function.prototype,
				objectProto = Object.prototype;

			/** Used to detect overreaching core-js shims. */
			var coreJsData = root["__core-js_shared__"];

			/** Used to detect methods masquerading as native. */
			var maskSrcKey = (function () {
				var uid = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || "");
				return uid ? "Symbol(src)_1." + uid : "";
			})();

			/** Used to resolve the decompiled source of functions. */
			var funcToString = funcProto.toString;

			/** Used to check objects for own properties. */
			var hasOwnProperty = objectProto.hasOwnProperty;

			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var objectToString = objectProto.toString;

			/** Used to detect if a method is native. */
			var reIsNative = RegExp(
				"^" +
					funcToString
						.call(hasOwnProperty)
						.replace(reRegExpChar, "\\$&")
						.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
					"$"
			);

			/** Built-in value references. */
			var splice = arrayProto.splice;

			/* Built-in method references that are verified to be native. */
			var Map = getNative(root, "Map"),
				nativeCreate = getNative(Object, "create");

			/**
			 * Creates a hash object.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function Hash(entries) {
				var index = -1,
					length = entries ? entries.length : 0;

				this.clear();
				while (++index < length) {
					var entry = entries[index];
					this.set(entry[0], entry[1]);
				}
			}

			/**
			 * Removes all key-value entries from the hash.
			 *
			 * @private
			 * @name clear
			 * @memberOf Hash
			 */
			function hashClear() {
				this.__data__ = nativeCreate ? nativeCreate(null) : {};
			}

			/**
			 * Removes `key` and its value from the hash.
			 *
			 * @private
			 * @name delete
			 * @memberOf Hash
			 * @param {Object} hash The hash to modify.
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function hashDelete(key) {
				return this.has(key) && delete this.__data__[key];
			}

			/**
			 * Gets the hash value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf Hash
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function hashGet(key) {
				var data = this.__data__;
				if (nativeCreate) {
					var result = data[key];
					return result === HASH_UNDEFINED ? undefined : result;
				}
				return hasOwnProperty.call(data, key) ? data[key] : undefined;
			}

			/**
			 * Checks if a hash value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf Hash
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function hashHas(key) {
				var data = this.__data__;
				return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
			}

			/**
			 * Sets the hash `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf Hash
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the hash instance.
			 */
			function hashSet(key, value) {
				var data = this.__data__;
				data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
				return this;
			}

			// Add methods to `Hash`.
			Hash.prototype.clear = hashClear;
			Hash.prototype["delete"] = hashDelete;
			Hash.prototype.get = hashGet;
			Hash.prototype.has = hashHas;
			Hash.prototype.set = hashSet;

			/**
			 * Creates an list cache object.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function ListCache(entries) {
				var index = -1,
					length = entries ? entries.length : 0;

				this.clear();
				while (++index < length) {
					var entry = entries[index];
					this.set(entry[0], entry[1]);
				}
			}

			/**
			 * Removes all key-value entries from the list cache.
			 *
			 * @private
			 * @name clear
			 * @memberOf ListCache
			 */
			function listCacheClear() {
				this.__data__ = [];
			}

			/**
			 * Removes `key` and its value from the list cache.
			 *
			 * @private
			 * @name delete
			 * @memberOf ListCache
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function listCacheDelete(key) {
				var data = this.__data__,
					index = assocIndexOf(data, key);

				if (index < 0) {
					return false;
				}
				var lastIndex = data.length - 1;
				if (index == lastIndex) {
					data.pop();
				} else {
					splice.call(data, index, 1);
				}
				return true;
			}

			/**
			 * Gets the list cache value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf ListCache
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function listCacheGet(key) {
				var data = this.__data__,
					index = assocIndexOf(data, key);

				return index < 0 ? undefined : data[index][1];
			}

			/**
			 * Checks if a list cache value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf ListCache
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function listCacheHas(key) {
				return assocIndexOf(this.__data__, key) > -1;
			}

			/**
			 * Sets the list cache `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf ListCache
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the list cache instance.
			 */
			function listCacheSet(key, value) {
				var data = this.__data__,
					index = assocIndexOf(data, key);

				if (index < 0) {
					data.push([key, value]);
				} else {
					data[index][1] = value;
				}
				return this;
			}

			// Add methods to `ListCache`.
			ListCache.prototype.clear = listCacheClear;
			ListCache.prototype["delete"] = listCacheDelete;
			ListCache.prototype.get = listCacheGet;
			ListCache.prototype.has = listCacheHas;
			ListCache.prototype.set = listCacheSet;

			/**
			 * Creates a map cache object to store key-value pairs.
			 *
			 * @private
			 * @constructor
			 * @param {Array} [entries] The key-value pairs to cache.
			 */
			function MapCache(entries) {
				var index = -1,
					length = entries ? entries.length : 0;

				this.clear();
				while (++index < length) {
					var entry = entries[index];
					this.set(entry[0], entry[1]);
				}
			}

			/**
			 * Removes all key-value entries from the map.
			 *
			 * @private
			 * @name clear
			 * @memberOf MapCache
			 */
			function mapCacheClear() {
				this.__data__ = {
					hash: new Hash(),
					map: new (Map || ListCache)(),
					string: new Hash(),
				};
			}

			/**
			 * Removes `key` and its value from the map.
			 *
			 * @private
			 * @name delete
			 * @memberOf MapCache
			 * @param {string} key The key of the value to remove.
			 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
			 */
			function mapCacheDelete(key) {
				return getMapData(this, key)["delete"](key);
			}

			/**
			 * Gets the map value for `key`.
			 *
			 * @private
			 * @name get
			 * @memberOf MapCache
			 * @param {string} key The key of the value to get.
			 * @returns {*} Returns the entry value.
			 */
			function mapCacheGet(key) {
				return getMapData(this, key).get(key);
			}

			/**
			 * Checks if a map value for `key` exists.
			 *
			 * @private
			 * @name has
			 * @memberOf MapCache
			 * @param {string} key The key of the entry to check.
			 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
			 */
			function mapCacheHas(key) {
				return getMapData(this, key).has(key);
			}

			/**
			 * Sets the map `key` to `value`.
			 *
			 * @private
			 * @name set
			 * @memberOf MapCache
			 * @param {string} key The key of the value to set.
			 * @param {*} value The value to set.
			 * @returns {Object} Returns the map cache instance.
			 */
			function mapCacheSet(key, value) {
				getMapData(this, key).set(key, value);
				return this;
			}

			// Add methods to `MapCache`.
			MapCache.prototype.clear = mapCacheClear;
			MapCache.prototype["delete"] = mapCacheDelete;
			MapCache.prototype.get = mapCacheGet;
			MapCache.prototype.has = mapCacheHas;
			MapCache.prototype.set = mapCacheSet;

			/**
			 * Gets the index at which the `key` is found in `array` of key-value pairs.
			 *
			 * @private
			 * @param {Array} array The array to inspect.
			 * @param {*} key The key to search for.
			 * @returns {number} Returns the index of the matched value, else `-1`.
			 */
			function assocIndexOf(array, key) {
				var length = array.length;
				while (length--) {
					if (eq(array[length][0], key)) {
						return length;
					}
				}
				return -1;
			}

			/**
			 * The base implementation of `_.isNative` without bad shim checks.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a native function,
			 *  else `false`.
			 */
			function baseIsNative(value) {
				if (!isObject(value) || isMasked(value)) {
					return false;
				}
				var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
				return pattern.test(toSource(value));
			}

			/**
			 * Gets the data for `map`.
			 *
			 * @private
			 * @param {Object} map The map to query.
			 * @param {string} key The reference key.
			 * @returns {*} Returns the map data.
			 */
			function getMapData(map, key) {
				var data = map.__data__;
				return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
			}

			/**
			 * Gets the native function at `key` of `object`.
			 *
			 * @private
			 * @param {Object} object The object to query.
			 * @param {string} key The key of the method to get.
			 * @returns {*} Returns the function if it's native, else `undefined`.
			 */
			function getNative(object, key) {
				var value = getValue(object, key);
				return baseIsNative(value) ? value : undefined;
			}

			/**
			 * Checks if `value` is suitable for use as unique object key.
			 *
			 * @private
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
			 */
			function isKeyable(value) {
				var type = typeof value;
				return type == "string" || type == "number" || type == "symbol" || type == "boolean"
					? value !== "__proto__"
					: value === null;
			}

			/**
			 * Checks if `func` has its source masked.
			 *
			 * @private
			 * @param {Function} func The function to check.
			 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
			 */
			function isMasked(func) {
				return !!maskSrcKey && maskSrcKey in func;
			}

			/**
			 * Converts `func` to its source code.
			 *
			 * @private
			 * @param {Function} func The function to process.
			 * @returns {string} Returns the source code.
			 */
			function toSource(func) {
				if (func != null) {
					try {
						return funcToString.call(func);
					} catch (e) {}
					try {
						return func + "";
					} catch (e) {}
				}
				return "";
			}

			/**
			 * Creates a function that memoizes the result of `func`. If `resolver` is
			 * provided, it determines the cache key for storing the result based on the
			 * arguments provided to the memoized function. By default, the first argument
			 * provided to the memoized function is used as the map cache key. The `func`
			 * is invoked with the `this` binding of the memoized function.
			 *
			 * **Note:** The cache is exposed as the `cache` property on the memoized
			 * function. Its creation may be customized by replacing the `_.memoize.Cache`
			 * constructor with one whose instances implement the
			 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
			 * method interface of `delete`, `get`, `has`, and `set`.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Function
			 * @param {Function} func The function to have its output memoized.
			 * @param {Function} [resolver] The function to resolve the cache key.
			 * @returns {Function} Returns the new memoized function.
			 * @example
			 *
			 * var object = { 'a': 1, 'b': 2 };
			 * var other = { 'c': 3, 'd': 4 };
			 *
			 * var values = _.memoize(_.values);
			 * values(object);
			 * // => [1, 2]
			 *
			 * values(other);
			 * // => [3, 4]
			 *
			 * object.a = 2;
			 * values(object);
			 * // => [1, 2]
			 *
			 * // Modify the result cache.
			 * values.cache.set(object, ['a', 'b']);
			 * values(object);
			 * // => ['a', 'b']
			 *
			 * // Replace `_.memoize.Cache`.
			 * _.memoize.Cache = WeakMap;
			 */
			function memoize(func, resolver) {
				if (typeof func != "function" || (resolver && typeof resolver != "function")) {
					throw new TypeError(FUNC_ERROR_TEXT);
				}
				var memoized = function () {
					var args = arguments,
						key = resolver ? resolver.apply(this, args) : args[0],
						cache = memoized.cache;

					if (cache.has(key)) {
						return cache.get(key);
					}
					var result = func.apply(this, args);
					memoized.cache = cache.set(key, result);
					return result;
				};
				memoized.cache = new (memoize.Cache || MapCache)();
				return memoized;
			}

			// Assign cache to `_.memoize`.
			memoize.Cache = MapCache;

			/**
			 * Performs a
			 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
			 * comparison between two values to determine if they are equivalent.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to compare.
			 * @param {*} other The other value to compare.
			 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
			 * @example
			 *
			 * var object = { 'a': 1 };
			 * var other = { 'a': 1 };
			 *
			 * _.eq(object, object);
			 * // => true
			 *
			 * _.eq(object, other);
			 * // => false
			 *
			 * _.eq('a', 'a');
			 * // => true
			 *
			 * _.eq('a', Object('a'));
			 * // => false
			 *
			 * _.eq(NaN, NaN);
			 * // => true
			 */
			function eq(value, other) {
				return value === other || (value !== value && other !== other);
			}

			/**
			 * Checks if `value` is classified as a `Function` object.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
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
				// in Safari 8-9 which returns 'object' for typed array and other constructors.
				var tag = isObject(value) ? objectToString.call(value) : "";
				return tag == funcTag || tag == genTag;
			}

			/**
			 * Checks if `value` is the
			 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
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
				return !!value && (type == "object" || type == "function");
			}

			module.exports = memoize;

			/***/
		},

		/***/ 3096: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
			/**
			 * lodash (Custom Build) <https://lodash.com/>
			 * Build: `lodash modularize exports="npm" -o ./`
			 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
			 * Released under MIT license <https://lodash.com/license>
			 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
			 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
			 */

			/** Used as the `TypeError` message for "Functions" methods. */
			var FUNC_ERROR_TEXT = "Expected a function";

			/** Used as references for various `Number` constants. */
			var NAN = 0 / 0;

			/** `Object#toString` result references. */
			var symbolTag = "[object Symbol]";

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

			/** Detect free variable `global` from Node.js. */
			var freeGlobal =
				typeof __webpack_require__.g == "object" &&
				__webpack_require__.g &&
				__webpack_require__.g.Object === Object &&
				__webpack_require__.g;

			/** Detect free variable `self`. */
			var freeSelf = typeof self == "object" && self && self.Object === Object && self;

			/** Used as a reference to the global object. */
			var root = freeGlobal || freeSelf || Function("return this")();

			/** Used for built-in method references. */
			var objectProto = Object.prototype;

			/**
			 * Used to resolve the
			 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
			 * of values.
			 */
			var objectToString = objectProto.toString;

			/* Built-in method references for those with the same name as other `lodash` methods. */
			var nativeMax = Math.max,
				nativeMin = Math.min;

			/**
			 * Gets the timestamp of the number of milliseconds that have elapsed since
			 * the Unix epoch (1 January 1970 00:00:00 UTC).
			 *
			 * @static
			 * @memberOf _
			 * @since 2.4.0
			 * @category Date
			 * @returns {number} Returns the timestamp.
			 * @example
			 *
			 * _.defer(function(stamp) {
			 *   console.log(_.now() - stamp);
			 * }, _.now());
			 * // => Logs the number of milliseconds it took for the deferred invocation.
			 */
			var now = function () {
				return root.Date.now();
			};

			/**
			 * Creates a debounced function that delays invoking `func` until after `wait`
			 * milliseconds have elapsed since the last time the debounced function was
			 * invoked. The debounced function comes with a `cancel` method to cancel
			 * delayed `func` invocations and a `flush` method to immediately invoke them.
			 * Provide `options` to indicate whether `func` should be invoked on the
			 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
			 * with the last arguments provided to the debounced function. Subsequent
			 * calls to the debounced function return the result of the last `func`
			 * invocation.
			 *
			 * **Note:** If `leading` and `trailing` options are `true`, `func` is
			 * invoked on the trailing edge of the timeout only if the debounced function
			 * is invoked more than once during the `wait` timeout.
			 *
			 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
			 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
			 *
			 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
			 * for details over the differences between `_.debounce` and `_.throttle`.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Function
			 * @param {Function} func The function to debounce.
			 * @param {number} [wait=0] The number of milliseconds to delay.
			 * @param {Object} [options={}] The options object.
			 * @param {boolean} [options.leading=false]
			 *  Specify invoking on the leading edge of the timeout.
			 * @param {number} [options.maxWait]
			 *  The maximum time `func` is allowed to be delayed before it's invoked.
			 * @param {boolean} [options.trailing=true]
			 *  Specify invoking on the trailing edge of the timeout.
			 * @returns {Function} Returns the new debounced function.
			 * @example
			 *
			 * // Avoid costly calculations while the window size is in flux.
			 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
			 *
			 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
			 * jQuery(element).on('click', _.debounce(sendMail, 300, {
			 *   'leading': true,
			 *   'trailing': false
			 * }));
			 *
			 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
			 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
			 * var source = new EventSource('/stream');
			 * jQuery(source).on('message', debounced);
			 *
			 * // Cancel the trailing debounced invocation.
			 * jQuery(window).on('popstate', debounced.cancel);
			 */
			function debounce(func, wait, options) {
				var lastArgs,
					lastThis,
					maxWait,
					result,
					timerId,
					lastCallTime,
					lastInvokeTime = 0,
					leading = false,
					maxing = false,
					trailing = true;

				if (typeof func != "function") {
					throw new TypeError(FUNC_ERROR_TEXT);
				}
				wait = toNumber(wait) || 0;
				if (isObject(options)) {
					leading = !!options.leading;
					maxing = "maxWait" in options;
					maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
					trailing = "trailing" in options ? !!options.trailing : trailing;
				}

				function invokeFunc(time) {
					var args = lastArgs,
						thisArg = lastThis;

					lastArgs = lastThis = undefined;
					lastInvokeTime = time;
					result = func.apply(thisArg, args);
					return result;
				}

				function leadingEdge(time) {
					// Reset any `maxWait` timer.
					lastInvokeTime = time;
					// Start the timer for the trailing edge.
					timerId = setTimeout(timerExpired, wait);
					// Invoke the leading edge.
					return leading ? invokeFunc(time) : result;
				}

				function remainingWait(time) {
					var timeSinceLastCall = time - lastCallTime,
						timeSinceLastInvoke = time - lastInvokeTime,
						result = wait - timeSinceLastCall;

					return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
				}

				function shouldInvoke(time) {
					var timeSinceLastCall = time - lastCallTime,
						timeSinceLastInvoke = time - lastInvokeTime;

					// Either this is the first call, activity has stopped and we're at the
					// trailing edge, the system time has gone backwards and we're treating
					// it as the trailing edge, or we've hit the `maxWait` limit.
					return (
						lastCallTime === undefined ||
						timeSinceLastCall >= wait ||
						timeSinceLastCall < 0 ||
						(maxing && timeSinceLastInvoke >= maxWait)
					);
				}

				function timerExpired() {
					var time = now();
					if (shouldInvoke(time)) {
						return trailingEdge(time);
					}
					// Restart the timer.
					timerId = setTimeout(timerExpired, remainingWait(time));
				}

				function trailingEdge(time) {
					timerId = undefined;

					// Only invoke if we have `lastArgs` which means `func` has been
					// debounced at least once.
					if (trailing && lastArgs) {
						return invokeFunc(time);
					}
					lastArgs = lastThis = undefined;
					return result;
				}

				function cancel() {
					if (timerId !== undefined) {
						clearTimeout(timerId);
					}
					lastInvokeTime = 0;
					lastArgs = lastCallTime = lastThis = timerId = undefined;
				}

				function flush() {
					return timerId === undefined ? result : trailingEdge(now());
				}

				function debounced() {
					var time = now(),
						isInvoking = shouldInvoke(time);

					lastArgs = arguments;
					lastThis = this;
					lastCallTime = time;

					if (isInvoking) {
						if (timerId === undefined) {
							return leadingEdge(lastCallTime);
						}
						if (maxing) {
							// Handle invocations in a tight loop.
							timerId = setTimeout(timerExpired, wait);
							return invokeFunc(lastCallTime);
						}
					}
					if (timerId === undefined) {
						timerId = setTimeout(timerExpired, wait);
					}
					return result;
				}
				debounced.cancel = cancel;
				debounced.flush = flush;
				return debounced;
			}

			/**
			 * Creates a throttled function that only invokes `func` at most once per
			 * every `wait` milliseconds. The throttled function comes with a `cancel`
			 * method to cancel delayed `func` invocations and a `flush` method to
			 * immediately invoke them. Provide `options` to indicate whether `func`
			 * should be invoked on the leading and/or trailing edge of the `wait`
			 * timeout. The `func` is invoked with the last arguments provided to the
			 * throttled function. Subsequent calls to the throttled function return the
			 * result of the last `func` invocation.
			 *
			 * **Note:** If `leading` and `trailing` options are `true`, `func` is
			 * invoked on the trailing edge of the timeout only if the throttled function
			 * is invoked more than once during the `wait` timeout.
			 *
			 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
			 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
			 *
			 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
			 * for details over the differences between `_.throttle` and `_.debounce`.
			 *
			 * @static
			 * @memberOf _
			 * @since 0.1.0
			 * @category Function
			 * @param {Function} func The function to throttle.
			 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
			 * @param {Object} [options={}] The options object.
			 * @param {boolean} [options.leading=true]
			 *  Specify invoking on the leading edge of the timeout.
			 * @param {boolean} [options.trailing=true]
			 *  Specify invoking on the trailing edge of the timeout.
			 * @returns {Function} Returns the new throttled function.
			 * @example
			 *
			 * // Avoid excessively updating the position while scrolling.
			 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
			 *
			 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
			 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
			 * jQuery(element).on('click', throttled);
			 *
			 * // Cancel the trailing throttled invocation.
			 * jQuery(window).on('popstate', throttled.cancel);
			 */
			function throttle(func, wait, options) {
				var leading = true,
					trailing = true;

				if (typeof func != "function") {
					throw new TypeError(FUNC_ERROR_TEXT);
				}
				if (isObject(options)) {
					leading = "leading" in options ? !!options.leading : leading;
					trailing = "trailing" in options ? !!options.trailing : trailing;
				}
				return debounce(func, wait, {
					leading: leading,
					maxWait: wait,
					trailing: trailing,
				});
			}

			/**
			 * Checks if `value` is the
			 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
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
				return !!value && (type == "object" || type == "function");
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
				return !!value && typeof value == "object";
			}

			/**
			 * Checks if `value` is classified as a `Symbol` primitive or object.
			 *
			 * @static
			 * @memberOf _
			 * @since 4.0.0
			 * @category Lang
			 * @param {*} value The value to check.
			 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
			 * @example
			 *
			 * _.isSymbol(Symbol.iterator);
			 * // => true
			 *
			 * _.isSymbol('abc');
			 * // => false
			 */
			function isSymbol(value) {
				return typeof value == "symbol" || (isObjectLike(value) && objectToString.call(value) == symbolTag);
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
				if (typeof value == "number") {
					return value;
				}
				if (isSymbol(value)) {
					return NAN;
				}
				if (isObject(value)) {
					var other = typeof value.valueOf == "function" ? value.valueOf() : value;
					value = isObject(other) ? other + "" : other;
				}
				if (typeof value != "string") {
					return value === 0 ? value : +value;
				}
				value = value.replace(reTrim, "");
				var isBinary = reIsBinary.test(value);
				return isBinary || reIsOctal.test(value)
					? freeParseInt(value.slice(2), isBinary ? 2 : 8)
					: reIsBadHex.test(value)
					? NAN
					: +value;
			}

			module.exports = throttle;

			/***/
		},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/compat get default export */
	/******/ (() => {
		/******/ // getDefaultExport function for compatibility with non-harmony modules
		/******/ __webpack_require__.n = (module) => {
			/******/ var getter =
				module && module.__esModule ? /******/ () => module["default"] : /******/ () => module;
			/******/ __webpack_require__.d(getter, { a: getter });
			/******/ return getter;
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/define property getters */
	/******/ (() => {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = (exports, definition) => {
			/******/ for (var key in definition) {
				/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					/******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/global */
	/******/ (() => {
		/******/ __webpack_require__.g = (function () {
			/******/ if (typeof globalThis === "object") return globalThis;
			/******/ try {
				/******/ return this || new Function("return this")();
				/******/
			} catch (e) {
				/******/ if (typeof window === "object") return window;
				/******/
			}
			/******/
		})();
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ (() => {
		/******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
		/******/
	})();
	/******/
	/************************************************************************/
	var __webpack_exports__ = {};
	// This entry need to be wrapped in an IIFE because it need to be in strict mode.
	(() => {
		"use strict"; // CONCATENATED MODULE: ./src/js/_vars.js

		/* harmony default export */ const _vars = {
			windowEl: window,
			documentEl: document,
			htmlEl: document.documentElement,
			bodyEl: document.body,
		};
		// EXTERNAL MODULE: ./src/js/components/toggle-list.js
		var toggle_list = __webpack_require__(8207);
		// EXTERNAL MODULE: ./src/js/components/phone-button.js
		var phone_button = __webpack_require__(303);
		// EXTERNAL MODULE: ./src/js/components/phone-input-mask.js
		var phone_input_mask = __webpack_require__(8355);
		// EXTERNAL MODULE: ./src/js/components/card-hidden-container-button.js
		var card_hidden_container_button = __webpack_require__(3732);
		// EXTERNAL MODULE: ./src/js/components/gender-picker.js
		var gender_picker = __webpack_require__(8566); // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/lib/utils.js
		function lastItemOf(arr) {
			return arr[arr.length - 1];
		}

		// push only the items not included in the array
		function pushUnique(arr, ...items) {
			items.forEach((item) => {
				if (arr.includes(item)) {
					return;
				}
				arr.push(item);
			});
			return arr;
		}

		function stringToArray(str, separator) {
			// convert empty string to an empty array
			return str ? str.split(separator) : [];
		}

		function isInRange(testVal, min, max) {
			const minOK = min === undefined || testVal >= min;
			const maxOK = max === undefined || testVal <= max;
			return minOK && maxOK;
		}

		function limitToRange(val, min, max) {
			if (val < min) {
				return min;
			}
			if (val > max) {
				return max;
			}
			return val;
		}

		function createTagRepeat(tagName, repeat, attributes = {}, index = 0, html = "") {
			const openTagSrc = Object.keys(attributes).reduce((src, attr) => {
				let val = attributes[attr];
				if (typeof val === "function") {
					val = val(index);
				}
				return `${src} ${attr}="${val}"`;
			}, tagName);
			html += `<${openTagSrc}></${tagName}>`;

			const next = index + 1;
			return next < repeat ? createTagRepeat(tagName, repeat, attributes, next, html) : html;
		}

		// Remove the spacing surrounding tags for HTML parser not to create text nodes
		// before/after elements
		function optimizeTemplateHTML(html) {
			return html.replace(/>\s+/g, ">").replace(/\s+</, "<");
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/lib/date.js

		function stripTime(timeValue) {
			return new Date(timeValue).setHours(0, 0, 0, 0);
		}

		function today() {
			return new Date().setHours(0, 0, 0, 0);
		}

		// Get the time value of the start of given date or year, month and day
		function dateValue(...args) {
			switch (args.length) {
				case 0:
					return today();
				case 1:
					return stripTime(args[0]);
			}

			// use setFullYear() to keep 2-digit year from being mapped to 1900-1999
			const newDate = new Date(0);
			newDate.setFullYear(...args);
			return newDate.setHours(0, 0, 0, 0);
		}

		function addDays(date, amount) {
			const newDate = new Date(date);
			return newDate.setDate(newDate.getDate() + amount);
		}

		function addWeeks(date, amount) {
			return addDays(date, amount * 7);
		}

		function addMonths(date, amount) {
			// If the day of the date is not in the new month, the last day of the new
			// month will be returned. e.g. Jan 31 + 1 month → Feb 28 (not Mar 03)
			const newDate = new Date(date);
			const monthsToSet = newDate.getMonth() + amount;
			let expectedMonth = monthsToSet % 12;
			if (expectedMonth < 0) {
				expectedMonth += 12;
			}

			const time = newDate.setMonth(monthsToSet);
			return newDate.getMonth() !== expectedMonth ? newDate.setDate(0) : time;
		}

		function addYears(date, amount) {
			// If the date is Feb 29 and the new year is not a leap year, Feb 28 of the
			// new year will be returned.
			const newDate = new Date(date);
			const expectedMonth = newDate.getMonth();
			const time = newDate.setFullYear(newDate.getFullYear() + amount);
			return expectedMonth === 1 && newDate.getMonth() === 2 ? newDate.setDate(0) : time;
		}

		// Calculate the distance bettwen 2 days of the week
		function dayDiff(day, from) {
			return (day - from + 7) % 7;
		}

		// Get the date of the specified day of the week of given base date
		function dayOfTheWeekOf(baseDate, dayOfWeek, weekStart = 0) {
			const baseDay = new Date(baseDate).getDay();
			return addDays(baseDate, dayDiff(dayOfWeek, weekStart) - dayDiff(baseDay, weekStart));
		}

		function calcWeekNum(dayOfTheWeek, sameDayOfFirstWeek) {
			return Math.round((dayOfTheWeek - sameDayOfFirstWeek) / 604800000) + 1;
		}

		// Get the ISO week number of a date
		function getIsoWeek(date) {
			// - Start of ISO week is Monday
			// - Use Thursday for culculation because the first Thursday of ISO week is
			//   always in January
			const thuOfTheWeek = dayOfTheWeekOf(date, 4, 1);
			// - Week 1 in ISO week is the week including Jan 04
			// - Use the Thu of given date's week (instead of given date itself) to
			//   calculate week 1 of the year so that Jan 01 - 03 won't be miscalculated
			//   as week 0 when Jan 04 is Mon - Wed
			const firstThu = dayOfTheWeekOf(new Date(thuOfTheWeek).setMonth(0, 4), 4, 1);
			// return Math.round((thuOfTheWeek - firstThu) / 604800000) + 1;
			return calcWeekNum(thuOfTheWeek, firstThu);
		}

		// Calculate week number in traditional week number system
		// @see https://en.wikipedia.org/wiki/Week#Other_week_numbering_systems
		function calcTraditionalWeekNumber(date, weekStart) {
			// - Week 1 of traditional week is the week including the Jan 01
			// - Use Jan 01 of given date's year to calculate the start of week 1
			const startOfFirstWeek = dayOfTheWeekOf(new Date(date).setMonth(0, 1), weekStart, weekStart);
			const startOfTheWeek = dayOfTheWeekOf(date, weekStart, weekStart);
			const weekNum = calcWeekNum(startOfTheWeek, startOfFirstWeek);
			if (weekNum < 53) {
				return weekNum;
			}
			// If the 53rd week includes Jan 01, it's actually next year's week 1
			const weekOneOfNextYear = dayOfTheWeekOf(new Date(date).setDate(32), weekStart, weekStart);
			return startOfTheWeek === weekOneOfNextYear ? 1 : weekNum;
		}

		// Get the Western traditional week number of a date
		function getWesternTradWeek(date) {
			// Start of Western traditionl week is Sunday
			return calcTraditionalWeekNumber(date, 0);
		}

		// Get the Middle Eastern week number of a date
		function getMidEasternWeek(date) {
			// Start of Middle Eastern week is Saturday
			return calcTraditionalWeekNumber(date, 6);
		}

		// Get the start year of the period of years that includes given date
		// years: length of the year period
		function startOfYearPeriod(date, years) {
			/* @see https://en.wikipedia.org/wiki/Year_zero#ISO_8601 */
			const year = new Date(date).getFullYear();
			return Math.floor(year / years) * years;
		}

		// Convert date to the first/last date of the month/year of the date
		function regularizeDate(date, timeSpan, useLastDate) {
			if (timeSpan !== 1 && timeSpan !== 2) {
				return date;
			}
			const newDate = new Date(date);
			if (timeSpan === 1) {
				useLastDate ? newDate.setMonth(newDate.getMonth() + 1, 0) : newDate.setDate(1);
			} else {
				useLastDate ? newDate.setFullYear(newDate.getFullYear() + 1, 0, 0) : newDate.setMonth(0, 1);
			}
			return newDate.setHours(0, 0, 0, 0);
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/lib/date-format.js

		// pattern for format parts
		const reFormatTokens = /dd?|DD?|mm?|MM?|yy?(?:yy)?/;
		// pattern for non date parts
		const reNonDateParts = /[\s!-/:-@[-`{-~年月日]+/;
		// cache for persed formats
		let knownFormats = {};
		// parse funtions for date parts
		const parseFns = {
			y(date, year) {
				return new Date(date).setFullYear(parseInt(year, 10));
			},
			m(date, month, locale) {
				const newDate = new Date(date);
				let monthIndex = parseInt(month, 10) - 1;

				if (isNaN(monthIndex)) {
					if (!month) {
						return NaN;
					}

					const monthName = month.toLowerCase();
					const compareNames = (name) => name.toLowerCase().startsWith(monthName);
					// compare with both short and full names because some locales have periods
					// in the short names (not equal to the first X letters of the full names)
					monthIndex = locale.monthsShort.findIndex(compareNames);
					if (monthIndex < 0) {
						monthIndex = locale.months.findIndex(compareNames);
					}
					if (monthIndex < 0) {
						return NaN;
					}
				}

				newDate.setMonth(monthIndex);
				return newDate.getMonth() !== normalizeMonth(monthIndex) ? newDate.setDate(0) : newDate.getTime();
			},
			d(date, day) {
				return new Date(date).setDate(parseInt(day, 10));
			},
		};
		// format functions for date parts
		const formatFns = {
			d(date) {
				return date.getDate();
			},
			dd(date) {
				return padZero(date.getDate(), 2);
			},
			D(date, locale) {
				return locale.daysShort[date.getDay()];
			},
			DD(date, locale) {
				return locale.days[date.getDay()];
			},
			m(date) {
				return date.getMonth() + 1;
			},
			mm(date) {
				return padZero(date.getMonth() + 1, 2);
			},
			M(date, locale) {
				return locale.monthsShort[date.getMonth()];
			},
			MM(date, locale) {
				return locale.months[date.getMonth()];
			},
			y(date) {
				return date.getFullYear();
			},
			yy(date) {
				return padZero(date.getFullYear(), 2).slice(-2);
			},
			yyyy(date) {
				return padZero(date.getFullYear(), 4);
			},
		};

		// get month index in normal range (0 - 11) from any number
		function normalizeMonth(monthIndex) {
			return monthIndex > -1 ? monthIndex % 12 : normalizeMonth(monthIndex + 12);
		}

		function padZero(num, length) {
			return num.toString().padStart(length, "0");
		}

		function parseFormatString(format) {
			if (typeof format !== "string") {
				throw new Error("Invalid date format.");
			}
			if (format in knownFormats) {
				return knownFormats[format];
			}

			// sprit the format string into parts and seprators
			const separators = format.split(reFormatTokens);
			const parts = format.match(new RegExp(reFormatTokens, "g"));
			if (separators.length === 0 || !parts) {
				throw new Error("Invalid date format.");
			}

			// collect format functions used in the format
			const partFormatters = parts.map((token) => formatFns[token]);

			// collect parse function keys used in the format
			// iterate over parseFns' keys in order to keep the order of the keys.
			const partParserKeys = Object.keys(parseFns).reduce((keys, key) => {
				const token = parts.find((part) => part[0] !== "D" && part[0].toLowerCase() === key);
				if (token) {
					keys.push(key);
				}
				return keys;
			}, []);

			return (knownFormats[format] = {
				parser(dateStr, locale) {
					const dateParts = dateStr.split(reNonDateParts).reduce((dtParts, part, index) => {
						if (part.length > 0 && parts[index]) {
							const token = parts[index][0];
							if (token === "M") {
								dtParts.m = part;
							} else if (token !== "D") {
								dtParts[token] = part;
							}
						}
						return dtParts;
					}, {});

					// iterate over partParserkeys so that the parsing is made in the oder
					// of year, month and day to prevent the day parser from correcting last
					// day of month wrongly
					return partParserKeys.reduce((origDate, key) => {
						const newDate = parseFns[key](origDate, dateParts[key], locale);
						// ingnore the part failed to parse
						return isNaN(newDate) ? origDate : newDate;
					}, today());
				},
				formatter(date, locale) {
					let dateStr = partFormatters.reduce((str, fn, index) => {
						return (str += `${separators[index]}${fn(date, locale)}`);
					}, "");
					// separators' length is always parts' length + 1,
					return (dateStr += lastItemOf(separators));
				},
			});
		}

		function parseDate(dateStr, format, locale) {
			if (dateStr instanceof Date || typeof dateStr === "number") {
				const date = stripTime(dateStr);
				return isNaN(date) ? undefined : date;
			}
			if (!dateStr) {
				return undefined;
			}
			if (dateStr === "today") {
				return today();
			}

			if (format && format.toValue) {
				const date = format.toValue(dateStr, format, locale);
				return isNaN(date) ? undefined : stripTime(date);
			}

			return parseFormatString(format).parser(dateStr, locale);
		}

		function date_format_formatDate(date, format, locale) {
			if (isNaN(date) || (!date && date !== 0)) {
				return "";
			}

			const dateObj = typeof date === "number" ? new Date(date) : date;

			if (format.toDisplay) {
				return format.toDisplay(dateObj, format, locale);
			}

			return parseFormatString(format).formatter(dateObj, locale);
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/lib/dom.js

		const range = document.createRange();

		function parseHTML(html) {
			return range.createContextualFragment(html);
		}

		function getParent(el) {
			return el.parentElement || (el.parentNode instanceof ShadowRoot ? el.parentNode.host : undefined);
		}

		function isActiveElement(el) {
			return el.getRootNode().activeElement === el;
		}

		// equivalent to jQuery's :visble
		function isVisible(el) {
			return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
		}

		function hideElement(el) {
			if (el.style.display === "none") {
				return;
			}
			// back up the existing display setting in data-style-display
			if (el.style.display) {
				el.dataset.styleDisplay = el.style.display;
			}
			el.style.display = "none";
		}

		function showElement(el) {
			if (el.style.display !== "none") {
				return;
			}
			if (el.dataset.styleDisplay) {
				// restore backed-up dispay property
				el.style.display = el.dataset.styleDisplay;
				delete el.dataset.styleDisplay;
			} else {
				el.style.display = "";
			}
		}

		function emptyChildNodes(el) {
			if (el.firstChild) {
				el.removeChild(el.firstChild);
				emptyChildNodes(el);
			}
		}

		function replaceChildNodes(el, newChildNodes) {
			emptyChildNodes(el);
			if (newChildNodes instanceof DocumentFragment) {
				el.appendChild(newChildNodes);
			} else if (typeof newChildNodes === "string") {
				el.appendChild(parseHTML(newChildNodes));
			} else if (typeof newChildNodes.forEach === "function") {
				newChildNodes.forEach((node) => {
					el.appendChild(node);
				});
			}
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/lib/event.js

		const listenerRegistry = new WeakMap();
		const { addEventListener, removeEventListener } = EventTarget.prototype;

		// Register event listeners to a key object
		// listeners: array of listener definitions;
		//   - each definition must be a flat array of event target and the arguments
		//     used to call addEventListener() on the target
		function event_registerListeners(keyObj, listeners) {
			let registered = listenerRegistry.get(keyObj);
			if (!registered) {
				registered = [];
				listenerRegistry.set(keyObj, registered);
			}
			listeners.forEach((listener) => {
				addEventListener.call(...listener);
				registered.push(listener);
			});
		}

		function event_unregisterListeners(keyObj) {
			let listeners = listenerRegistry.get(keyObj);
			if (!listeners) {
				return;
			}
			listeners.forEach((listener) => {
				removeEventListener.call(...listener);
			});
			listenerRegistry.delete(keyObj);
		}

		// Event.composedPath() polyfill for Edge
		// based on https://gist.github.com/kleinfreund/e9787d73776c0e3750dcfcdc89f100ec
		if (!Event.prototype.composedPath) {
			const getComposedPath = (node, path = []) => {
				path.push(node);

				let parent;
				if (node.parentNode) {
					parent = node.parentNode;
				} else if (node.host) {
					// ShadowRoot
					parent = node.host;
				} else if (node.defaultView) {
					// Document
					parent = node.defaultView;
				}
				return parent ? getComposedPath(parent, path) : path;
			};

			Event.prototype.composedPath = function () {
				return getComposedPath(this.target);
			};
		}

		function findFromPath(path, criteria, currentTarget) {
			const [node, ...rest] = path;
			if (criteria(node)) {
				return node;
			}
			if (node === currentTarget || node.tagName === "HTML" || rest.length === 0) {
				// stop when reaching currentTarget or <html>
				return;
			}
			return findFromPath(rest, criteria, currentTarget);
		}

		// Search for the actual target of a delegated event
		function findElementInEventPath(ev, selector) {
			const criteria =
				typeof selector === "function" ? selector : (el) => el instanceof Element && el.matches(selector);
			return findFromPath(ev.composedPath(), criteria, ev.currentTarget);
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/i18n/base-locales.js

		// default locales
		/* harmony default export */ const base_locales = {
			en: {
				days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				months: [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December",
				],
				monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				today: "Today",
				clear: "Clear",
				titleFormat: "MM y",
			},
		}; // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/options/defaultOptions.js

		// config options updatable by setOptions() and their default values
		/* harmony default export */ const defaultOptions = {
			autohide: false,
			beforeShowDay: null,
			beforeShowDecade: null,
			beforeShowMonth: null,
			beforeShowYear: null,
			clearButton: false,
			dateDelimiter: ",",
			datesDisabled: [],
			daysOfWeekDisabled: [],
			daysOfWeekHighlighted: [],
			defaultViewDate: undefined, // placeholder, defaults to today() by the program
			disableTouchKeyboard: false,
			enableOnReadonly: true,
			format: "mm/dd/yyyy",
			language: "en",
			maxDate: null,
			maxNumberOfDates: 1,
			maxView: 3,
			minDate: null,
			nextArrow: "»",
			orientation: "auto",
			pickLevel: 0,
			prevArrow: "«",
			showDaysOfWeek: true,
			showOnClick: true,
			showOnFocus: true,
			startView: 0,
			title: "",
			todayButton: false,
			todayButtonMode: 0,
			todayHighlight: false,
			updateOnBlur: true,
			weekNumbers: 0,
			weekStart: 0,
		}; // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/options/processOptions.js

		const { language: defaultLang, format: defaultFormat, weekStart: defaultWeekStart } = defaultOptions;

		// Reducer function to filter out invalid day-of-week from the input
		function sanitizeDOW(dow, day) {
			return dow.length < 6 && day >= 0 && day < 7 ? pushUnique(dow, day) : dow;
		}

		function determineGetWeekMethod(numberingMode, weekStart) {
			const methodId = numberingMode === 4 ? (weekStart === 6 ? 3 : !weekStart + 1) : numberingMode;
			switch (methodId) {
				case 1:
					return getIsoWeek;
				case 2:
					return getWesternTradWeek;
				case 3:
					return getMidEasternWeek;
			}
		}

		function updateWeekStart(newValue, config, weekNumbers) {
			config.weekStart = newValue;
			config.weekEnd = (newValue + 6) % 7;
			if (weekNumbers === 4) {
				config.getWeekNumber = determineGetWeekMethod(4, newValue);
			}
			return newValue;
		}

		// validate input date. if invalid, fallback to the original value
		function validateDate(value, format, locale, origValue) {
			const date = parseDate(value, format, locale);
			return date !== undefined ? date : origValue;
		}

		// Validate viewId. if invalid, fallback to the original value
		function validateViewId(value, origValue, max = 3) {
			const viewId = parseInt(value, 10);
			return viewId >= 0 && viewId <= max ? viewId : origValue;
		}

		function replaceOptions(options, from, to, convert = undefined) {
			if (from in options) {
				if (!(to in options)) {
					options[to] = convert ? convert(options[from]) : options[from];
				}
				delete options[from];
			}
		}

		// Create Datepicker configuration to set
		function processOptions(options, datepicker) {
			const inOpts = Object.assign({}, options);
			const config = {};
			const locales = datepicker.constructor.locales;
			const rangeEnd = !!datepicker.rangeSideIndex;
			let {
				datesDisabled,
				format,
				language,
				locale,
				maxDate,
				maxView,
				minDate,
				pickLevel,
				startView,
				weekNumbers,
				weekStart,
			} = datepicker.config || {};

			// for backword compatibility
			replaceOptions(inOpts, "calendarWeeks", "weekNumbers", (val) => (val ? 1 : 0));
			replaceOptions(inOpts, "clearBtn", "clearButton");
			replaceOptions(inOpts, "todayBtn", "todayButton");
			replaceOptions(inOpts, "todayBtnMode", "todayButtonMode");

			if (inOpts.language) {
				let lang;
				if (inOpts.language !== language) {
					if (locales[inOpts.language]) {
						lang = inOpts.language;
					} else {
						// Check if langauge + region tag can fallback to the one without
						// region (e.g. fr-CA → fr)
						lang = inOpts.language.split("-")[0];
						if (!locales[lang]) {
							lang = false;
						}
					}
				}
				delete inOpts.language;
				if (lang) {
					language = config.language = lang;

					// update locale as well when updating language
					const origLocale = locale || locales[defaultLang];
					// use default language's properties for the fallback
					locale = Object.assign(
						{
							format: defaultFormat,
							weekStart: defaultWeekStart,
						},
						locales[defaultLang]
					);
					if (language !== defaultLang) {
						Object.assign(locale, locales[language]);
					}
					config.locale = locale;
					// if format and/or weekStart are the same as old locale's defaults,
					// update them to new locale's defaults
					if (format === origLocale.format) {
						format = config.format = locale.format;
					}
					if (weekStart === origLocale.weekStart) {
						weekStart = updateWeekStart(locale.weekStart, config, weekNumbers);
					}
				}
			}

			if (inOpts.format) {
				const hasToDisplay = typeof inOpts.format.toDisplay === "function";
				const hasToValue = typeof inOpts.format.toValue === "function";
				const validFormatString = reFormatTokens.test(inOpts.format);
				if ((hasToDisplay && hasToValue) || validFormatString) {
					format = config.format = inOpts.format;
				}
				delete inOpts.format;
			}

			//*** pick level ***//
			let newPickLevel = pickLevel;
			if ("pickLevel" in inOpts) {
				newPickLevel = validateViewId(inOpts.pickLevel, pickLevel, 2);
				delete inOpts.pickLevel;
			}
			if (newPickLevel !== pickLevel) {
				if (newPickLevel > pickLevel) {
					// complement current minDate/madDate so that the existing range will be
					// expanded to fit the new level later
					if (!("minDate" in inOpts)) {
						inOpts.minDate = minDate;
					}
					if (!("maxDate" in inOpts)) {
						inOpts.maxDate = maxDate;
					}
				}
				// complement datesDisabled so that it will be reset later
				if (datesDisabled && !inOpts.datesDisabled) {
					inOpts.datesDisabled = [];
				}
				pickLevel = config.pickLevel = newPickLevel;
			}

			//*** dates ***//
			// while min and maxDate for "no limit" in the options are better to be null
			// (especially when updating), the ones in the config have to be undefined
			// because null is treated as 0 (= unix epoch) when comparing with time value
			let minDt = minDate;
			let maxDt = maxDate;
			if ("minDate" in inOpts) {
				const defaultMinDt = dateValue(0, 0, 1);
				minDt =
					inOpts.minDate === null
						? defaultMinDt // set 0000-01-01 to prevent negative values for year
						: validateDate(inOpts.minDate, format, locale, minDt);
				if (minDt !== defaultMinDt) {
					minDt = regularizeDate(minDt, pickLevel, false);
				}
				delete inOpts.minDate;
			}
			if ("maxDate" in inOpts) {
				maxDt = inOpts.maxDate === null ? undefined : validateDate(inOpts.maxDate, format, locale, maxDt);
				if (maxDt !== undefined) {
					maxDt = regularizeDate(maxDt, pickLevel, true);
				}
				delete inOpts.maxDate;
			}
			if (maxDt < minDt) {
				minDate = config.minDate = maxDt;
				maxDate = config.maxDate = minDt;
			} else {
				if (minDate !== minDt) {
					minDate = config.minDate = minDt;
				}
				if (maxDate !== maxDt) {
					maxDate = config.maxDate = maxDt;
				}
			}

			if (inOpts.datesDisabled) {
				const dtsDisabled = inOpts.datesDisabled;
				if (typeof dtsDisabled === "function") {
					config.datesDisabled = null;
					config.checkDisabled = (timeValue, viewId) => dtsDisabled(new Date(timeValue), viewId, rangeEnd);
				} else {
					const disabled = (config.datesDisabled = dtsDisabled.reduce((dates, dt) => {
						const date = parseDate(dt, format, locale);
						return date !== undefined
							? pushUnique(dates, regularizeDate(date, pickLevel, rangeEnd))
							: dates;
					}, []));
					config.checkDisabled = (timeValue) => disabled.includes(timeValue);
				}
				delete inOpts.datesDisabled;
			}
			if ("defaultViewDate" in inOpts) {
				const viewDate = parseDate(inOpts.defaultViewDate, format, locale);
				if (viewDate !== undefined) {
					config.defaultViewDate = viewDate;
				}
				delete inOpts.defaultViewDate;
			}

			//*** days of week ***//
			if ("weekStart" in inOpts) {
				const wkStart = Number(inOpts.weekStart) % 7;
				if (!isNaN(wkStart)) {
					weekStart = updateWeekStart(wkStart, config, weekNumbers);
				}
				delete inOpts.weekStart;
			}
			if (inOpts.daysOfWeekDisabled) {
				config.daysOfWeekDisabled = inOpts.daysOfWeekDisabled.reduce(sanitizeDOW, []);
				delete inOpts.daysOfWeekDisabled;
			}
			if (inOpts.daysOfWeekHighlighted) {
				config.daysOfWeekHighlighted = inOpts.daysOfWeekHighlighted.reduce(sanitizeDOW, []);
				delete inOpts.daysOfWeekHighlighted;
			}

			//*** week numbers ***//
			if ("weekNumbers" in inOpts) {
				let method = inOpts.weekNumbers;
				if (method) {
					const getWeekNumber =
						typeof method === "function"
							? (timeValue, startOfWeek) => method(new Date(timeValue), startOfWeek)
							: determineGetWeekMethod((method = parseInt(method, 10)), weekStart);
					if (getWeekNumber) {
						weekNumbers = config.weekNumbers = method;
						config.getWeekNumber = getWeekNumber;
					}
				} else {
					weekNumbers = config.weekNumbers = 0;
					config.getWeekNumber = null;
				}
				delete inOpts.weekNumbers;
			}

			//*** multi date ***//
			if ("maxNumberOfDates" in inOpts) {
				const maxNumberOfDates = parseInt(inOpts.maxNumberOfDates, 10);
				if (maxNumberOfDates >= 0) {
					config.maxNumberOfDates = maxNumberOfDates;
					config.multidate = maxNumberOfDates !== 1;
				}
				delete inOpts.maxNumberOfDates;
			}
			if (inOpts.dateDelimiter) {
				config.dateDelimiter = String(inOpts.dateDelimiter);
				delete inOpts.dateDelimiter;
			}

			//*** view ***//
			let newMaxView = maxView;
			if ("maxView" in inOpts) {
				newMaxView = validateViewId(inOpts.maxView, maxView);
				delete inOpts.maxView;
			}
			// ensure max view >= pick level
			newMaxView = pickLevel > newMaxView ? pickLevel : newMaxView;
			if (newMaxView !== maxView) {
				maxView = config.maxView = newMaxView;
			}

			let newStartView = startView;
			if ("startView" in inOpts) {
				newStartView = validateViewId(inOpts.startView, newStartView);
				delete inOpts.startView;
			}
			// ensure pick level <= start view <= max view
			if (newStartView < pickLevel) {
				newStartView = pickLevel;
			} else if (newStartView > maxView) {
				newStartView = maxView;
			}
			if (newStartView !== startView) {
				config.startView = newStartView;
			}

			//*** template ***//
			if (inOpts.prevArrow) {
				const prevArrow = parseHTML(inOpts.prevArrow);
				if (prevArrow.childNodes.length > 0) {
					config.prevArrow = prevArrow.childNodes;
				}
				delete inOpts.prevArrow;
			}
			if (inOpts.nextArrow) {
				const nextArrow = parseHTML(inOpts.nextArrow);
				if (nextArrow.childNodes.length > 0) {
					config.nextArrow = nextArrow.childNodes;
				}
				delete inOpts.nextArrow;
			}

			//*** misc ***//
			if ("disableTouchKeyboard" in inOpts) {
				config.disableTouchKeyboard = "ontouchstart" in document && !!inOpts.disableTouchKeyboard;
				delete inOpts.disableTouchKeyboard;
			}
			if (inOpts.orientation) {
				const orientation = inOpts.orientation.toLowerCase().split(/\s+/g);
				config.orientation = {
					x: orientation.find((x) => x === "left" || x === "right") || "auto",
					y: orientation.find((y) => y === "top" || y === "bottom") || "auto",
				};
				delete inOpts.orientation;
			}
			if ("todayButtonMode" in inOpts) {
				switch (inOpts.todayButtonMode) {
					case 0:
					case 1:
						config.todayButtonMode = inOpts.todayButtonMode;
				}
				delete inOpts.todayButtonMode;
			}

			//*** copy the rest ***//
			Object.entries(inOpts).forEach(([key, value]) => {
				if (value !== undefined && key in defaultOptions) {
					config[key] = value;
				}
			});

			return config;
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/options/shortcutKeys.js

		const defaultShortcutKeys = {
			show: { key: "ArrowDown" },
			hide: null,
			toggle: { key: "Escape" },
			prevButton: { key: "ArrowLeft", ctrlOrMetaKey: true },
			nextButton: { key: "ArrowRight", ctrlOrMetaKey: true },
			viewSwitch: { key: "ArrowUp", ctrlOrMetaKey: true },
			clearButton: { key: "Backspace", ctrlOrMetaKey: true },
			todayButton: { key: ".", ctrlOrMetaKey: true },
			exitEditMode: { key: "ArrowDown", ctrlOrMetaKey: true },
		};

		function createShortcutKeyConfig(options) {
			return Object.keys(defaultShortcutKeys).reduce((keyDefs, shortcut) => {
				const keyDef = options[shortcut] === undefined ? defaultShortcutKeys[shortcut] : options[shortcut];
				const key = keyDef && keyDef.key;
				if (!key || typeof key !== "string") {
					return keyDefs;
				}

				const normalizedDef = {
					key,
					ctrlOrMetaKey: !!(keyDef.ctrlOrMetaKey || keyDef.ctrlKey || keyDef.metaKey),
				};
				if (key.length > 1) {
					normalizedDef.altKey = !!keyDef.altKey;
					normalizedDef.shiftKey = !!keyDef.shiftKey;
				}
				keyDefs[shortcut] = normalizedDef;
				return keyDefs;
			}, {});
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/templates/pickerTemplate.js

		const getButtons = (buttonList) =>
			buttonList
				.map((classes) => `<button type="button" class="%buttonClass% ${classes}" tabindex="-1"></button>`)
				.join("");

		/* harmony default export */ const pickerTemplate = optimizeTemplateHTML(`<div class="datepicker">
  <div class="datepicker-picker">
    <div class="datepicker-header">
      <div class="datepicker-title"></div>
      <div class="datepicker-controls">
        ${getButtons(["prev-button prev-btn", "view-switch", "next-button next-btn"])}
      </div>
    </div>
    <div class="datepicker-main"></div>
    <div class="datepicker-footer">
      <div class="datepicker-controls">
        ${getButtons(["today-button today-btn", "clear-button clear-btn"])}
      </div>
    </div>
  </div>
</div>`); // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/templates/daysTemplate.js

		/* harmony default export */ const daysTemplate = optimizeTemplateHTML(`<div class="days">
  <div class="days-of-week">${createTagRepeat("span", 7, { class: "dow" })}</div>
  <div class="datepicker-grid">${createTagRepeat("span", 42)}</div>
</div>`); // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/templates/weekNumbersTemplate.js

		/* harmony default export */ const weekNumbersTemplate =
			optimizeTemplateHTML(`<div class="week-numbers calendar-weeks">
  <div class="days-of-week"><span class="dow"></span></div>
  <div class="weeks">${createTagRepeat("span", 6, { class: "week" })}</div>
</div>`); // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/views/View.js

		// Base class of the view classes
		class View {
			constructor(picker, config) {
				Object.assign(this, config, {
					picker,
					element: parseHTML(`<div class="datepicker-view"></div>`).firstChild,
					selected: [],
					isRangeEnd: !!picker.datepicker.rangeSideIndex,
				});
				this.init(this.picker.datepicker.config);
			}

			init(options) {
				if ("pickLevel" in options) {
					this.isMinView = this.id === options.pickLevel;
				}
				this.setOptions(options);
				this.updateFocus();
				this.updateSelection();
			}

			prepareForRender(switchLabel, prevButtonDisabled, nextButtonDisabled) {
				// refresh disabled years on every render in order to clear the ones added
				// by beforeShow hook at previous render
				this.disabled = [];

				const picker = this.picker;
				picker.setViewSwitchLabel(switchLabel);
				picker.setPrevButtonDisabled(prevButtonDisabled);
				picker.setNextButtonDisabled(nextButtonDisabled);
			}

			setDisabled(date, classList) {
				classList.add("disabled");
				pushUnique(this.disabled, date);
			}

			// Execute beforeShow() callback and apply the result to the element
			// args:
			performBeforeHook(el, timeValue) {
				let result = this.beforeShow(new Date(timeValue));
				switch (typeof result) {
					case "boolean":
						result = { enabled: result };
						break;
					case "string":
						result = { classes: result };
				}

				if (result) {
					const classList = el.classList;
					if (result.enabled === false) {
						this.setDisabled(timeValue, classList);
					}
					if (result.classes) {
						const extraClasses = result.classes.split(/\s+/);
						classList.add(...extraClasses);
						if (extraClasses.includes("disabled")) {
							this.setDisabled(timeValue, classList);
						}
					}
					if (result.content) {
						replaceChildNodes(el, result.content);
					}
				}
			}

			renderCell(el, content, cellVal, date, { selected, range }, outOfScope, extraClasses = []) {
				el.textContent = content;
				if (this.isMinView) {
					el.dataset.date = date;
				}

				const classList = el.classList;
				el.className = `datepicker-cell ${this.cellClass}`;
				if (cellVal < this.first) {
					classList.add("prev");
				} else if (cellVal > this.last) {
					classList.add("next");
				}
				classList.add(...extraClasses);
				if (outOfScope || this.checkDisabled(date, this.id)) {
					this.setDisabled(date, classList);
				}
				if (range) {
					const [rangeStart, rangeEnd] = range;
					if (cellVal > rangeStart && cellVal < rangeEnd) {
						classList.add("range");
					}
					if (cellVal === rangeStart) {
						classList.add("range-start");
					}
					if (cellVal === rangeEnd) {
						classList.add("range-end");
					}
				}
				if (selected.includes(cellVal)) {
					classList.add("selected");
				}
				if (cellVal === this.focused) {
					classList.add("focused");
				}

				if (this.beforeShow) {
					this.performBeforeHook(el, date);
				}
			}

			refreshCell(el, cellVal, selected, [rangeStart, rangeEnd]) {
				const classList = el.classList;
				classList.remove("range", "range-start", "range-end", "selected", "focused");
				if (cellVal > rangeStart && cellVal < rangeEnd) {
					classList.add("range");
				}
				if (cellVal === rangeStart) {
					classList.add("range-start");
				}
				if (cellVal === rangeEnd) {
					classList.add("range-end");
				}
				if (selected.includes(cellVal)) {
					classList.add("selected");
				}
				if (cellVal === this.focused) {
					classList.add("focused");
				}
			}

			changeFocusedCell(cellIndex) {
				this.grid.querySelectorAll(".focused").forEach((el) => {
					el.classList.remove("focused");
				});
				this.grid.children[cellIndex].classList.add("focused");
			}
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/views/DaysView.js

		class DaysView extends View {
			constructor(picker) {
				super(picker, {
					id: 0,
					name: "days",
					cellClass: "day",
				});
			}

			init(options, onConstruction = true) {
				if (onConstruction) {
					const inner = parseHTML(daysTemplate).firstChild;
					this.dow = inner.firstChild;
					this.grid = inner.lastChild;
					this.element.appendChild(inner);
				}
				super.init(options);
			}

			setOptions(options) {
				let updateDOW;

				if ("minDate" in options) {
					this.minDate = options.minDate;
				}
				if ("maxDate" in options) {
					this.maxDate = options.maxDate;
				}
				if (options.checkDisabled) {
					this.checkDisabled = options.checkDisabled;
				}
				if (options.daysOfWeekDisabled) {
					this.daysOfWeekDisabled = options.daysOfWeekDisabled;
					updateDOW = true;
				}
				if (options.daysOfWeekHighlighted) {
					this.daysOfWeekHighlighted = options.daysOfWeekHighlighted;
				}
				if ("todayHighlight" in options) {
					this.todayHighlight = options.todayHighlight;
				}
				if ("weekStart" in options) {
					this.weekStart = options.weekStart;
					this.weekEnd = options.weekEnd;
					updateDOW = true;
				}
				if (options.locale) {
					const locale = (this.locale = options.locale);
					this.dayNames = locale.daysMin;
					this.switchLabelFormat = locale.titleFormat;
					updateDOW = true;
				}
				if ("beforeShowDay" in options) {
					this.beforeShow = typeof options.beforeShowDay === "function" ? options.beforeShowDay : undefined;
				}

				if ("weekNumbers" in options) {
					if (options.weekNumbers && !this.weekNumbers) {
						const weeksElem = parseHTML(weekNumbersTemplate).firstChild;
						this.weekNumbers = {
							element: weeksElem,
							dow: weeksElem.firstChild,
							weeks: weeksElem.lastChild,
						};
						this.element.insertBefore(weeksElem, this.element.firstChild);
					} else if (this.weekNumbers && !options.weekNumbers) {
						this.element.removeChild(this.weekNumbers.element);
						this.weekNumbers = null;
					}
				}

				if ("getWeekNumber" in options) {
					this.getWeekNumber = options.getWeekNumber;
				}

				if ("showDaysOfWeek" in options) {
					if (options.showDaysOfWeek) {
						showElement(this.dow);
						if (this.weekNumbers) {
							showElement(this.weekNumbers.dow);
						}
					} else {
						hideElement(this.dow);
						if (this.weekNumbers) {
							hideElement(this.weekNumbers.dow);
						}
					}
				}

				// update days-of-week when locale, daysOfweekDisabled or weekStart is changed
				if (updateDOW) {
					Array.from(this.dow.children).forEach((el, index) => {
						const dow = (this.weekStart + index) % 7;
						el.textContent = this.dayNames[dow];
						el.className = this.daysOfWeekDisabled.includes(dow) ? "dow disabled" : "dow";
					});
				}
			}

			// Apply update on the focused date to view's settings
			updateFocus() {
				const viewDate = new Date(this.picker.viewDate);
				const viewYear = viewDate.getFullYear();
				const viewMonth = viewDate.getMonth();
				const firstOfMonth = dateValue(viewYear, viewMonth, 1);
				const start = dayOfTheWeekOf(firstOfMonth, this.weekStart, this.weekStart);

				this.first = firstOfMonth;
				this.last = dateValue(viewYear, viewMonth + 1, 0);
				this.start = start;
				this.focused = this.picker.viewDate;
			}

			// Apply update on the selected dates to view's settings
			updateSelection() {
				const { dates, rangepicker } = this.picker.datepicker;
				this.selected = dates;
				if (rangepicker) {
					this.range = rangepicker.dates;
				}
			}

			// Update the entire view UI
			render() {
				// update today marker on ever render
				this.today = this.todayHighlight ? today() : undefined;

				this.prepareForRender(
					date_format_formatDate(this.focused, this.switchLabelFormat, this.locale),
					this.first <= this.minDate,
					this.last >= this.maxDate
				);

				if (this.weekNumbers) {
					const weekStart = this.weekStart;
					const startOfWeek = dayOfTheWeekOf(this.first, weekStart, weekStart);
					Array.from(this.weekNumbers.weeks.children).forEach((el, index) => {
						const dateOfWeekStart = addWeeks(startOfWeek, index);
						el.textContent = this.getWeekNumber(dateOfWeekStart, weekStart);
						if (index > 3) {
							el.classList[dateOfWeekStart > this.last ? "add" : "remove"]("next");
						}
					});
				}
				Array.from(this.grid.children).forEach((el, index) => {
					const current = addDays(this.start, index);
					const dateObj = new Date(current);
					const day = dateObj.getDay();
					const extraClasses = [];

					if (this.today === current) {
						extraClasses.push("today");
					}
					if (this.daysOfWeekHighlighted.includes(day)) {
						extraClasses.push("highlighted");
					}

					this.renderCell(
						el,
						dateObj.getDate(),
						current,
						current,
						this,
						current < this.minDate || current > this.maxDate || this.daysOfWeekDisabled.includes(day),
						extraClasses
					);
				});
			}

			// Update the view UI by applying the changes of selected and focused items
			refresh() {
				const range = this.range || [];
				Array.from(this.grid.children).forEach((el) => {
					this.refreshCell(el, Number(el.dataset.date), this.selected, range);
				});
			}

			// Update the view UI by applying the change of focused item
			refreshFocus() {
				this.changeFocusedCell(Math.round((this.focused - this.start) / 86400000));
			}
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/views/MonthsView.js

		function computeMonthRange(range, thisYear) {
			if (!range || !range[0] || !range[1]) {
				return;
			}

			const [[startY, startM], [endY, endM]] = range;
			if (startY > thisYear || endY < thisYear) {
				return;
			}
			return [startY === thisYear ? startM : -1, endY === thisYear ? endM : 12];
		}

		class MonthsView extends View {
			constructor(picker) {
				super(picker, {
					id: 1,
					name: "months",
					cellClass: "month",
				});
			}

			init(options, onConstruction = true) {
				if (onConstruction) {
					this.grid = this.element;
					this.element.classList.add("months", "datepicker-grid");
					this.grid.appendChild(parseHTML(createTagRepeat("span", 12, { "data-month": (ix) => ix })));
					this.first = 0;
					this.last = 11;
				}
				super.init(options);
			}

			setOptions(options) {
				if (options.locale) {
					this.monthNames = options.locale.monthsShort;
				}
				if ("minDate" in options) {
					if (options.minDate === undefined) {
						this.minYear = this.minMonth = this.minDate = undefined;
					} else {
						const minDateObj = new Date(options.minDate);
						this.minYear = minDateObj.getFullYear();
						this.minMonth = minDateObj.getMonth();
						this.minDate = minDateObj.setDate(1);
					}
				}
				if ("maxDate" in options) {
					if (options.maxDate === undefined) {
						this.maxYear = this.maxMonth = this.maxDate = undefined;
					} else {
						const maxDateObj = new Date(options.maxDate);
						this.maxYear = maxDateObj.getFullYear();
						this.maxMonth = maxDateObj.getMonth();
						this.maxDate = dateValue(this.maxYear, this.maxMonth + 1, 0);
					}
				}
				if (options.checkDisabled) {
					this.checkDisabled =
						this.isMinView || options.datesDisabled === null ? options.checkDisabled : () => false;
				}
				if ("beforeShowMonth" in options) {
					this.beforeShow =
						typeof options.beforeShowMonth === "function" ? options.beforeShowMonth : undefined;
				}
			}

			// Update view's settings to reflect the viewDate set on the picker
			updateFocus() {
				const viewDate = new Date(this.picker.viewDate);
				this.year = viewDate.getFullYear();
				this.focused = viewDate.getMonth();
			}

			// Update view's settings to reflect the selected dates
			updateSelection() {
				const { dates, rangepicker } = this.picker.datepicker;
				this.selected = dates.reduce((selected, timeValue) => {
					const date = new Date(timeValue);
					const year = date.getFullYear();
					const month = date.getMonth();
					if (selected[year] === undefined) {
						selected[year] = [month];
					} else {
						pushUnique(selected[year], month);
					}
					return selected;
				}, {});
				if (rangepicker && rangepicker.dates) {
					this.range = rangepicker.dates.map((timeValue) => {
						const date = new Date(timeValue);
						return isNaN(date) ? undefined : [date.getFullYear(), date.getMonth()];
					});
				}
			}

			// Update the entire view UI
			render() {
				this.prepareForRender(this.year, this.year <= this.minYear, this.year >= this.maxYear);

				const selected = this.selected[this.year] || [];
				const yrOutOfRange = this.year < this.minYear || this.year > this.maxYear;
				const isMinYear = this.year === this.minYear;
				const isMaxYear = this.year === this.maxYear;
				const range = computeMonthRange(this.range, this.year);

				Array.from(this.grid.children).forEach((el, index) => {
					const date = regularizeDate(new Date(this.year, index, 1), 1, this.isRangeEnd);

					this.renderCell(
						el,
						this.monthNames[index],
						index,
						date,
						{ selected, range },
						yrOutOfRange || (isMinYear && index < this.minMonth) || (isMaxYear && index > this.maxMonth)
					);
				});
			}

			// Update the view UI by applying the changes of selected and focused items
			refresh() {
				const selected = this.selected[this.year] || [];
				const range = computeMonthRange(this.range, this.year) || [];
				Array.from(this.grid.children).forEach((el, index) => {
					this.refreshCell(el, index, selected, range);
				});
			}

			// Update the view UI by applying the change of focused item
			refreshFocus() {
				this.changeFocusedCell(this.focused);
			}
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/views/YearsView.js
		function toTitleCase(word) {
			return [...word].reduce((str, ch, ix) => (str += ix ? ch : ch.toUpperCase()), "");
		}

		// Class representing the years and decades view elements
		class YearsView extends View {
			constructor(picker, config) {
				super(picker, config);
			}

			init(options, onConstruction = true) {
				if (onConstruction) {
					this.navStep = this.step * 10;
					this.beforeShowOption = `beforeShow${toTitleCase(this.cellClass)}`;
					this.grid = this.element;
					this.element.classList.add(this.name, "datepicker-grid");
					this.grid.appendChild(parseHTML(createTagRepeat("span", 12)));
				}
				super.init(options);
			}

			setOptions(options) {
				if ("minDate" in options) {
					if (options.minDate === undefined) {
						this.minYear = this.minDate = undefined;
					} else {
						this.minYear = startOfYearPeriod(options.minDate, this.step);
						this.minDate = dateValue(this.minYear, 0, 1);
					}
				}
				if ("maxDate" in options) {
					if (options.maxDate === undefined) {
						this.maxYear = this.maxDate = undefined;
					} else {
						this.maxYear = startOfYearPeriod(options.maxDate, this.step);
						this.maxDate = dateValue(this.maxYear, 11, 31);
					}
				}
				if (options.checkDisabled) {
					this.checkDisabled =
						this.isMinView || options.datesDisabled === null ? options.checkDisabled : () => false;
				}
				if (this.beforeShowOption in options) {
					const beforeShow = options[this.beforeShowOption];
					this.beforeShow = typeof beforeShow === "function" ? beforeShow : undefined;
				}
			}

			// Update view's settings to reflect the viewDate set on the picker
			updateFocus() {
				const viewDate = new Date(this.picker.viewDate);
				const first = startOfYearPeriod(viewDate, this.navStep);
				const last = first + 9 * this.step;

				this.first = first;
				this.last = last;
				this.start = first - this.step;
				this.focused = startOfYearPeriod(viewDate, this.step);
			}

			// Update view's settings to reflect the selected dates
			updateSelection() {
				const { dates, rangepicker } = this.picker.datepicker;
				this.selected = dates.reduce((years, timeValue) => {
					return pushUnique(years, startOfYearPeriod(timeValue, this.step));
				}, []);
				if (rangepicker && rangepicker.dates) {
					this.range = rangepicker.dates.map((timeValue) => {
						if (timeValue !== undefined) {
							return startOfYearPeriod(timeValue, this.step);
						}
					});
				}
			}

			// Update the entire view UI
			render() {
				this.prepareForRender(
					`${this.first}-${this.last}`,
					this.first <= this.minYear,
					this.last >= this.maxYear
				);

				Array.from(this.grid.children).forEach((el, index) => {
					const current = this.start + index * this.step;
					const date = regularizeDate(new Date(current, 0, 1), 2, this.isRangeEnd);

					el.dataset.year = current;
					this.renderCell(el, current, current, date, this, current < this.minYear || current > this.maxYear);
				});
			}

			// Update the view UI by applying the changes of selected and focused items
			refresh() {
				const range = this.range || [];
				Array.from(this.grid.children).forEach((el) => {
					this.refreshCell(el, Number(el.textContent), this.selected, range);
				});
			}

			// Update the view UI by applying the change of focused item
			refreshFocus() {
				this.changeFocusedCell(Math.round((this.focused - this.start) / this.step));
			}
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/events/functions.js

		function triggerDatepickerEvent(datepicker, type) {
			const options = {
				bubbles: true,
				cancelable: true,
				detail: {
					date: datepicker.getDate(),
					viewDate: new Date(datepicker.picker.viewDate),
					viewId: datepicker.picker.currentView.id,
					datepicker,
				},
			};
			datepicker.element.dispatchEvent(new CustomEvent(type, options));
		}

		// direction: -1 (to previous), 1 (to next)
		function goToPrevOrNext(datepicker, direction) {
			const { config, picker } = datepicker;
			const { currentView, viewDate } = picker;
			let newViewDate;
			switch (currentView.id) {
				case 0:
					newViewDate = addMonths(viewDate, direction);
					break;
				case 1:
					newViewDate = addYears(viewDate, direction);
					break;
				default:
					newViewDate = addYears(viewDate, direction * currentView.navStep);
			}
			newViewDate = limitToRange(newViewDate, config.minDate, config.maxDate);
			picker.changeFocus(newViewDate).render();
		}

		function switchView(datepicker) {
			const viewId = datepicker.picker.currentView.id;
			if (viewId === datepicker.config.maxView) {
				return;
			}
			datepicker.picker.changeView(viewId + 1).render();
		}

		function clearSelection(datepicker) {
			datepicker.setDate({ clear: true });
		}

		function goToOrSelectToday(datepicker) {
			const currentDate = today();
			if (datepicker.config.todayButtonMode === 1) {
				datepicker.setDate(currentDate, { forceRefresh: true, viewDate: currentDate });
			} else {
				datepicker.setFocusedDate(currentDate, true);
			}
		}

		function unfocus(datepicker) {
			const onBlur = () => {
				if (datepicker.config.updateOnBlur) {
					datepicker.update({ revert: true });
				} else {
					datepicker.refresh("input");
				}
				datepicker.hide();
			};
			const element = datepicker.element;

			if (isActiveElement(element)) {
				element.addEventListener("blur", onBlur, { once: true });
			} else {
				onBlur();
			}
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/events/pickerListeners.js

		function goToSelectedMonthOrYear(datepicker, selection) {
			const picker = datepicker.picker;
			const viewDate = new Date(picker.viewDate);
			const viewId = picker.currentView.id;
			const newDate =
				viewId === 1
					? addMonths(viewDate, selection - viewDate.getMonth())
					: addYears(viewDate, selection - viewDate.getFullYear());

			picker
				.changeFocus(newDate)
				.changeView(viewId - 1)
				.render();
		}

		function onClickViewSwitch(datepicker) {
			switchView(datepicker);
		}

		function onClickPrevButton(datepicker) {
			goToPrevOrNext(datepicker, -1);
		}

		function onClickNextButton(datepicker) {
			goToPrevOrNext(datepicker, 1);
		}

		// For the picker's main block to delegete the events from `datepicker-cell`s
		function onClickView(datepicker, ev) {
			const target = findElementInEventPath(ev, ".datepicker-cell");
			if (!target || target.classList.contains("disabled")) {
				return;
			}

			const { id, isMinView } = datepicker.picker.currentView;
			const data = target.dataset;
			if (isMinView) {
				datepicker.setDate(Number(data.date));
			} else if (id === 1) {
				goToSelectedMonthOrYear(datepicker, Number(data.month));
			} else {
				goToSelectedMonthOrYear(datepicker, Number(data.year));
			}
		}

		function onMousedownPicker(ev) {
			ev.preventDefault();
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/picker/Picker.js

		const orientClasses = ["left", "top", "right", "bottom"].reduce((obj, key) => {
			obj[key] = `datepicker-orient-${key}`;
			return obj;
		}, {});
		const toPx = (num) => (num ? `${num}px` : num);

		function processPickerOptions(picker, options) {
			if ("title" in options) {
				if (options.title) {
					picker.controls.title.textContent = options.title;
					showElement(picker.controls.title);
				} else {
					picker.controls.title.textContent = "";
					hideElement(picker.controls.title);
				}
			}
			if (options.prevArrow) {
				const prevButton = picker.controls.prevButton;
				emptyChildNodes(prevButton);
				options.prevArrow.forEach((node) => {
					prevButton.appendChild(node.cloneNode(true));
				});
			}
			if (options.nextArrow) {
				const nextButton = picker.controls.nextButton;
				emptyChildNodes(nextButton);
				options.nextArrow.forEach((node) => {
					nextButton.appendChild(node.cloneNode(true));
				});
			}
			if (options.locale) {
				picker.controls.todayButton.textContent = options.locale.today;
				picker.controls.clearButton.textContent = options.locale.clear;
			}
			if ("todayButton" in options) {
				if (options.todayButton) {
					showElement(picker.controls.todayButton);
				} else {
					hideElement(picker.controls.todayButton);
				}
			}
			if ("minDate" in options || "maxDate" in options) {
				const { minDate, maxDate } = picker.datepicker.config;
				picker.controls.todayButton.disabled = !isInRange(today(), minDate, maxDate);
			}
			if ("clearButton" in options) {
				if (options.clearButton) {
					showElement(picker.controls.clearButton);
				} else {
					hideElement(picker.controls.clearButton);
				}
			}
		}

		// Compute view date to reset, which will be...
		// - the last item of the selected dates or defaultViewDate if no selection
		// - limitted to minDate or maxDate if it exceeds the range
		function computeResetViewDate(datepicker) {
			const { dates, config, rangeSideIndex } = datepicker;
			const viewDate =
				dates.length > 0
					? lastItemOf(dates)
					: regularizeDate(config.defaultViewDate, config.pickLevel, rangeSideIndex);
			return limitToRange(viewDate, config.minDate, config.maxDate);
		}

		// Change current view's view date
		function setViewDate(picker, newDate) {
			if (!("_oldViewDate" in picker) && newDate !== picker.viewDate) {
				picker._oldViewDate = picker.viewDate;
			}
			picker.viewDate = newDate;

			// return whether the new date is in different period on time from the one
			// displayed in the current view
			// when true, the view needs to be re-rendered on the next UI refresh.
			const { id, year, first, last } = picker.currentView;
			const viewYear = new Date(newDate).getFullYear();
			switch (id) {
				case 0:
					return newDate < first || newDate > last;
				case 1:
					return viewYear !== year;
				default:
					return viewYear < first || viewYear > last;
			}
		}

		function getTextDirection(el) {
			return window.getComputedStyle(el).direction;
		}

		// find the closet scrollable ancestor elemnt under the body
		function findScrollParents(el) {
			const parent = getParent(el);
			if (parent === document.body || !parent) {
				return;
			}

			// checking overflow only is enough because computed overflow cannot be
			// visible or a combination of visible and other when either axis is set
			// to other than visible.
			// (Setting one axis to other than 'visible' while the other is 'visible'
			// results in the other axis turning to 'auto')
			return window.getComputedStyle(parent).overflow !== "visible" ? parent : findScrollParents(parent);
		}

		// Class representing the picker UI
		class Picker {
			constructor(datepicker) {
				const { config, inputField } = (this.datepicker = datepicker);

				const template = pickerTemplate.replace(/%buttonClass%/g, config.buttonClass);
				const element = (this.element = parseHTML(template).firstChild);
				const [header, main, footer] = element.firstChild.children;
				const title = header.firstElementChild;
				const [prevButton, viewSwitch, nextButton] = header.lastElementChild.children;
				const [todayButton, clearButton] = footer.firstChild.children;
				const controls = {
					title,
					prevButton,
					viewSwitch,
					nextButton,
					todayButton,
					clearButton,
				};
				this.main = main;
				this.controls = controls;

				const elementClass = inputField ? "dropdown" : "inline";
				element.classList.add(`datepicker-${elementClass}`);

				processPickerOptions(this, config);
				this.viewDate = computeResetViewDate(datepicker);

				// set up event listeners
				event_registerListeners(datepicker, [
					[element, "mousedown", onMousedownPicker],
					[main, "click", onClickView.bind(null, datepicker)],
					[controls.viewSwitch, "click", onClickViewSwitch.bind(null, datepicker)],
					[controls.prevButton, "click", onClickPrevButton.bind(null, datepicker)],
					[controls.nextButton, "click", onClickNextButton.bind(null, datepicker)],
					[controls.todayButton, "click", goToOrSelectToday.bind(null, datepicker)],
					[controls.clearButton, "click", clearSelection.bind(null, datepicker)],
				]);

				// set up views
				this.views = [
					new DaysView(this),
					new MonthsView(this),
					new YearsView(this, { id: 2, name: "years", cellClass: "year", step: 1 }),
					new YearsView(this, { id: 3, name: "decades", cellClass: "decade", step: 10 }),
				];
				this.currentView = this.views[config.startView];

				this.currentView.render();
				this.main.appendChild(this.currentView.element);
				if (config.container) {
					config.container.appendChild(this.element);
				} else {
					inputField.after(this.element);
				}
			}

			setOptions(options) {
				processPickerOptions(this, options);
				this.views.forEach((view) => {
					view.init(options, false);
				});
				this.currentView.render();
			}

			detach() {
				this.element.remove();
			}

			show() {
				if (this.active) {
					return;
				}

				const { datepicker, element } = this;
				const inputField = datepicker.inputField;
				if (inputField) {
					// ensure picker's direction matches input's
					const inputDirection = getTextDirection(inputField);
					if (inputDirection !== getTextDirection(getParent(element))) {
						element.dir = inputDirection;
					} else if (element.dir) {
						element.removeAttribute("dir");
					}

					// Determine the picker's position first to prevent `orientation: 'auto'`
					// from being miscalculated to 'bottom' after the picker temporarily
					// shown below the input field expands the document height if the field
					// is at the bottom edge of the document
					this.place();
					element.classList.add("active");

					if (datepicker.config.disableTouchKeyboard) {
						inputField.blur();
					}
				} else {
					element.classList.add("active");
				}
				this.active = true;
				triggerDatepickerEvent(datepicker, "show");
			}

			hide() {
				if (!this.active) {
					return;
				}
				this.datepicker.exitEditMode();
				this.element.classList.remove("active");
				this.active = false;
				triggerDatepickerEvent(this.datepicker, "hide");
			}

			place() {
				const { classList, style } = this.element;
				// temporarily display the picker to get its size and offset parent
				style.display = "block";

				const { width: calendarWidth, height: calendarHeight } = this.element.getBoundingClientRect();
				const offsetParent = this.element.offsetParent;
				// turn the picker back to hidden so that the position is determined with
				// the state before it is shown.
				style.display = "";

				const { config, inputField } = this.datepicker;
				const {
					left: inputLeft,
					top: inputTop,
					right: inputRight,
					bottom: inputBottom,
					width: inputWidth,
					height: inputHeight,
				} = inputField.getBoundingClientRect();
				let { x: orientX, y: orientY } = config.orientation;
				let left = inputLeft;
				let top = inputTop;

				// caliculate offsetLeft/Top of inputField
				if (offsetParent === document.body || !offsetParent) {
					left += window.scrollX;
					top += window.scrollY;
				} else {
					const offsetParentRect = offsetParent.getBoundingClientRect();
					left -= offsetParentRect.left - offsetParent.scrollLeft;
					top -= offsetParentRect.top - offsetParent.scrollTop;
				}

				// caliculate the boundaries of the visible area that contains inputField
				const scrollParent = findScrollParents(inputField);
				let scrollAreaLeft = 0;
				let scrollAreaTop = 0;
				let { clientWidth: scrollAreaRight, clientHeight: scrollAreaBottom } = document.documentElement;

				if (scrollParent) {
					const scrollParentRect = scrollParent.getBoundingClientRect();
					if (scrollParentRect.top > 0) {
						scrollAreaTop = scrollParentRect.top;
					}
					if (scrollParentRect.left > 0) {
						scrollAreaLeft = scrollParentRect.left;
					}
					if (scrollParentRect.right < scrollAreaRight) {
						scrollAreaRight = scrollParentRect.right;
					}
					if (scrollParentRect.bottom < scrollAreaBottom) {
						scrollAreaBottom = scrollParentRect.bottom;
					}
				}

				// determine the horizontal orientation and left position
				let adjustment = 0;
				if (orientX === "auto") {
					if (inputLeft < scrollAreaLeft) {
						orientX = "left";
						adjustment = scrollAreaLeft - inputLeft;
					} else if (inputLeft + calendarWidth > scrollAreaRight) {
						orientX = "right";
						if (scrollAreaRight < inputRight) {
							adjustment = scrollAreaRight - inputRight;
						}
					} else if (getTextDirection(inputField) === "rtl") {
						orientX = inputRight - calendarWidth < scrollAreaLeft ? "left" : "right";
					} else {
						orientX = "left";
					}
				}
				if (orientX === "right") {
					left += inputWidth - calendarWidth;
				}
				left += adjustment;

				// determine the vertical orientation and top position
				if (orientY === "auto") {
					if (inputTop - calendarHeight > scrollAreaTop) {
						orientY = inputBottom + calendarHeight > scrollAreaBottom ? "top" : "bottom";
					} else {
						orientY = "bottom";
					}
				}
				if (orientY === "top") {
					top -= calendarHeight;
				} else {
					top += inputHeight;
				}

				classList.remove(...Object.values(orientClasses));
				classList.add(orientClasses[orientX], orientClasses[orientY]);

				style.left = toPx(left);
				style.top = toPx(top);
			}

			setViewSwitchLabel(labelText) {
				this.controls.viewSwitch.textContent = labelText;
			}

			setPrevButtonDisabled(disabled) {
				this.controls.prevButton.disabled = disabled;
			}

			setNextButtonDisabled(disabled) {
				this.controls.nextButton.disabled = disabled;
			}

			changeView(viewId) {
				const currentView = this.currentView;
				if (viewId !== currentView.id) {
					if (!this._oldView) {
						this._oldView = currentView;
					}
					this.currentView = this.views[viewId];
					this._renderMethod = "render";
				}
				return this;
			}

			// Change the focused date (view date)
			changeFocus(newViewDate) {
				this._renderMethod = setViewDate(this, newViewDate) ? "render" : "refreshFocus";
				this.views.forEach((view) => {
					view.updateFocus();
				});
				return this;
			}

			// Apply the change of the selected dates
			update(viewDate = undefined) {
				const newViewDate = viewDate === undefined ? computeResetViewDate(this.datepicker) : viewDate;
				this._renderMethod = setViewDate(this, newViewDate) ? "render" : "refresh";
				this.views.forEach((view) => {
					view.updateFocus();
					view.updateSelection();
				});
				return this;
			}

			// Refresh the picker UI
			render(quickRender = true) {
				const { currentView, datepicker, _oldView: oldView } = this;
				const oldViewDate = new Date(this._oldViewDate);
				const renderMethod = (quickRender && this._renderMethod) || "render";
				delete this._oldView;
				delete this._oldViewDate;
				delete this._renderMethod;

				currentView[renderMethod]();
				if (oldView) {
					this.main.replaceChild(currentView.element, oldView.element);
					triggerDatepickerEvent(datepicker, "changeView");
				}
				if (!isNaN(oldViewDate)) {
					const newViewDate = new Date(this.viewDate);
					if (newViewDate.getFullYear() !== oldViewDate.getFullYear()) {
						triggerDatepickerEvent(datepicker, "changeYear");
					}
					if (newViewDate.getMonth() !== oldViewDate.getMonth()) {
						triggerDatepickerEvent(datepicker, "changeMonth");
					}
				}
			}
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/events/elementListeners.js

		// Find the closest date that doesn't meet the condition for unavailable date
		// Returns undefined if no available date is found
		// addFn: function to calculate the next date
		//   - args: time value, amount
		// increase: amount to pass to addFn
		// testFn: function to test the unavailability of the date
		//   - args: time value; return: true if unavailable
		function findNextAvailableOne(date, addFn, increase, testFn, min, max) {
			if (!isInRange(date, min, max)) {
				return;
			}
			if (testFn(date)) {
				const newDate = addFn(date, increase);
				return findNextAvailableOne(newDate, addFn, increase, testFn, min, max);
			}
			return date;
		}

		// direction: -1 (left/up), 1 (right/down)
		// vertical: true for up/down, false for left/right
		function moveByArrowKey(datepicker, direction, vertical) {
			const picker = datepicker.picker;
			const currentView = picker.currentView;
			const step = currentView.step || 1;
			let viewDate = picker.viewDate;
			let addFn;
			switch (currentView.id) {
				case 0:
					viewDate = addDays(viewDate, vertical ? direction * 7 : direction);
					addFn = addDays;
					break;
				case 1:
					viewDate = addMonths(viewDate, vertical ? direction * 4 : direction);
					addFn = addMonths;
					break;
				default:
					viewDate = addYears(viewDate, direction * (vertical ? 4 : 1) * step);
					addFn = addYears;
			}
			viewDate = findNextAvailableOne(
				viewDate,
				addFn,
				direction < 0 ? -step : step,
				(date) => currentView.disabled.includes(date),
				currentView.minDate,
				currentView.maxDate
			);
			if (viewDate !== undefined) {
				picker.changeFocus(viewDate).render();
			}
		}

		function onKeydown(datepicker, ev) {
			const { config, picker, editMode } = datepicker;
			const active = picker.active;
			const { key, altKey, shiftKey } = ev;
			const ctrlOrMetaKey = ev.ctrlKey || ev.metaKey;
			const cancelEvent = () => {
				ev.preventDefault();
				ev.stopPropagation();
			};

			// tab/enter keys should not be taken by shortcut keys
			if (key === "Tab") {
				unfocus(datepicker);
				return;
			}
			if (key === "Enter") {
				if (!active) {
					datepicker.update();
				} else if (editMode) {
					datepicker.exitEditMode({ update: true, autohide: config.autohide });
				} else {
					const currentView = picker.currentView;
					if (currentView.isMinView) {
						datepicker.setDate(picker.viewDate);
					} else {
						picker.changeView(currentView.id - 1).render();
						cancelEvent();
					}
				}
				return;
			}

			const shortcutKeys = config.shortcutKeys;
			const keyInfo = { key, ctrlOrMetaKey, altKey, shiftKey };
			const shortcut = Object.keys(shortcutKeys).find((item) => {
				const keyDef = shortcutKeys[item];
				return !Object.keys(keyDef).find((prop) => keyDef[prop] !== keyInfo[prop]);
			});
			if (shortcut) {
				let action;
				if (shortcut === "toggle") {
					action = shortcut;
				} else if (editMode) {
					if (shortcut === "exitEditMode") {
						action = shortcut;
					}
				} else if (active) {
					if (shortcut === "hide") {
						action = shortcut;
					} else if (shortcut === "prevButton") {
						action = [goToPrevOrNext, [datepicker, -1]];
					} else if (shortcut === "nextButton") {
						action = [goToPrevOrNext, [datepicker, 1]];
					} else if (shortcut === "viewSwitch") {
						action = [switchView, [datepicker]];
					} else if (config.clearButton && shortcut === "clearButton") {
						action = [clearSelection, [datepicker]];
					} else if (config.todayButton && shortcut === "todayButton") {
						action = [goToOrSelectToday, [datepicker]];
					}
				} else if (shortcut === "show") {
					action = shortcut;
				}
				if (action) {
					if (Array.isArray(action)) {
						action[0].apply(null, action[1]);
					} else {
						datepicker[action]();
					}
					cancelEvent();
					return;
				}
			}

			// perform as a regular <input> when picker in hidden or in edit mode
			if (!active || editMode) {
				return;
			}

			const handleArrowKeyPress = (direction, vertical) => {
				if (shiftKey || ctrlOrMetaKey || altKey) {
					datepicker.enterEditMode();
				} else {
					moveByArrowKey(datepicker, direction, vertical);
					ev.preventDefault();
				}
			};

			if (key === "ArrowLeft") {
				handleArrowKeyPress(-1, false);
			} else if (key === "ArrowRight") {
				handleArrowKeyPress(1, false);
			} else if (key === "ArrowUp") {
				handleArrowKeyPress(-1, true);
			} else if (key === "ArrowDown") {
				handleArrowKeyPress(1, true);
			} else if (
				key === "Backspace" ||
				key === "Delete" ||
				// When autofill is performed, Chromium-based browsers trigger fake
				// keydown/keyup events that don't have the `key` property (on Edge,
				// keyup only) in addition to the input event. Therefore, we need to
				// check the existence of `key`'s value before checking the length.
				// (issue #144)
				(key && key.length === 1 && !ctrlOrMetaKey)
			) {
				datepicker.enterEditMode();
			}
		}

		function onFocus(datepicker) {
			if (datepicker.config.showOnFocus && !datepicker._showing) {
				datepicker.show();
			}
		}

		// for the prevention for entering edit mode while getting focus on click
		function onMousedown(datepicker, ev) {
			const el = ev.target;
			if (datepicker.picker.active || datepicker.config.showOnClick) {
				el._active = isActiveElement(el);
				el._clicking = setTimeout(() => {
					delete el._active;
					delete el._clicking;
				}, 2000);
			}
		}

		function onClickInput(datepicker, ev) {
			const el = ev.target;
			if (!el._clicking) {
				return;
			}
			clearTimeout(el._clicking);
			delete el._clicking;

			if (el._active) {
				datepicker.enterEditMode();
			}
			delete el._active;

			if (datepicker.config.showOnClick) {
				datepicker.show();
			}
		}

		function onPaste(datepicker, ev) {
			if (ev.clipboardData.types.includes("text/plain")) {
				datepicker.enterEditMode();
			}
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/events/otherListeners.js

		// for the `document` to delegate the events from outside the picker/input field
		function onClickOutside(datepicker, ev) {
			const { element, picker } = datepicker;
			// check both picker's and input's activeness to make updateOnBlur work in
			// the cases where...
			// - picker is hidden by ESC key press → input stays focused
			// - input is unfocused by closing mobile keyboard → piker is kept shown
			if (!picker.active && !isActiveElement(element)) {
				return;
			}
			const pickerElem = picker.element;
			if (findElementInEventPath(ev, (el) => el === element || el === pickerElem)) {
				return;
			}
			unfocus(datepicker);
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/Datepicker.js

		function stringifyDates(dates, config) {
			return dates
				.map((dt) => date_format_formatDate(dt, config.format, config.locale))
				.join(config.dateDelimiter);
		}

		// parse input dates and create an array of time values for selection
		// returns undefined if there are no valid dates in inputDates
		// when origDates (current selection) is passed, the function works to mix
		// the input dates into the current selection
		function processInputDates(datepicker, inputDates, clear = false) {
			if (inputDates.length === 0) {
				// empty input is considered valid unless origiDates is passed
				return clear ? [] : undefined;
			}

			const { config, dates: origDates, rangeSideIndex } = datepicker;
			const { pickLevel, maxNumberOfDates } = config;
			let newDates = inputDates.reduce((dates, dt) => {
				let date = parseDate(dt, config.format, config.locale);
				if (date === undefined) {
					return dates;
				}
				// adjust to 1st of the month/Jan 1st of the year
				// or to the last day of the monh/Dec 31st of the year if the datepicker
				// is the range-end picker of a rangepicker
				date = regularizeDate(date, pickLevel, rangeSideIndex);
				if (
					isInRange(date, config.minDate, config.maxDate) &&
					!dates.includes(date) &&
					!config.checkDisabled(date, pickLevel) &&
					(pickLevel > 0 || !config.daysOfWeekDisabled.includes(new Date(date).getDay()))
				) {
					dates.push(date);
				}
				return dates;
			}, []);
			if (newDates.length === 0) {
				return;
			}
			if (config.multidate && !clear) {
				// get the synmetric difference between origDates and newDates
				newDates = newDates.reduce(
					(dates, date) => {
						if (!origDates.includes(date)) {
							dates.push(date);
						}
						return dates;
					},
					origDates.filter((date) => !newDates.includes(date))
				);
			}
			// do length check always because user can input multiple dates regardless of the mode
			return maxNumberOfDates && newDates.length > maxNumberOfDates
				? newDates.slice(maxNumberOfDates * -1)
				: newDates;
		}

		// refresh the UI elements
		// modes: 1: input only, 2, picker only, 3 both
		function refreshUI(datepicker, mode = 3, quickRender = true, viewDate = undefined) {
			const { config, picker, inputField } = datepicker;
			if (mode & 2) {
				const newView = picker.active ? config.pickLevel : config.startView;
				picker.update(viewDate).changeView(newView).render(quickRender);
			}
			if (mode & 1 && inputField) {
				inputField.value = stringifyDates(datepicker.dates, config);
			}
		}

		function setDate(datepicker, inputDates, options) {
			const config = datepicker.config;
			let { clear, render, autohide, revert, forceRefresh, viewDate } = options;
			if (render === undefined) {
				render = true;
			}
			if (!render) {
				autohide = forceRefresh = false;
			} else if (autohide === undefined) {
				autohide = config.autohide;
			}
			viewDate = parseDate(viewDate, config.format, config.locale);

			const newDates = processInputDates(datepicker, inputDates, clear);
			if (!newDates && !revert) {
				return;
			}
			if (newDates && newDates.toString() !== datepicker.dates.toString()) {
				datepicker.dates = newDates;
				refreshUI(datepicker, render ? 3 : 1, true, viewDate);
				triggerDatepickerEvent(datepicker, "changeDate");
			} else {
				refreshUI(datepicker, forceRefresh ? 3 : 1, true, viewDate);
			}

			if (autohide) {
				datepicker.hide();
			}
		}

		function getOutputConverter(datepicker, format) {
			return format
				? (date) => date_format_formatDate(date, format, datepicker.config.locale)
				: (date) => new Date(date);
		}

		/**
		 * Class representing a date picker
		 */
		class Datepicker_Datepicker {
			/**
			 * Create a date picker
			 * @param  {Element} element - element to bind a date picker
			 * @param  {Object} [options] - config options
			 * @param  {DateRangePicker} [rangepicker] - DateRangePicker instance the
			 * date picker belongs to. Use this only when creating date picker as a part
			 * of date range picker
			 */
			constructor(element, options = {}, rangepicker = undefined) {
				element.datepicker = this;
				this.element = element;
				this.dates = [];

				// initialize config
				const config = (this.config = Object.assign(
					{
						buttonClass: (options.buttonClass && String(options.buttonClass)) || "button",
						container: null,
						defaultViewDate: today(),
						maxDate: undefined,
						minDate: undefined,
					},
					processOptions(defaultOptions, this)
				));

				// configure by type
				let inputField;
				if (element.tagName === "INPUT") {
					inputField = this.inputField = element;
					inputField.classList.add("datepicker-input");
					if (options.container) {
						// omit string type check because it doesn't guarantee to avoid errors
						// (invalid selector string causes abend with sytax error)
						config.container =
							options.container instanceof HTMLElement
								? options.container
								: document.querySelector(options.container);
					}
				} else {
					config.container = element;
				}
				if (rangepicker) {
					// check validiry
					const index = rangepicker.inputs.indexOf(inputField);
					const datepickers = rangepicker.datepickers;
					if (index < 0 || index > 1 || !Array.isArray(datepickers)) {
						throw Error("Invalid rangepicker object.");
					}
					// attach itaelf to the rangepicker here so that processInputDates() can
					// determine if this is the range-end picker of the rangepicker while
					// setting inital values when pickLevel > 0
					datepickers[index] = this;
					this.rangepicker = rangepicker;
					this.rangeSideIndex = index;
				}

				// set up config
				this._options = options;
				Object.assign(config, processOptions(options, this));
				config.shortcutKeys = createShortcutKeyConfig(options.shortcutKeys || {});

				// process initial value
				const initialDates = stringToArray(element.value || element.dataset.date, config.dateDelimiter);
				delete element.dataset.date;
				const inputDateValues = processInputDates(this, initialDates);
				if (inputDateValues && inputDateValues.length > 0) {
					this.dates = inputDateValues;
				}
				if (inputField) {
					inputField.value = stringifyDates(this.dates, config);
				}

				// set up picekr element
				const picker = (this.picker = new Picker(this));

				const keydownListener = [element, "keydown", onKeydown.bind(null, this)];
				if (inputField) {
					event_registerListeners(this, [
						keydownListener,
						[inputField, "focus", onFocus.bind(null, this)],
						[inputField, "mousedown", onMousedown.bind(null, this)],
						[inputField, "click", onClickInput.bind(null, this)],
						[inputField, "paste", onPaste.bind(null, this)],
						// To detect a click on outside, just listening to mousedown is enough,
						// no need to listen to touchstart.
						// Actually, listening to touchstart can be a problem because, while
						// mousedown is fired only on tapping but not on swiping/pinching,
						// touchstart is fired on swiping/pinching as well.
						// (issue #95)
						[document, "mousedown", onClickOutside.bind(null, this)],
						[window, "resize", picker.place.bind(picker)],
					]);
				} else {
					event_registerListeners(this, [keydownListener]);
					this.show();
				}
			}

			/**
			 * Format Date object or time value in given format and language
			 * @param  {Date|Number} date - date or time value to format
			 * @param  {String|Object} format - format string or object that contains
			 * toDisplay() custom formatter, whose signature is
			 * - args:
			 *   - date: {Date} - Date instance of the date passed to the method
			 *   - format: {Object} - the format object passed to the method
			 *   - locale: {Object} - locale for the language specified by `lang`
			 * - return:
			 *     {String} formatted date
			 * @param  {String} [lang=en] - language code for the locale to use
			 * @return {String} formatted date
			 */
			static formatDate(date, format, lang) {
				return date_format_formatDate(date, format, (lang && base_locales[lang]) || base_locales.en);
			}

			/**
			 * Parse date string
			 * @param  {String|Date|Number} dateStr - date string, Date object or time
			 * value to parse
			 * @param  {String|Object} format - format string or object that contains
			 * toValue() custom parser, whose signature is
			 * - args:
			 *   - dateStr: {String|Date|Number} - the dateStr passed to the method
			 *   - format: {Object} - the format object passed to the method
			 *   - locale: {Object} - locale for the language specified by `lang`
			 * - return:
			 *     {Date|Number} parsed date or its time value
			 * @param  {String} [lang=en] - language code for the locale to use
			 * @return {Number} time value of parsed date
			 */
			static parseDate(dateStr, format, lang) {
				return parseDate(dateStr, format, (lang && base_locales[lang]) || base_locales.en);
			}

			/**
			 * @type {Object} - Installed locales in `[languageCode]: localeObject` format
			 * en`:_English (US)_ is pre-installed.
			 */
			static get locales() {
				return base_locales;
			}

			/**
			 * @type {Boolean} - Whether the picker element is shown. `true` whne shown
			 */
			get active() {
				return !!(this.picker && this.picker.active);
			}

			/**
			 * @type {HTMLDivElement} - DOM object of picker element
			 */
			get pickerElement() {
				return this.picker ? this.picker.element : undefined;
			}

			/**
			 * Set new values to the config options
			 * @param {Object} options - config options to update
			 */
			setOptions(options) {
				const newOptions = processOptions(options, this);
				Object.assign(this._options, options);
				Object.assign(this.config, newOptions);
				this.picker.setOptions(newOptions);

				refreshUI(this, 3);
			}

			/**
			 * Show the picker element
			 */
			show() {
				if (this.inputField) {
					const { config, inputField } = this;
					if (inputField.disabled || (inputField.readOnly && !config.enableOnReadonly)) {
						return;
					}
					if (!isActiveElement(inputField) && !config.disableTouchKeyboard) {
						this._showing = true;
						inputField.focus();
						delete this._showing;
					}
				}
				this.picker.show();
			}

			/**
			 * Hide the picker element
			 * Not available on inline picker
			 */
			hide() {
				if (!this.inputField) {
					return;
				}
				this.picker.hide();
				this.picker.update().changeView(this.config.startView).render();
			}

			/**
			 * Toggle the display of the picker element
			 * Not available on inline picker
			 *
			 * Unlike hide(), the picker does not return to the start view when hiding.
			 */
			toggle() {
				if (!this.picker.active) {
					this.show();
				} else if (this.inputField) {
					this.picker.hide();
				}
			}

			/**
			 * Destroy the Datepicker instance
			 * @return {Detepicker} - the instance destroyed
			 */
			destroy() {
				this.hide();
				event_unregisterListeners(this);
				this.picker.detach();
				const element = this.element;
				element.classList.remove("datepicker-input");
				delete element.datepicker;
				return this;
			}

			/**
			 * Get the selected date(s)
			 *
			 * The method returns a Date object of selected date by default, and returns
			 * an array of selected dates in multidate mode. If format string is passed,
			 * it returns date string(s) formatted in given format.
			 *
			 * @param  {String} [format] - format string to stringify the date(s)
			 * @return {Date|String|Date[]|String[]} - selected date(s), or if none is
			 * selected, empty array in multidate mode and undefined in sigledate mode
			 */
			getDate(format = undefined) {
				const callback = getOutputConverter(this, format);

				if (this.config.multidate) {
					return this.dates.map(callback);
				}
				if (this.dates.length > 0) {
					return callback(this.dates[0]);
				}
			}

			/**
			 * Set selected date(s)
			 *
			 * In multidate mode, you can pass multiple dates as a series of arguments
			 * or an array. (Since each date is parsed individually, the type of the
			 * dates doesn't have to be the same.)
			 * The given dates are used to toggle the select status of each date. The
			 * number of selected dates is kept from exceeding the length set to
			 * maxNumberOfDates.
			 *
			 * With clear: true option, the method can be used to clear the selection
			 * and to replace the selection instead of toggling in multidate mode.
			 * If the option is passed with no date arguments or an empty dates array,
			 * it works as "clear" (clear the selection then set nothing), and if the
			 * option is passed with new dates to select, it works as "replace" (clear
			 * the selection then set the given dates)
			 *
			 * When render: false option is used, the method omits re-rendering the
			 * picker element. In this case, you need to call refresh() method later in
			 * order for the picker element to reflect the changes. The input field is
			 * refreshed always regardless of this option.
			 *
			 * When invalid (unparsable, repeated, disabled or out-of-range) dates are
			 * passed, the method ignores them and applies only valid ones. In the case
			 * that all the given dates are invalid, which is distinguished from passing
			 * no dates, the method considers it as an error and leaves the selection
			 * untouched. (The input field also remains untouched unless revert: true
			 * option is used.)
			 * Replacing the selection with the same date(s) also causes a similar
			 * situation. In both cases, the method does not refresh the picker element
			 * unless forceRefresh: true option is used.
			 *
			 * If viewDate option is used, the method changes the focused date to the
			 * specified date instead of the last item of the selection.
			 *
			 * @param {...(Date|Number|String)|Array} [dates] - Date strings, Date
			 * objects, time values or mix of those for new selection
			 * @param {Object} [options] - function options
			 * - clear: {boolean} - Whether to clear the existing selection
			 *     defualt: false
			 * - render: {boolean} - Whether to re-render the picker element
			 *     default: true
			 * - autohide: {boolean} - Whether to hide the picker element after re-render
			 *     Ignored when used with render: false
			 *     default: config.autohide
			 * - revert: {boolean} - Whether to refresh the input field when all the
			 *     passed dates are invalid
			 *     default: false
			 * - forceRefresh: {boolean} - Whether to refresh the picker element when
			 *     passed dates don't change the existing selection
			 *     default: false
			 * - viewDate: {Date|Number|String} - Date to be focused after setiing date(s)
			 *     default: The last item of the resulting selection, or defaultViewDate
			 *     config option if none is selected
			 */
			setDate(...args) {
				const dates = [...args];
				const opts = {};
				const lastArg = lastItemOf(args);
				if (lastArg && typeof lastArg === "object" && !Array.isArray(lastArg) && !(lastArg instanceof Date)) {
					Object.assign(opts, dates.pop());
				}

				const inputDates = Array.isArray(dates[0]) ? dates[0] : dates;
				setDate(this, inputDates, opts);
			}

			/**
			 * Update the selected date(s) with input field's value
			 * Not available on inline picker
			 *
			 * The input field will be refreshed with properly formatted date string.
			 *
			 * In the case that all the entered dates are invalid (unparsable, repeated,
			 * disabled or out-of-range), which is distinguished from empty input field,
			 * the method leaves the input field untouched as well as the selection by
			 * default. If revert: true option is used in this case, the input field is
			 * refreshed with the existing selection.
			 * The method also doesn't refresh the picker element in this case and when
			 * the entered dates are the same as the existing selection. If
			 * forceRefresh: true option is used, the picker element is refreshed in
			 * these cases too.
			 *
			 * @param  {Object} [options] - function options
			 * - autohide: {boolean} - whether to hide the picker element after refresh
			 *     default: false
			 * - revert: {boolean} - Whether to refresh the input field when all the
			 *     passed dates are invalid
			 *     default: false
			 * - forceRefresh: {boolean} - Whether to refresh the picer element when
			 *     input field's value doesn't change the existing selection
			 *     default: false
			 */
			update(options = undefined) {
				if (!this.inputField) {
					return;
				}

				const opts = Object.assign(options || {}, { clear: true, render: true, viewDate: undefined });
				const inputDates = stringToArray(this.inputField.value, this.config.dateDelimiter);
				setDate(this, inputDates, opts);
			}

			/**
			 * Get the focused date
			 *
			 * The method returns a Date object of focused date by default. If format
			 * string is passed, it returns date string formatted in given format.
			 *
			 * @param  {String} [format] - format string to stringify the date
			 * @return {Date|String} - focused date (viewDate)
			 */
			getFocusedDate(format = undefined) {
				return getOutputConverter(this, format)(this.picker.viewDate);
			}

			/**
			 * Set focused date
			 *
			 * By default, the method updates the focus on the view shown at the time,
			 * or the one set to the startView config option if the picker is hidden.
			 * When resetView: true is passed, the view displayed is changed to the
			 * pickLevel config option's if the picker is shown.
			 *
			 * @param {Date|Number|String} viewDate - date string, Date object, time
			 * values of the date to focus
			 * @param {Boolean} [resetView] - whether to change the view to pickLevel
			 * config option's when the picker is shown. Ignored when the picker is
			 * hidden
			 */
			setFocusedDate(viewDate, resetView = false) {
				const { config, picker, active, rangeSideIndex } = this;
				const pickLevel = config.pickLevel;
				const newViewDate = parseDate(viewDate, config.format, config.locale);
				if (newViewDate === undefined) {
					return;
				}

				picker.changeFocus(regularizeDate(newViewDate, pickLevel, rangeSideIndex));
				if (active && resetView) {
					picker.changeView(pickLevel);
				}
				picker.render();
			}

			/**
			 * Refresh the picker element and the associated input field
			 * @param {String} [target] - target item when refreshing one item only
			 * 'picker' or 'input'
			 * @param {Boolean} [forceRender] - whether to re-render the picker element
			 * regardless of its state instead of optimized refresh
			 */
			refresh(target = undefined, forceRender = false) {
				if (target && typeof target !== "string") {
					forceRender = target;
					target = undefined;
				}

				let mode;
				if (target === "picker") {
					mode = 2;
				} else if (target === "input") {
					mode = 1;
				} else {
					mode = 3;
				}
				refreshUI(this, mode, !forceRender);
			}

			/**
			 * Enter edit mode
			 * Not available on inline picker or when the picker element is hidden
			 */
			enterEditMode() {
				const inputField = this.inputField;
				if (!inputField || inputField.readOnly || !this.picker.active || this.editMode) {
					return;
				}
				this.editMode = true;
				inputField.classList.add("in-edit");
			}

			/**
			 * Exit from edit mode
			 * Not available on inline picker
			 * @param  {Object} [options] - function options
			 * - update: {boolean} - whether to call update() after exiting
			 *     If false, input field is revert to the existing selection
			 *     default: false
			 */
			exitEditMode(options = undefined) {
				if (!this.inputField || !this.editMode) {
					return;
				}
				const opts = Object.assign({ update: false }, options);
				delete this.editMode;
				this.inputField.classList.remove("in-edit");
				if (opts.update) {
					this.update(opts);
				}
			}
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/DateRangePicker.js

		// filter out the config options inapproprite to pass to Datepicker
		function filterOptions(options) {
			const newOpts = Object.assign({}, options);

			delete newOpts.inputs;
			delete newOpts.allowOneSidedRange;
			delete newOpts.maxNumberOfDates; // to ensure each datepicker handles a single date

			return newOpts;
		}

		function setupDatepicker(rangepicker, changeDateListener, el, options) {
			registerListeners(rangepicker, [[el, "changeDate", changeDateListener]]);
			new Datepicker(el, options, rangepicker);
		}

		function onChangeDate(rangepicker, ev) {
			// to prevent both datepickers trigger the other side's update each other
			if (rangepicker._updating) {
				return;
			}
			rangepicker._updating = true;

			const target = ev.target;
			if (target.datepicker === undefined) {
				return;
			}

			const datepickers = rangepicker.datepickers;
			const [datepicker0, datepicker1] = datepickers;
			const setDateOptions = { render: false };
			const changedSide = rangepicker.inputs.indexOf(target);
			const otherSide = changedSide === 0 ? 1 : 0;
			const changedDate = datepickers[changedSide].dates[0];
			const otherDate = datepickers[otherSide].dates[0];

			if (changedDate !== undefined && otherDate !== undefined) {
				// if the start of the range > the end, swap them
				if (changedSide === 0 && changedDate > otherDate) {
					datepicker0.setDate(otherDate, setDateOptions);
					datepicker1.setDate(changedDate, setDateOptions);
				} else if (changedSide === 1 && changedDate < otherDate) {
					datepicker0.setDate(changedDate, setDateOptions);
					datepicker1.setDate(otherDate, setDateOptions);
				}
			} else if (!rangepicker.allowOneSidedRange) {
				// to prevent the range from becoming one-sided, copy changed side's
				// selection (no matter if it's empty) to the other side
				if (changedDate !== undefined || otherDate !== undefined) {
					setDateOptions.clear = true;
					datepickers[otherSide].setDate(datepickers[changedSide].dates, setDateOptions);
				}
			}
			datepickers.forEach((datepicker) => {
				datepicker.picker.update().render();
			});
			delete rangepicker._updating;
		}

		/**
		 * Class representing a date range picker
		 */
		class DateRangePicker {
			/**
			 * Create a date range picker
			 * @param  {Element} element - element to bind a date range picker
			 * @param  {Object} [options] - config options
			 */
			constructor(element, options = {}) {
				let inputs = Array.isArray(options.inputs)
					? options.inputs
					: Array.from(element.querySelectorAll("input"));
				if (inputs.length < 2) {
					return;
				}

				element.rangepicker = this;
				this.element = element;
				this.inputs = inputs = inputs.slice(0, 2);
				Object.freeze(inputs);
				this.allowOneSidedRange = !!options.allowOneSidedRange;

				const changeDateListener = onChangeDate.bind(null, this);
				const cleanOptions = filterOptions(options);
				// in order for initial date setup to work right when pcicLvel > 0,
				// let Datepicker constructor add the instance to the rangepicker
				const datepickers = (this.datepickers = []);
				inputs.forEach((input) => {
					setupDatepicker(this, changeDateListener, input, cleanOptions);
				});
				Object.freeze(datepickers);
				Object.defineProperty(this, "dates", {
					get() {
						return datepickers.map((datepicker) => datepicker.dates[0]);
					},
				});
				// normalize the range if inital dates are given
				if (datepickers[0].dates.length > 0) {
					onChangeDate(this, { target: inputs[0] });
				} else if (datepickers[1].dates.length > 0) {
					onChangeDate(this, { target: inputs[1] });
				}
			}

			/**
			 * Set new values to the config options
			 * @param {Object} options - config options to update
			 */
			setOptions(options) {
				this.allowOneSidedRange = !!options.allowOneSidedRange;

				const cleanOptions = filterOptions(options);
				this.datepickers.forEach((datepicker) => {
					datepicker.setOptions(cleanOptions);
				});
			}

			/**
			 * Destroy the DateRangePicker instance
			 * @return {DateRangePicker} - the instance destroyed
			 */
			destroy() {
				this.datepickers.forEach((datepicker) => {
					datepicker.destroy();
				});
				unregisterListeners(this);
				delete this.element.rangepicker;
			}

			/**
			 * Get the start and end dates of the date range
			 *
			 * The method returns Date objects by default. If format string is passed,
			 * it returns date strings formatted in given format.
			 * The result array always contains 2 items (start date/end date) and
			 * undefined is used for unselected side. (e.g. If none is selected,
			 * the result will be [undefined, undefined]. If only the end date is set
			 * when allowOneSidedRange config option is true, [undefined, endDate] will
			 * be returned.)
			 *
			 * @param  {String} [format] - Format string to stringify the dates
			 * @return {Array} - Start and end dates
			 */
			getDates(format = undefined) {
				const callback = format
					? (date) => formatDate(date, format, this.datepickers[0].config.locale)
					: (date) => new Date(date);

				return this.dates.map((date) => (date === undefined ? date : callback(date)));
			}

			/**
			 * Set the start and end dates of the date range
			 *
			 * The method calls datepicker.setDate() internally using each of the
			 * arguments in start→end order.
			 *
			 * When a clear: true option object is passed instead of a date, the method
			 * clears the date.
			 *
			 * If an invalid date, the same date as the current one or an option object
			 * without clear: true is passed, the method considers that argument as an
			 * "ineffective" argument because calling datepicker.setDate() with those
			 * values makes no changes to the date selection.
			 *
			 * When the allowOneSidedRange config option is false, passing {clear: true}
			 * to clear the range works only when it is done to the last effective
			 * argument (in other words, passed to rangeEnd or to rangeStart along with
			 * ineffective rangeEnd). This is because when the date range is changed,
			 * it gets normalized based on the last change at the end of the changing
			 * process.
			 *
			 * @param {Date|Number|String|Object} rangeStart - Start date of the range
			 * or {clear: true} to clear the date
			 * @param {Date|Number|String|Object} rangeEnd - End date of the range
			 * or {clear: true} to clear the date
			 */
			setDates(rangeStart, rangeEnd) {
				const {
					datepickers: [datepicker0, datepicker1],
					inputs: [input0, input1],
					dates: [origDate0, origDate1],
				} = this;

				// If range normalization runs on every change, we can't set a new range
				// that starts after the end of the current range correctly because the
				// normalization process swaps start↔︎end right after setting the new start
				// date. To prevent this, the normalization process needs to run once after
				// both of the new dates are set.
				this._updating = true;
				datepicker0.setDate(rangeStart);
				datepicker1.setDate(rangeEnd);
				delete this._updating;

				if (datepicker1.dates[0] !== origDate1) {
					onChangeDate(this, { target: input1 });
				} else if (datepicker0.dates[0] !== origDate0) {
					onChangeDate(this, { target: input0 });
				}
			}
		} // CONCATENATED MODULE: ./node_modules/vanillajs-datepicker/js/main.js // CONCATENATED MODULE: ./src/js/components/date-label.js

		// datepicker global settings
		(function () {
			Datepicker_Datepicker.locales.en = {
				days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
				daysShort: ["Вск", "Пон", "Втр", "Ср", "Чт", "Птн", "Сбт"],
				daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
				months: [
					"Январь",
					"Февраль",
					"Март",
					"Апрель",
					"Май",
					"Июнь",
					"Июль",
					"Август",
					"Сентябрь",
					"Октябрь",
					"Ноябрь",
					"Декабрь",
				],
				monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"],
				today: "Сегодня",
				clear: "Очистить",
				titleFormat: "MM yy",
				format: "dd.mm.yyyy",
				weekStart: 0,
			};
		})();
		const rangepicker = new Datepicker_Datepicker(document.querySelector(".card__input-date"), {
			autohide: true,
			format: "dd.mm.yyyy",
		});
		// EXTERNAL MODULE: ./src/js/components/city-filials.js
		var city_filials = __webpack_require__(1880);
		// EXTERNAL MODULE: ./src/js/components/regions.js
		var regions = __webpack_require__(457);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
		var es_object_to_string = __webpack_require__(1539);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
		var web_dom_collections_for_each = __webpack_require__(4747);
		// EXTERNAL MODULE: ./node_modules/can-use-dom/index.js
		var can_use_dom = __webpack_require__(1807);
		var can_use_dom_default = /*#__PURE__*/ __webpack_require__.n(can_use_dom);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
		var es_parse_int = __webpack_require__(1058);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
		var es_object_assign = __webpack_require__(9601);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
		var es_array_filter = __webpack_require__(7327);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
		var es_array_iterator = __webpack_require__(6992);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
		var es_string_iterator = __webpack_require__(8783);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/es.weak-map.js
		var es_weak_map = __webpack_require__(4129);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
		var web_dom_collections_iterator = __webpack_require__(3948);
		// EXTERNAL MODULE: ./node_modules/lodash.throttle/index.js
		var lodash_throttle = __webpack_require__(3096);
		var lodash_throttle_default = /*#__PURE__*/ __webpack_require__.n(lodash_throttle);
		// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
		var lodash_debounce = __webpack_require__(1296);
		var lodash_debounce_default = /*#__PURE__*/ __webpack_require__.n(lodash_debounce);
		// EXTERNAL MODULE: ./node_modules/lodash.memoize/index.js
		var lodash_memoize = __webpack_require__(773);
		var lodash_memoize_default = /*#__PURE__*/ __webpack_require__.n(lodash_memoize); // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/resizeObservers.js
		var resizeObservers = []; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/hasActiveObservations.js

		var hasActiveObservations = function () {
			return resizeObservers.some(function (ro) {
				return ro.activeTargets.length > 0;
			});
		}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/hasSkippedObservations.js

		var hasSkippedObservations = function () {
			return resizeObservers.some(function (ro) {
				return ro.skippedTargets.length > 0;
			});
		}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/deliverResizeLoopError.js

		var msg = "ResizeObserver loop completed with undelivered notifications.";
		var deliverResizeLoopError = function () {
			var event;
			if (typeof ErrorEvent === "function") {
				event = new ErrorEvent("error", {
					message: msg,
				});
			} else {
				event = document.createEvent("Event");
				event.initEvent("error", false, false);
				event.message = msg;
			}
			window.dispatchEvent(event);
		}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverBoxOptions.js

		var ResizeObserverBoxOptions;
		(function (ResizeObserverBoxOptions) {
			ResizeObserverBoxOptions["BORDER_BOX"] = "border-box";
			ResizeObserverBoxOptions["CONTENT_BOX"] = "content-box";
			ResizeObserverBoxOptions["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
		})(ResizeObserverBoxOptions || (ResizeObserverBoxOptions = {})); // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/freeze.js

		var freeze = function (obj) {
			return Object.freeze(obj);
		}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverSize.js

		var ResizeObserverSize = (function () {
			function ResizeObserverSize(inlineSize, blockSize) {
				this.inlineSize = inlineSize;
				this.blockSize = blockSize;
				freeze(this);
			}
			return ResizeObserverSize;
		})(); // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/DOMRectReadOnly.js

		var DOMRectReadOnly_DOMRectReadOnly = (function () {
			function DOMRectReadOnly(x, y, width, height) {
				this.x = x;
				this.y = y;
				this.width = width;
				this.height = height;
				this.top = this.y;
				this.left = this.x;
				this.bottom = this.top + this.height;
				this.right = this.left + this.width;
				return freeze(this);
			}
			DOMRectReadOnly.prototype.toJSON = function () {
				var _a = this,
					x = _a.x,
					y = _a.y,
					top = _a.top,
					right = _a.right,
					bottom = _a.bottom,
					left = _a.left,
					width = _a.width,
					height = _a.height;
				return { x: x, y: y, top: top, right: right, bottom: bottom, left: left, width: width, height: height };
			};
			DOMRectReadOnly.fromRect = function (rectangle) {
				return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
			};
			return DOMRectReadOnly;
		})(); // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/element.js

		var isSVG = function (target) {
			return target instanceof SVGElement && "getBBox" in target;
		};
		var isHidden = function (target) {
			if (isSVG(target)) {
				var _a = target.getBBox(),
					width = _a.width,
					height = _a.height;
				return !width && !height;
			}
			var _b = target,
				offsetWidth = _b.offsetWidth,
				offsetHeight = _b.offsetHeight;
			return !(offsetWidth || offsetHeight || target.getClientRects().length);
		};
		var isElement = function (obj) {
			var _a;
			if (obj instanceof Element) {
				return true;
			}
			var scope =
				(_a = obj === null || obj === void 0 ? void 0 : obj.ownerDocument) === null || _a === void 0
					? void 0
					: _a.defaultView;
			return !!(scope && obj instanceof scope.Element);
		};
		var isReplacedElement = function (target) {
			switch (target.tagName) {
				case "INPUT":
					if (target.type !== "image") {
						break;
					}
				case "VIDEO":
				case "AUDIO":
				case "EMBED":
				case "OBJECT":
				case "CANVAS":
				case "IFRAME":
				case "IMG":
					return true;
			}
			return false;
		}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/global.js

		var global = typeof window !== "undefined" ? window : {}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/calculateBoxSize.js

		var cache = new WeakMap();
		var scrollRegexp = /auto|scroll/;
		var verticalRegexp = /^tb|vertical/;
		var IE = /msie|trident/i.test(global.navigator && global.navigator.userAgent);
		var parseDimension = function (pixel) {
			return parseFloat(pixel || "0");
		};
		var size = function (inlineSize, blockSize, switchSizes) {
			if (inlineSize === void 0) {
				inlineSize = 0;
			}
			if (blockSize === void 0) {
				blockSize = 0;
			}
			if (switchSizes === void 0) {
				switchSizes = false;
			}
			return new ResizeObserverSize(
				(switchSizes ? blockSize : inlineSize) || 0,
				(switchSizes ? inlineSize : blockSize) || 0
			);
		};
		var zeroBoxes = freeze({
			devicePixelContentBoxSize: size(),
			borderBoxSize: size(),
			contentBoxSize: size(),
			contentRect: new DOMRectReadOnly_DOMRectReadOnly(0, 0, 0, 0),
		});
		var calculateBoxSizes = function (target, forceRecalculation) {
			if (forceRecalculation === void 0) {
				forceRecalculation = false;
			}
			if (cache.has(target) && !forceRecalculation) {
				return cache.get(target);
			}
			if (isHidden(target)) {
				cache.set(target, zeroBoxes);
				return zeroBoxes;
			}
			var cs = getComputedStyle(target);
			var svg = isSVG(target) && target.ownerSVGElement && target.getBBox();
			var removePadding = !IE && cs.boxSizing === "border-box";
			var switchSizes = verticalRegexp.test(cs.writingMode || "");
			var canScrollVertically = !svg && scrollRegexp.test(cs.overflowY || "");
			var canScrollHorizontally = !svg && scrollRegexp.test(cs.overflowX || "");
			var paddingTop = svg ? 0 : parseDimension(cs.paddingTop);
			var paddingRight = svg ? 0 : parseDimension(cs.paddingRight);
			var paddingBottom = svg ? 0 : parseDimension(cs.paddingBottom);
			var paddingLeft = svg ? 0 : parseDimension(cs.paddingLeft);
			var borderTop = svg ? 0 : parseDimension(cs.borderTopWidth);
			var borderRight = svg ? 0 : parseDimension(cs.borderRightWidth);
			var borderBottom = svg ? 0 : parseDimension(cs.borderBottomWidth);
			var borderLeft = svg ? 0 : parseDimension(cs.borderLeftWidth);
			var horizontalPadding = paddingLeft + paddingRight;
			var verticalPadding = paddingTop + paddingBottom;
			var horizontalBorderArea = borderLeft + borderRight;
			var verticalBorderArea = borderTop + borderBottom;
			var horizontalScrollbarThickness = !canScrollHorizontally
				? 0
				: target.offsetHeight - verticalBorderArea - target.clientHeight;
			var verticalScrollbarThickness = !canScrollVertically
				? 0
				: target.offsetWidth - horizontalBorderArea - target.clientWidth;
			var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
			var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
			var contentWidth = svg ? svg.width : parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
			var contentHeight = svg
				? svg.height
				: parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
			var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
			var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
			var boxes = freeze({
				devicePixelContentBoxSize: size(
					Math.round(contentWidth * devicePixelRatio),
					Math.round(contentHeight * devicePixelRatio),
					switchSizes
				),
				borderBoxSize: size(borderBoxWidth, borderBoxHeight, switchSizes),
				contentBoxSize: size(contentWidth, contentHeight, switchSizes),
				contentRect: new DOMRectReadOnly_DOMRectReadOnly(paddingLeft, paddingTop, contentWidth, contentHeight),
			});
			cache.set(target, boxes);
			return boxes;
		};
		var calculateBoxSize = function (target, observedBox, forceRecalculation) {
			var _a = calculateBoxSizes(target, forceRecalculation),
				borderBoxSize = _a.borderBoxSize,
				contentBoxSize = _a.contentBoxSize,
				devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
			switch (observedBox) {
				case ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
					return devicePixelContentBoxSize;
				case ResizeObserverBoxOptions.BORDER_BOX:
					return borderBoxSize;
				default:
					return contentBoxSize;
			}
		}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverEntry.js

		var ResizeObserverEntry = (function () {
			function ResizeObserverEntry(target) {
				var boxes = calculateBoxSizes(target);
				this.target = target;
				this.contentRect = boxes.contentRect;
				this.borderBoxSize = freeze([boxes.borderBoxSize]);
				this.contentBoxSize = freeze([boxes.contentBoxSize]);
				this.devicePixelContentBoxSize = freeze([boxes.devicePixelContentBoxSize]);
			}
			return ResizeObserverEntry;
		})(); // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/calculateDepthForNode.js

		var calculateDepthForNode = function (node) {
			if (isHidden(node)) {
				return Infinity;
			}
			var depth = 0;
			var parent = node.parentNode;
			while (parent) {
				depth += 1;
				parent = parent.parentNode;
			}
			return depth;
		}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/broadcastActiveObservations.js

		var broadcastActiveObservations = function () {
			var shallowestDepth = Infinity;
			var callbacks = [];
			resizeObservers.forEach(function processObserver(ro) {
				if (ro.activeTargets.length === 0) {
					return;
				}
				var entries = [];
				ro.activeTargets.forEach(function processTarget(ot) {
					var entry = new ResizeObserverEntry(ot.target);
					var targetDepth = calculateDepthForNode(ot.target);
					entries.push(entry);
					ot.lastReportedSize = calculateBoxSize(ot.target, ot.observedBox);
					if (targetDepth < shallowestDepth) {
						shallowestDepth = targetDepth;
					}
				});
				callbacks.push(function resizeObserverCallback() {
					ro.callback.call(ro.observer, entries, ro.observer);
				});
				ro.activeTargets.splice(0, ro.activeTargets.length);
			});
			for (var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++) {
				var callback = callbacks_1[_i];
				callback();
			}
			return shallowestDepth;
		}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/algorithms/gatherActiveObservationsAtDepth.js

		var gatherActiveObservationsAtDepth = function (depth) {
			resizeObservers.forEach(function processObserver(ro) {
				ro.activeTargets.splice(0, ro.activeTargets.length);
				ro.skippedTargets.splice(0, ro.skippedTargets.length);
				ro.observationTargets.forEach(function processTarget(ot) {
					if (ot.isActive()) {
						if (calculateDepthForNode(ot.target) > depth) {
							ro.activeTargets.push(ot);
						} else {
							ro.skippedTargets.push(ot);
						}
					}
				});
			});
		}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/process.js

		var process = function () {
			var depth = 0;
			gatherActiveObservationsAtDepth(depth);
			while (hasActiveObservations()) {
				depth = broadcastActiveObservations();
				gatherActiveObservationsAtDepth(depth);
			}
			if (hasSkippedObservations()) {
				deliverResizeLoopError();
			}
			return depth > 0;
		}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/queueMicroTask.js

		var trigger;
		var callbacks = [];
		var notify = function () {
			return callbacks.splice(0).forEach(function (cb) {
				return cb();
			});
		};
		var queueMicroTask = function (callback) {
			if (!trigger) {
				var toggle_1 = 0;
				var el_1 = document.createTextNode("");
				var config = { characterData: true };
				new MutationObserver(function () {
					return notify();
				}).observe(el_1, config);
				trigger = function () {
					el_1.textContent = "".concat(toggle_1 ? toggle_1-- : toggle_1++);
				};
			}
			callbacks.push(callback);
			trigger();
		}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/queueResizeObserver.js

		var queueResizeObserver = function (cb) {
			queueMicroTask(function ResizeObserver() {
				requestAnimationFrame(cb);
			});
		}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/utils/scheduler.js

		var watching = 0;
		var isWatching = function () {
			return !!watching;
		};
		var CATCH_PERIOD = 250;
		var observerConfig = { attributes: true, characterData: true, childList: true, subtree: true };
		var events = [
			"resize",
			"load",
			"transitionend",
			"animationend",
			"animationstart",
			"animationiteration",
			"keyup",
			"keydown",
			"mouseup",
			"mousedown",
			"mouseover",
			"mouseout",
			"blur",
			"focus",
		];
		var time = function (timeout) {
			if (timeout === void 0) {
				timeout = 0;
			}
			return Date.now() + timeout;
		};
		var scheduled = false;
		var Scheduler = (function () {
			function Scheduler() {
				var _this = this;
				this.stopped = true;
				this.listener = function () {
					return _this.schedule();
				};
			}
			Scheduler.prototype.run = function (timeout) {
				var _this = this;
				if (timeout === void 0) {
					timeout = CATCH_PERIOD;
				}
				if (scheduled) {
					return;
				}
				scheduled = true;
				var until = time(timeout);
				queueResizeObserver(function () {
					var elementsHaveResized = false;
					try {
						elementsHaveResized = process();
					} finally {
						scheduled = false;
						timeout = until - time();
						if (!isWatching()) {
							return;
						}
						if (elementsHaveResized) {
							_this.run(1000);
						} else if (timeout > 0) {
							_this.run(timeout);
						} else {
							_this.start();
						}
					}
				});
			};
			Scheduler.prototype.schedule = function () {
				this.stop();
				this.run();
			};
			Scheduler.prototype.observe = function () {
				var _this = this;
				var cb = function () {
					return _this.observer && _this.observer.observe(document.body, observerConfig);
				};
				document.body ? cb() : global.addEventListener("DOMContentLoaded", cb);
			};
			Scheduler.prototype.start = function () {
				var _this = this;
				if (this.stopped) {
					this.stopped = false;
					this.observer = new MutationObserver(this.listener);
					this.observe();
					events.forEach(function (name) {
						return global.addEventListener(name, _this.listener, true);
					});
				}
			};
			Scheduler.prototype.stop = function () {
				var _this = this;
				if (!this.stopped) {
					this.observer && this.observer.disconnect();
					events.forEach(function (name) {
						return global.removeEventListener(name, _this.listener, true);
					});
					this.stopped = true;
				}
			};
			return Scheduler;
		})();
		var scheduler = new Scheduler();
		var updateCount = function (n) {
			!watching && n > 0 && scheduler.start();
			watching += n;
			!watching && scheduler.stop();
		}; // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObservation.js

		var skipNotifyOnElement = function (target) {
			return !isSVG(target) && !isReplacedElement(target) && getComputedStyle(target).display === "inline";
		};
		var ResizeObservation = (function () {
			function ResizeObservation(target, observedBox) {
				this.target = target;
				this.observedBox = observedBox || ResizeObserverBoxOptions.CONTENT_BOX;
				this.lastReportedSize = {
					inlineSize: 0,
					blockSize: 0,
				};
			}
			ResizeObservation.prototype.isActive = function () {
				var size = calculateBoxSize(this.target, this.observedBox, true);
				if (skipNotifyOnElement(this.target)) {
					this.lastReportedSize = size;
				}
				if (
					this.lastReportedSize.inlineSize !== size.inlineSize ||
					this.lastReportedSize.blockSize !== size.blockSize
				) {
					return true;
				}
				return false;
			};
			return ResizeObservation;
		})(); // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverDetail.js

		var ResizeObserverDetail = (function () {
			function ResizeObserverDetail(resizeObserver, callback) {
				this.activeTargets = [];
				this.skippedTargets = [];
				this.observationTargets = [];
				this.observer = resizeObserver;
				this.callback = callback;
			}
			return ResizeObserverDetail;
		})(); // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserverController.js

		var observerMap = new WeakMap();
		var getObservationIndex = function (observationTargets, target) {
			for (var i = 0; i < observationTargets.length; i += 1) {
				if (observationTargets[i].target === target) {
					return i;
				}
			}
			return -1;
		};
		var ResizeObserverController = (function () {
			function ResizeObserverController() {}
			ResizeObserverController.connect = function (resizeObserver, callback) {
				var detail = new ResizeObserverDetail(resizeObserver, callback);
				observerMap.set(resizeObserver, detail);
			};
			ResizeObserverController.observe = function (resizeObserver, target, options) {
				var detail = observerMap.get(resizeObserver);
				var firstObservation = detail.observationTargets.length === 0;
				if (getObservationIndex(detail.observationTargets, target) < 0) {
					firstObservation && resizeObservers.push(detail);
					detail.observationTargets.push(new ResizeObservation(target, options && options.box));
					updateCount(1);
					scheduler.schedule();
				}
			};
			ResizeObserverController.unobserve = function (resizeObserver, target) {
				var detail = observerMap.get(resizeObserver);
				var index = getObservationIndex(detail.observationTargets, target);
				var lastObservation = detail.observationTargets.length === 1;
				if (index >= 0) {
					lastObservation && resizeObservers.splice(resizeObservers.indexOf(detail), 1);
					detail.observationTargets.splice(index, 1);
					updateCount(-1);
				}
			};
			ResizeObserverController.disconnect = function (resizeObserver) {
				var _this = this;
				var detail = observerMap.get(resizeObserver);
				detail.observationTargets.slice().forEach(function (ot) {
					return _this.unobserve(resizeObserver, ot.target);
				});
				detail.activeTargets.splice(0, detail.activeTargets.length);
			};
			return ResizeObserverController;
		})(); // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/ResizeObserver.js

		var ResizeObserver = (function () {
			function ResizeObserver(callback) {
				if (arguments.length === 0) {
					throw new TypeError(
						"Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
					);
				}
				if (typeof callback !== "function") {
					throw new TypeError(
						"Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
					);
				}
				ResizeObserverController.connect(this, callback);
			}
			ResizeObserver.prototype.observe = function (target, options) {
				if (arguments.length === 0) {
					throw new TypeError(
						"Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
					);
				}
				if (!isElement(target)) {
					throw new TypeError(
						"Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
					);
				}
				ResizeObserverController.observe(this, target, options);
			};
			ResizeObserver.prototype.unobserve = function (target) {
				if (arguments.length === 0) {
					throw new TypeError(
						"Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
					);
				}
				if (!isElement(target)) {
					throw new TypeError(
						"Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
					);
				}
				ResizeObserverController.unobserve(this, target);
			};
			ResizeObserver.prototype.disconnect = function () {
				ResizeObserverController.disconnect(this);
			};
			ResizeObserver.toString = function () {
				return "function ResizeObserver () { [polyfill code] }";
			};
			return ResizeObserver;
		})(); // CONCATENATED MODULE: ./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js

		// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
		var es_array_reduce = __webpack_require__(5827);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
		var es_regexp_exec = __webpack_require__(4916);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.match.js
		var es_string_match = __webpack_require__(4723);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
		var es_function_name = __webpack_require__(8309);
		// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
		var es_string_replace = __webpack_require__(5306); // CONCATENATED MODULE: ./node_modules/simplebar/dist/simplebar.esm.js
		/**
		 * SimpleBar.js - v5.3.9
		 * Scrollbars, simpler.
		 * https://grsmto.github.io/simplebar/
		 *
		 * Made by Adrien Denat from a fork by Jonathan Nicol
		 * Under MIT License
		 */

		// Helper function to retrieve options from element attributes
		var getOptions = function getOptions(obj) {
			var options = Array.prototype.reduce.call(
				obj,
				function (acc, attribute) {
					var option = attribute.name.match(/data-simplebar-(.+)/);

					if (option) {
						var key = option[1].replace(/\W+(.)/g, function (x, chr) {
							return chr.toUpperCase();
						});

						switch (attribute.value) {
							case "true":
								acc[key] = true;
								break;

							case "false":
								acc[key] = false;
								break;

							case undefined:
								acc[key] = true;
								break;

							default:
								acc[key] = attribute.value;
						}
					}

					return acc;
				},
				{}
			);
			return options;
		};
		function getElementWindow(element) {
			if (!element || !element.ownerDocument || !element.ownerDocument.defaultView) {
				return window;
			}

			return element.ownerDocument.defaultView;
		}
		function getElementDocument(element) {
			if (!element || !element.ownerDocument) {
				return document;
			}

			return element.ownerDocument;
		}

		var cachedScrollbarWidth = null;
		var cachedDevicePixelRatio = null;

		if (can_use_dom_default()) {
			window.addEventListener("resize", function () {
				if (cachedDevicePixelRatio !== window.devicePixelRatio) {
					cachedDevicePixelRatio = window.devicePixelRatio;
					cachedScrollbarWidth = null;
				}
			});
		}

		function scrollbarWidth(el) {
			if (cachedScrollbarWidth === null) {
				var document = getElementDocument(el);

				if (typeof document === "undefined") {
					cachedScrollbarWidth = 0;
					return cachedScrollbarWidth;
				}

				var body = document.body;
				var box = document.createElement("div");
				box.classList.add("simplebar-hide-scrollbar");
				body.appendChild(box);
				var width = box.getBoundingClientRect().right;
				body.removeChild(box);
				cachedScrollbarWidth = width;
			}

			return cachedScrollbarWidth;
		}

		var SimpleBar = /*#__PURE__*/ (function () {
			function SimpleBar(element, options) {
				var _this = this;

				this.onScroll = function () {
					var elWindow = getElementWindow(_this.el);

					if (!_this.scrollXTicking) {
						elWindow.requestAnimationFrame(_this.scrollX);
						_this.scrollXTicking = true;
					}

					if (!_this.scrollYTicking) {
						elWindow.requestAnimationFrame(_this.scrollY);
						_this.scrollYTicking = true;
					}
				};

				this.scrollX = function () {
					if (_this.axis.x.isOverflowing) {
						_this.showScrollbar("x");

						_this.positionScrollbar("x");
					}

					_this.scrollXTicking = false;
				};

				this.scrollY = function () {
					if (_this.axis.y.isOverflowing) {
						_this.showScrollbar("y");

						_this.positionScrollbar("y");
					}

					_this.scrollYTicking = false;
				};

				this.onMouseEnter = function () {
					_this.showScrollbar("x");

					_this.showScrollbar("y");
				};

				this.onMouseMove = function (e) {
					_this.mouseX = e.clientX;
					_this.mouseY = e.clientY;

					if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
						_this.onMouseMoveForAxis("x");
					}

					if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
						_this.onMouseMoveForAxis("y");
					}
				};

				this.onMouseLeave = function () {
					_this.onMouseMove.cancel();

					if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
						_this.onMouseLeaveForAxis("x");
					}

					if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
						_this.onMouseLeaveForAxis("y");
					}

					_this.mouseX = -1;
					_this.mouseY = -1;
				};

				this.onWindowResize = function () {
					// Recalculate scrollbarWidth in case it's a zoom
					_this.scrollbarWidth = _this.getScrollbarWidth();

					_this.hideNativeScrollbar();
				};

				this.hideScrollbars = function () {
					_this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
					_this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

					if (!_this.isWithinBounds(_this.axis.y.track.rect)) {
						_this.axis.y.scrollbar.el.classList.remove(_this.classNames.visible);

						_this.axis.y.isVisible = false;
					}

					if (!_this.isWithinBounds(_this.axis.x.track.rect)) {
						_this.axis.x.scrollbar.el.classList.remove(_this.classNames.visible);

						_this.axis.x.isVisible = false;
					}
				};

				this.onPointerEvent = function (e) {
					var isWithinTrackXBounds, isWithinTrackYBounds;
					_this.axis.x.track.rect = _this.axis.x.track.el.getBoundingClientRect();
					_this.axis.y.track.rect = _this.axis.y.track.el.getBoundingClientRect();

					if (_this.axis.x.isOverflowing || _this.axis.x.forceVisible) {
						isWithinTrackXBounds = _this.isWithinBounds(_this.axis.x.track.rect);
					}

					if (_this.axis.y.isOverflowing || _this.axis.y.forceVisible) {
						isWithinTrackYBounds = _this.isWithinBounds(_this.axis.y.track.rect);
					} // If any pointer event is called on the scrollbar

					if (isWithinTrackXBounds || isWithinTrackYBounds) {
						// Preventing the event's default action stops text being
						// selectable during the drag.
						e.preventDefault(); // Prevent event leaking

						e.stopPropagation();

						if (e.type === "mousedown") {
							if (isWithinTrackXBounds) {
								_this.axis.x.scrollbar.rect = _this.axis.x.scrollbar.el.getBoundingClientRect();

								if (_this.isWithinBounds(_this.axis.x.scrollbar.rect)) {
									_this.onDragStart(e, "x");
								} else {
									_this.onTrackClick(e, "x");
								}
							}

							if (isWithinTrackYBounds) {
								_this.axis.y.scrollbar.rect = _this.axis.y.scrollbar.el.getBoundingClientRect();

								if (_this.isWithinBounds(_this.axis.y.scrollbar.rect)) {
									_this.onDragStart(e, "y");
								} else {
									_this.onTrackClick(e, "y");
								}
							}
						}
					}
				};

				this.drag = function (e) {
					var eventOffset;
					var track = _this.axis[_this.draggedAxis].track;
					var trackSize = track.rect[_this.axis[_this.draggedAxis].sizeAttr];
					var scrollbar = _this.axis[_this.draggedAxis].scrollbar;
					var contentSize = _this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollSizeAttr];
					var hostSize = parseInt(_this.elStyles[_this.axis[_this.draggedAxis].sizeAttr], 10);
					e.preventDefault();
					e.stopPropagation();

					if (_this.draggedAxis === "y") {
						eventOffset = e.pageY;
					} else {
						eventOffset = e.pageX;
					} // Calculate how far the user's mouse is from the top/left of the scrollbar (minus the dragOffset).

					var dragPos =
						eventOffset -
						track.rect[_this.axis[_this.draggedAxis].offsetAttr] -
						_this.axis[_this.draggedAxis].dragOffset; // Convert the mouse position into a percentage of the scrollbar height/width.

					var dragPerc = dragPos / (trackSize - scrollbar.size); // Scroll the content by the same percentage.

					var scrollPos = dragPerc * (contentSize - hostSize); // Fix browsers inconsistency on RTL

					if (_this.draggedAxis === "x") {
						scrollPos =
							_this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted
								? scrollPos - (trackSize + scrollbar.size)
								: scrollPos;
						scrollPos =
							_this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted ? -scrollPos : scrollPos;
					}

					_this.contentWrapperEl[_this.axis[_this.draggedAxis].scrollOffsetAttr] = scrollPos;
				};

				this.onEndDrag = function (e) {
					var elDocument = getElementDocument(_this.el);
					var elWindow = getElementWindow(_this.el);
					e.preventDefault();
					e.stopPropagation();

					_this.el.classList.remove(_this.classNames.dragging);

					elDocument.removeEventListener("mousemove", _this.drag, true);
					elDocument.removeEventListener("mouseup", _this.onEndDrag, true);
					_this.removePreventClickId = elWindow.setTimeout(function () {
						// Remove these asynchronously so we still suppress click events
						// generated simultaneously with mouseup.
						elDocument.removeEventListener("click", _this.preventClick, true);
						elDocument.removeEventListener("dblclick", _this.preventClick, true);
						_this.removePreventClickId = null;
					});
				};

				this.preventClick = function (e) {
					e.preventDefault();
					e.stopPropagation();
				};

				this.el = element;
				this.minScrollbarWidth = 20;
				this.options = Object.assign({}, SimpleBar.defaultOptions, options);
				this.classNames = Object.assign({}, SimpleBar.defaultOptions.classNames, this.options.classNames);
				this.axis = {
					x: {
						scrollOffsetAttr: "scrollLeft",
						sizeAttr: "width",
						scrollSizeAttr: "scrollWidth",
						offsetSizeAttr: "offsetWidth",
						offsetAttr: "left",
						overflowAttr: "overflowX",
						dragOffset: 0,
						isOverflowing: true,
						isVisible: false,
						forceVisible: false,
						track: {},
						scrollbar: {},
					},
					y: {
						scrollOffsetAttr: "scrollTop",
						sizeAttr: "height",
						scrollSizeAttr: "scrollHeight",
						offsetSizeAttr: "offsetHeight",
						offsetAttr: "top",
						overflowAttr: "overflowY",
						dragOffset: 0,
						isOverflowing: true,
						isVisible: false,
						forceVisible: false,
						track: {},
						scrollbar: {},
					},
				};
				this.removePreventClickId = null; // Don't re-instantiate over an existing one

				if (SimpleBar.instances.has(this.el)) {
					return;
				}

				this.recalculate = lodash_throttle_default()(this.recalculate.bind(this), 64);
				this.onMouseMove = lodash_throttle_default()(this.onMouseMove.bind(this), 64);
				this.hideScrollbars = lodash_debounce_default()(this.hideScrollbars.bind(this), this.options.timeout);
				this.onWindowResize = lodash_debounce_default()(this.onWindowResize.bind(this), 64, {
					leading: true,
				});
				SimpleBar.getRtlHelpers = lodash_memoize_default()(SimpleBar.getRtlHelpers);
				this.init();
			}
			/**
			 * Static properties
			 */

			/**
			 * Helper to fix browsers inconsistency on RTL:
			 *  - Firefox inverts the scrollbar initial position
			 *  - IE11 inverts both scrollbar position and scrolling offset
			 * Directly inspired by @KingSora's OverlayScrollbars https://github.com/KingSora/OverlayScrollbars/blob/master/js/OverlayScrollbars.js#L1634
			 */

			SimpleBar.getRtlHelpers = function getRtlHelpers() {
				var dummyDiv = document.createElement("div");
				dummyDiv.innerHTML =
					'<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
				var scrollbarDummyEl = dummyDiv.firstElementChild;
				document.body.appendChild(scrollbarDummyEl);
				var dummyContainerChild = scrollbarDummyEl.firstElementChild;
				scrollbarDummyEl.scrollLeft = 0;
				var dummyContainerOffset = SimpleBar.getOffset(scrollbarDummyEl);
				var dummyContainerChildOffset = SimpleBar.getOffset(dummyContainerChild);
				scrollbarDummyEl.scrollLeft = 999;
				var dummyContainerScrollOffsetAfterScroll = SimpleBar.getOffset(dummyContainerChild);
				return {
					// determines if the scrolling is responding with negative values
					isRtlScrollingInverted:
						dummyContainerOffset.left !== dummyContainerChildOffset.left &&
						dummyContainerChildOffset.left - dummyContainerScrollOffsetAfterScroll.left !== 0,
					// determines if the origin scrollbar position is inverted or not (positioned on left or right)
					isRtlScrollbarInverted: dummyContainerOffset.left !== dummyContainerChildOffset.left,
				};
			};

			SimpleBar.getOffset = function getOffset(el) {
				var rect = el.getBoundingClientRect();
				var elDocument = getElementDocument(el);
				var elWindow = getElementWindow(el);
				return {
					top: rect.top + (elWindow.pageYOffset || elDocument.documentElement.scrollTop),
					left: rect.left + (elWindow.pageXOffset || elDocument.documentElement.scrollLeft),
				};
			};

			var _proto = SimpleBar.prototype;

			_proto.init = function init() {
				// Save a reference to the instance, so we know this DOM node has already been instancied
				SimpleBar.instances.set(this.el, this); // We stop here on server-side

				if (can_use_dom_default()) {
					this.initDOM();
					this.setAccessibilityAttributes();
					this.scrollbarWidth = this.getScrollbarWidth();
					this.recalculate();
					this.initListeners();
				}
			};

			_proto.initDOM = function initDOM() {
				var _this2 = this;

				// make sure this element doesn't have the elements yet
				if (
					Array.prototype.filter.call(this.el.children, function (child) {
						return child.classList.contains(_this2.classNames.wrapper);
					}).length
				) {
					// assume that element has his DOM already initiated
					this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper);
					this.contentWrapperEl =
						this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper);
					this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl);
					this.offsetEl = this.el.querySelector("." + this.classNames.offset);
					this.maskEl = this.el.querySelector("." + this.classNames.mask);
					this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder);
					this.heightAutoObserverWrapperEl = this.el.querySelector(
						"." + this.classNames.heightAutoObserverWrapperEl
					);
					this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl);
					this.axis.x.track.el = this.findChild(
						this.el,
						"." + this.classNames.track + "." + this.classNames.horizontal
					);
					this.axis.y.track.el = this.findChild(
						this.el,
						"." + this.classNames.track + "." + this.classNames.vertical
					);
				} else {
					// Prepare DOM
					this.wrapperEl = document.createElement("div");
					this.contentWrapperEl = document.createElement("div");
					this.offsetEl = document.createElement("div");
					this.maskEl = document.createElement("div");
					this.contentEl = document.createElement("div");
					this.placeholderEl = document.createElement("div");
					this.heightAutoObserverWrapperEl = document.createElement("div");
					this.heightAutoObserverEl = document.createElement("div");
					this.wrapperEl.classList.add(this.classNames.wrapper);
					this.contentWrapperEl.classList.add(this.classNames.contentWrapper);
					this.offsetEl.classList.add(this.classNames.offset);
					this.maskEl.classList.add(this.classNames.mask);
					this.contentEl.classList.add(this.classNames.contentEl);
					this.placeholderEl.classList.add(this.classNames.placeholder);
					this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl);
					this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);

					while (this.el.firstChild) {
						this.contentEl.appendChild(this.el.firstChild);
					}

					this.contentWrapperEl.appendChild(this.contentEl);
					this.offsetEl.appendChild(this.contentWrapperEl);
					this.maskEl.appendChild(this.offsetEl);
					this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl);
					this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl);
					this.wrapperEl.appendChild(this.maskEl);
					this.wrapperEl.appendChild(this.placeholderEl);
					this.el.appendChild(this.wrapperEl);
				}

				if (!this.axis.x.track.el || !this.axis.y.track.el) {
					var track = document.createElement("div");
					var scrollbar = document.createElement("div");
					track.classList.add(this.classNames.track);
					scrollbar.classList.add(this.classNames.scrollbar);
					track.appendChild(scrollbar);
					this.axis.x.track.el = track.cloneNode(true);
					this.axis.x.track.el.classList.add(this.classNames.horizontal);
					this.axis.y.track.el = track.cloneNode(true);
					this.axis.y.track.el.classList.add(this.classNames.vertical);
					this.el.appendChild(this.axis.x.track.el);
					this.el.appendChild(this.axis.y.track.el);
				}

				this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar);
				this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar);

				if (!this.options.autoHide) {
					this.axis.x.scrollbar.el.classList.add(this.classNames.visible);
					this.axis.y.scrollbar.el.classList.add(this.classNames.visible);
				}

				this.el.setAttribute("data-simplebar", "init");
			};

			_proto.setAccessibilityAttributes = function setAccessibilityAttributes() {
				var ariaLabel = this.options.ariaLabel || "scrollable content";
				this.contentWrapperEl.setAttribute("tabindex", "0");
				this.contentWrapperEl.setAttribute("role", "region");
				this.contentWrapperEl.setAttribute("aria-label", ariaLabel);
			};

			_proto.initListeners = function initListeners() {
				var _this3 = this;

				var elWindow = getElementWindow(this.el); // Event listeners

				if (this.options.autoHide) {
					this.el.addEventListener("mouseenter", this.onMouseEnter);
				}

				["mousedown", "click", "dblclick"].forEach(function (e) {
					_this3.el.addEventListener(e, _this3.onPointerEvent, true);
				});
				["touchstart", "touchend", "touchmove"].forEach(function (e) {
					_this3.el.addEventListener(e, _this3.onPointerEvent, {
						capture: true,
						passive: true,
					});
				});
				this.el.addEventListener("mousemove", this.onMouseMove);
				this.el.addEventListener("mouseleave", this.onMouseLeave);
				this.contentWrapperEl.addEventListener("scroll", this.onScroll); // Browser zoom triggers a window resize

				elWindow.addEventListener("resize", this.onWindowResize); // Hack for https://github.com/WICG/ResizeObserver/issues/38

				var resizeObserverStarted = false;
				var resizeAnimationFrameId = null;
				var resizeObserver = elWindow.ResizeObserver || ResizeObserver;
				this.resizeObserver = new resizeObserver(function () {
					if (!resizeObserverStarted || resizeAnimationFrameId !== null) return;
					resizeAnimationFrameId = elWindow.requestAnimationFrame(function () {
						_this3.recalculate();

						resizeAnimationFrameId = null;
					});
				});
				this.resizeObserver.observe(this.el);
				this.resizeObserver.observe(this.contentEl);
				elWindow.requestAnimationFrame(function () {
					resizeObserverStarted = true;
				}); // This is required to detect horizontal scroll. Vertical scroll only needs the resizeObserver.

				this.mutationObserver = new elWindow.MutationObserver(this.recalculate);
				this.mutationObserver.observe(this.contentEl, {
					childList: true,
					subtree: true,
					characterData: true,
				});
			};

			_proto.recalculate = function recalculate() {
				var elWindow = getElementWindow(this.el);
				this.elStyles = elWindow.getComputedStyle(this.el);
				this.isRtl = this.elStyles.direction === "rtl";
				var isHeightAuto = this.heightAutoObserverEl.offsetHeight <= 1;
				var isWidthAuto = this.heightAutoObserverEl.offsetWidth <= 1;
				var contentElOffsetWidth = this.contentEl.offsetWidth;
				var contentWrapperElOffsetWidth = this.contentWrapperEl.offsetWidth;
				var elOverflowX = this.elStyles.overflowX;
				var elOverflowY = this.elStyles.overflowY;
				this.contentEl.style.padding =
					this.elStyles.paddingTop +
					" " +
					this.elStyles.paddingRight +
					" " +
					this.elStyles.paddingBottom +
					" " +
					this.elStyles.paddingLeft;
				this.wrapperEl.style.margin =
					"-" +
					this.elStyles.paddingTop +
					" -" +
					this.elStyles.paddingRight +
					" -" +
					this.elStyles.paddingBottom +
					" -" +
					this.elStyles.paddingLeft;
				var contentElScrollHeight = this.contentEl.scrollHeight;
				var contentElScrollWidth = this.contentEl.scrollWidth;
				this.contentWrapperEl.style.height = isHeightAuto ? "auto" : "100%"; // Determine placeholder size

				this.placeholderEl.style.width = isWidthAuto ? contentElOffsetWidth + "px" : "auto";
				this.placeholderEl.style.height = contentElScrollHeight + "px";
				var contentWrapperElOffsetHeight = this.contentWrapperEl.offsetHeight;
				this.axis.x.isOverflowing = contentElScrollWidth > contentElOffsetWidth;
				this.axis.y.isOverflowing = contentElScrollHeight > contentWrapperElOffsetHeight; // Set isOverflowing to false if user explicitely set hidden overflow

				this.axis.x.isOverflowing = elOverflowX === "hidden" ? false : this.axis.x.isOverflowing;
				this.axis.y.isOverflowing = elOverflowY === "hidden" ? false : this.axis.y.isOverflowing;
				this.axis.x.forceVisible = this.options.forceVisible === "x" || this.options.forceVisible === true;
				this.axis.y.forceVisible = this.options.forceVisible === "y" || this.options.forceVisible === true;
				this.hideNativeScrollbar(); // Set isOverflowing to false if scrollbar is not necessary (content is shorter than offset)

				var offsetForXScrollbar = this.axis.x.isOverflowing ? this.scrollbarWidth : 0;
				var offsetForYScrollbar = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
				this.axis.x.isOverflowing =
					this.axis.x.isOverflowing &&
					contentElScrollWidth > contentWrapperElOffsetWidth - offsetForYScrollbar;
				this.axis.y.isOverflowing =
					this.axis.y.isOverflowing &&
					contentElScrollHeight > contentWrapperElOffsetHeight - offsetForXScrollbar;
				this.axis.x.scrollbar.size = this.getScrollbarSize("x");
				this.axis.y.scrollbar.size = this.getScrollbarSize("y");
				this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px";
				this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px";
				this.positionScrollbar("x");
				this.positionScrollbar("y");
				this.toggleTrackVisibility("x");
				this.toggleTrackVisibility("y");
			};
			/**
			 * Calculate scrollbar size
			 */

			_proto.getScrollbarSize = function getScrollbarSize(axis) {
				if (axis === void 0) {
					axis = "y";
				}

				if (!this.axis[axis].isOverflowing) {
					return 0;
				}

				var contentSize = this.contentEl[this.axis[axis].scrollSizeAttr];
				var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
				var scrollbarSize;
				var scrollbarRatio = trackSize / contentSize; // Calculate new height/position of drag handle.

				scrollbarSize = Math.max(~~(scrollbarRatio * trackSize), this.options.scrollbarMinSize);

				if (this.options.scrollbarMaxSize) {
					scrollbarSize = Math.min(scrollbarSize, this.options.scrollbarMaxSize);
				}

				return scrollbarSize;
			};

			_proto.positionScrollbar = function positionScrollbar(axis) {
				if (axis === void 0) {
					axis = "y";
				}

				if (!this.axis[axis].isOverflowing) {
					return;
				}

				var contentSize = this.contentWrapperEl[this.axis[axis].scrollSizeAttr];
				var trackSize = this.axis[axis].track.el[this.axis[axis].offsetSizeAttr];
				var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
				var scrollbar = this.axis[axis].scrollbar;
				var scrollOffset = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
				scrollOffset =
					axis === "x" && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollingInverted
						? -scrollOffset
						: scrollOffset;
				var scrollPourcent = scrollOffset / (contentSize - hostSize);
				var handleOffset = ~~((trackSize - scrollbar.size) * scrollPourcent);
				handleOffset =
					axis === "x" && this.isRtl && SimpleBar.getRtlHelpers().isRtlScrollbarInverted
						? handleOffset + (trackSize - scrollbar.size)
						: handleOffset;
				scrollbar.el.style.transform =
					axis === "x"
						? "translate3d(" + handleOffset + "px, 0, 0)"
						: "translate3d(0, " + handleOffset + "px, 0)";
			};

			_proto.toggleTrackVisibility = function toggleTrackVisibility(axis) {
				if (axis === void 0) {
					axis = "y";
				}

				var track = this.axis[axis].track.el;
				var scrollbar = this.axis[axis].scrollbar.el;

				if (this.axis[axis].isOverflowing || this.axis[axis].forceVisible) {
					track.style.visibility = "visible";
					this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "scroll";
				} else {
					track.style.visibility = "hidden";
					this.contentWrapperEl.style[this.axis[axis].overflowAttr] = "hidden";
				} // Even if forceVisible is enabled, scrollbar itself should be hidden

				if (this.axis[axis].isOverflowing) {
					scrollbar.style.display = "block";
				} else {
					scrollbar.style.display = "none";
				}
			};

			_proto.hideNativeScrollbar = function hideNativeScrollbar() {
				this.offsetEl.style[this.isRtl ? "left" : "right"] =
					this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
				this.offsetEl.style.bottom =
					this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
			};
			/**
			 * On scroll event handling
			 */

			_proto.onMouseMoveForAxis = function onMouseMoveForAxis(axis) {
				if (axis === void 0) {
					axis = "y";
				}

				this.axis[axis].track.rect = this.axis[axis].track.el.getBoundingClientRect();
				this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
				var isWithinScrollbarBoundsX = this.isWithinBounds(this.axis[axis].scrollbar.rect);

				if (isWithinScrollbarBoundsX) {
					this.axis[axis].scrollbar.el.classList.add(this.classNames.hover);
				} else {
					this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
				}

				if (this.isWithinBounds(this.axis[axis].track.rect)) {
					this.showScrollbar(axis);
					this.axis[axis].track.el.classList.add(this.classNames.hover);
				} else {
					this.axis[axis].track.el.classList.remove(this.classNames.hover);
				}
			};

			_proto.onMouseLeaveForAxis = function onMouseLeaveForAxis(axis) {
				if (axis === void 0) {
					axis = "y";
				}

				this.axis[axis].track.el.classList.remove(this.classNames.hover);
				this.axis[axis].scrollbar.el.classList.remove(this.classNames.hover);
			};

			/**
			 * Show scrollbar
			 */
			_proto.showScrollbar = function showScrollbar(axis) {
				if (axis === void 0) {
					axis = "y";
				}

				var scrollbar = this.axis[axis].scrollbar.el;

				if (!this.axis[axis].isVisible) {
					scrollbar.classList.add(this.classNames.visible);
					this.axis[axis].isVisible = true;
				}

				if (this.options.autoHide) {
					this.hideScrollbars();
				}
			};
			/**
			 * Hide Scrollbar
			 */

			/**
			 * on scrollbar handle drag movement starts
			 */
			_proto.onDragStart = function onDragStart(e, axis) {
				if (axis === void 0) {
					axis = "y";
				}

				var elDocument = getElementDocument(this.el);
				var elWindow = getElementWindow(this.el);
				var scrollbar = this.axis[axis].scrollbar; // Measure how far the user's mouse is from the top of the scrollbar drag handle.

				var eventOffset = axis === "y" ? e.pageY : e.pageX;
				this.axis[axis].dragOffset = eventOffset - scrollbar.rect[this.axis[axis].offsetAttr];
				this.draggedAxis = axis;
				this.el.classList.add(this.classNames.dragging);
				elDocument.addEventListener("mousemove", this.drag, true);
				elDocument.addEventListener("mouseup", this.onEndDrag, true);

				if (this.removePreventClickId === null) {
					elDocument.addEventListener("click", this.preventClick, true);
					elDocument.addEventListener("dblclick", this.preventClick, true);
				} else {
					elWindow.clearTimeout(this.removePreventClickId);
					this.removePreventClickId = null;
				}
			};
			/**
			 * Drag scrollbar handle
			 */

			_proto.onTrackClick = function onTrackClick(e, axis) {
				var _this4 = this;

				if (axis === void 0) {
					axis = "y";
				}

				if (!this.options.clickOnTrack) return;
				var elWindow = getElementWindow(this.el);
				this.axis[axis].scrollbar.rect = this.axis[axis].scrollbar.el.getBoundingClientRect();
				var scrollbar = this.axis[axis].scrollbar;
				var scrollbarOffset = scrollbar.rect[this.axis[axis].offsetAttr];
				var hostSize = parseInt(this.elStyles[this.axis[axis].sizeAttr], 10);
				var scrolled = this.contentWrapperEl[this.axis[axis].scrollOffsetAttr];
				var t = axis === "y" ? this.mouseY - scrollbarOffset : this.mouseX - scrollbarOffset;
				var dir = t < 0 ? -1 : 1;
				var scrollSize = dir === -1 ? scrolled - hostSize : scrolled + hostSize;

				var scrollTo = function scrollTo() {
					if (dir === -1) {
						if (scrolled > scrollSize) {
							var _this4$contentWrapper;

							scrolled -= _this4.options.clickOnTrackSpeed;

							_this4.contentWrapperEl.scrollTo(
								((_this4$contentWrapper = {}),
								(_this4$contentWrapper[_this4.axis[axis].offsetAttr] = scrolled),
								_this4$contentWrapper)
							);

							elWindow.requestAnimationFrame(scrollTo);
						}
					} else {
						if (scrolled < scrollSize) {
							var _this4$contentWrapper2;

							scrolled += _this4.options.clickOnTrackSpeed;

							_this4.contentWrapperEl.scrollTo(
								((_this4$contentWrapper2 = {}),
								(_this4$contentWrapper2[_this4.axis[axis].offsetAttr] = scrolled),
								_this4$contentWrapper2)
							);

							elWindow.requestAnimationFrame(scrollTo);
						}
					}
				};

				scrollTo();
			};
			/**
			 * Getter for content element
			 */

			_proto.getContentElement = function getContentElement() {
				return this.contentEl;
			};
			/**
			 * Getter for original scrolling element
			 */

			_proto.getScrollElement = function getScrollElement() {
				return this.contentWrapperEl;
			};

			_proto.getScrollbarWidth = function getScrollbarWidth() {
				// Try/catch for FF 56 throwing on undefined computedStyles
				try {
					// Detect browsers supporting CSS scrollbar styling and do not calculate
					if (
						getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display === "none" ||
						"scrollbarWidth" in document.documentElement.style ||
						"-ms-overflow-style" in document.documentElement.style
					) {
						return 0;
					} else {
						return scrollbarWidth(this.el);
					}
				} catch (e) {
					return scrollbarWidth(this.el);
				}
			};

			_proto.removeListeners = function removeListeners() {
				var _this5 = this;

				var elWindow = getElementWindow(this.el); // Event listeners

				if (this.options.autoHide) {
					this.el.removeEventListener("mouseenter", this.onMouseEnter);
				}

				["mousedown", "click", "dblclick"].forEach(function (e) {
					_this5.el.removeEventListener(e, _this5.onPointerEvent, true);
				});
				["touchstart", "touchend", "touchmove"].forEach(function (e) {
					_this5.el.removeEventListener(e, _this5.onPointerEvent, {
						capture: true,
						passive: true,
					});
				});
				this.el.removeEventListener("mousemove", this.onMouseMove);
				this.el.removeEventListener("mouseleave", this.onMouseLeave);

				if (this.contentWrapperEl) {
					this.contentWrapperEl.removeEventListener("scroll", this.onScroll);
				}

				elWindow.removeEventListener("resize", this.onWindowResize);

				if (this.mutationObserver) {
					this.mutationObserver.disconnect();
				}

				if (this.resizeObserver) {
					this.resizeObserver.disconnect();
				} // Cancel all debounced functions

				this.recalculate.cancel();
				this.onMouseMove.cancel();
				this.hideScrollbars.cancel();
				this.onWindowResize.cancel();
			};
			/**
			 * UnMount mutation observer and delete SimpleBar instance from DOM element
			 */

			_proto.unMount = function unMount() {
				this.removeListeners();
				SimpleBar.instances.delete(this.el);
			};
			/**
			 * Check if mouse is within bounds
			 */

			_proto.isWithinBounds = function isWithinBounds(bbox) {
				return (
					this.mouseX >= bbox.left &&
					this.mouseX <= bbox.left + bbox.width &&
					this.mouseY >= bbox.top &&
					this.mouseY <= bbox.top + bbox.height
				);
			};
			/**
			 * Find element children matches query
			 */

			_proto.findChild = function findChild(el, query) {
				var matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
				return Array.prototype.filter.call(el.children, function (child) {
					return matches.call(child, query);
				})[0];
			};

			return SimpleBar;
		})();

		SimpleBar.defaultOptions = {
			autoHide: true,
			forceVisible: false,
			clickOnTrack: true,
			clickOnTrackSpeed: 40,
			classNames: {
				contentEl: "simplebar-content",
				contentWrapper: "simplebar-content-wrapper",
				offset: "simplebar-offset",
				mask: "simplebar-mask",
				wrapper: "simplebar-wrapper",
				placeholder: "simplebar-placeholder",
				scrollbar: "simplebar-scrollbar",
				track: "simplebar-track",
				heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
				heightAutoObserverEl: "simplebar-height-auto-observer",
				visible: "simplebar-visible",
				horizontal: "simplebar-horizontal",
				vertical: "simplebar-vertical",
				hover: "simplebar-hover",
				dragging: "simplebar-dragging",
			},
			scrollbarMinSize: 25,
			scrollbarMaxSize: 0,
			timeout: 1000,
		};
		SimpleBar.instances = new WeakMap();

		SimpleBar.initDOMLoadedElements = function () {
			document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements);
			window.removeEventListener("load", this.initDOMLoadedElements);
			Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), function (el) {
				if (el.getAttribute("data-simplebar") !== "init" && !SimpleBar.instances.has(el))
					new SimpleBar(el, getOptions(el.attributes));
			});
		};

		SimpleBar.removeObserver = function () {
			this.globalObserver.disconnect();
		};

		SimpleBar.initHtmlApi = function () {
			this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this); // MutationObserver is IE11+

			if (typeof MutationObserver !== "undefined") {
				// Mutation observer to observe dynamically added elements
				this.globalObserver = new MutationObserver(SimpleBar.handleMutations);
				this.globalObserver.observe(document, {
					childList: true,
					subtree: true,
				});
			} // Taken from jQuery `ready` function
			// Instantiate elements already present on the page

			if (
				document.readyState === "complete" ||
				(document.readyState !== "loading" && !document.documentElement.doScroll)
			) {
				// Handle it asynchronously to allow scripts the opportunity to delay init
				window.setTimeout(this.initDOMLoadedElements);
			} else {
				document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements);
				window.addEventListener("load", this.initDOMLoadedElements);
			}
		};

		SimpleBar.handleMutations = function (mutations) {
			mutations.forEach(function (mutation) {
				Array.prototype.forEach.call(mutation.addedNodes, function (addedNode) {
					if (addedNode.nodeType === 1) {
						if (addedNode.hasAttribute("data-simplebar")) {
							!SimpleBar.instances.has(addedNode) &&
								document.documentElement.contains(addedNode) &&
								new SimpleBar(addedNode, getOptions(addedNode.attributes));
						} else {
							Array.prototype.forEach.call(addedNode.querySelectorAll("[data-simplebar]"), function (el) {
								if (
									el.getAttribute("data-simplebar") !== "init" &&
									!SimpleBar.instances.has(el) &&
									document.documentElement.contains(el)
								)
									new SimpleBar(el, getOptions(el.attributes));
							});
						}
					}
				});
				Array.prototype.forEach.call(mutation.removedNodes, function (removedNode) {
					if (removedNode.nodeType === 1) {
						if (removedNode.getAttribute("data-simplebar") === "init") {
							SimpleBar.instances.has(removedNode) &&
								!document.documentElement.contains(removedNode) &&
								SimpleBar.instances.get(removedNode).unMount();
						} else {
							Array.prototype.forEach.call(
								removedNode.querySelectorAll('[data-simplebar="init"]'),
								function (el) {
									SimpleBar.instances.has(el) &&
										!document.documentElement.contains(el) &&
										SimpleBar.instances.get(el).unMount();
								}
							);
						}
					}
				});
			});
		};

		SimpleBar.getOptions = getOptions;
		/**
		 * HTML API
		 * Called only in a browser env.
		 */

		if (can_use_dom_default()) {
			SimpleBar.initHtmlApi();
		}

		/* harmony default export */ const simplebar_esm = /* unused pure expression or super */ null && SimpleBar; // CONCATENATED MODULE: ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
		//# sourceMappingURL=simplebar.esm.js.map

		/**
		 * A collection of shims that provide minimal functionality of the ES6 collections.
		 *
		 * These implementations are not meant to be used outside of the ResizeObserver
		 * modules as they cover only a limited range of use cases.
		 */
		/* eslint-disable require-jsdoc, valid-jsdoc */
		var MapShim = (function () {
			if (typeof Map !== "undefined") {
				return Map;
			}
			/**
			 * Returns index in provided array that matches the specified key.
			 *
			 * @param {Array<Array>} arr
			 * @param {*} key
			 * @returns {number}
			 */
			function getIndex(arr, key) {
				var result = -1;
				arr.some(function (entry, index) {
					if (entry[0] === key) {
						result = index;
						return true;
					}
					return false;
				});
				return result;
			}
			return /** @class */ (function () {
				function class_1() {
					this.__entries__ = [];
				}
				Object.defineProperty(class_1.prototype, "size", {
					/**
					 * @returns {boolean}
					 */
					get: function () {
						return this.__entries__.length;
					},
					enumerable: true,
					configurable: true,
				});
				/**
				 * @param {*} key
				 * @returns {*}
				 */
				class_1.prototype.get = function (key) {
					var index = getIndex(this.__entries__, key);
					var entry = this.__entries__[index];
					return entry && entry[1];
				};
				/**
				 * @param {*} key
				 * @param {*} value
				 * @returns {void}
				 */
				class_1.prototype.set = function (key, value) {
					var index = getIndex(this.__entries__, key);
					if (~index) {
						this.__entries__[index][1] = value;
					} else {
						this.__entries__.push([key, value]);
					}
				};
				/**
				 * @param {*} key
				 * @returns {void}
				 */
				class_1.prototype.delete = function (key) {
					var entries = this.__entries__;
					var index = getIndex(entries, key);
					if (~index) {
						entries.splice(index, 1);
					}
				};
				/**
				 * @param {*} key
				 * @returns {void}
				 */
				class_1.prototype.has = function (key) {
					return !!~getIndex(this.__entries__, key);
				};
				/**
				 * @returns {void}
				 */
				class_1.prototype.clear = function () {
					this.__entries__.splice(0);
				};
				/**
				 * @param {Function} callback
				 * @param {*} [ctx=null]
				 * @returns {void}
				 */
				class_1.prototype.forEach = function (callback, ctx) {
					if (ctx === void 0) {
						ctx = null;
					}
					for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
						var entry = _a[_i];
						callback.call(ctx, entry[1], entry[0]);
					}
				};
				return class_1;
			})();
		})();

		/**
		 * Detects whether window and document objects are available in current environment.
		 */
		var isBrowser =
			typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;

		// Returns global object of a current environment.
		var global$1 = (function () {
			if (typeof __webpack_require__.g !== "undefined" && __webpack_require__.g.Math === Math) {
				return __webpack_require__.g;
			}
			if (typeof self !== "undefined" && self.Math === Math) {
				return self;
			}
			if (typeof window !== "undefined" && window.Math === Math) {
				return window;
			}
			// eslint-disable-next-line no-new-func
			return Function("return this")();
		})();

		/**
		 * A shim for the requestAnimationFrame which falls back to the setTimeout if
		 * first one is not supported.
		 *
		 * @returns {number} Requests' identifier.
		 */
		var requestAnimationFrame$1 = (function () {
			if (typeof requestAnimationFrame === "function") {
				// It's required to use a bounded function because IE sometimes throws
				// an "Invalid calling object" error if rAF is invoked without the global
				// object on the left hand side.
				return requestAnimationFrame.bind(global$1);
			}
			return function (callback) {
				return setTimeout(function () {
					return callback(Date.now());
				}, 1000 / 60);
			};
		})();

		// Defines minimum timeout before adding a trailing call.
		var trailingTimeout = 2;
		/**
		 * Creates a wrapper function which ensures that provided callback will be
		 * invoked only once during the specified delay period.
		 *
		 * @param {Function} callback - Function to be invoked after the delay period.
		 * @param {number} delay - Delay after which to invoke callback.
		 * @returns {Function}
		 */
		function throttle(callback, delay) {
			var leadingCall = false,
				trailingCall = false,
				lastCallTime = 0;
			/**
			 * Invokes the original callback function and schedules new invocation if
			 * the "proxy" was called during current request.
			 *
			 * @returns {void}
			 */
			function resolvePending() {
				if (leadingCall) {
					leadingCall = false;
					callback();
				}
				if (trailingCall) {
					proxy();
				}
			}
			/**
			 * Callback invoked after the specified delay. It will further postpone
			 * invocation of the original function delegating it to the
			 * requestAnimationFrame.
			 *
			 * @returns {void}
			 */
			function timeoutCallback() {
				requestAnimationFrame$1(resolvePending);
			}
			/**
			 * Schedules invocation of the original function.
			 *
			 * @returns {void}
			 */
			function proxy() {
				var timeStamp = Date.now();
				if (leadingCall) {
					// Reject immediately following calls.
					if (timeStamp - lastCallTime < trailingTimeout) {
						return;
					}
					// Schedule new call to be in invoked when the pending one is resolved.
					// This is important for "transitions" which never actually start
					// immediately so there is a chance that we might miss one if change
					// happens amids the pending invocation.
					trailingCall = true;
				} else {
					leadingCall = true;
					trailingCall = false;
					setTimeout(timeoutCallback, delay);
				}
				lastCallTime = timeStamp;
			}
			return proxy;
		}

		// Minimum delay before invoking the update of observers.
		var REFRESH_DELAY = 20;
		// A list of substrings of CSS properties used to find transition events that
		// might affect dimensions of observed elements.
		var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
		// Check if MutationObserver is available.
		var mutationObserverSupported = typeof MutationObserver !== "undefined";
		/**
		 * Singleton controller class which handles updates of ResizeObserver instances.
		 */
		var ResizeObserver_es_ResizeObserverController = /** @class */ (function () {
			/**
			 * Creates a new instance of ResizeObserverController.
			 *
			 * @private
			 */
			function ResizeObserverController() {
				/**
				 * Indicates whether DOM listeners have been added.
				 *
				 * @private {boolean}
				 */
				this.connected_ = false;
				/**
				 * Tells that controller has subscribed for Mutation Events.
				 *
				 * @private {boolean}
				 */
				this.mutationEventsAdded_ = false;
				/**
				 * Keeps reference to the instance of MutationObserver.
				 *
				 * @private {MutationObserver}
				 */
				this.mutationsObserver_ = null;
				/**
				 * A list of connected observers.
				 *
				 * @private {Array<ResizeObserverSPI>}
				 */
				this.observers_ = [];
				this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
				this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
			}
			/**
			 * Adds observer to observers list.
			 *
			 * @param {ResizeObserverSPI} observer - Observer to be added.
			 * @returns {void}
			 */
			ResizeObserverController.prototype.addObserver = function (observer) {
				if (!~this.observers_.indexOf(observer)) {
					this.observers_.push(observer);
				}
				// Add listeners if they haven't been added yet.
				if (!this.connected_) {
					this.connect_();
				}
			};
			/**
			 * Removes observer from observers list.
			 *
			 * @param {ResizeObserverSPI} observer - Observer to be removed.
			 * @returns {void}
			 */
			ResizeObserverController.prototype.removeObserver = function (observer) {
				var observers = this.observers_;
				var index = observers.indexOf(observer);
				// Remove observer if it's present in registry.
				if (~index) {
					observers.splice(index, 1);
				}
				// Remove listeners if controller has no connected observers.
				if (!observers.length && this.connected_) {
					this.disconnect_();
				}
			};
			/**
			 * Invokes the update of observers. It will continue running updates insofar
			 * it detects changes.
			 *
			 * @returns {void}
			 */
			ResizeObserverController.prototype.refresh = function () {
				var changesDetected = this.updateObservers_();
				// Continue running updates if changes have been detected as there might
				// be future ones caused by CSS transitions.
				if (changesDetected) {
					this.refresh();
				}
			};
			/**
			 * Updates every observer from observers list and notifies them of queued
			 * entries.
			 *
			 * @private
			 * @returns {boolean} Returns "true" if any observer has detected changes in
			 *      dimensions of it's elements.
			 */
			ResizeObserverController.prototype.updateObservers_ = function () {
				// Collect observers that have active observations.
				var activeObservers = this.observers_.filter(function (observer) {
					return observer.gatherActive(), observer.hasActive();
				});
				// Deliver notifications in a separate cycle in order to avoid any
				// collisions between observers, e.g. when multiple instances of
				// ResizeObserver are tracking the same element and the callback of one
				// of them changes content dimensions of the observed target. Sometimes
				// this may result in notifications being blocked for the rest of observers.
				activeObservers.forEach(function (observer) {
					return observer.broadcastActive();
				});
				return activeObservers.length > 0;
			};
			/**
			 * Initializes DOM listeners.
			 *
			 * @private
			 * @returns {void}
			 */
			ResizeObserverController.prototype.connect_ = function () {
				// Do nothing if running in a non-browser environment or if listeners
				// have been already added.
				if (!isBrowser || this.connected_) {
					return;
				}
				// Subscription to the "Transitionend" event is used as a workaround for
				// delayed transitions. This way it's possible to capture at least the
				// final state of an element.
				document.addEventListener("transitionend", this.onTransitionEnd_);
				window.addEventListener("resize", this.refresh);
				if (mutationObserverSupported) {
					this.mutationsObserver_ = new MutationObserver(this.refresh);
					this.mutationsObserver_.observe(document, {
						attributes: true,
						childList: true,
						characterData: true,
						subtree: true,
					});
				} else {
					document.addEventListener("DOMSubtreeModified", this.refresh);
					this.mutationEventsAdded_ = true;
				}
				this.connected_ = true;
			};
			/**
			 * Removes DOM listeners.
			 *
			 * @private
			 * @returns {void}
			 */
			ResizeObserverController.prototype.disconnect_ = function () {
				// Do nothing if running in a non-browser environment or if listeners
				// have been already removed.
				if (!isBrowser || !this.connected_) {
					return;
				}
				document.removeEventListener("transitionend", this.onTransitionEnd_);
				window.removeEventListener("resize", this.refresh);
				if (this.mutationsObserver_) {
					this.mutationsObserver_.disconnect();
				}
				if (this.mutationEventsAdded_) {
					document.removeEventListener("DOMSubtreeModified", this.refresh);
				}
				this.mutationsObserver_ = null;
				this.mutationEventsAdded_ = false;
				this.connected_ = false;
			};
			/**
			 * "Transitionend" event handler.
			 *
			 * @private
			 * @param {TransitionEvent} event
			 * @returns {void}
			 */
			ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
				var _b = _a.propertyName,
					propertyName = _b === void 0 ? "" : _b;
				// Detect whether transition may affect dimensions of an element.
				var isReflowProperty = transitionKeys.some(function (key) {
					return !!~propertyName.indexOf(key);
				});
				if (isReflowProperty) {
					this.refresh();
				}
			};
			/**
			 * Returns instance of the ResizeObserverController.
			 *
			 * @returns {ResizeObserverController}
			 */
			ResizeObserverController.getInstance = function () {
				if (!this.instance_) {
					this.instance_ = new ResizeObserverController();
				}
				return this.instance_;
			};
			/**
			 * Holds reference to the controller's instance.
			 *
			 * @private {ResizeObserverController}
			 */
			ResizeObserverController.instance_ = null;
			return ResizeObserverController;
		})();

		/**
		 * Defines non-writable/enumerable properties of the provided target object.
		 *
		 * @param {Object} target - Object for which to define properties.
		 * @param {Object} props - Properties to be defined.
		 * @returns {Object} Target object.
		 */
		var defineConfigurable = function (target, props) {
			for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
				var key = _a[_i];
				Object.defineProperty(target, key, {
					value: props[key],
					enumerable: false,
					writable: false,
					configurable: true,
				});
			}
			return target;
		};

		/**
		 * Returns the global object associated with provided element.
		 *
		 * @param {Object} target
		 * @returns {Object}
		 */
		var getWindowOf = function (target) {
			// Assume that the element is an instance of Node, which means that it
			// has the "ownerDocument" property from which we can retrieve a
			// corresponding global object.
			var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
			// Return the local global object if it's not possible extract one from
			// provided element.
			return ownerGlobal || global$1;
		};

		// Placeholder of an empty content rectangle.
		var emptyRect = createRectInit(0, 0, 0, 0);
		/**
		 * Converts provided string to a number.
		 *
		 * @param {number|string} value
		 * @returns {number}
		 */
		function toFloat(value) {
			return parseFloat(value) || 0;
		}
		/**
		 * Extracts borders size from provided styles.
		 *
		 * @param {CSSStyleDeclaration} styles
		 * @param {...string} positions - Borders positions (top, right, ...)
		 * @returns {number}
		 */
		function getBordersSize(styles) {
			var positions = [];
			for (var _i = 1; _i < arguments.length; _i++) {
				positions[_i - 1] = arguments[_i];
			}
			return positions.reduce(function (size, position) {
				var value = styles["border-" + position + "-width"];
				return size + toFloat(value);
			}, 0);
		}
		/**
		 * Extracts paddings sizes from provided styles.
		 *
		 * @param {CSSStyleDeclaration} styles
		 * @returns {Object} Paddings box.
		 */
		function getPaddings(styles) {
			var positions = ["top", "right", "bottom", "left"];
			var paddings = {};
			for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
				var position = positions_1[_i];
				var value = styles["padding-" + position];
				paddings[position] = toFloat(value);
			}
			return paddings;
		}
		/**
		 * Calculates content rectangle of provided SVG element.
		 *
		 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
		 *      to be calculated.
		 * @returns {DOMRectInit}
		 */
		function getSVGContentRect(target) {
			var bbox = target.getBBox();
			return createRectInit(0, 0, bbox.width, bbox.height);
		}
		/**
		 * Calculates content rectangle of provided HTMLElement.
		 *
		 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
		 * @returns {DOMRectInit}
		 */
		function getHTMLElementContentRect(target) {
			// Client width & height properties can't be
			// used exclusively as they provide rounded values.
			var clientWidth = target.clientWidth,
				clientHeight = target.clientHeight;
			// By this condition we can catch all non-replaced inline, hidden and
			// detached elements. Though elements with width & height properties less
			// than 0.5 will be discarded as well.
			//
			// Without it we would need to implement separate methods for each of
			// those cases and it's not possible to perform a precise and performance
			// effective test for hidden elements. E.g. even jQuery's ':visible' filter
			// gives wrong results for elements with width & height less than 0.5.
			if (!clientWidth && !clientHeight) {
				return emptyRect;
			}
			var styles = getWindowOf(target).getComputedStyle(target);
			var paddings = getPaddings(styles);
			var horizPad = paddings.left + paddings.right;
			var vertPad = paddings.top + paddings.bottom;
			// Computed styles of width & height are being used because they are the
			// only dimensions available to JS that contain non-rounded values. It could
			// be possible to utilize the getBoundingClientRect if only it's data wasn't
			// affected by CSS transformations let alone paddings, borders and scroll bars.
			var width = toFloat(styles.width),
				height = toFloat(styles.height);
			// Width & height include paddings and borders when the 'border-box' box
			// model is applied (except for IE).
			if (styles.boxSizing === "border-box") {
				// Following conditions are required to handle Internet Explorer which
				// doesn't include paddings and borders to computed CSS dimensions.
				//
				// We can say that if CSS dimensions + paddings are equal to the "client"
				// properties then it's either IE, and thus we don't need to subtract
				// anything, or an element merely doesn't have paddings/borders styles.
				if (Math.round(width + horizPad) !== clientWidth) {
					width -= getBordersSize(styles, "left", "right") + horizPad;
				}
				if (Math.round(height + vertPad) !== clientHeight) {
					height -= getBordersSize(styles, "top", "bottom") + vertPad;
				}
			}
			// Following steps can't be applied to the document's root element as its
			// client[Width/Height] properties represent viewport area of the window.
			// Besides, it's as well not necessary as the <html> itself neither has
			// rendered scroll bars nor it can be clipped.
			if (!isDocumentElement(target)) {
				// In some browsers (only in Firefox, actually) CSS width & height
				// include scroll bars size which can be removed at this step as scroll
				// bars are the only difference between rounded dimensions + paddings
				// and "client" properties, though that is not always true in Chrome.
				var vertScrollbar = Math.round(width + horizPad) - clientWidth;
				var horizScrollbar = Math.round(height + vertPad) - clientHeight;
				// Chrome has a rather weird rounding of "client" properties.
				// E.g. for an element with content width of 314.2px it sometimes gives
				// the client width of 315px and for the width of 314.7px it may give
				// 314px. And it doesn't happen all the time. So just ignore this delta
				// as a non-relevant.
				if (Math.abs(vertScrollbar) !== 1) {
					width -= vertScrollbar;
				}
				if (Math.abs(horizScrollbar) !== 1) {
					height -= horizScrollbar;
				}
			}
			return createRectInit(paddings.left, paddings.top, width, height);
		}
		/**
		 * Checks whether provided element is an instance of the SVGGraphicsElement.
		 *
		 * @param {Element} target - Element to be checked.
		 * @returns {boolean}
		 */
		var isSVGGraphicsElement = (function () {
			// Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
			// interface.
			if (typeof SVGGraphicsElement !== "undefined") {
				return function (target) {
					return target instanceof getWindowOf(target).SVGGraphicsElement;
				};
			}
			// If it's so, then check that element is at least an instance of the
			// SVGElement and that it has the "getBBox" method.
			// eslint-disable-next-line no-extra-parens
			return function (target) {
				return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
			};
		})();
		/**
		 * Checks whether provided element is a document element (<html>).
		 *
		 * @param {Element} target - Element to be checked.
		 * @returns {boolean}
		 */
		function isDocumentElement(target) {
			return target === getWindowOf(target).document.documentElement;
		}
		/**
		 * Calculates an appropriate content rectangle for provided html or svg element.
		 *
		 * @param {Element} target - Element content rectangle of which needs to be calculated.
		 * @returns {DOMRectInit}
		 */
		function getContentRect(target) {
			if (!isBrowser) {
				return emptyRect;
			}
			if (isSVGGraphicsElement(target)) {
				return getSVGContentRect(target);
			}
			return getHTMLElementContentRect(target);
		}
		/**
		 * Creates rectangle with an interface of the DOMRectReadOnly.
		 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
		 *
		 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
		 * @returns {DOMRectReadOnly}
		 */
		function createReadOnlyRect(_a) {
			var x = _a.x,
				y = _a.y,
				width = _a.width,
				height = _a.height;
			// If DOMRectReadOnly is available use it as a prototype for the rectangle.
			var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
			var rect = Object.create(Constr.prototype);
			// Rectangle's properties are not writable and non-enumerable.
			defineConfigurable(rect, {
				x: x,
				y: y,
				width: width,
				height: height,
				top: y,
				right: x + width,
				bottom: height + y,
				left: x,
			});
			return rect;
		}
		/**
		 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
		 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
		 *
		 * @param {number} x - X coordinate.
		 * @param {number} y - Y coordinate.
		 * @param {number} width - Rectangle's width.
		 * @param {number} height - Rectangle's height.
		 * @returns {DOMRectInit}
		 */
		function createRectInit(x, y, width, height) {
			return { x: x, y: y, width: width, height: height };
		}

		/**
		 * Class that is responsible for computations of the content rectangle of
		 * provided DOM element and for keeping track of it's changes.
		 */
		var ResizeObserver_es_ResizeObservation = /** @class */ (function () {
			/**
			 * Creates an instance of ResizeObservation.
			 *
			 * @param {Element} target - Element to be observed.
			 */
			function ResizeObservation(target) {
				/**
				 * Broadcasted width of content rectangle.
				 *
				 * @type {number}
				 */
				this.broadcastWidth = 0;
				/**
				 * Broadcasted height of content rectangle.
				 *
				 * @type {number}
				 */
				this.broadcastHeight = 0;
				/**
				 * Reference to the last observed content rectangle.
				 *
				 * @private {DOMRectInit}
				 */
				this.contentRect_ = createRectInit(0, 0, 0, 0);
				this.target = target;
			}
			/**
			 * Updates content rectangle and tells whether it's width or height properties
			 * have changed since the last broadcast.
			 *
			 * @returns {boolean}
			 */
			ResizeObservation.prototype.isActive = function () {
				var rect = getContentRect(this.target);
				this.contentRect_ = rect;
				return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
			};
			/**
			 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
			 * from the corresponding properties of the last observed content rectangle.
			 *
			 * @returns {DOMRectInit} Last observed content rectangle.
			 */
			ResizeObservation.prototype.broadcastRect = function () {
				var rect = this.contentRect_;
				this.broadcastWidth = rect.width;
				this.broadcastHeight = rect.height;
				return rect;
			};
			return ResizeObservation;
		})();

		var ResizeObserver_es_ResizeObserverEntry = /** @class */ (function () {
			/**
			 * Creates an instance of ResizeObserverEntry.
			 *
			 * @param {Element} target - Element that is being observed.
			 * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
			 */
			function ResizeObserverEntry(target, rectInit) {
				var contentRect = createReadOnlyRect(rectInit);
				// According to the specification following properties are not writable
				// and are also not enumerable in the native implementation.
				//
				// Property accessors are not being used as they'd require to define a
				// private WeakMap storage which may cause memory leaks in browsers that
				// don't support this type of collections.
				defineConfigurable(this, { target: target, contentRect: contentRect });
			}
			return ResizeObserverEntry;
		})();

		var ResizeObserverSPI = /** @class */ (function () {
			/**
			 * Creates a new instance of ResizeObserver.
			 *
			 * @param {ResizeObserverCallback} callback - Callback function that is invoked
			 *      when one of the observed elements changes it's content dimensions.
			 * @param {ResizeObserverController} controller - Controller instance which
			 *      is responsible for the updates of observer.
			 * @param {ResizeObserver} callbackCtx - Reference to the public
			 *      ResizeObserver instance which will be passed to callback function.
			 */
			function ResizeObserverSPI(callback, controller, callbackCtx) {
				/**
				 * Collection of resize observations that have detected changes in dimensions
				 * of elements.
				 *
				 * @private {Array<ResizeObservation>}
				 */
				this.activeObservations_ = [];
				/**
				 * Registry of the ResizeObservation instances.
				 *
				 * @private {Map<Element, ResizeObservation>}
				 */
				this.observations_ = new MapShim();
				if (typeof callback !== "function") {
					throw new TypeError("The callback provided as parameter 1 is not a function.");
				}
				this.callback_ = callback;
				this.controller_ = controller;
				this.callbackCtx_ = callbackCtx;
			}
			/**
			 * Starts observing provided element.
			 *
			 * @param {Element} target - Element to be observed.
			 * @returns {void}
			 */
			ResizeObserverSPI.prototype.observe = function (target) {
				if (!arguments.length) {
					throw new TypeError("1 argument required, but only 0 present.");
				}
				// Do nothing if current environment doesn't have the Element interface.
				if (typeof Element === "undefined" || !(Element instanceof Object)) {
					return;
				}
				if (!(target instanceof getWindowOf(target).Element)) {
					throw new TypeError('parameter 1 is not of type "Element".');
				}
				var observations = this.observations_;
				// Do nothing if element is already being observed.
				if (observations.has(target)) {
					return;
				}
				observations.set(target, new ResizeObserver_es_ResizeObservation(target));
				this.controller_.addObserver(this);
				// Force the update of observations.
				this.controller_.refresh();
			};
			/**
			 * Stops observing provided element.
			 *
			 * @param {Element} target - Element to stop observing.
			 * @returns {void}
			 */
			ResizeObserverSPI.prototype.unobserve = function (target) {
				if (!arguments.length) {
					throw new TypeError("1 argument required, but only 0 present.");
				}
				// Do nothing if current environment doesn't have the Element interface.
				if (typeof Element === "undefined" || !(Element instanceof Object)) {
					return;
				}
				if (!(target instanceof getWindowOf(target).Element)) {
					throw new TypeError('parameter 1 is not of type "Element".');
				}
				var observations = this.observations_;
				// Do nothing if element is not being observed.
				if (!observations.has(target)) {
					return;
				}
				observations.delete(target);
				if (!observations.size) {
					this.controller_.removeObserver(this);
				}
			};
			/**
			 * Stops observing all elements.
			 *
			 * @returns {void}
			 */
			ResizeObserverSPI.prototype.disconnect = function () {
				this.clearActive();
				this.observations_.clear();
				this.controller_.removeObserver(this);
			};
			/**
			 * Collects observation instances the associated element of which has changed
			 * it's content rectangle.
			 *
			 * @returns {void}
			 */
			ResizeObserverSPI.prototype.gatherActive = function () {
				var _this = this;
				this.clearActive();
				this.observations_.forEach(function (observation) {
					if (observation.isActive()) {
						_this.activeObservations_.push(observation);
					}
				});
			};
			/**
			 * Invokes initial callback function with a list of ResizeObserverEntry
			 * instances collected from active resize observations.
			 *
			 * @returns {void}
			 */
			ResizeObserverSPI.prototype.broadcastActive = function () {
				// Do nothing if observer doesn't have active observations.
				if (!this.hasActive()) {
					return;
				}
				var ctx = this.callbackCtx_;
				// Create ResizeObserverEntry instance for every active observation.
				var entries = this.activeObservations_.map(function (observation) {
					return new ResizeObserver_es_ResizeObserverEntry(observation.target, observation.broadcastRect());
				});
				this.callback_.call(ctx, entries, ctx);
				this.clearActive();
			};
			/**
			 * Clears the collection of active observations.
			 *
			 * @returns {void}
			 */
			ResizeObserverSPI.prototype.clearActive = function () {
				this.activeObservations_.splice(0);
			};
			/**
			 * Tells whether observer has active observations.
			 *
			 * @returns {boolean}
			 */
			ResizeObserverSPI.prototype.hasActive = function () {
				return this.activeObservations_.length > 0;
			};
			return ResizeObserverSPI;
		})();

		// Registry of internal observers. If WeakMap is not available use current shim
		// for the Map collection as it has all required methods and because WeakMap
		// can't be fully polyfilled anyway.
		var observers = typeof WeakMap !== "undefined" ? new WeakMap() : new MapShim();
		/**
		 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
		 * exposing only those methods and properties that are defined in the spec.
		 */
		var ResizeObserver_es_ResizeObserver = /** @class */ (function () {
			/**
			 * Creates a new instance of ResizeObserver.
			 *
			 * @param {ResizeObserverCallback} callback - Callback that is invoked when
			 *      dimensions of the observed elements change.
			 */
			function ResizeObserver(callback) {
				if (!(this instanceof ResizeObserver)) {
					throw new TypeError("Cannot call a class as a function.");
				}
				if (!arguments.length) {
					throw new TypeError("1 argument required, but only 0 present.");
				}
				var controller = ResizeObserver_es_ResizeObserverController.getInstance();
				var observer = new ResizeObserverSPI(callback, controller, this);
				observers.set(this, observer);
			}
			return ResizeObserver;
		})();
		// Expose public methods of ResizeObserver.
		["observe", "unobserve", "disconnect"].forEach(function (method) {
			ResizeObserver_es_ResizeObserver.prototype[method] = function () {
				var _a;
				return (_a = observers.get(this))[method].apply(_a, arguments);
			};
		});

		var index = (function () {
			// Export existing implementation if available.
			if (typeof global$1.ResizeObserver !== "undefined") {
				return global$1.ResizeObserver;
			}
			return ResizeObserver_es_ResizeObserver;
		})();

		/* harmony default export */ const ResizeObserver_es = index; // CONCATENATED MODULE: ./src/js/components/custom-scrollbar.js

		// or "import SimpleBar from 'simplebar';" if you want to use it manually.

		// You will need a ResizeObserver polyfill for browsers that don't support it! (iOS Safari, Edge, ...)

		window.ResizeObserver = ResizeObserver_es;
		// EXTERNAL MODULE: ./src/js/components/next-button.js
		var next_button = __webpack_require__(9612); // CONCATENATED MODULE: ./src/js/_components.js // CONCATENATED MODULE: ./src/js/main.js
	})();

	/******/
})();
