console.log("hello");

function getURL(URL) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', URL, true);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.responseText);
            } else {
                reject(new Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(new Error(req.statusText));
        };
        req.send();
    });
}
// 运行示例
var URL = "http://httpbin.org/get";
getURL(URL).then(function onFulfilled(value){
    console.log(value);
}).catch(function onRejected(error){
    console.error(error);
});

// Try edit msg
var msg = 'Hello world'
var icon = ' <i class="fa fa-smile-o"></i>'

function ajax1() {
  return new Promise((resolve)=>{
  
  setTimeout(()=>resolve("result1"), 1000);
  
  });
}

function ajax2() {
  return new Promise((resolve)=>{
  
  setTimeout(()=>resolve("result2"), 2000);
  
  });
}

let p = Promise.all([ajax1(), ajax2()]).then(x=>console.log(x));

async function test() {
  let res1 = await ajax1();
  let res2 = await ajax2();
  console.log(res1, res2);
}

test();

console.log(msg)

$('#msg').html(msg + icon)