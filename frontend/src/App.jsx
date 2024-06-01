import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
