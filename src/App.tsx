import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main";
import { AlbumPage } from "./pages/AlbumPage";
import { PlaylistPage } from "./pages/PlaylistPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/album/:id" element={<AlbumPage />} />
          <Route path="/playlist/:id" element={<PlaylistPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
