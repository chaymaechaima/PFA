import React from "react";
import Slideshow from './Banner';
import '../styles/Apropos.css';

const Apropos= ()=>{
    let img = require('../pics/case1.jpg')
    let img2 = require('../pics/people1.png')
    return(
        <div>
            <Slideshow/>
            <div class="container" id="product-section">
                <div class="row">
                    <div class="col-md-6">
                        <p id='text' >PRO-tection est une nouvelle venue sur le marché, ayant débuté ses activités le 1er janvier 2024, spécialisée dans la production de hard cases. Nous avons rassemblé une équipe de cadres compétents, forts d'années d'expérience dans le domaine de la manufacture et possédant une grande expertise dans les emballages de protection. Notre engagement est de fournir des hard cases de haute qualité avec une gamme variée pour répondre à différents besoins. Nous cherchons à bâtir une solide réputation basée sur la fabrication sur mesure et sur le dévouement envers une approche centrée sur le client.</p> 
                    </div>
                    <div class="col-md-6">
                        <img id="case-img" className="img-fluid" src={img}></img>   
                    </div>
                </div>
            </div>
            <div class="container" id="product-section">
                <div class="row">
                    <div class="col-md-6">
                        <h2>NOS VALEURS</h2>
                        <br />
                        <h6>FOCALISATION SUR LE CLIENT :<p id='text2'> un service à la clientèle pratique et sans tracas avec une qualité supérieure et une garantie inégalée dans l'industrie.</p></h6>
                        <h6>RESPECT :<p id='text2'> Une culture d'intégrité et d'humilité. Traiter les autres comme nous souhaitons être traités nous-mêmes.</p></h6>
                        <h6>STABILITÉ :<p id='text2'> Fiabilité pour nos clients et nos collaborateurs grâce à la croissance et à l'investissement dans le personnel et l'équipement.</p></h6>
                        <h6>HONNÊTETÉ :<p id='text2'> faire preuve d'authenticité, de sincérité et de transparence dans nos interactions mutuelles et avec nos clients.</p></h6>
                        <h6>CURIOSITÉ :<p id='text2'> rechercher des perspectives nouvelles, innovantes et diverses dans une culture d'amélioration continue.</p></h6>
                        <h6>TRAVAIL D'ÉQUIPE :<p id='text2'> Nous avons tous la passion de gagner, mais au bout du compte, c'est ensemble que nous gagnons ou que nous perdons.</p></h6>
                        <h6>RESPONSABILITÉ :<p id='text2'> soutenir notre industrie, nos communautés locales et l'environnement.</p></h6>
                        <h6>DIVERSITÉ :<p id='text2'> Renforcer les équipes et les solutions en tirant parti de la diversité des perspectives, des connaissances et des cultures.</p></h6>
                        <p id='text2'>









</p> 
                    </div>
                    <div class="col-md-6">
                        <img id="case-img2" className="img-fluid" src={img2}></img>   
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Apropos;