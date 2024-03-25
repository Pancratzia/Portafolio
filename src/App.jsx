import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {

  return (
    <div className="min-h-screen bg-slate-950">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
