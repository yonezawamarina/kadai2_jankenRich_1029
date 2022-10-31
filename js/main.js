

//  シーン１
 // タイトルを押すと音楽が流れる
 $('#titlemusic').on('click', function(){
    document.getElementById( 'sound-file' ).play() ;
    });





// シーン２---------------------------------------

// 十の位を決める------------------------------------
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




//  追加ここから ----------------
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

if (getParam('tensmusic')) {
    tensmusic = getParam('tensmusic');
    console.log(tensmusic);
}
// 追加ここまで ----------------




//一の位を決める
let onesmusic=""; //一の位 今の時間

$("#asa").on("click" , function(){
   onesmusic = "1";
});


$("#yoru").on("click" , function(){
  onesmusic = "2";
});



// 格言とお勧め動画
// ここから朝＋
var happyasa = ['今日も頑張ろう','かきくけこ','あいうえお'];
var happyasaMov = [
    "https://www.youtube.com/embed/P__rOlVnId4", //オーケストララジオ体操第一
    "https://www.youtube.com/embed/3pP3bDi_GOg",//大阪弁ラジオ体操
    "https://www.youtube.com/embed/_YZZfaMGEOU"//ラジオ体操第一
]

var sleepyasa = ['さしすせそ', 'たちつてと','なにぬねの'];
var sleepyasaMov = [
    "https://www.youtube.com/embed/xR4qXUwsp9Q", //xjapan
    "https://www.youtube.com/embed/ZSZoJrNKCJ4",//ストレッチ
    "https://www.youtube.com/embed/7tWAjt8B-cM"//jazz
];

var angryasa = ['はひふへほ', 'まみむめも','やゆよ'];
var angryasaMov = [ 
    "https://www.youtube.com/embed/n5hGn0uA9G8", //綺麗な曲
    "https://www.youtube.com/embed/E1UM8d8XPmw",//可愛い犬
    "www.youtube.com/embed/QSlY6Aq8M4A"//設楽さん名言
];

var sadasa = ['おえういあ' , 'こけくきか' , 'そせすしさ'];
var sadasaMov = [
    "https://www.youtube.com/embed/e53CqX8TrlE", //名言
    "https://www.youtube.com/embed/vN_2KFrHz5s",//元気が出る歌
    "https://www.youtube.com/embed/IHKXePkEdQg"//東京03コント
];
var borlingasa =['とてちとた', "のねぬにな" ,'ほへふひは'];
var borlingasaMov = [
    "https://www.youtube.com/embed/KF4LGDy81Ic", //モチベが上がる名言
    "https://www.youtube.com/embed/-OHRY9HTfkc",//所さん名言
    "https://www.youtube.com/embed/lLF5hWK3IfY"//見てて飽きないお焼きの作り方
];

var hungryasa = ['もめむみま','こんばんは','こんにちは'];
var hungryasaMov = [
    "https://www.youtube.com/embed/JwFPuEX7lU8", //コンビニ朝ごはん
    "https://www.youtube.com/embed/MKPpy5zG0MM",//食パンレシピ
    "https://www.youtube.com/embed/Q8IFyz2ve3Y"//和食レシピ
]



// ここから夜＋
var happyyoru = ['おはよう','あいう','かきく'];
var happyyoruMov = [
    "https://www.youtube.com/embed/5dwcsX4QTwE", //変更する熟睡ヨガ
    "https://www.youtube.com/embed/b-vxJT1EsfI",//変更するお休みピアノ
    "https://www.youtube.com/embed/cGGn0u5NaPY"//変更する日本の絶景
];

var sleepyyoru = ['けおごち', 'はひふへ','あかさた'];
var sleepyyoruMov = [
    "https://www.youtube.com/embed/5dwcsX4QTwE", //変更する熟睡ヨガ
    "https://www.youtube.com/embed/b-vxJT1EsfI",//変更するお休みピアノ
    "https://www.youtube.com/embed/cGGn0u5NaPY"//変更する日本の絶景
];

var angryyoru = ['のぬに', 'たちつ','てとなにぬ'];
var angryyoruMov = [ 
    "https://www.youtube.com/embed/S-xjSO4Ucns",//焚火
    "https://www.youtube.com/embed/b-vxJT1EsfI",//変更するお休みピアノ
    "https://www.youtube.com/embed/cGGn0u5NaPY"//変更する日本の絶景
];

var sadyoru = ['こけきう' , 'おえうい' , 'あかさた'];
var sadyoruMov = [
    "https://www.youtube.com/embed/5dwcsX4QTwE", //熟睡ヨガ
    "https://www.youtube.com/embed/b-vxJT1EsfI",//お休みピアノ
    "https://www.youtube.com/embed/cGGn0u5NaPY"//日本の絶景
];
var borlingyoru =['なにぬね', "こけきくか" ,'あいうえお'];
var borlingyoru = [
    "https://www.youtube.com/embed/5dwcsX4QTwE", //変更する熟睡ヨガ
    "https://www.youtube.com/embed/b-vxJT1EsfI",//変更するお休みピアノ
    "https://www.youtube.com/embed/cGGn0u5NaPY"//変更する日本の絶景
];

var hungryyoru = ['こんにちは','こんばんは','おえうい'];
var hungryyoruMov = [
    "https://www.youtube.com/embed/5dwcsX4QTwE", //変更する熟睡ヨガ
    "https://www.youtube.com/embed/b-vxJT1EsfI",//変更するお休みピアノ
    "https://www.youtube.com/embed/cGGn0u5NaPY"//変更する日本の絶景
]



// お勧めボタンをクリックした結果

$("#recommendBtn").on("click" , function(){
    
                
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