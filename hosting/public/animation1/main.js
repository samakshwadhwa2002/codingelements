



// for (var i=1; i<=10; i++){
// 	console.log("Hello")
// }



// for (var d = 101 ; d<= 120; d=d+2){
// 	console.log(d)
// }


// console.log(11 % 4)


// for (var d = 100 ; d<= 120; d++){
// 	if(d%2==0){
// 		console.log(d+ " even")
// 	}else{
// 		console.log(d+ " odd")
// 	}
// }


// d = d + 2
// d += 2
// d++


function startAnimation (){

	var box = document.getElementById('box')
	
	var boxCoord = box.getBoundingClientRect()
	console.log(boxCoord) 

	box.style.left =  50
	box.style.top =  50

	for(var i = 1;i<=100;i++){
		box.style.left += i*2;
		
	}


}






















































































