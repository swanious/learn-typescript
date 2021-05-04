// api url
var url = 'https://jsonplaceholder.typicode.com/users';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;

      // 만약 address를 adres처럼 잘못기입한다면 undefined를 반환함
      // javascript는 브라우저에 띄우기 이전에는 이런 오류를 제대로 알기 힘듬
      address.innerText = user[0].address;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
