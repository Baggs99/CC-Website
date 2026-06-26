import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { FullTimeRecruitingPage } from "./pages/FullTimeRecruitingPage";
import { HomePage } from "./pages/HomePage";
import { OfficeMapPage } from "./pages/OfficeMapPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/full-time-recruiting"
            element={<FullTimeRecruitingPage />}
          />
          <Route
            path="/full-time-recruiting/office-map"
            element={<OfficeMapPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
