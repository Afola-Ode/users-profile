import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Search from "./components/Search";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <section className="wrapper">
      <Search setSearchQuery={setSearchQuery} />
      <Card searchQuery={searchQuery} />
    </section>
  );
}
export default App;