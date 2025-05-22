import React from "react";
import { motion } from "framer-motion";
import imageLeft from "../../assets/img.png";
import sym from "../../assets/sym.jpg";
import "./style.css";

function LanguePage() {
  return (
    <div className="row">
      <div className="col-md-6">
        <img src={imageLeft} alt="Amazigh tradition" className="img-fluid" />
      </div>

      <div className="col-md-6 text-block ">
        <h2 className="title-langue">La Langue des Amazighs</h2>

        <p className="styled-paragraph">
          En Tunisie, la langue amazighe est parlée par certaines communautés berbérophones, principalement dans le sud du pays, notamment à
          <ul>
            <li>Matmata</li>
            <li>Douz</li>
            <li>Tataouine</li>
            <li>et dans d'autres villages du désert</li>
          </ul>
          Le dialecte amazigh tunisien, appelé "<strong>Tamazight du Sud</strong>", fait partie de la branche <strong>chalie</strong> des langues berbères,
          proche de celui parlé en Algérie, mais avec des particularités locales. Bien que l’amazighe soit principalement une langue orale, elle bénéficie de certains efforts pour sa préservation,
          notamment à travers des associations culturelles et des initiatives éducatives visant à la réintroduire dans les écoles et les médias. L’alphabet <strong>tifinagh</strong> est parfois utilisé pour l’écriture, mais l’arabe et le français dominent largement dans la vie quotidienne.
          Malgré la reconnaissance officielle de la culture amazighe, la langue reste marginale par rapport à l'arabe et au français, qui sont plus couramment utilisés dans les institutions et dans les interactions quotidiennes.
        </p>
      </div>

    
      <h2 className="title-traduction">Traduction</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
     
        <div className="input-card">
          <h3 className="text-xl font-semibold text-gray-700">Entrez du texte</h3>
          <textarea className="w-full h-32 p-4 mt-2 border rounded-lg" placeholder="Écrivez ici..."></textarea>
        </div>
       
        <div className="output-card">
          <h3 className="text-xl font-semibold text-gray-700">Traduction</h3>
          <div className="w-full h-32 p-4 mt-2 border rounded-lg bg-gray-100"></div>
        </div>
      </div>



    </div>

  );
}

export default LanguePage;
