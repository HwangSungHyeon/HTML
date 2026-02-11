let search = document.getElementById("search");

search.addEventListener('click', function(){
    // 새로운 브라우저 창 열기
    // window.open("주소", 대상, 옵션);

    // 새창 옵션 : wighth, height
    //      위치 : top, left
    //      창크기 조절 가능 : resizable=yes ,no
    //      스크롤바 : scrollbars=yes, no
    //      툴바 : toolbar=yes, no
    //      주조창 : location=yes, no

    // 새창 띄우기전에 이름 입력했는지 확인
    if(document.querySelector("#name").value == ""){
        alert("이름을 입력하세요");
        return;
    }
    window.open("child.html", "_blank", "width=500,height=700,top=100,left=400" );

});