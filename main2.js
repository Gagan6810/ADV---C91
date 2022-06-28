player_1 = localStorage.getItem("player_1");
player_2 = localStorage.getItem("player_2");

document.getElementById('question_turn').innerHTML = "<h2> Question Turn : " + player_1 + "</h2>";
document.getElementById('answer_turn').innerHTML = "<h2> Answer Turn : " + player_2 + "</h2>";

function send(){
    document.getElementById("math").innerHTML;
    num_1 = document.getElementById("number1_input").value;
    num_2 = document.getElementById("number2_input").value;
    actual_ans = parseInt(num_1) + parseInt(num_2);

    question_number = "<h4 id = 'font_designing'>" + num_1 + "+" + num_2 + "</h4>";
    input = '<br> Answer : <input type="text" id="input_box" >';
    check_btn = '<br> <br> <button class="btn btn-success" onclick="check()" id = "btn_design"> Check </button> ';

    final_output = question_number + input + check_btn;
    document.getElementById("math").innerHTML = final_output;

    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}

