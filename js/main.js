$('#title').on('click', function(){
  document.getElementById( 'sound-file' ).play() ;
  });

  // 次のページに移動したいできていない
//   function clickBtn4(){
// }



// 
let tensmusic =""; //十の位の箱 今の気分
$("#happy").on("click" , function(){
    tensPlace = "1";
});

$("#sleepy").on("click" , function(){
    tensmusic = "2";
});

$("#angry").on("click" , function(){
    tensmusic = "3";
});


$("#sad").on("click" , function(){
  tensmusic = "4";
});


$("#borling").on("click" , function(){
  tensmusic = "5";
});

$("#hungry").on("click" , function(){
  tensmusic = "6";
});








//一の位を決める
let onesmusic=""; //一の位の箱 今の時間(朝昼夜)

$("#asa").on("click" , function(){
   onesPlace = "1";
});

$("#hiru").on("click" , function(){
    onesPlace = "2";
});

$("#yoru").on("click" , function(){
  onesPlace = "3";
});





// if文


let number = tensPlace + onesPlace; //箱の番号を決める
    const random = Math.floor(Math.random()*ieWasyoku.length);//配列の何番目を取り出すか決める
    let randomMov = document.getElementById("mov"); //movの属性を取り出す
    const showMov = $ ("#mov").show();

    if(number == 11 ){ //和食で家が選ばれたら
        setTimeout(function(){
        $("#lunchMessage").html(ieWasyoku[random]);
        showMov;
        randomMov.src = (ieWasyokuMov[random]); //movで取り出した属性を書き換える;
        number = 0;},1000);
    
    } else if(number == 21) { //洋食で外が選ばれたら
        $("#lunchMessage").html(ieYousyoku[random]);
        showMov;
        randomMov.src = (ieYousyokuMov[random]);
        number = 0;
あ
    } else if(number == 31) { //中華で家が選ばれたら
        $("#lunchMessage").html(ieCyuka[random]);
        showMov;
        randomMov.src = (iecyukaMov[random]);
        number = 0;

    } else if(number == 12) {
        $("#lunchMessage").html(sotoWasyoku[random]);
        //3秒後にお店の食べログにとぶ
        $("#mov").css("display" , "none");
        $("#imgArea").html('<img src="img/pikabui.png" alt="">');
        setTimeout(function(){
        open(sotoWasyokuUrl[random], "_blank");},3000); 
        number = 0;

    } else if(number == 22) {
        $("#lunchMessage").html(sotoYousyoku[random]);
        $("#mov").css("display" , "none");
        $("#imgArea").html('<img src="img/pikabui.png" alt="">');
        setTimeout(function(){
        open(sotoYousyokuUrl[random], "_blank");},3000); 
        number = 0;

    } else if (number == 32) {
        $("#lunchMessage").html(sotoCyuka[random]);
        $("#mov").css("display" , "none");
        $("#imgArea").html('<img src="img/pikabui.png" alt="">');
        setTimeout(function(){
        open(sotoCyukaUrl[random], "_blank");},3000); 
        number = 0;
    
    } else if(number === 0) {
        alert("選択しなおしてください");

    } else {
        alert("ボタンは2つ押してください");
    }
