import List from "./Pages/List";
import SavedList from "./Pages/SavedList";
import Details from "./Pages/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/saved" element={<SavedList />} />
        <Route path="*" element={<List />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
