import Game from "./Game";

const GameList = (props) => {

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        gridAutoRows: "minmax(300px, auto)", // Set the minimum height of each row to 300px
      };
      
    return (
        <div style={gridStyle}>
          {props.games.map(game => <Game key={game.id} game={game}/>)}
        </div>
       
    )

}

export default GameList