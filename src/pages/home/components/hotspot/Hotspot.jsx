import './Hotspot.css';

function Hotspot() {
    return (
        <div className="container" id="container">
            <div className="box" id="box">
                <p>ASPR (Asociația Studenților Psihologi din România) reprezintă studenții
                de la Facultatea de Psihologie și Științe ale Educației, UBB, Cluj-Napoca. <br />
                De 33 de ani, ASPR se asigură că studenții sunt ascultați, sprijiniți <br /> și că drepturile lor
                sunt respectate de către conducerea Facultății de Psihologie și Științe ale Educației și nu numai.  
                </p>
            </div>

            <div className="hotspot h1">
                {/* <div class="tooltip">Top feature</div> */}
            </div>

            <div className="hotspot h2">
                {/* <div class="tooltip">Left feature</div> */}
            </div>

            <div className="hotspot h3">
                {/* <div class="tooltip">Bottom feature</div> */}
            </div>
         </div>
    );
}

export default Hotspot;