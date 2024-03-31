import Form from "../components/Contact/Form";
import MainLayout from "../components/Layouts/MainLayout";

const ContactPage = () => {

  return (
    <MainLayout title={"< Contact Me />"} pageName={"Contact"}>
      <main className="my-5">
        <Form />
      </main>
    </MainLayout>
  );
};

export default ContactPage;
