//api sheety เพิ่มข้อมูลลงใน sheet แยก tab ตามห้อง
function addDataToSheet(){
  let conf = {
    calendar : 'buddhist', // buddhist, iso8601
    dateStyle : 'long', // full, long, medium, short
}
let dd = new Date();
let myDate = dd.toLocaleString('th-TH',conf)

let conf2 = {
    calendar : 'buddhist', // buddhist, iso8601
    timeStyle : 'medium', // full, long, medium, short
}
let tt = new Date();
let milliSecTime = tt.getMilliseconds() // มิลลิวินาที
let myTime = tt.toLocaleString('th-TH',conf2)
let timeTest = myTime+":"+milliSecTime


// เพิ่มข้อมูลลงฐานข้อมูล sheet
var storedData = localStorage.getItem("user");
var stdData = JSON.parse(storedData);
console.log(stdData)


let tabRoom = stdData.room
let url;
switch (tabRoom) {
case "ม.5/6":
{
url = "https://api.sheety.co/2fb80a9f78e03a86a9c645b99d92db92/score662/six";
var body = {
  six: {
  "date": myDate,
  "time": timeTest,
  "lineId":  `${liff.getDecodedIDToken().sub}`,
  "lineName": `${liff.getDecodedIDToken().name}`,
  "room": `${stdData.room}`,
  "no":  `${stdData.no}`,
  "stdid":  `${stdData.stdid}`,
  "prename": `${stdData.prename}`,
  "fname":  `${stdData.fname}`,
  "sname": `${stdData.sname}`,
  "subject": `${subjectNow}`,
  "score": `${score}`,
  },
};
}
break;

case "ม.5/7":
{
url = "https://api.sheety.co/2fb80a9f78e03a86a9c645b99d92db92/score662/seven";
var body = {
  seven: {
  "date": myDate,
  "time": timeTest,
  "lineId":  `${liff.getDecodedIDToken().sub}`,
  "lineName": `${liff.getDecodedIDToken().name}`,
  "room": `${stdData.room}`,
  "no":  `${stdData.no}`,
  "stdid":  `${stdData.stdid}`,
  "prename": `${stdData.prename}`,
  "fname":  `${stdData.fname}`,
  "sname": `${stdData.sname}`,
  "subject": `${subjectNow}`,
  "score": `${score}`,
  },
};
}
break;

case "ม.5/8":
{
url = "https://api.sheety.co/2fb80a9f78e03a86a9c645b99d92db92/score662/eight";
var body = {
  eight: {
  "date": myDate,
  "time": timeTest,
  "lineId":  `${liff.getDecodedIDToken().sub}`,
  "lineName": `${liff.getDecodedIDToken().name}`,
  "room": `${stdData.room}`,
  "no":  `${stdData.no}`,
  "stdid":  `${stdData.stdid}`,
  "prename": `${stdData.prename}`,
  "fname":  `${stdData.fname}`,
  "sname": `${stdData.sname}`,
  "subject": `${subjectNow}`,
  "score": `${score}`,
  },
};
}
break;

case "ม.5/9":
{
url = "https://api.sheety.co/2fb80a9f78e03a86a9c645b99d92db92/score662/nine";
var body = {
  nine: {
  "date": myDate,
  "time": timeTest,
  "lineId":  `${liff.getDecodedIDToken().sub}`,
  "lineName": `${liff.getDecodedIDToken().name}`,
  "room": `${stdData.room}`,
  "no":  `${stdData.no}`,
  "stdid":  `${stdData.stdid}`,
  "prename": `${stdData.prename}`,
  "fname":  `${stdData.fname}`,
  "sname": `${stdData.sname}`,
  "subject": `${subjectNow}`,
  "score": `${score}`,
  },
};
}
break;

default:
url = "https://api.sheety.co/2fb80a9f78e03a86a9c645b99d92db92/score662/data";
var body = {
datum: {
  "date": myDate,
  "time": timeTest,
  "lineId":  `${liff.getDecodedIDToken().sub}`,
  "lineName": `${liff.getDecodedIDToken().name}`,
  "room": `${stdData.room}`,
  "no":  `${stdData.no}`,
  "stdid":  `${stdData.stdid}`,
  "prename": `${stdData.prename}`,
  "fname":  `${stdData.fname}`,
  "sname": `${stdData.sname}`,
  "subject": `${subjectNow}`,
  "score": `${score}`,
},
};
}
fetch(url, {
method: "POST",
headers: {
  "Content-Type": "application/json", // เพิ่ม header สำหรับระบุประเภทข้อมูลเป็น JSON
},
body: JSON.stringify(body),
})
.then((response) => response.json())
.then((json) => {
  // Do something with object
  // console.log(json.datum); // เปลี่ยนเป็น json.datum แทน body.datum
})
.catch((error) => {
  console.error("Error:", error);
});

}