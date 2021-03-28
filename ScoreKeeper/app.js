let p1Disp = document.querySelector('#player1Disp');
let p2Disp = document.querySelector('#player2Disp');
let resetBtn = document.querySelector('#resetButton')
let p1Button = document.querySelector('#p1Button');
let p2Button = document.querySelector('#p2Button');
let winSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winScore = 3;
let gameOver = false;


p1Button.addEventListener('click', function(){
    if(!gameOver){
        p1Score += 1;
        if( p1Score === winScore){
            gameOver = true;
            p1Disp.classList.add('has-text-success');
            p2Disp.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Disp.innerText = p1Score;
    }
});

p2Button.addEventListener('click', function(){
    if(!gameOver){
        p2Score += 1;
        if( p2Score === winScore){
            gameOver = true;
            p1Disp.classList.add('has-text-danger');
            p2Disp.classList.add('has-text-success');
            p1Button.disabled = true;
            p2Button.disabled = true;

        }
        p2Disp.innerText = p2Score;
    }
});

winSelect.addEventListener('change', function(){
    winScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset)

function reset(){
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Disp.innerText = p1Score;
    p2Disp.innerText = p2Score;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Disp.classList.remove('has-text-success', 'has-text-danger');
    p2Disp.classList.remove('has-text-danger', 'has-text-success' );
}