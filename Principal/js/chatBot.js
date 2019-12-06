var question = '';

var output = document.getElementById('output');
output.innerHTML = question;

function takeInput() {
    var input = document.getElementById('input').value;
    console.log(input);
    if (input.indexOf("Bonjour") !== -1)
        output.innerHTML = 'En quoi puis-je vous aider ?';
    else if (input.indexOf("aide") !== -1 && input.indexOf("moi") !== -1) {
        output.innerHTML = '<a href="https://campus.univ-grenoble-alpes.fr/fr/menu-principal/droits-et-soutien/">Site iCampus-Guide de la Vie de Campus</a><br>'
        output.innerHTML += '<a href="http://www.caf.fr//">CAF</a><br>'
        output.innerHTML += '<a href="https://www.etudiant.gouv.fr/">Crous</a><br>'
        output.innerHTML += '<a href="https://www.service-public.fr/particuliers/vosdroits/F32456">Service public</a><br>'
    } else if (input.indexOf("enquête") !== -1)
        output.innerHTML = '<a href=https://drive.google.com/file/d/1hKYo3mlKC0mpQ6sN5LixbnZv1GzrlJcl/view?usp=sharing">Enquête ComUE-UGA</a>'
    else if (input === "gif")
        output.innerHTML = '<img src="./img/ubisoft.gif" class="gif-ubisoft">';
    else
        output.innerHTML = 'Je n\'ai pas compris votre demande, merci de bien vouloir taper : \"aide moi\" afin d\'accéder à mes informations';


    document.getElementById('input').value = "";
}

$(document).keypress(function(e) {
    if (e.which == 13) {
        takeInput();
    }
});