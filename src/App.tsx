import { createBrowserRouter, Link, RouterProvider } from "react-router";
import { TicTacToe } from "./components/tic-tac-toe/tic-tac-toe";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
        <Link to="tic">Tic Tac Toe</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "tic",
    element: <TicTacToe/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />,
    </div>
  );
}

export default App;
