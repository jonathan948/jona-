
const wrapper = document.querySelector('.wrapper'),
form = wrapper.querySelectorAll('.form'),
submitInput = form[0].querySelector('input[type="submit"]');

function getDataForm(e) {
    e.preventDefault();

    let formData = new FormData(form[0]);
    alert(formData.get('nameFied') + ' Your massage is sent as ' + formData.get('emailFied') + ' - ' + formData.get('massageField'));

} 
 
document.addEventListener('DOMContentLoaded', function() {
    submitInput.addEventListener('click', getDataForm, false);
}, false);



// Mobile nav

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }



