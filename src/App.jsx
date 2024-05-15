import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { useTranslation } from "react-i18next";
import { Helmet,  HelmetProvider } from "react-helmet-async";

function App() {
  const [t] = useTranslation("global");

  return (
    <HelmetProvider>
    <div className="min-h-[100vh] bg-slate-950 font-display max-w-full grid place-items-center">
      <BrowserRouter>
        <Helmet htmlAttributes={{ lang: t("htmlLang") }}>
          <title>{t("meta_title")}</title>
          <meta name="description" content={t("meta_description")} />
          <meta name="keywords" content={t("meta_keywords")} />
          <meta name="og:title" content={t("meta_title")} />
          <meta name="og:description" content={t("meta_description")} />
        </Helmet>
        <AppRoutes />
      </BrowserRouter>
    </div>
    </HelmetProvider>
  );
}

export default App;
