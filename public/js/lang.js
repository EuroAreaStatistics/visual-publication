var _ = function (string) {
    var str = string.toLocaleString();
    if (str === string) {
       console.log('could not find translation', string);
    }
    return string.toLocaleString();
};
 
function localizeHTMLTag(tagId, useLabel) {
    tag = document.getElementById(tagId);
    if (tag === null) {
       console.log('could not find tag', tagId);
      return;
    }
    if (tag.src) {
        tag.title = _(tag.title);
    } else {
        if (!useLabel) {
        tag.innerHTML = _(tag.innerHTML.trim());
    } else {
        tag.innerHTML = _(useLabel);
    }
    }
}
 
function getParameterValue(parameter)
{
    parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + parameter + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if(results == null)
        return "";
    else
        return results[1];
}
