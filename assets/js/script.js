/*Créer un formulaire demandant le nom, le prénom, la date de naissance, le lieu de naissance, l'emploi et la société.
Créer un bouton "Générer" permettant de créer une courte phrase de présentation.

Exemple : Si les données saisies sont : "Jérôme OTT, 5/06/1990, Margny-lès-Compiègne, Formateur, Novei", la phrase de présentation sera :
"Jérôme OTT, né le 5/06/1990 à Margny-lès-Compiègne, actuellement Formateur à Novei
*/
$(function(){
  $('#submit').click(function(){
//LES VARIABLES
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var dateOfBirth = $('#dateOfBirth').val();
    var placeOfBirth = $('#placeOfBirth').val();
    var work = $('#work').val();
    var nameSociete = $('#nameSociete').val();
//LES REGEX
  var regexName = /^([A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+)([- ]{1}[A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+){0,1}$/;
  var regexDateOfBirth = /^[0-2]{1}[0-9]{1}[/]{1}[0-1]{1}[0-9]{1}[/]{1}[0-2]{1}[0-9]{3}$/;

  if(firstname.match(regexName) && lastname.match(regexName) && dateOfBirth.match(regexDateOfBirth) /*&& placeOfBirth.match(regex???) && work.match(regex???) && nameSociete.match(regex???)*/){
    alert('Bonjour, je me présente, je m\'appelle ' + firstname + ' ' + lastname + '.' + ' Je suis né(e) le ' + dateOfBirth + ' à ' + placeOfBirth + '. Je suis actuellement ' + work + ' à ' + nameSociete + '.');
  }else{
    alert('Merci de renseigner les champs corrèctement')
  }
});
});
