// JavaScript Document
var text;
function Function_1() {
	var check_1 = document.getElementById("module-1").value;
    if (check_1 === "m1") {
        location.href = "./quiz/module_1_pre.html";
		text = "جارى التوجيه...";
    } else {
        text = "كود غير صحيح!";
    }
    document.getElementById("feedback_1").innerHTML = text;
}

function Function_2() {
	var check_2 = document.getElementById("module-2").value;
    if (check_2 === "mar2") {
        location.href = "./quiz/module_2_pre.html";
		text = "جارى التوجيه...";
    } else {
        text = "كود غير صحيح!";
    }
    document.getElementById("feedback_2").innerHTML = text;
}

function Function_3() {
	var check_3 = document.getElementById("module-3").value;
    if (check_3 === "m3ab") {
        location.href = "./quiz/module_3_pre.html";
		text = "جارى التوجيه...";
    } else {
        text = "كود غير صحيح!";
    }
    document.getElementById("feedback_3").innerHTML = text;
}

function Function_4() {
	var check_4 = document.getElementById("module-4").value;
    if (check_4 === "mskills") {
        location.href = "./quiz/module_4_pre.html";
		text = "جارى التوجيه...";
    } else {
        text = "كود غير صحيح!";
    }
    document.getElementById("feedback_4").innerHTML = text;
}

function Function_5() {
	var check_5 = document.getElementById("module-5").value;
    if (check_5 === "pro5") {
        location.href = "./quiz/module_5_1.html";
		text = "جارى التوجيه...";
    } else {
        text = "كود غير صحيح!";
    }
    document.getElementById("feedback_5").innerHTML = text;
}