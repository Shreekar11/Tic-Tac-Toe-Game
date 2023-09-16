// function check(symbol){
//     // to check for row 1
//     if($(".sq1").hasClass(symbol) && 
//        $(".sq2").hasClass(symbol) &&
//        $(".sq3").hasClass(symbol)){
//         $(".sq1").css("color", "green");
//         $(".sq2").css("color", "green");
//         $(".sq3").css("color", "green");

//         return true;
//     }
//     // to check for row 2
//     else if($(".sq4").hasClass(symbol) && 
//             $(".sq5").hasClass(symbol) &&
//             $(".sq6").hasClass(symbol)){
//                 $(".sq4").css("color", "green");
//                 $(".sq5").css("color", "green");
//                 $(".sq6").css("color", "green");

//         return true;
//     }
//     // to check for row 3
//     else if($(".sq7").hasClass(symbol) && 
//              $(".sq8").hasClass(symbol) &&
//              $(".sq9").hasClass(symbol)){
//                 $(".sq7").css("color", "green");
//                 $(".sq8").css("color", "green");
//                 $(".sq9").css("color", "green");

//         return true;
//     }// to check column 1
//     else if($(".sq1").hasClass(symbol) && 
//             $(".sq4").hasClass(symbol) &&
//             $(".sq7").hasClass(symbol)){
//                 $(".sq1").css("color", "green");
//                 $(".sq4").css("color", "green");
//                 $(".sq7").css("color", "green");

//         return true;
//     }// to check column 2
//     else if($(".sq2").hasClass(symbol) && 
//             $(".sq5").hasClass(symbol) &&
//             $(".sq8").hasClass(symbol)){
//                 $(".sq2").css("color", "green");
//                 $(".sq5").css("color", "green");
//                 $(".sq8").css("color", "green");

//         return true;
//     }// to check column 3
//     else if($(".sq3").hasClass(symbol) && 
//             $(".sq6").hasClass(symbol) &&
//             $(".sq9").hasClass(symbol)){
//                 $(".sq3").css("color", "green");
//                 $(".sq6").css("color", "green");
//                 $(".sq9").css("color", "green");

//         return true;
//     }// to check diagonals
//     else if($(".sq1").hasClass(symbol) && 
//             $(".sq5").hasClass(symbol) &&
//             $(".sq9").hasClass(symbol)){
//                 $(".sq1").css("color", "green");
//                 $(".sq5").css("color", "green");
//                 $(".sq9").css("color", "green");

//         return true;
//     }// to check other diagonal
//     else if($(".sq3").hasClass(symbol) && 
//             $(".sq5").hasClass(symbol) &&
//             $(".sq7").hasClass(symbol)){
//                 $(".sq3").css("color", "green");
//                 $(".sq5").css("color", "green");
//                 $(".sq7").css("color", "green");

//         return true;
//     }else{
//         return false;
//     }
// }
// As consecutive turn is required 
// So we'll use flag variable to check if player one played

// flag = true -> 1st player turn
// flag = false -> 2nd player turn
var flag = true;
$("button").click(function(){

    playSound();

    if($(this).hasClass("fa fa-check") || $(this).hasClass("fa fa-times")){
        $(this).css("background-color", "red");
        setTimeout(() => {
            $(this).css("background-color", "white");
        }, 300);
    }else if(flag == true){
        $("#screen").text("Player 2 Turns Follow !!");    
        
        $(this).addClass("fa fa-check");
        flag = false;

        console.log("player 2 chance");

        var sym = "fa fa-check";
        console.log(sym);
        if(check(sym)){

            $("#screen").text("Player 1 Wins !! 🎉🎊")

            winSound();

        }

    }else{
        $("#screen").text("Player 1 Turns Follow !!");

        $(this).addClass("fa fa-times");
        flag = true;

        var sym = "fa fa-times";
        if(check(sym)){

            $("#screen").text("Player 2 Wins !! 🎉🎊")

            winSound();


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
    $("#screen").text("Player 1 Turn Follows !!");
    $("#screen").css("background-color", "transparent");
    $(".r").removeClass("fa fa-check");
    $(".r").removeClass("fa fa-times");
    flag = true;

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