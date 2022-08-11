import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { ThreeDots } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

export const App = () => {
  const loading = useSelector(state => state.contacts.pending);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        {loading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="royalblue"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              display: 'flex',
              justifyContent: 'center',
            }}
            wrapperClassName=""
            visible={true}
          />
        )}
        <Filter />

        <ContactsList />
      </Section>
    </>
  );
};
