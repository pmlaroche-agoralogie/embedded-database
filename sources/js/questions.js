


function quelleheureestil()
{
    mon_ts = (new Date()).getTime();
    return mon_ts;
}


function getCookie(name)
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
    var c = ca[i].trim();
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}


function printValue(sliderID, textbox) {
    var x = document.getElementById(textbox);
    var y = document.getElementById(sliderID);
    x.value = y.value;
}



function goquestion() {
   window.location.href="/questionnaire.html";
}