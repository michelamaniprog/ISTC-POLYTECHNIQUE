// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_seven(i,t,k){var l=jQuery;var j=i.distance||5;var c=i.cols;var s=i.rows;var a=i.duration*2;var m=i.blur||50;var w=k.find("ul");var z=[];var r=[];k=k.parent().css({overflow:"visible"});var p=!i.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;var h;var d=l("<div>").addClass("ws_effect");var u=l("<div>").addClass("ws_zoom");k.append(d,u);var e={t:l(window).scrollTop(),l:l(window).scrollLeft(),w:l(window).width(),h:l(window).height()};jQuery.extend(jQuery.easing,{easeOutQuart:function(B,C,A,E,D){return -E*((C=C/D-1)*C*C*C-1)+A},easeInExpo:function(B,C,A,E,D){return(C==0)?A:E*Math.pow(2,10*(C/D-1))+A},easeInCirc:function(B,C,A,E,D){return -E*(Math.sqrt(1-(C/=D)*C)-1)+A}});function o(B,A){return Math.abs((A%2?1:0)+((A-A%2)/2)-B)/A}function y(E,D,F,A){var C=(D>=A)?(A)/(D):1;var B=(E>=F)?(F)/(E):1;return{l:B,t:C,m:Math.min(B,C)}}function q(L,A,D,M){var H=d.width(),J=d.height(),K=j*H/c,F=j*J/s,G=a*(D?4:5)/(c*s),C=D?"easeInExpo":"easeOutQuart";var B=e.h+e.t-J/s,I=e.w+e.l-H/c,N=d.offset().top+d.height(),E=d.offset().left+d.width();if(B<N){B=N}if(I<E){I=E}l(L).each(function(V){var S=V%c,P=Math.floor(V/c),T=a*0.2*(o(S,c)*45+P*4)/(c*s),R=d.offset().left+e.l+K*S-H*j/2+K,U=d.offset().top+e.t+F*P-J*j/2+F,O=y(R,U,I,B),W={opacity:1,left:H*S/c,top:J*P/s,width:H/c,height:J/s,zIndex:Math.ceil(100-o(S,c)*100)},Z={opacity:0,left:(K*S-H*j/2)*O.l,top:(F*P-J*j/2)*O.t,width:K*O.m,height:F*O.m},Y={left:-(H*S/c),top:-(J*P/s),width:H,height:J},X={left:-K*S*O.m,top:-F*P*O.m,width:j*H*O.m,height:j*J*O.m};if(!D){var Q=W;W=Z;Z=Q;Q=Y;Y=X;X=Q}l(this).css(W).delay(T).animate(Z,G,C,D?function(){l(this).hide()}:{});l(this).find("img").css(Y).delay(T).animate(X,G,C)});if(D){l(A).each(function(Q){var R=Q%c;var P=Math.floor(Q/c);var O=a*0.2+a*0.15*(o(R,c)*35+P*4)/(c*s);l(this).css({left:H/2,top:J/2,width:0,height:0,zIndex:Math.ceil(100-o(R,c)*100)}).delay(O).animate({left:H*R/c,top:J*P/s,width:H/c+1,height:J/s+1},a*4/(c*s),"easeOutBack");l(this).find("img").css({left:0,top:0,width:0,height:0}).delay(O).animate({left:-(H*R/c),top:-(J*P/s),width:H,height:J},a*4/(c*s),"easeOutBack")});u.delay(a*0.1).animate({opacity:1},a*0.2,"easeInCirc")}setTimeout(M,D?a*0.5:a*0.4);return{stop:function(){M()}}}var g;this.go=function(I,C){if(g){return C}var H=(C==0&&I!=C+1)||(I==C-1)?false:true;e.t=l(window).scrollTop();e.l=l(window).scrollLeft();e.w=l(window).width();e.h=l(window).height();var A=Math.max((i.width||d.width())/(i.height||d.height())||3,3);c=c||Math.round(A<1?3:3*A);s=s||Math.round(A<1?3/A:3);d.css({position:"absolute",width:k.width(),height:k.height(),left:0,top:0,zIndex:8});u.css({position:"absolute",width:k.width(),height:k.height(),top:0,left:0,zIndex:2});for(var F=0;F<c*s;F++){var E=F%c;var D=Math.floor(F/c);l(z[F]=document.createElement("div")).css({position:"absolute",overflow:"hidden"}).appendTo(d).append(l("<img>").css({position:"absolute"}).attr("src",t.get(H?C:I).src));if(H){l(r[F]=document.createElement("div")).css({position:"absolute",overflow:"hidden"}).appendTo(u).append(l("<img>").css({position:"absolute"}).attr("src",t.get(I).src))}}z=l(z);if(H){r=l(r)}if(H){u.css("opacity",0);var B;if(p){try{document.createElement("canvas").getContext("2d").getImageData(0,0,1,1)}catch(G){p=0}w.hide();h='<canvas width="'+k.width()+'" height="'+k.height()+'"/>';h=l(h).css({"z-index":1,position:"absolute",width:"100%",height:"100%",left:0,top:0}).appendTo(k);B=x(l(t.get(C)),m,h.get(0))}else{p=0;B=x(l(t.get(C)),8)}}else{u.append(l("<img>").css({position:"absolute",width:"100%",height:"100%"}).attr("src",t.get(C).src))}g=new q(z,r,H,function(){w.css({left:-I+"00%"}).stop(true,true).show();d.empty().removeAttr("style");u.empty().removeAttr("style");if(h){h.remove()}g=0});return I};function x(B,D,C){var E=(parseInt(B.parent().css("z-index"))||0)+1;if(p){var A=C.getContext("2d");A.drawImage(B.get(0),0,0);if(!b(A,0,0,C.width,C.height,D)){return 0}return l(C)}}var n=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];var v=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function b(ap,X,V,A,B,ag){if(isNaN(ag)||ag<1){return}ag|=0;var ak;try{ak=ap.getImageData(X,V,A,B)}catch(ao){console.log("error:unable to access image data: "+ao);return false}var F=ak.data;var ae,ad,am,aj,M,P,J,D,E,U,K,W,S,aa,af,N,I,O,Q,Z;var an=ag+ag+1;var ab=A<<2;var L=A-1;var ai=B-1;var H=ag+1;var ah=H*(H+1)/2;var Y=new f();var T=Y;for(am=1;am<an;am++){T=T.next=new f();if(am==H){var G=T}}T.next=Y;var al=null;var ac=null;J=P=0;var R=n[ag];var C=v[ag];for(ad=0;ad<B;ad++){aa=af=N=D=E=U=0;K=H*(I=F[P]);W=H*(O=F[P+1]);S=H*(Q=F[P+2]);D+=ah*I;E+=ah*O;U+=ah*Q;T=Y;for(am=0;am<H;am++){T.r=I;T.g=O;T.b=Q;T=T.next}for(am=1;am<H;am++){aj=P+((L<am?L:am)<<2);D+=(T.r=(I=F[aj]))*(Z=H-am);E+=(T.g=(O=F[aj+1]))*Z;U+=(T.b=(Q=F[aj+2]))*Z;aa+=I;af+=O;N+=Q;T=T.next}al=Y;ac=G;for(ae=0;ae<A;ae++){F[P]=(D*R)>>C;F[P+1]=(E*R)>>C;F[P+2]=(U*R)>>C;D-=K;E-=W;U-=S;K-=al.r;W-=al.g;S-=al.b;aj=(J+((aj=ae+ag+1)<L?aj:L))<<2;aa+=(al.r=F[aj]);af+=(al.g=F[aj+1]);N+=(al.b=F[aj+2]);D+=aa;E+=af;U+=N;al=al.next;K+=(I=ac.r);W+=(O=ac.g);S+=(Q=ac.b);aa-=I;af-=O;N-=Q;ac=ac.next;P+=4}J+=A}for(ae=0;ae<A;ae++){af=N=aa=E=U=D=0;P=ae<<2;K=H*(I=F[P]);W=H*(O=F[P+1]);S=H*(Q=F[P+2]);D+=ah*I;E+=ah*O;U+=ah*Q;T=Y;for(am=0;am<H;am++){T.r=I;T.g=O;T.b=Q;T=T.next}M=A;for(am=1;am<=ag;am++){P=(M+ae)<<2;D+=(T.r=(I=F[P]))*(Z=H-am);E+=(T.g=(O=F[P+1]))*Z;U+=(T.b=(Q=F[P+2]))*Z;aa+=I;af+=O;N+=Q;T=T.next;if(am<ai){M+=A}}P=ae;al=Y;ac=G;for(ad=0;ad<B;ad++){aj=P<<2;F[aj]=(D*R)>>C;F[aj+1]=(E*R)>>C;F[aj+2]=(U*R)>>C;D-=K;E-=W;U-=S;K-=al.r;W-=al.g;S-=al.b;aj=(ae+(((aj=ad+H)<ai?aj:ai)*A))<<2;D+=(aa+=(al.r=F[aj]));E+=(af+=(al.g=F[aj+1]));U+=(N+=(al.b=F[aj+2]));al=al.next;K+=(I=ac.r);W+=(O=ac.g);S+=(Q=ac.b);aa-=I;af-=O;N-=Q;ac=ac.next;P+=A}}ap.putImageData(ak,X,V);return true}function f(){this.r=0;this.g=0;this.b=0;this.a=0;this.next=null}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"seven",prev:"",next:"",duration:20*100,delay:20*100,width:760,height:430,autoPlay:true,playPause:true,stopOnHover:false,loop:false,bullets:true,caption:true,captionEffect:"slide",controls:true,onBeforeStep:0,images:0});