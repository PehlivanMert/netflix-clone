import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Row from "./Components/Row/Row";
import { rows } from "./Helper/rows";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />

      {rows.map((row) => (
        <Row
          key={row.id}
          title={row.title}
          id={row.id}
          fetchUrl={row.fetchUrl}
          isLargeRow={row.isLargeRow}
        />
      ))}
    </div>
  );
}

export default App;
