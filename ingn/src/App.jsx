import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { HomePage } from "./pages/HomePage";
import { InternationalPage } from "./pages/categories/InternationalPage";
import { NationalPage } from "./pages/categories/NationalPage";
import { PoliticsPage } from "./pages/categories/PoliticsPage";
import { SocietyPage } from "./pages/categories/SocietyPage";
import { SportsPage } from "./pages/categories/SportsPage";
import { TechnologyPage } from "./pages/categories/TechnologyPage";
import { OneArticle } from "./pages/ArticlePage";
import { NotFoundPage } from "./pages/NotFoundPage";

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
            <Route path="/article/:id" element={<OneArticle />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
