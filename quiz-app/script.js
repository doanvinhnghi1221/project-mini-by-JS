const quizData = [
    {
        question: 'Loài chim thông minh nhất?',
        a_text: 'Vẹt',
        b_text: 'Đại Bàng',
        c_text: 'Quạ',
        d_text: 'Bồ câu',
        correct: 'c'
    }, 
    {
        question: 'Loài vật thông minh nhất?',
        a_text: 'Cá heo',
        b_text: 'Hắc tinh tinh',
        c_text: 'Đười ươi',
        d_text: 'Khỉ',
        correct: 'b'
    },
    {
        question: 'Ai là người phát minh ra dòng điện xoay chiều?',
        a_text: 'Thomas Edison',
        b_text: 'Heinrich Goebel',
        c_text: 'Antonio Meucci',
        d_text: 'Nikola Tesla',
        correct: 'd'
    },
    {
        question: 'Thông tin nào là KHÔNG chính xác?',
        a_text: 'Mặt trăng đang rời xa địa cầu với cự ly 3,8cm mỗi năm',
        b_text: 'Sao mộc là hành tinh lớn nhất trong hệ Mặt trời',
        c_text: 'Sao Thổ là hành tinh lớn thứ 3, nhẹ nhất trong hệ Mặt Trời',
        d_text: 'Không thể nghe tiếng hét vì vũ trụ không có không khí thể truyền âm thanh',
        correct: 'c'
    }
];
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit') 

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a_text;
    b_text.innerText = currentQuizData.b_text;
    c_text.innerText = currentQuizData.c_text;
    d_text.innerText = currentQuizData.d_text;
}

function getSelected() {
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();
    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} question.</h2>
            <button id="submit" onclick='location.reload()'>Reload</button>`;
        }
    }
    
  
})