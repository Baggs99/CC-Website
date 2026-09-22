import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { legacyRedirects } from "./lib/legacyRoutes";
import { DigitalPresencePage } from "./pages/DigitalPresencePage";
import { FullTimeRecruitingPage } from "./pages/FullTimeRecruitingPage";
import { HomePage } from "./pages/HomePage";
import { OfficeMapPage } from "./pages/OfficeMapPage";
import { ResumeReviewPage } from "./pages/ResumeReviewPage";
import { ZoomRedirectPage } from "./pages/ZoomRedirectPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(legacyRedirects).map(([from, to]) => (
          <Route
            key={from}
            path={from}
            element={<Navigate to={to} replace />}
          />
        ))}

        <Route path="/zoom" element={<ZoomRedirectPage />} />

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
          <Route path="/resume-review" element={<ResumeReviewPage />} />
          <Route path="/digital-presence" element={<DigitalPresencePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
