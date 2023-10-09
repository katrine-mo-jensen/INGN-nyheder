import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { HomePage } from "./pages/HomePage";
import { InternationalPage } from "./pages/InternationalPage";
import { NationalPage } from "./pages/NationalPage";
import { PoliticsPage } from "./pages/PoliticsPage";
import { SocietyPage } from "./pages/SocietyPage";
import { SportsPage } from "./pages/SportPage";
import { TechnologyPage } from "./pages/TechnologyPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/udland" element={<InternationalPage />} />
            <Route path="/indland" element={<NationalPage />} />
            <Route path="/politik" element={<PoliticsPage />} />
            <Route path="/samfund" element={<SocietyPage />} />
            <Route path="/sport" element={<SportsPage />} />
            <Route path="/teknologi" element={<TechnologyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
