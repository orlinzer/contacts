import Card from "../../components/Card/Card";
import ContactList from "../../components/ContactList/ContactList";
import Layout from "../../components/Layout/Layout";

export const IndexPage = () => {

  return (
    <Layout>
      <ContactList users={[
        {
          name: 'or',
          src: '',
          phone: '0505050505',
          email: 'or@mail.com',
          tags: [],
        }
      ]} />
    </Layout>
  );
};

export default IndexPage;
