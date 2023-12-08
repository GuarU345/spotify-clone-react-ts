import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main";
import { AlbumPage } from "./pages/AlbumPage";
import { PlaylistPage } from "./pages/PlaylistPage";
import { Auth } from "./components/Auth";
import { useAuthStore } from "./store/useAuthStore";
import { ProtectedRoutes } from "./components/ProtectedRoutes";

function App() {
  const { isLogin } = useAuthStore();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route element={<ProtectedRoutes isAllowed={isLogin} />}>
            <Route path="/home" element={<Main />} />
            <Route path="/album/:id" element={<AlbumPage />} />
            <Route path="/playlist/:id" element={<PlaylistPage />} />
          </Route>
          <Route path="/signin" element={<Auth isLogin={isLogin} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
