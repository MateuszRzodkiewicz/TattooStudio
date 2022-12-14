import React, { useState } from "react";
import unicorn from "../../../assets/DudesLegoPics/unicorn.jpg";
import batman from "../../../assets/DudesLegoPics/batman.jpg";
import stormtroopers from "../../../assets/DudesLegoPics/stormtroopers.jpg";
import unicorn2 from "../../../assets/DudesLegoPics/unicorn2.jpg";
import batman2 from "../../../assets/DudesLegoPics/batman2.jpg";
import stormtroopers2 from "../../../assets/DudesLegoPics/stormtroopers2.jpg";
import "../../../Css/Dudes.css";

const dudesLegoPics = [
  { dudesImg: batman, dudesImg2: batman2, id: 0, artistName: "Majk Rosal" },
  { dudesImg: unicorn, dudesImg2: unicorn2, id: 1, artistName: "Anna Green" },
  {
    dudesImg: stormtroopers,
    dudesImg2: stormtroopers2,
    id: 2,
    artistName: "Majkel Jordan",
  },
];

function Dudes2() {
  const [hover, setHover] = useState(false);
  const [artName, setArtName] = useState("");

  const hoverImgTrue = (artt) => {
    setHover(true);
    setArtName(artt);
  };
  const hoverImgFalse = () => {
    setHover(false);
  };

  const dudesPics1 = dudesLegoPics.map((dude) => (
    <div key={dude.id} className="positionRelative">
      <img
        className="dudes2jpg"
        key={dude.id}
        src={dude.dudesImg2}
        alt={dude.artistName}
      />
      <p className="artistNameForMobile">{dude.artistName}</p>
      <img
        className="dudesjpg dudes2jpg"
        onMouseEnter={() => {
          hoverImgTrue(dude.artistName);
        }}
        onMouseLeave={hoverImgFalse}
        key={dude.artistName}
        src={dude.dudesImg}
        alt={dude.artistName}
      />
    </div>
  ));

  return (
    <div id="dudes">
      <h1>Odkryj naszą ekipe</h1>
      <div className="containerFlex">{dudesPics1}</div>
      <h1 className="dudeName">{hover ? artName : "Tatto Studio"}</h1>
    </div>
  );
}

export default Dudes2;
