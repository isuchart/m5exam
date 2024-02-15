const quizdata = []
let tempData = {}

let ii = 0 // เริ่มต้นที่ 0 แทนที่จะเริ่มที่ 1
let iiEnd = ex.length
// let iiEnd = 42
do {
   console.log(ii);
   for(let j = 0; j <= 3; j++) {
      let tempData;
      if(j == 0) {
         tempData = {
            question: ex[ii],
            a: a[ii],
            b: b[ii],
            c: c[ii],
            d: d[ii],
            correct: "a",
         };
      } else if(j == 1) {
         tempData = {
            question: ex[ii],
            a: b[ii],
            b: a[ii],
            c: c[ii],
            d: d[ii],
            correct: "b",
         };
      } else if(j == 2) {
         tempData = {
            question: ex[ii],
            a: c[ii],
            b: b[ii],
            c: a[ii],
            d: d[ii],
            correct: "c",
         };
      } else {
         tempData = {
            question: ex[ii],
            a: d[ii],
            b: b[ii],
            c: c[ii],
            d: a[ii],
            correct: "d",
         };
      }
      quizdata.push(tempData);
   }
   ii++;
} while (ii < iiEnd); // เปลี่ยนเงื่อนไขจาก ii>=2 เป็น ii<ex.length
console.log(quizdata)
console.log(ex.length)
// } while (ii < ex.length); // เปลี่ยนเงื่อนไขจาก ii>=2 เป็น ii<ex.length


// for(let i=1; i<=2; i++){
//    for(let j=1; j<=4; j++){
//       if(j==1){
//          tempData = {
//             question: ex[i],
//             a: a[i],
//             b: b[i],
//             c: c[i],
//             d: d[i],
//             correct: "a",
//          }
//       }else if(j==2){
//          tempData = {
//             question: ex[i],
//             a: b[i],
//             b: a[i],
//             c: c[i],
//             d: d[i],
//             correct: "b",
//          }
//       }else if(j==3){
//          tempData = {
//             question: ex[i],
//             a: c[i],
//             b: b[i],
//             c: a[i],
//             d: d[i],
//             correct: "c",
//          }
//       }else{
//          tempData = {
//             question: ex[i],
//             a: d[i],
//             b: b[i],
//             c: c[i],
//             d: a[i],
//             correct: "d",
//          }
//       }
//       quizdata.push(tempData)
//    }
// }

// let ii=1
// do{
//    console.log(ii)
//    for(let j=1; j<=4; j++){
//       if(j==1){
//          tempData = {
//             question: ex[ii],
//             a: a[ii],
//             b: b[ii],
//             c: c[ii],
//             d: d[ii],
//             correct: "a",
//          }
//       }else if(j==2){
//          tempData = {
//             question: ex[ii],
//             a: b[ii],
//             b: a[ii],
//             c: c[ii],
//             d: d[ii],
//             correct: "b",
//          }
//       }else if(j==3){
//          tempData = {
//             question: ex[ii],
//             a: c[ii],
//             b: b[ii],
//             c: a[ii],
//             d: d[ii],
//             correct: "c",
//          }
//       }else{
//          tempData = {
//             question: ex[ii],
//             a: d[ii],
//             b: b[ii],
//             c: c[ii],
//             d: a[ii],
//             correct: "d",
//          }
//       }
//       quizdata.push(tempData)
//    }
//    ii++
// } while (ii>=2)

