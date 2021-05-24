// 슷자형 Enum
// (초기화를 하지 않는다면)자동으로 값이 숫자형으로 지정되고, 1씩 증가하는 것을 볼 수 있음.
// enum Shoes {
//   Nike,
//   Adidas,
//   Sth,
// }

// var myShoes = Shoes.Nike;
// console.log(myShoes) // 0


// 문자형 Enum
enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

var myShoes = Shoes.Nike;
console.log(myShoes) // '나이키'


// 예제
enum Answer {
  Yes = 'Y',
  No = 'N'
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다.')
  }
  if (answer === Answer.No) {
    console.log('오답입니다.')
  }
}
// Answer에서 지정한 값만 들어갈 수 있도록 제한시킴
// 드롭다운 등의 목록이 필요한 형태에서 사용할 수 있을듯.
askQuestion(Answer.Yes)