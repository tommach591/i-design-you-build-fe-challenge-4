import "./Game.css";

function Game({ isMobile, gameInfo }) {
  function getWeb() {
    return gameInfo ? (
      <div
        className="Game"
        onClick={() => {
          window.location.href = gameInfo.link;
        }}
      >
        <img className="GameImage" src={gameInfo.image} alt="" />
        <div className="GameDescription">
          <h1 className="GameName">{gameInfo.title}</h1>
          <h2 className="GameTags">{gameInfo.tags.join(", ")}</h2>
          <div className="Bar" />
          <h1 className="GamePrice">
            {gameInfo.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h1>
        </div>
      </div>
    ) : (
      <div />
    );
  }

  function getMobile() {
    return <div>Mobile</div>;
  }

  return isMobile ? getMobile() : getWeb();
}

export default Game;
