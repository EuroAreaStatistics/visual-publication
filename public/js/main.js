!function(){"use strict";String.locale=window.defaultLanguage,String.toLocaleString(window.availableLanguages);var t=getParameterValue("lang");if(""!==t&&""!==t)for(var a in window.availableLanguages)a===t&&(String.locale=t);$("[data-trans-id]").each(function(){var t=$(this).attr("data-trans-id"),a=$(this).attr("data-trans-attr");a?$(this).attr(a,_(t)):$(this).html(_(t))}),$(".back-link img").attr("src","images/logo_".concat(String.locale,".svg")),$(".back-link a").attr("href",function(t,a){return a.replace(/([?&]lg=)[^&]*/,"$1".concat(String.locale))}),$("#title1").text(_("title").replace(/:.*/,":")),$("#title2").text(_("title").replace(/^[^:]*:?/,"")),document.documentElement.lang=String.locale,document.title=_("title"),$('meta[name="description"]').attr("content",_("description")),$('meta[name="author"]').attr("content",_("author")),$('meta[name="keywords"]').attr("content",_("keywords")),$(".menu.language").each(function(){$("a",this).first().replaceWith($('a[href="?lang='.concat(String.locale,'"]'),this))})}();
