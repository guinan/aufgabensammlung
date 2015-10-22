
var px = function (a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var eq = a[i].indexOf('=');
        if (eq == -1) continue;
        var k = a[i].substring(0, eq);
        var v = a[i].substring(eq + 1);
        if (k == "g") b[k] = decodeURI(v.replace(/\+/g, " "));
        else b[k] = decodeURIComponent(v.replace(/\+/g, " "));
    }
    return b;
};

var scriptSource = (function () {
    var scripts = document.getElementsByTagName('script'),
        script = scripts[scripts.length - 1];

    if (script.getAttribute.length !== undefined) {
        return script.src
    }

    return script.getAttribute('src', -1)
}());
var p = px(scriptSource.substr(scriptSource.indexOf('?') + 1).split('&'));

var wtOrd = Math.random() * 100000000000000000;

document.write('<div name="{ck:{521:\'RTB-Banner\'}}">');
document.write('<a href="http://rta.webtrekk.com/advert/click?i=' + p["i"] + '&o=' + wtOrd + '&u=' + p["g"] + encodeURIComponent(encodeURIComponent(p["l"])) + '" target="_blank">');
document.write('<img src="' + p["b"] + '?o=' + wtOrd + '" width=' + p["w"] + ' height=' + p["h"] + ' border=0>');
document.write('</a>');
document.write('<img src="http://rta.webtrekk.com/advert/impression/static?i=' + p["i"] + '&ord=' + wtOrd + '" width=1 height=1>');
document.write('<img src="http://rta.webtrekk.com/doubleclick/win/static?i=' + p["i"] + '&p=' + p["p"] + '&ord=' + wtOrd + '" width=1 height=1>');
document.write('</div>');

