

var keyUp=38
var keyDown=40
var keyLeft=37
var keyRight=39
var keySpace=32

$(document).ready(function(){
	console.log("ready")

	$("#spaceship").css({
		"position": "absolute",
		"left": 20,
		"top": 200,
		"height": 100,
		"width": 100
	})

	$("#bullet").css({
		"position": "absolute",
		"left": 50,
		"top": 200,
		"height": 10,
		"width": 10,
		"display": "none"
	})

	// $("#spaceship").click(function(){
	// 	console.log("cliked")
	// 	$("#spaceship").animate({ left:250 })
	// })

	$(document).on("keydown", function(e){
		//console.log(e.keyCode)

		var spaceshipLeft = parseInt( $("#spaceship").css("left"), 10)
		var spaceshipTop = parseInt( $("#spaceship").css("top"), 10)

		if(e.keyCode==keyLeft){
			$("#spaceship").animate({"left":"-=50"}, 200)	
		} else if(e.keyCode==keyRight){
			$("#spaceship").animate({"left":"+=50"}, 200)
		} else if(e.keyCode==keyUp){
			$("#spaceship").animate({"top":"-=50"}, "fast")	
		} else if(e.keyCode==keyDown){
			$("#spaceship").animate({"top":"+=50"}, "fast")	
		} else if(e.keyCode==keySpace){
			$("#bullet").css({
				"display": "block",
				"left": spaceshipLeft+60,
				"top": spaceshipTop+5
			})

			$("#bullet").animate({"left":"1000"}, "fast", function(){
				$("#bullet").css({"display": "none"})
			})

		}   

	})
})













