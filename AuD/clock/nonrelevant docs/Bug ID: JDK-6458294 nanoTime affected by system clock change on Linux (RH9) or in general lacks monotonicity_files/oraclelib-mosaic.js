/*!
######################################################

# %file_name%

# OCOM GLOBAL ASSET RELEASE: %ga_build%

# BUILD DATE: %ga_date%

# %ga_copyright%

%ga_warning%

######################################################
*/

/*! TEST & FLAG FOR JQUERY */
try{
	var jq=(jQuery)?true:false;
}catch(err){
	var jq=false;
}

/*! JQUERY FUNCTIONS */
if(jq){
	jQuery.noConflict();

	// this include needs to be at/near the top to avoid race conditions
	/*! GLOBAL.VARS */

/*
///////////////////////////////////////////////////////////////
localized text array
///////////////////////////////////////////////////////////////

use the ocomltxt variable when you wish to insert text via
javascript this will allow us to translate all javascript insterted
text.

by default all languages will get english text until the language
is defined in the ocomltxt object, like this spanish translation...

// spanish
ocomltxt['esa'] = {
	more:'Mas',
	close:'Cerrar'
};

!!! EVERY !!! language that is defined must have the same phrases
(phrase are the "more:", "readmore:", etc...). IF they do NOT then
the javascript will break.

So if the english language is set to:

ocomltxt['en'] = {
	more:'More',
	readmore:'Read More',
	close:'Close'
};

the spanish translation MUST look like this:

ocomltxt['esa'] = {
	more:'Mas',
	readmore:'Mas',
	close:'Cerrar'
};

if you add a new phrase set all other languages to english until we
can translate...

ocomltxt['en'] = {
	more:'More',
	readmore:'Read More',
	close:'Close',
	joinnow:'Join Now'
};

ocomltxt['esa'] = {
	more:'Mas',
	readmore:'Mas',
	close:'Cerrar',
	joinnow:'Join Now' //needs translating
};

SO to REPEAT! all languages MUST have the same phrases!!!!

The language codes (the ['esa']) are related to the META tag used in the document
HEAD object, so for Russian we'd use "ru" as defined in the META tag...

<meta content="ru" name="Language">

///////////////////////////////////////////////////////////////
*/

var ocomltxt = [];

// english
ocomltxt['en'] = {
	 more:'More'
	,readmore:'Read More'
	,close:'Close'
	,link2txt:'Paste link in <strong>email</strong> or <strong>IM</strong>'
	,finish:'Finish'
};

// czech
ocomltxt['cs'] = {
	more:'Více'
	,readmore:'Více informací'
	,close:'Zavřít'
	,link2txt:'Vložte odkaz do <strong>e-mailu</strong> nebo <strong>do aplikace pro zasílání rychlých zpráv</strong>' 
	,finish:'Finish'
};

// dutch
ocomltxt['nl'] = {
	 more:'Meer'
	,readmore:'Meer informatie'
	,close:'Sluiten'
	,link2txt:'Plak link in <strong>e-mail</strong> of <strong>chat</strong>' 
	,finish:'Finish'
};

// french - france
ocomltxt['fr'] = {
	 more:'En savoir plus'
	,readmore:'Lire la suite'
	,close:'Fermer'
	,link2txt:'Copier le lien dans <strong>e-mail</strong> ou <strong>messagerie instantan&#233;e</strong>' 
	,finish:'Fin'
};

// french - canada
ocomltxt['fr-ca'] = {
	 more:'En savoir plus'
	,readmore:'En savoir plus'
	,close:'Fermer'
	,link2txt:'Coller le lien dans <strong>courriel</strong> ou <strong>IM</strong>' 
	,finish:'Finish'
};


// german
ocomltxt['de'] = {
	 more:'Weitere Informationen'
	,readmore:'Erfahren Sie mehr'
	,close:'Schlie&#223en'
	,link2txt:'Link einf&#252;gen in <strong>E-Mail</strong> oder <strong>Textnachricht (IM)</strong>' 
	,finish:'Finish'
};

// italian
ocomltxt['ita'] = {
	 more:'Altre informazioni'
	,readmore:'Ulteriori informazioni'
	,close:'Chiudi'
	,link2txt:'Incolla il collegamento in <strong>e-mail</strong> o <strong>IM</strong>' 
	,finish:'Finish'
};

// polish
ocomltxt['pl'] = {
	 more:'Więcej'
	,readmore:'Czytaj dalej'
	,close:'Zamknij'
	,link2txt:'Wklej łącze do <strong>wiadomości e-mail</strong> lub <strong>wiadomości błyskawicznej</strong>' 
	,finish:'Finish'
};

// portuquese - brazil
ocomltxt['ptb'] = {
	 more:'Mais'
	,readmore:'Leia Mais'
	,close:'Fechamento'
	,link2txt:'Cole o link no <strong>e-mail</strong> ou no <strong>IM</strong>' 
	,finish:'Finish'
};

// romanian
ocomltxt['ro'] = {
	 more:'Mai multe'
	,readmore:'Aflaţi mai multe'
	,close:'Cerrar'
	,link2txt:'Paste <strong>e-mail</strong> sau <strong>IM</strong>' 
	,finish:'Finish'
};

// russian - russia
ocomltxt['ru'] = {
	 more:'Далее'
	,readmore:'Читать'
	,close:'Закрыть'
	,link2txt:'Вставить ссылку в <strong>электронную почту</strong> или <strong>ВМ</strong>' 
	,finish:'Finish'
};

// spanish - LAD
ocomltxt['esa'] = {
	 more:'Mas'
	,readmore:'Mas'
	,close:'Cerrar'
	,link2txt:'Paste <strong>correo electr&#243;nico</strong> o <strong>IM</strong>' 
	,finish:'Finish'
};

// spanish - spain
ocomltxt['es'] = {
	 more:'M&#225;s'
	,readmore:'Lea m&#225;s informaci&#243;n'
	,close:'Cerrar'
	,link2txt:'Pegar enlace en link in <strong>correo electr&#243;nico</strong> o bien <strong>IM</strong>' 
	,finish:'Finish'
};

// turkish
ocomltxt['tr'] = {
	 more:'Devam'
	,readmore:'Devamı'
	,close:'Kapat'
	,link2txt:'Yapıştırılacak bağlantının konumu <strong>e-posta</strong> veya <strong>anlık ileti sistemi</strong>' 
	,finish:'Finish'
};

// korean
ocomltxt['kr'] = {
	 more:'자세히'
	,readmore:'자세히 읽기'
	,close:'끝내기'
	,link2txt:'이메일 또는 IM 링크 연결하기' 
	,finish:'Finish'
};

// chinese traditional
ocomltxt['zhs'] = {
	 more:'更多'
	,readmore:'阅读详细内容'
	,close:'关闭'
	,link2txt:'将链接粘贴到电子邮件或即时聊天工具中' 
	,finish:'Finish'
};

// japanese
ocomltxt['ja'] = {
	 more:'その他'
	,readmore:'詳細'
	,close:'閉じる'
	,link2txt:'リンクをeメールかIMにてペーストしてください' 
	,finish:'Finish'
};

/*! LANG DETECT */
var ocomlang = 'en';
jQuery(document).ready(function($) {
	$('meta').each(function(){
		if (jQuery(this).attr('name') == "Language"){
			ocomlang = jQuery(this).attr('content');
		}
	});
	ocomlang=(typeof ocomltxt[ocomlang]=='undefined') ? 'en' : ocomlang;
});



	/*! GLOBAL.HTMLCLASS */
jQuery('html').first().addClass('hasjs');

if(window.history.pushState){
	jQuery('html').first().addClass('haspushstate');
}

if (navigator && navigator.platform && navigator.platform.match(/^(iPad|iPod|iPhone)$/)) {
	jQuery('html').first().addClass('iOSdevice');
}


	/*! SELECTONFOCUS */
jQuery(document).ready(function($) {
	$(".selectonfocus").focus(function(){
		// Check for a text change
		if(this.value == this.defaultValue){
			this.select();
	   }
	});
});
	

	/*! HIJAX */

// array to hold data/html content history
var hijaxHistory = [];

//linkobj = jqeuery object, can be A or OPTION object
function oHijax(linkobj){ 
	(function($) {
	
		// get href value
		if(linkobj.get(0).tagName == 'A'){
			var hrf = linkobj[0].href;
		}else if(linkobj.get(0).tagName == 'OPTION'){
			var hrf = linkobj.attr('value');
		}

		if (hrf && linkobj.attr('id') != 'link2page' && !linkobj.hasClass('nohijax') && !linkobj.closest('*.nohijax')[0]){

			// strip domain from href value
			var path = (hrf.indexOf('://') > -1) ? hrf.replace(/.*:\/\/[^\/]+/,'') : hrf;

			// find hijax div container to get more info on hijax params
			var cdiv = linkobj.closest('div.hijax');
			
			// if container has target-foo class extract target value, or set to container's ID
			var targetid = (cdiv.attr('class').indexOf('target-') > -1) ? cdiv.attr('class').split('target-')[1].split(' ')[0] : cdiv.attr('id');

			// set target object (could be diff from cdiv)
			var targetobj = $('div#'+targetid);
			
			// grab the current html and current loction to add to hijaxHistory
			var oldhtml = targetobj.html();
			var oldloco = document.location.href.replace(/.*:\/\/[^\/]+/,'');

			// get and set the current height of container div so we can make
			// it the same size while the progress bar is displayed
			var h = targetobj.height();
			var w = targetobj.width();
			targetobj.css('height',h+'px');
			targetobj.css('width',w+'px');

			// fade out all content in target div and add loading class
			targetobj.children('div').each(function(){
				$(this).fadeOut(200);
			});

			targetobj.css('background-color','#fcfcfc');
			targetobj.css('border-radius','4px');

			// getyScroll function, gets px height of y scroll
			function getyScroll(){
				if (self.pageYOffset) {
					return self.pageYOffset;
				} else if (document.documentElement && document.documentElement.scrollTop) {
					return document.documentElement.scrollTop;
				} else if (document.body) {
					return document.body.scrollTop;
				}
			}

			// set yscroll
			var yscroll = getyScroll();
			var bgp;
			var ttop = targetobj.position().top;
			var thgt = targetobj.height();
			var whgt = $(window).height();



			// set inital bg position state
			if (thgt > whgt && yscroll < ttop){
				bgp = parseInt((whgt - (ttop - yscroll))/ 2) +'px';
			}else if (thgt > whgt){
				bgp = parseInt((((whgt / 2) + yscroll) - ttop)) +'px';
			}else{	
				bgp = '45%';
			}

			targetobj.css('background-position','50% '+ bgp);

			// if top of target object is past scroll, scroll up and move progress bar animation
			if(yscroll > ttop + 30){
				$('html, body').animate({
					scrollTop: targetobj.offset().top - 10
				 }, 500);

				// if target object height > viewport height, set bg y position in px, else set to 45%
				var bgy = (thgt > whgt) ? parseInt((whgt - 10) / 2) + 'px' : '45%';
		
				targetobj.animate({
					backgroundPosition:'50% '+bgy
				 }, 400);

			}

			// get call in timeout to give slight delay to load so user
			// sees the change via the progress bar
			setTimeout(function(){
				$.get(
					hrf,'',function(data){						
						hijaxHistory[oldloco] = [oldhtml,targetobj];
						data = $(data).find('div#'+targetid).html();
							targetobj.css('background-color','transparent');
							targetobj.css('border-radius','0');
						$(document).find('div#'+targetid).html(data);
						targetobj.css('height','auto');
						targetobj.css('width','auto');
						targetobj.fadeIn();
						run_setup(targetobj);
						if(window.history.pushState){
							hijaxHistory[path] = [data,targetobj];
							window.history.pushState('', '', path);
						}
						if(document.getElementById('link2page')){
							document.getElementById('link2page').href=hrf;
						}
						if(typeof onHijaxLoad == 'function') {
							onHijaxLoad(hrf);
						}
						targetobj.css('background-position','50% -2000px');
					},
					"html"
				);
			}, 1100);

			return false;

		}
	})(jQuery);
}

// popstate watches back/fwd button clicks and responds as needed
if(window.history.pushState){
	window.onpopstate = function(event) {
		(function($) {
			var newstate = window.location.href.replace(/.*:\/\/[^\/]+/,'');
			if(hijaxHistory[newstate]){
				$(hijaxHistory[newstate][1]).html(hijaxHistory[newstate][0]);
				run_setup($(hijaxHistory[newstate][1]));
			}
		})(jQuery);
	}
}

// close link2page dialog boxes
(function($) {
	$(document).keydown(function(e){
		if(e.which == 27){  // escape
			// try closing any link2page dialog boxes
			if(document.getElementById('link2box')){
				$('div#link2box').remove();
				$('a#link2page').get(0).focus();
			}
	
		}
	}); 
})(jQuery);

// hijax live event
(function($) {
	$('div.hijax a').live('click',function(e){
		if ($(this).attr('href').replace(document.location.href,'').indexOf('#') != 0){
			oHijax($(this));
		}
		return false;
	});
	$('div#link2box a').live('click',function(e){
		$(this).closest('div#link2box').remove();
		$('a#link2page').get(0).focus();
		return false;
	});
	$('a#link2page').live('click',function(e){
		var h = ($(this).attr('href') == "" || $(this).attr('href').indexOf('#') == 0) ? document.location.href : $(this).attr('href');
		var link2box = $('<div id="link2box" style="top:'+$(this).position().top+'px;left:'+$(this).position().left+'px"><p>'+ocomltxt[ocomlang].link2txt+' <a href="#close">'+ocomltxt[ocomlang].close+'</a></p><form><input type="text" value="'+h+'" /></form></div>');
		$(this).after(link2box);
		$('div#link2box input').first().get(0).select();
		return false;
	});
})(jQuery);






	/*! GLOBAL.O-SEEMORE */
jQuery(document).ready(function($) {
	$('div.o-seemore').each(function(n){
		var hid = $(this).find('h5.o-seemore').first().text().replace( /[ ]+/ig,'_');
		n = (!document.getElementById(hid)) ? n = "" : n = "_"+n;
		$(this).find('div.o-morecontent').first().get(0).id = hid+n;
		$(this).find('h5.o-seemore').first().wrapInner('<a href="#'+hid+n+'" />');
		$(this).find('h5.o-seemore a').bind('click', function(e) {
			var sm = $(this).closest('div.o-seemore');
			if(!sm.hasClass('o-seeshow')){
				sm.find('div.o-morecontent').first().fadeIn(400);
			}else{
				sm.find('div.o-morecontent').first().fadeOut(200);
			}
			sm.toggleClass('o-seeshow');
			e.preventDefault();
		});
	});
});



	/*! GLOBAL.O-POP */
jQuery('a[rel="opop"]').live('click',function(e){
	var link = jQuery(this);
	var popW = '820';
	var popH = '600';
	var param = ['no',0,0,0,0,0,0,'',''];
	var purl = link.attr('href');
	var pname = (link.attr('target')) ? link.attr('target') : '_blank';

	if(link.attr('data-opop')){
		var cls = link.attr('data-opop').split(' ');
		for (var v=0;v<cls.length;v++){
			if (cls[v].search('[0-9]+x[0-9]+') > -1){
				var f = cls[v].split('x');
				popW = f[0];
				popH = f[1];
			}else if(cls[v] == "scrolling"){
				var param = ['yes',1,0,0,0,0,0];
			}else if(cls[v] == "full"){
				var param = ['yes',1,1,1,1,1,1];
			}else if(cls[v].indexOf("yes_") == 0 || cls[v].indexOf("no_") == 0){
				var f = cls[v].split('_');
				f[1] = "f"+f[1];
				var param = f[1].split('');
				param[0] = f[0];
			}
			if(cls[v].indexOf("centerpop") > -1){
				param[7] = screen.availHeight/2 - popH/2;
				param[8] = screen.availWidth/2 - popW/2;
				var tl = ',top=' + param[7] +',left=' + param[8];
			}else{
				var tl = '';		
			}
		}
	}
	var popup = window.open(purl, pname, 'width=' + popW + ',height=' + popH + ',resizable=' + param[0] + ',scrollbars=' + param[1]	+ ',menubar=' + param[2] + ',toolbar=' + param[3] + ',location=' + param[4] + ',directories=' + param[5] + ',status=' + param[6]+tl);
	popup.focus();
	e.preventDefault();
});


	/*! JQUERY.ANIMATEBG - @author Alexander Farkas - v. 1.22 */
(function($) {
	if(!document.defaultView || !document.defaultView.getComputedStyle){ // IE6-IE8
		var oldCurCSS = $.curCSS;
		$.curCSS = function(elem, name, force){
			if(name === 'background-position'){
				name = 'backgroundPosition';
			}
			if(name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[ name ]){
				return oldCurCSS.apply(this, arguments);
			}
			var style = elem.style;
			if ( !force && style && style[ name ] ){
				return style[ name ];
			}
			return oldCurCSS(elem, 'backgroundPositionX', force) +' '+ oldCurCSS(elem, 'backgroundPositionY', force);
		};
	}
	
	var oldAnim = $.fn.animate;
	$.fn.animate = function(prop){
		if('background-position' in prop){
			prop.backgroundPosition = prop['background-position'];
			delete prop['background-position'];
		}
		if('backgroundPosition' in prop){
			prop.backgroundPosition = '('+ prop.backgroundPosition;
		}
		return oldAnim.apply(this, arguments);
	};
	
	function toArray(strg){
		strg = strg.replace(/left|top/g,'0px');
		strg = strg.replace(/right|bottom/g,'100%');
		strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
		var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
		return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
	}
	
	$.fx.step. backgroundPosition = function(fx) {
		if (!fx.bgPosReady) {
			var start = $.curCSS(fx.elem,'backgroundPosition');
			if(!start){//FF2 no inline-style fallback
				start = '0px 0px';
			}
			
			start = toArray(start);
			fx.start = [start[0],start[2]];
			var end = toArray(fx.end);
			fx.end = [end[0],end[2]];
			
			fx.unit = [end[1],end[3]];
			fx.bgPosReady = true;
		}
		//return;
		var nowPosX = [];
		nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
		nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];           
		fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];

	};
})(jQuery);

	/*! CT02 */
jQuery(document).ready(function($) {

	$('div.ct02v0').each(function() {
		var ct2 = $(this); 
	
		// make tabset only if more than one tab list item exist
		if ($(this).find('ul.ct02tabs > li').length > 1){
		
			// divide the tabs into equal widths, add any remainders to the last tab
			var tct = ct2.find('ul.ct02tabs > li').length;
			var ulw = ct2.find('ul.ct02tabs').width();
			var liw = Math.floor(ulw/tct);
			var lsw;
			if(liw != (ulw/tct)){
				lsw = ulw - (Math.floor(ulw/tct) * (tct - 1));
			}else{
				liw = ulw/tct;
				lsw = liw;
			}
			var xwide = 0;
			var xwideli = 0;
			
			// set the tab width, if content is wider, set wider
			ct2.find('ul.ct02tabs > li > h3').each(function(){
				$(this).css('width',liw);
				$(this).parent().find('div.ct02w1').each(function(){
					$(this).css('width',(ulw - 2)+'px');
				});
				if(($(this).find('em').first().width() + 12) > lsw){
					$(this).css('width',($(this).find('em').first().width() + 20)+'px');
					xwide = xwide + ($(this).find('em').first().width() + 20);
					xwideli++;
					$(this).parent().addClass('ct02xwide');
				}
			});
	
			ct2.find('li.ct02tab').attr('data-lbl','open');

			// when tabs are wider than default width, reset widths to adjust for larger tabs
			if (xwide > 0){
				ulw = ulw - xwide;
				tct = tct - xwideli;
				liw = Math.floor(ulw/tct);
				if(liw != (ulw/tct)){
					lsw = ulw - (Math.floor(ulw/tct) * (tct - 1));
				}else{
					liw = ulw/tct;
					lsw = liw;
				}
				ct2.find('ul.ct02tabs > li > h3').each(function(){
					if(!$(this).parent().hasClass('ct02xwide')){
						$(this).parent().addClass('ct02nwide');
						$(this).css('width',liw);
					}
				});
				ct2.find('ul.ct02tabs li.ct02nwide').last().find('h3').first().css('width',lsw);
			}else{
				ct2.find('ul.ct02tabs > li:last-child > h3').each(function(){$(this).css('width',lsw);});
			}
			// if tab is two line, alter padding to center
			ct2.find('ul.ct02tabs > li > h3').each(function(){
				if($(this).find('em').first().height() > 25){
					$(this).parent().addClass('ct02twoline');
				}
			});
			// add corners and end classes
			ct2.find('ul.ct02tabs > li:first-child').each(function(){
				$(this).append('<div class="ct02corners"></div>');
				$(this).addClass('ct02lifirst');
			});
			ct2.find('ul.ct02tabs > li:last-child').each(function(){
				$(this).append('<div class="ct02corners ct02corner-right"></div>');
				$(this).addClass('ct02lilast');
			});
		}
		ct2.addClass('ct02ready');
	});

	// onready hash check for ct02
	var loco = document.location.href;
	if(loco.indexOf('#') > 0){
		if(loco.indexOf('#ct02-') > 0 && $('#'+loco.split('#')[1]) != false){
			$('#'+loco.split('#')[1]).each(function(){
				var pli = $(this).parent();
				pli.parent().addClass('ct02opened');
				pli.addClass('ct02show');
				pli.parent().css('height',(pli.find('div.ct02w1').height() + 45)+'px');
			});
		}
	}

});

// live functions
(function($) {
	$('li.ct02tab a,li.ct02tab a').live('focus', function(event) {
		if(!$(this).parent().parent().hasClass('ct02show')){
			$(this).parent().parent().addClass('ct02hover');
		}
	});	
	$('li.ct02tab a').live('blur', function(event) {
		$(this).parent().parent().removeClass('ct02hover');
	});	
	$('div.ct02 li.ct02tab h3 a').live('click', function(event) {
		var pli = $(this).parent().parent();
		if(pli.hasClass('ct02show')){
			pli.attr('data-lbl','open');
			pli.parent().removeClass('ct02opened');
			pli.parent().animate({'height':'40px'},250,function(){
				pli.removeClass('ct02show');
			});
		}else{
			pli.attr('data-lbl','close');
			$('div.ct02 li.ct02tab').each(function(){
				$(this).removeClass('ct02show');
				$(this).removeClass('ct02hover');
				$(this).parent().css('height','40px');
			});
			pli.parent().addClass('ct02opened');
			pli.addClass('ct02show');
			pli.parent().animate({'height':(pli.find('div.ct02w1').height() + 45)+'px'},300);
		}
		return false;
	});
	$('div.ct02 li.ct02tab h3 a,div.ct02 li.ct02button h3 a').live('mouseover mouseout', function(event) {
		var pli = $(this).parent().parent();
		if (event.type == 'mouseover' && !pli.hasClass('ct02show')){
			pli.addClass('ct02hover');
		}else if (event.type == 'mouseout' && pli.hasClass('ct02hover')){
			pli.removeClass('ct02hover');
		}
	});
})(jQuery);


	/*! CN02 */

// onready functions
jQuery(document).ready(function($) {
	$('div.cn02v0').each(function() {
		var cn2 = $(this); 
		cn2.addClass('cn02js');
	
		// if menu is two line, alter padding to center
		cn2.find('li.cn02menu > h3').each(function(){
			if($(this).find('em').first().height() > 35){
				$(this).parent().addClass('cn02threeline');
			}else if($(this).find('em').first().height() > 25){
				$(this).parent().addClass('cn02twoline');
			}
		});
	
		// if menu is two line, alter padding to center
		cn2.find('li.cn02more > h3 em').first().wrapInner('<span />');
	
		// add bottom shadow div and close bttn
		cn2.find('div.cn02w1').each(function(){
			if ($(this).find('div.cn02w5').length > 0){
				$(this).find('div.cn02w5').append('<div class="cn02closelink"><a href="#'+ocomltxt[ocomlang].close+'"><span>'+ocomltxt[ocomlang].close+'</span></a></div>');
			}else{
				$(this).find('div.cn02w2').append('<div class="cn02w5"><div class="cn02closelink"><a href="#'+ocomltxt[ocomlang].close+'"><span>'+ocomltxt[ocomlang].close+'</span></a></div></div>');
			}
			$(this).append('<div class="cn02z1"></div>');
		});
	
		// add end classes 
		cn2.find('ul.cn02menus > li:first-child').each(function(){
			if($(this).hasClass('cn02titleitem')){
				$(this).next().addClass('cn02lifirst');
			}else{
				$(this).addClass('cn02lifirst');
				$(this).parent().prepend('<li class="cn02titleitem"><div></div></li>');
	
			}
		});
		
		// auto add last child class to LI
		cn2.find('ul.cn02menus > li:last-child').each(function(){
			$(this).addClass('cn02lilast');
		});
	
		// add empty LI and divs (since we're already doing an onready, no need to pollute markup)
		cn2.find('ul.cn02menus').first().append('<li class="cn02z2"></li>');
		cn2.find('div.cn02w3').append('<div class="cn02z3" /><div class="cn02z4" /><div class="cn02z5" />');
	
		cn2.find('div.cn02w2').each(function(){
			// look for more than 3 cn02w2col's, if found add class to adjust widths
			if($(this).find('div.cn02w2col').length == 4){
				$(this).addClass('cn02fourcols');
			}else if($(this).find('div.cn02w2col').length == 5){
				$(this).addClass('cn02fivecols');
			}
			// if h4's are found add margin to UL's without an H4 to align all ULs
			if($(this).find('div.cn02w2col h4').length > 0){
				$(this).find('div.cn02w2col').each(function(){
					if($(this).find('h4').length == 0){
						$(this).addClass('cn02sanstitle');
					}			
				});
			}
		});
		
		// add class to UL to reduce padding for instance where the nav wraps to two lines
		if($(this).find('ul.cn02menus').first().height() > 60){
			$(this).find('ul.cn02menus').addClass('cn02menusnarrow');	
		}
		
	});
});

// live functions
(function($) {

	$('div.cn02 li.cn02menu h3 a').live('click', function(event) {
		var pli = $(this).parent().parent();
		if(pli.hasClass('cn02show')){
			pli.parent().removeClass('cn02opened');
			pli.parent().animate({'height':'58px'},250,function(){
				pli.removeClass('cn02show');
				pli.parent().css('overflow','visible');
			});
			
		}else{
			$('div.cn02 li.cn02menu').each(function(){
				$(this).removeClass('cn02show');
				$(this).removeClass('cn02hover');
				$(this).parent().css('height','58px');
			});
			pli.parent().addClass('cn02opened');
			pli.parent().animate({'height':(pli.find('div.cn02w1').height() + 58)+'px'},300);
			pli.find('div.cn02w2').css('display','none');
			pli.addClass('cn02show');
			pli.find('div.cn02w2').fadeIn(700,function(){
				pli.find('div.cn02w1').css('display','');
				pli.parent().css('overflow','visible');
			});
		}
		return false;
	});
	$('div.cn02 div.cn02closelink a').live('click', function(event) {
		var pli = $(this).parent().parent().parent().parent().parent();
		if(pli.hasClass('cn02show')){
			pli.parent().removeClass('cn02opened');
			pli.parent().animate({'height':'58px'},250,function(){
				pli.removeClass('cn02show');
			});
			
		}
		return false;
	});
	$('li.cn02menu > h3 a').live('focus', function(event) {
		$(this).parent().parent().addClass('cn02hover');
	});	
	$('li.cn02menu > h3 a').live('blur', function(event) {
		$(this).parent().parent().removeClass('cn02hover');
	});	
	$('div.cn02 li.cn02menu h3 a').live('mouseover mouseout', function(event) {
		var pli = $(this).parent().parent();
		if (event.type == 'mouseover' && !pli.hasClass('cn02show')){
			pli.addClass('cn02hover');
		}else if (event.type == 'mouseout' && pli.hasClass('cn02hover')){
			pli.removeClass('cn02hover');
		}
	});
	$('div.cn02 li.cn02more').live('mouseover mouseout click blur', function(event) {
		if (event.type == 'mouseover' || event.type == 'click'){
			$(this).addClass('cn02morehover');
			$(this).parent().addClass('cn02moreopened');
	
			var mw = 24;
			$(this).find('div.cn02w4col').each(function(){
				mw += 198;
			});
			
			$(this).find('div.cn02w4').css('width',mw);
			$(this).find('div.cn02z4').css('width',($(this).find('div.cn02w4').width() - 98));
			$(this).find('div.cn02z4').css('padding-left',$(this).find('div.cn02w4').css('padding-left')).css('padding-right',$(this).find('div.cn02w4').css('padding-right'));
		}else if (event.type == 'mouseout' || event.type == 'blur'){
			$(this).removeClass('cn02morehover');
			$(this).parent().removeClass('cn02moreopened');
		}
	});
	$('div.cn02 li.cn02more h3 a').live('click focus', function(event) {

			$(this).parent().parent().addClass('cn02morehover');
			$(this).parent().parent().parent().addClass('cn02moreopened');
	
			var mw = 0;
			$(this).parent().parent().find('div.cn02w4col').each(function(){
				mw += 198;
			});
			$(this).parent().parent().find('div.cn02w4').css('width',mw);
			$(this).parent().parent().find('div.cn02z4').css('width',($(this).parent().parent().find('div.cn02w4').width() - 98));
			$(this).parent().parent().find('div.cn02z4').css('padding-left',$(this).parent().parent().find('div.cn02w4').css('padding-left')).css('padding-right',$(this).parent().parent().find('div.cn02w4').css('padding-right'));

		return false;
	});
	

})(jQuery);


	/*! C01 */
jQuery(document).ready(function($) {
	$('div.c01').each(function(){

		var h2 = ($(this).find('h2').first().attr('data-lbl')) ? $(this).find('h2').first().attr('data-lbl') : $(this).find('h2').first().text();
		var h2ttl = $(this).find('h2').first().text();

		if ($(this).find('.c01cta').length > 1){
			$('<br class="c01clr" />').insertBefore($(this).find('.c01cta').first());
		}
		var w2 = $(this).find('.c01w2');
		if (w2){
			w2.addClass('c01w2overflow');
			w2.wrapInner('<div class="c01viewport" />');
			if (w2.find('ul li').length == 1){
				w2.parent().addClass('c01single');
				w2.find('ul li a').each(function(i){
					$(this).append('<span></span>');
					if($(this).attr('href').indexOf('#') > -1){
						var lbx = $(this).attr('href').split('#')[0];
						var thm = $(this).attr('href').split('#')[1];
						var dir = $(this).find('img').first().attr('src');
						var alt = $(this).find('img').first().attr('alt');
						dir = dir.replace( /[^\/]+$/,'');
						$(this).attr('href',lbx+'#/'+i);
						$(this).attr('rel','lightBox');
						$(this).attr('data-lbl','hero-gallery-'+h2);
						$(this).attr('title',h2ttl);
					}
				});
			}else{
				var ul = $('<ul class="c01thumbs c01showthm-0"></ul>');
				w2.find('li a').first().focus(function(){
					$(this).parent().parent().parent().parent().find('ul.c01thumbs li a').first().focus();
				});
				w2.find('ul li a').each(function(i){
					$(this).attr('data-lbl','hero-gallery-'+h2);
					$(this).attr('title',h2ttl);
					$(this).append('<span></span>');
					if($(this).attr('href').indexOf('#') > -1){
						var lbx = $(this).attr('href').split('#')[0];
						var thm = $(this).attr('href').split('#')[1];
						var dir = $(this).find('img').first().attr('src');
						var alt = $(this).find('img').first().attr('alt');
						dir = dir.replace( /[^\/]+$/,'');
						$(this).attr('href',lbx+'#/'+i);
						$(this).attr('rel','lightBox');
						var li = $('<li class="c01thm-'+i+'"><a href="'+lbx+'#/'+i+'" rel="lightBox" data-lbl="hero-gallery-'+h2+'" title="'+h2ttl+'"><span></span><img src="'+dir+thm+'" alt="'+alt+'" /></a></li>');
						li.mouseover(function(){
							var thisi = $(this).attr('class').split('-')[1];
							$(this).parent().parent().find('ul.c01medimgs li').each(function(index){
								if(index==thisi){
									$(this).fadeIn(150);
								}else{
									$(this).fadeOut(150);
								}
							});
							$(this).parent().attr('class','c01thumbs');
							$(this).parent().addClass('c01showthm-'+thisi);
						});
						li.find('a').focus(function(){
							$(this).parent().parent().attr('class','c01thumbs');
							$(this).parent().parent().addClass('c01showthm-'+i);
						});
						li.appendTo(ul);
					}
				});
				ul.appendTo(w2);
			}
		}
	});
});

	/*! CN01 */
jQuery(document).ready(function($) {

	$('div.cn01morecontent h5').each(function(){
		$(this).wrapInner('<a href="#See_More"></a>');
	});
	
	$('div.cn01morecontent h5 a').live('click', function(event) {
		$(this).parent().fadeOut('fast',function(){
			$(this).parent().parent().find('ul').fadeIn('slow');
		});
		return false;
	});

});

	/*! C02-S07 */
jQuery(document).ready(function($){
	$('div.c02v0,div.s07v0').each(function(){
		var c = ($(this).hasClass('c02v0')) ? 'c02' : 's07'
		$(this).prepend('<div class="'+c+'v0z1"></div><div class="'+c+'v0z2"></div><div class="'+c+'v0z3"></div><div class="'+c+'v0z4"></div>');
		$(this).find('div.'+c).first().addClass(c+'panel');
		var ttl = $(this).find('div.'+c).length;
		if(ttl > 1){
			$(this).find('div.'+c+'v0w1').append('<div class="'+c+'w2"><div class="'+c+'controls"><div class="'+c+'v0w2"><a href="#show-'+ttl+'of'+ttl+'" class="'+c+'prv" title="previous"></a><div><span>1</span> / '+ttl+'</div><a href="#show-2of'+ttl+'" class="'+c+'nxt" title="next"></a></div></div></div>');
		}else if($(this).find('a.'+c+'morelink').first().text()){
			$(this).find('div.'+c+'v0w1').append('<div class="'+c+'w2"><div class="'+c+'v0w2"></div></div>');
		}else{
			$(this).addClass(c+'solo');
		}
	});
});

// live functions
(function($) {
	$('div.c02controls .c02v0w2 a,div.s07controls .s07v0w2 a').live('click', function(event) {
		var c = ($(this).parent().hasClass('c02v0w2')) ? 'c02' : 's07'
		var po = $(this).parent().parent().parent().parent().find('div.'+c);
		var ttl = po.length;
		var shw = ($(this).attr('href').split('#show-')[1].split('of')[0]) * 1;
		var prv = ((shw - 1) == 0) ? ttl : shw - 1;
		var nxt = ((shw + 1) > ttl ) ? 1 : shw + 1;
		shw--;
		$(this).parent().parent().parent().parent().find('div.'+c+'panel').first().fadeOut('fast',function(){
			$(this).parent().parent().parent().find('div.'+c+'controls .'+c+'v0w2 span').first().html((shw + 1));
			$(this).parent().parent().parent().find('div.'+c+'controls .'+c+'v0w2 a').first().attr('href','#show-'+prv+'of'+ttl);
			$(this).parent().parent().parent().find('div.'+c+'controls .'+c+'v0w2 a').last().attr('href','#show-'+nxt+'of'+ttl);
			$(po.get(shw)).fadeIn('slow');
			$(this).removeClass(c+'panel');
			$(po.get(shw)).addClass(c+'panel');
		});
		return false;
	});	
})(jQuery)

	/*! C04 */
jQuery(document).ready(function($) {
	$('.c04 tr:nth-child(2n+1)').each(function(){
		$(this).addClass('c04odd');
	});
});

	/*! C25 */
jQuery(document).ready(function($) {

	$('div.c25').each(function(){
		$(this).append('<div class="c25z1"></div><div class="c25z2"></div><div class="c25z3"></div>');
		$(this).find('div.c25w2').append('<div class="c25z4"></div><div class="c25z5"></div>');
		$(this).find('div.c25highlight').each(function(i){
			var morediv  = $(this).find('div.c25more').first();
			var moretxt  = (morediv.attr('data-moretxt')) ? morediv.attr('data-moretxt') : ocomltxt[ocomlang].more;
			var closetxt = (morediv.attr('data-closetxt')) ? morediv.attr('data-closetxt') : ocomltxt[ocomlang].close;
			morediv.before('<div class="c25morelink"><a href="#more-'+i+'" title="'+moretxt+' '+$(this).find('h3').first().text()+'" data-lbl="open">'+moretxt+'</a></div>');
			morediv.append('<div class="c25closelink"><a href="#close-more-'+i+'" data-lbl="close">'+closetxt+'</a></div>');
			morediv.wrapInner('<div class="c25morew1" />');
			$(this).find('ul').first().attr('id','more-'+i)
		});
	});
	
	$('div.c25morelink').on('click','a', function(e) {
		var morediv = $(this).parent().parent().find('div.c25more').first();
		$('div.c25showmore').removeClass('c25showmore');
		morediv.fadeIn('slow',function(){
			morediv.addClass('c25showmore');
			morediv.css('display','');
		});
		e.preventDefault();
	});
	
	$('div.c25closelink').on('click','a', function(e) {
		$(this).parent().parent().parent().fadeOut('fast',function(){
			$(this).parent().parent().parent().removeClass('c25showmore');
			$(this).parent().parent().parent().css('display','');
		});
		e.preventDefault();
	});

});

(function($) {
	$(document).keydown(function(e){
		if(e.which == 27){  // escape
			// close any open c25more panels
			$('div.c25showmore').removeClass('c25showmore');
		}
	}); 
})(jQuery);




	/*! C30 */
jQuery(document).ready(function($) {
	$('div.c30seemore').each(function(n){
		var hid = $(this).find('h6').first().text().replace( /[ ]+/ig,'_');
		n = (!document.getElementById(hid)) ? n = "" : n = "_"+n;
		$(this).find('ul').first().get(0).id = hid+n;
		$(this).find('h6').first().wrapInner('<a href="#'+hid+n+'" />');
		$(this).append('<div class="c30z1" />');
	});
	$('div.c30seemore h6 a').bind('click', function(e) {
		var sm = $(this).closest('div.c30seemore');
		if(!sm.hasClass('c30show')){
			sm.find('ul').first().fadeIn(400);
			sm.find('.c30z1').first().fadeIn(400);
		}else{
			sm.find('ul').first().fadeOut(200);
			sm.find('.c30z1').first().fadeOut(200);
		}
		sm.toggleClass('c30show');
		e.preventDefault();
	});
});



	/*! C35 */
jQuery(document).ready(function($) {
	
	$('div.c35more').each(function() {
		$(this).wrapInner('<div class="c35hiddentxt"></div>');
		$(this).find('div.c35hiddentxt').append('<div class="c35closelink"><a href="#close" data-trackas="c35" data-lbl="more-close">'+ocomltxt[ocomlang].close+'<span></span></a></div>');
		var xh = $(this).find('div.c35hiddentxt').height() + 14;
		$(this).prepend('<p class="c35leadtext">'+$(this).find('p span.c35morelead').first().html()+'... <a href="#readmore" class="c35morelink" data-trackas="c35" data-lbl="more-open">'+ocomltxt[ocomlang].readmore+'<span></span></a></p>');
		var mh = $(this).find('p.c35leadtext').height();

		if($(this).find('div.c35hiddentxt').css('display') == 'none'){
			$(this).animate({'height':mh+'px'},200,function(){$(this).addClass('c35ready');});
		}
		
		$(this).find('a.c35morelink').bind('click',function(e){
			var c35 = $(this).closest('div.c35more');
			c35.find('p.c35leadtext').css('position','absolute');
			c35.find('p.c35leadtext').css('top',0);
			c35.find('p.c35leadtext').fadeOut(300);
			c35.find('div.c35hiddentxt').fadeIn(300);
			c35.animate({'height':xh},500,function(){
				c35.addClass('c35showmore');
			});
			return false;
		});
		$(this).find('div.c35closelink a').bind('click',function(e){
			var c35 = $(this).closest('div.c35more');
			c35.find('div.c35hiddentxt').fadeOut(300);
			c35.find('p.c35leadtext').fadeIn(200);
			c35.animate({'height':mh},500,function(){
				c35.removeClass('c35showmore');
			});
			return false;
		});
	});
});
	


	/*! C49 */
jQuery(document).ready(function($) {
	$('div.c49').each(function() {
		$(this).find('ul.c49list').each(function(n) {
			if($(this).parent().parent().hasClass('c49v0')){
				var h4 = 0;
				$(this).children('li').each(function() {
					$(this).addClass('c49size'+$(this).closest('div.c49w1').find('ul.c49list').first().children('li').length);
					h4 = ($(this).find('h4').first().height() > h4) ? $(this).find('h4').first().height() : h4;
				});
				var ultop = 0;
				if(n > 0){
					var i = n-1;
					while(i>=0){
						ultop = ultop + $($('ul.c49list').get(i)).height() + 10;
						i--;
					}
				 if($($('ul.c49list').get(n)).find('li').length < $($('ul.c49list').get(0)).find('li').length){
					$(this).css('width','auto');
				 }
				}
				$(this).css('top',ultop+'px');
			}
			$(this).children('li').each(function() {
				$(this).find('h4').first().css('height',((h4 * 1) + 16)+'px').css('width',$(this).width()+'px');
				$(this).find('div.c49w3').first().append('<span class="c49arrow"></span>');
			});
		});
			
		$(this).find('div.c49w2').bind('mouseover',function(){
			$(this).addClass('c49showfly');	
		});
		$(this).find('div.c49w2').bind('mouseout',function(){
			$(this).removeClass('c49showfly');	
		});
		
		
	});
});


	/*! S09 */
jQuery(document).ready(function($) {

	$('div.s09v0').hover(
	  function(){$(this).addClass("s09show");},
	  function(){$(this).removeClass("s09show");}
	);

	$('div.s09w1 a').bind('focus',function(){
		$(this).parent().parent().addClass("s09show");
	});

	$('div.s09w1 a').bind('click',function(e){
		e.preventDefault();
	});

	$('div.s09w2 a:last').bind('blur',function(){
		$(this).closest('div.s09v0').removeClass("s09show");
	});

});


	/*! U01 */
jQuery(document).ready(function($) {
	if(document.getElementById('u01')){
	
		$("ul.u01nav").children('li').each(function(){
			$(this).find('a.u01nav,a.u01btn').append('<div class="u01z1" />');
			$(this).find('a.u01nav,a.u01btn').bind('mouseover', function(event){
				$(this).find('div.u01z1').css('width',$(this).width()+'px');
			});
		});
	
			// test code
			 USER.firstname = "Droo";
			 USER.guid = true;
			
			if (USER.guid){
				if (USER.firstname){
					$('#pfile-wlcm').append(' '+USER.firstname);	
				}
				$('#pfile-acct,#pfile-sout,#pfile-wlcm').show();	
				$('#pfile-regs').hide();	
				$('#pfile-acct a').attr('href',$('#pfile-acct a').attr('href').replace(/nextURL=/g,'nextURL='+encodeURI(document.location.href)));
			}else{
				$('#pfile-regs a').attr('href',$('#pfile-regs a').attr('href').replace(/nexturl=/g,'nexturl='+encodeURI(document.location.href)));
			}
		
		// get menucontent
		$.ajax({
				url: '/cors/menucontent.html',
				type: "POST",
				contentType: "text/html; charset=UTF-8",
				crossDomain: true,
				success: function(data){
				$("ul.u01nav").children('li').each(function(){
					var mid = $(data).find('#menu-'+$(this).find('a').attr('href').split('#')[1]);
					mid.find('h2').remove();
					$(this).append(mid);
				});
				$("ul.u01navtools").children('li').each(function(){
					var mid = $(data).find('#menu-'+$(this).find('a').attr('href').split('#')[1]);
					mid.find('h2').remove();
					$(this).append(mid);
				});
			}, error:function (data) {
				$("ul.u01nav").addClass('u01error');
			}
		});
	
	}
});



	/*! W01.LIGHTBOX */
function isIDevice(){
	if (navigator.platform.indexOf("iPad") != -1){return true;}
	if (navigator.platform.indexOf("iPhone") != -1){return true;}
	if (navigator.platform.indexOf("iPod") != -1){return true;}
	return false;
}

var lightboxresize = false;

(function($) {
	$.lightBox = {version: '3.0'};
	$.fn.lightBox = function(olb_settings) {
		olb_settings = jQuery.extend({
			animation_speed: 'fast', /* fast/slow/normal */
			slideshow: false, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: false, /* Resize the photos bigger than viewport. true/false */
			default_width: (isIDevice()) ? 860 : 1000,
			default_height: 500,
			counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
			theme: 'w01', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over lightBox */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: true, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
			keyboard_shortcuts: false, /* Set to false if you open forms inside lightBox */
			changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
			callback: function(){}, /* Called when lightBox is closed */
			markup: '<div class="w01w1"> \
						<div class="w01w2"> \
							<div class="w01w3"></div> \
							<div class="w01w4">\
							<div class="w01w5">&nbsp;</div> \
							<a class="w01close" href="#">Close</a> \
							</div> \
							<div class="w01w6"></div> \
						</div> \
						<div class="w01w7"> \
							<div class="w01w3"> \
							<div class="w01w6"> \
								<div class="w01w8"> \
									<div class="w01w9"></div> \
									<div class="w01w10"> \
										<div class="w01w11"> \
											<a class="w01next" href="#">next</a> \
											<a class="w01previous" href="#">previous</a> \
										</div> \
										<div id="w01w12"></div> \
										<div class="w01w13 clearfix"> \
											<p class="w01description"></p> \
											</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="w01w14"> \
							<div class="w01w3"></div> \
							<div class="w01w4"></div> \
							<div class="w01w6"></div> \
						</div> \
					</div> \
					<div class="w01z1"></div>',
			gallery_markup: '<div class="w01w15"> \
								<a href="#" class="w01arrowprevious">Previous</a> \
								<a href="#" class="w01arrownext">Next</a> \
							</div>',
			image_markup: '<img id="fullResImage" src="" />',
			flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
			quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
			iframe_markup: '<iframe id="ifrm" src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
			iframe_markup_idevice: '<div id="iDeviceDiv" class="iDeviceDiv" style="width: {width}px; height: {height}px; overflow: scroll; position: relative;"><div id="iDeviceInnerDiv" class="iDeviceInnerDiv" style="position: relative; top: 0; left: 0; overflow: visible;"><iframe id="ifrm" class="ifrm" onload="w01IframeResize()" src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe></div></div>',
			inline_markup: '<div class="w01w16 clearfix">{content}</div>',
			custom_markup: ''
		}, olb_settings);
		
		// Global variables accessible only by lightBox
		var matchedObjects = this, percentBased = false, correctSizes, olb_open,
		
		// lightBox container specific
		w01w8Height, w01w8Width, olb_containerHeight, olb_containerWidth,
		
		// Window size
		windowHeight = $(window).height(), windowWidth = $(window).width(),

		// Global elements
		olb_slideshow;
		
		doresize = true, scroll_pos = _get_scroll();
	
		// Window/Keyboard events
		if (!lightboxresize){
			$(window).resize(function(){ _center_overlay(); _resize_overlay(); });
			lightboxresize = true;
		}	
		
		if(olb_settings.keyboard_shortcuts) {
			$(document).unbind('keydown').keydown(function(e){
				if(typeof $w01w1 != 'undefined'){
					if($w01w1.is(':visible')){
						switch(e.keyCode){
							case 37:
								$.lightBox.changePage('previous');
								break;
							case 39:
								$.lightBox.changePage('next');
								break;
							case 27:
								if(!settings.modal){
									$.lightBox.close();
								}
								break;
						}
						return false;
					}
				}
			});
		}
		
		
		/**
		* Initialize lightBox.
		*/
		$.lightBox.initialize = function(e) {
			settings = olb_settings;
			
			if($.browser.msie && parseInt($.browser.version) == 6){
				settings.theme = "light_square"; // Fallback to a supported theme for IE6
			}
			
			_buildOverlay(this); // Build the overlay {this} being the caller
			
			if(settings.allow_resize){
				$(window).scroll(function(){ _center_overlay(); });
			}
				
			_center_overlay();
			
			set_position = jQuery.inArray($(this).attr('href'), olb_images); // Define where in the array the clicked item is positionned
			
			$.lightBox.open();
			
			e.preventDefault();

		};


		/**
		* Opens the olbPhoto modal box.
		* @param image {String,Array} Full path to the image to be open, can also be an array containing full images paths.
		* @param title {String,Array} The title to be displayed with the picture, can also be an array containing all the titles.
		* @param description {String,Array} The description to be displayed with the picture, can also be an array containing all the descriptions.
		*/
		$.lightBox.open = function(event){
			if(typeof settings == "undefined"){ // Means it's an API call, need to manually get the settings and set the variables
				settings = olb_settings;
				if($.browser.msie && $.browser.version == 6){
					settings.theme = "light_square"; // Fallback to a supported theme for IE6
				}
				_buildOverlay(event.target); // Build the overlay {this} being the caller
				olb_images = $.makeArray(arguments[0]);
				olb_titles = (arguments[1]) ? $.makeArray(arguments[1]) : $.makeArray("");
				w01descriptions = (arguments[2]) ? $.makeArray(arguments[2]) : $.makeArray("");
				isSet = (olb_images.length > 1) ? true : false;
				set_position = 0;
			}

			if($.browser.msie && $.browser.version == 6){
				$('select').css('visibility','hidden'); // To fix the bug with IE select boxes
			}
			
			if(settings.hideflash){
				$('object,embed').css('visibility','hidden'); // Hide the flash
			}
			
			_checkPosition($(olb_images).size()); // Hide the next/previous links if on first or last images.
		
			$('.w01w9').show();
		
			// Fade the content in
			if($w01w5.is(':hidden')){
				$w01w5.css('opacity',0).show();
			}
			$w01z1.show().fadeTo(settings.animation_speed,settings.opacity);

			// Display the current position
			$w01w1.find('.currentTextHolder').text((set_position+1) + settings.counter_separator_label + $(olb_images).size());

			// Set the description
			//$w01w1.find('.w01description').show().html(unescape(w01descriptions[set_position]));

			// Set the title
			if(!olb_titles[set_position] || olb_titles[set_position] == ""){
				olb_titles[set_position] = false;			
			}
			if(!w01descriptions[set_position] || w01descriptions[set_position] == ""){
				w01descriptions[set_position] = false;			
			}
			if(olb_titles[set_position] && !w01descriptions[set_position] && settings.show_title){
				$w01w5.html(unescape(olb_titles[set_position]));
			}else if(w01descriptions[set_position] && settings.show_title){
				$w01w5.html(unescape(w01descriptions[set_position]));
			}else{
				$w01w5.html('');
			}
			
			// Get the dimensions
			movie_width = ( parseFloat(grab_param('width',olb_images[set_position])) ) ? grab_param('width',olb_images[set_position]) : settings.default_width.toString();
			movie_height = ( parseFloat(grab_param('height',olb_images[set_position])) ) ? grab_param('height',olb_images[set_position]) : settings.default_height.toString();
			
			// If the size is % based, calculate according to window dimensions
			if(movie_width.indexOf('%') != -1 || movie_height.indexOf('%') != -1){
				movie_height = parseFloat(($(window).height() * parseFloat(movie_height) / 100) - 150);
				movie_width = parseFloat(($(window).width() * parseFloat(movie_width) / 100) - 150);
				percentBased = true;
			}else{
				percentBased = false;
			}
			
			// Fade the holder
			$w01w1.fadeIn(function(){
				imgPreloader = "";
				
				// Inject the proper content
				switch(_getFileType(olb_images[set_position])){
					case 'image':
						imgPreloader = new Image();

						// Preload the neighbour images
						nextImage = new Image();
						if(isSet && set_position > $(olb_images).size()){
							nextImage.src = olb_images[set_position + 1];
						}
						prevImage = new Image();
						if(isSet && olb_images[set_position - 1]){
							prevImage.src = olb_images[set_position - 1];
						}

						$w01w1.find('#w01w12')[0].innerHTML = settings.image_markup;
						$w01w1.find('#fullResImage').attr('src',olb_images[set_position]);

						imgPreloader.onload = function(){
							// Fit item to viewport
							correctSizes = _fitToViewport(imgPreloader.width,imgPreloader.height);

							_showContent();
						};

						imgPreloader.onerror = function(){
							alert('Image cannot be loaded. Make sure the path is correct and image exist.');
							$.lightBox.close();
						};
					
						imgPreloader.src = olb_images[set_position];
					break;
				
					case 'youtube':
						correctSizes = _fitToViewport(movie_width,movie_height); // Fit item to viewport

						movie = 'http://www.youtube.com/v/'+grab_param('v',olb_images[set_position]);
						if(settings.autoplay){
							movie += "&autoplay=1";
						}
					
						toInject = settings.flash_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);
					break;
				
					case 'vimeo':
						correctSizes = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						movie_id = olb_images[set_position];
						var regExp = /http:\/\/(www\.)?vimeo.com\/(\d+)/;
						var match = movie_id.match(regExp);
						
						movie = 'http://player.vimeo.com/video/'+ match[2] +'?title=0&amp;byline=0&amp;portrait=0';
						if(settings.autoplay){
							movie += "&autoplay=1";
						}
				
						vimeo_width = correctSizes['width'] + '/embed/?moog_width='+ correctSizes['width'];
				
						toInject = settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,correctSizes['height']).replace(/{path}/g,movie);
					break;
				
					case 'quicktime':
						correctSizes = _fitToViewport(movie_width,movie_height); // Fit item to viewport
						correctSizes['height']+=15; correctSizes['contentHeight']+=15; correctSizes['containerHeight']+=15; // Add space for the control bar
				
						toInject = settings.quicktime_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,olb_images[set_position]).replace(/{autoplay}/g,settings.autoplay);
					break;
				
					case 'flash':
						correctSizes = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						flash_vars = olb_images[set_position];
						flash_vars = flash_vars.substring(olb_images[set_position].indexOf('flashvars') + 10,olb_images[set_position].length);

						filename = olb_images[set_position];
						filename = filename.substring(0,filename.indexOf('?'));
					
						toInject =  settings.flash_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+'?'+flash_vars);
					break;
				
					case 'iframe':
						correctSizes = _fitToViewport(movie_width,movie_height); // Fit item to viewport
						
						frame_url = olb_images[set_position];
						var ghash = olb_images[set_position];
						frame_url = frame_url.substr(0,frame_url.indexOf('iframe')-1);
						frame_url = (ghash.indexOf('#/') > -1) ? frame_url+'#/'+ghash.split('#/')[1] : frame_url;
						frame_url = (ghash.indexOf('#content') > -1) ? frame_url+'#content-'+ghash.split('#content-')[1] : frame_url;
						
						if (isIDevice()){
							toInject = settings.iframe_markup_idevice.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{path}/g,frame_url).replace(/{width20}/g,correctSizes['width'] - 20);
						}
						else
						{
							toInject = settings.iframe_markup.replace(/{width}/g,correctSizes['width']).replace(/{height}/g,correctSizes['height']).replace(/{path}/g,frame_url);
						}
					break;
					
					case 'custom':
						correctSizes = _fitToViewport(movie_width,movie_height); // Fit item to viewport
					
						toInject = settings.custom_markup;
					break;
				
					case 'inline':
						// to get the item height clone it, apply default width, wrap it in the lightBox containers , then delete
						myClone = $(olb_images[set_position]).clone().css({'width':settings.default_width}).wrapInner('<div id="w01w12"><div class="w01w16 clearfix"></div></div>').appendTo($('body'));
						correctSizes = _fitToViewport($(myClone).width(),$(myClone).height());
						$(myClone).remove();
						toInject = settings.inline_markup.replace(/{content}/g,$(olb_images[set_position]).html());
					break;
				}

				if(!imgPreloader){
					$w01w1.find('#w01w12')[0].innerHTML = toInject;
					// Show content
					_showContent();
				}
			});

			return false;
		};

	
		/**
		* Change page in the lightBox modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.lightBox.changePage = function(direction){
			currentGalleryPage = 0;
			
			if(direction == 'previous') {
				set_position--;
				if (set_position < 0){
					set_position = 0;
					return;
				}
			}else if(direction == 'next'){
				set_position++;
				if(set_position > $(olb_images).size()-1) {
					set_position = 0;
				}
			}else{
				set_position=direction;
			}

			if(!doresize){
				doresize = true; // Allow the resizing of the images
			}
			$('.w01contract').removeClass('w01contract').addClass('w01expand');

			_hideContent(function(){ $.lightBox.open(); });
		};


		/**
		* Change gallery page in the lightBox modal box
		* @param direction {String} Direction of the paging, previous or next.
		*/
		$.lightBox.changeGalleryPage = function(direction){
			if(direction=='next'){
				currentGalleryPage ++;

				if(currentGalleryPage > totalPage){
					currentGalleryPage = 0;
				}
			}else if(direction=='previous'){
				currentGalleryPage --;

				if(currentGalleryPage < 0){
					currentGalleryPage = totalPage;
				}
			}else{
				currentGalleryPage = direction;
			}
			
			// Slide the pages, if we're on the last page, find out how many items we need to slide. To make sure we don't have an empty space.
			itemsToSlide = (currentGalleryPage == totalPage) ? olb_images.length - ((totalPage) * itemsPerPage) : itemsPerPage;
			
			$w01w1.find('.w01w15 li').each(function(i){
				$(this).animate({
					'left': (i * itemWidth) - ((itemsToSlide * itemWidth) * currentGalleryPage)
				});
			});
		};


		/**
		* Start the slideshow...
		*/
		$.lightBox.startSlideshow = function(){
			if(typeof olb_slideshow == 'undefined'){
				$w01w1.find('.w01play').unbind('click').removeClass('w01play').addClass('w01pause').click(function(){
					$.lightBox.stopSlideshow();
					return false;
				});
				olb_slideshow = setInterval($.lightBox.startSlideshow,settings.slideshow);
			}else{
				$.lightBox.changePage('next');	
			}
		};


		/*
		* Stop the slideshow...
		*/
		$.lightBox.stopSlideshow = function(){
			$w01w1.find('.w01pause').unbind('click').removeClass('w01pause').addClass('w01play').click(function(){
				$.lightBox.startSlideshow();
				return false;
			});
			clearInterval(olb_slideshow);
			olb_slideshow=undefined;
		};


		/**
		* Closes lightBox.
		*/
		$.lightBox.close = function(){

			clearInterval(olb_slideshow);
			
			$w01w1.stop().find('object,embed').css('visibility','hidden');
			
			$('div.w01w1,div.w01w5,.w01w10').fadeOut(settings.animation_speed,function(){ $(this).remove(); });
			
			$w01z1.fadeOut(settings.animation_speed, function(){
				if($.browser.msie && $.browser.version == 6){
					$('select').css('visibility','visible'); // To fix the bug with IE select boxes
				}
				if(settings.hideflash){
					$('object,embed').css('visibility','visible'); // Show the flash
				}
				$(this).remove(); // No more need for the lightBox markup
				$(window).unbind('scroll');
				settings.callback();
				doresize = true;
				olb_open = false;
				delete settings;
			});
		};
	
		/**
		* Set the proper sizes on the containers and animate the content in.
		*/
		_showContent = function(){
			$('.w01w9').hide();
			
			$w01w5.fadeTo(settings.animation_speed,1);

			// Calculate the opened top position of the pic holder
			projectedTop = scroll_pos['scrollTop'] + ((windowHeight/2) - (correctSizes['containerHeight']/2));
			if(projectedTop < 0){
				projectedTop = 0;
			}
			// Resize the content holder
			$w01w1.find('.w01w8').animate({'height':correctSizes['contentHeight']},settings.animation_speed);
			
			// Resize picture the holder
			$w01w1.animate({
				'top': projectedTop,
				'left': (windowWidth/2) - (correctSizes['containerWidth']/2),
				'width': correctSizes['containerWidth']
			},settings.animation_speed,function(){
				$w01w1.find('.w01w11,#fullResImage').height(correctSizes['height']).width(correctSizes['width']);

				$w01w1.find('.w01w10').fadeIn(settings.animation_speed); // Fade the new content

				// Show the nav
				if(isSet && _getFileType(olb_images[set_position])=="image") { $w01w1.find('.w01w11').show(); }else{ $w01w1.find('.w01w11').hide(); }
			
				if(correctSizes['resized']){
					$('a.w01expand,a.w01contract').fadeIn(settings.animation_speed); // Fade the resizing link if the image is resized
				}
				if(settings.autoplay_slideshow && !olb_slideshow && !olb_open){
					$.lightBox.startSlideshow();
				}
				settings.changepicturecallback(); // Callback!
				olb_open = true;
			});
			_insert_gallery();
		};
		
		/**
		* Hide the content...DUH!
		*/
		function _hideContent(callback){
			// Fade out the current picture
			$w01w1.find('#w01w12 object,#w01w12 embed').css('visibility','hidden');
			$w01w1.find('.w01w10').fadeOut(settings.animation_speed,function(){
				$('.w01w9').show();
				
				callback();
			});
		}
	
		/**
		* Check the item position in the gallery array, hide or show the navigation links
		* @param setCount {integer} The total number of items in the set
		*/
		function _checkPosition(setCount){
			// If at the end, hide the next link
			if(set_position == setCount-1) {
				$w01w1.find('a.w01next').css('visibility','hidden');
				$w01w1.find('a.w01next').addClass('disabled').unbind('click');
			}else{ 
				$w01w1.find('a.w01next').css('visibility','visible');
				$w01w1.find('a.w01next.disabled').removeClass('disabled').bind('click',function(){
					$.lightBox.changePage('next');
					return false;
				});
			}
		
			// If at the beginning, hide the previous link
			if(set_position == 0) {
				$w01w1.find('a.w01previous').css('visibility','hidden').addClass('disabled').unbind('click');
			}else{
				$w01w1.find('a.w01previous.disabled').css('visibility','visible').removeClass('disabled').bind('click',function(){
					$.lightBox.changePage('previous');
					return false;
				});
			}
			(setCount > 1) ? $('.w01nav').show() : $('.w01nav').hide(); // Hide the bottom nav if it's not a set.
		}
	
		/**
		* Resize the item dimensions if it's bigger than the viewport
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		* @return An array containin the "fitted" dimensions
		*/
		function _fitToViewport(width,height){
			resized = false;

			_getDimensions(width,height);
			
			// Define them in case there's no resize needed
			imageWidth = width, imageHeight = height;

			if( ((olb_containerWidth > windowWidth) || (olb_containerHeight > windowHeight)) && doresize && settings.allow_resize && !percentBased) {
				resized = true, fitting = false;
			
				while (!fitting){
					if((olb_containerWidth > windowWidth)){
						imageWidth = (windowWidth - 200);
						imageHeight = (height/width) * imageWidth;
					}else if((olb_containerHeight > windowHeight)){
						imageHeight = (windowHeight - 200);
						imageWidth = (width/height) * imageHeight;
					}else{
						fitting = true;
					}

					olb_containerHeight = imageHeight, olb_containerWidth = imageWidth;
				}
			
				_getDimensions(imageWidth,imageHeight);
			}

			return {
				width:Math.floor(imageWidth),
				height:Math.floor(imageHeight),
				containerHeight:Math.floor(olb_containerHeight),
				containerWidth:Math.floor(olb_containerWidth) + 40, // 40 behind the side padding
				contentHeight:Math.floor(w01w8Height),
				contentWidth:Math.floor(w01w8Width),
				resized:resized
			};
		}
		
		/**
		* Get the containers dimensions according to the item size
		* @param width {integer} Width of the item to be opened
		* @param height {integer} Height of the item to be opened
		*/
		function _getDimensions(width,height){
			width = parseFloat(width);
			height = parseFloat(height);
			
			// Get the details height, to do so, I need to clone it since it's invisible
			$w01w13 = $w01w1.find('.w01w13');
			$w01w13.width(width);
			detailsHeight = parseFloat($w01w13.css('marginTop')) + parseFloat($w01w13.css('marginBottom'));
			$w01w13 = $w01w13.clone().appendTo($('body')).css({
				'position':'absolute',
				'top':-10000
			});
			detailsHeight += $w01w13.height();
			detailsHeight = (detailsHeight <= 34) ? 36 : detailsHeight; // Min-height for the details
			if($.browser.msie && $.browser.version==7){ detailsHeight+=8; }
			$w01w13.remove();
			
			// Get the container size, to resize the holder to the right dimensions
			w01w8Height = height + detailsHeight;
			w01w8Width = width;
			olb_containerHeight = w01w8Height + $w01w5.height() + $w01w1.find('.w01w2').height() + $w01w1.find('.w01w14').height();
			olb_containerWidth = width;
		}
	
		function _getFileType(itemSrc){
			if (itemSrc.match(/youtube\.com\/watch/i)) {
				return 'youtube';
			}else if (itemSrc.match(/vimeo\.com/i)) {
				return 'vimeo';
			}else if(itemSrc.indexOf('.mov') != -1){ 
				return 'quicktime';
			}else if(itemSrc.indexOf('.swf') != -1){
				return 'flash';
			}else if(itemSrc.indexOf('iframe') != -1){
				return 'iframe';
			}else if(itemSrc.indexOf('custom') != -1){
				return 'custom';
			}else if(itemSrc.substr(0,1) == '#'){
				return 'inline';
			}else{
				return 'image';
			}
		}
	
		function _center_overlay(){
			if(doresize && typeof $w01w1 != 'undefined') {
				scroll_pos = _get_scroll();
				
				titleHeight = $w01w5.height(), contentHeight = $w01w1.height(), contentwidth = $w01w1.width();
				
				projectedTop = (windowHeight/2) + scroll_pos['scrollTop'] - (contentHeight/2);
				
				$w01w1.css({
					'top': projectedTop,
					'left': (windowWidth/2) + scroll_pos['scrollLeft'] - (contentwidth/2)
				});
			}
		}
	
		function _get_scroll(){
			if (self.pageYOffset) {
				return {scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};
			} else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
				return {scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};
			} else if (document.body) {// all other Explorers
				return {scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};
			}
		}
	
		function _resize_overlay() {
			windowHeight = $(window).height(), windowWidth = $(window).width();
			if(typeof $w01z1 != "undefined"){
				$w01z1.height($(document).height());
				$w01z1.width($(document).width());
			}
		}
	
		function _insert_gallery(){
			if(isSet && settings.overlay_gallery && _getFileType(olb_images[set_position])=="image") {
				itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
				navWidth = (settings.theme == "w01") ? 58 : 38; // Define the arrow width depending on the theme
				
				itemsPerPage = Math.floor((correctSizes['containerWidth'] - 100 - navWidth) / itemWidth);
				itemsPerPage = (itemsPerPage < olb_images.length) ? itemsPerPage : olb_images.length;
				totalPage = Math.ceil(olb_images.length / itemsPerPage) - 1;

				// Hide the nav in the case there's no need for links
				if(totalPage == 0){
					navWidth = 0; // No nav means no width!
					$w01w1.find('.w01w15 .w01arrownext,.w01w15 .w01arrowprevious').hide();
				}else{
					$w01w1.find('.w01w15 .w01arrownext,.w01w15 .w01arrowprevious').show();
				}

				galleryWidth = itemsPerPage * itemWidth + navWidth;
				
				// Set the proper width to the gallery items
				$w01w1.find('.w01w15').width(galleryWidth).css('margin-left',-(galleryWidth/2));
				$w01w1.find('.w01w15 ul').width(itemsPerPage * itemWidth).find('li.selected').removeClass('selected');
			
				goToPage = (Math.floor(set_position/itemsPerPage) <= totalPage) ? Math.floor(set_position/itemsPerPage) : totalPage;
				
				
				if(itemsPerPage) {
					$w01w1.find('.w01w15').hide().show().removeClass('disabled');
				}else{
					$w01w1.find('.w01w15').hide().addClass('disabled');
				}
				
				$.lightBox.changeGalleryPage(goToPage);
				
				$w01w1.find('.w01w15 ul li:eq('+set_position+')').addClass('selected');
			}else{
				$w01w1.find('.w01w8').unbind('mouseenter mouseleave');
				$w01w1.find('.w01w15').hide();
			}
		}
	
		function _buildOverlay(caller){
			// Find out if the picture is part of a set
			theRel = $(caller).attr('rel');
			galleryRegExp = /\[(?:.*)\]/;
			isSet = (galleryRegExp.exec(theRel)) ? true : false;
			
			// Put the SRCs, TITLEs, ALTs into an array.
			olb_images = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr('rel').indexOf(theRel) != -1) return $(n).attr('href'); }) : $.makeArray($(caller).attr('href'));
			olb_titles = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr('rel').indexOf(theRel) != -1) return ($(n).find('img').attr('alt')) ? $(n).find('img').attr('alt') : ""; }) : $.makeArray($(caller).find('img').attr('alt'));
			w01descriptions = (isSet) ? jQuery.map(matchedObjects, function(n, i){ if($(n).attr('rel').indexOf(theRel) != -1) return ($(n).attr('title')) ? $(n).attr('title') : ""; }) : $.makeArray($(caller).attr('title'));
			
			$('body').append(settings.markup); // Inject the markup
			
			$w01w1 = $('.w01w1') , $w01w5 = $('.w01w5'), $w01z1 = $('div.w01z1'); // Set my global selectors
			
			// Inject the inline gallery!
			if(isSet && settings.overlay_gallery) {
				currentGalleryPage = 0;
				toInject = "";
				for (var i=0; i < olb_images.length; i++) {
					var regex = new RegExp("(.*?)\.(jpg|jpeg|png|gif)$");
					var results = regex.exec( olb_images[i] );
					if(!results){
						classname = 'default';
					}else{
						classname = '';
					}
					toInject += "<li class='"+classname+"'><a href='#'><img src='" + olb_images[i] + "' width='50' alt='' /></a></li>";
				}
				
				toInject = settings.gallery_markup.replace(/{gallery}/g,toInject);
				
				$w01w1.find('#w01w12').after(toInject);
				
				$w01w1.find('.w01w15 .w01arrownext').click(function(){
					$.lightBox.changeGalleryPage('next');
					$.lightBox.stopSlideshow();
					return false;
				});
				
				$w01w1.find('.w01w15 .w01arrowprevious').click(function(){
					$.lightBox.changeGalleryPage('previous');
					$.lightBox.stopSlideshow();
					return false;
				});
				
				$w01w1.find('.w01w8').hover(
					function(){
						$w01w1.find('.w01w15:not(.disabled)').fadeIn();
					},
					function(){
						$w01w1.find('.w01w15:not(.disabled)').fadeOut();
					});

				itemWidth = 52+5; // 52 beign the thumb width, 5 being the right margin.
				$w01w1.find('.w01w15 ul li').each(function(i){
					$(this).css({
						'position':'absolute',
						'left': i * itemWidth
					});

					$(this).find('a').unbind('click').click(function(){
						$.lightBox.changePage(i);
						$.lightBox.stopSlideshow();
						return false;
					});
				});
			}
			
			// Inject the play/pause if it's a slideshow
			if(settings.slideshow){
				$w01w1.find('.w01nav').prepend('<a href="#" class="w01play">Play</a>')
				$w01w1.find('.w01nav .w01play').click(function(){
					$.lightBox.startSlideshow();
					return false;
				});
			}
			
			$w01w1.attr('class','w01w1 ' + settings.theme); // Set the proper theme
			
			$w01z1.css({
					'opacity':0,
					'height':$(document).height(),
					'width':$(document).width()
					})
				.bind('click',function(){
					if(!settings.modal){ $.lightBox.close(); }
				});

			$('a.w01close').bind('click',function(){ $.lightBox.close(); return false; });

			$('a.w01expand').bind('click',function(e){
				// Expand the image
				if($(this).hasClass('w01expand')){
					$(this).removeClass('w01expand').addClass('w01contract');
					doresize = false;
				}else{
					$(this).removeClass('w01contract').addClass('w01expand');
					doresize = true;
				}
			
				_hideContent(function(){ $.lightBox.open(); });
		
				return false;
			});
		
			$w01w1.find('.w01previous, .w01nav .w01arrowprevious').bind('click',function(){
				$.lightBox.changePage('previous');
				$.lightBox.stopSlideshow();
				return false;
			});
		
			$w01w1.find('.w01next, .w01nav .w01arrownext').bind('click',function(){
				$.lightBox.changePage('next');
				$.lightBox.stopSlideshow();
				return false;
			});
			
			_center_overlay(); // Center it
		}
		return this.unbind('click').click($.lightBox.initialize); // Return the jQuery object for chaining. The unbind method is used to avoid click conflict when the plugin is called more than once
	};
	
	function grab_param(name,url){
	  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	  var regexS = "[\\?&]"+name+"=([^&#]*)";
	  var regex = new RegExp( regexS );
	  var results = regex.exec( url );
	  return ( results == null ) ? "" : results[1];
	}
})(jQuery);

function w01IframeResize(){
	if (isIDevice()){
		if ($('.iDeviceInnerDiv').height() > $('.iDeviceInner').height() + 10){
			$('.ifrm').css('width', ($('.ifrm').width() - 20) + 'px');
			$('.iDeviceInnerDiv').css('padding-left', '20px');
			//alert("add scrollbar");
		}
	}try{
		document.getElementById('ifrm').contentWindow.videoTrackingFunction();
	}
	catch (e){
		// Iframe is not accessible due to domain sandbox.
	}
}

var w01MouseDownY;
var w01FrameY;

jQuery('.iDeviceInnerDiv').live('touchstart', function(evt){
	evt.preventDefault();
	var orig = evt.originalEvent;
	w01MouseDownY = orig.changedTouches[0].pageY;
	w01FrameY = parseInt(jQuery('.iDeviceInnerDiv').css('top').replace('px', ''));
});

jQuery('.iDeviceInnerDiv').live('touchmove', function(evt){
	evt.preventDefault();
	var orig = evt.originalEvent;  
	var ey = orig.changedTouches[0].pageY; 
	var diff = ey - w01MouseDownY;
	var p = w01FrameY + diff;
	if (p > 0) p = 0;
	var h = jQuery('.iDeviceDiv').height();
	var h2 = jQuery('.iDeviceInnerDiv').height();
	var my = h - h2;
	if (p < my) p = my;
	jQuery('.iDeviceInnerDiv').css('top', p + 'px');
});

jQuery('.iDeviceInnerDiv').bind('touchend', function(evt){
	// do nothing apparently
});

jQuery(document).ready(function($) {
	$("a[rel^='lightBox']").lightBox();
});

	/*! W06 */
jQuery(document).ready(function($){
	$('div.w06').each(function(){
		// set thumb container width to allow centering of thumbs
		$(this).find('div.w06w3').css('width',($(this).find('div.w06w3 div.w06thumbs div').length * 118) + 'px');
		$(this).find('div.w06w1').append('<div class="w06nav w06nav-prev" style="display:none"><a id="w06nav-prev" class="w06lnk w06navlnk" href=""></a></div>');
		$(this).find('div.w06w1').append('<div class="w06nav w06nav-next"><a id="w06nav-next" class="w06lnk w06navlnk" href="#content-2"></a></div>');
		$(this).find('div.w06thumbs div').each(function(i){
			$(this).wrapInner('<a href="#content-'+(i+1)+'" class="w06lnk"></a>');
		});

		// onready hash check for w06
		var loco = document.location.href;
		if(loco.indexOf('#content-') > 0 && document.getElementById(loco.split('#')[1])){
			var cn = loco.split('#content-')[1];
			$('div.active').removeClass('active');
			$('div.w06thumbs div a[href*="'+'#'+loco.split('#')[1]+'"]').parent().addClass('active');
			$('div.w06 div.w06w4').attr('id','w4-'+cn);
			chknav(cn);
			hidew4s(cn);
			movew4s(cn);
		}else{
			$('div.w06thumbs div a[href*="#content-1"]').parent().addClass('active');
			$('div.w06 div.w06w4').attr('id','w4-1');
			hidew4s(1);
		}

		function hidew4s(crnt){
			crnt = crnt * 1;
			$('div.w06contentpane').each(function(){
				var thisn = $(this).attr('id').split('content-')[1] * 1;
				if(thisn == (crnt - 1)){
					$('#content-'+thisn).show();
					$('#content-'+thisn).parent().css('left','-780px');
				}else if(thisn == (crnt + 1)){
					$('#content-'+thisn).show();
				}else if(thisn != crnt){
					$('#content-'+thisn).hide();
				}
			});
		}

		function movew4s(trgt){
			trgt = trgt * 1;
			var w4 = $('div.w06 div.w06w4');
			var crnt = w4.attr('id').split('w4-')[1] * 1;
			w4.attr('id','w4-'+trgt);

			if(trgt > (crnt + 1)){
				$('#content-'+(crnt + 1)).hide();
				$('#content-'+trgt).show();
			}else if(trgt < (crnt - 1)){
				$('#content-'+(crnt - 1)).hide();
				$('#content-'+trgt).show();
			}
			if(trgt > crnt){
				w4.animate({left:(w4.css('left').split('px')[0] - 780)},500,'easeOutSine',function(){
					hidew4s(trgt);
				
				});
			}else if(trgt < crnt){
				w4.animate({left:(0)},500,'easeOutSine',function(){hidew4s(trgt);});
			}
		}

		function chknav(trgt){
			trgt = trgt * 1;
			if((trgt - 1) == 0){
				$('#w06nav-prev').attr('href','').parent().hide();
			}else{
				$('#w06nav-prev').attr('href','#content-'+(trgt - 1)).parent().css('display','');				
			}
			if(document.getElementById('content-'+(trgt + 1))){
				$('#w06nav-next').attr('href','#content-'+(trgt + 1)).parent().css('display','');
			}else{
				$('#w06nav-next').attr('href','').parent().hide();
			}
		}

		$(this).find('a.w06lnk').bind('click',function(e){
			if($(this).attr('href').indexOf('#content-') > -1){
				var trgt = $(this).attr('href').split('content-')[1];
				$(this).closest('div.w06').find('div.active').removeClass('active');
				$($(this).closest('div.w06').find('div.w06thumbs div').get(((trgt * 1) - 1))).addClass('active');
				movew4s(trgt);
				chknav(trgt);
			}
			e.preventDefault();

		});


	});
	
	
	
});

	

	/*! CT01 */
(function($) {
	$('ul.ct01tabs li a').live('focus', function(event) {
		if(!$(this).parent().hasClass('ct01ctab')){
			$(this).parent().addClass('ct01hover');
		}
	});	
	$('ul.ct01tabs li a').live('blur', function(event) {
		if(!$(this).parent().hasClass('ct01ctab')){
			$(this).parent().removeClass('ct01hover');
		}
	});	
	$('ul.ct01tabs li a').live('mouseover mouseout', function(event) {
		if(!$(this).parent().hasClass('ct01ctab')){
			if (event.type == 'mouseover') {
				$(this).parent().addClass('ct01hover');
			}else{
				$(this).parent().removeClass('ct01hover');
			}
		}
	});	
	$('ul.ct01tabs li.ct01ctab a').live('click', function(event) {
		return false;
	});	
})(jQuery);


	/*! C26 */
(function($) {
	var c26LastTarget;
	$(document).ready(function(){
		$(".c26 li a").bind('mouseover focus', function(){
				c26Grow($(this).parent());
			});
		$(".c26 li a").bind('mouseout blur', function(){
				c26Shrink($(this).parent());
			});

		$('#c26m0').show();
		
		$('a.c26link').click(function(e){
			e.preventDefault();
		});
	});
	
	function c26Grow(tgt){
		var p = $(tgt).closest('.c26w1, .c26w3');
		$(p).css('z-index', '1');
		$(p).css('border', 'none');
		$(tgt).css({'z-index' : '10'}); /*Add a higher z-index value so this image stays on top*/ 
		$(tgt).find('img').addClass("hover").stop() /* Add class of "hover", then stop animation queue buildup*/
			.animate({
				marginTop: '-48px', /* The next 4 lines will vertically align this image */ 
				marginLeft: '-50px',
				top: '30px',
				left: '36px',
				width: '84px', /* Set new width */
				height: '76px', /* Set new height */
				padding: '8px'
			}, 80, 'swing'); /* this value of "200" is the speed of how fast/slow this hover animates */
		
		$('.c26w4').children('div').stop().hide();
		var vt = $(tgt).find('a').attr('href');
		
		$(vt).show();
	}
	
	function c26Shrink(tgt){
		c26LastTarget = null;
		var p = $(tgt).closest('.c26w1, .c26w3');
		$(p).css('z-index', '0');
		$(tgt).css({'z-index' : '0'}); /* Set z-index back to 0 */
		var left = 1.166 * $(tgt).find('img').position().left;
		var top = 1.266 * $(tgt).find('img').position().top;
		$(tgt).find('img').css({'left' : left + 'px'});
		$(tgt).find('img').css({'top' : top + 'px'});
		$(tgt).find('img').removeClass("hover").stop()  /* Remove the "hover" class , then stop animation queue buildup*/
			.animate({
				width: '71px', /* Set width back to default */
				height: '66px', /* Set height back to default */
				marginTop: '0px', /* Set alignment back to default */
				marginLeft: '0px',
				top: '0px',
				left: '0px',
				padding: '0px'
			}, 80, 'swing');
	}
})(jQuery);

	
	/*! W01v1 */
(function($) {

	var etype = (navigator.userAgent.match(/iPad|iPhone/i)) ? "touchstart" : "click";
	$("a[rel^='brightcoveLightBox']").live(etype,function(e) { 
	
		function iDevice(){
			if (navigator.platform.indexOf("iPad") != -1) return true;
			if (navigator.platform.indexOf("iPhone") != -1) return true;
			if (navigator.platform.indexOf("iPod") != -1) return true;
			return false;
		}
	
		e.preventDefault();
	
		var urlParams = getUrlParams($(this).attr('href'));
		var settings = w01getBrightcoveSettings(urlParams);
		var bcExperienceID = 'myExperience' + Math.random();
		var caption = $(this).attr('title');

				
		if (!urlParams['bctid']) {
			alert('This request does not contain a "bctid" value.');
			return;
		}


		if ($(this).closest('div.cw01').length == 0){
			
// lightbox html
var markup = '<div class="w01 w01v1"><div class="w01w1"><div class="w01w2">\
<div class="w01w3"></div>\
<div class="w01w4">\
<div class="w01w5">'+caption+'</div>\
<a class="w01close" href="#">'+ocomltxt[ocomlang].close+'</a>\
</div>\
<div class="w01w6"></div>\
</div>\
<div class="w01w7"><div class="w01w3"><div class="w01w6"><div class="w01w8"><div class="w01w9"></div><div class="w01w10"><div class="w01w11">\
<a class="w01next disabled" href="#" style="visibility:hidden;">next</a> <a class="w01previous disabled" href="#" style="visibility:hidden;">previous</a>\
</div>\
<div id="w01w12"></div>\
<div class="w01w13 clearfix">\
<p class="w01description"></p>\
</div></div></div></div></div></div>\
<div class="w01w14"><div class="w01w3"></div><div class="w01w4"></div><div class="w01w6"></div>\
</div></div></div>\
<div class="w01z1"></div>';				
			
			// set brightcove object 
			var toInject = buildBrightcoveObject(bcExperienceID, settings);
																
			// add the lightbox markup
			$('body').append(markup); 
			
			// inject the brightcove object
			$(".w01w1").find('#w01w12')[0].innerHTML = toInject;
			
			// set the lightbox container width
			$(".w01w1").css({  
				"width": settings['width'] + 42
			}); 
			// set the lightbox content height
			$(".w01w8").css({  
				"height": settings['height'] + 40
			}); 
			
			// set to fall back theme for IE6
			if ($.browser.msie && parseInt($.browser.version) == 6) { 
				$('.w01').attr('class','w01 w01v3'); 
			}
			
			// detect idevices
			if (iDevice()) { 
				$('.w01').attr('class','w01 w01v4'); 
			}
			
			// run mobile compatibility script for On Demand players
			if ((settings['playerType'] == 'single') || (settings['playerType'] == 'single-social')) { 
				runMobileCompatibilityScript(bcExperienceID, settings['width'], settings['height'], bcExperienceID + '-video');	
			} 
			
			// load brightcove getExperience() and createExperience() methods
			brightcove.createExperiences();	
			
			// center lightbox
			var windowWidth  = $(window).width();  
			var windowHeight = $(window).height();
			var scrollPos    = getScroll();
			var projectedTop = (($.browser.msie && $.browser.version == 6) || iDevice()) ? scrollPos['scrollTop'] + ((windowHeight/2) - (settings['height']/2)) : ((windowHeight/2) - (settings['height']/2));
			
			$(".w01").css({  
				"top": projectedTop,  
				"left": (windowWidth/2) - (settings['width']/2)  
			}); 
			
			// build overlay
			$('.w01z1')
				.css({	
					'opacity':0.80,
					'height':$(document).height(),
					'width':$(document).width()
				})
				.bind('click',function(e){
					e.preventDefault();
					w01brightcoveLightboxClose();
				});	
			
			// show lightbox 
			$(".w01").fadeIn("fast"); 
			// show overlay
			$('.w01z1').fadeIn("fast"); 
			
			// bind close button
			$('a.w01close').bind('click',function(e) { 
				e.preventDefault();
				w01brightcoveLightboxClose();
			});  
		
			// if twitter widget present hide in iOS to avoid flicker
			if (iDevice() && $('#twtr-widget-1')[0]) { 
				$('#twtr-widget-1').css('visibility','hidden')
			}
		
			function w01brightcoveLightboxClose() {
				// close lightbox
				$('.w01').fadeOut("fast");  
				// close overlay
				$('.w01z1').fadeOut("fast");  
				// remove lightBox markup
				$('.w01').remove(); 
				// remove overlay markup
				$('.w01z1').remove(); 
				// To fix the bug with IE select boxes
				if($.browser.msie && $.browser.version == 6) $('#searchForm').css('visibility','visible'); 
				// if twitter widget present hide in iOS to avoid flicker
				if (iDevice() && $('#twtr-widget-1')[0]) { 
					$('#twtr-widget-1').css('visibility','visible')
				}
		
				return false; 
			}
		}else{
		
			// set brightcove object 
			var toInject = buildBrightcoveObject(bcExperienceID, settings);

			$(this).closest('div.cw01').append('<div class="cw01vid" id="cw01vid"><div>'+toInject+'</div><a href="#finish" class="cw01vidbttn" data-trackas="cw01" data-lbl="step-'+$(this).closest('div.cw01').attr('id').split('cw01-')[1]+'-finish-video-bttn">'+ocomltxt[ocomlang].finish+' <em>x</em></a></div>');
		
			// run mobile compatibility script for On Demand players
			if ((settings['playerType'] == 'single') || (settings['playerType'] == 'single-social')) { 
				runMobileCompatibilityScript(bcExperienceID, settings['width'], settings['height'], bcExperienceID + '-video');	
			} 
			
			// load brightcove getExperience() and createExperience() methods
			brightcove.createExperiences();	

			$('#cw01vid').fadeIn(400);

		}
	
	});

})(jQuery);

function getUrlParams(url) {
    var result = {};
	var params;
	if (url) { 
    	params = url.split('?')[1].split('&');
		for (var param in params) {	
			if (params.hasOwnProperty(param)) {
				paramParts = params[param].split('=');
				result[paramParts[0]] = decodeURIComponent(paramParts[1] || "");
			}
		}
	} 
    return result;
}

function buildBrightcoveObject(bcExperienceID, settings) {	

	var bcObject = '<object id="' + bcExperienceID + '" class="BrightcoveExperience">\
		<param name="bgcolor" value="#FFFFFF" />\
		<param name="width" value="' + settings['width'] + '" />\
		<param name="height" value="' + settings['height'] + '" />\
		<param name="playerID" value="' + settings['playerID'] + '" />\
		<param name="playerKey" value="' + settings['playerKey'] + '" />\
		<param name="publisherID" value="1460825906" />\
		<param name="autoStart" value="true" />\
		<param name="isVid" value="true" />\
		<param name="isUI" value="true" />\
		<param name="dynamicStreaming" value="true" />\
		<param name="@videoPlayer" value="' + settings['bctid'] + '" />\
		<param name="@videoList" value="' + settings['videoList'] + '" />\
		<param name="wmode" value="transparent" />\
		</object>';	
		
	return bcObject;
}

function w01displayBrightcoveObject(bcExperienceID) {
	var url = jQuery(location).attr('href');
	var urlParams = getUrlParams(url); 
	var settings = w01getBrightcoveSettings(urlParams);
	var markup = buildBrightcoveObject(bcExperienceID, settings);
	var apiToken = 'T7xCfCw-ltEC2LVkO0fqsiQttq-bMrJwaV0dV7_TD_k.';
	var apiRequestUrl = 'http://api.brightcove.com/services/library?';
	
	jQuery(".w01v2").append(markup);
	
	// run mobile compatibility script for On Demand players
	if ((settings['playerType'] == 'single') || (settings['playerType'] == 'single-social')) {
		runMobileCompatibilityScript(bcExperienceID, settings['width'], settings['height'], bcExperienceID + '-video');	
	}
	
	// get video or playlist name via brightcove api if not a live video player
	if ((settings['playerType'] != 'live-primary') && (settings['playerType'] != 'live-secondary')) {
		switch (settings['playerType']) {
			case "single":
			case "single-social":
				apiRequestUrl += 'command=find_video_by_id&video_id=' + settings['bctid'] + '&video_fields=name&token=' + apiToken;
				break;
			case "playlist":
			case "playlist-social":
				apiRequestUrl += 'command=find_playlist_by_id&playlist_id=' + settings['videoList'] + '&video_fields=name&token=' + apiToken;
				break;
			default:
				apiRequestUrl += 'command=find_video_by_id&video_id=' + settings['bctid'] + '&video_fields=name&token=' + apiToken;
				break;
		}
		
		addScriptTag('w01setBrightcoveVideoName', apiRequestUrl, 'w01setBrightcoveVideoName');
	} else {
		jQuery(".w01v2").find('.w01w2').html('Streaming Live');	
	}
}

function w01setBrightcoveVideoName(jsonData) {
	jQuery(".w01v2").find('.w01w2').html(jsonData['name']);
}

function getScroll() {
	if (self.pageYOffset) {
		return {scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset};
	} else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
		return {scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft};
	} else if (document.body) {// all other Explorers
		return {scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft};
	}
}

		
	// runsetup --> NOTE: the runsetup.js has component specific includes in it!!!
	/*! RUNSETUP */

// onready functions that also run after ajax/hijax calls
// the onready functions must be structured as....
//
// $(context).find('div.foo').each(function()...etc...
//
// where $(context) is a jquery object, which can be the document
// as in the case of on dom ready, or a jquery object/container
// that contains freshly loaded ajax content. 
//
// in cases where you need to bind .live events you may do so
// in the same included file but you can wrap the .live call
// with the condition...
//
// if(firstrun){ ...do something... } 
//
// functions inside that if statement will only run on dom ready
// 
// if a function must be run on domload and on subsequent run_setup
// calls, but there is a danger in the possible secondary manipulation
// of an object twice then add a class flag to the object and put a
// conditional in your function to prevent an object from being processed
// more than once, like...
//
// $(context).find('div.c32').each(function() {
// 	 if(!$(this).hasClass('c32processed')){
// 		$(this).addClass('c32processed');
// 		...do something only once but not exclusively on dom ready...
// 	 }
// });
// 

jQuery(document).ready(function($) {
	run_setup(document,true);
});

function run_setup(context,firstrun){
	(function($) {

		/*! C32 */
$(context).find('div.c32').each(function() {
	var c32 = $(this);
	if(!c32.hasClass('c32processed')){
		c32.addClass('c32processed');
		c32.css('border-bottom','0');
		c32.find('div.c32w2').last().addClass('c32w2last');
		c32.find('h5.c32h5').each(function(){
			$(this).wrapInner('<a href="#togglepane"></a>');
		});
		if(c32.hasClass('c32collapseall')){
			c32.find('div.c32w1').each(function(){
				$(this).addClass('c32collapsed');
			});
			c32.removeClass('c32collapseall');
		}
	}
});

if(firstrun){
	$('div.c32 h5.c32h5 a').live('click',function(e){
		$(this).parent().parent().toggleClass('c32collapsed');
		return false;
	});
}


		/*! C36 */
$(context).find('div.c36').each(function() {

	if($(this).find('ul')[0]){

		var o = '';
		if($(this).find('h5')[0]){
			o += '<option value="" class="c36Heading">'+$(this).find('h5').first().text()+'</option>\n';
			$(this).find('h5').first().remove();
		}
		$(this).find('ul').each(function() {
			$(this).find('li').each(function() {
				var s = ($(this).hasClass('selected'))? ' selected="selected"' : '';
				var h = (!$(this).find('a')[0])? ' disabled="disabled" value=""' : ' value="'+$(this).find('a')[0].href+'"';
				o += '<option'+s+h+'>'+$(this).text()+'</option>\n';
			});	
			$(this).remove();
		});	
		o = $('<form method="get"><select>\n'+o+'</select></form>');
		o.find('select').first().get(0).onchange = function(){
			if($(this).closest('div.hijax')[0] && !$(this).closest('#.nohijax')[0]){
				oHijax($($(this)[0].options[$(this)[0].selectedIndex]));
			}else{
				if($(this)[0].options[$(this)[0].selectedIndex].value != "" && $(this)[0].options[$(this)[0].selectedIndex].getAttribute("value")){
					document.location = $(this)[0].options[$(this)[0].selectedIndex].value;
				}
			}
			$(this).trigger('click');
		};
		$(this).append(o);
	// THIS RE-ATTACHES THE ONCHANGE EVENT ON A BACK BUTTON PAGE CHANGE	
	}else if($(this).find('select')[0]){
		$(this).find('select').first().get(0).onchange = function(){
			if($(this).closest('div.hijax')[0] && !$(this).closest('#.nohijax')[0]){
				oHijax($($(this)[0].options[$(this)[0].selectedIndex]));
			}else{
				if($(this)[0].options[$(this)[0].selectedIndex].value != "" && $(this)[0].options[$(this)[0].selectedIndex].getAttribute("value")){
					document.location = $(this)[0].options[$(this)[0].selectedIndex].value;
				}
			}
		};
	}
});


		
		/*! CW01 */
$(context).find('div.cw01').each(function(k) {

	if(k > 0){
		k = '-'+k;
	}else{
		k = '';
	}
		
   $(this).find('h5[class*="cw01"]').append('<span />');
	$(this).find('div.cw01content').hide();

	// add step class and id to each section
    $(this).find('div.cw01section').each(function(n){
        $(this).attr('id','cw01step'+k+'-'+(n+1));
        $(this).attr('data-lbl','step-'+(n+1));
        $(this).addClass('cw01step-'+(n+1));
    });

	// add first/last class to buttons for corner styling
    $(this).find('div.cw01bttn').first().addClass('cw01first');
    $(this).find('div.cw01bttn').last().addClass('cw01last');

	// add first/last class to inner section div for corner styling
    $(this).find('div.cw01w2').first().addClass('cw01tl');
    $(this).find('div.cw01w2').last().addClass('cw01tr');

	// add class and A tag around the buttons
    $(this).find('div.cw01bttn').each(function(n){
        $(this).addClass('cw01step-'+(n+1));
        $(this).wrapAll('<a href="#cw01step'+k+'-'+(n+1)+'" class="cw01steplink cw01bttnlink" data-lbl="step-'+(n+1)+'-open" />');
    });

	$(this).find('div.cw01img').each(function(n){
        $(this).wrapInner('<a href="#cw01step'+k+'-'+(n+1)+'" class="cw01steplink" data-lbl="step-'+(n+1)+'-open"/>');
    });

	$(this).find('a[rel*="lightbox"],a[rel*="opop"]').each(function(){
		if(!$(this).attr('data-lbl') && $(this).attr('title')){
			var lbl = '-'+$(this).attr('title').toLowerCase().replace(/ /g,'-');
		}else if ($(this).attr('data-lbl')){
			var lbl = '-'+$(this).attr('data-lbl');
		}else if ($(this).text()){
			var lbl = $(this).text().toLowerCase().replace(/ /g,'-').replace(/-+/g,'-');
		}else{
			var lbl = '';
		}
        $(this).attr('data-lbl',$(this).closest('div.cw01section').attr('data-lbl')+lbl);
        $(this).attr('data-trackas','cw01');
	});

	$(this).find('a[href^="#show-"]').each(function(){
		var lb = ($(this).attr('data-lbl')) ? '-'+$(this).attr('data-lbl') : '';
		$(this).attr('href','cw01step'+k+'-'+$(this).attr('href').split('-')[1]).addClass('cw01steplink').attr('data-lbl','step-'+$(this).attr('href').split('-')[1]+lb+'-open-from-content')
	});


	$(this).addClass('cw01fixed');
	$(this).attr('id','cw01-0');

});

if(firstrun){
    $('div.cw01').on('click','a.cw01steplink',function(e){
		$('div.cw01 a.cw01steplink').each(function(){
			if($(this).attr('data-lbl') == 'notrack'){
				if($(this).attr('href').split('-')[2]){
					$(this).attr('data-lbl','step-'+$(this).attr('href').split('-')[2]+'-open');
				}else{
					$(this).attr('data-lbl','step-'+$(this).attr('href').split('-')[1]+'-open');
				}
			}
		});
		var w = $(this).closest('div.cw01w1').find('div.cw01section').length * 235;
		var c = $(this).closest('div.cw01').attr('id').split("cw01-")[1];
		if($(this).attr('href').split('-')[2]){
			var t = $(this).attr('href').split("step-")[1].split("-")[1];
			var k = '-'+$(this).attr('href').split("step-")[1].split("-")[0];
		}else{
			var t = $(this).attr('href').split("step-")[1].split("-")[0];
			var k = '';
		}
		
		var n = 1;
		if (c != t){
			$('div[id*="cw01step'+k+'-"]').find('div.cw01content').show();
			while(document.getElementById('cw01step'+k+'-'+n)){
				if (n <= t){
					$('div#cw01step'+k+'-'+n).animate({left:0},500,'easeOutSine')
					$('div#cw01step'+k+'-'+n+' div.cw01w2').first().addClass('cw01tl');
					$('div#cw01step'+k+'-'+n+' div.cw01w2').first().removeClass('cw01tr');
				}else{
					$('div#cw01step'+k+'-'+n).animate({left:w},500,'easeOutSine',function(){
						$(this).find('div.cw01w2').first().removeClass('cw01tl');
						$(this).find('div.cw01w2').first().removeClass('cw01tr');
					});
				}
				n++;
			}
			$(this).closest('div.cw01').attr('id','cw01-'+t);
		}else{
		    $('div.cw01 a.cw01steplink').each(function(){
		    	$(this).attr('data-lbl','notrack');
		    });

			while(document.getElementById('cw01step'+k+'-'+n)){
				$('div#cw01step'+k+'-'+n).animate({left:(235 * (n-1))},500,'easeOutSine',function(){
					$(this).find('div.cw01content').hide();
				});

				$('div#cw01step'+k+'-'+n).find('div.cw01w2').first().removeClass('cw01tr');
				$('div#cw01step'+k+'-'+n).find('div.cw01w2').first().removeClass('cw01tl');

				n++;
			}

			$('div#cw01step'+k+'-'+'1').find('div.cw01w2').first().addClass('cw01tl');
			$('div#cw01step'+k+'-'+(n - 1)).find('div.cw01w2').first().addClass('cw01tr');
			$(this).closest('div.cw01').attr('id','cw01-0');
		}
		e.preventDefault();
    });

	$('div.cw01').on('click','a.cw01vidbttn',function(e){
		$(this).parent().fadeOut(700,function(){
			$(this).remove();
		});
		e.preventDefault();
	});


}

	})(jQuery);
}



	/*! LEGACY.HEADER */
jQuery(document).ready(function($) {

	//////////////////////////////////////////
	// functions for header keyboard access //
	//////////////////////////////////////////
	var nfocus = null;
	function closehmenus(){
		$('ul#navigation li.top-level.hover').each(function() {	$(this).removeClass('hover'); });
		$('div.welcomesignin_wrapper div[id^="panelDiv"]').each(function() { mvqMOu($(this).attr('id')); });
		$('#panelDiv_search').css('visibility','hidden');
	}
	
	// add hover class swap in LI for ie6
	$('ul#navigation li').bind('mouseover mouseout', function(event) {
		closehmenus();
		if (event.type == 'mouseover') {
			$(this).addClass('hover');
		}else{
			nfocus = null;
		}
	});	
	
	// add keyboard access for main menu items
	$('ul#navigation li.top-level > p > a').bind('focus', function(event) {
		closehmenus();
		$(this).parent().parent().addClass('hover');
		nfocus = $(this).parent().parent().next('li.top-level').find('p > a');
	});	
	$('ul#navigation li.top-level a.lastmenulink').bind('blur', function(event) {
		nfocus = null;
		closehmenus();
	});	
	
	// add keyboard access for welcomesignin_wrapper menu items
	$('div.welcomesignin_wrapper a.htoolbar').bind('focus', function(event) {
		closehmenus();
		mvqMOv($(this).nextAll('div').attr('id'),$(this).find('img').attr('id'));
		nfocus = ($(this).attr('id').split('htoolbar-')[1] * 1) + 1;
		nfocus = (document.getElementById('htoolbar-'+nfocus)) ? $('a#htoolbar-'+nfocus) : $('div.search_text a').first();
	});	
	$('div.welcomesignin_wrapper a.lastmenulink').bind('blur', function(event) {
		nfocus = null;
		closehmenus();
	});
	
	$('div.search_text a').bind('click', function(event) {
		$(this).parent().find('div#panelDiv_search').css('visibility','visible');
		return false;
	});	
	$('div.search_text a').bind('focus', function(event) {
		closehmenus();
		$(this).parent().find('div#panelDiv_search').css('visibility','visible');
	});	
	$('#panelDiv_search').bind('mouseleave', function(event) {
		closehmenus();
	});	
	$('#txtSearch').bind('focus', function(event) {
		closehmenus();
		if(!isUserInput) {
			document.searchForm.q.value='';
		}
	});	
	
	// skip bar functions
	$('#skipbar a').bind('focus', function(event) {
		closehmenus();
		$('#skipbar').addClass('showskip');
		nfocus = $('a.sunmenuimglink');
	});	
	
	$('#skipbar a').bind('blur', function(event) {
		nfocus = null;
		$('#skipbar').removeClass('showskip');
	});	
	
	$('#skp2content,#skpsrch,#skpnav').bind('click', function(event) {
		$('#skipbar').removeClass('showskip');
		if($(this).attr('id') == 'skpsrch'){
			$('#txtSearch').focus();
		}else if($(this).attr('id') == 'skpnav'){
			$('#left_cap a').first().focus();
		}
		return false;
	});	

	$(document).keydown(function(e){
		if(e.which == 27){  // escape
	
			// close header menus
			closehmenus();
			if(nfocus){
				var f = nfocus;
				nfocus = null;
				f.focus();
			}
	
			// try closing lightbox
			try{$.lightBox.close(); }catch(err){}
	
		}
	}); 

});



	/*! BRIGHTCOVE EXPERIENCES */
if(brightcove==undefined){var brightcove={};brightcove.getExperience=function(){alert("Please import APIModules_all.js in order to use the API.");};}
if(brightcove.experiences==undefined){brightcove.servicesURL='http://c.brightcove.com/services';brightcove.cdnURL='http://admin.brightcove.com';brightcove.secureCDNURL='https://sadmin.brightcove.com';brightcove.secureServicesURL='https://secure.brightcove.com/services';brightcove.pubHost='c.$pubcode$.$zoneprefix$$zone$';brightcove.pubSecureHost='secure.$pubcode$.$zoneprefix$$zone$';brightcove.pubSubdomain='ariessaucetown.local';brightcove.experiences={};brightcove.experienceObjects={};brightcove.timeouts={};brightcove.flashTimeoutInterval=10000;brightcove.htmlTimeoutInterval=10000;brightcove.experienceNum=0;brightcove.majorVersion=9;brightcove.majorRevision=0;brightcove.minorRevision=28;brightcove.servlet={AS3:"federated_f9",HTML:"htmlFederated"};brightcove.playerType={FLASH:"flash",HTML:"html",INSTALLER:"installer",NO_SUPPORT:"nosupport"};brightcove.errorCodes={UNKNOWN:0,DOMAIN_RESTRICTED:1,GEO_RESTRICTED:2,INVALID_ID:3,NO_CONTENT:4,UNAVAILABLE_CONTENT:5,UPGRADE_REQUIRED_FOR_VIDEO:6,UPGRADE_REQUIRED_FOR_PLAYER:7,SERVICE_UNAVAILABLE:8};brightcove.defaultParam={};brightcove.defaultParam.width='100%';brightcove.defaultParam.height='100%';brightcove.defaultFlashParam={};brightcove.defaultFlashParam.allowScriptAccess='always';brightcove.defaultFlashParam.allowFullScreen='true';brightcove.defaultFlashParam.seamlessTabbing=false;brightcove.defaultFlashParam.swliveconnect=true;brightcove.defaultFlashParam.wmode='window';brightcove.defaultFlashParam.quality='high';brightcove.defaultFlashParam.bgcolor='#999999';brightcove.isIE=(window.ActiveXObject!=undefined);brightcove.userAgent=navigator.userAgent;brightcove._queuedAPICalls=[];var brightcoveJS=brightcove;brightcove.createExperiences=function(pEvent,pElementID){var experiences=[];var params;var experience;var requestedMinorRevision;var requestedMajorVersion;var flashSupport=brightcove.checkFlashSupport();var htmlSupport=brightcove.checkHtmlSupport();if(pElementID!=null){experiences.push(document.getElementById(pElementID));}else{experiences=brightcove.collectExperiences();}
if(brightcove.isIE){params=document.getElementsByTagName('param');}
var urlParams=brightcove.cacheUrlParams();var numExperiences=experiences.length;for(var i=0;i<numExperiences;i++){experience=experiences[i];experience=brightcove.copyDefaultParams(experience);experience=brightcove.copySnippetParams(experience,params);experience=brightcove.copyUrlParams(experience,urlParams,numExperiences);var playerType=brightcove.determinePlayerType(experience,flashSupport,htmlSupport);var secureConnections=(experience.params.secureConnections=="true");if(playerType==brightcove.playerType.HTML){secureConnections=false;}
if(playerType==brightcove.playerType.NO_SUPPORT){brightcove.renderInstallGif(experience,secureConnections);brightcove.reportUpgradeRequired(experience);continue;}
if(playerType==brightcove.playerType.HTML){delete experience.params.linkBaseURL;}else{if(experience.params.includeAPI&&experience.params.templateReadyHandler!=null){experience.params.originalTemplateReadyHandler=experience.params.templateReadyHandler;var handlerName="templateReadyHandler"+experience.id;brightcove[handlerName]=(function(id){return function(event){if(brightcove.internal!=null&&brightcove.internal._instances[id]!=null){brightcove._addModuleToEvent(id,event);}
var player=brightcove.experienceObjects[id];brightcove.callHandlerForPlayer(player,"originalTemplateReadyHandler",event);};})(experience.id);experience.params.templateReadyHandler="brightcove."+handlerName;}}
var file=brightcove.generateRequestUrl(experience,playerType,secureConnections);if(document.location.protocol=="http:"){var event='http://goku.brightcove.com/1pix.gif?';var gokuParams=["dcsuri=/viewer/player_load_req","playerType="+playerType,"playerURL="+encodeURIComponent(document.location||"")];var image=brightcove.createElement('image');for(var j in experience.params){gokuParams.push([encodeURIComponent(j)+"="+encodeURIComponent(experience.params[j])]);}
event+=gokuParams.join('&');image.src=event;}
brightcove.renderExperience(experience,file,playerType,secureConnections);}};brightcove.collectExperiences=function(){var experiences=[];var allObjects=document.getElementsByTagName('object');var numObjects=allObjects.length;for(var i=0;i<numObjects;i++){if(/\bBrightcoveExperience\b/.test(allObjects[i].className)){if(allObjects[i].type!='application/x-shockwave-flash'){experiences.push(allObjects[i]);}}}
return experiences;};brightcove.cacheUrlParams=function(){var urlParams={};urlParams.playerKey=decodeURIComponent(brightcove.getParameter("bckey"));urlParams.playerID=brightcove.getParameter("bcpid");urlParams.titleID=brightcove.getParameter("bctid");urlParams.lineupID=brightcove.getParameter("bclid");urlParams.autoStart=brightcove.getParameter("autoStart");urlParams.debuggerID=brightcove.getParameter("debuggerID");urlParams.forceHTML=brightcove.getParameter("forceHTML");urlParams.debug=brightcove.getParameter("debug");urlParams.showNoContentMessage=brightcove.getParameter("showNoContentMessage");return urlParams;};brightcove.copyDefaultParams=function(experience){if(!experience.params)experience.params={};if(!experience.flashParams)experience.flashParams={};for(var i in brightcove.defaultParam){experience.params[i]=brightcove.defaultParam[i];}
for(var j in brightcove.defaultFlashParam){experience.flashParams[j]=brightcove.defaultFlashParam[j];}
if(experience.id.length>0){experience.params.flashID=experience.id;}else{experience.id=experience.params.flashID='bcExperienceObj'+(brightcove.experienceNum++);}
return experience;};brightcove.copySnippetParams=function(experience,params){if(!brightcove.isIE){params=experience.getElementsByTagName('param');}
var numParams=params.length;var param;for(var j=0;j<numParams;j++){param=params[j];if(brightcove.isIE&&param.parentNode.id!=experience.id){continue;}
experience.params[param.name]=param.value;}
if(experience.params.bgcolor!=undefined)experience.flashParams.bgcolor=experience.params.bgcolor;if(experience.params.wmode!=undefined)experience.flashParams.wmode=experience.params.wmode;if(experience.params.seamlessTabbing!=undefined)experience.flashParams.seamlessTabbing=experience.params.seamlessTabbing;return experience;};brightcove.copyUrlParams=function(experience,urlParams,numExperiences){if(experience.params.autoStart==undefined&&urlParams.autoStart!=undefined){experience.params.autoStart=urlParams.autoStart;}
if(urlParams.debuggerID!=undefined){experience.params.debuggerID=urlParams.debuggerID;}
if(urlParams.forceHTML!=undefined&&urlParams.forceHTML!=''){experience.params.forceHTML=urlParams.forceHTML;}
if(urlParams.debug!=undefined&&urlParams.debug!=''){experience.params.debug=urlParams.debug;}
if(urlParams.showNoContentMessage!=undefined){experience.params.showNoContentMessage=urlParams.showNoContentMessage;}
var overrideContent=(urlParams.playerID.length<1&&urlParams.playerKey.length<1)||(urlParams.playerID==experience.params.playerID)||(urlParams.playerKey==experience.params.playerKey);if(overrideContent){if(urlParams.titleID.length>0){experience.params.videoID=urlParams.titleID;experience.params["@videoPlayer"]=urlParams.titleID;experience.params.autoStart=(experience.params.autoStart!="false"&&urlParams.autoStart!="false");}
if(urlParams.lineupID.length>0){experience.params.lineupID=urlParams.lineupID;}}
return experience;};brightcove.determinePlayerType=function(experience,flashSupport,htmlSupport){if(flashSupport==null&&htmlSupport==false){return brightcove.playerType.NO_SUPPORT;}
if(experience.params.forceHTML){if(window.console){var message="The forceHTML parameter was used for the Brightcove player. This value should ONLY be used for";message+=" development and testing purposes and is not supported in production environments.";console.log(message);}
return brightcove.playerType.HTML;}
if(flashSupport!=null){if(brightcove.isFlashVersionSufficient(experience,flashSupport)){return brightcove.playerType.FLASH;}else{return brightcove.playerType.INSTALLER;}}
if(htmlSupport){if(brightcove.isSupportedHTMLDevice()||experience.params.htmlFallback){return brightcove.playerType.HTML;}}
return brightcove.playerType.NO_SUPPORT;};brightcove.isFlashVersionSufficient=function(experience,flashSupport){if(flashSupport==null)return false;var setMajorVersion=false;var requestedMajorVersion;var requestedMajorRevision;var requestedMinorRevision;if(experience.params.majorVersion!=undefined){requestedMajorVersion=parseInt(experience.params.majorVersion,10);setMajorVersion=true;}else{requestedMajorVersion=brightcove.majorVersion;}
if(experience.params.majorRevision!=undefined){requestedMajorRevision=parseInt(experience.params.majorRevision,10);}else{if(setMajorVersion){requestedMajorRevision=0;}else{requestedMajorRevision=brightcove.majorRevision;}}
if(experience.params.minorRevision!=undefined){requestedMinorRevision=parseInt(experience.params.minorRevision,10);}else{if(setMajorVersion){requestedMinorRevision=0;}else{requestedMinorRevision=brightcove.minorRevision;}}
if(flashSupport.majorVersion>requestedMajorVersion||(flashSupport.majorVersion==requestedMajorVersion&&flashSupport.majorRevision>requestedMajorRevision)||(flashSupport.majorVersion==requestedMajorVersion&&flashSupport.majorRevision==requestedMajorRevision&&flashSupport.minorRevision>=requestedMinorRevision)){return true;}
return false;};brightcove.generateRequestUrl=function(experience,playerType,secureConnections){var file;if(playerType==brightcove.playerType.INSTALLER){file=brightcove.cdnURL+"/viewer/playerProductInstall.swf";var MMPlayerType=brightcove.isIE?"ActiveX":"PlugIn";document.title=document.title.slice(0,47)+" - Flash Player Installation";var MMdoctitle=document.title;file+="?&MMredirectURL="+window.location+'&MMplayerType='+MMPlayerType+'&MMdoctitle='+MMdoctitle;brightcove.reportUpgradeRequired(experience);}else{if(secureConnections){file=brightcove.getPubURL(brightcove.secureServicesURL,brightcove.pubSecureHost,experience.params.pubCode);}else{file=brightcove.getPubURL(brightcove.servicesURL,brightcove.pubHost,experience.params.pubCode);}
var servlet=(playerType==brightcove.playerType.HTML)?brightcove.servlet.HTML:brightcove.servlet.AS3;file+=('/viewer/'+servlet+'?'+brightcove.getOverrides());for(var config in experience.params){file+='&'+encodeURIComponent(config)+'='+encodeURIComponent(experience.params[config]);}}
return file;};brightcove.renderInstallGif=function(experience,secureConnections){var containerID='_container'+experience.id;var container=brightcove.createElement('span');if(experience.params.height.charAt(experience.params.height.length-1)=="%"){container.style.display='block';}else{container.style.display='inline-block';}
container.id=containerID;var cdnURL=secureConnections?brightcove.secureCDNURL:brightcove.cdnURL;var linkHTML="<a href='http://www.adobe.com/go/getflash/' target='_blank'><img src='"+cdnURL+"/viewer/upgrade_flash_player2.gif' alt='Get Flash Player' width='314' height='200' border='0'></a>";experience.parentNode.replaceChild(container,experience);document.getElementById(containerID).innerHTML=linkHTML;};brightcove.renderExperience=function(experience,file,playerType,secureConnections){var experienceElement;var experienceID=experience.id;var container;var containerID='_container'+experienceID;var timeout=brightcove.flashTimeoutInterval;if(experience.params.playerKey||experience.params.playerID||experience.params.playerId||experience.params.playerid){brightcove.experienceObjects[experienceID]=experience;var unminified=(brightcove.getParameter("unminified")=="true")||(experience.params.unminified==="true");if(experience.params.includeAPI==="true"&&!(brightcove._apiRequested||brightcove.api)){var source="/js/api/";if(unminified){source+="unminified/";}
source+="SmartPlayerAPI.js";var apiInclude=brightcove.createElement('script');apiInclude.type="text/javascript";var cdnURL=secureConnections?brightcove.secureCDNURL:brightcove.cdnURL;apiInclude.src=cdnURL+source;experience.parentNode.appendChild(apiInclude);brightcove._apiRequested=true;}
if(playerType===brightcove.playerType.FLASH){file+="&startTime="+new Date().getTime();}
if(playerType===brightcove.playerType.HTML){timeout=brightcove.htmlTimeoutInterval;file+="&startTime="+new Date().getTime();file+="&refURL="+(window.document.referrer?window.document.referrer:'not available');if(unminified){file+="&unminified=true";}
experienceElement=brightcove.createElement('iframe');experienceElement.id=experienceID;experienceElement.width=experience.params.width;experienceElement.height=experience.params.height;experienceElement.className=experience.className;experienceElement.frameborder=0;experienceElement.scrolling="no";experienceElement.style.borderStyle="none";experience.parentNode.replaceChild(experienceElement,experience);brightcove.experiences[experienceID]=experienceElement;experience.element=experienceElement;if(experience.params.videoID||experience.params.videoId){file+="&"+encodeURIComponent("@videoPlayer")+"="+encodeURIComponent(experience.params.videoID||experience.params.videoId);}
experienceElement.src=file;}else{if(brightcove.isIE){container=brightcove.createElement('span');if(experience.params.height.charAt(experience.params.height.length-1)=="%"){container.style.display='block';}else{container.style.display='inline-block';}
container.id=containerID;experience.flashParams.movie=file;var options='';for(var pOption in experience.flashParams){options+='<param name="'+pOption+'" value="'+experience.flashParams[pOption]+'" />';}
var protocol=secureConnections?"https":"http";var experienceHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'
+' codebase="'+protocol+'://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+brightcove.majorVersion+','+brightcove.majorRevision+','+brightcove.minorRevision+',0"'
+' id="'+experienceID+'"'
+' width="'+experience.params.width+'"'
+' height="'+experience.params.height+'"'
+' type="application/x-shockwave-flash"'
+' class="BrightcoveExperience">'
+options
+'</object>';experience.parentNode.replaceChild(container,experience);document.getElementById(containerID).innerHTML=experienceHTML;brightcove.experiences[experienceID]=container;}else{experienceElement=brightcove.createElement('object');experienceElement.type='application/x-shockwave-flash';experienceElement.data=file;experienceElement.id=experience.params.flashID;experienceElement.width=experience.params.width;experienceElement.height=experience.params.height;experienceElement.className=experience.className;experienceElement.setAttribute("seamlesstabbing",experience.flashParams.seamlessTabbing);var tempParam;for(var config in experience.flashParams){tempParam=brightcove.createElement('param');tempParam.name=config;tempParam.value=experience.flashParams[config];experienceElement.appendChild(tempParam);}
experience.parentNode.replaceChild(experienceElement,experience);brightcove.experiences[experienceID]=experienceElement;}}
brightcove.timeouts[experience.id]=setTimeout(function(){brightcove.handleExperienceTimeout(experienceID);},timeout);}};brightcove.handleExperienceTimeout=function(pID){brightcove.executeErrorHandlerForExperience(brightcove.experienceObjects[pID],{type:"templateError",errorType:"serviceUnavailable",code:brightcove.errorCodes.SERVICE_UNAVAILABLE,info:pID});};brightcove.reportPlayerLoad=function(pID){var timeout=brightcove.timeouts[pID];if(timeout){clearTimeout(timeout);}};brightcove.reportUpgradeRequired=function(pExperience){brightcove.executeErrorHandlerForExperience(pExperience,{type:"templateError",errorType:"upgradeRequiredForPlayer",code:brightcove.errorCodes.UPGRADE_REQUIRED_FOR_PLAYER,info:pExperience.id});};brightcove.checkFlashSupport=function(){var isIE=(window.ActiveXObject!=undefined);var versions=(isIE)?brightcove.checkFlashSupportIE():brightcove.checkFlashSupportStandard();return versions;};brightcove.checkFlashSupportIE=function(){var versions;try{var flash=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");var version=flash.GetVariable('$version');versions=/ ([0-9]+),([0-9]+),([0-9]+),/.exec(version);}catch(exception){return null;}
return{majorVersion:versions[1],majorRevision:versions[2],minorRevision:versions[3]};};brightcove.checkFlashSupportStandard=function(){var versions;var majorVersion;var majorRevision;var minorRevision;try{if(typeof navigator.plugins!='undefined'&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var swfVersion=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var description=navigator.plugins["Shockwave Flash"+swfVersion].description;var filename=navigator.plugins["Shockwave Flash"+swfVersion].filename;if(filename.match){if(filename.toLowerCase().match(/lite/)){throw new Error();}}
versions=description.split(" ");majorVersion=versions[2].split(".")[0];majorRevision=versions[2].split(".")[1];minorRevision=versions[3];if(minorRevision==""){minorRevision=versions[4];}
if(minorRevision[0]=="d"){minorRevision=minorRevision.substring(1);}else if(minorRevision[0]=="r"){minorRevision=minorRevision.substring(1);if(minorRevision.indexOf("d")>0){minorRevision=minorRevision.substring(0,minorRevision.indexOf("d"));}}}else{throw new Error();}}else{return null;}}catch(exception){return null;}
return{majorVersion:majorVersion,majorRevision:majorRevision,minorRevision:minorRevision};};brightcove.checkHtmlSupport=function(){var v=brightcove.createElement('video');var c=brightcove.createElement('canvas');var videoSupport=true;if(!brightcove.userAgent.match(new RegExp("android","i"))){videoSupport=!!(v.canPlayType&&v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,''));}
if(brightcove.userAgent.match(/BlackBerry.*Version\/6\.0/)){return false;}
var canvasSupport=!!brightcove.createElement('canvas').getContext;return videoSupport&&canvasSupport;};brightcove.isSupportedHTMLDevice=function(pUAString){var types=["iPad","iPhone","iPod","android"];var numTypes=types.length;var uaString=pUAString||brightcove.userAgent;for(var i=0;i<numTypes;i++){if(uaString.match(new RegExp(types[i],"i"))){return true;}}
return false;};brightcove.getTechnology=function(pExperienceId){for(var id in brightcove.experiences){if(pExperienceId==id){return(brightcove.experiences[id].tagName=="object")?brightcove.playerType.FLASH:brightcove.playerType.HTML;}}
return brightcove.playerType.NO_SUPPORT;};brightcove.respondToMessages=function(pMessage){if(brightcove.verifyMessage(pMessage)){var messageParts=pMessage.data.split("::");var type=messageParts[1];var messageJson=messageParts[2].split("\n").join(" ");var messageDataObject;if(window.JSON){messageDataObject=window.JSON.parse(messageJson);}else{messageDataObject=brightcove.json_parse(messageJson);}
switch(type){case"error":brightcove.executeMessageCallback(messageDataObject,brightcove.executeErrorHandlerForExperience);break;case"api":brightcove.handleAPICallForHTML(messageDataObject);break;case"handler":var event=brightcove.internal._convertDates(messageDataObject.event);try{brightcove.internal._handlers[messageDataObject.handler](event);}catch(e){}
break;case"asyncGetter":var data=brightcove.internal._convertDates(messageDataObject.data);brightcove.internal._handlers[messageDataObject.handler](data);break;}}};brightcove.verifyMessage=function(pMessage){return pMessage.data.match(/brightcove.player/);};brightcove.handleAPICallForHTML=function(pMessageObject){var experience=brightcove.experienceObjects[pMessageObject.id];if(experience==null){return;}
var id=experience.id;var method=pMessageObject.method;switch(method){case"initializeBridge":brightcove.reportPlayerLoad(id);if(pMessageObject.arguments[0]){if(brightcove.internal!=null){brightcove.internal._setAPICallback(id,null,pMessageObject.arguments[1]);brightcove.callHandlerForPlayer(experience,"templateLoadHandler",id);}else if(brightcove._apiRequested){brightcove._queuedAPICalls.push(pMessageObject);}}
break;case"callTemplateReady":if(brightcove._apiRequested&&!brightcove.internal){brightcove._queuedAPICalls.push(pMessageObject);}else{var event=pMessageObject.arguments;brightcove._addModuleToEvent(id,event);brightcove.callHandlerForPlayer(experience,"templateReadyHandler",event);}
break;}};brightcove._addModuleToEvent=function(pID,pEvent){if(pEvent.type!=null&&brightcove.api){var experience=brightcove.api.getExperience(pID);if(experience){var module=experience.getModule("experience");pEvent.target=module;}}};brightcove.callHandlerForPlayer=function(pExperience,pHandler,pArgument){if(pExperience&&pExperience.params&&pExperience.params[pHandler]){var namespaceArray=pExperience.params[pHandler].split(".");var namespaces;if((namespaces=namespaceArray.length)>1){var trace=window;for(var i=0;i<namespaces;i++){trace=trace[namespaceArray[i]];}
if(typeof trace==="function"){trace(pArgument);}}else{window[pExperience.params[pHandler]](pArgument);}}};brightcove.executeErrorHandlerForExperience=function(pExperience,pErrorObject){brightcove.callHandlerForPlayer(pExperience,"templateErrorHandler",pErrorObject);};brightcove.executeMessageCallback=function(pMessageDataObject,pCallback){var experience;for(var experienceKey in brightcove.experienceObjects){experience=brightcove.experienceObjects[experienceKey];if(experience.element.src===pMessageDataObject.__srcUrl){delete pMessageDataObject.__srcUrl;pCallback(experience,pMessageDataObject);break;}}};brightcove.createExperience=function(pElement,pParentOrSibling,pAppend){if(!pElement.id||pElement.id.length<1){pElement.id='bcExperienceObj'+(brightcove.experienceNum++);}
if(pAppend){pParentOrSibling.appendChild(pElement);}else{pParentOrSibling.parentNode.insertBefore(pElement,pParentOrSibling);}
brightcove.createExperiences(null,pElement.id);};brightcove.removeExperience=function(pID){if(brightcove.experiences[pID]!=null){brightcove.experiences[pID].parentNode.removeChild(brightcove.experiences[pID]);}};brightcove.getURL=function(){var url;if(typeof window.location.search!='undefined'){url=window.location.search;}else{url=/(\?.*)$/.exec(document.location.href);}
return url;};brightcove.getOverrides=function(){var url=brightcove.getURL();var query=new RegExp('@[\\w\\.]+=[^&]+','g');var value=query.exec(url);var overrides="";while(value!=null){overrides+="&"+value;value=query.exec(url);}
return overrides;};brightcove.getParameter=function(pName,pDefaultValue){if(pDefaultValue==null)pDefaultValue="";var url=brightcove.getURL();var query=new RegExp(pName+'=([^&]*)');var value=query.exec(url);if(value!=null){return value[1];}else{return pDefaultValue;}};brightcove.createElement=function(el){if(document.createElementNS){return document.createElementNS('http://www.w3.org/1999/xhtml',el);}else{return document.createElement(el);}};brightcove.i18n={'BROWSER_TOO_OLD':'The browser you are using is too old. Please upgrade to the latest version of your browser.'};brightcove.removeListeners=function(){if(/KHTML/i.test(navigator.userAgent)){clearInterval(checkLoad);document.removeEventListener('load',brightcove.createExperiences,false);}
if(typeof document.addEventListener!='undefined'){document.removeEventListener('DOMContentLoaded',brightcove.createExperiences,false);document.removeEventListener('load',brightcove.createExperiences,false);}else if(typeof window.attachEvent!='undefined'){window.detachEvent('onload',brightcove.createExperiences);}};brightcove.getPubURL=function(source,host,pubCode){if(!pubCode||pubCode=="")return source;var re=/^([htps]{4,5}\:\/\/)([^\/\:]+)/i;host=host.replace("$pubcode$",pubCode).replace("$zoneprefix$$zone$",brightcove.pubSubdomain);return source.replace(re,"$1"+host);};brightcove.createExperiencesPostLoad=function(){brightcove.removeListeners();brightcove.createExperiences();};brightcove.encode=function(string){string=escape(string);string=string.replace(/\+/g,"%2B");string=string.replace(/\-/g,"%2D");string=string.replace(/\*/g,"%2A");string=string.replace(/\//g,"%2F");string=string.replace(/\./g,"%2E");string=string.replace(/_/g,"%5F");string=string.replace(/@/g,"%40");return string;};if(/KHTML/i.test(navigator.userAgent)){var checkLoad=setInterval(function(){if(/loaded|complete/.test(document.readyState)){clearInterval(checkLoad);brightcove.createExperiencesPostLoad();}},70);document.addEventListener('load',brightcove.createExperiencesPostLoad,false);}
if(typeof document.addEventListener!='undefined'){document.addEventListener('DOMContentLoaded',brightcove.createExperiencesPostLoad,false);document.addEventListener('load',brightcove.createExperiencesPostLoad,false);window.addEventListener("message",brightcove.respondToMessages,false);}else if(typeof window.attachEvent!='undefined'){window.attachEvent('onload',brightcove.createExperiencesPostLoad);}else{alert(brightcove.i18n.BROWSER_TOO_OLD);}}
brightcove.json_parse=(function(){"use strict";var state,stack,container,key,value,escapes={'\\':'\\','"':'"','/':'/','t':'\t','n':'\n','r':'\r','f':'\f','b':'\b'},string={go:function(){state='ok';},firstokey:function(){key=value;state='colon';},okey:function(){key=value;state='colon';},ovalue:function(){state='ocomma';},firstavalue:function(){state='acomma';},avalue:function(){state='acomma';}},number={go:function(){state='ok';},ovalue:function(){state='ocomma';},firstavalue:function(){state='acomma';},avalue:function(){state='acomma';}},action={'{':{go:function(){stack.push({state:'ok'});container={};state='firstokey';},ovalue:function(){stack.push({container:container,state:'ocomma',key:key});container={};state='firstokey';},firstavalue:function(){stack.push({container:container,state:'acomma'});container={};state='firstokey';},avalue:function(){stack.push({container:container,state:'acomma'});container={};state='firstokey';}},'}':{firstokey:function(){var pop=stack.pop();value=container;container=pop.container;key=pop.key;state=pop.state;},ocomma:function(){var pop=stack.pop();container[key]=value;value=container;container=pop.container;key=pop.key;state=pop.state;}},'[':{go:function(){stack.push({state:'ok'});container=[];state='firstavalue';},ovalue:function(){stack.push({container:container,state:'ocomma',key:key});container=[];state='firstavalue';},firstavalue:function(){stack.push({container:container,state:'acomma'});container=[];state='firstavalue';},avalue:function(){stack.push({container:container,state:'acomma'});container=[];state='firstavalue';}},']':{firstavalue:function(){var pop=stack.pop();value=container;container=pop.container;key=pop.key;state=pop.state;},acomma:function(){var pop=stack.pop();container.push(value);value=container;container=pop.container;key=pop.key;state=pop.state;}},':':{colon:function(){if(Object.hasOwnProperty.call(container,key)){throw new SyntaxError('Duplicate key "'+key+'"');}
state='ovalue';}},',':{ocomma:function(){container[key]=value;state='okey';},acomma:function(){container.push(value);state='avalue';}},'true':{go:function(){value=true;state='ok';},ovalue:function(){value=true;state='ocomma';},firstavalue:function(){value=true;state='acomma';},avalue:function(){value=true;state='acomma';}},'false':{go:function(){value=false;state='ok';},ovalue:function(){value=false;state='ocomma';},firstavalue:function(){value=false;state='acomma';},avalue:function(){value=false;state='acomma';}},'null':{go:function(){value=null;state='ok';},ovalue:function(){value=null;state='ocomma';},firstavalue:function(){value=null;state='acomma';},avalue:function(){value=null;state='acomma';}}};function debackslashify(text){return text.replace(/\\(?:u(.{4})|([^u]))/g,function(a,b,c){return b?String.fromCharCode(parseInt(b,16)):escapes[c];});}
return function(source,reviver){var r,tx=/^[\x20\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;state='go';stack=[];try{for(;;){r=tx.exec(source);if(!r){break;}
if(r[1]){action[r[1]][state]();}else if(r[2]){value=+r[2];number[state]();}else{value=debackslashify(r[3]);string[state]();}
source=source.slice(r[0].length);}}catch(e){state=e;}
if(state!=='ok'||(/[^\x20\t\n\r]/).test(source)){throw state instanceof SyntaxError?state:new SyntaxError('JSON');}
return typeof reviver==='function'?(function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}({'':value},'')):value;};}());
	
	/*! BRIGHTCOVE.MOBILE

 * Copyright (C) 2005 Brightcove, Inc.  All Rights Reserved.  No
 * use, copying or distribution of this work may be made except in
 * accordance with a valid license agreement from Brightcove, Inc.
 * This notice must be included on all copies, modifications and
 * derivatives of this work.
 *
 * Brightcove, Inc MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT
 * THE SUITABILITY OF THE SOFTWARE, EITHER EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
 * NON-INFRINGEMENT. BRIGHTCOVE SHALL NOT BE LIABLE FOR ANY DAMAGES SUFFERED
 * BY LICENSEE AS A RESULT OF USING, MODIFYING OR DISTRIBUTING THIS
 * SOFTWARE OR ITS DERIVATIVES.
 *
 * "Brightcove" is a trademark of Brightcove, Inc.
 **/

/********************************************** ORACLE INCLUDES ***********************************************/

/*! BRIGHTCOVE.MOBILE INCLUDES */

/*! BRIGHTCOVE.HTML5_OMNITURE */

var OracleOmniture = new function(){
	var VIDEO_PREFIX = "video:";
	
	// Lookup tables for video tags: we use uppercase here
	var AUDIENCE_TYPES = ["Student", "Enterprise", "Developer", "Startup", "SMB", "Partner"];
	var VIDEO_TYPES = ["TechDemo", "Overview", "TalkHead", "Narrative", "Discussion"];
	var PRODUCT_TYPES = ["Software", "Servers", "Storage", "Virtualization", "HP"];
	var TRACKING_PERCENTAGE = "percentage";
	var TRACKING_5Minutes = "5minutes";
	var TRACKING_10Minutes = "10minutes";
	var mVideoTags;
	var mVideoObject;
	var mVideoName;
	var mVideoDuration;
	var mSessionOpen = false;
	var mTrackingType;
	var mMileStones;
	var mLastTimeRecorded = 0;
	var mDebugMode = false;
	
	/* Initializes the module */
	this.initialize = function(videoId, videoTags, videoName, videoDuration, debugMode){
		if(mVideoObject != null){
			log("Initialize - clearing old values");
			mVideoObject.removeEventListener('ended', this.onMediaComplete,false);
			mVideoObject.removeEventListener('play', this.onMediaPlay,false);
			mVideoObject.removeEventListener('playing', this.onMediaPlaying,false);
			mVideoObject.removeEventListener('pause', this.onMediaStop,false);
			mVideoObject.removeEventListener('timeupdate', this.onMediaProgress,false);
			OracleOmniture.closeSession();
		}
		mVideoObject = document.getElementById(videoId);
		mVideoObject.addEventListener('ended', this.onMediaComplete,false);
		mVideoObject.addEventListener('play', this.onMediaPlay,false);
		mVideoObject.addEventListener('playing', this.onMediaPlaying,false);
		mVideoObject.addEventListener('pause', this.onMediaStop,false);
		mVideoObject.addEventListener('timeupdate', this.onMediaProgress,false);
		mVideoTags = videoTags;
		mVideoName = videoName.replace(/,/g, ' ');
		mVideoDuration = videoDuration/1000;
		mDebugMode = debugMode;
		clearVideoVariables();
		buildActionSource();
		mSessionOpen = false;
	}

	var defineTrackingMethod = function(){
		try{
			if (mVideoDuration > (60 * 20)){ //longer than 20 minutes
				if (mVideoDuration > (60 * 60 * 2)){ //longer than 2 hours
					//track every ten minutes
					mTrackingType = TRACKING_10Minutes;
				}else{
					//track every five minutes
					mTrackingType = TRACKING_5Minutes;
				}
				mMileStones = null;
			}else{
				//use percentage tracking
				mTrackingType = TRACKING_PERCENTAGE;
				mMileStones = new Array(75,50,25);
			}
			log("Tracking method: " + mTrackingType);
			s.Media.trackMilestones = "";
		}catch(e){
 			// fail
		}
	}
	
	var buildActionSource = function(){
		try{
			s.Media.autoTrack = false;
			s.autoTrack = false;
			s.dc = "112";
			/* Media configuration */
			s.Media.trackWhilePlaying = true;
			s.Media.trackSeconds = "";
			s.Media.trackMilestones = "";
			/* Turn on and configure debugging here */
			s.debugTracking = true;
			s.trackLocal = true;
			s.trackingServer="oracle.112.2o7.net";
			s.trackingServerSecure="oracle.112.2o7.net";
		}catch(e){
 			// fail
		}
	}
	
	
	this.openSession = function(){
		log("begin openSession");
		//s.Media.trackWhilePlaying = true;
		if (mSessionOpen) return false;
		defineTrackingMethod();
		setVideoVariables();
		// Do a one time page view track() call on each view of a video
		s.t();
		s.Media.open(mVideoName, Math.round(mVideoDuration ), 'Sun Video Portal');
		mSessionOpen = true;
		log("end open session");
		//s.Media.trackWhilePlaying = false;
		return true;
	}
	
	this.closeSession = function(){
		log("closeSession");
		//s.Media.trackWhilePlaying = true;
		if (!mSessionOpen) return;
		s.Media.close(mVideoName);
		mSessionOpen = false;
		var s=s_gi(s_account[0]); 		
		//s.Media.trackWhilePlaying = false;
		log("end close session");
	}
	
	var setVideoVariables = function(isPageView){
		try{
			// Data-driven variables
			var s=s_gi("oraclecom,oracleglobal,oracledevinteractive1");		
			s.events = "event11";
			s.pageName = VIDEO_PREFIX + mVideoName;
			s.eVar36 = mVideoName;
			s.eVar26="video";
			s.prop26="video"; 		
			s.products = ";" + VIDEO_PREFIX + mVideoName;
			s.prop47 = lookupTag(AUDIENCE_TYPES, "No Audience Set");
			s.prop48 = lookupTag(VIDEO_TYPES, "No Video Type Set");
			s.prop49 = lookupTag(PRODUCT_TYPES, "No Product Set");
			s.prop29 = window.location;
		}catch(e){
 			// fail
		}
	}
	
	var clearVideoVariables = function(){
		try{
			s.events = null;
			s.pageName = null;
			s.eVar36 = null;
			s.products = null;
			s.prop47 = null;
			s.prop48 = null;
			s.prop49 = null;
			s.prop29 = null;
			s.prop26 = null;
			s.eVar26 = null;
		}catch(e){
 			// fail
		}
	}
	
	var lookupTag = function(pValues, pDefaultValue){
		var videoTags = mVideoTags.split(",");
		for (var i = 0; i < videoTags.length; i++){
			var tag = videoTags[i];
			for (var j = 0; j < pValues.length; j++){
				var value = pValues[j];
				if (value.toUpperCase() == tag.toUpperCase()){
					return value;
				}
			}
		}
	return pDefaultValue;
	}
	
	this.onMediaPlaying = function (pEvent){
		log("begin media playing");
		OracleOmniture.onMediaPlay();
	}
	
	this.onMediaPlay = function (pEvent){
		try{
			log("begin media play")
			var newSession = OracleOmniture.openSession();
			s.Media.play(mVideoName, mVideoObject.currentTime);
			if (newSession) clearVideoVariables();
			log("end media play");
		}catch(e){
 			// fail
		}
	}

	this.onMediaStop = function (pEvent){
		try{
			log(pEvent);
			s.Media.stop(mVideoName, mVideoObject.currentTime);
			log("end media stop");
		}catch(e){
 			// fail
		}
	}
	
	this.onMediaProgress = function (pEvent){
		var timePlayed = 0;
		for (var i = 0; i < mVideoObject.played.length; i++){
			timePlayed += mVideoObject.played.end(i) - mVideoObject.played.start(i);
		}
	
		if (mTrackingType == TRACKING_5Minutes && timePlayed > (mLastTimeRecorded + (5 * 60))){
			log("Tracking 5 minutes " + timePlayed);
			mLastTimeRecorded = timePlayed;
			trackVideo();
		}else if (mTrackingType == TRACKING_10Minutes && timePlayed > (mLastTimeRecorded + (10 * 60))){
			log("Tracking 10 minutes " + timePlayed);
			mLastTimeRecorded = timePlayed;
			trackVideo();
		}else if (mTrackingType == TRACKING_PERCENTAGE && mMileStones != undefined && mMileStones.length > 0){
			var currentPercentage = mVideoObject.currentTime / mVideoDuration * 100;
			var currentMilestone = mMileStones[mMileStones.length - 1];
			if (currentPercentage > currentMilestone){
				trackVideo();
				log("Tracking " + currentMilestone + " percent");
				// Do a while in case the user skipped ahead - we only want to record this once
				while(currentPercentage > currentMilestone){
					mMileStones.pop();
					if(mMileStones.length > 0){
						currentMilestone = mMileStones[mMileStones.length - 1];
					}else{
						currentMilestone = 100;
					}
				}
			}
		}
	}
	
	function trackVideo(){
		try{
			s.Media.track(mVideoName);
		}catch(e){
 			// fail
		}
	}
	
	this.onMediaComplete = function (pEvent){
		try{
			log(pEvent);
			s.Media.stop(mVideoName, mVideoObject.currentTime);
			OracleOmniture.closeSession();
			log("end end media complete");
		}catch(e){
 			// fail
		}
	}
	
	this.omnitureUnload = function(){
		log("Page closed, closing Media object");
		OracleOmniture.closeSession();
	}
	
	this.trackCTA = function(linkText){
		try{
			var products = VIDEO_PREFIX + mVideoName;
			var var32 = products + ":" + linkText;
			s.eVar32 = var32;
			s.products= ";" + products;
			s.events = "event18";
			s.tl();
			s.events = "event11";
			s.eVar32 = null;
		}catch(e){
 			// fail
		}
	}
	
	var log = function(str){
		if (mDebugMode){
			document.getElementById("divDebug").innerHTML += "<br/>" + str;
		}
	}

};


/*! BRIGHTCOVE.MOBILE CODE */

// THIS FILE REQUIRES JQUERY !!!!!!

/*********************************************** CONFIGURATION ************************************************/

/**
 * This is the API Token assigned to each Brightcove customer that allows for the use of Brightcove's Media Read API.
 * Fill in your read API token (there are two versions, but you want the one that includes URL responses) here.
 */
var BCReadAPIToken = "McH8ITCNKzaQHM1Zonw4qryqAw_DQn2RcLhb5s08S94.";

/**
 * This value indicates whether or not your account is set-up for UDS. HTML5 requires that the files be delivered
 * over HTTP.  This is accomplished by having an account that is configured for HTTP (PD) delivery or that is set-up
 * for UDS.
 */
var isUDS = false;

/* This variable is a dictionary that contains information about the location of each
 * Brightcove video object within the DOM of the page. Specifically, it is an associative array
 * where, for each stored mapping, the keys is the playerID of a given video, and the value is
 * the next sibling of that video object in the DOM. Keeping track of this sibling will allow
 * us to re-insert the mobile compatible <video> tag into the correct place (before this sibling)
 * in the DOM of the original page.
 */
var pagePlacementInfo = new Object();
var parentObj;

var debug = false;
var videoWidth;
var videoHeight;

/**********************************************************************************************************************/
/*********************************************** DOM MODIFICATION CODE ************************************************/
/**********************************************************************************************************************/

/* This is the main entry function. It goes through the list of all video objects that need to be removed,
 * and one by one, initiates a request that causes that object to be removed and replaced by the
 * appropriate <video> tag (if the JS detects that the browser is on a smartphone).
 */
function runMobileCompatibilityScript(bcExperienceID, videoWidth, videoHeight, videoTagID){
	//detect if this is a smartphone or not
	var thisIsSmartPhone = DetectSmartphone();
	debug = location.href.indexOf("testmobile") >= 0;
	if (!thisIsSmartPhone && !debug) {
	    return false;
	}

	this.videoWidth = videoWidth;
	this.videoHeight = videoHeight;
	makeMobileCompatible(bcExperienceID, videoTagID);  	
    return true;
}

/* This method works on a specific object, represented by id "strObjID". The method retrieves the
 * element with the given ID from the DOM, and then extracts the player ID from the video
 * object. Then, it removes the video object from the page's DOM and stores its location in the page
 * in a global dictionary variable (this will be useful when we want to add the corresponding
 * video tag back in the page in the appropriate place).
 *
 * Finally, the method submits an API Read request to the Brightcove server through the initiateMobileVideoRetrieval()
 * method in order to retrieve the sepcific Video URL corresponding to the given object.
 */
function makeMobileCompatible(strObjID, videoTagID){
	//our video object (which we need to remove)
	var vidObj = document.getElementById(strObjID);

	//extract the playerID of this video object before deleting it
	var vidPlayerID = getParamValueForVidObject(vidObj, 'playerID');
	var programmedVideo = getParamValueForVidObject(vidObj, '@videoPlayer');
	
	//if the video player ID could not be extracted from the Source Code, for some reason,
	//then refer to the dictionary provided by the user
	if ((vidPlayerID == null) || (typeof(vidPlayerID) == 'undefined')) {
		vidPlayerID = BCVidObjects[strObjID];
	}
	
	//store the parent of the node we wish to remove
	parentObj = vidObj.parentNode;
	
	//this is the object before which our vidObj element occurs in the parent element's DOM.
	//likewise, when we insert our <video> tag, we will insert it BEFORE this element,
	//in order to maintain the look of the page (this is the best that we can do...)
	var nextAdjacentNode = vidObj.nextSibling;

	//if there are no nodes after this node that was removed, then store 'null' to indicate that this was the last
	//child.
	if (nextAdjacentNode == null){ 
		pagePlacementInfo[""+strObjID] = null;
	}
	//otherwise store the next sibling
	else {
		pagePlacementInfo[""+strObjID] = nextAdjacentNode;
	}
	
	//now, dynamically remove the video object from the DOM
	parentObj.removeChild(vidObj);

	//this procedure will make the appropriate API calls to get the first video corresponding to the player ID
	//of the object we just removed.

	initiateMobileVideoRetrieval(vidPlayerID, programmedVideo, BCReadAPIToken, videoTagID, strObjID);
}

/**
 * This function takes an object representing a Brigthcove video embed and a particular 'parameter' that was
 * passed to the Brightcove video object and returns the parameter.
 */
function getParamValueForVidObject(vidObj, paramName) { 
	var paramValue = null;
	
	//loop through all children of the video object, searching for <param> tags.
	//if param with paramName exists return value
	jQuery(vidObj).children().each(function(elem) {
		if (this.nodeName == "PARAM") {
			if (this.name == paramName) {
				paramValue = this.value;	
			}
		}
	});

	return paramValue;
}

/**
 * Takes a string 'str' that consists of multiple arguments separated by ampersands (&),
 * and breaks it down so that it can extract and return the paramName from the string.
 */
function parseParamFromString(str, paramName) {
	var params = str.split("&"); //array of strings
	for (var i = 0; i < params.length; i++){
		if (params[i].indexOf(paramName) != -1){
			return params[i].substr(params[i].indexOf("=")+1);
		}
	}

	// if we could not find the param then return null
	return null;
}

/**********************************************************************************************************************/
/****************************************** MEDIA API CALLS & VIDEO TAG INSERTION *************************************/
/**********************************************************************************************************************/

/* This method calls the Brightcove Media API to get all playlists included within a particular
 * playerID.
 */
function initiateMobileVideoRetrieval(playerID, programmedVideoID, readAPIToken, videoTagID, strObjID) {
    var APICall;
    var scriptNode;
    var scriptText;
    var callbackMethodName;

    if (programmedVideoID) { 
	if (programmedVideoID.indexOf('ref:') != -1) { 
	    APICall = "http://api.brightcove.com/services/library?command=find_video_by_reference_id&reference_id="+programmedVideoID.substring(4)+"&token="
		+readAPIToken;
	}
	else { 
	    APICall = "http://api.brightcove.com/services/library?command=find_video_by_id&video_id="+programmedVideoID+"&token="
		+readAPIToken+"&video_fields=videoStillURL,name,length,linkText,linkURL,tags&custom_fields=mp4link";
	}
	//when we make the API call, we specify a response handler (known as a callback method) that will deal with the response from
	//the Brightcove server. However, we create a customized 'callback' method for each playerID, so that when we are 'inside' the
	//callback method (after receiving the server's reponse), we will know which playerID the response corresponds to. This variable
	//stores the name (which includes the playerID) of that callback method.
	callbackMethodName = "handleJSONResponseForID"+new Date().getTime();
	scriptNode = document.createElement("script");
	scriptNode.setAttribute("language", "javascript");
	scriptText =
		"function "+callbackMethodName+"(JSONResponse){\n" +
			"\thandleVideoResponse(JSONResponse, '"+playerID+"', '"+videoTagID+"', '"+strObjID+"');\n"+
		"}\n";
    }
    else { 
	APICall = "http://api.brightcove.com/services/library?command=find_playlists_for_player_id&player_id="+playerID+"&token="
								+readAPIToken;
	callbackMethodName = "handleJSONResponseForID"+ new Date().getTime();
	scriptNode = document.createElement("script");
	scriptNode.setAttribute("language", "javascript");
	scriptText =
		"function "+callbackMethodName+"(JSONResponse){\n" +
			"\thandlePlaylistResponse(JSONResponse, '"+playerID+"', '"+videoTagID+"', '"+strObjID+"');\n"+
		"}\n";
    }

    if (isUDS) {
	APICall += "&media_delivery=http";
    }

	//NOTE: we add to the end of the body, so that we do not disrupt any of the order of the children
	//at the top of the body's DOM tree
	var scriptTextNode = document.createTextNode(scriptText);
	scriptNode.appendChild(scriptTextNode);
	document.body.appendChild(scriptNode);
	
	//make the API call, specifying the unique callback method for this request
	addScriptTag("getMobileRendition",  APICall, callbackMethodName);
}

/* Methods needed to make API Calls to the Brightcove server*/
function addScriptTag(id, url, callback) { 
	var scriptTag = document.createElement("script");
	var noCacheIE = '&noCacheIE=' + (new Date()).getTime();

   // Add script object attributes
   scriptTag.setAttribute("type", "text/javascript");
   scriptTag.setAttribute("charset", "utf-8");
   scriptTag.setAttribute("src", url + "&callback=" + callback + noCacheIE);
   scriptTag.setAttribute("id", id);

	var head = document.getElementsByTagName("head").item(0);
	head.appendChild(scriptTag);
}

/**
 * This is the general response-handler for the JSON response from the Brightcove server for playlist based players.
 * The arguments to the method include the response object, as well as the playerID of the
 * object which this response pertains to.
 *
 */
function handlePlaylistResponse(JSONResponse, playerID, videoTagID, strObjID) {  
	//obtain first playlist in Brightcove Player given corresponding to this playerID
	var firstPlaylist = JSONResponse.items[0];
	
	//obtain the first video from our first playlist
	var firstVideo = firstPlaylist.videos[0];

	embedHTML5PlayerForVideo(firstVideo, playerID, videoTagID, strObjID);
}

/**
 * This is the general response-handler for the JSON response from the Brightcove server for playlist based players.
 * The arguments to the method include the response object, as well as the playerID of the
 * object which this response pertains to.
 *
 */
function handleVideoResponse(JSONResponse, playerID, videoTagID, strObjID) { 
    videoTagID = (videoTagID) ? videoTagID : "videoTagId";
    embedHTML5PlayerForVideo(JSONResponse, playerID, videoTagID, strObjID);
    var tags = "";
    if(JSONResponse.tags != null) {
    	tags = JSONResponse.tags.join(",");
    }

    if(OracleOmniture.initialize){
    	OracleOmniture.initialize(videoTagID,tags, JSONResponse.name, JSONResponse.length, debug);
    }
//    bc_cta.init(videoTagID, JSONResponse.linkText, JSONResponse.linkURL);
}

/**
 * For a given video object (from the BC APIs) we will embed an HTML 5 'video' tag.
 * Requires searching through the renditions associated with the video object
 * for a rendition that is a 'best' match and passing the URL to the video
 * tag.
 *
 * In this handler, we explore the JSON object in search of the first video in the
 * first playlist that is returned by the Brightcove server. Then, once we identify
 * this first video, we examine the various renditions of the video and search
 * for the rendition that is most appropriate for a mobile (H.264 encoding
 * and 256 kbps).
 */
function embedHTML5PlayerForVideo(video, playerID, videoTagID, strObjID) {  
	var bestRenditionURL = video.customFields.mp4link;
	var vidName = video.name;
	var vidStillURL = video.videoStillURL;

	//construct the <video> tag as a DOM element
	var videoScriptTag = formVideoTagFromInfo(videoTagID, vidName, bestRenditionURL, videoWidth, videoHeight, vidStillURL);
	
	// Just append video script to parent of removed brightcove video object
	jQuery(parentObj).append(videoScriptTag);  
}

/* This function takes two encoding rates and returns the one that
 * is more apprporiate for mobile phones.
 */
function betterEncodingForMobile(encoding1, encoding2){
	IDEAL_ENCODING_RATE = 256000; //bits per second; equivalent to 256 kbps

	diff1 = Math.abs(encoding1 - IDEAL_ENCODING_RATE);
	diff2 = Math.abs(encoding2 - IDEAL_ENCODING_RATE);

	return ((diff1 <= diff2) ? encoding1 : encoding2);
}

/**
 * This method takes properties of a video, its dimensions, and its poster (still image),
 * inserts them into an HTML 5.0 <video> tag. This <video> object is then returned.
 */
function formVideoTagFromInfo(videoTagID, videoID, videoURL, vidWidth, vidHeight, vidImageURL){  

	var videoTag = document.createElement("video");
	if (videoTagID) {
	    videoTag.setAttribute("id", videoTagID);
	}
	else {
	    videoTag.setAttribute("id", videoID);
	}

	videoTag.setAttribute("poster", vidImageURL);
	videoTag.setAttribute("width",""+vidWidth);
	videoTag.setAttribute("height", ""+vidHeight);
	videoTag.setAttribute("controls", "true");
	videoTag.setAttribute("src", videoURL);

	//if this device is an ANDROID device, then add an onclick handler to the
	//video since this does not exist by default.
	var isAndroidPhone = DetectAndroid();

	if (isAndroidPhone){
		addClickHandlerToVid(videoTag);
	}
	
	return videoTag;
}

/**
 * This method adds an 'onclick' handler to the provided video object so that clicking on the
 * 'poster' image of the video casues the video to play.
 */
function addClickHandlerToVid(obj){
	obj.addEventListener('click', function(videoNode) {
          return function() {
            videoNode.play();
          };
    }(obj));
}

/**********************************************************************************************************************/
/****************************************** MOBILE BROWSER DETECTION CODE *********************************************/
/**********************************************************************************************************************/

// JavaScript Document

// Anthony Hand, ahand@hand-interactive.com
// Web: www.hand-interactive.com
//
// License info: http://creativecommons.org/licenses/by/3.0/us/

//Initialize some initial string variables we'll look for later.
var deviceIphone = "iphone";
var deviceIPad = "ipad";
var deviceIpod = "ipod";
var devicePlaystation = "playstation";
var deviceWap = "wap";
var deviceWinMob = "windows ce";
var enginePie = "wm5 pie";
var deviceIeMob = "iemobile";
var deviceS60 = "series60";
var deviceSymbian = "symbian";
var deviceS60 = "series60";
var deviceS70 = "series70";
var deviceS80 = "series80";
var deviceS90 = "series90";
var deviceBB = "blackberry";
var deviceAndroid = "android";
var motorollaDroid = " droid ";
var deviceMidp = "midp";
var deviceWml = "wml";
var deviceBrew = "brew";
var devicePalm = "palm";
var engineXiino = "xiino";
var engineBlazer = "blazer"; //Old Palm
var devicePda = "pda";
var deviceNintendoDs = "nitro";
var engineWebKit = "webkit";
var engineNetfront = "netfront";
var manuSonyEricsson = "sonyericsson";
var manuericsson = "ericsson";
var manuSamsung1 = "sec-sgh";
var svcDocomo = "docomo";
var svcKddi = "kddi";
var svcVodafone = "vodafone";

//Due to the flexibility of the S60 OSSO Browser,
//   you may wish to let new S60 devices get the regular pages instead.
var s60GetsMobile = true;

//Due to the flexibility of the iPhone/iPod Touch Browser,
//   you may wish to let new S60 devices get the regular pages instead.
var iphoneIpodGetsMobile = true;

//Initialize our user agent string.
var uagent = navigator.userAgent.toLowerCase();

//**************************
// Detects if the current device is an iPhone.
function DetectIphone()
{
   if (uagent.search(deviceIphone) > -1)
   {
      //The iPod touch says it's an iPhone! So let's disambiguate.
      if (uagent.search(deviceIpod) > -1)
         return false;
      else
         return true;
   }
   else
      return false;
}

//**************************
// Detects if the current device is an iPhone.
function DetectIPad()
{
    if (uagent.search(deviceIPad) > -1) {
	return true;
   }
    else {
      return false;
    }
}

//**************************
// Detects if the current device is an iPod Touch.
function DetectIpod()
{
   if (uagent.search(deviceIpod) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is an iPhone or iPod Touch.
function DetectIphoneOrIpodOrIPad()
{
   //We repeat the searches here because some iPods
   //  may report themselves as an iPhone, which is ok.
   if (uagent.search(deviceIphone) > -1 ||
       uagent.search(deviceIpod) > -1 ||
       uagent.search(deviceIPad) > -1)

       return true;
    else
       return false;
}

//**************************
// Detects if the current device is an Android OS-based device.
function DetectAndroid()
{
   if (uagent.search(deviceAndroid) > -1)
      return true;
   else
      return false;
}

function DetectMotorollaDroid()
{
	if (uagent.search(motorollaDroid) > -1)
		return true;
	else
		return false;
}

//**************************
// Detects if the current device is an Android OS-based device and
//   the browser is based on WebKit.
function DetectAndroidWebKit()
{
   if (DetectAndroid())
   {
     if (DetectWebkit())
        return true;
     else
        return false;
   }
   else
      return false;
}

//**************************
// Detects if the current browser is based on WebKit.
function DetectWebkit()
{
   if (uagent.search(engineWebKit) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is the Nokia S60 Open Source Browser.
function DetectS60OssBrowser()
{
   if (DetectWebkit())
   {
     if ((uagent.search(deviceS60) > -1 ||
          uagent.search(deviceSymbian) > -1))
        return true;
     else
        return false;
   }
   else
      return false;
}

//**************************
// Detects if the current device is any Symbian OS-based device,
//   including older S60, Series 70, Series 80, Series 90, and UIQ,
//   or other browsers running on these devices.
function DetectSymbianOS()
{
   if (uagent.search(deviceSymbian) > -1 ||
       uagent.search(deviceS60) > -1 ||
       uagent.search(deviceS70) > -1 ||
       uagent.search(deviceS80) > -1 ||
       uagent.search(deviceS90) > -1)
      return true;
   else
      return false;
}


//**************************
// Detects if the current browser is a BlackBerry of some sort.
function DetectBlackBerry()
{
   if (uagent.search(deviceBB) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is a Windows Mobile device.
function DetectWindowsMobile()
{
   //Most devices use 'Windows CE', but some report 'iemobile'
   //  and some older ones report as 'PIE' for Pocket IE.
   if (uagent.search(deviceWinMob) > -1 ||
       uagent.search(deviceIeMob) > -1 ||
       uagent.search(enginePie) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is on a PalmOS device.
function DetectPalmOS()
{
   //Most devices nowadays report as 'Palm',
   //  but some older ones reported as Blazer or Xiino.
   if (uagent.search(devicePalm) > -1 ||
       uagent.search(engineBlazer) > -1 ||
       uagent.search(engineXiino) > -1)
      return true;
   else
      return false;
}

//**************************
// Sets whether S60 devices running the
//   Open Source Browser (based on WebKit)
//   should be detected as 'mobile' or not.
//   Set TRUE to be detected as mobile.
//   Set FALSE and it will not be detected as mobile.
function SetS60GetsMobile(setMobile)
{
   s60GetsMobile = setMobile;
};

//**************************
// Sets whether iPhone/iPod Touch devices running the
//   Open Source Browser (based on WebKit)
//   should be detected as 'mobile' or not.
//   Set TRUE to be detected as mobile.
//   Set FALSE and it will not be detected as mobile.
function SetS60GetsMobile(setMobile)
{
   iphoneIpodGetsMobile = setMobile;
};


//**************************
// Check to see whether the device is a 'smartphone'.
//   You might wish to send smartphones to a more capable web page
//   than a dumbed down WAP page.
function DetectSmartphone()
{
   //First, look for iPhone and iPod Touch.
   if (DetectIphoneOrIpodOrIPad())
      return true;

   if (DetectAndroid())
      return true;

   //Now, look for S60 Open Source Browser on S60 release 3 devices.
   if (DetectS60OssBrowser())
      return true;

   //Check for other Symbian devices - older S60, UIQ, other.
   if (DetectSymbianOS())
      return true;

   //Check for Windows Mobile devices.
   if (DetectWindowsMobile())
      return true;

   //Next, look for a BlackBerry
   if (DetectBlackBerry())
      return true;

   //PalmOS.
   if (DetectPalmOS())
      return true;

   //Otherwise, return false.
   return false;
};


//**************************
// Detects if the current device is a mobile device.
//  This method catches most of the popular modern devices.
function DetectMobileQuick()
{
   //Attempt to detect most mobile devices,
   //   especially mass market feature phones.
   // NOTE: Doesn't usually work reliably...
   if (uagent.search(deviceWap) > -1   ||
	uagent.search(deviceMidp) > -1 ||
	uagent.search(deviceWml) > -1  ||
	uagent.search(deviceBrew) > -1  )
   {
      return true;
   }

   //Detect for most smartphones.
   if (DetectSmartphone())
      return true;

   //Check for a NetFront browser
   if (uagent.search(engineNetfront) > -1)
      return true;

   //Check for a Playstation
   if (uagent.search(devicePlaystation) > -1)
      return true;

   //Check for a generic PDA
   if (uagent.search(devicePda) > -1)
      return true;

   return false;
};


//**************************
// Detects in a more comprehensive way if the current device is a mobile device.
function DetectMobileLonger()
{
   //Run the quick check first.
   if (DetectMobileQuick())
      return true;

   //Check for NTT Docomo
   if (uagent.search(svcDocomo) > -1)
      return true;

   //Check for KDDI
   if (uagent.search(svcKddi) > -1)
      return true;

   //Check for Nintendo DS
   if (uagent.search(deviceNintendoDs) > -1)
      return true;

   //Check for Vodafone 3G
   if (uagent.search(svcVodafone) > -1)
      return true;

   //Finally, detect for certain very old devices with stupid useragent strings.
   if (uagent.search(manuSamsung1) > -1 ||
	uagent.search(manuSonyEricsson) > -1 ||
	uagent.search(manuericsson) > -1)
   {
      return true;
   }

   return false;
};

	
	/*! BRIGHTCOVE.SETTINGS */
function getVideoDimensions(size) {
	 var dimensions = {};
	 
    switch (size) {
		
	 // Legacy Definitions
        case "medium":
            width = 480;
            height = 320;
            break;
        case "events":
            width = 640;
            height = 360;
            break;     
        case "javaone":
            width = 660;
            height = 371;
            break;
        case "large":
            width = 1280;
            height = 960;
			break;		
	 // New Web Standards Definitions
        case "c23javaone":
            width = 660;
            height = 371;
            break;
        case "w01":
            width = 640;
            height = 360;
            break;
        case "cm01":
            width = 364;
            height = 205;
            break;	
		case "cm01v1":
            width = 640;
            height = 360;
            break;		
        case "c23":
            width = 640;
            height = 360;
            break; 
	 // Legacy Definition
        default:
            // Default is small
            width = 320;
            height = 240;
			break;	}
		
	dimensions['width']  = width;
	dimensions['height'] = height;
	
	return dimensions;
}


function w01getBrightcoveSettings(params) {
	var settings = {};	
	var playerType = params['playerType'];
	var playerID;
	var bctid = params['bctid'];
	var playerKey = params['playerKey'];
	var videoList = '';
	var defaultPlayerID = 602202985001;
	var dimensions = getVideoDimensions(params['size']);
	
	// video object parameters
	switch (playerType) {
		case "playlist":
			playerID = 1150189348001;
			playerKey ='AQ~~,AAAAAFcSbzI~,OkyYKKfkn3xP7TxKJSx12VKQuI7QyoTL';
			videoList = 1632695465;
			bctid = '';
			break;
		case "playlist-social":
			playerID = 818977682001;
			playerKey ='AQ~~,AAAAAFcSbzI~,OkyYKKfkn3yXuKmaWdaCpMACVeqotQhW';
			videoList = 1632695465;
			bctid = '';
			break;
		case "live-primary":
			playerID = 105865195001;
			playerKey ='AQ~~,AAAAAFcSbzI~,OkyYKKfkn3wFV2hivdZZkE9L9SPGC-Ca';
			break;
		case "live-secondary":
			playerID = 1150189378001;
			playerKey ='AQ~~,AAAAAFcSbzI~,OkyYKKfkn3ypj15uL4XC7c7vRlnjmoHG';
			break;
		case "single":
			playerID = 602202985001;
			playerKey ='AQ~~,AAAAAFcSbzI~,OkyYKKfkn3yGOuS67ezRhOq42LF_TKR6';
			break;
		case "single-social":
			playerID = 72925238001;
			playerKey ='AQ~~,AAAAAFcSbzI~,OkyYKKfkn3x_w7fnuqEOoldofOzUPSQN';
			break;
		default: 
//			if (playerType) { // test for custom player
//				var intRegex = /^\d+$/;
//				
//				if (intRegex.test(playerType)) { 
//					if (!playerKey) { // test for custom player key
//						alert('This request does not contain a playerKey.');
//						return;		
//					}
//				} else {
//						alert('This request does not contain a valid playerID.');
//					return;	
//				}
//			} else { // default to On Demand player
				playerID = defaultPlayerID;
				playerKey ='AQ~~,AAAAAFcSbzI~,OkyYKKfkn3yGOuS67ezRhOq42LF_TKR6';
//			}
	}
		
	
	settings['size'] = params['size'];
	settings['bctid'] = bctid;
	settings['width'] = dimensions['width'];
	settings['height'] = dimensions['height'];
	settings['playerID'] = playerID;
	settings['playerKey'] = playerKey;
	settings['videoList'] = videoList;
	settings['playerType'] = playerType;
	
	return settings;	
}
	
	/*! BRIGHTCOVE.EMBED */

// LIGHTBOX
function bcvideolightbox(video_Id,player_Id,description_Id){
var vp_videoId=video_Id;	
var vp_playerId=player_Id;
var vp_descriptionId=description_Id;
if (vp_playerId == "chromeless-noshare"){
			vp_playerId = "602202985001";
}else if (vp_playerId == "chromeless-share"){
			vp_playerId = "72925238001";
}

var vpObject='<object id="myExperienceLightBox" class="BrightcoveExperience">'+
	         '<param value="#FFFFFF" name="bgcolor" />'+
	         '<param value="640" name="width" />'+
			 '<param value="360" name="height" />'+
			 '<param value="'+vp_playerId+'" name="playerID" />'+
			 '<param value="1460825906" name="publisherID" />'+
        	 '<param name="autoStart" value="true" />'+
			 '<param value="true" name="isVid" />'+
			 '<param value="true" name="isUI" />'+
			 '<param name="dynamicStreaming" value="true" />'+
        	 '<param name="@videoPlayer" value="'+vp_videoId+'" />'+	
			 '<param name="wmode" value="transparent" />'+
             '</object>';
var vpFooter=document.getElementById(vp_descriptionId).innerHTML;
var vpcode='<div style="padding-left:15px; padding-right:15px;background-color:#E5E5E5;"><div class="bcvideoclose"><a style="cursor:pointer;" onclick="showclose();"><img src="http://www.oracleimg.com/us/assets/lightbox-close-button.gif" width="12" height="12" border="0" alt="Close"></a></div>'+
	        vpObject+'<div class="videotext" style="padding-top:10px;padding-bottom:20px;">'+vpFooter+'</div></div>';

document.getElementById('bcVideoPlayer').innerHTML =  vpcode;

brightcove.createExperiences();
isIE6 = /msie|MSIE 6/.test(navigator.userAgent); 

document.getElementById('bcVideoPlayer').style.display="block";
document.getElementById('lightbox_brightcove').style.display="block";
}

function showclose(){
   document.getElementById('bcVideoPlayer').innerHTML = '';
	isIE6 = /msie|MSIE 6/.test(navigator.userAgent); 					
		document.getElementById('lightbox_brightcove').style.display="none";
		document.getElementById('bcVideoPlayer').style.display="none";
                if(isIE6)
		document.searchForm.group.style.visibility = "visible"; 
}

function getUrlVars(){
	var vars = [], hash;
	var url = window.location.href;
	if (url.indexOf("#") != -1) url = url.split("#")[0];
	var hashes = url.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++){
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}

function embedBrightcove(s,a,p,b,k){
	bcvideoembedsettings(s,a,p,b,k);
}

// EMBED
function bcvideoembedsettings(size, autoplay, playerType, bctid, playerKey){
	if (playerType == undefined){
		document.write('"playerType" is not defined.');
		return;
	}
	if ((playerType == 'single' || playerType == 'single-social') && bctid == undefined){
		document.write('"bctid" is not defined.');
		return;
	}
	
	//get settings based on passed params
	var params = {};
	params['bctid'] = bctid;
	params['size'] = size;
	params['playerType'] = playerType;
	params['playerKey'] = playerKey;
	var settings = w01getBrightcoveSettings(params);
	var rnd = Math.random();
	
	//if these params aren't passed then take the param as built in the settings logic
	if (playerKey == undefined){ playerKey = settings['playerKey']; }
	if (bctid == undefined){ bctid = settings['bctid']; } 
	
	// Autoplay, default is false
	if (autoplay == undefined){ autoplay = false; }
	document.write('<object id="myExperience' + rnd + '" class="BrightcoveExperience">\
		<param name="@videoPlayer" value="' + bctid + '">\
		<param name="@videoList" value="' + settings['videoList'] + '" />\
		<param name="bgcolor" value="#000000" />\
		<param name="width" value="' + settings['width'] + '" />\
		<param name="height" value="' + settings['height'] + '" />\
		<param name="playerID" value="' + settings['playerID'] + '" />\
		<param name="playerKey" value="' + playerKey + '" />\
		<param name="publisherID" value="1460825906"/>\
		<param name="isVid" value="true" />\
		<param name="isUI" value="true" />\
		<param name="dynamicStreaming" value="true">\
		<param name="autoStart" value="' + autoplay + '">\
		<param name="wmode" value="transparent" />\
		</object>');
		
	runMobileCompatibilityScript('myExperience'+rnd, settings['width'], settings['height'], rnd);

}

	
	/*! CWO2 */
function printDelFeedShort(res){
	jQuery.each(res, function(i, item){
		var tags_html = '';
		jQuery.each(item.t, function(j, tag){
			if (j >= 3) return( false );	//tags shown is limited to 3
			tags_html += '<a href="http://delicious.com/oracletechnologynetwork/'+jQuery.trim(tag)+'" target="_blank">'+jQuery.trim(tag)+'</a>&nbsp;&nbsp;';
		});
		var html = [
			'<li> ',
			'<a href="https://twitter.com/intent/tweet?text='+encodeURIComponent(item.d+' '+item.u)+'" rel="opop" data-opop="740x440" class="lnk-icon lnk-tweet">Tweet</a>',			
			'<a href="'+item.u+'" target="_blank"><h5>'+item.d+'</h5></a>',
			'<p class="cw02tags">Posted ' + new Date(item.dt).toLocaleDateString() + '  //  Tags: '+tags_html+'</p>'
		];
		jQuery('#deliciousfeed').append(html.join(''));
	});
}

jQuery(document).ready(function($){
	if ($("#deliciousfeed").length > 0){
		var url = ($("#deliciousfeed").attr('data-feedsrc')) ? $("#deliciousfeed").attr('data-feedsrc') : 'http://feeds.delicious.com/v2/json/oracletechnologynetwork/?fancy=1&count=7&callback=printDelFeedShort';
		$.getScript(url);
	}
});

	
	/*! CW03 */
(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['jquery'], factory); 
  else
    factory(jQuery);
}(function ($) {
  $.fn.tweet = function(o){
    var s = $.extend({
      username: null,                           
      list: null,                               
      query: null,                             
      avatar_size: null,                    
      count: 3,                             
      fetch: null,                             
      page: 1,                               
      retweets: true,                       
      intro_text: null,                  
      outro_text: null,               
      loading_text: null,                       
      refresh_interval: null ,                  
      twitter_url: "twitter.com",               
      twitter_api_url: "api.twitter.com",       
      twitter_search_url: "search.twitter.com", 
      template: "{avatar}{time}{join}{text}",   
      comparator: function(tweet1, tweet2) {    
        return tweet2["cw03_time"] - tweet1["cw03_time"];
      },
      filter: function(tweet) {                 
        return true;
      }

    }, o);

    var url_regexp = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;

    function t(template, info) {
      if (typeof template === "string") {
        var result = template;
        for(var key in info) {
          var val = info[key];
          result = result.replace(new RegExp('{'+key+'}','g'), val === null ? '' : val);
        }
        return result;
      } else return template(info);
    }
    $.extend({tweet: {t: t}});

    function replacer (regex, replacement) {
      return function() {
        var returning = [];
        this.each(function() {
          returning.push(this.replace(regex, replacement));
        });
        return $(returning);
      };
    }

    function escapeHTML(s) {
      return s.replace(/</g,"&lt;").replace(/>/g,"^&gt;");
    }

    $.fn.extend({
      linkUser: replacer(/(^|[\W])@(\w+)/gi, "$1<span class=\"at\">@</span><a href=\"http://"+s.twitter_url+"/$2\">$2</a>"),
      linkHash: replacer(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,
                         ' <a href="http://'+s.twitter_search_url+'/search?q=&tag=$1&lang=all'+((s.username && s.username.length == 1 && !s.list) ? '&from='+s.username.join("%2BOR%2B") : '')+'">#$1</a>')
    });

    function linkURLs(text, entities) {
      return text.replace(url_regexp, function(match) {
        var url = (/^[a-z]+:/i).test(match) ? match : "http://"+match;
        var text = match;
        for(var i = 0; i < entities.length; ++i) {
          var entity = entities[i];
          if (entity.url == url && entity.expanded_url) {
            url = entity.expanded_url;
            text = entity.display_url;
            break;
          }
        }
        return "<a href=\""+escapeHTML(url)+"\">"+escapeHTML(text)+"</a>";
      });
    }

    function parse_date(date_str) {
      return Date.parse(date_str.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, '$1,$2$4$3'));
    }

    function relative_time(date) {
      var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
      var delta = parseInt((relative_to.getTime() - date) / 1000, 10);
      var r = '';
      if (delta < 1) {
        r = 'just now';
      } else if (delta < 60) {
        r = delta + ' seconds ago';
      } else if(delta < 120) {
        r = '1 minute ago';
      } else if(delta < (45*60)) {
        r = (parseInt(delta / 60, 10)).toString() + ' minutes ago';
      } else if(delta < (2*60*60)) {
        r = '1 hour ago';
      } else if(delta < (24*60*60)) {
        r = (parseInt(delta / 3600, 10)).toString() + ' hours ago';
      } else if(delta < (48*60*60)) {
        r = '1 day ago';
      } else {
        r = (parseInt(delta / 86400, 10)).toString() + ' days ago';
      }
      return r;
    }

    function build_api_url() {
      var proto = ('https:' == document.location.protocol ? 'https:' : 'http:');
      var count = (s.fetch === null) ? s.count : s.fetch;
      var common_params = '&include_entities=1&callback=?';
      if (s.list) {
        return proto+"//"+s.twitter_api_url+"/1/"+s.username[0]+"/lists/"+s.list+"/statuses.json?page="+s.page+"&per_page="+count+common_params;
      } else if (s.query === null && s.username.length == 1) {
        return proto+'//'+s.twitter_api_url+'/1/statuses/user_timeline.json?screen_name='+s.username[0]+'&count='+count+(s.retweets ? '&include_rts=1' : '')+'&page='+s.page+common_params;
      } else {
        var query = (s.query || 'from:'+s.username.join(' OR from:'));
        return proto+'//'+s.twitter_search_url+'/search.json?&q='+encodeURIComponent(query)+'&rpp='+count+'&page='+s.page+common_params;
      }
    }

    function extract_avatar_url(item, secure) {
      if (secure) {
        return ('user' in item) ?
          item.user.profile_image_url_https :
          extract_avatar_url(item, false).
            replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/");
      } else {
        return item.profile_image_url || item.user.profile_image_url;
      }
    }

    function extract_template_data(item){
      var o = {};
      o.item = item;
      o.source = item.source;
      o.screen_name = item.from_user || item.user.screen_name;
      o.avatar_size = s.avatar_size;
      o.avatar_url = extract_avatar_url(item, (document.location.protocol === 'https:'));
      o.retweet = typeof(item.retweeted_status) != 'undefined';
      o.cw03_time = parse_date(item.created_at)
      o.tweet_id = item.id_str;
      o.twitter_base = "http://"+s.twitter_url+"/";
      o.user_url = o.twitter_base+o.screen_name;
      o.tweet_url = o.user_url+"/status/"+o.tweet_id;
      o.reply_url = o.twitter_base+"intent/tweet?in_reply_to="+o.tweet_id;
      o.retweet_url = o.twitter_base+"intent/retweet?tweet_id="+o.tweet_id;
      o.retweeted_screen_name = o.retweet && item.retweeted_status.user.screen_name;
      o.tweet_relative_time = relative_time(o.cw03_time);
      o.entities = item.entities ? (item.entities.urls || []).concat(item.entities.media || []) : [];
      o.tweet_raw_text = o.retweet ? ('RT @'+o.retweeted_screen_name+' '+item.retweeted_status.text) : item.text; // avoid '...' in long retweets
      o.tweet_text = $([linkURLs(o.tweet_raw_text, o.entities)]).linkUser().linkHash()[0];
      o.user = t('<a class="tweet_user" href="{user_url}">{screen_name}</a>', o);
      o.avatar = o.avatar_size ?
        t('<a class="cw03_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" border="0"/></a>', o) : '';
      o.time = t('<span class="cw03_time">{tweet_relative_time}</span>', o);
      o.text = t('<span class="tweet_text"><a href="{tweet_url}">{tweet_text}</a></span>', o);
      o.reply_action = t('<a class="tweet_action tweet_reply" rel="opop" data-opop="650x420" href="{reply_url}">reply</a>', o);
      o.retweet_action = t('<a class="tweet_action tweet_retweet" rel="opop" data-opop="650x420" href="{retweet_url}">retweet</a>', o);
      return o;
    }

    return this.each(function(i, widget){
      var list = $('<ul class="cw03_list">');
      var intro = '<p class="cw03_intro">'+s.intro_text+'</p>';
      var outro = '<p class="cw03_outro">'+s.outro_text+'</p>';
      var loading = $('<p class="loading">'+s.loading_text+'</p>');

      if(s.username && typeof(s.username) == "string"){
        s.username = [s.username];
      }

      $(widget).unbind("tweet:load").bind("tweet:load", function(){
        if (s.loading_text) $(widget).empty().append(loading);
        $.getJSON(build_api_url(), function(data){
          $(widget).empty().append(list);
          if (s.intro_text) list.before(intro);
          list.empty();

          var tweets = $.map(data.results || data, extract_template_data);
          tweets = $.grep(tweets, s.filter).sort(s.comparator).slice(0, s.count);
          list.append($.map(tweets, function(o) { return "<li>" + t(s.template, o) + "</li>"; }).join('')).
              children('li:first').addClass('cw03_first').end().
              children('li:odd').addClass('cw03_even').end().
              children('li:even').addClass('cw03_odd');

          if (s.outro_text) list.after(outro);
          $(widget).trigger("loaded").trigger((tweets.length === 0 ? "empty" : "full"));
          if (s.refresh_interval) {
            window.setTimeout(function() { $(widget).trigger("tweet:load"); }, 1000 * s.refresh_interval);
          }
        });
      }).trigger("tweet:load");
    });
  };
}));


jQuery(document).ready(function($){
	if ($('#twitterfeed').length > 0) {
		var querySet = ($("#twitterfeed").attr('data-tweetsrc')) ? $("#twitterfeed").attr('data-tweetsrc') : 'oracletechnet';
		$('#twitterfeed').tweet({
			avatar_size: 32,
			count: 4,
			query: querySet,
			template: "{avatar}<div class='cw03w1'>{text}<br>{time}</div>"
		});
	}
});	

}
jq=false; // don't delete this it keeps the yui compressor from being stupid

/*! ORACLELIB.PROFILE  */

var USER = new getUserInfo();
var language_root  	= "";

// EXISTSUCMCOOKIE
function existsUCMCookie(s){
	if (s == "ORA_UCM_INFO"){
		if ((ORA_UCM_INFO.version != null) &&
			(ORA_UCM_INFO.guid != null) &&
			(ORA_UCM_INFO.username != null)){
		return true;
		}
	}
	return false;
}

// ISUCMREGISTERED
function isUCMRegistered(){
	if (existsUCMCookie("ORA_UCM_INFO") == true){
		orainfo_exists = true;
		otnnm_exists = true;
		return true;
	}
	return false;
}

// GETARG
function getArg(arg_name, str){
	var value = "", tmpstr = "";
	if (!str) str = location.search.substring(1);
	if (!str){
		return value;
	}else{
		var tmparray = str.split("&");
		for (i=0; i<tmparray.length; i++){
			tmpstr = tmparray[i].toUpperCase();
			if (tmpstr.indexOf(arg_name.toUpperCase() + "=") != -1){
				var tmp2array = tmparray[i].split("=");
				value = tmp2array[1];
			}
		}
	}
	return value;
}

// ISUCMANONYMOUS
function isUCMAnonymous(){
	if ((ORA_UCM_INFO.version != null) && (ORA_UCM_INFO.guid != null) && (isUCMRegistered() == false)){
		return true;
	}else{
		return false;
	}
}

// GETUCMCOOKIES
function getUCMCookies(){
	ORA_UCM_INFO = new private_ORA_UCM_INFO();
}

// PRINTWELCOME
function printWelcome(){
	var loc= window.location.href;
	var tempURL= loc;
	var temp = tempURL.split('/');
	var tmp = '<span class="profile">';
	if ( USER.guid ){
		if(temp[4] == "global" ){
			tmp += 'Welcome ' + USER.firstname + ' ( <a class="profile" href="javascript:sso_sign_out();">' + 'Sign Out'+ '<\/a> | <a class="profile" href="https://myprofile.oracle.com/EndUser/faces/info/internalAccount.jspx?nextURL=http://www.oracle.com/us/index.html?'+temp[5]+ '">' + 'Account' + '<\/a> )';
		}else{
			tmp += 'Welcome ' + USER.firstname + ' ( <a class="profile" href="javascript:sso_sign_out();">' + 'Sign Out'+ '<\/a> | <a class="profile" href="https://myprofile.oracle.com/EndUser/faces/info/internalAccount.jspx?nextURL=http://www.oracle.com/us/index.html">' + 'Account' + '<\/a> )';
		}	
	}else{
		if(temp[4] == "global" ){
			tmp += '<a href="' + 'http://www.oracle.com/webapps/redirect/signon?nexturl=http://www.oracle.com/us/index.html?'+temp[5]+ '">' + '(Sign In / Register for a free Oracle Web account)'+ '<\/a>';
		}else{
			tmp += '<a href="' + 'http://www.oracle.com/webapps/redirect/signon?nexturl=http://www.oracle.com/us/index.html">' + '(Sign In / Register for a free Oracle Web account)'+ '<\/a>';
		}	
	}
	tmp += '<\/span>';
	document.write(tmp);
	document.close();
}

// PRINTWELCOMEOPN
function printWelcomeOPN(){
	var url = location.href;
	if (url.indexOf('html?loc' ) > -1){
		var param = url.replace( /^[^=]+\=/, '' );
		loc = param;		 
	}else{
		loc = window.location.href;
	}
	loc= escape(loc);
	var tmp = '<span class="profile">';
	if (USER.guid){
		tmp += 'Welcome ' + USER.firstname + ' ( <a class="profile" href="javascript:sso_sign_out();">' + 'Sign Out'+ '<\/a> | <a class="profile" href="http://www.oracle.com/partners/admin/web_account.html?loc='+loc + '">' + 'Account' + '<\/a> )';
	}else{
		tmp += '<a href="' + 'http://www.oracle.com/partners/admin/web_account.html?loc='+loc + '">' + '(Sign In / Register for a free Oracle Web account)'+ '<\/a>';
	}
	tmp += '<\/span>';
	document.write(tmp);
	document.close();
}

// PRINTWELCOMESES
function printWelcomeSES(username){
	var tmp = '<span class="profile">';
	if (username != null && username != ""){
		tmp += 'Welcome ' + USER.firstname + ' ( <a class="profile" href="/search/logout.jsp?return_url=/search/search">' + 'Sign Out'+ '<\/a> | <a class="profile" href="http://www.oracle.com/admin/account/index.html">' + 'Account' + '<\/a> )';   
	}else{
		tmp += '<a href="' + '/search/logout.jsp?return_url=/search/search">' + '(Sign In)'+ '<\/a>';
	}
	tmp += '<\/span>';
	document.write(tmp);
	document.close();
}

// SIGNOUT
function signout(url){
	rUrl = encodeURIComponent(window.location.href); 
	window.location="http://login.oracle.com/sso/logout?p_done_url="+rUrl; //stage only
}

// GETCOOKIEDATA
function getCookieData(label){
	var labelLen = label.length;
	var cLen = document.cookie.length;
	var i = 0;
	var cEnd;
	while(i < cLen){
		var j=i+labelLen;
		if (document.cookie.substring(i,j) == label){
			cEnd=document.cookie.indexOf(";",j);
			if (cEnd==-1){
				cEnd=document.cookie.length;
			}
			j++;
			return decodeURIComponent(document.cookie.substring(j,cEnd).replace("+","%20"));
		}
		i++;
	}
	return "";
}

// GETUSERINFO
function getUserInfo(){
	var USER = new Object();
	this.value_enc	= getCookieData("ORA_UCM_INFO");
	this.array		= this.value_enc.split("~");
	USER.version	= this.array[0];
	USER.guid		= this.array[1];
	USER.firstname	= this.array[2];
	USER.lastname	= this.array[3];
	USER.username	= this.array[4];
	return USER;
}

// INVALIDATEAUTHCOOKIE
function invalidateAuthCookie(){
    var oraSSOauthHint = getCookieData("ORASSO_AUTH_HINT");
    if (oraSSOauthHint != null){
		var cookie_invalid_str = "ORASSO_AUTH_HINT=INVALID; Max-Age=0; domain=.oracle.com; path=/;";
		document.cookie = cookie_invalid_str;
    }
}

// SSO_SIGN_OUT
function sso_sign_out(){ 
    rUrl = escape(window.location.href); 
	if ((rUrl.indexOf('\/secure') != -1)){
		rUrl = 'http://www.oracle.com/partners/';
	}
	invalidateAuthCookie();
	window.location="http://login.oracle.com/sso/logout?p_done_url="+rUrl; //stage only
} 

// PRIVATE_UCMCOOKIEDECODE
function private_UCMCookieDecode(value){
	var asciiArray = " !\"#$&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~.";
	var urldecodevalue = unescape(value);
	var ucmdecodevalue = '';
	var ch = '';
	for (i=0; i<urldecodevalue.length; i++){
		ch = urldecodevalue.charAt(i)
		j = asciiArray.indexOf(ch);
		if (j != -1){
			j +=2;
			if(j > ( asciiArray.length - 1)){
				j -= asciiArray.length;
			}
			ucmdecodevalue += asciiArray.charAt(j);
		}else{
			ucmdecodevalue += ch;
		}
	}
	return ucmdecodevalue;
}

// PRIVATE_ORA_UCM_INFO
function private_ORA_UCM_INFO(){
	this.value_enc	= getCookieData("ORA_UCM_INFO");
	this.array		= this.value_enc.split("~");
	this.version	= this.array[0];
	this.guid		= this.array[1];
	this.firstname	= this.array[2];
	this.lastname	= this.array[3];
	this.username	= this.array[4];
	var newCookie	= ["3", this.guid, this.firstname, this.lastname, this.username ];
	var cookieData	= newCookie.join("~");
}

// SETCOOKIE
var min = (60 * 1000);
var hour = (60 * min);
var day = (24 * hour);
var year = (365 * day);


/*! ORACLELIB.GLOBALMENU  */

// Function for the worldwide popup
function worldwideCountries(from){

	if(from=="hp"){
		document.writeln("<div id=\'panelDiv\' style=\"position:absolute; visibility:hidden; left:0px; z-index:20000; WIDTH: 620px; BORDER-RIGHT: #9A9A9A 1px solid; PADDING-RIGHT: 12px;BORDER-TOP: #9A9A9A 1px solid; PADDING-LEFT: 12px; PADDING-BOTTOM: 12px; BORDER-LEFT: #9A9A9A 1px solid; PADDING-TOP: 12px;BORDER-BOTTOM: #9A9A9A  1px solid; BACKGROUND-COLOR: #ffffff\" onmouseover=\"panelMOv(\'panelDiv\',\'img1\');\" onmouseout=\"panelMOu(\'panelDiv\');\">");
	}else if (from=="events"){
		document.writeln("<div id=\'evSearch\' style=\"position:absolute; right:10px; top:23px; visibility:hidden; z-index:20000; WIDTH: 620px; BORDER-RIGHT: #9A9A9A 1px solid; PADDING-RIGHT: 12px;BORDER-TOP: #9A9A9A 1px solid; PADDING-LEFT: 12px; PADDING-BOTTOM: 12px; BORDER-LEFT: #9A9A9A 1px solid; PADDING-TOP: 12px;BORDER-BOTTOM: #9A9A9A 1px solid; BACKGROUND-COLOR: #ffffff\" onmouseover=\"panelMOv(\'evSearch\',\'img1\');\" onmouseout=\"panelMOu(\'evSearch\');\">");
	}else{	
		document.writeln("<div id=\'panelDiv\' style=\"position:absolute; visibility:hidden; left:0px; z-index:20000; WIDTH: 620px; BORDER-RIGHT: #9A9A9A 1px solid; PADDING-RIGHT: 12px;BORDER-TOP: #9A9A9A 1px solid; PADDING-LEFT: 12px; PADDING-BOTTOM: 12px; BORDER-LEFT: #9A9A9A 1px solid; PADDING-TOP: 12px;BORDER-BOTTOM: #9A9A9A 1px solid; BACKGROUND-COLOR: #ffffff\" onmouseover=\"panelMOv(\'panelDiv\',\'img1\');\" onmouseout=\"panelMOu(\'panelDiv\');\">");
	}

var a = '<div nowrap><a href="http://www.oracle.com/';
var b = '" onClick="s_objectID=\'R8:WW:';
var c = '<\/a><\/div>';

// Global Menu
document.writeln('<table width="100%" class="sngPstMenu">\
<tr align=left><td colspan=5 class="sngPst" style="border-bottom:#cccccc 1px solid" title="select a country region"><b>SELECT A COUNTRY/REGION<\/b><\/td><\/tr>\
<tr valign=top align=left><td width=20% class="sngPst">\
'+a+'ao/index.html'+b+'AFRICA OPERATIONS\';" id="Africa Operations">Africa Operation'+c+'\
'+a+'lad/index.html'+b+'ARGENTINA\';" id="Argentina">Argentina'+c+'\
'+a+'au/index.html'+b+'AUSTRALIA\';" id="Australia">Australia'+c+'\
'+a+'at/index.html'+b+'AUSTRIA\';" id="Austria">Austria'+c+'\
'+a+'me/index.html'+b+'BAHRAIN\';" id="Bahrain">Bahrain'+c+'\
'+a+'as/corporate/contact/bangladesh-316183-en-as.html'+b+'BANGLADESH\';" id="Bangladesh">Bangladesh'+c+'\
'+a+'be/index.html'+b+'BELGIUM AND LUXEMBOURG\';" id="Belgium &amp; Luxembourg">Belgium &amp; Luxembourg'+c+'\
'+a+'lad/index.html'+b+'BELIZE\';" id="Belize">Belize'+c+'\
'+a+'as/corporate/contact/bhutan-316187-en-as.html'+b+'BHUTAN\';" id="Bhutan">Bhutan'+c+'\
'+a+'lad/index.html'+b+'BOLIVIA\';" id="Bolivia">Bolivia'+c+'\
'+a+'ba/index.html'+b+'BOSNIA AND HERZEGOVINA\';" id="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina'+c+'\
'+a+'br/index.html'+b+'BRASIL\';" id="Brasil">Brasil'+c+'\
'+a+'as/corporate/contact/brunei-316198-en-as.html'+b+'BRUNEI\';" id="Brunei">Brunei'+c+'\
'+a+'bg/index.html'+b+'BULGARIA\';" id="Bulgaria">Bulgaria'+c+'\
'+a+'as/corporate/contact/cambodia-316193-en-as.html'+b+'CAMBODIA\';" id="Cambodia">Cambodia'+c+'\
'+a+'ca-en/index.html'+b+'CANADA - ENGLISH\';" id="Canada - English">Canada - English'+c+'\
'+a+'ca-fr/index.html'+b+'CANADA - FRENCH\';" id="Canada - French">Canada - French'+c+'\
'+a+'lad/index.html'+b+'CHILE\';" id="Chile">Chile'+c+'\
'+a+'cn/index.html'+b+'CHINA\';" id="China">China'+c+'\
'+a+'lad/index.html'+b+'COLOMBIA\';" id="Colombia">Colombia'+c+'\
<\/td><td width=20% class=\'sngPst\'>\
'+a+'lad/index.html'+b+'COSTA RICA\';" id="Costa Rica">Costa Rica'+c+'\
'+a+'hr/index.html'+b+'CROATIA\';" id="Croatia">Croatia'+c+'\
'+a+'cy/index.html'+b+'CYPRUS\';" id="Cyprus">Cyprus'+c+'\
'+a+'cz/index.html'+b+'CZECH REPUBLIC\';" id="Czech Republic">Czech Republic'+c+'\
'+a+'dk/index.html'+b+'DENMARK\';" id="Denmark">Denmark'+c+'\
'+a+'lad/index.html'+b+'ECUADOR\';" id="Ecuador">Ecuador'+c+'\
'+a+'me/index.html'+b+'EGYPT\';" id="Egypt">Egypt'+c+'\
'+a+'ee/index.html'+b+'ESTONIA\';" id="Estonia">Estonia'+c+'\
'+a+'fi/index.html'+b+'FINLAND\';" id="Finland">Finland'+c+'\
'+a+'fr/index.html'+b+'FRANCE\';" id="France">France'+c+'\
'+a+'de/index.html'+b+'GERMANY\';" id="Germany">Germany'+c+'\
'+a+'gr/index.html'+b+'GREECE\';" id="Greece">Greece'+c+'\
'+a+'lad/index.html'+b+'GAUTEMALA\';" id="Guatemala">Guatemala'+c+'\
'+a+'lad/index.html'+b+'HONDURAS\';" id="Honduras">Honduras'+c+'\
'+a+'hk/index.html'+b+'HONGKONG\';" id="Hong Kong">Hong Kong'+c+'\
'+a+'hu/index.html'+b+'HUNGARY\';" id="Hungary">Hungary'+c+'\
'+a+'in/index.html'+b+'INDIA\';" id="India">India'+c+'\
'+a+'as/index.html'+b+'INDONESIA\';" id="Indonesia">Indonesia'+c+'\
'+a+'me/index.html'+b+'IRAQ\';" id="Iraq">Iraq'+c+'\
'+a+'ie/index.html'+b+'IRELAND\';" id="Ireland">Ireland'+c+'\
<\/td><td width=20% class=\'sngPst\'>\
'+a+'il/index.html'+b+'ISRAEL\';" id="Israel">Israel'+c+'\
'+a+'it/index.html'+b+'ITALY\';" id="Italy">Italy'+c+'\
<div><a href="http://www.oracle.co.jp/'+b+'JAPAN\';" id="Japan">Japan'+c+'\
'+a+'me/index.html'+b+'JORDAN\';" id="Jordan">Jordan'+c+'\
'+a+'ru/index.html'+b+'KAZAKHSTAN\';" id="Kazakhstan">Kazakhstan'+c+'\
'+a+'kr/index.html'+b+'KOREA\';" id="Korea">Korea'+c+'\
'+a+'me/index.html'+b+'KUWAIT\';" id="Kuwait">Kuwait'+c+'\
'+a+'as/corporate/contact/laos-316260-en-as.html'+b+'LAOS\';" id="Laos">Laos'+c+'\
'+a+'lv/index.html'+b+'LATVIA\';" id="Lativa">Latvia'+c+'\
'+a+'me/index.html'+b+'LEBANON\';" id="Lebanon">Lebanon'+c+'\
'+a+'lt/index.html'+b+'LITHUANIA\';" id="Lithuania">Lithuania'+c+'\
'+a+'as/index.html'+b+'MALAYSIA\';" id="Malaysia">Malaysia'+c+'\
'+a+'as/corporate/contact/maldives-316209-en-as.html'+b+'MALDIVES\';" id="Maldives">Maldives'+c+'\
'+a+'mt/index.html'+b+'MALTA\';" id="Malta">Malta'+c+'\
'+a+'lad/index.html'+b+'MEXICO\';" id="Mexico">Mexico'+c+'\
'+a+'ru/index.html'+b+'MOLDOVA\';" id="Moldova">Moldova'+c+'\
'+a+'as/corporate/contact/nepal-316215-en-as.html'+b+'NEPAL\';" id="Nepal">Nepal'+c+'\
'+a+'nl/'+b+'NETHERLANDS\';" id="Netherlands">Netherlands'+c+'\
'+a+'nz/index.html'+b+'NEW ZEALAND\';" id="New Zealand">New Zealand'+c+'\
'+a+'lad/index.html'+b+'NICARAGUA\';" id="Nicaragua">Nicaragua'+c+'\
<\/td><td width=20% class=\'sngPst\'>\
'+a+'no/index.html'+b+'NORWAY\';" id="Norway">Norway'+c+'\
'+a+'me/index.html'+b+'OMAN\';" id="Oman">Oman'+c+'\
'+a+'as/corporate/contact/pakistan-316185-en-as.html'+b+'PAKISTAN\';" id="Pakistan">Pakistan'+c+'\
'+a+'lad/index.html'+b+'PANAMA\';" id="Panama">Panama'+c+'\
'+a+'lad/index.html'+b+'PARAGUAY\';" id="Paraguay">Paraguay'+c+'\
'+a+'lad/index.html'+b+'PERU\';" id="Peru">Peru'+c+'\
'+a+'as/index.html'+b+'PHILLIPINES\';" id="Philippines">Philippines'+c+'\
'+a+'pl/'+b+'POLAND\';" id="Poland">Poland'+c+'\
'+a+'pt/index.html'+b+'PORTUGAL\';" id="Portugal">Portugal'+c+'\
'+a+'lad/index.html'+b+'PUERTO RICO\';" id="Puerto Rico">Puerto Rico'+c+'\
'+a+'me/index.html'+b+'QATAR\';" id="Qatar">Qatar'+c+'\
'+a+'ro/index.html'+b+'ROMANIA\';" id="Romania">Romania'+c+'\
'+a+'ru/index.html'+b+'RUSSIA\';" id="Russia">Russia'+c+'\
'+a+'me/index.html'+b+'SAUDI ARABIA\';" id="Saudi Arabia">Saudi Arabia'+c+'\
'+a+'yu/index.html'+b+'SERBIA AND MONTENGRO\';" id="Serbia &amp; Montenegro">Serbia &amp; Montenegro'+c+'\
'+a+'as/index.html'+b+'SINGAPORE\';" id="Singapore">Singapore'+c+'\
'+a+'sk/index.html'+b+'SLOVAKIA\';" id="Slovakia">Slovakia'+c+'\
'+a+'si/index.html'+b+'SLOVENIA\';" id="Slovenia">Slovenia'+c+'\
'+a+'za/index.html'+b+'SOUTH AFRICA\';" id="South Africa">South Africa'+c+'\
'+a+'es/index.html'+b+'SPAIN\';" id="Spain">Spain'+c+'\
<\/td><td width=20% class=\'sngPst\'>\
'+a+'as/corporate/contact/srilanka-316250-en-as.html'+b+'SRI LANKA\';" id="Sri Lanka">Sri Lanka'+c+'\
'+a+'se/index.html'+b+'SWEDEN\';" id="Sweden">Sweden'+c+'\
'+a+'ch-fr/index.html'+b+'SWITZERLAND -- FRENCH\';" id="Switzerland - French">Switzerland -- French'+c+'\
'+a+'ch-de/index.html'+b+'SWITZERLAND -- GERMAN\';" id="Switzerland - German">Switzerland -- German'+c+'\
'+a+'tw/index.html'+b+'TAIWAN\';" id="Taiwan">Taiwan'+c+'\
'+a+'as/index.html'+b+'THAILAND\';" id="Thailand">Thailand'+c+'\
'+a+'tr/index.html'+b+'TURKEY\';" id="Turkey">Turkey'+c+'\
'+a+'ru/index.html'+b+'UKRAINE\';" id="Ukraine">Ukraine'+c+'\
'+a+'me/index.html'+b+'UNITED ARAB EMIRATES\';" id="United Arab Emirates">United Arab Emirates'+c+'\
'+a+'uk/index.html'+b+'UNITED KINGDOM\';" id="United Kingdom">United Kingdom'+c+'\
'+a+'us/index.html'+b+'UNITED STATES\';" id="United States">United States'+c+'\
'+a+'lad/index.html'+b+'URAGUAY\';" id="Uruguay">Uruguay'+c+'\
'+a+'lad/index.html'+b+'VENEZUELA\';"id="Venezuela">Venezuela'+c+'\
'+a+'as/corporate/contact/vietnam-316254-en-as.html'+b+'VIETNAM\';" id="Vietnam">Vietnam'+c+'\
'+a+'me/index.html'+b+'YEMEN\';" id="Yemen">Yemen'+c+'\
<\/td><\/tr>\
<tr><td><\/td><\/tr>\
<\/table>\
<\/div>');
}

// CLEANUP COMMENT XXXXXXX -- DELETE
// Worldwide popup menu
function panelMOv() {
	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
		dropdown.style.visibility = "hidden";
	}
	var p = document.getElementById("panelDiv");
	p.style.visibility = "visible";
}

function panelMOu() {
	var p = document.getElementById("panelDiv");
	p.style.visibility = "hidden";
	
	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
		dropdown.style.visibility = "visible";
	}
}

function mvqMOu() {
	var mvqPDiv = document.getElementById("panelDiv"); 
	mvqPDiv.style.visibility = "hidden";

	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
		dropdown.style.visibility = "visible";
	}
}
	function findPosX(obj)
  {
    var curleft = 0;
    if(obj.offsetParent)
        while(1) 
        {
          curleft += obj.offsetLeft;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.x)
        curleft += obj.x;
    return curleft;
  }
  
  function findPosY(obj)
  {
    var curtop = 0;
    if(obj.offsetParent)
        while(1)
        {
          curtop += obj.offsetTop;
          if(!obj.offsetParent)
            break;
          obj = obj.offsetParent;
        }
    else if(obj.y)
        curtop += obj.y;
		return curtop;
  }

// new functions to find dynamic position of any given element added.
// CLEANUP COMMENT XXXXXXX -- DELETE
function positionedOffsetLeft(element) {
    var valueT = 0, valueL = 0;
    do {
      // valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
      if (element) {
        if (element.tagName.toUpperCase() == 'BODY') break;
        var p = Element.getStyle(element, 'position');
        if (p !== 'static') break;
      }
    } while (element);
   return valueL ;
  }
  
  function positionedOffsetTop(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      // valueL += element.offsetLeft || 0;
      element = element.offsetParent;
      if (element) {
        if (element.tagName.toUpperCase() == 'BODY') break;
        var p = Element.getStyle(element, 'position');
        if (p !== 'static') break;
      }
    } while (element);
    return valueT;
  }
// CLEANUP COMMENT XXXXXXX -- DELETE
function panelMOv(panelID) {
	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
	}
	var p = document.getElementById(panelID);
	p.style.visibility = "visible";
}

function panelMOu(panelID) {
	var p = document.getElementById(panelID);
	p.style.visibility = "hidden";
	
	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
	}
}
// CLEANUP COMMENT XXXXXXX -- DELETE
function mvqMOv(panelID,imgID) {

	var el = document.getElementById(imgID);
	if ( typeof el != 'undefined' && el != null ) {
		var x = positionedOffsetLeft(el);
		var y = positionedOffsetTop(el);
		var imgWidth = el.width ;
		
		if(panelID=="panelDiv")
		{
			document.getElementById(panelID).style.left = x - (413) +"px";
			document.getElementById(panelID).style.top = y+9 +"px";
		}
		else if(panelID=="panelDiv_iam" || panelID=="panelDiv_comm")
		{
			document.getElementById(panelID).style.left = x -195 +"px";
			document.getElementById(panelID).style.top = y+9 +"px";
		}
		else if(panelID=="panelDiv_iwanto")
		{
			document.getElementById(panelID).style.left = x -195 +"px";
			document.getElementById(panelID).style.top = y+9 +"px";
		}
		else if(panelID=="panelDiv_search")
		{
			if (location.pathname.indexOf('/partners') == 0)
			{
			document.getElementById(panelID).style.left = x-5 +"px";
			document.getElementById(panelID).style.top = y - (navigator.appName!="Netscape" ? 20:7) +"px";	
			}
			else
			{
			document.getElementById(panelID).style.left = x-5 +"px";
			document.getElementById(panelID).style.top = y - (navigator.appName!="Netscape" ? 5:7) +"px";	
			}
		}
		else if(panelID=="panelDiva")
		{
			document.getElementById(panelID).style.left = x - 35 +"px";
			document.getElementById(panelID).style.top = y+18 +"px";	
		}
		else if(panelID=="OPNpanelDiv")
		{
			document.getElementById(panelID).style.left = x - (navigator.appName!="Netscape" ? 340:365) +"px";
			document.getElementById(panelID).style.top = y + 12+"px";	
		}
		else if(panelID=="panelDivOTN")
		{
			document.getElementById(panelID).style.left = x - 195 +"px";
			document.getElementById(panelID).style.top = y+9 +"px";	
		}
		
		  else if(panelID=="evSearch")
		 {
		        document.getElementById(panelID).style.left = x - (413) +"px";
		        document.getElementById(panelID).style.top = y+9 +"px";
                }
				
	}

	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
	}
	
	var mvqPDiv = document.getElementById(panelID); 
	mvqPDiv.style.visibility = "visible";

}

function mvqMOu(panelID) {
	var mvqPDiv = document.getElementById(panelID); 
	mvqPDiv.style.visibility = "hidden";

	if (navigator.appName != "Netscape") {
		var dropdown = document.getElementById("group");
	}
}
// CLEANUP COMMENT XXXXXXX -- DELETE
function OTNWorldwideCountries(lang){
	document.writeln("<div id=\'panelDivOTN\' style=\"position:absolute;left:0px;visibility:hidden; z-index:3700; WIDTH: 180px; BORDER-RIGHT: #9A9A9A 1px solid; PADDING-RIGHT: 12px;BORDER-TOP: #9A9A9A 1px solid; PADDING-LEFT: 12px; PADDING-BOTTOM: 12px; BORDER-LEFT: #9A9A9A 1px solid; PADDING-TOP: 12px;BORDER-BOTTOM: #9A9A9A 1px solid; BACKGROUND-COLOR: #ffffff\" onmouseover=\"panelMOv(\'panelDivOTN\',\'img1\'); \" onmouseout=\"panelMOu(\'panelDivOTN\');\">");
	document.writeln("<table width=100%>");
	document.writeln("<tr align=left><td  class=\'sngPst\' style=\"border-bottom:#cccccc 1px solid\"><b>SELECT A COUNTRY/REGION<\/b><\/td><\/tr>");
	document.writeln("<tr height='4'><td><!--spacer--></td></tr>");
	document.writeln("<tr valign=top align=left><td  class=\'sngPst\'>");
	document.writeln('<div><a href="http://www.oracle.com/technology/global/lad-pt/index.html" onClick="navTrack(\'otn\',\'' + lang + '\',\'header\',\'Brazil\');" class="sngPst">Brazil</a></div>');
	document.writeln('<div><a href="/technetwork/cn/index.html" onClick="navTrack(\'otn\',\'' + lang + '\',\'header\',\'China\');" class="sngPst">China</a></div>');
	document.writeln('<div><a href="http://www.oracle.com/technetwork/jp/index.html" onClick="navTrack(\'otn\',\'' + lang + '\',\'header\',\'Japan\');" class="sngPst">Japan</a></div>');
	document.writeln('<div><a href="http://www.oracle.com/technology/global/lad-es/index.html" onClick="navTrack(\'otn\',\'' + lang + '\',\'header\',\'Latin America\');" class="sngPst">Latin America</a></div>');
	document.writeln('<div><a href="http://www.oracle.com/technology/global/ru/index.html" onClick="navTrack(\'otn\',\'' + lang + '\',\'header\',\'Russia\');" class="sngPst">Russia</a></div>');
	document.writeln('<div><a href="http://www.oracle.com/technetwork/index.html" onClick="navTrack(\'otn\',\'' + lang + '\',\'header\',\'United States\');" class="sngPst">United States</a></div>');
	document.writeln("</td></tr>");
	document.writeln("<tr><td></td></tr>");
	document.writeln("</table>");
	document.writeln("</div>");
}


// CLEANUP COMMENT XXXXXXX -- REVIEW -- Start of functions used by new Ocom search
function trim(value)
{
  s = new String(value);
  if (value != null) {
    var beginIndex = -1;
    var endIndex   = s.length;

    for (var i = 0; i < s.length; i++)
    {
      if (s.charAt(i) != " ") {
        beginIndex = i;
        break;
      }
    }
    if (beginIndex == -1) return "";

    for (var j = s.length -1; j > beginIndex; j--) {
      if (s.charAt(j) != " ") {
        endIndex = j;
        break;
      }
    }
    if (endIndex != s.length) return s.substring(beginIndex, endIndex);
    else return s.charAt(beginIndex);
  }
  return value;
}

// Serach validation Global value
// CLEANUP COMMENT XXXXXXX -- Search Related
var isUserInput = false ;
function isNotNull(value){
	if (value == null || trim(value).length == 0  || value == "search site" || value =="Search OPN" || isUserInput == false ){
		alert('You did not enter a search term.  Please try again.');
		document.searchForm.q.value='';
		isUserInput = true;
		document.searchForm.q.focus();
		return false;
	}else{
		return true;
	}
}

// CLEANUP COMMENT XXXXXXX -- Search related -  REVIEW
function checkSearch( value )
{
  if ( document.searchForm && document.searchForm.datasetId && typeof( langDataSetId ) != 'undefined' && langDataSetId )
  {
    document.searchForm.datasetId.value = langDataSetId;
  }

  if ( value == null || trim(value).length == 0 )
  {
    alert('Please enter the keyword(s) to search for');
    return false;
  }
  else 
  {
    if ( document.searchForm ) document.searchForm.submit();
    return true;
  }
}

// CLEANUP COMMENT XXXXXXX -- Search Related -- Review
function checkGlobalSearch( value )
{
  return checkSearch( value );
}


// CLEANUP COMMENT XXXXXXX -- VET WITH VENKS /SUEANNE KIM - MEDIA RELATED
//Requestor: DMT Team, Implementation: Tech Team, Purpose: The new demo opener.
function showMediaPlayer(id,ref,vWidth,vHeight)
{
 if(!vHeight) vHeight = 675;
    if(!vWidth) vWidth = 1000;
    var vTop = Math.ceil((screen.availHeight - vHeight)/2) - 25;
    var vLeft = Math.ceil((screen.availWidth - vWidth)/2);
    if(screen.width <= 1024) {
      if(screen.width < 924) {
        alert("1024x768 screen resolution or higher is recommended.");
      }
      vTop = 0;
      vLeft = 0;
// To fix browser related width adjustments  
if(navigator.appName == 'Microsoft Internet Explorer'){
   vWidth = screen.availWidth - 10;}
   else{
   vWidth = screen.availWidth - 8;}
      vHeight = screen.availHeight - 36;
    }
  window.open("http://dynpages-mktas.oracle.com/pls/ebn/swf_viewer.load?p_shows_id="+id+"&p_referred="+ref+"&p_width="+vWidth+"&p_height="+vHeight,"demoWin","width="+vWidth+",height="+vHeight+",resizable=0,top="+vTop+",left="+vLeft);
}
// CLEANUP COMMENT XXXXXXX -- VET WITH VENKS /DMT - MEDIA RELATED
function showLiveViewer(showid,cmsid,src,act) {
    if(src && act) {
      getUCMCookies();
      if (!isUCMRegistered()) {
        if ( confirm("This functionality is available to registered users only.\n\nWould you like to register or sign in?\n\n") ) {
          top.location = auth_host + "/jsp/reg/register.jsp?src="+src+"&Act="+act+"&nextURL=" + escape(top.location.href);
        }
        return;
      }
    }

    var vWidth = 800;
    var vHeight = 360;
    var vTop = Math.ceil((screen.availHeight - vHeight)/2) - 25;
    var vLeft = Math.ceil((screen.availWidth - vWidth)/2);

    if(screen.width <= 800) {
      if(screen.width < 700) {
        alert("800x600 screen resolution or higher is recommended.");
      }
      vTop = 0;
      vLeft = 0;
      vWidth = screen.availWidth - 10;
      vHeight = screen.availHeight-46;
    }
    url = "http://www.oracle.com/pls/ebn/live_viewer.main?p_shows_id=" + showid + "&p_referred=" + cmsid;
    window.open(url,"liveWin","top="+vTop+",left="+vLeft+",width="+vWidth+",height="+vHeight+",status=yes,resizable=no");
}

// CLEANUP COMMENT XXXXXXX -- SAVE FLASH DEMO PLAYER - MEDIA RELATED
function showDemo(id,ref,vWidth,vHeight)
{
    if(!vHeight) vHeight = 600;
    if(!vWidth) vWidth = 800;
    var vTop = Math.ceil((screen.availHeight - vHeight)/2) - 25;
    var vLeft = Math.ceil((screen.availWidth - vWidth)/2);
    if(screen.width <= 800) {
      if(screen.width < 700) {
        alert("800x600 screen resolution or higher is recommended.");
      }
      vTop = 0;
      vLeft = 0;
      vWidth = screen.availWidth - 10;
      vHeight = screen.availHeight-46;
    }
  window.open("http://www.oracle.com/pls/ebn/swf_viewer.load?p_shows_id="+id+"&p_referred="+ref+"&p_width="+vWidth+"&p_height="+vHeight,"demoWin","width="+vWidth+",height="+vHeight+",resizable=0,top="+vTop+",left="+vLeft);
}
// CLEANUP COMMENT XXXXXXX -- VET VENKS DELETE??? - MEDIA RELATED
function Shwing(login, page, name, popup_width, popup_height) {
	var test = login.indexOf('%');
	if (test < 0) login = escape(login);
	page = page + '&args=' + login;
	window.open(page, name, 'toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=no,copyhistory=no,scrollbars=yes,width=' + popup_width + ',height=' + popup_height);
}

// CLEANUP COMMENT XXXXXXX --  SAVE FOR NOW - MEDIA RELATED
///////////////////////////Start of Brightcove LightBox Function//////////////////////////////////////////////////
function bcvideolightbox(video_Id,player_Id,description_Id)
{
var vp_videoId=video_Id;	
var vp_playerId=player_Id;
var vp_descriptionId=description_Id;
if (vp_playerId == "chromeless-noshare")
{
			vp_playerId = "602202985001";
} 
else if (vp_playerId == "chromeless-share")
{
			vp_playerId = "72925238001";
} 	
var vpObject='<object id="myExperienceLightBox" class="BrightcoveExperience">'+
	         '<param value="#FFFFFF" name="bgcolor" />'+
	         '<param value="640" name="width" />'+
			 '<param value="360" name="height" />'+
			 '<param value="'+vp_playerId+'" name="playerID" />'+
			 '<param value="1460825906" name="publisherID" />'+
        	 '<param name="autoStart" value="true" />'+
			 '<param value="true" name="isVid" />'+
			 '<param value="true" name="isUI" />'+
			 '<param name="dynamicStreaming" value="true" />'+
        	 '<param name="@videoPlayer" value="'+vp_videoId+'" />'+	
			 '<param name="wmode" value="transparent" />'+
             '</object>';
var vpFooter=document.getElementById(vp_descriptionId).innerHTML;
var vpcode='<div style="padding-left:15px; padding-right:15px;background-color:#E5E5E5;"><div class="bcvideoclose"><a style="cursor:pointer;" onclick="showclose();"><img src="http://www.oracleimg.com/us/assets/lightbox-close-button.gif" width="12" height="12" border="0" alt="Close"></a></div>'+
	        vpObject+'<div class="videotext" style="padding-top:10px;padding-bottom:20px;">'+vpFooter+'</div></div>';

document.getElementById('bcVideoPlayer').innerHTML =  vpcode;

brightcove.createExperiences();
isIE6 = /msie|MSIE 6/.test(navigator.userAgent); 

document.getElementById('bcVideoPlayer').style.display="block";
document.getElementById('lightbox_brightcove').style.display="block";
}

function showclose()
{
   document.getElementById('bcVideoPlayer').innerHTML =  '';
	isIE6 = /msie|MSIE 6/.test(navigator.userAgent); 					
		document.getElementById('lightbox_brightcove').style.display="none";
		document.getElementById('bcVideoPlayer').style.display="none";
                if(isIE6)
		document.searchForm.group.style.visibility = "visible"; 
}
//////////////////////////End of Brightcove LightBox Function//////////////////////////////////////////////////

/////////////////////////Start of Brightcove Embedded Function//////////////////////////////////////////////////////
	function getUrlVars()
	{
		var vars = [], hash;
		var url = window.location.href;
		if (url.indexOf("#") != -1) url = url.split("#")[0];
		var hashes = url.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	}
	
	function embedBrightcoveQS()
	{
		var q = getUrlVars();
		bcvideoembed(q["bctid"], q["chrome"], q["size"], q["autoplay"]);
	}
	
	function bcvideoembed(bctid, chrome, size, autoplay)
	{
		if (bctid == undefined)
		{
			document.write('This request does not contain a "bctid" value.');
			return;
		}
		
		// Video size
		var width;
		var height;
		var rnd = Math.random();
		
		switch (size) {
			case "medium":
				width = 480;
				height = 270;
				break;
			case "large":
				width = 960;
				height = 540;
				break;
			default:
				// Default is medium
				case "medium":
				width = 480;
				height = 270;
		}
		
		// Chrome, defaults to chromeless-share
		var playerID;
		if (chrome == "chromeless-noshare")
		{
			playerID = "602202985001";
		}
		else if (chrome == "chromeless-share")
		{
			playerID = "72925238001";
		}
		
		
		// Autoplay, default is false
		if (autoplay == undefined) autoplay = false;
				
		document.write('<object id="myExperience' + rnd + '" class="BrightcoveExperience">\
			<param name="@videoPlayer" value="' + bctid + '">\
			<param name="bgcolor" value="#000000" />\
			<param name="width" value="' + width + '" />\
			<param name="height" value="' + height + '" />\
			<param name="playerID" value="' + playerID + '" />\
			<param name="publisherID" value="1460825906"/>\
			<param name="isVid" value="true" />\
			<param name="isUI" value="true" />\
			<param name="dynamicStreaming" value="true">\
			<param name="autoStart" value="' + autoplay + '">\
			<param name="wmode" value="transparent" />\
			</object>');
	}
// End of Brightcove Embedded


// CLEANUP COMMENT XXXXXXX -- delete confirm with Rene S
function goURL(p_url, p_object_id, p_subobject_id) {
 location=trackURL(p_url,p_object_id,p_subobject_id);
}

function logURL(p_object_id, p_subobject_id ) {
 var destUrl="";
 var srcUrl="";
 var trackbleUrl="";
 if (fromUrl.indexOf("http")==-1) destUrl=baseUrl+fromUrl;
 if (refUrl.indexOf("http")==-1) srcUrl=baseUrl+refUrl;
 trackbleUrl=gUrl+"?d="+destUrl+"&s="+srcUrl+"&di="+p_object_id+"&a=image" ;
 document.write("<img src=\""+trackbleUrl+"\">");
}

//Added for net Call by Ashok Chava
// CLEANUP COMMENT XXXXXXX -- SAVE "HAVE ORACLE CALL YOU" - WIDGET
function getArg(arg_name, str) {
	var value = "", tmpstr = "";
	if (!str) str = location.search.substring(1);
	if (!str) return value;
	else {
		var tmparray = str.split("&");
		for (i=0; i<tmparray.length; i++) {
			tmpstr = tmparray[i].toUpperCase();
			if (tmpstr.indexOf(arg_name.toUpperCase() + "=") != -1) {
				var tmp2array = tmparray[i].split("=");
				value = tmp2array[1];
			}
		}
	}
	return value;
}
// CLEANUP COMMENT XXXXXXX -- SAVE - WIDGET
function startNewCallback(ichannel,tmp) {

  var netcall_url = "http://"+location.hostname+"/ocom/groups/public/documents/webcontent/";
  
  var w = 565;
  var h = 515;

  var codes = new Array();
  codes[0] = [ "Oracle.com", "0i2wzK12842", "321884", "0", "0", "1", "newlauncher.html", "newthankyou.html", "nhthankyou.html", "newerror.html", "5:00 - 17:00 PST"  ];
  codes[1] = [ "Oracle Education", "2WcKOh12631", "322065", "0", "0", "1", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", "5:00am - 5:00pm PST"  ];
  codes[2] = [ "Oracle Brazil", "QoEOxb13081", "344401", "0", "0", "55", "launcher-br.html", "thankyou-br.html","nhthankyou.html", "error-br.html", "9h00 - 18h00"  ];
  codes[3] = [ "Oracle Consulting", "invalid", "379366", "0", "0", "1", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", " "  ];
  codes[4] = [ "Oracle Netherlands", "8StUfs2022", "365383", "0", "0", "31", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", " "  ];
  codes[5] = [ "Oracle UK", "EIKzPM13381", "365383", "0", "0", "44", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", "9:00am - 6:00pm"  ];
  codes[6] = [ "Oracle France", "Osyzdu3268", "365383", "0", "0", "33", "launcher-fr.html", "thankyou-fr.html","nhthankyou.html", "error-fr.html", "9h  18h CET"  ];
  codes[7] = [ "Oracle Portugal", "okWd3e3309", "365383", "0", "0", "351", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", "9:00am - 6:00pm"  ];
  codes[8] = [ "Oracle Spain", "1M4DJm3310", "365383", "0", "0", "34", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", " "  ];

	for (var i = 0; i < codes.length; i++) {
		if (ichannel == codes[i][1]) {
		
      // build url
     
      var url = netcall_url  + codes[i][6]+
        "?memberid=" + codes[i][2] +
        "&country=" + codes[i][5] +
        "&responseurl=" + netcall_url  + codes[i][7] +
        "&errorurl=" + netcall_url  + codes[i][9] +
        "&timezone=" + escape(codes[i][10]) +
        "&ichannel=" + escape(codes[i][1])+
        "&nhresponseurl1=" + netcall_url  + codes[i][8] ;
      
      // adjust window size if necessary
      width = ((codes[i][3] == 0) ? w : codes[i][3]);
      height = ((codes[i][4] == 0) ? h : codes[i][4]);

      win = window.open(url,'netcall',"width=" + width + ",height="+ height +",scrollbars=yes,resizable=yes,menubar=no,location=no");
      win.opener = self;
			break;
		}
	}
}

// CLEANUP COMMENT XXXXXXX -- SAVE USED IN LEGACY SITES - WIDGET
    function printerView()
      {
      if (location.href.search(/\?/) != -1)
        window.open(location.href + '&printOnly=1','','toolbar=yes,location=no,directories=no,menubar=no,scrollbars=yes,width=640,height=480,resize=yes');
      else
        window.open(location.href + '?printOnly=1','','toolbar=yes,location=no,directories=no,menubar=no,scrollbars=yes,width=640,height=480,resize=yes');
      }
    function printerViewContent()
      {
      if (location.href.search(/\?/) != -1)
        window.open(location.href + '&printOnly=0','','toolbar=yes,location=no,directories=no,menubar=no,scrollbars=yes,width=640,height=480,resize=yes');
      else
        window.open(location.href + '?printOnly=0','','toolbar=yes,location=no,directories=no,menubar=no,scrollbars=yes,width=640,height=480,resize=yes');
      }
      function mailpage()
      {
      mail_str = "mailto:?subject=Thought this might interest you: " + document.title;
      mail_str += "&body=I thought you might be interested in this: " + document.title;
      mail_str += ". %0A%0AYou can view it at, " + location.href; 
      location.href = mail_str;
      }
function MM_openBrWindow(theURL,winName,features) { //v2.0
      window.open(theURL,winName,features);
      }

function DisplayElements(in_elem_array)
{
	sidelistsize = in_elem_array.length;
}

// CLEANUP COMMENT XXXXXXX -- DELETE
// Right Navigation Code for OCOM pages
/* Close all sideboxes */
function closeAll()
{
    for (i = 1; i <= sidelistsize; i++)
	{
		if( document.getElementById('sidebody'+i) )
		{
			document.getElementById('sidebody'+i).style.display = 'none';
		}
	}
}
/* Show all sideboxes */
function expandAll()
{
    for (i = 1; i <= sidelistsize; i++)
	{	
		if( document.getElementById('sidebody'+i) )
		{
			document.getElementById('sidebody'+i).style.display = 'block';
		}
    }
}
/* Toggle sidebox visibility */
function toggleSidebox(id) {
    if (document.getElementById(id).style.display == 'none') {
	document.getElementById(id).style.display = 'block';
    } else {
	document.getElementById(id).style.display = 'none';
    }
}

/* Toggle sidebox image */
function toggleSideboxRHS(elmnt) {	
	elmnt.parentNode.className = (elmnt.parentNode.className=='toggleExpand')? '':'toggleExpand';
}
// CLEANUP COMMENT XXXXXXX -- DELETE
var sidelistsize = 0;
function getElementsByPrefix(inPrefix,inRoot)
{
	var elem_array = new Array;
	if(typeof inRoot.firstChild!= 'undefined')
	{
		var elem = inRoot.firstChild;
			while (elem!= null)
			{
				if(typeof elem.firstChild!= 'undefined')
				{
					elem_array = elem_array.concat(getElementsByPrefix(inPrefix,elem));
				}
				if(typeof elem.id!= 'undefined')
				{
					var reg = new RegExp ( '^'+inPrefix+'.*' );
						if(elem.id.match(reg))
						{
							elem_array.push(elem);
						}
				}
				elem = elem.nextSibling;
			}
	}
	return elem_array;
}

// CLEANUP COMMENT XXXXXXX -- DELETE
/* Display first right nav. box*/
function DisplayRightNav()
{
		for(i=1;i<=sidelistsize;i++)
		{
			
			if( document.getElementById('sidebody'+i) )
			{
				if (i <=1)
					document.getElementById('sidebody'+i).style.display = 'block';   
				else
					document.getElementById('sidebody'+i).style.display = 'none'; 
					
			}
			else
			{
				sidelistsize = sidelistsize+1;	
			}
		 }
}

//-- Hipbone to Netcall mapping
//-- contact john burbridge to make changes!!
// CLEANUP COMMENT XXXXXXX -- DUPLICATE????  VET WITH ASHOK
function startCallback(ichannel,tmp) {

  var netcall_url = "http://www.oracle.com/us/assets/";
  var w = 440;
  var h = 260;

  var codes = new Array();
  codes[0] = [ "Oracle.com", "0i2wzK12842", "321884", "0", "0", "1", "netcallocomlauncher.html", "netcallocomthankyou.html", "netcallocomerror.html", "5:00am - 5:00pm PST"  ];
  codes[1] = [ "Oracle Education", "2WcKOh12631", "322065", "0", "0", "1", "launcher.html", "thankyou.html", "error.html", "5:00am - 5:00pm PST"  ];
  codes[2] = [ "Oracle Brazil", "QoEOxb13081", "344401", "0", "0", "55", "launcher-br.html", "thankyou-br.html", "error-br.html", "9h00 - 18h00"  ];
  codes[3] = [ "Oracle Consulting", "invalid", "379366", "0", "0", "1", "launcher.html", "thankyou.html", "error.html", " "  ];
  codes[4] = [ "Oracle Netherlands", "8StUfs2022", "365383", "0", "0", "31", "launcher.html", "thankyou.html", "error.html", " "  ];
  codes[5] = [ "Oracle UK", "EIKzPM13381", "365383", "0", "0", "44", "launcher.html", "thankyou.html", "error.html", "9:00am - 6:00pm"  ];
  codes[6] = [ "Oracle France", "Osyzdu3268", "365383", "0", "0", "33", "launcher-fr.html", "thankyou-fr.html", "error-fr.html", "9h ? 18h CET"  ];
  codes[7] = [ "Oracle Portugal", "okWd3e3309", "365383", "0", "0", "351", "launcher.html", "thankyou.html", "error.html", "9:00am - 6:00pm"  ];
  codes[8] = [ "Oracle Spain", "1M4DJm3310", "365383", "0", "0", "34", "launcher.html", "thankyou.html", "error.html", " "  ];

	for (var i = 0; i < codes.length; i++) {
		if (ichannel == codes[i][1]) {

      // build url
      var url = netcall_url  + codes[i][6]+
        "?memberid=" + codes[i][2] +
        "&country=" + codes[i][5] +
        "&responseurl=" + netcall_url  + codes[i][7] +
        "&errorurl=" + netcall_url  + codes[i][8] +
        "&timezone=" + escape(codes[i][9]);

      // adjust window size if necessary
      width = ((codes[i][3] == 0) ? w : codes[i][3]);
      height = ((codes[i][4] == 0) ? h : codes[i][4]);

      win = window.open(url,'netcall',"width=" + width + ",height="+ height +",scrollbars=yes,resizable=yes,menubar=no,location=no");
      win.opener = self;
			break;
		}
	}
}

// CLEANUP COMMENT XXXXXXX -- DELETE???? VET WITH ASHOK
function startNewCallback(ichannel,tmp) {

  var netcall_url = "http://"+location.hostname+"/ocom/groups/public/@ocompublic/documents/webcontent/";
  
  var w = 565;
  var h = 515;

  var codes = new Array();
  codes[0] = [ "Oracle.com", "0i2wzK12842", "321884", "0", "0", "1", "netcallcrmodlauncher.html", "netcallcrmodthankyou.html", "netcallnhthankyou.html", "netcallcrmoderror.html", "5:00 - 17:00 PST"  ];
  codes[1] = [ "Oracle Education", "2WcKOh12631", "322065", "0", "0", "1", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", "5:00am - 5:00pm PST"  ];
  codes[2] = [ "Oracle Brazil", "QoEOxb13081", "344401", "0", "0", "55", "launcher-br.html", "thankyou-br.html","nhthankyou.html", "error-br.html", "9h00 - 18h00"  ];
  codes[3] = [ "Oracle Consulting", "invalid", "379366", "0", "0", "1", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", " "  ];
  codes[4] = [ "Oracle Netherlands", "8StUfs2022", "365383", "0", "0", "31", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", " "  ];
  codes[5] = [ "Oracle UK", "EIKzPM13381", "365383", "0", "0", "44", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", "9:00am - 6:00pm"  ];
  codes[6] = [ "Oracle France", "Osyzdu3268", "365383", "0", "0", "33", "launcher-fr.html", "thankyou-fr.html","nhthankyou.html", "error-fr.html", "9h ? 18h CET"  ];
  codes[7] = [ "Oracle Portugal", "okWd3e3309", "365383", "0", "0", "351", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", "9:00am - 6:00pm"  ];
  codes[8] = [ "Oracle Spain", "1M4DJm3310", "365383", "0", "0", "34", "launcher.html", "thankyou.html","nhthankyou.html", "error.html", " "  ];

	for (var i = 0; i < codes.length; i++) {
		if (ichannel == codes[i][1]) {
		
      // build url
     
      var url = netcall_url  + codes[i][6]+
        "?memberid=" + codes[i][2] +
        "&country=" + codes[i][5] +
        "&responseurl=" + netcall_url  + codes[i][7] +
        "&errorurl=" + netcall_url  + codes[i][9] +
        "&timezone=" + escape(codes[i][10]) +
        "&ichannel=" + escape(codes[i][1])+
        "&nhresponseurl1=" + netcall_url  + codes[i][8] ;
      
      // adjust window size if necessary
      width = ((codes[i][3] == 0) ? w : codes[i][3]);
      height = ((codes[i][4] == 0) ? h : codes[i][4]);

      win = window.open(url,'netcall',"width=" + width + ",height="+ height +",scrollbars=yes,resizable=yes,menubar=no,location=no");
      win.opener = self;
			break;
		}
	}
}



// CLEANUP COMMENT XXXXXXX -- SAVE - WIDGET

	/* Toggle functionality for Custopmer Sucess Template */

function OTN_toggle(elmnt,id){
	elmnt.parentNode.getElementsByTagName('div')[0].className = (elmnt.parentNode.getElementsByTagName('div')[0].className=='ocomtoggle_open')? 'ocomtoggle_close':'ocomtoggle_open';
		var state=document.getElementById(id).style.display;
		if (state=="none")
			{
				document.getElementById(id).style.display="block";
			}
		else
			{
					document.getElementById(id).style.display="none";
			}
		}
		
	/* End Toggle functionality for Custopmer Sucess Template */

/* Print View  code*/
function printSelection(node){
  var content=node.innerHTML
  var pView=window.open('','print_content','toolbar=yes,location=no,directories=no,menubar=no,scrollbars=yes,width=640,height=480,resize=yes');
  pView.document.open();
  pView.document.write('<html><body>'+content+'</body></html>');
  pView.document.close();
}
/* End Print View  code */



/* Print View  code for Customer search page*/

function printerViewMainContent()
      {
      if (location.href.search(/\?/) != -1)
        window.open(location.href + '&printOnly=2','','toolbar=yes,location=no,directories=no,menubar=no,scrollbars=yes,width=640,height=480,resize=yes');
      else
        window.open(location.href + '?printOnly=2','','toolbar=yes,location=no,directories=no,menubar=no,scrollbars=yes,width=640,height=480,resize=yes');
      }

/* End Print View  code*/

/*! old  rotating banner code */
var pageArray = new Array("page1","page2","page3");
var arrayLength = 3;
var currentIndex = 0;
var theImage = new Array();
theImage[0] = 'http://www.oracleimg.com/us/assets/featnav_1on_sm.gif';
theImage[1] = 'http://www.oracleimg.com/us/assets/featnav_2on_sm.gif';
theImage[2] = 'http://www.oracleimg.com/us/assets/featnav_3on_sm.gif';
currentIndex = Math.floor(Math.random()*3);
var x=0;
function displayImage(i){
	orimage();
	var blockName;
	var node ;
	for(j=0;j<3;j++){
		blockName = pageArray[j];
		node = document.getElementById(blockName);
		node.style.display="none";
	}
	blockName = pageArray[i];
	node = document.getElementById(blockName);
	document.getElementById("myImage" + (i+1)).src=theImage[i];
	node.style.display="block";
	currentIndex = i;
}

function orimage(){
	document.getElementById("myImage1").src="http://www.oracleimg.com/us/assets/featnav-1off-sm-174904.gif";
	document.getElementById("myImage2").src="http://www.oracleimg.com/us/assets/featnav_2off_sm.gif";
	document.getElementById("myImage3").src="http://www.oracleimg.com/us/assets/featnav-3off-sm.gif";
}





/*! GLOBAL.ADD_SITE_CAT */
function addSiteCat(f){
	f = f.split(',');
	var host_type = (window.location.protocol.toLowerCase().indexOf("https")!=-1) ? 'https' : 'http'
	var ora_path = (location.host.indexOf('-stage') != -1 || location.host.indexOf('-content') != -1 || location.host.indexOf('localhost') != -1 || location.host.indexOf('webst') != -1 || location.host.indexOf('-dev') != -1) ? '/us/assets/metrics/' : host_type+'://www.oracleimg.com/us/assets/metrics/';
	for(i=0; i<f.length; i++) {
		document.write("<script type='text/javascript' src='" + ora_path + f[i] +".js'><\/script>");
	}
}



