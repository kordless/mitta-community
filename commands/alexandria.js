// google app
var line = "{{line}}";
var url = "alexandria.org";
var view = "{{view}}";

if ("{{text}}" == "") {
	url = "https://alexandria.org";
} else {
	url = "https://alexandria.org/?q={{text}}";
}

// go and report
if (view.includes("|direct")) {
	window.location = url;
} else {
	window.open(url);
	controller.report(Sidekick_HTML('Opening <a style="text-decoration: underline; color: #bb99bb;" id="link-{{target_id}}" href="'+url+'">'+url+'</a> <a id="crawl-{{target_id}}" href>💾</a>'));
}

var timer = setTimeout(function(){
	// set clicking
	$('#link-{{target_id}}').click(function(){
	  window.open(url);
	});
	$('#crawl-{{target_id}}').click(function(){
	  controller.report(Sidekick("!crawl "+url));
	  BotAias("", "!crawl "+url);
	});
},123);

Scroll();

// return training info
var site = "alexandria";
{% if text %}
[[site+" {{text}}.", "Search "+site+" for {{text}}.", "Find {{text}} on "+site+".", "Open "+site+" {{text}}"], [site, "search for", "search", "find", "{{text}}", "g"]];
{% else %}
[[site, "Open "+site+".", "Find "+site+"."], [site, "open", "search", "find", "g"]];
{% endif %}
