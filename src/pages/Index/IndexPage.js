import Card from "../../components/Card/Card";
import ContactList from "../../components/ContactList/ContactList";
import Layout from "../../components/Layout/Layout";

export const IndexPage = () => {

  return (
    <Layout>
      <ContactList users={[
        {
          id: '1',
          name: 'Or Linzer',
          src: '',
          phone: '0505050505',
          email: 'or@mail.com',
          tags: [],
        },
        {
          id: '2',
          name: 'Hilal Sharkawi',
          src: '',
          phone: '0525252525',
          email: 'hilal@mail.com',
          tags: [],
        },
      ]} />
    </Layout>
  );
};

export default IndexPage;
