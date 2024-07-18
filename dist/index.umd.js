!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("axios")):"function"==typeof define&&define.amd?define(["exports","axios"],n):n((e||self).traviaApi={},e.axios)}(this,function(e,n){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=/*#__PURE__*/t(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(null,arguments)}function i(e){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},i(e)}function a(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,g(e,n)}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(s=function(){return!!e})()}function g(e,n){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},g(e,n)}function u(e){var n=function(e){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var t=n.call(e,"string");if("object"!=typeof t)return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof n?n:n+""}function l(e){var n="function"==typeof Map?new Map:void 0;return l=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(n){return"function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return function(e,n,t){if(s())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,n);var o=new(e.bind.apply(e,r));return t&&g(o,t.prototype),o}(e,arguments,i(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),g(t,e)},l(e)}var c="http://stage-api.travia.is".replace(/\/+$/,""),v=function(e,n,t){var o;void 0===n&&(n=c),void 0===t&&(t=r.default),this.basePath=void 0,this.axios=void 0,this.configuration=void 0,this.basePath=n,this.axios=t,e&&(this.configuration=e,this.basePath=null!=(o=e.basePath)?o:n)},d=/*#__PURE__*/function(e){function n(n,t){var r;return(r=e.call(this,t)||this).field=void 0,r.field=n,r.name="RequiredError",r}return a(n,e),n}(/*#__PURE__*/l(Error)),h={},f="https://example.com",p=function(e,n,t){if(null==t)throw new d(n,"Required parameter "+n+" was null or undefined when calling "+e+".")},T=function(e,n,t){try{var r=function(){if(t&&t.apiKey)return Promise.resolve("function"==typeof t.apiKey?t.apiKey(n):t.apiKey).then(function(t){e[n]=t})}();return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(e){return Promise.reject(e)}};function A(e,n,t){void 0===t&&(t=""),null!=n&&("object"==typeof n?Array.isArray(n)?n.forEach(function(n){return A(e,n,t)}):Object.keys(n).forEach(function(r){return A(e,n[r],t+(""!==t?".":"")+r)}):e.has(t)?e.append(t,n):e.set(t,n))}var P=function(e){var n=new URLSearchParams(e.search);A(n,[].slice.call(arguments,1)),e.search=n.toString()},U=function(e,n,t){var r="string"!=typeof e;return(r&&t&&t.isJsonMime?t.isJsonMime(n.headers["Content-Type"]):r)?JSON.stringify(void 0!==e?e:{}):e||""},I=function(e){return e.pathname+e.search+e.hash},m=function(e,n,t,r){return function(i,a){var s;void 0===i&&(i=n),void 0===a&&(a=t);var g=o({},e.options,{url:(i.defaults.baseURL?"":null!=(s=null==r?void 0:r.basePath)?s:a)+e.url});return i.request(g)}},k=function(e){var n=function(e){var n=this,t=this,r=this,i=this;return{cancelTravelAgentBookingCartUsingPUT:function(t,r,i,a){void 0===a&&(a={});try{void 0===t&&(t=n.configuration.travelAgentId),p("cancelTravelAgentBookingCartUsingPUT","travelAgentId",t),p("cancelTravelAgentBookingCartUsingPUT","id",r);var s,g="/api/external/v2/travelAgents/{travelAgentId}/bookingCarts/{id}/cancel".replace("{travelAgentId}",encodeURIComponent(String(t))).replace("{id}",encodeURIComponent(String(r))),u=new URL(g,f);e&&(s=e.baseOptions);var l=o({method:"PUT"},s,a),c={},v={};return Promise.resolve(T(c,"X-API-KEY",e)).then(function(){return void 0!==i&&(v.fieldsToInclude=i),P(u,v),l.headers=o({},c,s&&s.headers?s.headers:{},a.headers),{url:I(u),options:l}})}catch(e){return Promise.reject(e)}},cancelTravelAgentBookingUsingPUT:function(n,r,i,a,s){void 0===s&&(s={});try{void 0===n&&(n=t.configuration.travelAgentId),p("cancelTravelAgentBookingUsingPUT","travelAgentId",n),p("cancelTravelAgentBookingUsingPUT","id",r);var g,u="/api/external/v2/travelAgents/{travelAgentId}/bookings/{id}/cancel".replace("{travelAgentId}",encodeURIComponent(String(n))).replace("{id}",encodeURIComponent(String(r))),l=new URL(u,f);e&&(g=e.baseOptions);var c=o({method:"PUT"},g,s),v={},d={};return Promise.resolve(T(v,"X-API-KEY",e)).then(function(){return void 0!==i&&(d.fieldsToInclude=i),v["Content-Type"]="application/json",P(l,d),c.headers=o({},v,g&&g.headers?g.headers:{},s.headers),c.data=U(a,c,e),{url:I(l),options:c}})}catch(e){return Promise.reject(e)}},deleteTravelAgentBookingRoomUsingDELETE:function(n,t,i,a,s){void 0===s&&(s={});try{void 0===n&&(n=r.configuration.travelAgentId),p("deleteTravelAgentBookingRoomUsingDELETE","travelAgentId",n),p("deleteTravelAgentBookingRoomUsingDELETE","bookingId",t),p("deleteTravelAgentBookingRoomUsingDELETE","id",i);var g,u="/api/external/v2/travelAgents/{travelAgentId}/bookings/{bookingId}/bookingRoom/{id}".replace("{travelAgentId}",encodeURIComponent(String(n))).replace("{bookingId}",encodeURIComponent(String(t))).replace("{id}",encodeURIComponent(String(i))),l=new URL(u,f);e&&(g=e.baseOptions);var c=o({method:"DELETE"},g,s),v={},d={};return Promise.resolve(T(v,"X-API-KEY",e)).then(function(){return void 0!==a&&(d.fieldsToInclude=a),P(l,d),c.headers=o({},v,g&&g.headers?g.headers:{},s.headers),{url:I(l),options:c}})}catch(e){return Promise.reject(e)}},getTravelAgentBookingCancellationFeeUsingGET:function(n,t,r,a,s){void 0===s&&(s={});try{void 0===n&&(n=i.configuration.travelAgentId),p("getTravelAgentBookingCancellationFeeUsingGET","travelAgentId",n),p("getTravelAgentBookingCancellationFeeUsingGET","id",t);var g,u="/api/external/v2/travelAgents/{travelAgentId}/bookings/{id}/cancellationFee".replace("{travelAgentId}",encodeURIComponent(String(n))).replace("{id}",encodeURIComponent(String(t))),l=new URL(u,f);e&&(g=e.baseOptions);var c=o({method:"GET"},g,s),v={},d={};return Promise.resolve(T(v,"X-API-KEY",e)).then(function(){return void 0!==r&&(d.bookingRoomId=r),void 0!==a&&(d.fieldsToInclude=a),P(l,d),c.headers=o({},v,g&&g.headers?g.headers:{},s.headers),{url:I(l),options:c}})}catch(e){return Promise.reject(e)}}}}(e);return{cancelTravelAgentBookingCartUsingPUT:function(t,o,i,a){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.cancelTravelAgentBookingCartUsingPUT(t,o,i,a)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["CancelABookingApi.cancelTravelAgentBookingCartUsingPUT"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},cancelTravelAgentBookingUsingPUT:function(t,o,i,a,s){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.cancelTravelAgentBookingUsingPUT(t,o,i,a,s)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["CancelABookingApi.cancelTravelAgentBookingUsingPUT"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},deleteTravelAgentBookingRoomUsingDELETE:function(t,o,i,a,s){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.deleteTravelAgentBookingRoomUsingDELETE(t,o,i,a,s)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["CancelABookingApi.deleteTravelAgentBookingRoomUsingDELETE"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},getTravelAgentBookingCancellationFeeUsingGET:function(t,o,i,a,s){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.getTravelAgentBookingCancellationFeeUsingGET(t,o,i,a,s)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["CancelABookingApi.getTravelAgentBookingCancellationFeeUsingGET"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}}}},B=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}a(n,e);var t=n.prototype;return t.cancelTravelAgentBookingCartUsingPUT=function(e,n,t){var r=this;return k(this.configuration).cancelTravelAgentBookingCartUsingPUT(this.configuration.travelAgentId,e,n,t).then(function(e){return e(r.axios,r.basePath)})},t.cancelTravelAgentBookingUsingPUT=function(e,n,t,r){var o=this;return k(this.configuration).cancelTravelAgentBookingUsingPUT(this.configuration.travelAgentId,e,n,t,r).then(function(e){return e(o.axios,o.basePath)})},t.deleteTravelAgentBookingRoomUsingDELETE=function(e,n,t,r){var o=this;return k(this.configuration).deleteTravelAgentBookingRoomUsingDELETE(this.configuration.travelAgentId,e,n,t,r).then(function(e){return e(o.axios,o.basePath)})},t.getTravelAgentBookingCancellationFeeUsingGET=function(e,n,t,r){var o=this;return k(this.configuration).getTravelAgentBookingCancellationFeeUsingGET(this.configuration.travelAgentId,e,n,t,r).then(function(e){return e(o.axios,o.basePath)})},n}(v),E=function(e){var n=function(e){var n=this,t=this,r=this;return{getTravelAgentBookingCartUsingGET2:function(t,r,i){void 0===i&&(i={});try{void 0===t&&(t=n.configuration.travelAgentId),p("getTravelAgentBookingCartUsingGET2","travelAgentId",n.configuration.travelAgentId);var a,s="/api/external/v2/travelAgents/{travelAgentId}/bookingCart".replace("{travelAgentId}",encodeURIComponent(String(process.env.TRAVIA_TRAVEL_AGENT_ID))),g=new URL(s,f);e&&(a=e.baseOptions);var u=o({method:"GET"},a,i),l={},c={};return Promise.resolve(T(l,"X-API-KEY",e)).then(function(){return void 0!==r&&(c.fieldsToInclude=r),P(g,c),u.headers=o({},l,a&&a.headers?a.headers:{},i.headers),{url:I(g),options:u}})}catch(e){return Promise.reject(e)}},getTravelAgentBookingCartUsingGET3:function(n,r,i){void 0===i&&(i={});try{p("getTravelAgentBookingCartUsingGET3","travelAgentId",t.configuration.travelAgentId),p("getTravelAgentBookingCartUsingGET3","id",n);var a,s="/api/external/v2/travelAgents/{travelAgentId}/bookingCarts/{id}".replace("{travelAgentId}",encodeURIComponent(String(process.env.TRAVIA_TRAVEL_AGENT_ID))).replace("{id}",encodeURIComponent(String(n))),g=new URL(s,f);e&&(a=e.baseOptions);var u=o({method:"GET"},a,i),l={},c={};return Promise.resolve(T(l,"X-API-KEY",e)).then(function(){return void 0!==r&&(c.fieldsToInclude=r),P(g,c),u.headers=o({},l,a&&a.headers?a.headers:{},i.headers),{url:I(g),options:u}})}catch(e){return Promise.reject(e)}},getTravelAgentBookingUsingGET:function(n,t,i,a){void 0===a&&(a={});try{void 0===n&&(n=r.configuration.travelAgentId),p("getTravelAgentBookingUsingGET","travelAgentId",n),p("getTravelAgentBookingUsingGET","id",t);var s,g="/api/external/v2/travelAgents/{travelAgentId}/bookings/{id}".replace("{travelAgentId}",encodeURIComponent(String(n))).replace("{id}",encodeURIComponent(String(t))),u=new URL(g,f);e&&(s=e.baseOptions);var l=o({method:"GET"},s,a),c={},v={};return Promise.resolve(T(c,"X-API-KEY",e)).then(function(){return void 0!==i&&(v.fieldsToInclude=i),P(u,v),l.headers=o({},c,s&&s.headers?s.headers:{},a.headers),{url:I(u),options:l}})}catch(e){return Promise.reject(e)}},getTravelAgentBookingsPageUsingGET:function(n,t,r,i,a,s,g,u,l,c,v,d){void 0===d&&(d={});try{var h,p=new URL("/api/external/v2/travelAgents/bookings/page",f);e&&(h=e.baseOptions);var A=o({method:"GET"},h,d),U={},m={};return Promise.resolve(T(U,"X-API-KEY",e)).then(function(){return void 0!==n&&(m.keyword=n),void 0!==t&&(m.travelAgent=t),void 0!==r&&(m.property=r),void 0!==i&&(m.status=i),void 0!==a&&(m.start=a),void 0!==s&&(m.end=s),void 0!==g&&(m.allotmentId=g),void 0!==u&&(m.allotmentCampaignId=u),void 0!==l&&(m.bookingType=l),void 0!==c&&(m.subCooperationsBookings=c),void 0!==v&&(m.fieldsToInclude=v),P(p,m),A.headers=o({},U,h&&h.headers?h.headers:{},d.headers),{url:I(p),options:A}})}catch(e){return Promise.reject(e)}}}}(e);return{getTravelAgentBookingCartUsingGET2:function(t,o,i){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.getTravelAgentBookingCartUsingGET2(t,o,i)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["GetABookingApi.getTravelAgentBookingCartUsingGET2"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},getTravelAgentBookingCartUsingGET3:function(t,o,i){try{return Promise.resolve(n.getTravelAgentBookingCartUsingGET3(t,o,i)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["GetABookingApi.getTravelAgentBookingCartUsingGET3"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},getTravelAgentBookingUsingGET:function(t,o,i,a){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.getTravelAgentBookingUsingGET(t,o,i,a)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["GetABookingApi.getTravelAgentBookingUsingGET"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},getTravelAgentBookingsPageUsingGET:function(t,o,i,a,s,g,u,l,v,d,f,p){try{return Promise.resolve(n.getTravelAgentBookingsPageUsingGET(t,o,i,a,s,g,u,l,v,d,f,p)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["GetABookingApi.getTravelAgentBookingsPageUsingGET"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}}}},y=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}a(n,e);var t=n.prototype;return t.getTravelAgentBookingCartUsingGET2=function(e,n){var t=this;return E(this.configuration).getTravelAgentBookingCartUsingGET2(this.configuration.travelAgentId,e,n).then(function(e){return e(t.axios,t.basePath)})},t.getTravelAgentBookingCartUsingGET3=function(e,n,t){var r=this;return E(this.configuration).getTravelAgentBookingCartUsingGET3(e,n,t).then(function(e){return e(r.axios,r.basePath)})},t.getTravelAgentBookingUsingGET=function(e,n,t,r){var o=this;return void 0===e&&(e=this.configuration.travelAgentId),E(this.configuration).getTravelAgentBookingUsingGET(e,n,t,r).then(function(e){return e(o.axios,o.basePath)})},t.getTravelAgentBookingsPageUsingGET=function(e,n,t,r,o,i,a,s,g,u,l,c){var v=this;return E(this.configuration).getTravelAgentBookingsPageUsingGET(e,n,t,r,o,i,a,s,g,u,l,c).then(function(e){return e(v.axios,v.basePath)})},n}(v),C=function(e){var n=function(e){var n=this,t=this;return{getPropertiesPageUsingGET:function(t,r,i,a,s){void 0===s&&(s={});try{void 0===t&&(t=n.configuration.travelAgentId),p("getPropertiesPageUsingGET","travelAgentId",t);var g,u="/api/external/v2/travelAgents/{travelAgentId}/properties".replace("{travelAgentId}",encodeURIComponent(String(t))),l=new URL(u,f);e&&(g=e.baseOptions);var c=o({method:"GET"},g,s),v={},d={};return Promise.resolve(T(v,"X-API-KEY",e)).then(function(){return void 0!==r&&(d.page=r),void 0!==i&&(d.size=i),void 0!==a&&(d.fieldsToInclude=a),P(l,d),c.headers=o({},v,g&&g.headers?g.headers:{},s.headers),{url:I(l),options:c}})}catch(e){return Promise.reject(e)}},getPropertyUsingGET:function(n,r,i,a){void 0===a&&(a={});try{void 0===n&&(n=t.configuration.travelAgentId),p("getPropertyUsingGET","travelAgentId",n),p("getPropertyUsingGET","id",r);var s,g="/api/external/v2/travelAgents/{travelAgentId}/properties/{id}".replace("{travelAgentId}",encodeURIComponent(String(n))).replace("{id}",encodeURIComponent(String(r))),u=new URL(g,f);e&&(s=e.baseOptions);var l=o({method:"GET"},s,a),c={},v={};return Promise.resolve(T(c,"X-API-KEY",e)).then(function(){return void 0!==i&&(v.fieldsToInclude=i),P(u,v),l.headers=o({},c,s&&s.headers?s.headers:{},a.headers),{url:I(u),options:l}})}catch(e){return Promise.reject(e)}}}}(e);return{getPropertiesPageUsingGET:function(t,o,i,a,s){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.getPropertiesPageUsingGET(t,o,i,a,s)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["GetPropertyContentApi.getPropertiesPageUsingGET"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},getPropertyUsingGET:function(t,o,i,a){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.getPropertyUsingGET(t,o,i,a)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["GetPropertyContentApi.getPropertyUsingGET"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}}}},b=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}a(n,e);var t=n.prototype;return t.getPropertiesPageUsingGET=function(e,n,t,r){var o=this;return C(this.configuration).getPropertiesPageUsingGET(this.configuration.travelAgentId,e,n,t,r).then(function(e){return e(o.axios,o.basePath)})},t.getPropertyUsingGET=function(e,n,t){var r=this;return C(this.configuration).getPropertyUsingGET(this.configuration.travelAgentId,e,n,t).then(function(e){return e(r.axios,r.basePath)})},n}(v),S=function(e){var n=function(e){var n=this,t=this,r=this,i=this;return{addBookingRoomsToTravelAgentBookingUsingPOST:function(t,r,i,a){void 0===a&&(a={});try{void 0===t&&(t=n.configuration.travelAgentId),p("addBookingRoomsToTravelAgentBookingUsingPOST","travelAgentId",t),p("addBookingRoomsToTravelAgentBookingUsingPOST","id",r),p("addBookingRoomsToTravelAgentBookingUsingPOST","bookingRoomCreateRequest",i);var s,g="/api/external/v2/travelAgents/{travelAgentId}/booking/{id}".replace("{travelAgentId}",encodeURIComponent(String(t))).replace("{id}",encodeURIComponent(String(r))),u=new URL(g,f);e&&(s=e.baseOptions);var l=o({method:"POST"},s,a),c={},v={};return Promise.resolve(T(c,"X-API-KEY",e)).then(function(){return c["Content-Type"]="application/json",P(u,v),l.headers=o({},c,s&&s.headers?s.headers:{},a.headers),l.data=U(i,l,e),{url:I(u),options:l}})}catch(e){return Promise.reject(e)}},addBookingToTravelAgentBookingCartUsingPOST:function(n,r,i,a){void 0===a&&(a={});try{void 0===n&&(n=t.configuration.travelAgentId),p("addBookingToTravelAgentBookingCartUsingPOST","travelAgentId",n),p("addBookingToTravelAgentBookingCartUsingPOST","bookingCreateRequest",r);var s,g="/api/external/v2/travelAgents/{travelAgentId}/bookingCarts".replace("{travelAgentId}",encodeURIComponent(String(n))),u=new URL(g,f);e&&(s=e.baseOptions);var l=o({method:"POST"},s,a),c={},v={};return Promise.resolve(T(c,"X-API-KEY",e)).then(function(){return void 0!==i&&(v.createNewBookingCart=i),c["Content-Type"]="application/json",P(u,v),l.headers=o({},c,s&&s.headers?s.headers:{},a.headers),l.data=U(r,l,e),{url:I(u),options:l}})}catch(e){return Promise.reject(e)}},addBookingsToTravelAgentBookingCartUsingPOST:function(n,t,i){void 0===i&&(i={});try{void 0===n&&(n=r.configuration.travelAgentId),p("addBookingsToTravelAgentBookingCartUsingPOST","travelAgentId",n),p("addBookingsToTravelAgentBookingCartUsingPOST","bookingCartCreateRequest",t);var a,s="/api/external/v2/travelAgents/{travelAgentId}/bookingCarts/multiBookings".replace("{travelAgentId}",encodeURIComponent(String(n))),g=new URL(s,f);e&&(a=e.baseOptions);var u=o({method:"POST"},a,i),l={},c={};return Promise.resolve(T(l,"X-API-KEY",e)).then(function(){return l["Content-Type"]="application/json",P(g,c),u.headers=o({},l,a&&a.headers?a.headers:{},i.headers),u.data=U(t,u,e),{url:I(g),options:u}})}catch(e){return Promise.reject(e)}},confirmTravelAgentBookingCartUsingPOST:function(n,t,r,a){void 0===a&&(a={});try{void 0===n&&(n=i.configuration.travelAgentId),p("confirmTravelAgentBookingCartUsingPOST","travelAgentId",n),p("confirmTravelAgentBookingCartUsingPOST","id",t);var s,g="/api/external/v2/travelAgents/{travelAgentId}/bookingCarts/{id}/confirm".replace("{travelAgentId}",encodeURIComponent(String(n))).replace("{id}",encodeURIComponent(String(t))),u=new URL(g,f);e&&(s=e.baseOptions);var l=o({method:"POST"},s,a),c={},v={};return Promise.resolve(T(c,"X-API-KEY",e)).then(function(){return c["Content-Type"]="application/json",P(u,v),l.headers=o({},c,s&&s.headers?s.headers:{},a.headers),l.data=U(r,l,e),{url:I(u),options:l}})}catch(e){return Promise.reject(e)}}}}(e);return{addBookingRoomsToTravelAgentBookingUsingPOST:function(t,o,i,a){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.addBookingRoomsToTravelAgentBookingUsingPOST(t,o,i,a)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["MakeABookingApi.addBookingRoomsToTravelAgentBookingUsingPOST"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},addBookingToTravelAgentBookingCartUsingPOST:function(t,o,i,a){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.addBookingToTravelAgentBookingCartUsingPOST(t,o,i,a)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["MakeABookingApi.addBookingToTravelAgentBookingCartUsingPOST"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},addBookingsToTravelAgentBookingCartUsingPOST:function(t,o,i){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.addBookingsToTravelAgentBookingCartUsingPOST(t,o,i)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["MakeABookingApi.addBookingsToTravelAgentBookingCartUsingPOST"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},confirmTravelAgentBookingCartUsingPOST:function(t,o,i,a){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.confirmTravelAgentBookingCartUsingPOST(t,o,i,a)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["MakeABookingApi.confirmTravelAgentBookingCartUsingPOST"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}}}},R=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}a(n,e);var t=n.prototype;return t.addBookingRoomsToTravelAgentBookingUsingPOST=function(e,n,t){var r=this;return S(this.configuration).addBookingRoomsToTravelAgentBookingUsingPOST(this.configuration.travelAgentId,e,n,t).then(function(e){return e(r.axios,r.basePath)})},t.addBookingToTravelAgentBookingCartUsingPOST=function(e,n,t){var r=this;return S(this.configuration).addBookingToTravelAgentBookingCartUsingPOST(this.configuration.travelAgentId,e,n,t).then(function(e){return e(r.axios,r.basePath)})},t.addBookingsToTravelAgentBookingCartUsingPOST=function(e,n){var t=this;return S(this.configuration).addBookingsToTravelAgentBookingCartUsingPOST(this.configuration.travelAgentId,e,n).then(function(e){return e(t.axios,t.basePath)})},t.confirmTravelAgentBookingCartUsingPOST=function(e,n,t){var r=this;return S(this.configuration).confirmTravelAgentBookingCartUsingPOST(this.configuration.travelAgentId,e,n,t).then(function(e){return e(r.axios,r.basePath)})},n}(v),O=function(e){var n=function(e){var n=this,t=this,r=this;return{getFiltersUsingGET:function(t,r){void 0===r&&(r={});try{void 0===t&&(t=n.configuration.travelAgentId),p("getFiltersUsingGET","travelAgentId",t);var i,a="/api/external/v2/travelAgents/{travelAgentId}/search/filters".replace("{travelAgentId}",encodeURIComponent(String(t))),s=new URL(a,f);e&&(i=e.baseOptions);var g=o({method:"GET"},i,r),u={},l={};return Promise.resolve(T(u,"X-API-KEY",e)).then(function(){return P(s,l),g.headers=o({},u,i&&i.headers?i.headers:{},r.headers),{url:I(s),options:g}})}catch(e){return Promise.reject(e)}},retrievePropertyAvailableDatesUsingGET:function(n,r,i,a,s){void 0===s&&(s={});try{void 0===n&&(n=t.configuration.travelAgentId),p("retrievePropertyAvailableDatesUsingGET","travelAgentId",n),p("retrievePropertyAvailableDatesUsingGET","propertyIds",r),p("retrievePropertyAvailableDatesUsingGET","start",i),p("retrievePropertyAvailableDatesUsingGET","end",a);var g,u="/api/external/v2/travelAgents/{travelAgentId}/available-dates".replace("{travelAgentId}",encodeURIComponent(String(n))),l=new URL(u,f);e&&(g=e.baseOptions);var c=o({method:"GET"},g,s),v={},d={};return Promise.resolve(T(v,"X-API-KEY",e)).then(function(){return void 0!==r&&(d.propertyIds=r),void 0!==i&&(d.start=i),void 0!==a&&(d.end=a),P(l,d),c.headers=o({},v,g&&g.headers?g.headers:{},s.headers),{url:I(l),options:c}})}catch(e){return Promise.reject(e)}},searchPropertyRatesUsingPOST:function(n,t,i){void 0===i&&(i={});try{void 0===n&&(n=r.configuration.travelAgentId),p("searchPropertyRatesUsingPOST","travelAgentId",n),p("searchPropertyRatesUsingPOST","request",t);var a,s="/api/external/v2/travelAgents/{travelAgentId}/search-rates".replace("{travelAgentId}",encodeURIComponent(String(n))),g=new URL(s,f);e&&(a=e.baseOptions);var u=o({method:"POST"},a,i),l={},c={};return Promise.resolve(T(l,"X-API-KEY",e)).then(function(){return l["Content-Type"]="application/json",P(g,c),u.headers=o({},l,a&&a.headers?a.headers:{},i.headers),u.data=U(t,u,e),{url:I(g),options:u}})}catch(e){return Promise.reject(e)}},searchUsingPOST:function(n,t,r){void 0===r&&(r={});try{p("searchUsingPOST","id",n),p("searchUsingPOST","propertySearchFilterRequest",t);var i,a="/api/external/v2/travelAgents/{id}/search".replace("{id}",encodeURIComponent(String(n))),s=new URL(a,f);e&&(i=e.baseOptions);var g=o({method:"POST"},i,r),u={},l={};return Promise.resolve(T(u,"X-API-KEY",e)).then(function(){return u["Content-Type"]="application/json",P(s,l),g.headers=o({},u,i&&i.headers?i.headers:{},r.headers),g.data=U(t,g,e),{url:I(s),options:g}})}catch(e){return Promise.reject(e)}}}}(e);return{getFiltersUsingGET:function(t,o){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.getFiltersUsingGET(t,o)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["SearchAccommodationApi.getFiltersUsingGET"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},retrievePropertyAvailableDatesUsingGET:function(t,o,i,a,s){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.retrievePropertyAvailableDatesUsingGET(t,o,i,a,s)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["SearchAccommodationApi.retrievePropertyAvailableDatesUsingGET"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},searchPropertyRatesUsingPOST:function(t,o,i){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.searchPropertyRatesUsingPOST(t,o,i)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["SearchAccommodationApi.searchPropertyRatesUsingPOST"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},searchUsingPOST:function(t,o,i){try{return Promise.resolve(n.searchUsingPOST(t,o,i)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["SearchAccommodationApi.searchUsingPOST"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}}}},G=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}a(n,e);var t=n.prototype;return t.getFiltersUsingGET=function(e,n){var t=this;return void 0===e&&(e=this.configuration.travelAgentId),O(this.configuration).getFiltersUsingGET(e,n).then(function(e){return e(t.axios,t.basePath)})},t.retrievePropertyAvailableDatesUsingGET=function(e,n,t,r){var o=this;return O(this.configuration).retrievePropertyAvailableDatesUsingGET(this.configuration.travelAgentId,e,n,t,r).then(function(e){return e(o.axios,o.basePath)})},t.searchPropertyRatesUsingPOST=function(e,n){var t=this;return O(this.configuration).searchPropertyRatesUsingPOST(this.configuration.travelAgentId,e,n).then(function(e){return e(t.axios,t.basePath)})},t.searchUsingPOST=function(e,n){var t=this;return O(this.configuration).searchUsingPOST(this.configuration.travelAgentId,e,n).then(function(e){return e(t.axios,t.basePath)})},n}(v),x=function(e){var n=function(e){var n=this,t=this;return{getFiltersUsingGET:function(t,r){void 0===r&&(r={});try{void 0===t&&(t=n.configuration.travelAgentId),p("getFiltersUsingGET","travelAgentId",t);var i,a="/api/external/v2/travelAgents/{travelAgentId}/car-rentals/search/filters".replace("{travelAgentId}",encodeURIComponent(String(t))),s=new URL(a,f);e&&(i=e.baseOptions);var g=o({method:"GET"},i,r),u={},l={};return Promise.resolve(T(u,"X-API-KEY",e)).then(function(){return P(s,l),g.headers=o({},u,i&&i.headers?i.headers:{},r.headers),{url:I(s),options:g}})}catch(e){return Promise.reject(e)}},searchCarsUsingPOST:function(n,r,i){void 0===i&&(i={});try{void 0===n&&(n=t.configuration.travelAgentId),p("searchCarsUsingPOST","travelAgentId",n),p("searchCarsUsingPOST","carRentalSearchRequest",r);var a,s="/api/external/v2/travelAgents/{travelAgentId}/car-rentals/search".replace("{travelAgentId}",encodeURIComponent(String(n))),g=new URL(s,f);e&&(a=e.baseOptions);var u=o({method:"POST"},a,i),l={},c={};return Promise.resolve(T(l,"X-API-KEY",e)).then(function(){return l["Content-Type"]="application/json",P(g,c),u.headers=o({},l,a&&a.headers?a.headers:{},i.headers),u.data=U(r,u,e),{url:I(g),options:u}})}catch(e){return Promise.reject(e)}}}}(e);return{getFiltersUsingGET:function(t,o){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.getFiltersUsingGET(t,o)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["SearchCarRentalApi.getFiltersUsingGET"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},searchCarsUsingPOST:function(t,o,i){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.searchCarsUsingPOST(t,o,i)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["SearchCarRentalApi.searchCarsUsingPOST"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}}}},j=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}a(n,e);var t=n.prototype;return t.getFiltersUsingGET=function(e){var n=this;return x(this.configuration).getFiltersUsingGET(this.configuration.travelAgentId,e).then(function(e){return e(n.axios,n.basePath)})},t.searchCarsUsingPOST=function(e,n){var t=this;return x(this.configuration).searchCarsUsingPOST(this.configuration.travelAgentId,e,n).then(function(e){return e(t.axios,t.basePath)})},n}(v),w=function(e){var n=function(e){var n=this,t=this;return{updateTravelAgentBookingNameListUsingPOST:function(t,r,i,a){void 0===a&&(a={});try{void 0===t&&(t=n.configuration.travelAgentId),p("updateTravelAgentBookingNameListUsingPOST","travelAgentId",t),p("updateTravelAgentBookingNameListUsingPOST","id",r),p("updateTravelAgentBookingNameListUsingPOST","bookingRoomNameUpdateRequests",i);var s,g="/api/external/v2/travelAgents/{travelAgentId}/bookings/{id}/nameList".replace("{travelAgentId}",encodeURIComponent(String(t))).replace("{id}",encodeURIComponent(String(r))),u=new URL(g,f);e&&(s=e.baseOptions);var l=o({method:"POST"},s,a),c={},v={};return Promise.resolve(T(c,"X-API-KEY",e)).then(function(){return c["Content-Type"]="application/json",P(u,v),l.headers=o({},c,s&&s.headers?s.headers:{},a.headers),l.data=U(i,l,e),{url:I(u),options:l}})}catch(e){return Promise.reject(e)}},updateTravelAgentBookingUsingPUT:function(n,r,i,a){void 0===a&&(a={});try{void 0===n&&(n=t.configuration.travelAgentId),p("updateTravelAgentBookingUsingPUT","travelAgentId",n),p("updateTravelAgentBookingUsingPUT","id",r),p("updateTravelAgentBookingUsingPUT","bookingUpdateRequest",i);var s,g="/api/external/v2/travelAgents/{travelAgentId}/bookings/{id}".replace("{travelAgentId}",encodeURIComponent(String(n))).replace("{id}",encodeURIComponent(String(r))),u=new URL(g,f);e&&(s=e.baseOptions);var l=o({method:"PUT"},s,a),c={},v={};return Promise.resolve(T(c,"X-API-KEY",e)).then(function(){return c["Content-Type"]="application/json",P(u,v),l.headers=o({},c,s&&s.headers?s.headers:{},a.headers),l.data=U(i,l,e),{url:I(u),options:l}})}catch(e){return Promise.reject(e)}}}}(e);return{updateTravelAgentBookingNameListUsingPOST:function(t,o,i,a){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.updateTravelAgentBookingNameListUsingPOST(t,o,i,a)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["UpdateABookingApi.updateTravelAgentBookingNameListUsingPOST"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}},updateTravelAgentBookingUsingPUT:function(t,o,i,a){try{return void 0===t&&(t=this.configuration.travelAgentId),Promise.resolve(n.updateTravelAgentBookingUsingPUT(t,o,i,a)).then(function(n){var t,o,i=null!=(t=null==e?void 0:e.serverIndex)?t:0,a=null==(o=h["UpdateABookingApi.updateTravelAgentBookingUsingPUT"])||null==(o=o[i])?void 0:o.url;return function(t,o){return m(n,r.default,c,e)(t,a||o)}})}catch(e){return Promise.reject(e)}}}},L=/*#__PURE__*/function(e){function n(){return e.apply(this,arguments)||this}a(n,e);var t=n.prototype;return t.updateTravelAgentBookingNameListUsingPOST=function(e,n,t){var r=this;return w(this.configuration).updateTravelAgentBookingNameListUsingPOST(this.configuration.travelAgentId,e,n,t).then(function(e){return e(r.axios,r.basePath)})},t.updateTravelAgentBookingUsingPUT=function(e,n,t){var r=this;return w(this.configuration).updateTravelAgentBookingUsingPUT(this.configuration.travelAgentId,e,n,t).then(function(e){return e(r.axios,r.basePath)})},n}(v),_=/*#__PURE__*/function(){function e(e){void 0===e&&(e={}),this.apiKey=void 0,this.username=void 0,this.password=void 0,this.accessToken=void 0,this.basePath=void 0,this.serverIndex=void 0,this.baseOptions=void 0,this.formDataCtor=void 0,this.travelAgentId=void 0,this.apiKey=e.apiKey,this.username=e.username,this.password=e.password,this.accessToken=e.accessToken,this.basePath=e.basePath,this.serverIndex=e.serverIndex,this.baseOptions=e.baseOptions,this.formDataCtor=e.formDataCtor,this.travelAgentId=e.travelAgentId}return e.prototype.isJsonMime=function(e){var n=new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$","i");return null!==e&&(n.test(e)||"application/json-patch+json"===e.toLowerCase())},e}();e.TraviaClient=/*#__PURE__*/function(){return e=function(e){void 0===e&&(e=process.env),this.contentApi=void 0,this.searchApi=void 0,this.bookingApi=void 0;var n=function(e){if(!e.TRAVIA_BASE_URL)throw new Error("TRAVIA_BASE_URL is required");if(!e.TRAVIA_API_KEY)throw new Error("TRAVIA_API_KEY is required");if(!e.TRAVIA_TRAVEL_AGENT_ID)throw new Error("TRAVIA_TRAVEL_AGENT_ID is required");return new _({basePath:e.TRAVIA_BASE_URL,apiKey:e.TRAVIA_API_KEY,travelAgentId:e.TRAVIA_TRAVEL_AGENT_ID})}(e);this.contentApi=new b(n),this.searchApi={accomodation:new G(n),carRental:new j(n)},this.bookingApi={makeBooking:new R(n),getBooking:new y(n),updateBooking:new L(n),cancelBooking:new B(n)}},(n=[{key:"content",get:function(){return this.contentApi}},{key:"search",get:function(){return this.searchApi}},{key:"booking",get:function(){return this.bookingApi}}])&&function(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,u(r.key),r)}}(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n}()});
