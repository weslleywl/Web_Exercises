if(localStorage.getItem("notFirstTurn") === "yes")
{
    var firstTime = localStorage.getItem(true)
    var randomNumber = Math.ceil((Math.random() * 6));
    document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber+".png");
    var randomNumber2 = Math.ceil((Math.random() * 6));
    document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");
    if (randomNumber > randomNumber2) 
    {
        document.querySelector("h1").textContent = "👑 Player 1 Wins"
    } else if(randomNumber === randomNumber2)
    {
        document.querySelector("h1").textContent = "🏳️ Draw 🏳️"
    }
    else
    {
        document.querySelector("h1").textContent = "Player 2 Wins 👑"
    }
    localStorage.removeItem("notFirstTurn");
}
else
{
    localStorage.setItem("notFirstTurn","yes");
}