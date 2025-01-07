

function GetAllBranches() {
    document.getElementById("branches_cont").innerHTML = "<div style='width:700px; text-align:center; margin-top:40px;'><img src='../Resources/images/ajax-loader.gif' /> برجاء الانتظار جارى تحمبل بيانات الفروع ...</div>"; ;
    PageMethods.GetAllBranches(OnSuccess_GetAllBranches);
}

function OnSuccess_GetAllBranches(response) {
    if (response != null) {
        var branches = '';
        for (var i = 0; i < response.length; i++) {
            branches += "<div id='branch_row" + response[i]["Branch_ID"] + "' class='branch_row'>" +
            "<div class='name'>" + response[i]["Branch_Name"] + "</div>" +
            "<div class='address'>" + response[i]["Branch_Address"] + "</div>" +
            "<div class='edit' data-toggle='modal' href='#Modal_EditBranch' onclick=UpdateBranch('" + response[i]["Branch_ID"] + "','" + response[i]["Branch_Name"].replace(/ /g, "&nbsp;") + "','" + response[i]["Branch_Address"].replace(/ /g, "&nbsp;") + "','" + response[i]["Open_Status"] + "'); ><img src='../Resources/images/edit18.png' />تعديل</div>" +
            "<div class='delete' data-toggle='modal' href='#Modal_DeleteBranch' onclick=DeleteBranch('" + response[i]["Branch_ID"] + "'); ><img src='../Resources/images/delete18.png' />حذف</div>" +
            "<div class='branch_load' id='branch_load" + response[i]["Branch_ID"] + "'></div>" +
            "</div>";
        }
        document.getElementById("branches_cont").innerHTML = branches;
    }
}

function InitAddBranch() {
    document.getElementById("rb_closed").checked = false;
    document.getElementById("rb_open").checked = true;
    document.getElementById("txt_name").value = '';
    document.getElementById("txt_address").value = '';
}

function AddBranch() {
    document.getElementById("adding_load").style.opacity = '0.8';
    document.getElementById("adding_load").style.display = 'block';
    document.getElementById("adding_load").innerHTML = "<img src='../Resources/images/ajax-loader.gif' /> برجاء الانتظار جارى اضافة الفرع ...";

    var name = document.getElementById("txt_name").value;
    var address = document.getElementById("txt_address").value;
    var status;
    if (document.getElementById("rb_open").checked)
        status = "1";
    else
        status = "2";
    if (name != '')
        PageMethods.AddBranch(name, address, status, OnSuccess_AddBranch);

}

function OnSuccess_AddBranch(response) {
    if (response["Branch_ID"] == 0) {
        document.getElementById("adding_load").innerHTML = "<img src='../Resources/images/error24.png' />عفوا لم يتم الحفظ برجاء الاتصال بالدعم الفنى";
        setTimeout("magicShow('adding_load');", 4000);
    }
    else {
        document.getElementById("branches_cont").innerHTML += "<div id='branch_row" + response["Branch_ID"] + "' class='branch_row'>" +
            "<div class='name' >" + response["Branch_Name"] + "</div>" +
            "<div class='address' >" + response["Branch_Address"] + "</div>" +
            "<div class='edit' data-toggle='modal' href='#Modal_EditBranch' onclick=UpdateBranch('" + response["Branch_ID"] + "','" + response["Branch_Name"].replace(/ /g, "&nbsp;") + "','" + response["Branch_Address"].replace(/ /g, "&nbsp;") + "','" + response["Open_Status"] + "'); ><img src='../Resources/images/edit18.png' />تعديل</div>" +
            "<div class='delete' data-toggle='modal' href='#Modal_DeleteBranch' onclick=DeleteBranch('" + response["Branch_ID"] + "'); ><img src='../Resources/images/delete18.png' />حذف</div>" +
            "<div class='branch_load' id='branch_load" + response["Branch_ID"] + "'></div>" +
            "</div>";

        document.getElementById("adding_load").style.display = 'none';
    }
}

var selected_barnch;

function UpdateBranch(id, name, address, status) {
    selected_barnch = id;
    if (status == "2") {
        document.getElementById("rb_open2").checked = false;
        document.getElementById("rb_closed2").checked = true;
    }
    else
    {
        document.getElementById("rb_closed2").checked = false;
        document.getElementById("rb_open2").checked = true;
    }
    document.getElementById("txt_name2").value = name;
    document.getElementById("txt_address2").value = address;
}

function ConfirmUpdateBranch() {
    document.getElementById("branch_load" + selected_barnch).style.opacity = '0.8';
    document.getElementById("branch_load" + selected_barnch).style.display = 'block';
    document.getElementById("branch_load" + selected_barnch).innerHTML = "<img src='../Resources/images/ajax-loader.gif' /> برجاء الانتظار جارى تعديل بيانات الفرع ...";

    var name = document.getElementById("txt_name2").value;
    var address = document.getElementById("txt_address2").value;
    var status;
    if (document.getElementById("rb_open2").checked)
        status = 1;
    else
        status = 2;

    if (name != '')
        PageMethods.UpdateBranch(selected_barnch, name, address, status, OnSuccess_UpdateBranch);
}

function OnSuccess_UpdateBranch(response) {
    if (response[0] == 2) {
        document.getElementById("branch_load" + response[1]["Branch_ID"]).innerHTML = "<img src='../Resources/images/error24.png' />عفوا لم يتم الحفظ برجاء الاتصال بالدعم الفنى";
        setTimeout("magicShow('branch_load" + response[1]["Branch_ID"] + "');", 4000);
    }
    else {
        document.getElementById("branch_row" + response[1]["Branch_ID"]).innerHTML = "<div class='name' >" + response[1]["Branch_Name"] + "</div>" +
            "<div class='address' >" + response[1]["Branch_Address"] + "</div>" +
            "<div class='edit' data-toggle='modal' href='#Modal_EditBranch' onclick=UpdateBranch('" + response[1]["Branch_ID"] + "','" + response[1]["Branch_Name"].replace(/ /g, "&nbsp;") + "','" + response[1]["Branch_Address"].replace(/ /g, "&nbsp;") + "','" + response[1]["Open_Status"] + "'); ><img src='../Resources/images/edit18.png' />تعديل</div>" +
            "<div class='delete' data-toggle='modal' href='#Modal_DeleteBranch' onclick=DeleteBranch('" + response[1]["Branch_ID"] + "'); ><img src='../Resources/images/delete18.png' />حذف</div>" +
            "<div class='branch_load' id='branch_load" + response[1]["Branch_ID"] + "'></div>";
    }
}

function DeleteBranch(breanch_id) {
    selected_barnch = breanch_id;
}

function ConfirmDeleteBranch()
{
    document.getElementById("branch_load" + selected_barnch).style.opacity = '0.8';
    document.getElementById("branch_load" + selected_barnch).style.display = 'block';
    document.getElementById("branch_load" + selected_barnch).innerHTML = "<img src='../Resources/images/ajax-loader.gif' /> برجاء الانتظار جارى حذف الفرع ...";

    PageMethods.DeleteBranch(selected_barnch, OnSuccess_DeleteBranch);
}

function OnSuccess_DeleteBranch(response) {
    if (response[0] == 2) {
        document.getElementById("branch_load" + response[1]).innerHTML = "<img src='../Resources/images/error24.png' />عفوا لا يمكن حذف الفرع لوجود بعض العمليات التى تمت عليه";
        setTimeout("magicShow('branch_load" + response[1] + "');", 4000);
    }
    else if (response[0] == 1) {
        var element = document.getElementById("branch_row" + response[1]);
        element.parentNode.removeChild(element);
    }
}


///////////////////////////////////////// magic hide ////////////////////////////////////

function magicShow(elementid1) {
    op = 8;
    t = setInterval("fadein('" + elementid1 + "')", 20);
}
var op;
var t;
function fadein(elementid1) {
    if (op < 0) {
        clearInterval(t);
        document.getElementById(elementid1).style.display = "none";
    }
    else {
        op = (op - 0.2);
        document.getElementById(elementid1).style.opacity = (op * 0.1);
    }
}