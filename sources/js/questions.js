
$(document).ready(function () {
	teste_questionnaire('');
        alert(window.location.href);
});


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
    alert("cook:"+document.cookie);
    for(var i=0;i < ca.length;i++) {
    var c = ca[i].trim();
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

//permet d'afficher en temsp réel les nouvelles valeurs du slider dans un div
function printValue(sliderID, textbox) {
    var x = document.getElementById(textbox);
    var y = document.getElementById(sliderID);
    x.value = y.value;
}



function questionnaire(nomquestionnaire) {
    var debutquestionnaire = quelleheureestil();
    document.cookie="nomquestionnaire="+nomquestionnaire;
    document.cookie="tsdebut="+debutquestionnaire;  
   window.location.href="questionnaire.html";
}



function validerquestions() {
    
    valeurslider1 = document.getElementById("slider1").value;
    document.cookie="username="+valeurslider1.toString()  ;
    alert(valeurslider1.toString());
    db.execute({
				sql:'select * from reglage where parametre = \'uniqueid\' ',
				onSuccess: getListId
			});
    
   window.location.href="index.html";
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
			$('#detail_reglages').html(listvaleur);
		}
                
function date_heure()
{
        date = new Date;
        annee = date.getFullYear();
        moi = date.getMonth();
        mois = new Array('Janvier', 'F&eacute;vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao&ucirc;t', 'Septembre', 'Octobre', 'Novembre', 'D&eacute;cembre');
        j = date.getDate();
        jour = date.getDay();
        jours = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
        h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
        resultat = 'Nous sommes le '+jours[jour]+' '+j+' '+mois[moi]+' '+annee+' il est '+h+':'+m+':'+s;
        
        
        $('#champs_chrono').html(resultat);
        //document.getElementById(id).innerHTML = resultat;
        
        return true;
}

function teste_questionnaire()
{
    date_heure();
    mon_ts=quelleheureestil();
    requete_programme = 'select * from programme where tsprevu <'+mon_ts.toString();
   //alert(requete_programme);
    $('#debugdiv').html( requete_programme);
    db.execute({
				sql:requete_programme,
				onSuccess: getNextQuestionnaire
			});
    setTimeout('teste_questionnaire();','15000');
}

function resetAll() {
    
    $('#is_ready').html('');
    $('#nb_insert').html('');
    $('#retour_ajax_load').html('');
			
}

function LoadBase() {
        db.execute({
                sql:'select * from humeur',
                onSuccess: getList
        });

}

function getList(p_content) {
        //p_content est un object sous <a href="http://www.jembe.fr/definition-android.html" class="glossaire">android</a> mais une chaine de caractère sur <a href="http://www.jembe.fr/definition-apple-ios.html" class="glossaire">iOS</a>
        var db_content = p_content
        if (typeof db_content!="object")
            eval('db_content = '+db_content);
        printList(db_content);
    }

function printList(p_db_content) {
        listvaleur = '';
        for (var f=0;f<p_db_content.length;f++) {
           listvaleur += p_db_content[f].humeur+'-'+p_db_content[f].ts_debut.toString();
    
        }
        $('#retour_ajax_load').html(listvaleur);
}


function getNextQuestionnaire(p_content) {
        //p_content est un object sous <a href="http://www.jembe.fr/definition-android.html" class="glossaire">android</a> mais une chaine de caractère sur <a href="http://www.jembe.fr/definition-apple-ios.html" class="glossaire">iOS</a>
        var db_content = p_content
        if (typeof db_content!="object")
            eval('db_content = '+db_content);
        manageNextQuestionnaire(db_content);
    }

function manageNextQuestionnaire(p_db_content) {
        listvaleur = '';
        for (var f=0;f<p_db_content.length;f++) {
           listvaleur += p_db_content[f].typequestion+'-'+p_db_content[f].tsprevu.toString()+'-'+p_db_content[f].fait.toString();
    
        }
        $('#retour_ajax_load').html(listvaleur);
}


//navigation
function reglages() {
   window.location.href="reglages.html";
}
function finreglages() {
   window.location.href="index.html";
}

		
                