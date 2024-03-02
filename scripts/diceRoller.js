function rollDice(){
    const numberOfDice=document.querySelector("input").value;
    const diceResult=document.querySelector(".diceResult");
    const diceImages=document.querySelector(".diceImages");
    const values=[];
    const images=[];

    for(let i=0;i<numberOfDice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<div diceresimg> <img src="images/dice${value}.jpeg"> </div>`)


    }
    console.log(values);
    console.log(images);

    diceResult.textContent=`Dice: ${values.join(",")}`
    diceImages.innerHTML=images.join("");




    console.log(numberOfDice);

}