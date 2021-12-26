var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}
// Tarkista alert trigger
if (alertTrigger) {
    // Luo taphtuman käsittelijä
  alertTrigger.addEventListener('click', function () {
      // Tarkista onko etunimi syötetty
      if (document.getElementById('firstname').value.length > 0){
         // Kutsu alert funktio
    alert('Form sent')
      } else {
          alert('Give first name')
      }
  })
}