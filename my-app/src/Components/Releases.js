import {React, useContext } from "react";
import AnimeContext from "../context/context";
function Releases() {
  const { releaseState }  = useContext(AnimeContext);
  return (

    <div className="main">

      <h2 className="releasedh2">Release Animes</h2>
      <div className="released">

        {releaseState.map((element) => (
          <div className="content">
            <p>{element.animeTitle}</p>

            <a target="_blank" rel="" href={element.episodeUrl}>
              <img className="only" src={element.animeImg} alt={element.animeTitle} />
            </a>
            <a target="_blank" href={element.episodeUrl} className="linkText">
              <p>Episode: {element.episodeNum}</p></a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Releases;