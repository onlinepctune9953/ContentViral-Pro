
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import SalesPage from "./pages/SalesPage";
import OTO1Page from "./pages/OTO1Page";
import OTO2Page from "./pages/OTO2Page";
import OTO3Page from "./pages/OTO3Page";
import OTO4Page from "./pages/OTO4Page";
import OTO5Page from "./pages/OTO5Page";
import DownsellPage from "./pages/DownsellPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import AuthCallbackPage from "./pages/auth/AuthCallbackPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/auth/callback" element={<AuthCallbackPage />} />
            <Route path="/oto1" element={<OTO1Page />} />
            <Route path="/oto2" element={<OTO2Page />} />
            <Route path="/oto3" element={<OTO3Page />} />
            <Route path="/oto4" element={<OTO4Page />} />
            <Route path="/oto5" element={<OTO5Page />} />
            <Route path="/downsell/:product" element={
              <DownsellPage 
                originalProduct="Advanced Research Suite"
                originalPrice={297}
                downsellProduct="Research Lite"
                downsellPrice={47}
                features={[
                  "Basic trend analysis",
                  "Limited competitor insights", 
                  "Weekly viral score reports",
                  "Email support"
                ]}
                urgency="This offer expires in 10 minutes and will never be available again!"
              />
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
