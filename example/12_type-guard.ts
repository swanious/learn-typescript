interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' }
}

// name만 자동완성에 추가될 뿐 에러가 발생했다. 
// 이는 유니온의 특성으로, 유니온은 두 타입의 공통 속성만 타입으로 가질 수 있기 때문이다.
var tony = introduce();
console.log(tony.skill)

// 아래와 같이 타입을 좁혀나가는 과정이 타입스크립트를 쓰는 이유이다.
// 하지만 이렇게하면 너무 가독성이 안좋다... 그럼 어떻게 바꿀 수 있을까 ?
if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill)
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age)
}

// 바로 타입가드를 화룡하면 된다. 화룡점정...!
// 아래와 같이 is 를 활용하면 인자로 넘겼던 것이 어떤 타입인지 알 수 있다. (어렵네...)
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

// 이후 조건문을 통해 자동완성이 뜨는 것을 보면,
if (isDeveloper(tony)) {
  tony.skill // name, skill이 자동완성
} else {
  tony.age // name, age가 자동완성
}