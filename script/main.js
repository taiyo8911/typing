"use strict";

// ゲームループ数の設定
let loop = 10;

// タイピングワードリスト
const wordList = ["a", "about", "afternoon", "again", "airplane", "all", "always", "am", "and", "animal", "apple", "at", "autumn", "bag", "baseball", "bath", "be", "beach", "bean", "bear", "beautiful", "beef", "best", "bicycle", "big", "bike", "bird", "birthday", "black", "blue", "body", "book", "bookstore", "box", "boy", "bread", "breakfast", "bridge", "brother", "brown", "brush", "busy", "buy", "by", "cake", "can", "cap", "car", "cat", "chair", "chicken", "city", "classmate", "classroom", "clean", "clock", "clothes", "cloudy", "cold", "color", "cook", "cool", "country", "cow", "cup", "cute", "date", "day", "delicious", "desk", "dictionary", "different", "difficult", "dinner", "dish", "do", "doctor", "dog", "down", "drama", "draw", "dream", "drink", "drum", "ear", "easy", "eat", "egg", "eight", "eighteen", "eighty", "eleven", "enjoy", "evening", "event", "everyone", "exciting", "excuse", "eye", "face"];

// ワードリスト2
const meanList = ["1つの、1人の", "について、に関する", "午後", "もう一度、再び、また", "飛行機", "全部、全員、全て、みな", "いつも", "いる、ある", "そして、それから", "動物", "リンゴ", "で、に", "秋", "カバン", "野球", "風呂、入浴", "である", "砂浜", "豆", "クマ", "美しい", "牛肉", "一番良い", "自転車", "大きい", "自転車", "鳥", "誕生日", "黒い", "青い", "身体", "本", "本屋", "箱", "少年", "パン", "朝食", "橋", "兄弟", "茶色の", "をみがく", "忙しい", "買う", "のそばに、によって", "ケーキ", "することができる", "帽子", "自動車", "猫", "いす", "鶏肉", "市", "同級生", "教室", "きれいな", "置き時計", "服", "曇った", "冷たい", "色", "料理する", "かっこいい", "国", "ウシ", "カップ", "可愛い", "日付", "日", "おいしい", "机", "辞書", "違う", "むずかしい", "夕食", "皿", "する", "医者", "イヌ", "下に", "劇", "描く", "夢", "飲む", "太鼓", "耳", "簡単な", "食べる", "卵", "8", "18", "80", "11", "楽しむ", "夕方", "出来事", "みんな", "興奮させる", "許す", "目", "顔"];


// ワード表示要素取得
let wordElem = document.getElementById('word');
let meanElem = document.getElementById('mean');

// カウント初期値表示
let countElem = document.getElementById('count');
countElem.textContent = loop;

// 判定用の文字格納
let checkTexts = [];

// 終了フラグ
let flag = true;

// メイン関数 設定したループ数まで
function main() {
    if (flag) {
        // ワードの表示
        createText();
        // キーボード入力を受け取る
        document.addEventListener('keydown', keyDown);
    }
    else {
        let messageElem = document.getElementById("message");
        messageElem.textContent = "終了";
        wordElem.textContent = "終了";
        meanElem.textContent = "";
    }
}


// ワードの表示関数
function createText() {
    // ワードを初期化
    word.textContent = "";

    // 乱数を取得
    let rnd = Math.floor(Math.random() * wordList.length);

    // タイピングが正しいか判定するために、ワードを1文字ずつに分割
    checkTexts = wordList[rnd].split('').map(function (value) {
        let span = document.createElement('span');
        span.textContent = value;
        word.appendChild(span);
        return span;
    });

    // 意味の表示
    mean.textContent = meanList[rnd];
}

// キーボード入力の判定
function keyDown(e) {
    // キーボードからの入力は「e.key」に格納されている
    if (e.key === checkTexts[0].textContent) {
        // 入力が正しかったら文字色を変える
        checkTexts[0].className = 'changeColor';

        // 0番目の配列要素を削除して、次の1文字を比較対象にする
        checkTexts.shift();

        // 配列要素が空になったら次の問題を出す
        if (!checkTexts.length) {
            createText();
            countDown();
        }
    }
    else {
        // 入力が違っていたら、文字をブルブルさせる。
        checkTexts[0].className = 'buruburu';
    }
}

// カウントダウン関数
function countDown() {
    let num = countElem.textContent;
    // カウントを数値に変換
    num = parseInt(num);
    if (num == 1) {
        flag = false;
        main();
    }
    else {
        // カウントダウン
        num -= 1;
        countElem.textContent = num;
    }

}