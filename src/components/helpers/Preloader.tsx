import React from 'react';
import Image from "mui-image";

const Preloader = () => {
    return (
        <div style={{ position:'fixed' , left:'50%' , top:'50%', transform: 'translate(-50%, -50%)', display:'flex', justifyContent:'center', alignItems:'center'}} >
            <Image
                src ='https://dsps.univ-paris13.fr/wp-content/uploads/lg.earth-globe-map-spinner.gif '
                 width={'700px'}
                height={'700px'}

            />
        </div>
    );
};

export default Preloader;