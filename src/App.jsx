import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Forecast from "./pages/Forecast";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="w-full bg-backgroundColor  min-h-screen">
      <QueryClientProvider client={queryClient}>
        <Forecast />
      </QueryClientProvider>
    </div>
  );
}
export default App;
