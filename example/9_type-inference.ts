var a = 'a';

function logA(a = 'a') {
  var b = 10;
  return b;
}

interface Dropdown<T> {
  value: T
  title: string;
}
var items: Dropdown<number> = {
  value: 10,
  title: 'a'
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}
var detailItems: DetailedDropdown<number> = {
  value: 'hi',
  title: 'a',
  description: 'b',
  tag: 'c'
}

// Best Common Type
// 마우스를 올려보면 가장 잘 호환되는 타입을 추론한다.
// 결과 - var arr: (string | number | boolean)[]
var arr = [1,2,true, true, 'a']