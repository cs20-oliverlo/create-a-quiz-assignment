// Quiz with more efficient JavaScript

// Button Press EventListener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    // Input
    let q1 = document.getElementById("q1-in").value.toLowerCase();
    let q2 = document.getElementById("q2-in").value.toLowerCase();
    let q3 = document.getElementById("q3-in").value.toLowerCase();
    let q4 = document.getElementById("q4-in").value.toLowerCase();

    // Proccessing
    let score = 0;
    score += markQuestion(1, q1);
    score += markQuestion(2, q2);
    score += markQuestion(3, q3);
    score += markQuestion(4, q4);

    // Output (Final Score and Encouraging/Celebrating Message)
    document.getElementById("score-out").innerHTML = "You got " + score + "/4 (" +score * 100 / 4+ "%)";

    if (score <= 1) {
        document.getElementById("score-msg").innerHTML = "Try Harder."
    } else if (score <= 2) {
        document.getElementById("score-msg").innerHTML = "Getting There."
    } else if (score <= 3) {
        document.getElementById("score-msg").innerHTML = "Almost There!"
    } else {
        document.getElementById("score-msg").innerHTML = "Perfect!"
    }
}

function markQuestion(qNum, qAnswer) {
    // Tests question number and answer (also outputs individual feedback per question)
    if (qNum == 1) {
        if (qAnswer == "omega") {
            document.getElementById("result1").innerHTML = "Correct!";
            document.getElementById("result1").style.color = "lime";
            document.getElementById("q1-in").style.borderBlockColor = "lime";
            return 1;
        } else {
            document.getElementById("result1").innerHTML = "Incorrect.";
            document.getElementById("result1").style.color = "red";
            document.getElementById("q1-in").style.borderBlockColor = "red";
        }
    } else if (qNum == 2) {
        if (qAnswer == "laughter") {
            document.getElementById("result2").innerHTML = "Correct!";
            document.getElementById("result2").style.color = "lime";
            document.getElementById("q2-in").style.borderBlockColor = "lime";
            return 1;
        } else {
            document.getElementById("result2").innerHTML = "Incorrect.";
            document.getElementById("result2").style.color = "red";
            document.getElementById("q2-in").style.borderBlockColor = "red";
        }
    } else if (qNum == 3) {
        if (qAnswer == "oxymoron") {
            document.getElementById("result3").innerHTML = "Correct!";
            document.getElementById("result3").style.color = "lime";
            document.getElementById("q3-in").style.borderBlockColor = "lime";
            return 1;
        } else {
            document.getElementById("result3").innerHTML = "Incorrect.";
            document.getElementById("result3").style.color = "red";
            document.getElementById("q3-in").style.borderBlockColor = "red";
        }
    } else {
        if (qAnswer == "tanzanite") {
            document.getElementById("result4").innerHTML = "Correct!";
            document.getElementById("result4").style.color = "lime";
            document.getElementById("q4-in").style.borderBlockColor = "lime";
            return 1;
        } else {
            document.getElementById("result4").innerHTML = "Incorrect.";
            document.getElementById("result4").style.color = "red";
            document.getElementById("q4-in").style.borderBlockColor = "red";
        }
    }
    return 0;
}