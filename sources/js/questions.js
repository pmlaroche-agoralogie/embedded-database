


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



function questionnaire(nomquestionnaire) {
    var debutquestionnaire = quelleheureestil();
    document.cookie="nomquestionnaire="+nomquestionnaire;
    document.cookie="tsdebut="+debutquestionnaire;  
   window.location.href="/questionnaire.html";
}


function reglages() {
   window.location.href="/reglages.html";
}

function validerquestions() {
   window.location.href="/index.html";
}

