import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import "./index.css";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/pageA" element={<NewMeetupPage />} />
          <Route path="/pageB" element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
