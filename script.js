let player1 = prompt("Enter Player 1");
let player2 = prompt("Enter Player 2");

$("#screen").text(player1 + " Turn Follows !!");

var nextGame = false; 

var flag = true;

$("button").click(function(){

    if(nextGame){
        // $("button").click(function(){
            alert("Reset to Start New Game");
            reset();
    }else{
        playSound();

        if($(this).hasClass("fa fa-check") || $(this).hasClass("fa fa-times")){

            $(this).css("background-color", "red");
            setTimeout(() => {
                $(this).css("background-color", "white");
            }, 300);
        }else if(flag == true){
            $("#screen").text(player2 + " Turns Follow !!");    
            
            $(this).addClass("fa fa-check");
            flag = false;
    
            console.log("player 2 chance");
    
            var sym = "fa fa-check";
            console.log(sym);
            if(check(sym)){
    
                $("#screen").text(player1 + " Wins !! 🎉🎊")
    
                winSound();
    
                nextGame = true;
    
            }
    
        }else{
            $("#screen").text(player1 + " Turns Follow !!");
    
            $(this).addClass("fa fa-times");
            flag = true;
    
            var sym = "fa fa-times";
            if(check(sym)){
    
                $("#screen").text(player2 + " Wins !! 🎉🎊")
    
                winSound();
    
                nextGame = true;
    
            }
    
        }
    }
    
});

function playSound(){
    var audio = new Audio("sounds/clickSound.wav");
    audio.play();
}

function winSound(){
    var audio = new Audio("sounds/WinSound.mp3");
    audio.play();
}

function check(symbol){
    // to check for row 1
    if($(".sq1").hasClass(symbol) && 
       $(".sq2").hasClass(symbol) &&
       $(".sq3").hasClass(symbol)){
        $(".sq1").css("color", "green");
        $(".sq2").css("color", "green");
        $(".sq3").css("color", "green");

        return true;
    }
    // to check for row 2
    else if($(".sq4").hasClass(symbol) && 
            $(".sq5").hasClass(symbol) &&
            $(".sq6").hasClass(symbol)){
                $(".sq4").css("color", "green");
                $(".sq5").css("color", "green");
                $(".sq6").css("color", "green");

        return true;
    }
    // to check for row 3
    else if($(".sq7").hasClass(symbol) && 
             $(".sq8").hasClass(symbol) &&
             $(".sq9").hasClass(symbol)){
                $(".sq7").css("color", "green");
                $(".sq8").css("color", "green");
                $(".sq9").css("color", "green");

        return true;
    }// to check column 1
    else if($(".sq1").hasClass(symbol) && 
            $(".sq4").hasClass(symbol) &&
            $(".sq7").hasClass(symbol)){
                $(".sq1").css("color", "green");
                $(".sq4").css("color", "green");
                $(".sq7").css("color", "green");

        return true;
    }// to check column 2
    else if($(".sq2").hasClass(symbol) && 
            $(".sq5").hasClass(symbol) &&
            $(".sq8").hasClass(symbol)){
                $(".sq2").css("color", "green");
                $(".sq5").css("color", "green");
                $(".sq8").css("color", "green");

        return true;
    }// to check column 3
    else if($(".sq3").hasClass(symbol) && 
            $(".sq6").hasClass(symbol) &&
            $(".sq9").hasClass(symbol)){
                $(".sq3").css("color", "green");
                $(".sq6").css("color", "green");
                $(".sq9").css("color", "green");

        return true;
    }// to check diagonals
    else if($(".sq1").hasClass(symbol) && 
            $(".sq5").hasClass(symbol) &&
            $(".sq9").hasClass(symbol)){
                $(".sq1").css("color", "green");
                $(".sq5").css("color", "green");
                $(".sq9").css("color", "green");

        return true;
    }// to check other diagonal
    else if($(".sq3").hasClass(symbol) && 
            $(".sq5").hasClass(symbol) &&
            $(".sq7").hasClass(symbol)){
                $(".sq3").css("color", "green");
                $(".sq5").css("color", "green");
                $(".sq7").css("color", "green");

        return true;
    }else{
        return false;
    }
}

function reset(){
    player1 = prompt("Enter Player 1");
    player2 = prompt("Enter Player 2");
    $("#screen").text(player1 + " Turn Follows !!");
    $("#screen").css("background-color", "transparent");
    $(".r").removeClass("fa fa-check");
    $(".r").removeClass("fa fa-times");
    flag = true;
    nextGame = false;

    // reset colors
    $(".sq1").css("color", "black");
    $(".sq2").css("color", "black");
    $(".sq3").css("color", "black");
    $(".sq4").css("color", "black");
    $(".sq5").css("color", "black");
    $(".sq6").css("color", "black");
    $(".sq7").css("color", "black");
    $(".sq8").css("color", "black");
    $(".sq9").css("color", "black");
}
