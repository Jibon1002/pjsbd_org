import WhatsAppButton from "./components/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Global Notifications */}
      <Toaster />
      <Sonner />

      <BrowserRouter>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Add more routes here as needed */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* WhatsApp Floating Button: visible on all pages */}
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
