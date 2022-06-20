import { Contact, ContactsContainer, ContactImage, ContactName } from "./styles";

const Contacts = () => {
  return (
    <ContactsContainer>
      <div style={{ marginBottom: 50 }}>
        <div style={{ textAlign: "initial", fontFamily: "system-ui" }}>
          Favoritos <hr />
        </div>
        <Contact>
          <ContactImage>C</ContactImage>
          <ContactName>Contato Teste</ContactName>
        </Contact>
        <Contact>
          <ContactImage>F</ContactImage>
          <ContactName>Contato Teste</ContactName>
        </Contact>
        <Contact>
          <ContactImage>M</ContactImage>
          <ContactName>Contato Teste</ContactName>
        </Contact>
        <Contact>
          <ContactImage>F</ContactImage>
          <ContactName>Contato Teste</ContactName>
        </Contact>
      </div>
      <Contact>
        <ContactImage>F</ContactImage>
        <ContactName>Contato Teste</ContactName>
      </Contact>
      <Contact>
        <ContactImage>G</ContactImage>
        <ContactName>Contato Teste</ContactName>
      </Contact>
      <Contact>
        <ContactImage>R</ContactImage>
        <ContactName>Contato Teste</ContactName>
      </Contact>
    </ContactsContainer>
  );
};

export default Contacts;
