import Araba from './Araba';

function Garaj(){

    const garajArac = { yer: "garaj", model: "Ford", tip: '4x4'}

    return(
        <>
        <h1>Garajımda ne var?</h1>
        <Araba arac={garajArac} />
        </>
    );
}

export default Garaj;