(function(_){var ba,da,ta,ua,t,va,wa,ya,xa,za,Ba,Ca,Ga,Ha,Ia,La,Ka,Ja,Oa,Pa,Qa;ba=function(a){return k(_.q.top,a)||k(aa(),a)};da=function(a){var b=[];ca(a,function(a,d){d=(0,window.encodeURIComponent)(d);a=Array.isArray(a)?a.map(window.encodeURIComponent).join(","):(0,window.encodeURIComponent)(a);b.push(d+"="+a)});return b.join("&")};ta=function(a,b){for(var c=!1,d=new ea(.01),e={},f=0;f<b.length;e={v:e.v,o:e.o,G:e.G,w:e.w},f++){var g=void 0;g=(g=fa())?g.google_unique_id?++g.google_unique_id:g.google_unique_id=1:a.i++;try{e.v=new ha(b[f],g);c||(ia(a),c=!0);e.w=function(b){return function(){return ja(a,b.v)}}(e);var l=e.v.c.match(/\/?(\d+)/);e.o=l&&l[1]||"";e.G=_.q.setTimeout(function(a){return function(){var b={network:a.o,consent:JSON.stringify(ka(ma,a.o))};na(d,"glade_cmp_never_called",b)}}(e),1E4);var m=function(b){return function(c){_.q.clearTimeout(b.G);a.c=c;oa()?pa(qa(a.f,"ic",b.w)):b.w()}}(e);ra=!1;sa(ma,e.o,qa(a.f,"cc",m))}catch(n){}b[f].setAttribute("data-fetch","false")}};ua="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};t="undefined"!=typeof window&&window===this?this:"undefined"!=typeof window.global&&null!=window.global?window.global:this;va=function(){va=function(){};t.Symbol||(t.Symbol=wa)};wa=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();ya=function(){va();var a=t.Symbol.iterator;a||(a=t.Symbol.iterator=t.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ua(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return xa(this)}});ya=function(){}};xa=function(a){var b=0;return za(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};za=function(a){ya();a={next:a};a[t.Symbol.iterator]=function(){return this};return a};_.Aa=function(a){ya();var b=a[window.Symbol.iterator];return b?b.call(a):xa(a)};Ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b};if("function"==typeof Object.setPrototypeOf)Ca=Object.setPrototypeOf;else{var Da;a:{var Ea={V:!0},Fa={};try{Fa.__proto__=Ea;Da=Fa.V;break a}catch(a){}Da=!1}Ca=Da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}Ga=Ca;Ha=function(a,b){a.prototype=Ba(b.prototype);a.prototype.constructor=a;if(Ga)Ga(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Z=b.prototype};Ia=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};_.q=this;_.u=function(a){return"string"==typeof a};_.w=function(a){return"number"==typeof a};La=function(){if(null===Ja){a:{var a=_.q.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ka.test(a))break a;a=null}Ja=a||""}return Ja};Ka=/^[\w+/_-]+[=]{0,2}$/;Ja=null;_.Ma=function(){};_.Na=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b};Oa=function(a){return"array"==_.Na(a)};Pa=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.x=Date.now||function(){return+new Date};Qa=function(a,b){function c(){}c.prototype=b.prototype;a.Z=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ra=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var Ra,Va;Ra=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(_.u(a))return _.u(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.Sa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=_.u(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};_.Ta=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=_.u(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d};Va=function(){for(var a=Ua().length,b=[],c=0;c<a;c++)b[c]=0;return b};var Wa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var Za;a:{var $a=_.q.navigator;if($a){var ab=$a.userAgent;if(ab){Za=ab;break a}}Za=""};var y=function(a){y[" "](a);return a};y[" "]=_.Ma;var bb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var z=function(){this.b="";this.f=cb};z.prototype.c=!0;z.prototype.a=function(){return this.b};var db=function(a){return a instanceof z&&a.constructor===z&&a.f===cb?a.b:"type_error:TrustedResourceUrl"},cb={};var A=function(){this.F="";this.U=eb};A.prototype.c=!0;A.prototype.a=function(){return this.F};var fb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,eb={},gb=function(a){var b=new A;b.F=a;return b};gb("about:blank");var hb=function(a,b){a.src=db(b);(b=La())&&a.setAttribute("nonce",b)};var B=function(a,b){this.a=void 0!==a?a:0;this.b=void 0!==b?b:0};B.prototype.ceil=function(){this.a=Math.ceil(this.a);this.b=Math.ceil(this.b);return this};B.prototype.floor=function(){this.a=Math.floor(this.a);this.b=Math.floor(this.b);return this};B.prototype.round=function(){this.a=Math.round(this.a);this.b=Math.round(this.b);return this};var C=function(a,b){this.width=a;this.height=b};C.prototype.aspectRatio=function(){return this.width/this.height};C.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};C.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};C.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var jb=function(a){ib();var b=new z;b.b=a;return b},ib=_.Ma;var lb,aa,kb,pb,ob,ca,Ua,nb,k,sb;_.D=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{y(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}};lb=function(a){for(var b=_.q,c=0;b&&40>c++&&(!_.D(b)||!a(b));)b=kb(b)};aa=function(){var a=_.q;lb(function(b){a=b;return!1});return a};kb=function(a){try{var b=a.parent;if(b&&b!=a)return b}catch(c){}return null};_.mb=function(a,b){var c=a.createElement("script");hb(c,jb(b));(a=a.getElementsByTagName("script")[0])&&a.parentNode&&a.parentNode.insertBefore(c,a)};pb=function(a,b){if(!nb()){var c=Math.random();if(c<b)return c=ob(),a[Math.floor(c*a.length)]}return null};ob=function(){if(!_.q.crypto)return Math.random();try{var a=new window.Uint32Array(1);_.q.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}};ca=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};Ua=function(){var a=[];ca(qb,function(b,c){a.push(c)});return a};nb=bb(function(){return-1!=Za.indexOf("Google Web Preview")||1E-4>Math.random()});_.rb=function(a){if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec((0,window.decodeURIComponent)(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};k=function(a,b){try{return!(!a.frames||!a.frames[b])}catch(c){return!1}};sb=function(){for(var a=_.q,b=0;40>b;++b){if(k(a,"__cmpLocator"))return a;if(!(a=kb(a)))break}return null};var tb=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};tb.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};tb.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};tb.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var ub,vb;_.E=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,void 0)};ub=function(a,b,c){return a.removeEventListener?(a.removeEventListener(b,c,void 0),!0):!1};vb=function(a,b,c){c=void 0===c?{}:c;if("function"==_.Na(window.CustomEvent))var d=new window.CustomEvent(b,c);else d=window.document.createEvent("CustomEvent"),d.initCustomEvent(b,!!c.bubbles,!!c.cancelable,c.detail);a.dispatchEvent(d)};var wb={"AMP-CAROUSEL":"ac","AMP-FX-FLYING-CARPET":"fc","AMP-LIGHTBOX":"lb","AMP-STICKY-AD":"sa"},F=function(a){a=void 0===a?_.q:a;var b=a.context||a.AMP_CONTEXT_DATA;if(!b)try{b=a.parent.context||a.parent.AMP_CONTEXT_DATA}catch(c){}try{if(b&&b.pageViewId&&b.canonicalUrl)return b}catch(c){}return null},xb=function(){var a=F();return a&&a.initialIntersection},yb=function(){var a=F();return a&&/^\d+-\d+$/.test(a.amp3pSentinel)?a.amp3pSentinel:null},fa=function(){var a=F();return a?_.D(a.master)?a.master:null:null},zb=!!F()&&_.q!=_.q.top;_.Ab=function(a,b){if(!(window&&Math.random&&window.navigator))return-1;if(window.__google_ad_urls){var c=window.__google_ad_urls;try{if(c&&c.getOseId())return c.getOseId()}catch(e){}}if(!window.__google_ad_urls_id){c=window.google_enable_ose;if(!0===c)var d=2;else!1!==c&&(d=pb([0],a),null==d&&((d=pb([2],b))||(d=3)));if(!d)return 0;window.__google_ad_urls_id=d}return window.__google_ad_urls_id};var Bb=function(){},Cb="function"==typeof window.Uint8Array,G=[],Db=function(a,b){if(b<a.c){b+=a.f;var c=a.a[b];return c===G?a.a[b]=[]:c}if(a.b)return c=a.b[b],c===G?a.b[b]=[]:c},Eb=function(a,b){if(b<a.c){b+=a.f;var c=a.a[b];return c===G?a.a[b]=[]:c}c=a.b[b];return c===G?a.b[b]=[]:c};Bb.prototype.toString=function(){return this.a.toString()};var Gb=function(a){var b=a;a=Fb;b||(b=[]);this.f=-1;this.a=b;a:{if(b=this.a.length){--b;var c=this.a[b];if(c&&"object"==typeof c&&!Oa(c)&&!(Cb&&c instanceof window.Uint8Array)){this.c=b- -1;this.b=c;break a}}this.c=Number.MAX_VALUE}if(a)for(b=0;b<a.length;b++)if(c=a[b],c<this.c)c+=-1,this.a[c]=this.a[c]||G;else{var d=this.c+-1;this.a[d]||(this.b=this.a[d]={});this.b[c]=this.b[c]||G}};Qa(Gb,Bb);var Fb=[1,2,3,4];var Hb=function(){this.a=window.document||{cookie:""}};Hb.prototype.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0!==c||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date((0,_.x)()+1E3*c)).toUTCString();this.a.cookie=a+"="+b+e+d+c+f};Hb.prototype.get=function(a,b){for(var c=a+"=",d=(this.a.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Wa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};var Ib=function(){this.a=new Hb};Ib.prototype.get=function(a){a=this.a.get(a);return void 0===a?null:a};Ib.prototype.set=function(a,b){this.a.set(a,b,0,"","")};var Jb=function(){var a=new Ib;try{var b=a.get("DATA_USE_CONSENT")}catch(c){}if(!b)return null;try{return new Gb(b?JSON.parse(b):null)}catch(c){return null}};_.Kb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;_.Lb=function(a){return a?(0,window.decodeURI)(a):a};var Mb=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var qb={ia:0,fa:1,ea:2,da:3,oa:4,pa:5,ga:6};_.Nb=function(a,b){var c=!1,d=!1;d=void 0===d?!1:d;c=void 0===c?!1:c;a.google_image_requests||(a.google_image_requests=[]);var e=a.document.createElement("img");if(c){var f=function(){if(c){var b=a.google_image_requests,d=Ra(b,e);0<=d&&Array.prototype.splice.call(b,d,1)}ub(e,"load",f);ub(e,"error",f)};_.E(e,"load",f);_.E(e,"error",f)}d&&(e.referrerPolicy="no-referrer");e.src=b;a.google_image_requests.push(e)};var ra=!1,Ob=function(a){var b=Jb();if(!b)return 0;if(Db(b,7))return 4;if(6048E5<(0,_.x)()-Db(b,5))return 0;if(a){var c=Eb(b,3);if(0<=Ra(c,a))return 2;b=Eb(b,4);if(0<=Ra(b,a))return 3}return 1},Pb=bb(function(){var a=/[?&]fcconsent=alwaysshow([&#]|$)/;try{return a.test(_.q.top.location.href)}catch(b){}return a.test(_.q.location.href)}),Qb={},H=null,I=null,Sb=function(){var a=Rb();a&&_.q.setTimeout&&.01>Math.random()&&_.q.setTimeout(function(){_.q.__cmp("getConsentData",null,function(a){a="https://pagead2.googlesyndication.com/pagead/gen_204?id=iabcmp&vcd="+JSON.stringify(a);_.Nb(_.q,a)})},1E4);return a},Rb=function(){if(_.q.__cmp){var a=!1;try{_.q.__cmp("ping",null,function(){a=!0})}catch(b){}if(a)return!0}I=sb();return!!I},Tb=1,Ub=function(){if(!_.q.__cmp&&I){try{if(I.__cmp){_.q.__cmp=I.__cmp;return}}catch(a){}_.q.__cmp=function(a,b,c){var d="google_cmp_callback_"+Tb;Tb++;a={__cmpCall:{command:a,parameter:b,callId:d}};Qb[d]=c;I.postMessage(a,"*")};_.E(_.q,"message",function(a){a=a.data;if("string"==typeof a)try{a=JSON.parse(a)}catch(b){}(a=a.__cmpReturn)&&"function"==typeof Qb[a.callId]&&(Qb[a.callId](a.returnValue,a.success),delete Qb[a.callId])})}},Vb=function(a,b){var c=void 0===b?function(){}:b,d=ba("GoogleSetNPA"),e=Va();e[0]=a?1:2;e[6]=1;e[5]=d?1:2;var f=!1;_.q.__cmp("ping",null,function(a,b){b&&a&&(f=!!a.gdprAppliesGlobally)});if(f||a){var g=function(a){a&&(a.gdprApplies?(e[6]=8,H={C:5,s:d,u:!1,m:e.join("."),aa:a.consentData},c(H)):(H={C:5,s:d,u:!1,m:e.join(".")},c(H)))};a=aa().GoogleMostRecentCmpConsentData;var l=!!a;a&&g(a);_.q.__cmp("getConsentData",null,function(a,b){b&&(aa().GoogleMostRecentCmpConsentData=a,l||g(a))})}else H={C:5,s:d,u:!1,m:e.join(".")},c(H)},ka=function(a,b){var c=Va();Pb()&&(a=!0);c[0]=a?1:2;var d=ba("GoogleSetNPA");c[5]=d?1:2;if(ra&&Sb())return Ub(),Vb(a),H||(c[6]=7,H={C:5,s:d,u:!0,m:c.join("."),aa:"NCS"}),H;var e=ba("GooglePauseAdRequests");c[4]=e?1:2;var f=k(_.q.top,"googlefcPresent");c[1]=f?1:2;var g=Ob(b);0!=g?b={J:g,K:3}:(g=_.q.top,b={J:k(g,"googlefcInactive")?4:b&&k(g,"googlefcPA-"+b)?2:k(g,"googlefcNPA")?3:0,K:2});g=b;b=g.J;c[g.K]=b;if(!d)a:switch(b){case 2:case 4:d=!1;break a;case 3:d=!0;break a;case 1:d=a;break a;default:d=(void 0===f?!1:f)&&a}return{C:b,s:d,u:e||0==b&&a&&f,m:c.join(".")}},sa=function(a,b,c){if(ra&&Sb())Ub(),Vb(a,c);else{var d=ka(a,b);d.u?_.q.setTimeout(function(){sa(a,b,c)},1E3):c(d)}};var Wb,Yb,dc,cc;Wb=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;Yb=function(){var a=(this.b=_.q)||_.q;this.c=a.top==a?1:_.D(a.top)?2:3;3!=this.c&&(a=_.q.top.document,this.f=a.referrer,Date.parse(a.lastModified));this.a=_.Xb(this.b)};_.Xb=function(a){var b=a||_.q,c=[],d=null;do{var e=b;if(_.D(e)){var f=e.location.href;d=e.document&&e.document.referrer||null}else f=d,d=null;c.push(new cc(f||""));try{b=e.parent}catch(g){b=null}}while(b&&e!=b);e=0;for(b=c.length-1;e<=b;++e)c[e].depth=b-e;e=a||_.q;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==c.length-1)for(a=1;a<c.length;++a)b=c[a],b.url||(b.url=e.location.ancestorOrigins[a-1]||"",b.L=!0);return c};dc=function(a,b){this.a=a;this.b=b};cc=function(a,b){this.url=a;this.L=!!b;this.depth=_.w(void 0)?void 0:null};var ec,gc,fc,hc,ic;_.J=function(a,b,c){this.h=c||4E3;this.c=a||"&";this.g=b||",$";this.f=!1;this.b={};this.i=0;this.a=[]};ec=function(a,b){var c={};c[a]=b;return[c]};gc=function(a,b,c,d,e){var f=[];ca(a,function(a,l){(a=fc(a,b,c,d,e))&&f.push(l+"="+a)});return f.join(b)};fc=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(fc(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?(0,window.encodeURIComponent)(gc(a,b,c,d,e+1)):"...";return(0,window.encodeURIComponent)(String(a))};hc=function(a,b,c,d){a.a.push(b);a.b[b]=ec(c,d)};_.L=function(a,b,c){var d=a.i++;b=ec(b,c);a.a.push(d);a.b[d]=b};_.jc=function(a,b,c){b="https://"+b+c;var d=ic(a)-c.length;if(0>d)return"";a.a.sort(function(a,b){return a-b});c=null;for(var e="",f=0;f<a.a.length;f++)for(var g=a.a[f],l=a.b[g],m=0;m<l.length;m++){if(!d){c=null==c?g:c;break}var n=gc(l[m],a.c,a.g);if(n){n=e+n;if(d>=n.length){d-=n.length;b+=n;e=a.c;break}else a.f&&(e=d,n[e-1]==a.c&&--e,b+=n.substr(0,e),e=a.c,d=0);c=null==c?g:c}}a="";null!=c&&(a=e+"trn="+c);return b+a+""};ic=function(a){var b=1,c;for(c in a.b)b=c.length>b?c.length:b;return a.h-3-b-a.c.length-1};var ea=function(a){this.a=a;this.b=Math.random()},na=function(a,b,c,d,e){if((d?a.b:Math.random())<(e||a.a))try{if(c instanceof _.J)var f=c;else f=new _.J,ca(c,function(a,b){_.L(f,b,a)});var g=_.jc(f,"pagead2.googlesyndication.com","/pagead/gen_204?id="+b+"&");g&&_.Nb(_.q,g)}catch(l){}};var kc=null;var mc;_.lc=function(){var a=_.q.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):(0,_.x)()};mc=function(){var a=void 0===a?_.q:a;return(a=a.performance)&&a.now?a.now():null};var nc=function(a,b,c,d,e){this.label=a;this.type=b;this.value=c;this.duration=void 0===d?0:d;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=e};var M,oc;M=_.q.performance;oc=!!(M&&M.mark&&M.measure&&M.clearMarks);_.pc=bb(function(){var a;if(a=oc){var b;if(null===kc){kc="";try{a="";try{a=_.q.top.location.hash}catch(c){a=_.q.location.hash}a&&(kc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=kc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});_.qc=function(a,b){this.b=[];this.g=b||_.q;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.b=b.google_js_reporting_queue,c=b.google_measure_js_timing);this.a=(0,_.pc)()||(null!=c?c:Math.random()<a)};_.rc=function(a){a&&M&&(0,_.pc)()&&(M.clearMarks("goog_"+a.uniqueId+"_start"),M.clearMarks("goog_"+a.uniqueId+"_end"))};_.N=function(a,b,c,d,e){a.a&&(b=new nc(b,4,c,void 0===d?0:d,e),a.a&&a.b.push(b))};_.qc.prototype.start=function(a,b){if(!this.a)return null;var c=mc()||_.lc();a=new nc(a,b,c);b="goog_"+a.uniqueId+"_start";M&&(0,_.pc)()&&M.mark(b);return a};var sc=function(a,b,c){if(a.a){b=String(b);b=a.start(b,3);try{c()}catch(d){throw _.rc(b),d;}a.a&&_.w(b.value)&&(c=mc()||_.lc(),b.duration=c-b.value,c="goog_"+b.uniqueId+"_end",M&&(0,_.pc)()&&M.mark(c),a.a&&a.b.push(b))}else c()};var tc=function(a,b){this.c=a;this.f=b;this.a=null;this.g=this.b},uc=function(a,b){a.a=b},wc=function(a,b,c,d,e){try{var f=c()}catch(l){c=a.f;try{_.rc(void 0);var g=vc(l);c=(e||a.g).call(a,b,g,void 0,d)}catch(m){a.b(217,m)}if(!c)throw l;}return f},qa=function(a,b,c){return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return wc(a,b,function(){return c.apply(void 0,e)},void 0,void 0)}};tc.prototype.b=function(a,b,c,d,e){e=e||"glade-err";try{var f=new _.J;f.f=!0;hc(f,1,"context",a);b.error&&b.meta&&b.id||(b=vc(b));b.msg&&hc(f,2,"msg",b.msg.substring(0,512));b.file&&hc(f,3,"file",b.file);0<b.line&&hc(f,4,"line",b.line);var g=b.meta||{};if(this.a)try{this.a(g)}catch(K){}if(d)try{d(g)}catch(K){}b=[g];f.a.push(5);f.b[5]=b;var l=_.Xb(),m=new cc(_.q.location.href,!1);b=null;var n=l.length-1;for(d=n;0<=d;--d){var v=l[d];!b&&Wb.test(v.url)&&(b=v);if(v.url&&!v.L){m=v;break}}v=null;var T=l.length&&l[n].url;0!=m.depth&&T&&(v=l[n]);var U=new dc(m,v);U.b&&hc(f,6,"top",U.b.url||"");hc(f,7,"url",U.a.url||"");na(this.c,e,f,!1,c)}catch(K){try{na(this.c,e,{context:"ecmserr",rctx:a,msg:xc(K),url:U&&U.a.url},!1,c)}catch(la){}}return this.f};var vc=function(a){return new yc(xc(a),a.fileName,a.lineNumber)},xc=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b},yc=function(a,b,c){Mb.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};Ha(yc,Mb);var zc=function(a){return"CSS1Compat"==a.compatMode?a.documentElement:a.body};var Ac=function(a,b,c){var d="script";d=void 0===d?"":d;var e=a.createElement("link");try{e.rel="preload";if(b instanceof z)var f=db(b);else{if(b instanceof A)var g=b instanceof A&&b.constructor===A&&b.U===eb?b.F:"type_error:SafeUrl";else{if(b instanceof A)var l=b;else b="object"==typeof b&&b.c?b.a():String(b),fb.test(b)||(b="about:invalid#zClosurez"),l=gb(b);g=l.a()}f=g}e.href=f}catch(m){return}d&&(e.as=d);c&&(e.nonce=c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(e)}catch(m){}};var Bc=/^\.google\.(com?\.)?[a-z]{2,3}$/,Cc=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,Dc=function(a){return Bc.test(a)&&!Cc.test(a)},O=_.q,Ec=function(a){a="https://"+("adservice"+a+"/adsid/integrator.js");var b=["domain="+(0,window.encodeURIComponent)(_.q.location.hostname)];P[3]>=(0,_.x)()&&b.push("adsid="+(0,window.encodeURIComponent)(P[1]));return a+"?"+b.join("&")},P,Q,R=function(){O=_.q;P=O.googleToken=O.googleToken||{};var a=(0,_.x)();P[1]&&P[3]>a&&0<P[2]||(P[1]="",P[2]=-1,P[3]=-1,P[4]="",P[6]="");Q=O.googleIMState=O.googleIMState||{};Dc(Q[1])||(Q[1]=".google.com");Oa(Q[5])||(Q[5]=[]);"boolean"==typeof Q[6]||(Q[6]=!1);Oa(Q[7])||(Q[7]=[]);_.w(Q[8])||(Q[8]=0)},Gc=function(){var a=Fc;R();Dc(a)&&(Q[1]=a)},S={D:function(){return 0<Q[8]},W:function(){Q[8]++},X:function(){0<Q[8]&&Q[8]--},Y:function(){Q[8]=0},sa:function(){return!1},I:function(){return Q[5]},H:function(a){try{a()}catch(b){_.q.setTimeout(function(){throw b;},0)}},M:function(){if(!S.D()){var a=_.q.document,b=function(b){b=Ec(b);a:{try{var c=La();break a}catch(l){}c=void 0}var d=c;Ac(a,b,d);c=a.createElement("script");c.type="text/javascript";d&&(c.nonce=d);c.onerror=function(){return _.q.processGoogleToken({},2)};b=jb(b);hb(c,b);try{(a.head||a.body||a.documentElement).appendChild(c),S.W()}catch(l){}},c=Q[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);_.q.setTimeout(function(){return _.q.processGoogleToken(d,1)},1E3)}}},Hc=function(a){R();var b=O.googleToken[5]||0;a&&(0!=b||P[3]>=(0,_.x)()?S.H(a):(S.I().push(a),S.M()));P[3]>=(0,_.x)()&&P[2]>=(0,_.x)()||S.M()},pa=function(a){_.q.processGoogleToken=_.q.processGoogleToken||function(a,c){var b=a;b=void 0===b?{}:b;c=void 0===c?0:c;a=b.newToken||"";var e="NT"==a,f=(0,window.parseInt)(b.freshLifetimeSecs||"",10),g=(0,window.parseInt)(b.validLifetimeSecs||"",10),l=b["1p_jar"]||"";b=b.pucrd||"";R();1==c?S.Y():S.X();var m=O.googleToken=O.googleToken||{},n=0==c&&a&&_.u(a)&&!e&&_.w(f)&&0<f&&_.w(g)&&0<g&&_.u(l);e=e&&!S.D()&&(!(P[3]>=(0,_.x)())||"NT"==P[1]);var v=!(P[3]>=(0,_.x)())&&0!=c;if(n||e||v)e=(0,_.x)(),f=e+1E3*f,g=e+1E3*g,1E-5>Math.random()&&_.Nb(_.q,"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+c),m[5]=c,m[1]=a,m[2]=f,m[3]=g,m[4]=l,m[6]=b,R();if(n||!S.D()){c=S.I();for(a=0;a<c.length;a++)S.H(c[a]);c.length=0}};Hc(a)},oa=function(){var a=_.q.navigator&&_.q.navigator.userAgent||"";return!/Safari/.test(a)||/Chrome|Coast|Opera|Edge|Silk|Android/.test(a)||11>((/Version\/([\d]+)/.exec(a)||[])[1]||"")?!1:/iPhone|iPad|iPod/.test(a)?!0:(a=(/Mac OS X ([\d_]+)/.exec(a)||[])[1]||"",""==a||"10_13"<=a)};var Ic=function(a){var b=window,c=function(b){try{var c=JSON.parse(b.data)}catch(g){return}!c||"gl-md"!==c.googMsgType||a(c,b)};_.E(b,"message",c);var d=!1;return function(){var a=!1;d||(d=!0,a=ub(b,"message",c));return a}};var Jc=function(){this.c=_.Ab(0,0);this.a=null;this.b=[]};Jc.prototype.register=function(a){this.c&&(this.a?this.a.registerAdBlock(a.src,10,"html",a):this.b.push(a))};var Kc=function(a,b){this.a=a;this.b=b};var Lc=function(){_.qc.call(this,0);this.f=mc()||_.lc();this.a=!!_.rb(_.q.document.URL)||.01>Math.random();window.google_measure_js_timing=this.a;this.c=function(){}};Ha(Lc,_.qc);var Mc=function(a){this.timing=new Lc;this.a=new Jc;this.f=a;this.i=1;a:{var b=window.gaGlobal;if(b&&(a=b.cid,b=+b.hid,_.u(a)&&b)){a=new Kc(a,b);break a}a=null}this.b=a},ia=function(a){a.j=new Yb;var b=xb();if(!(b=b&&Pa(b.rootBounds)?new C(b.rootBounds.width,b.rootBounds.height):null)){var c=window.top;try{var d=zc(c.document);b=new C(d.clientWidth,d.clientHeight)}catch(e){b=new C(-12245933,-12245933)}}a.l=b};t.Object.defineProperties(Mc.prototype,{correlator:{configurable:!0,enumerable:!0,get:function(){var a=window.glade.correlator;(0,window.isFinite)(a)&&0==a%1&&0<window.glade.correlator||(window.glade.correlator=Math.floor(4503599627370496*Math.random()));return window.glade.correlator}},g:{configurable:!0,enumerable:!0,get:function(){return this.j}},h:{configurable:!0,enumerable:!0,get:function(){return this.l}}});_.V=function(a,b,c,d){d=void 0===d?!0:d;return qa(a.f,b,function(e){for(var f=[],g=0;g<arguments.length;++g)f[g-0]=arguments[g];sc(a.timing,b,function(){return c.apply(null,f instanceof Array?f:Ia(_.Aa(f)))});d&&a.timing.c()})};var Nc=function(a,b){var c=window.document.createElement("IFRAME");c.src=a;c.scrolling="no";c.marginWidth="0";c.marginHeight="0";c.style.margin="0";c.style.border="0";_.V(b,"gac",function(){var a=F(),b;a&&(b=a.addContextToIframe)&&"function"==_.Na(b)&&b(c)})();c.style.width="100%";c.style.height="100%";a=window.document.createElement("div");a.appendChild(c);return a};var ha=function(a,b){this.a=a;this.j=b;var c=a.getAttribute("data-ad-unit-path");if(!c)throw Error();b=a.hasAttribute("data-amp-ad");var d=a.hasAttribute("width")?a.getAttribute("width"):null,e=a.hasAttribute("height")?a.getAttribute("height"):null,f=a.hasAttribute("data-request-width")?Number(a.getAttribute("data-request-width")):null,g=a.hasAttribute("data-request-height")?Number(a.getAttribute("data-request-height")):null,l=a.getAttribute("data-click-url")||"",m=a.getAttribute("data-json");m=m?JSON.parse(m):{};var n=(n=m.gladeEids)&&_.u(n)?n.split(","):[];var v=m.tagForChildDirectedTreatment;v=0===v||1===v?v:null;var T=m.tagForUnderAgeOfConsent;T=0===T||1===T?T:null;var U=!(!m.requestNonPersonalizedAds&&!m.requsetNonPersonalizedAds);m.requsetNonPersonalizedAds&&na(new ea(.01),"glade_npa_report",{iu:c});var K=m.targeting||{},la=m.categoryExclusions||[],gd=!!m.cookieOptOut;m=a.getAttribute("data-page-url")||"";d=Oc(d);e=Oc(e);null!=f&&Pc(f);null!=g&&Pc(g);K=Qc(K);la=Rc(la);la.length&&(K.excl_cat=la);this.c=c;this.P=gd;this.O="s"==d?a.clientWidth+"px":"f"==d?"100%":d+"px";this.ba="s"==e?a.clientHeight+"px":"f"==e?"100%":e+"px";this.l=null!=f?f:_.w(d)?d:a.clientWidth;this.i=null!=g?g:_.w(e)?e:a.clientHeight;this.b=b;this.h=n;this.A=v;this.B=T;this.T=U;this.N=K;c=[this.c,this.l+"x"+this.i,this.a.id||""];f=[];g=0;for(n=this.a;25>g&&n;g++,n=n.parentNode)f.push(9!=n.nodeType&&n.id||"");c.push(f.join());c=c.join(":");f=c.length;if(0==f)c=0;else{g=305419896;for(n=0;n<f;n++)g^=(g<<5)+(g>>2)+c.charCodeAt(n)&4294967295;c=0<g?g:4294967296+g}this.$=c;this.R=m;this.g=l;if(b){var p=F();var r;p=(p=p&&(r=p.initialLayoutRect)&&_.w(r.top)&&_.w(r.left)&&_.w(r.width)&&_.w(r.height)?new tb(r.left,r.top,r.width,r.height):null)?new B(p.left,p.top):(p=xb())&&Pa(p.rootBounds)?new B(p.rootBounds.left+p.boundingClientRect.left,p.rootBounds.top+p.boundingClientRect.top):null}else if(a)try{p=new B(0,0);r=_.q;do{if(r==r.top){l=b=void 0;var Xa=a.ownerDocument,Ya=new B(0,0);if(a!=zc(Xa)){var Zb=a.getBoundingClientRect();b=void 0===b?_.q:b;var $b=Xa.scrollingElement||zc(Xa);l=new B(b.pageXOffset||$b.scrollLeft,b.pageYOffset||$b.scrollTop);Ya.a=Zb.left+l.a;Ya.b=Zb.top+l.b}var ac=Ya}else{var bc=a.getBoundingClientRect();ac=new B(bc.left,bc.top)}b=ac;p.a+=b.a;p.b+=b.b}while(r&&r!=r.top&&r!=r.parent&&(a=r.frameElement)&&(r=r.parent))}catch(Ud){p=new B(-12245933,-12245933)}else p=null;this.f=p},Pc=function(a){if(!(0,window.isFinite)(a)||0!=a%1||0>a)throw Error();},Oc=function(a){if(null==a)return"s";if("fill"==a)return"f";a=Number(a);Pc(a);return a},Qc=function(a){if(!Pa(a))return{};ca(a,function(b,c){"excl_cat"!=c?Oa(b)?b.forEach(function(a,c){_.u(a)||b.splice(c,1)}):_.u(b)||delete a[c]:delete a[c]});return a},Rc=function(a){return _.u(a)?[a]:Oa(a)?a.filter(function(a){return _.u(a)}):[]};_.Sc=y("36");var Tc=function(a,b){var c=new _.J(void 0,void 0,4096),d=y("");_.L(c,"gdfp_req",1);_.L(c,"glade_req",1);_.L(c,"glv",_.Sc+(d?"c":""));_.L(c,"dt",(0,_.x)());_.L(c,"output","html");_.L(c,"iu",b.c);_.L(c,"sz",b.l+"x"+b.i);var e;R();(e=P[1])&&_.L(c,"adsid",e);R();(e=P[6])&&_.L(c,"pucrd",e);R();(e=P[4])&&_.L(c,"jar",e);a.c&&(a.c.s&&_.L(c,"npa","1"),(e=a.c.m)&&_.L(c,"guci",e));_.L(c,"sfv","1-0-29");null!=b.A&&_.L(c,"tfcd",b.A);null!=b.B&&_.L(c,"tfua",b.B);b.T&&_.L(c,"npa",1);b.P&&_.L(c,"co",1);_.L(c,"correlator",a.correlator);e=[];d&&e.push(d);b.h.length&&e.push.apply(e,b.h);e.length&&_.L(c,"eid",e);_.L(c,"adk",b.$);_.L(c,"biw",a.h.width);_.L(c,"bih",a.h.height);b.f&&(_.L(c,"adx",b.f.a),_.L(c,"ady",b.f.b));d=0;void 0===_.q.postMessage&&(d|=1);d&&_.L(c,"osd",d);_.L(c,"oid",a.a.c);d=_.q.devicePixelRatio;(d=_.w(d)?+d.toFixed(3):null)&&_.L(c,"u_sd",d);_.L(c,"ifi",b.j);a.b&&(_.L(c,"ga_cid",a.b.a),_.L(c,"ga_hid",a.b.b));d=_.q.document;(d={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[d.visibilityState||d.webkitVisibilityState||d.mozVisibilityState||""]||0)&&_.L(c,"vis",d);b.b&&(_.L(c,"is_amp",1),(d=(d=F())&&d.mode?+d.mode.version||null:null)&&_.L(c,"amp_v",d),d=window.location.href,zb&&!/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(d)&&_.L(c,"ati",1));if(b.b||F()){if((d=F())&&d.container){d=d.container.split(",");e=[];for(var f=0;f<d.length;f++)e.push(wb[d[f]]||"x");d=e.join()}else d=null;d&&_.L(c,"act",d);(d=F(_.q))&&Pa(d.data)&&_.u(d.data.type)?(d=d.data.type.toLowerCase(),d="doubleclick"==d||"adsense"==d?null:d):d=null;d&&_.L(c,"apn",d.substr(0,10))}b.g&&_.L(c,"click",b.g);0<Object.keys(b.N).length&&_.L(c,"scp",da(b.N));d=b.R;var g=a.g.a[0];(e=g.depth)&&_.L(c,"nhd",e);f=F();var l=d||e&&!!f&&f.canonicalUrl||g.url;l&&_.L(c,"url",l);e&&(l=a.g,(l=l.a[Math.max(l.a.length-1,0)].url)&&(l=d?_.Lb(l.match(_.Kb)[3]||null):l)&&_.L(c,"top",l));d&&g.url!=d&&(g=g.url)&&_.L(c,"loc",g);(!e||!d||b.b||f)&&(a=(b=F())&&b.referrer||a.g.f)&&_.L(c,"ref",a);return _.jc(c,"securepubads.g.doubleclick.net","/gampad/ads?")};var ja=function(a,b){var c=Tc(a,b);if(b.b){var d=yb();d&&(c+="#amp3pSentinel="+(0,window.encodeURIComponent)(d))}var e=Nc(c,a);e.style.width=b.O;e.style.height=b.ba;sc(a.timing,"ifi-"+b.j,function(){return b.a.appendChild(e)});c=e.firstChild;Uc(a,b,c);a.a.register(c)},Uc=function(a,b,c){var d=_.V(a,"ilh",function(){var e=mc();e&&_.N(a.timing,"al",e,0,void 0);c.removeEventListener("al",d);vb(b.a,"gladeAdRendered",{bubbles:!0})});c.addEventListener("load",d,!0);var e=null;e=Ic(_.V(a,"amh",function(d,g){g=g.source;for(var f=5;g&&g!=g.parent&&g!=c.contentWindow&&0<f--;)g=g.parent;g==c.contentWindow&&((g=mc())&&_.N(a.timing,"arm",g,0,void 0),ub(window,"message",e),g={empty:d.empty},g.empty||(!d.is_afc&&d.creative_ids&&d.adgroup2_ids&&(g.creativeId=d.creative_ids[0],g.lineItemId=d.adgroup2_ids[0]),d.advertiser_ids&&(g.advertiserId=d.advertiser_ids[0]),d.campaign_ids&&(g.campaignId=d.campaign_ids[0])),vb(b.a,"gladeAdFetched",{bubbles:!0,detail:g}))}))};var Vc=function(){var a=_.rb(_.q.document.URL);a=new tc(new ea(a?1:.01),!a);uc(a,function(a){a.glv=_.Sc});return a};var Xc,Yc;_.Wc="https://securepubads.g.doubleclick.net/static/glade/extra_"+_.Sc+".js";Xc=function(a){window.glade._=_.V(a,"eb",function(b){b(_);window.glade._(a);delete window.glade._});_.mb(window.document,_.Wc)};Yc=function(a){window.setTimeout(_.V(a,"el",function(){return Xc(a)}),50)};var Fc=y(".google.co.in"),ma="true"==y("");(function(){window.glade||(window.glade={});if(!window.glade.run){var a=Vc();wc(a,"cs",function(){var b=new Mc(a);window.glade.run=_.V(b,"cr",function(a){a&&"false"===a.getAttribute("data-fetch")||ta(b,a?[a]:window.document.querySelectorAll('[data-glade]:not([data-fetch="false"])'))});Yc(b);vb(window,"gladeReady")})}window.glade.run&&(Fc&&Gc(),pa(null),window.glade.run())})();})({})
