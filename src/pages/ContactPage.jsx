import { useTranslation } from "react-i18next";
import Form from "../components/Contact/Form";
import MainLayout from "../components/Layouts/MainLayout";

const ContactPage = () => {

  const [t] = useTranslation("global");

  return (
    <MainLayout title={`< ${t("pages.contact.title")} />`} pageName={"Contact"}>
      <main className="my-5">
        <Form />
      </main>
    </MainLayout>
  );
};

export default ContactPage;
