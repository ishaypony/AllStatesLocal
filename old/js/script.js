
// CANONICAL , DESCRIPTION ,  TITLE VARIABLES AND REPLACING ! 

var title_element = $("#title_element");

$(window).on('load',function(){

    var description_object = {
        "ac_repair":"Need repair? stay cool and seat back we here for you",
        "ac_installation":"The best installation at the best price,Schedule a Meeting with Us our Technicians Are Waiting for you.",
        "hvac_contractor":"Quality & reliable HVAC Services For all Clients",
        "contact":"At Allstate heating & cooling our main goal is to ensure that our customers expectations are full field. If you have any questions please contact us and we will be more than happy to help you. Thank you for visiting our website and for taking the time to contact Allstate heating & cooling.",
        "about":"we at Allstate heating & cooling taking care For all types of air conditioning services withe licensed and best solution for the client.",
    }

    var url_object = {

        "fort_miami" : "http://localhost/AC/HTML/fort_miami.php",
        "fort_lauderdale" : "http://localhost/AC/HTML/fort_lauderdale.php",
        "ac_repair" : "http://localhost/AC/HTML/ac_repair.php",
        "ac_installation" : "http://localhost/AC/HTML/ac_intallation.php",
        "hvac_contractor" : "http://localhost/AC/HTML/hvac_contractor.php",
        "contact" : "http://localhost/AC/HTML/contact.php",
        "about" : "http://localhost/AC/HTML/about.php",

    }

    var pageURL = $(location).attr("href");

    var fort_miami_title = "Fort miami - AC services at Miami.";
    var fort_lauderdale = "Fort lauderdale - AC services at Fort Loudardale";
    var ac_repair = "AC Repair - Allstate Heating & Cooling Miami area";
    var ac_installation = "AC installations - Allstate Heating & Cooling Miami area";
    var hvac_contractor = "HVAC Contractor - Allstate Heating & Cooling Miami area.";
    var contact = "Contact - have a question about heating & cooling systems? please contact us";
    var about = "About -  Allstate heating & cooling Air Conditioning services in the Miami area";
    
    
    console.log(pageURL);

if(pageURL == url_object.fort_miami){
title_element.text(fort_miami_title);
}
if(pageURL == url_object.fort_lauderdale){
title_element.text(fort_lauderdale);
}
if(pageURL == url_object.ac_repair){
title_element.text(ac_repair);
}
if(pageURL == url_object.ac_installation){
title_element.text(ac_installation);
}
if(pageURL == url_object.hvac_contractor){
title_element.text(hvac_contractor);
}
if(pageURL == url_object.contact){
title_element.text(contact);
}

if(pageURL == url_object.about){
title_element.text(about);
}

});


