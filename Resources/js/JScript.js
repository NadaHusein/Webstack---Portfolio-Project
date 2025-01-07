
var timer;
window.onload = function () {
    if ($('#sys_messages').is(':visible')) {
        timer = setInterval(showhidemessages, 500);
    }
};

var visablty_flag = 0;
function showhidemessages() {
    if (visablty_flag == 0) {
        document.getElementById("sys_messages").style.display = 'none';
        visablty_flag = 1;
    }
    else {
        document.getElementById("sys_messages").style.display = 'block';
        visablty_flag = 0;
    }

}

var genral_user_id;

function getnewnotifications(user_id) {
    $("#general_messages").data('popover').$tip.find(".popover-content").html("<img style='margin-right:160px; padding:15px 0 10px 0;' alt='' src='" + GetSiteRoot() + "Resources/images/ajax-loader.gif' />")
    genral_user_id = user_id;
    Samples.AspNet.WebService.GetUserNewNotifications(user_id, SucceededCallback_notifications);
}

function SucceededCallback_notifications(result, eventArgs) {
    var notifydata = '';
    if (result.length > 0) {
        for (var j = 0; j < result.length; j++) {
            notifydata += "<div class='mess' style='width:100%; direction:ltr; border-bottom:1px dotted #cccccc; float:left;'><table style='float:right; width:100%; text-align:right; '><tr> <td><div style='font-size:13px; color:#20BED4;'>" + result[j]["Name_Arabic"] + "<div style='font-size:10px; margin-top:0px;  color:gray;'>" + result[j]["Notify_Date"] + "</div></div></td><td style='width:60px;'><div style='float:right; margin-right:5px; padding:2px 2px 5px 2px;' class='img_cont'><img  src='" + GetSiteRoot() + "Upload/Emp_Photos/" + result[j]["Employee_ID"] + ".jpg'/></div></td></tr><tr> <td colspan='2'>" +
             "<div style='font-size:11px; padding-right:5px;'><table style='width:100%;'><tr><td style='font-size:11px;'>" + result[j]["Notify_Explain"] + "</td><td style='width:22px;'><img style='padding-left:5px;' alt='' src='" + GetSiteRoot() + "Resources/images/" + result[j]["Activity_Img"] + ".png' /></td></tr></table></div></td></tr></table></div>";
        }
    }
    else {
        notifydata += "<div class='alert alert-warring' style='width:250px; font-size:11px; margin-left:10px; float:left; border-color:#f5b110; margin-top:20px; text-align:center;'><div class='row' ><div class='span3' style='text-align:center; width:100%;'>عفوا, لا توجد رسائل جديدة<img style='padding-left:10px;' src='" + GetSiteRoot() + "Resources/images/warning_32.png' alt='error' /></div></div></div>";
    }
    $("#general_messages").data('popover').$tip.find(".popover-content").html(notifydata);
    if (result.length > 0) {
        Samples.AspNet.WebService.UpdateUserNewNotifications(genral_user_id, SucceededCallback_notify_delete);
    }
}

function SucceededCallback_notify_delete(result, eventArgs) {
    if (result == "1") {
        document.getElementById("generalNotify").style.display = 'none';
        document.getElementById("generalNotify2").innerHTML = 'لا توجد رسائل جديدة';
    }
}


function GetNewSysMessages(user_id) {
    $("#system_messages").data('popover').$tip.find(".popover-content").html("<img style='margin-right:160px; padding:15px 0 10px 0;' alt='' src='" + GetSiteRoot() + "Resources/images/ajax-loader.gif' />")
    genral_user_id = user_id;
    Samples.AspNet.WebService.GetUserNewSysMessages(user_id, SucceededCallback_sysmessages);
}

function SucceededCallback_sysmessages(result, eventArgs) {
    var sysmessagesdata = '';
    if (result.length > 0) {
        for (var j = 0; j < result.length; j++) {
            sysmessagesdata += "<div class='mess' style='width:100%; direction:ltr; border-bottom:1px dotted #cccccc; float:left;'><table style='float:right; width:100%; text-align:right; '><tr> <td><div style='font-size:13px; color:#20BED4;'>النظام<div style='font-size:10px; margin-top:0px;  color:gray;'>" + result[j]["Message_Date"] + "</div></div></td><td style='width:60px;'><div style='float:right; margin-right:5px;' class='img_cont'><img  src='" + GetSiteRoot() + "Resources/images/jokerlogo.png'/></div></td></tr><tr> <td colspan='2'>" +
             "<div style='font-size:11px; padding-right:5px;'><table style='width:100%;'><tr><td style='font-size:11px;' >" + result[j]["Message_Subject"] + "</td></tr></table></div></td></tr></table></div>";
        }
    }
    else {
        sysmessagesdata += "<div class='alert alert-warring' style='width:250px; font-size:11px; margin-left:10px; float:left; border-color:#f5b110; margin-top:20px; text-align:center;'><div class='row' ><div class='span3' style='text-align:center; width:100%;'>عفوا, لا توجد رسائل جديدة<img style='padding-left:10px;' src='" + GetSiteRoot() + "Resources/images/warning_32.png' alt='error' /></div></div></div>";
    }
    $("#system_messages").data('popover').$tip.find(".popover-content").html(sysmessagesdata);
    if (result.length > 0) {
        Samples.AspNet.WebService.UpdateUserNewSysMessages(genral_user_id, SucceededCallback_delete_sysmessage);
    }
}

function SucceededCallback_delete_sysmessage(result, eventArgs) {
    if (result == "1") {
        document.getElementById("sys_messages").style.display = 'none';
        document.getElementById("sys_messages2").innerHTML = 'لا توجد رسائل جديدة';
        clearInterval(timer);
    }
}


function GetSiteRoot() {
    var rootPath = window.location.protocol + "//" + window.location.host + "/";
    if (window.location.hostname == "localhost") {
        var path = window.location.pathname;
        if (path.indexOf("/") == 0) {
            path = path.substring(1);
        }
        path = path.split("/", 1);
        if (path != "") {
            rootPath = rootPath + path + "/";
        }
    }
    return rootPath;
}


function move_to_top() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}


////////////////////// gird view /////////////////////
var gridviewrow
var oldgridcolor;
function SetMouseOver(element) {
    gridviewrow = element;
    oldgridcolor = element.style.backgroundColor;
    element.style.backgroundColor = '#f4f4f4';
    // element.style.cursor = 'pointer';
}
function SetMouseOut(element) {
    element.style.backgroundColor = oldgridcolor;
    element.style.textDecoration = 'none';
}



/////////////////////////////////////////////// date_calender ///////////////////////////////////

function focus_date(date_id) {
    document.getElementById(date_id).style.borderColor = 'rgba(82, 168, 236, 0.8)';
    document.getElementById(date_id).style.boxShadow = 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6)';
}

function blur_date(date_id) {
    document.getElementById(date_id).style.borderColor = '#c2c2c2';
    document.getElementById(date_id).style.boxShadow = 'none';
}

function getweekday(calendernum) {

    var d = document.getElementById("txt_date" + calendernum).value;
    document.getElementById("hidden_date" + calendernum).value = d;

    var arrDt = d.split('/')
    var dt = new Date(arrDt[1] + "/" + arrDt[2] + "/" + arrDt[0]);
    var weekday = new Array(7);
    weekday[0] = "الاحد";
    weekday[1] = "الاثنين";
    weekday[2] = "الثلاثاء";
    weekday[3] = "الاربعاء";
    weekday[4] = "الخميس";
    weekday[5] = "الجمعة";
    weekday[6] = "السبت";

    var n = weekday[dt.getDay()];
    document.getElementById("txt_day" + calendernum).value = n;

}


///////////////////////////////////////   Dates valisators  ///////////////////////////////////////


function Validate_NotGreatThan_CurrentDate(sender, args) {
    var date = new Date()
    var currentdate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    var d1 = Date.parse(args.Value);
    var d2 = Date.parse(currentdate);

    if (d1 > d2) {
        args.IsValid = false;
    }
    else {
        args.IsValid = true;
    }

}



//////////////////////////////////// close modal //////////////////////////////////////

function hidemodal(button) {
    simulate(document.getElementById(button), "click");
}

function simulate(element, eventName) {
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers) {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent) {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents') {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
          options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
          options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        element.dispatchEvent(oEvent);
    }
    else {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
        destination[property] = source[property];
    return destination;
}

var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
}
var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
}


function move_to_top() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
}