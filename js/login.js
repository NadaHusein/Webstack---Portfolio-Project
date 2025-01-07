// JavaScript source code
var $usersObj = {}
$usersObj["admin1"] = "123";
$usersObj["admin2"] = "567";
$usersObj["admin3"] = "923";
$usersObj["admin4"] = "667";
function login() {
    var $username = $('#username').val();
    var $password = $('#password').val();

    var $flag = false;
    for (var $user in $usersObj) {
        if ($username == $user && $password == $usersObj[$user]) {
            $flag = true;
            break;
        }
    }
    if ($flag)
        window.location.href ="https://forms.gle/WKSLb34R5rfZeZom9";
}