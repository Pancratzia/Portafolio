import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function App() {

  return (
    <div className="min-h-screen bg-slate-950 font-display max-w-screen">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App
