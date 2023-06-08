let newForm = document.getElementById('newForm');

document.getElementById('guardar').addEventListener('click', function () {
  console.log("entro");
  sendData();
});

newForm.addEventListener('submit', function (evento) {
  evento.preventDefault();
  sendData();
});

function sendData() {
  let titulo = document.getElementById('titulo').value;
  let descripcion = document.getElementById('descripcion').value;
  let date = document.getElementById('date').value;

  let formData = {
    titulo: titulo,
    descripcion: descripcion,
    date: date
  };

  // Envío de datos al servidor utilizando AJAX (XHR)
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/evento');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log('Evento guardado:', xhr.responseText);
      window.location.href = '/';
    } else {
      console.log('Error al guardar el evento:', xhr.responseText);
    }
  };
  xhr.send(JSON.stringify(formData));
}
