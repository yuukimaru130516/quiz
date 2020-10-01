"use strict";

const quiz = [
    {
        question: "ゲーム市場、最も売れたゲーム機は次のうちどれ",
        answers: [
            "スーパーファミコン", 
            "プレイステーション２", 
            "ニンテンドースイッチ", 
            "ニンテンドーDS"
        ],
        correct: "ニンテンドーDS"
    },{
        question: "鶴岡八幡宮、箱根などの観光地がある都道府県は？",
        answers: [
            "神奈川県", 
            "東京都", 
            "埼玉県", 
            "山梨県"
        ],
        correct: "神奈川県"
    },{
        question: "アンジャッシュ渡部の出身大学は？",
        answers: [
            "東京大学", 
            "関東学院大学", 
            "東京理科大学", 
            "神奈川大学"
        ],
        correct: "神奈川大学"
    }
];


let quizIndex = 0;
let score = 0;
const quizLength =quiz.length;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義する関数
function setupQuiz()
{
        document.getElementById("js-question").textContent = quiz[quizIndex].question;

        for (let buttonIndex = 0; buttonIndex < buttonLength; buttonIndex++){
            $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        }

}

setupQuiz();

let buttonIndex = 0;

// ボタンをクリックしたら正誤判定
for(let handleIndex = 0; handleIndex < buttonLength; handleIndex++){
    $button[handleIndex].addEventListener("click", checkAnser);
}


// 正誤判定
function checkAnser(e)
{
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解！");
        score ++ ;
    }else{
        window.alert("不正解！");
    }

    quizIndex ++;
    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
    }
};
