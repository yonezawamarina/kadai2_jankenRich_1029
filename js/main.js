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
let onesmusic=""; //一の位 今の時間

$("#asa").on("click" , function(){
   onesmusic = "1";
});


$("#yoru").on("click" , function(){
  onesmusic = "2";
});





// ここから朝＋
var happyasa = ['今日も頑張ろう','落ち着いていきましょう','いけてるね'];
var happyasaMov = [
    "https://www.youtube.com/embed/ouEzZbj1BkQ", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/watch?v=6YWxiCPXOis",
    "https://youtu.be/YT0X1gZ3k5s"
];

var sleepyasa = ['目を覚まして', '朝ご飯はパンケーキ','起きろー'];
var sleepyasaMov = [
    "https://www.youtube.com/embed/ouEzZbj1BkQ", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/watch?v=6YWxiCPXOis",
    "https://youtu.be/YT0X1gZ3k5s"
];

var angryasa = ['いいことあるよ', '大丈夫','楽しいことを考えて'];
var angryasaMov = [ 
    "https://www.youtube.com/embed/ouEzZbj1BkQ", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/watch?v=6YWxiCPXOis",
    "https://youtu.be/YT0X1gZ3k5s"
];

var sadasa = ['今日は最高の日になる' , '人間だものみちお' , '大丈夫大丈夫'];
var sadasaMov = [
    "https://www.youtube.com/embed/ouEzZbj1BkQ", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/watch?v=6YWxiCPXOis",
    "https://youtu.be/YT0X1gZ3k5s"
];
var borlingasa =['楽しいことは自分から', "今日は楽しくいこう" ,'ロックだぜ'];
var borlingasaMov = [
    "https://www.youtube.com/embed/ouEzZbj1BkQ", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/watch?v=6YWxiCPXOis",
    "https://youtu.be/YT0X1gZ3k5s"
];

var hungryasa = ['落ち着いて','怒ってもいいことないよ','最高にHappy'];
var hungryasaMov = [
    "https://www.youtube.com/embed/ouEzZbj1BkQ", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/watch?v=6YWxiCPXOis",
    "https://youtu.be/YT0X1gZ3k5s"
]



// ここから夜＋
var happyyoru = ['今日も頑張ろう','落ち着いていきましょう','いけてるね'];
var happyyoruMov = [
    "https://www.youtube.com/embed/ouEzZbj1BkQ", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/watch?v=6YWxiCPXOis",
    "https://youtu.be/YT0X1gZ3k5s"
];

var sleepyyoru = ['目を覚まして', '朝ご飯はパンケーキ','起きろー'];
var sleepyyoruMov = [
    "https://www.youtube.com/embed/ouEzZbj1BkQ", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/watch?v=6YWxiCPXOis",
    "https://youtu.be/YT0X1gZ3k5s"
];

var angryyoru = ['いいことあるよ', '大丈夫','楽しいことを考えて'];
var angryyoruMov = [ 
    "https://www.youtube.com/embed/RNYUCIt4Fi0",
    "https://www.youtube.com/embed/sWuDwn5_8KE",
    "https://www.youtube.com/embed/GJSmXL9_oHY"
];

var sadyoru = ['今日は最高の日になる' , '人間だものみちお' , '大丈夫大丈夫'];
var sadyoruMov = [
    "https://www.youtube.com/embed/ouEzZbj1BkQ", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/watch?v=6YWxiCPXOis",
    "https://youtu.be/YT0X1gZ3k5s"
];
var borlingyoru =['楽しいことは自分から', "今日は楽しくいこう" ,'ロックだぜ'];
var borlingyoru = [
    "https://www.youtube.com/embed/ouEzZbj1BkQ", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/watch?v=6YWxiCPXOis",
    "https://youtu.be/YT0X1gZ3k5s"
];

var hungryyoru = ['落ち着いて','怒ってもいいことないよ','最高にHappy'];
var hungryyoruMov = [
    "https://www.youtube.com/embed/ouEzZbj1BkQ", //iframe埋め込み用のURL入れる
    "https://www.youtube.com/watch?v=6YWxiCPXOis",
    "https://youtu.be/YT0X1gZ3k5s"
]





                $("#recommendBtn").on("click" , function(){
                    // ハート現れて消える
                    // $(".loader").show( );
                    // setTimeout(function(){
                    //     $(".loader").fadeOut()
                    // },1500);
                
                    let number = tensmusic + onesmusic; //2桁の番号を決める
                    const random = Math.floor(Math.random()*happyasa.length);//配列の何番目を取り出すか決める
                    let randomMov = document.getElementById("mov"); //movの属性を取り出す
                    const showMov = $ ("#mov").show();
                
                    if(number == 11 ){ //happyasaが選ばれたら
                        setTimeout(function(){
                        $("#todayMessage").html(happyasa[random]);
                        showMov;
                        randomMov.src = (happyasaMov[random]); //movで取り出した属性を書き換える;
                        number = 0;},1000);
                    
                    } else if(number == 12) {  //happyyoruが選ばれたら
                        $("#todayMessage").html(happyyoru[random]);
                        showMov;
                        randomMov.src = (happyyoruMov[random]);
                        number = 0;
                
                    } else if(number == 21) { //sleepyasaが選ばれたら
                        $("#todayMessage").html(sleepyasa[random]);
                        showMov;
                        randomMov.src = (sleepyasaMov[random]);
                        number = 0;
                
                    } else if(number == 22) {//sleepyyoruが選ばれたら
                        $("#todayMessage").html(sleepyyoru[random]);
                        showMov;
                        randomMov.src = (sleepyyoruMov[random]);
                        number = 0;
                        
                
                    } else if(number == 31) {//angryasaが選ばれたら
                        $("#todayMessage").html(angryasa[random]);
                        showMov;
                        randomMov.src = (angryasaMov[random]);
                        number = 0;
                        
                    } else if (number == 32) {//angryoruが選ばれたら
                        $("#todayMessage").html(angryyoru[random]);
                        showMov;
                        randomMov.src = (angryyoruMov[random]);
                        number = 0;



                    } else if (number == 41) {//sadasaが選ばれたら
                        $("#todayMessage").html(sadasa[random]);
                        showMov;
                        randomMov.src = (sadasaMov[random]);
                        number = 0;


                    } else if (number == 42) {//sadyoruが選ばれたら
                        $("#todayMessage").html(sadyoru[random]);
                        showMov;
                        randomMov.src = (sadyoruMov[random]);
                        number = 0;


                    } else if (number == 51) {//borlingasaが選ばれたら
                        $("#todayMessage").html(borlingasa[random]);
                        showMov;
                        randomMov.src = (borlingasaMov[random]);
                        number = 0;


                    } else if (number == 52) {//borlingyoruが選ばれたら
                        $("#todayMessage").html(borlingyoru[random]);
                        showMov;
                        randomMov.src = (borlingyoruMov[random]);
                        number = 0;


                        
                    } else if (number == 61) {//hungryasaが選ばれたら
                        $("#todayMessage").html(hungryasa[random]);
                        showMov;
                        randomMov.src = (hungryasaMov[random]);
                        number = 0;


                    } else if (number == 62) {//hungryyoruが選ばれたら
                        $("#todayMessage").html(hungryyoru[random]);
                        showMov;
                        randomMov.src = (hungryyoruMov[random]);
                        number = 0;

    
                    } else if(number === 0) {
                        alert("選択しなおしてください");
                
                    } else {
                        alert("ボタンは2つ押してください");
                    }
                
                    $('.btn').removeClass('btn_none'); 
                
                });