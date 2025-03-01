import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/Sidebar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger /> */}
      <App />
      {/* </SidebarProvider> */}
    </BrowserRouter>
  </StrictMode>
);
