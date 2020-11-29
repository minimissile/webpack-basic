console.log('我是a模块!!')

setTimeout(()=>{
  console.log('定时器里面的打印');
})

// module.exports = {
//     name: 'aaa'
// }

export default {
    name: 'aaa'
}
