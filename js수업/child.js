// 부모창에 입력한 이름을 가져와서 자식창의 input 태그 열기
// 새창을 열어준 부모님(메엔창)은 window.opner 어디

let parentName = window.opener.document.getElementById("name");

// 자식의 input 태그 가져오기
let childName = document.getElementById("childName");
// input 태그의 value에 부모의 이름 input 태그 value 값 넣기
childName.value = parentName.value;

// 이메일으 클릭하면 부모창의 input 태그에 넣기
const list = document.querySelectorAll(".emailText");

// 한군데에서만 사용하는 경우에는 일회용인 화살표 함수 사용
list.forEach( text => { text.addEventListener('click', () => {
    // 부모창의 이메일 input 태그 가져오기
    let parentEmail = window.opener.document.getElementById("email");
    parentEmail.value = text.innerText;
    window.close(); // 자식창 닫기
})});

// 여러군데에서 사용하는 경우에는 function 함수 사용
// for(var text of list){
//     a(text);
// }
// function a(text){
//     text.addEventListener('click', function(){
//     });
// }