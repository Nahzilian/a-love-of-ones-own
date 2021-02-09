function getPos(el) {
    for (var lx = 0, ly = 0;
        el != null;
        lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return { left: lx, top: ly , behavior: "smooth"};
}

function evaluateForm(e) {
    e.preventDefault();
    var q1 = document.getElementsByName('question1');
    var q2 = document.getElementsByName('question2');
    var q3 = document.getElementsByName('question3');
    var q4 = document.getElementsByName('question4');
    var q5 = document.getElementsByName('question5');
    var score = 0;
    var answers = [q1, q2, q3, q4, q5];
    answers.forEach(x => {
        for (var i = 0; i < x.length; i++) {
            if (x[i].checked) 
                score += parseInt(x[i].value);
            else x[i].disabled = true;
        }
    })
    document.getElementById("score").innerHTML = score;
    var explanations = document.getElementsByClassName('explanations');
    var scoreWrapper = document.getElementById('score-wrapper');
    var pos = getPos(scoreWrapper)
    for (var i in explanations) {
        explanations[i].className += ' show-exp';
    }
    window.scrollTo(pos);
    scoreWrapper.style.display = 'block';
    document.getElementById("retry").style.display = 'block';
    document.getElementById("eval").style.display = 'none';
}