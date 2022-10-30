$('#title').on('click', function(){
  document.getElementById( 'sound-file' ).play() ;
  });

  // 次のページに移動したいできていない
//   function clickBtn4(){
// }


// 十の位を決める
let tensmusic =""; //十の位 今の気分
$("#happy").on("click" , function(){
    tensmusic = "1";
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
let onesmusic=""; //一の位 今の時間(朝夜)

$("#asa").on("click" , function(){
   onesmusic = "1";
});


$("#yoru").on("click" , function(){
  onesmusic = "2";
});




//選ばれたら文字で今日の一句が出てきて、連動したおすすめ動画も表示される

// ここから朝＋
var asahappy = ['今日も頑張ろう','落ち着いていきましょう','いけてるね'];
var asahappyMov = [
    "https://www.youtube.com/embed/OL8o03u8l2Y", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/embed/kDHVcnykE0Q",
    "https://www.youtube.com/embed/q3ui4ZPPIPI"
];

var asasleepy = ['目を覚まして', '朝ご飯はパンケーキ','起きろー'];
var asasleepyMov = [
    "https://www.youtube.com/embed/Au-XRzpEjuA",
    "https://www.youtube.com/embed/Jx-tqntWPCM",
    "https://www.youtube.com/embed/nwJlMGMbmpw"
];

var asaangry = ['いいことあるよ', '大丈夫','楽しいことを考えて'];
var asaangryMov = [ 
    "https://www.youtube.com/embed/RNYUCIt4Fi0",
    "https://www.youtube.com/embed/sWuDwn5_8KE",
    "https://www.youtube.com/embed/GJSmXL9_oHY"
];

var asasad = ['今日は最高の日になる' , '人間だものみちお' , '大丈夫大丈夫'];
var asasadMov = [
    "https://tabelog.com/tokyo/A1313/A131303/13227050/",
    "https://tabelog.com/tokyo/A1313/A131307/13026915/",
    "https://tabelog.com/tokyo/A1313/A131303/13264944/"
];
var asaborling =['楽しいことは自分から', "今日は楽しくいこう" ,'ロックだぜ'];
var asaborlingMov = [
    "https://tabelog.com/tokyo/A1313/A131303/13121463/",
    "https://tabelog.com/tokyo/A1313/A131303/13091906/",
    "https://tabelog.com/tokyo/A1313/A131303/13185772/"
];

var asahungry = ['落ち着いて','怒ってもいいことないよ','最高にHappy'];
var asahungryMov = [
    "https://tabelog.com/tokyo/A1313/A131303/13040987/",
    "https://tabelog.com/tokyo/A1313/A131303/13166405/",
    "https://tabelog.com/tokyo/A1313/A131303/13172776/"
]



// ここから夜＋
var yoruhappy = ['今日も頑張ろう','落ち着いていきましょう','いけてるね'];
var yoruhappyMov = [
    "https://www.youtube.com/embed/OL8o03u8l2Y", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/embed/kDHVcnykE0Q",
    "https://www.youtube.com/embed/q3ui4ZPPIPI"
];

var yorusleepy = ['目を覚まして', '朝ご飯はパンケーキ','起きろー'];
var yorusleepyMov = [
    "https://www.youtube.com/embed/Au-XRzpEjuA",
    "https://www.youtube.com/embed/Jx-tqntWPCM",
    "https://www.youtube.com/embed/nwJlMGMbmpw"
];

var yoruangry = ['いいことあるよ', '大丈夫','楽しいことを考えて'];
var yoruangryMov = [ 
    "https://www.youtube.com/embed/RNYUCIt4Fi0",
    "https://www.youtube.com/embed/sWuDwn5_8KE",
    "https://www.youtube.com/embed/GJSmXL9_oHY"
];

var yorusad = ['今日は最高の日になる' , '人間だものみちお' , '大丈夫大丈夫'];
var yorusadMov = [
    "https://tabelog.com/tokyo/A1313/A131303/13227050/",
    "https://tabelog.com/tokyo/A1313/A131307/13026915/",
    "https://tabelog.com/tokyo/A1313/A131303/13264944/"
];
var yoruborling =['楽しいことは自分から', "今日は楽しくいこう" ,'ロックだぜ'];
var yoruborling = [
    "https://tabelog.com/tokyo/A1313/A131303/13121463/",
    "https://tabelog.com/tokyo/A1313/A131303/13091906/",
    "https://tabelog.com/tokyo/A1313/A131303/13185772/"
];

var yoruhungry = ['落ち着いて','怒ってもいいことないよ','最高にHappy'];
var yoruhungryMov = [
    "https://tabelog.com/tokyo/A1313/A131303/13040987/",
    "https://tabelog.com/tokyo/A1313/A131303/13166405/",
    "https://tabelog.com/tokyo/A1313/A131303/13172776/"
]





// if文
let number = tensmusic + onesmusic; //箱の番号を決める
    const random = Math.floor(Math.random()*asahappy.length);//配列の何番目を取り出すか決める
    let randomMov = document.getElementById("mov"); //movの属性を取り出す
    const showMov = $ ("#mov").show();

    // happy
    if(number == 11 ){ //happy asa が選ばれたら
        setTimeout(function(){
        $("#todayMessage").html(asahappy[random]);
        showMov;
        randomMov.src = (asahappyMov[random]); //movで取り出した属性を書き換える;
        number = 0;},1000);
    

    } else if(number == 12) { //happy yoruが選ばれたら
        $("#todayMessage").html(yoruhappy[random]);
        showMov;
        randomMov.src = (yoruhappyMov[random]);
        number = 0;



        // sleeppy
        if(number == 21 ){ //sleepy asa が選ばれたら
          setTimeout(function(){
          $("#todayMessage").html(asasleepy[random]);
          showMov;
          randomMov.src = (asasleepyMov[random]); //movで取り出した属性を書き換える;
          number = 0;},1000);
    
  
      } else if(number == 22) { //sleepy yoruが選ばれたら
          $("#todayMessage").html(yorusleepy[random]);
          showMov;
          randomMov.src = (yorusleepyMov[random]);
          number = 0;


          // angry

          if(number == 31 ){ //angry asaが選ばれたら
            setTimeout(function(){
            $("#todayMessage").html(asaangry[random]);
            showMov;
            randomMov.src = (asaangryMov[random]); //movで取り出した属性を書き換える;
            number = 0;},1000);
    
    
        } else if(number == 32) { //angry yoruが選ばれたら
            $("#todayMessage").html(yoruangry[random]);
            showMov;
            randomMov.src = (yoruangryMov[random]);
            number = 0;


            
          //  sad
            if(number == 41 ){ //sad asaが選ばれたら
              setTimeout(function(){
              $("#todayMessage").html(asasad[random]);
              showMov;
              randomMov.src = (asasadMov[random]); //movで取り出した属性を書き換える;
              number = 0;},1000);
          
      
          } else if(number == 42) { //sad yoruが選ばれたら
              $("#todayMessage").html(yorusad[random]);
              showMov;
              randomMov.src = (yorusadMov[random]);
              number = 0;



              // borlig
              if(number == 51 ){ //borling asaが選ばれたら
                setTimeout(function(){
                $("#todayMessage").html(asaborling[random]);
                showMov;
                randomMov.src = (asaborlingMov[random]); //movで取り出した属性を書き換える;
                number = 0;},1000);
  
        
            } else if(number == 52) { //borling yoruが選ばれたら
                $("#todayMessage").html(yoruborling[random]);
                showMov;
                randomMov.src = (yoruborlingMov[random]);
                number = 0;
      

                // angry

                if(number == 61 ){ //angry asaが選ばれたら
                  setTimeout(function(){
                  $("#todayMessage").html(asaangry[random]);
                  showMov;
                  randomMov.src = (asaangryMov[random]); //movで取り出した属性を書き換える;
                  number = 0;},1000);
              
          
              } else if(number == 62) { //angry yoruが選ばれたら
                  $("#todayMessage").html(yoruangry[random]);
                  showMov;
                  randomMov.src = (yoruangryMov[random]);
                  number = 0;
      







