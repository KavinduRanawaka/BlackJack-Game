function main(){
    let confirm = document.getElementById('mainResult').innerHTML;
    if(confirm=="You Lost"){
        alert("Game Over ! Please Restart the Game")
    }
    else{
    let x;
    do{
         x=Math.floor(Math.random()*100/7.6);
    }
    while(x==0);

    let currentTT = parseInt(document.getElementById('result').innerHTML);
    let total = currentTT + x;
    document.getElementById('result').innerHTML=total;

    if(total < 21){
        document.getElementById('mainResult').innerHTML="Generate another card?"
    }
    else if(total == 21){
        document.getElementById('mainResult').innerHTML="You've Won"
        alert("Congratulations!")
        document.getElementById('btn-rs').style.display="block"
    }
    else if(total>21){
        document.getElementById('mainResult').innerHTML="You Lost";
        alert("Lost :( Click Restart to Play Again")
        document.getElementById('btn-rs').style.display="block"
    }
    
    let img= document.createElement("img");
    img.src="images/"+ x +".png";
    img.height=200;

    document.body.appendChild(img);
}

}
function restart(){
    location.reload();
     
}