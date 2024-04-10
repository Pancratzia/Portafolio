import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { useTranslation } from "react-i18next";
import { Helmet,  HelmetProvider } from "react-helmet-async";

function App() {
  const [t] = useTranslation("global");

  return (
    <HelmetProvider>
    <div className="min-h-screen bg-slate-950 font-display max-w-screen">
      <BrowserRouter>
        <Helmet htmlAttributes={{ lang: t("htmlLang") }}>
          <title>{t("meta_title")}</title>
        </Helmet>
        <AppRoutes />
      </BrowserRouter>
    </div>
    </HelmetProvider>
  );
}

export default App;
