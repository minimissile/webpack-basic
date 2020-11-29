// // let a = require('./a')
// import a from './a'
//
import './css/index.css'
import './less/index.less'
//
// //  引入字体文件
// import 'bootstrap/dist/css/bootstrap.css'
//
// console.log(a);
// console.log('kk 真牛逼!!!!!!')
//
// class Dog {
//   name = '大黄'
//   static color = 'red'
// }
//
// let d = new Dog()
// console.dir(d)

function* fn() {
  yield 1
  yield 2
  return 3
}

let newFn = fn()
console.log(newFn.next()) // 1
console.log(newFn.next()) // 2
console.log(newFn.next()) // 3
console.log(newFn.next()) // undefined




