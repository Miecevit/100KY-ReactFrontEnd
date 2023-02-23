import React from 'react';
import ReactDOM from 'react-dom/client';

import Cay from './Cay';
import Kahve from './Kahve';
import Sut from './Sut';

function Secim(){
    
    const tercih = function(x){

        const div = ReactDOM.createRoot(document.getElementById("aciklama"));

        if(x=='1'){   
            div.render(
                <Cay />
            );
        }
        else if(x == '2'){
            div.render(
                <Kahve/>
            );
        }
        else if(x == '3'){
            div.render(
                <Sut/>
            );
        }



    }

    return (
        <>
        <button onClick={() => tercih('1')} >Çay</button>
        <button onClick={() => tercih('2')} >Kahve</button>
        <button onClick={() => tercih('3')} >Sut</button>
        <div id="aciklama"></div>
        </>
    );

}

export default Secim;