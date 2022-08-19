var count = 1;


function fill(x){

    if(count <= 9){
        if(count%2 != 0){
            document.getElementById(x.id).innerHTML  = "X";
        }
        else{
            document.getElementById(x.id).innerHTML  = "0";
        }
        count++;
        setTimeout(()=>{
            if(checkwin()){
                alert("Winner");
                reset();
            }
        },500)
        

    }
    else{
        alert("Match Draw");
        reset();
    }
    
    
} 

// reset function after count = 9
function reset(){
    for(var i=1; i<=9; i++){
        document.getElementById("box" + i).innerHTML = "";
    }
    count  = 1;

}

// check winner
function checkwin(){
    if(cond('box1' , 'box2', 'box3') || cond('box4','box5','box6') || cond('box7','box8','box9') || cond('box1','box4','box7') || cond('box2','box5','box8') || 
    cond('box3','box6','box9') || cond('box1','box5','box9') || cond('box3','box5','box7')){
        return true;
    }
}

//check the condition where is winner
function cond(box1,box2,box3){
    if(getdata(box1) != "" && getdata(box2) != "" && getdata(box3) != "" && getdata(box1) == getdata(box2) && getdata(box2) == getdata(box3) ){
        return true;
    }

}

//get data function 
function getdata(div){
    return document.getElementById(div).innerHTML;
}