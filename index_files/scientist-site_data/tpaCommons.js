(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[123],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"site",(function(){return v})),n.d(t,"editor",(function(){return m}));var r=n(35),a=n(465),o=n(646),i=n(652),c=n(287);n.d(t,"MasterPageTpaPropsCacheSymbol",(function(){return c.a})),n.d(t,"TpaSrcBuilderSymbol",(function(){return c.e})),n.d(t,"TpaContextMappingSymbol",(function(){return c.b}));var u=n(647),d=n(649),s=n(648),l=n(650),p=n(651);n.d(t,"TpaHandlersManagerSymbol",(function(){return c.c})),n.d(t,"TpaSectionSymbol",(function(){return c.d})),n.d(t,"name",(function(){return c.f}));var f=n(561);for(var g in f)["default","site","editor","TpaHandlersManagerSymbol","TpaSectionSymbol","name","MasterPageTpaPropsCacheSymbol","TpaSrcBuilderSymbol","TpaContextMappingSymbol"].indexOf(g)<0&&function(e){n.d(t,e,(function(){return f[e]}))}(g);var v=function(e){e(r.a.AppDidMountHandler).to(o.a),e(c.a).to(u.a),e(c.b).to(s.a),e(c.e).to(d.a),e(c.d).to(l.a),e(a.c).to(p.c),e(a.c).to(p.g),e(a.c).to(p.f),e(a.c).to(p.b),e(a.c).to(p.e),e(a.c).to(p.d),e(a.c).to(p.h),e(a.c).to(p.a)},m=function(e){e(a.a).to(i.a),e(c.e).to(d.a),e(c.d).to(l.a),e(a.c).to(p.c),e(a.c).to(p.f)}},560:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=function(e){if(e.data)try{return JSON.parse(e.data)}catch(e){}return{}},a=function(e){return e&&["TPA","TPA2"].includes(e.intent)},o=["getWixUpgradeUrl","stylesReady","getViewModeInternal","setHelpArticle"]},561:function(e,t){},623:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),a=function(e,t){var n=e.split("/"),a=n.indexOf(t||"");return a<0||n[a]!==t?null:Object(r.e)(n.splice(a)).slice(1)}},646:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),a=n(7),o=n(460),i=n(45),c=n(10),u=n(287),d=n(318),s=n(179),l=n(560),p=Object(a.h)([d.a,c.a,u.b,o.d,o.b,i.f,Object(a.g)(s.a)],(function(e,t,n,a,o,i,c){return{appDidMount:function(){e.addWindowMessageHandler({canHandleEvent:function(e){return!(!e.source||!Object(l.b)(Object(l.c)(e)))},handleEvent:function(e){return Object(r.b)(this,void 0,void 0,(function(){var o,d,s,p,f,g,v;return Object(r.d)(this,(function(m){switch(m.label){case 0:return o=Object(l.c)(e),d=o.type,s=o.callId,l.a.includes(d)?[2]:(p=function(e){var t=e.compId;if(t)return n.getTpaComponentContextId(t)||a.getContextIdOfCompId(t)}(o),f=n.getTpaComponentIdFromTemplate(o.compId),g=null!=f?f:o.compId,v=Object(r.a)(Object(r.a)({},o),{compId:g,origin:e.origin}),c&&c.tpa.addMessage({message:v,compId:g,contextId:p}),p?[4,(b=p,Object(r.b)(void 0,void 0,Promise,(function(){return Object(r.d)(this,(function(e){switch(e.label){case 0:return[4,t(b)];case 1:return[2,e.sent().getAllImplementersOnPageOf(u.c)[0]]}}))})))]:(console.error("TPA handler message caller does not belong to any page",{type:d,callId:s,compId:g}),[2]));case 1:return m.sent().handleMessage(e.source,v).catch((function(e){console.error("HandleTpaMessageError",d,p,g,e),i.captureError(e,{tags:{feature:"tpa",handlerName:d},extra:{handlerName:d,compId:g}})})),[2]}var b}))}))}})}}}))},647:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(9),a=n.n(r),o=n(7),i=n(460),c=n(280),u=Object(o.h)([i.b,c.a],(function(e,t){var n={};return{cacheProps:function(t,r){var o=a.a.omitBy(r||e.get(t),a.a.isFunction);n[t]=a.a.isEmpty(o)?null:o},getCachedProps:function(e){var r,o,i,c,u=n[e];if(u)return a.a.isEqual(null===(o=null===(r=t.getCurrentRouteInfo())||void 0===r?void 0:r.dynamicRouteData)||void 0===o?void 0:o.publicData,null===(c=null===(i=t.getPreviousRouterInfo())||void 0===i?void 0:i.dynamicRouteData)||void 0===c?void 0:c.publicData)||delete u.src,u}}}))},648:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(7),a=Object(r.h)([],(function(){var e={},t={};return{registerTpasForContext:function(t,n){n.forEach((function(n){e[n]=t}))},getTpaComponentContextId:function(t){return e[t]},registerTpaTemplateId:function(e,n){t[e]=n},getTpaComponentIdFromTemplate:function(e){return t[e]}}}))},649:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),a=n(7),o=n(26),i=n(45),c=n(465),u=n(287),d=n(9),s=n.n(d),l=n(623),p=Object(a.h)([Object(a.f)(o.f,u.f),i.b,Object(a.e)(c.c)],(function(e,t,n){var a=e.widgetsClientSpecMapData,o=e.externalBaseUrl,i=e.requestUrl;return{buildSrc:function(e,c,u,d,p){void 0===p&&(p={});var f,g=a[u.widgetId]||{},v=s.a.merge({tpaInnerRouteConfig:null,extraQueryParams:{},appDefinitionId:""},p),m={compId:e,pageId:c,tpaCompData:u,options:v},b=s.a.assign.apply(s.a,Object(r.g)([{}],n.map((function(e){return e.getQueryParams(m)})))),h=v.tpaInnerRouteConfig?function(e,n){var a,c=Boolean(n.tpaPageUri&&!s.a.isNil(g.applicationId)&&g.applicationId===n.tpaApplicationId),u=Object(r.e)(((null==t?void 0:t.location.href)||i).replace(o,"").split("?"),1)[0],d=Object(r.e)(decodeURIComponent(u).split("?"),2),p=d[0],f=d[1],v=c&&Object(l.a)(p,n.tpaPageUri);return v&&(null===(a=g.appPage)||void 0===a?void 0:a.defaultPage)&&v.unshift(g.appPage.defaultPage),v?function(e,t,n){if(0===e.length)return t;var r=e.join("/"),a=new URL(t);(a.pathname+="/"+r,n)&&new URLSearchParams(n).forEach((function(e,t){return a.searchParams.append(t,e)}));return a.href}(v,e,f):e}(d,v.tpaInnerRouteConfig):d;try{(f=new URL(h)).pathname=s.a.trimEnd(f.pathname,"/")}catch(e){return""}return s.a.entries(b).forEach((function(e){var t=Object(r.e)(e,2),n=t[0],a=t[1];s.a.isNil(a)||f.searchParams.set(n,a)})),f.href}}}))},650:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(7),a=Object(r.h)([],(function(){var e={},t={};return{registerTpaSection:function(n,r){e[n]=r,t[r.appDefinitionId]=n},unregisterTpaSection:function(n){var r=e[n],a=null==r?void 0:r.appDefinitionId;delete e[n],a&&delete t[a]},getTpaSectionByAppDefinitionId:function(n){var r=t[n];return e[r]}}}))},651:function(e,t,n){"use strict";n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return b})),n.d(t,"f",(function(){return h})),n.d(t,"b",(function(){return I})),n.d(t,"e",(function(){return y})),n.d(t,"d",(function(){return O})),n.d(t,"h",(function(){return j})),n.d(t,"a",(function(){return P}));var r=n(0),a=n(7),o=n(33),i=n(26),c=n(45),u=n(453),d=n(280),s=n(460),l=n(287),p=n(9),f=n.n(p),g=n(32),v=n(30),m=Object(a.h)([Object(a.f)(i.f,l.f)],(function(e){var t=e.siteRevision,n=e.viewMode,a=e.deviceType,o=e.locale,i=e.tpaDebugParams,c=e.timeZone;return{getQueryParams:function(e){var u=e.compId,d=e.pageId,s=e.tpaCompData,l=e.options.extraQueryParams,p=s.templateId,g=s.externalId,v=s.width,m=s.height;return Object(r.a)(Object(r.a)({pageId:d,compId:p||u,viewerCompId:u,siteRevision:""+t,viewMode:n,deviceType:a,externalId:g,locale:o,tz:c,width:f.a.isNumber(v)?""+v:null,height:f.a.isNumber(m)?""+m:null},i),l)}}})),b=Object(a.h)([Object(a.f)(i.f,l.f),o.a],(function(e,t){var n=e.widgetsClientSpecMapData;return{getQueryParams:function(e){var r=e.tpaCompData,a=e.options,o=(n[r.widgetId]||{}).appDefinitionId||a.appDefinitionId||"";return{instance:t.getAppInstanceByAppDefId(o)}}}})),h=Object(a.h)([Object(a.f)(i.f,l.f),c.b],(function(e,t){var n=e.requestUrl,r=e.extras;return{getQueryParams:function(){var e,a=new URL((null===(e=null==t?void 0:t.location)||void 0===e?void 0:e.href)||n);return{currency:r.currency,currentCurrency:a.searchParams.get("currency")||r.currency}}}})),I=Object(a.h)([u.b],(function(e){var t=e.viewerSessionId;return{getQueryParams:function(){return{vsi:t}}}})),y=Object(a.h)([g.a],(function(e){return{getQueryParams:function(){var t,n=e.getCurrentConsentPolicy();return{"consent-policy":(t=n).defaultPolicy&&f.a.every(t.policy)||!e._getConsentPolicyHeader()["consent-policy"]?void 0:decodeURIComponent(e._getConsentPolicyHeader()["consent-policy"])}}}})),O=Object(a.h)([v.a],(function(e){return{getQueryParams:function(){return{commonConfig:JSON.stringify(e.getCommonConfigForUrl())}}}})),j=Object(a.h)([d.a],(function(e){return{getQueryParams:function(){var t,n,r=null===(n=null===(t=e.getCurrentRouteInfo())||void 0===t?void 0:t.dynamicRouteData)||void 0===n?void 0:n.publicData;return{routerData:r?JSON.stringify(r):null}}}})),P=Object(a.h)([Object(a.f)(i.f,l.f),s.d,c.b],(function(e,t,n){var a=e.widgetsClientSpecMapData,o=e.appSectionParams,i=e.isMobileView,c=e.requestUrl,u=e.viewMode,d=e.externalBaseUrl;return{getQueryParams:function(e){var s,l=e.compId,p=e.tpaCompData,f=e.options,g={target:null,"section-url":null};if(p.widgetId){var v=a[p.widgetId],m=v.widgetUrl,b=v.mobileUrl,h=i&&b||m,I=((null===(s=t.get(l))||void 0===s?void 0:s.componentType)||"").toLowerCase().endsWith("section");p.isSection&&I&&("site"===u?(g["section-url"]=d+"/"+f.tpaInnerRouteConfig.tpaPageUri+"/",g.target="_top"):(g["section-url"]=h,g.target="_self"))}return Object(r.a)(Object(r.a)({},function(){var e;if(n){var t=new URL((null===(e=null==n?void 0:n.location)||void 0===e?void 0:e.href)||c).searchParams.get("appSectionParams");return JSON.parse(decodeURIComponent(t||"{}"))||{}}return o}()),g)}}}))},652:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n(7),o=n(287),i=n(318),c=n(179),u=n(560),d=Object(a.h)([i.a,o.c,Object(a.g)(c.a)],(function(e,t,n){return setTimeout((function(){e.addWindowMessageHandler({canHandleEvent:function(e){return!(!e.source||!Object(u.b)(Object(u.c)(e)))},handleEvent:function(e){return Object(r.b)(this,void 0,void 0,(function(){var a,o,i;return Object(r.d)(this,(function(r){return a=Object(u.c)(e),o=a.type,i=a.compId,u.a.includes(o)||(n&&n.tpa.addMessage({message:a,compId:i,contextId:"editor"}),t.handleMessage(e.source,a).catch((function(e){console.error("HandleTpaMessageError",o,"editor",i,e)}))),[2]}))}))}})}),1e3),{}}))}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/tpaCommons.d854dee6.chunk.min.js.map