function Futbol(){


    const sut = function(){
      
        const tahmin = parseInt(document.getElementById("tahmin").value);
        const sonuc = document.getElementById("sonuc");

        const sayi = Math.round(Math.random()+1);
       

        if(tahmin < 1 || tahmin > 2){
           sonuc.innerHTML = "Lütfen 1 veya 2 gir!";
           sonuc.style.color = "red";
        }
        else if(sayi == tahmin){
            sonuc.innerHTML = "GOOOOL!";
           sonuc.style.color = "green";
        }
        else if(sayi != tahmin){
            sonuc.innerHTML = "Sut Kaçtı!";
           sonuc.style.color = "purple";
        }
        
    }
    return (
        <>
        <input type="number" id="tahmin"></input>
        <p id="sonuc"></p>
        <button onClick={sut} >Şut ÇEK!</button>
        </>
    );
}

export default Futbol;