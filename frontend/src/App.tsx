import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

import { Routes, Route } from "react-router";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />

        <div className="min-h-screen bg-background text-foreground">
          <div className="m-5">
            <ModeToggle />
          </div>
          <Routes>
            {/* <Route index element={<Home />} />
          <Route path="about" element={<About />} /> */}

            <Route>
              <Route path="home" element={<ProtectedRoute />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>

            {/* <Route path="concerts">
            <Route index element={<ConcertsHome />} />
            <Route path=":city" element={<City />} />
            <Route path="trending" element={<Trending />} />
          </Route> */}
          </Routes>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
