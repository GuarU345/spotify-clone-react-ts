import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages/Main";
import { AlbumPage } from "./pages/AlbumPage";
import { PlaylistPage } from "./pages/PlaylistPage";
import { Auth } from "./components/Auth";
import { useAuthStore } from "./store/useAuthStore";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";
import { Search } from "./components/Search";
import "birdies/dist/style.css";

function App() {
  const { isLogin } = useAuthStore();
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route element={<ProtectedRoutes isAllowed={isLogin} />}>
              <Route path="/home" element={<Main />} />
              <Route path="/album/:albumId" element={<AlbumPage />} />
              <Route path="/playlist/:playlistId" element={<PlaylistPage />} />
              <Route path="/search" element={<Search />} />
            </Route>
            <Route path="/signin" element={<Auth isLogin={isLogin} />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="bottom-center" />
      </QueryClientProvider>
    </>
  );
}

export default App;
