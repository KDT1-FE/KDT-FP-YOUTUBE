import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import "./App.css";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import { ApiProvider } from "./context/ApiContext";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <DarkModeProvider>
        <SearchHeader />
        <ApiProvider>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </ApiProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
