!function(){"use strict";String.locale=window.defaultLanguage,String.toLocaleString(window.availableLanguages);var t=getParameterValue("lang");if(""!==t&&""!==t)for(var a in window.availableLanguages)a===t&&(String.locale=t);$("[data-trans-id]").each((function(){var t=$(this).attr("data-trans-id"),a=$(this).attr("data-trans-attr");a?$(this).attr(a,_(t)):$(this).html(_(t))})),document.documentElement.lang=String.locale,document.title=_("pages.Bloc1.title"),$('meta[name="description"]').attr("content",_("description")),$('meta[name="author"]').attr("content",_("author")),$('meta[name="keywords"]').attr("content",_("keywords"))}();
