import Liste from './Liste';

function SinifListesi(){

    const sinif = ["Ayşe","Fatma","Hayriye","Büşra"];

    return (
        <>
        <h1>Bugün kimler sınıfta?</h1>
        <ul>
            {sinif.map( (ad) => <Liste ogrenci={ad}/> )}
        </ul>
        </>

    );
}
export default SinifListesi;