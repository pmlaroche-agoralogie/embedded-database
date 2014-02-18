
var db = jembe.db.openDatabase({
				dbName:'bd_questions'
			    });


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



function chercheid() {
			db.execute({
				sql:'select * from reglage where parametre = \'uniqueid\' ',
				onSuccess: getListId
			});
		
		}
		
		function getListId(p_content) {
			//p_content est un object sous <a href="http://www.jembe.fr/definition-android.html" class="glossaire">android</a> mais une chaine de caractère sur <a href="http://www.jembe.fr/definition-apple-ios.html" class="glossaire">iOS</a>
			var db_content = p_content
			if (typeof db_content!="object")
			    eval('db_content = '+db_content);
			printListId(db_content);
		    }
 
		function printListId(p_db_content) {
			listvaleur = '';
			for (var f=0;f<p_db_content.length;f++) {
			   listvaleur += p_db_content[f].parametre+' '+p_db_content[f].valeur;
		    
			}
			$('#retour_ajax_load').html(listvaleur);
		}
                
                