import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Databases from "./pages/Databases";
import Training from "./pages/Training";
import Gigwa from "./pages/Gigwa";
import Members from "./pages/Members";
import Publications from "./pages/Publications";
import Projects from "./pages/Projects";
import TermsOfUse from "./pages/TermsOfUse";
import OpenScience from "./pages/OpenScience";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="southgreen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/databases" element={<Databases />} />
          <Route path="/genome-hubs" element={<Navigate to="/databases?section=genome-hubs" replace />} />
          <Route path="/training" element={<Training />} />
          <Route path="/gigwa" element={<Gigwa />} />
          <Route path="/members" element={<Members />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/open-science" element={<OpenScience />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
