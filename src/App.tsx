import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main";
import { AlbumPage } from "./pages/AlbumPage";
import { PlaylistPage } from "./pages/PlaylistPage";
import { Signin } from "./pages/auth/Signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/home" element={<Main />} />
          <Route path="/album/:id" element={<AlbumPage />} />
          <Route path="/playlist/:id" element={<PlaylistPage />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
