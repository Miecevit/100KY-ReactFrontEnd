function Tuslar(){

    const nereden = function(x){ 

        const sonuc = document.getElementById("sonuc");

        sonuc.innerHTML = x;
    }


    return (
        <>
        <button onClick={() => nereden('Ben 1. Tuşum')} >Bana Tıkla 1!</button>
        <button onClick={() => nereden('Ben 2. Tuşum')} >Bana Tıkla 2!</button>
        <button onClick={() => nereden('Ben 3. Tuşum')} >Bana Tıkla 3!</button>
        <p id="sonuc">HELLO WORLD!</p>
        </>
    );
}

export default Tuslar;