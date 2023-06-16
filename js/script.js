const formLogin = document.getElementById('formLogin');
const email = document.getElementById('email');
const password = document.getElementById('password');

formLogin.addEventListener('submit', function (ev) {
    ev.preventDefault();
    let xhr = new XMLHttpRequest();
    let json = JSON.stringify({
        email: email.value,
        password: password.value
    });
    xhr.open('post', `https://reqres.in/api/login`);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.response.error) {
            alert(xhr.response.error)
        } else {
            window.location.href = 'list.html';
        }
    };
    xhr.onerror = function () {
        alert(`Network Error`);
    };
    xhr.send(json);
})
