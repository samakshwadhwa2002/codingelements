// console.log("help me i am samskh ");
// console.log("hi my name is sansksh");

// var x = 5;
// var y =6;
// var z = x + y ;
// console.log (z);

// console.log("1" + "2");
// console.log(1 + 2);



var calcstr = " ";

function pressBtn(val){
	if (val == '=') {
		calcstr = eval(calcstr);
	} 
	else if (val == 'del') {
		calcstr = " "
	}
	else {
		calcstr = calcstr+val;
	}

	var resultDiv = document.getElementById("calcresult");
	resultDiv.innerHTML = calcstr;
}




// function addFunc(){
// 	var num1String = document.getElementById("num1").value;
// 	var num2String = document.getElementById("num2").value;

// 	var num1Int = parseInt(num1String);
// 	var num2Int = parseInt(num2String);

// 	var sum = num1Int + num2Int;

// 	var resultDiv = document.getElementById("result");
// 	resultDiv.innerHTML = sum;
// }

// function subtractFunc(){
// 	console.log("Sub btn clicked")
  
//   var num1String = document.getElementById("num1").value;
//   var num2String = document.getElementById("num2").value;

//   var num1Int = parseInt(num1String);
//   var num2Int = parseInt(num2String);

//   var subtract = num1Int - num2Int

//   var resultdiv = document.getElementById("result");
//   resultdiv.innerHTML = subtract;

// }





