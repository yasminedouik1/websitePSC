import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import hair from "../../assets/hair.jpg";
import woman from "../../assets/img.png";
import w3 from "../../assets/w3.jpg";
import tapis from "../../assets/tapis.jpg";
import flag from "../../assets/flag.png";


function TraditionCulture() {
  return (
    <div className="container tradition-culture">
      <h1 className="titre text-center ">Tradition et culture</h1>
      
        <div className="row mt-3">
                <div className="col-md-6">
          <img src={flag} alt="Amazigh heritage" className="img-fluid" />
        </div>
        <div className="col-md-6 text-block green-bg c2">
        <h2>Drapeau d'Amazigh</h2>
        <p>
          Tamazgha est le nom amazigh de l’Afrique du Nord, allant de l’oasis de Siwa en Égypte jusqu’aux îles Canaries. C’était autrefois une terre unie avant la colonisation. Les Amazighs la considèrent comme leur terre ancestrale. Leur drapeau reflète la nature : bleu pour la mer et le ciel, vert pour les montagnes, jaune pour le désert, et le symbole rouge ⵣ représente « l’homme libre » — un signe d’identité, de liberté et de résistance.
</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-block green-bg c2">
          <h2> Fêtes et Célébrations</h2>
          <p>
            Les Amazighs célèbrent des événements marquants comme Yennayer (le Nouvel An amazigh, célébré le 12 ou 13 janvier)
             pour marquer le début de l’année et attirer la chance. Le festival Imilchil est une foire traditionnelle des fiançailles, 
             tandis que Boujloud, célébré après l'Aïd, voit des défilés masqués et festifs.
          </p>
        </div>
        <div className="col-md-6">
          <img src={hair} alt="Amazigh tradition" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <img src="./src/assets/woman.jpg" alt="Amazigh woman" className="img-fluid" />
        </div>
        <div className="col-md-4 text-block white-bg c2">
          <h2> Rites et Symboles</h2>
          <p>
          Les Amazighs pratiquent des rites spirituels, comme le tatouage rituel, souvent porté par les femmes pour la protection
           et la fertilité. Ils vénèrent la baraka (bénédiction) et rendent hommage à des saints locaux à travers des visites 
           de mausolées. Ils respectent profondément la nature, notamment les montagnes et l’eau.
          </p>
        
        </div>
        <div className="col-md-4">
          <img src={w3} alt="Amazigh woman" className="img-fluid" />
        </div>
        
      </div>

      <div className="row mt-3">
                <div className="col-md-6">
          <img src={tapis} alt="Amazigh heritage" className="img-fluid" />
        </div>
        <div className="col-md-6 text-block green-bg c2">
          <h2> Artisanat et Héritage Matériel</h2>
          <p>

          L’artisanat amazigh se distingue par les tapis tissés à la main, les bijoux en argent symboliques et l’architecture en terre,
           avec des villages comme Chenini en Tunisie, où les constructions sont adaptées au climat désertique. Ces objets et structures
            racontent l’histoire et l’identité du peuple amazigh.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TraditionCulture;
