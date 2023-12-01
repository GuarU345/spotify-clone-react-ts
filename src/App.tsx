import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main";
import { AlbumPage } from "./pages/AlbumPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/album/:id" element={<AlbumPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
