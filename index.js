var count = 0
var track1 = 0
var track2 = 0
var track3 = 0
var track1Car = ""
var track2Car = ""
var track3Car = ""

$(".gameCars").hide()
$(".wonTheGame1").hide()
$(".wonTheGame2").hide()
$(".wonTheGame3").hide()
$(".resultCar1").hide()
$(".resultCar2").hide()
$(".resultCar3").hide()
$(".resultCar4").hide()
$(".resultCar5").hide()
$(".resultCar6").hide()



function car1Select(){
    if(track1 == 0){
        $(".car1Selected").fadeOut(1000);
        $(".car1Selected1").fadeIn(1000);
        $(".car2Selected1").hide(1000);
        $(".car3Selected1").hide(1000);
        $(".car4Selected1").hide(1000);
        $(".car5Selected1").hide(1000);
        $(".car6Selected1").hide(1000);
        count += 1;
        track1 += 1;
        track1Car += "Car 1"
    }
    else if(track2 == 0){
        $(".car1Selected").fadeOut(1000);
        $(".car1Selected2").fadeIn(1000);
        $(".car2Selected2").hide(1000);
        $(".car3Selected2").hide(1000);
        $(".car4Selected2").hide(1000);
        $(".car5Selected2").hide(1000);
        $(".car6Selected2").hide(1000);
        count += 1;
        track2 += 1;
        track2Car += "Car 1"
    }
    else if(track3 == 0){
        $(".car1Selected").fadeOut(1000);
        $(".car1Selected3").fadeIn(1000);
        $(".car2Selected3").hide(1000);
        $(".car3Selected3").hide(1000);
        $(".car4Selected3").hide(1000);
        $(".car5Selected3").hide(1000);
        $(".car6Selected3").hide(1000);
        count += 1;
        track3 += 1;
        track3Car += "Car 1"
    }
    else{
        alert("All tracks are full")
    }
}

function car2Select(){
    if(track1 == 0){
        $(".car2Selected").fadeToggle(1000);
        $(".car1Selected1").hide(1000);
        $(".car2Selected1").fadeToggle(1000);
        $(".car3Selected1").hide(1000);
        $(".car4Selected1").hide(1000);
        $(".car5Selected1").hide(1000);
        $(".car6Selected1").hide(1000);
        count += 1;
        track1 += 1;
        track1Car += "Car 2"
    }
    else if(track2 == 0){
        $(".car2Selected").fadeToggle(1000);
        $(".car1Selected2").hide(1000);
        $(".car2Selected2").fadeToggle(1000);
        $(".car3Selected2").hide(1000);
        $(".car4Selected2").hide(1000);
        $(".car5Selected2").hide(1000);
        $(".car6Selected2").hide(1000);
        count += 1;
        track2 += 1;
        track2Car += "Car 2"
    }
    else if(track3 == 0){
        $(".car2Selected").fadeToggle(1000);
        $(".car1Selected3").hide(1000);
        $(".car2Selected3").fadeToggle(1000);
        $(".car3Selected3").hide(1000);
        $(".car4Selected3").hide(1000);
        $(".car5Selected3").hide(1000);
        $(".car6Selected3").hide(1000);
        count += 1;
        track3 += 1;
        track3Car += "Car 2"
    }
    else{
        alert("All tracks are full")
    }
}
    
function car3Select(){
    if(track1 == 0){
        $(".car3Selected").fadeToggle(1000);
        $(".car1Selected1").hide(1000);
        $(".car2Selected1").hide(1000);
        $(".car3Selected1").fadeToggle(1000);
        $(".car4Selected1").hide(1000);
        $(".car5Selected1").hide(1000);
        $(".car6Selected1").hide(1000);
        count += 1;
        track1 += 1;
        track1Car = "Car 3"
    }
    else if(track2 == 0){
        $(".car3Selected").fadeToggle(1000);
        $(".car1Selected2").hide(1000);
        $(".car2Selected2").hide(1000);
        $(".car3Selected2").fadeToggle(1000);
        $(".car4Selected2").hide(1000);
        $(".car5Selected2").hide(1000);
        $(".car6Selected2").hide(1000);
        count += 1;
        track2 += 1;
        track2Car = "Car 3"
    }
    else if(track3 == 0){
        $(".car3Selected").fadeToggle(1000);
        $(".car1Selected3").hide(1000);
        $(".car2Selected3").hide(1000);
        $(".car3Selected3").fadeToggle(1000);
        $(".car4Selected3").hide(1000);
        $(".car5Selected3").hide(1000);
        $(".car6Selected3").hide(1000);
        count += 1;
        track3 += 1;
        track3Car = "Car 3"
    }
    else{
        alert("All tracks are full")
    }
}

function car4Select(){
    if(track1 == 0){
        $(".car4Selected").fadeToggle(1000);
        $(".car1Selected1").hide(1000);
        $(".car2Selected1").hide(1000);
        $(".car3Selected1").hide(1000);
        $(".car4Selected1").fadeToggle(1000);
        $(".car5Selected1").hide(1000);
        $(".car6Selected1").hide(1000);
        count += 1;
        track1 += 1;
        track1Car = "Car 4"
    }
    else if(track2 == 0){
        $(".car4Selected").fadeToggle(1000);
        $(".car1Selected2").hide(1000);
        $(".car2Selected2").hide(1000);
        $(".car3Selected2").hide(1000);
        $(".car4Selected2").fadeToggle(1000);
        $(".car5Selected2").hide(1000);
        $(".car6Selected2").hide(1000);
        count += 1;
        track2 += 1;
        track2Car = "Car 4"
    }
    else if(track3 == 0){
        $(".car4Selected").fadeToggle(1000);
        $(".car1Selected3").hide(1000);
        $(".car2Selected3").hide(1000);
        $(".car3Selected3").hide(1000);
        $(".car4Selected3").fadeToggle(1000);
        $(".car5Selected3").hide(1000);
        $(".car6Selected3").hide(1000);
        count += 1;
        track3 += 1;
        track3Car = "Car 4"
    }
    else{
        alert("All tracks are full")
    }
}

function car5Select(){
    if(track1 == 0){
        $(".car5Selected").fadeToggle(1000);
        $(".car1Selected1").hide(1000);
        $(".car2Selected1").hide(1000);
        $(".car3Selected1").hide(1000);
        $(".car4Selected1").hide(1000);
        $(".car5Selected1").fadeToggle(1000);
        $(".car6Selected1").hide(1000);
        count += 1;
        track1 += 1;
        track1Car = "Car 5"
    }
    else if(track2 == 0){
        $(".car5Selected").fadeToggle(1000);
        $(".car1Selected2").hide(1000);
        $(".car2Selected2").hide(1000);
        $(".car3Selected2").hide(1000);
        $(".car4Selected2").hide(1000);
        $(".car5Selected2").fadeToggle(1000);
        $(".car6Selected2").hide(1000);
        count += 1;
        track2 += 1;
        track2Car = "Car 5"
    }
    else if(track3 == 0){
        $(".car5Selected").fadeToggle(1000);
        $(".car1Selected3").hide(1000);
        $(".car2Selected3").hide(1000);
        $(".car3Selected3").hide(1000);
        $(".car4Selected3").hide(1000);
        $(".car5Selected3").fadeToggle(1000);
        $(".car6Selected3").hide(1000);
        count += 1;
        track3 += 1;
        track3Car = "Car 5"
    }
    else{
        alert("All tracks are full")
    }
}


function car6Select(){
    if(track1 == 0){
        $(".car6Selected").fadeToggle(1000);
        $(".car1Selected1").hide(1000);
        $(".car2Selected1").hide(1000);
        $(".car3Selected1").hide(1000);
        $(".car4Selected1").hide(1000);
        $(".car5Selected1").hide(1000);
        $(".car6Selected1").fadeToggle(1000);
        count += 1;
        track1 += 1;
        track1Car = "Car 6"
    }
    else if(track2 == 0){
        $(".car6Selected").fadeToggle(1000);
        $(".car1Selected2").hide(1000);
        $(".car2Selected2").hide(1000);
        $(".car3Selected2").hide(1000);
        $(".car4Selected2").hide(1000);
        $(".car5Selected2").hide(1000);
        $(".car6Selected2").fadeToggle(1000);
        count += 1;
        track2 += 1;
        track2Car = "Car 6"
    }
    else if(track3 == 0){
        $(".car6Selected").fadeToggle(1000);
        $(".car1Selected3").hide(1000);
        $(".car2Selected3").hide(1000);
        $(".car3Selected3").hide(1000);
        $(".car4Selected3").hide(1000);
        $(".car5Selected3").hide(1000);
        $(".car6Selected3").fadeToggle(1000);
        count += 1;
        track3 += 1;
        track3Car = "Car 6"
    }
    else{
        alert("All tracks are full")
    }
}

function startTheGame(){
    if(count == 3){
        
        track1Speed = Math.random(10) 
        track2Speed = Math.random(10)
        track3Speed = Math.random(10)
        $(".trackDiv1").animate({left:'83vw'},track1Speed*10000)
        $(".trackDiv2").animate({left:'83vw'},track1Speed*10000)
        $(".trackDiv3").animate({left:'83vw'},track1Speed*10000) 
    }
    else{
        alert("Please select the cars")
    }
    
    if(track1Speed > track2Speed && track1Speed > track3Speed){
        $(".wonTheGame1").show()
        if(track1Car === "Car 1"){
            $(".resultCar1").show()
            document.getElementById("finalResults123").innerHTML = "Car1 won the game" 
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track1Speed) +"ms"
        }
        else if(track1Car === "Car 2"){
            $(".resultCar2").show()
            document.getElementById("finalResults123").innerHTML = "Car2 won the game" 
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track1Speed)+"ms"
        }
        else if(track1Car === "Car 3"){
            $(".resultCar3").show()
            document.getElementById("finalResults123").innerHTML = "Car3 won the game" 
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track1Speed)+"ms"
        }
        else if(track1Car === "Car 4"){
            $(".resultCar4").show()
            document.getElementById("finalResults123").innerHTML = "Car4 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track1Speed)+"ms"
        }
        else if(track1Car === "Car 5"){
            $(".resultCar5").show()
            document.getElementById("finalResults123").innerHTML = "Car5 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track1Speed)+"ms"
        }
        else if(track1Car === "Car 6"){
            $(".resultCar6").show()
            document.getElementById("finalResults123").innerHTML = "Car6 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track1Speed)+"ms"
        }
    }
    else if(track2Speed > track1Speed && track2Speed > track3Speed){
        $(".wonTheGame2").show()
        if(track2Car === "Car 1"){
            $(".resultCar1").show()
            document.getElementById("finalResults123").innerHTML = "Car1 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track2Speed)+"ms"
            
        }
        else if(track2Car === "Car 2"){
            $(".resultCar2").show()
            document.getElementById("finalResults123").innerHTML = "Car2 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track2Speed)+"ms"
        }
        else if(track2Car === "Car 3"){
            $(".resultCar3").show()
            document.getElementById("finalResults123").innerHTML = "Car3 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track2Speed)+"ms"
        }
        else if(track2Car === "Car 4"){
            $(".resultCar4").show()
            document.getElementById("finalResults123").innerHTML = "Car4 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track2Speed)+"ms"
        }
        else if(track2Car === "Car 5"){
            $(".resultCar5").show()
            document.getElementById("finalResults123").innerHTML = "Car5 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track2Speed)+"ms"
        }
        else if(track2Car === "Car 6"){
            $(".resultCar6").show()
            document.getElementById("finalResults123").innerHTML = "Car6 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track2Speed)+"ms"
        }
        
    }
    else{
        $(".wonTheGame3").show()
        if(track3Car === "Car 1"){
            $(".resultCar1").show()
            document.getElementById("finalResults123").innerHTML = "Car1 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track3Speed)+"ms"

        }
        else if(track3Car === "Car 2"){
            $(".resultCar2").show()
            document.getElementById("finalResults123").innerHTML = "Car2 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track3Speed)+"ms"
        }
        else if(track3Car === "Car 3"){
            $(".resultCar3").show()
            document.getElementById("finalResults123").innerHTML = "Car3 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track3Speed)+"ms"
        }
        else if(track3Car === "Car 4"){
            $(".resultCar4").show()
            document.getElementById("finalResults123").innerHTML = "Car4 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track3Speed)+"ms"
        }
        else if(track3Car === "Car 5"){
            $(".resultCar5").show()
            document.getElementById("finalResults123").innerHTML = "Car5 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track3Speed)+"ms"
        }
        else if(track3Car === "Car 6"){
            $(".resultCar6").show()
            document.getElementById("finalResults123").innerHTML = "Car6 won the game"
            document.getElementById("speed").innerHTML = "Speed : "+Math.round(track3Speed)+"ms"
        }
        
    }
    
}

