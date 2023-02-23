import resim from '../img/kahve.jpg';

function Kahve(){
    return (
        <>
        <img src={resim} width="200" />
        <p>Kahve, antioksidan içeriği oldukça yüksek olan bir besindir. 
            Yüksek antioksidan içeriği sayesinde düzenli olarak kahve tüketen 
            bireylerde karaciğer kanseri ve kolorektal kanser türleri başta olmak 
            üzere birçok kanser türüne yakalanma riskinin önemli ölçüde azaldığını 
            gösteren bilimsel araştırmalar söz konusudur</p>
        </>
    );
}
export default Kahve;