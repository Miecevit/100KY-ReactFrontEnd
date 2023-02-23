import Gololdu from './Gololdu';
import Gololmadi from './Gololmadi';

function Gol(props){
    const OlduMu = props.deger;

    if(OlduMu == "true"){
        return <Gololdu />
    }
    else{
        return <Gololmadi />
    }
}

export default Gol;