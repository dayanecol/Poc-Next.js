import React from "react";
import axios, { CancelTokenSource } from "axios";

interface IGame {
  id: string;
  name: string;
  gameCount: number;
  imageUrl: string;
  thumbUrl: string;
  images: {
    thumb: string;
    small: string;
    medium: string;
    large: string;
    original: string;
  };
}

const defaultGames: IGame[] = [];

const App = () => {
  const [games, setGames]: [IGame[], (games: IGame[]) => void] =
    React.useState(defaultGames);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] =
    React.useState("");

  const cancelToken = axios.CancelToken; //create cancel token
  const [cancelTokenSource, setCancelTokenSource]: [
    CancelTokenSource,
    (cancelTokenSource: CancelTokenSource) => void
  ] = React.useState(cancelToken.source());

  const handleCancelClick = () => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel("User cancelled operation");
    }
  };

  React.useEffect(() => {
    axios
      .get<IGame[]>(
        "https://api.boardgameatlas.com/api/lists?username=trentellingsen&pretty=true&client_id=JLBr5npPhV",
        {
          cancelToken: cancelTokenSource.token,
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        }
      )
      .then((response) => {
        const { data } = response;
        const { lists } = data;
        setGames(lists);
        setLoading(false);
      })
      .catch((ex) => {
        let error = axios.isCancel(ex)
          ? "Request Cancelled"
          : ex.code === "ECONNABORTED"
          ? "A timeout has occurred"
          : ex.response.status === 404
          ? "Resource Not Found"
          : "An unexpected error has occurred";

        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading && <button onClick={handleCancelClick}>Cancel</button>}
      <ul className="games">
        {games.map((game) => (
          <li key={game.id}>
            <h3>{game.name}</h3>
            <p>{game.id}</p>
            <a href={game.imageUrl}>IMAGEM</a>
          </li>
        ))}
      </ul>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
