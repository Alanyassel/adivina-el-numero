// valor aleatorio generado
var y = Math.floor(Math.random() * 10 + 1);  

function submit() {
        number1 = document.getElementById("number1").value;
        number2 = document.getElementById("number2").value;
        actual_answer = parseInt(number1) * parseInt(number2);
        console.log(actual_answer);
    
    
        question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
        input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
        row =  question_number + input_box + check_button ; 
        document.getElementById("output").innerHTML = row;
        document.getElementById("number1").value = "";
        document.getElementById("number2").value = "";
    
        window.location = "gamepage.html";
    
// función para el número adivinado por el usuario
var x = document.getElementById("guessField").value;
}

if(x == y)
{
    alert("¡¡¡FELICIDADES!!!"+playername+" LO ADIVINASTE BIEN "
            + guess + "INTENTO");
            guess=1;
}
else if(x > y)
{
    guess++;
    alert("¡OOPS LO SIENTO! INTENTA UN NUMERO MAS PEQUEÑO");
}
else if(x < y)
{
    guess++;
    alert("¡OOPS LO SIENTO! INTENTA UN NUMERO MAS GRANDE");
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}


