import React from "react";
import Slideshow from './Banner';
import '../styles/Apropos.css';

const Apropos= ()=>{
    let img = require('../pics/banner3.webp')
    let img2 = require('../pics/people1.png')
    return(
        <div class="d-flex flex-column h-100">
    
        <main class="flex-shrink-0">
       
            <header id="header-a" class="bg-secondary py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">A propos de <br/><h1 class="display-5 fw-bolder text-white mb-2">Nous</h1></h1>
                                <p class="lead fw-normal text-white-50 mb-4">PRO-tection est une nouvelle venue sur le marché, ayant débuté ses activités le 1er janvier 2024, spécialisée dans la production de hard cases. Nous avons rassemblé une équipe de cadres compétents, forts d'années d'expérience dans le domaine de la manufacture et possédant une grande expertise dans les emballages de protection. Notre engagement est de fournir des hard cases de haute qualité avec une gamme variée pour répondre à différents besoins. Nous cherchons à bâtir une solide réputation basée sur la fabrication sur mesure et sur le dévouement envers une approche centrée sur le client.</p>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src={img} alt="..." /></div>
                    </div>
                </div>
            </header>
            
            <section class="py-5" id="features">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5 mb-lg-0"><h2 class="fw-bolder mb-0">NOS VALEURS</h2><img id="case-img2" className="img-fluid" src={img2}></img> </div>
                          
                        <div class="col-lg-8">
                            <div class="row gx-5 row-cols-1 row-cols-md-2">
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-person-badge"></i></div>
                                    <h2 class="h5">FOCALISATION SUR LE CLIENT</h2>
                                    <p class="mb-0"> un service à la clientèle pratique et sans tracas avec une qualité supérieure et une garantie inégalée.</p>
                                </div>
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-heart"></i></div>
                                    <h2 class="h5"> RESPECT</h2>
                                    <p class="mb-0">Une culture d'intégrité et d'humilité. Traiter les autres comme nous souhaitons être traités nous-mêmes.</p>
                                </div>
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-shield-check"></i></div>
                                    <h2 class="h5">RESPONSABILITÉ </h2>
                                    <p class="mb-0">soutenir notre industrie, nos communautés locales et l'environnement.</p>
                                </div>
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-people"></i></div>
                                    <h2 class="h5"> DIVERSITÉ</h2>
                                    <p class="mb-0">Renforcer les équipes et les solutions en tirant parti de la diversité des perspectives et des connaissances.</p>
                                </div>
                                <div class="col mb-5 mb-md-0 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-question-square"></i></div>
                                    <h2 class="h5"> CURIOSITÉ</h2>
                                    <p class="mb-0">rechercher des perspectives nouvelles, innovantes et diverses dans une culture d'amélioration continue.</p>
                                </div>
                                <div class="col h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-people-fill"></i></div>
                                    <h2 class="h5">TRAVAIL D'ÉQUIPE </h2>
                                    <p class="mb-0">Nous avons tous la passion de gagner, mais au bout du compte, c'est l'ensemble que nous gagnons ou que nous perdons.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         
            <div class="py-5 bg-light">
                <div class="container px-5 my-5">
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-10 col-xl-7">
                            <div class="text-center">
                                <div class="fs-4 mb-4 fst-italic">"Chez PRO-tection, nous croyons en la protection sans compromis du style. Découvrez notre sélection de hard cases qui allient durabilité et esthétique pour protéger vos gadgets avec confiance, sans sacrifier l'apparence."</div>
                                <div class="d-flex align-items-center justify-content-center">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            
        </main>

        </div>
    );
}
export default Apropos;