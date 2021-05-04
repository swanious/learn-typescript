// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

function fetchUser() {
  return axios.get(url);
}

// Jsdoc
// typeof를 통해 타입 선언 /property는 해당 타입의 자식을 의미한다.

/**
 * @typeof {object} Address
 * @property {string} street
 * @property {string} city
 */

/**
 * @typeof {object} User
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

// <User> 는 제네릭으로 'Promise에 User는 내용이 담길 것'을 선언하는 것이다.
/**
 * @returns {Promise<User>}
 */

function startApp() {
  fetchUser()
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
