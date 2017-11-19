


var player = "X"


function pressBtn(btnId){
	var btn = document.getElementById(btnId)
	if(btn.innerText=="+"){
		btn.innerText = player
		calcScore();
		if(player == "X"){
			btn.className = "btn-large green" 
			player = "O"
		} else {
			btn.className = "btn-large blue" 
			player = "X"
		}
	}
}

function calcScore(){
	var btn1 = document.getElementById('btn1').innerText
	var btn2 = document.getElementById('btn2').innerText
	var btn3 = document.getElementById('btn3').innerText
	var btn4 = document.getElementById('btn4').innerText
	var btn5 = document.getElementById('btn5').innerText
	var btn6 = document.getElementById('btn6').innerText
	var btn7 = document.getElementById('btn7').innerText
	var btn8 = document.getElementById('btn8').innerText
	var btn9 = document.getElementById('btn9').innerText

	var winner = ""
	if(btn1==btn2 && btn2==btn3 && btn1!="+"){
		winner = btn1 
	}
	else if(btn4==btn5 && btn5==btn6 && btn4!="+"){
		winner = btn4 
	}
	else if(btn7==btn8 && btn8==btn9 && btn7!="+"){
		winner = btn7
	}
	else if(btn1==btn4 && btn4==btn7 && btn1!="+"){
		winner = btn1 
	}
	else if(btn2==btn5 && btn5==btn8 && btn2!="+"){
		winner = btn2
	}
	else if(btn3==btn6 && btn6==btn9 && btn3!="+"){
		winner = btn3 
	}
	else if(btn1==btn5 && btn5==btn9 && btn1!="+"){
			winner = btn1
	}
	else if(btn3==btn5 && btn5==btn7 && btn3!="+"){
			winner = btn3
	}

	if(winner!=""){
		var resultElement = document.getElementById("result")
		resultElement.innerHTML= " THE WINNER IS " + winner 
	}
	
}











