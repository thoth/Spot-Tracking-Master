define(["gmaps"],function(t){function e(t,e){function o(){}o.prototype=e.prototype,t.superClass_=e.prototype,t.prototype=new o,t.prototype.constructor=t}var o,n,r={};return function(){var a="https://chart.googleapis.com/chart?chst=",c=t,l=c.Point,s=c.event,u=c.MarkerImage;o=function(t){c.Marker.call(this);var e=this,o=e.styleIcon=t.styleIcon;e.bindTo("icon",o),e.bindTo("shadow",o),e.bindTo("shape",o),e.setOptions(t)},e(o,c.Marker),n=function(t,e,o){function n(){var e=document.createElement("img"),o=document.createElement("img");s.addDomListenerOnce(o,"load",function(){var e=o.width,n=o.height;c.set(i,new u(t.getShadowURL(c),null,null,t.getShadowAnchor(c,e,n))),simage=null}),s.addDomListenerOnce(e,"load",function(){var o=e.width,n=e.height;c.set(l,new u(t.getURL(c),null,null,t.getAnchor(c,o,n))),c.set(d,t.getShape(c,o,n)),e=null}),e.src=t.getURL(c),o.src=t.getShadowURL(c)}var a,c=this,l="icon",i="shadow",d="shape",h=[];if(c.as_=function(t){h.push(t);for(a in e)t.set(a,e[a])},t!==r.CLASS){for(a in t.defaults)c.set(a,t.defaults[a]);c.setValues(e),c.set(l,t.getURL(c)),c.set(i,t.getShadowURL(c)),o&&o.as_(c),n(),c.changed=function(t){t!==l&&t!==d&&t!==i&&n()}}else c.setValues(e),c.changed=function(t){for(e[t]=c.get(t),a=0;a<h.length;a++)h[a].set(t,c.get(t))},o&&o.as_(c)},n.prototype=new c.MVCObject,r.CLASS={},r.MARKER={defaults:{text:"",color:"00ff00",fore:"000000",starcolor:null},getURL:function(t){var e,o=t.get("starcolor"),n=t.get("text"),r=t.get("color").replace(/#/,""),c=t.get("fore").replace(/#/,"");return e=o?a+"d_map_xpin_letter&chld=pin_star|":a+"d_map_pin_letter&chld=",n&&(n=n.substr(0,2)),e+=n+"|",e+=r+"|",e+=c,o&&(e+="|"+o.replace(/#/,"")),e},getShadowURL:function(t){return t.get("starcolor")?a+"d_map_xpin_shadow&chld=pin_star":a+"d_map_pin_shadow"},getAnchor:function(t,e,o){return new l(e/2,o)},getShadowAnchor:function(t,e,o){return new l(e/4,o)},getShape:function(t,e,o){var n={};n.coord=[e/2,o,7/16*e,5/8*o,5/16*e,7/16*o,7/32*e,5/16*o,5/16*e,1/8*o,.5*e,0,.6875*e,1/8*o,25/32*e,5/16*o,.6875*e,7/16*o,9/16*e,5/8*o];for(var r=0;r<n.coord.length;r++)n.coord[r]=Math.round(n.coord[r]);return n.type="poly",n}},r.BUBBLE={defaults:{text:"",color:"00ff00",fore:"000000"},getURL:function(t){var e=a+"d_bubble_text_small&chld=bb|";return e+=t.get("text")+"|",e+=t.get("color").replace(/#/,"")+"|",e+=t.get("fore").replace(/#/,"")},getShadowURL:function(t){return a+"d_bubble_text_small_shadow&chld=bb|"+t.get("text")},getAnchor:function(){return new google.maps.Point(0,42)},getShadowAnchor:function(){return new google.maps.Point(0,44)},getShape:function(t,e){var o={};return o.coord=[0,44,13,26,13,6,17,1,e-4,1,e,6,e,21,e-4,26,21,26],o.type="poly",o}}}(),{StyledMarker:o,StyledIcon:n,StyledIconTypes:r}});
//# sourceMappingURL=smarker.js
//# sourceMappingURL=smarker.js.map