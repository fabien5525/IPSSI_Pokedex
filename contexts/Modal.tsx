import { Field, Form, Formik, FormikHelpers } from "formik";
import { createContext, ReactNode, useContext, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";

type appContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const appContextValues: appContextType = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
};

const AppContext = createContext<appContextType>(appContextValues);

export function useModal() {
  return useContext(AppContext);
}

type Props = {
  children: ReactNode;
};

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const StyledModal = styled(Modal)`
  width: 50vw;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  color: rgba(22, 20, 20, 0.63);

  background: url("https://cdn.discordapp.com/attachments/975885015806263399/983086626395795566/unknown.png")
    no-repeat center center fixed;
  background-size: cover;
`;

const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  padding: 65px 0;
  background: linear-gradient(rgba(185, 149, 4, 0.651), #b7f707e2 60%);
`;

const StyledRow = styled.div`
  text-align: center;
  margin: 20px 0;
  label {
    margin-right: 0.5rem;
  }
`;

const StyledField = styled(Field)`
  text-align: center;
  border: 0;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-bottom: 1px solid #210097;
  background: transparent;
  color: #000000;
`;

interface Values {
  name: string;
  email: string;
  message: string;
}

export function ModalProvider({ children }: Props) {
  const [isOpen, setOpen] = useState<boolean>(false);

  function openModal() {
    setOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setOpen(false);
  }

  const value = {
    isOpen,
    openModal,
    closeModal,
  };

  return (
    <AppContext.Provider value={value}>
      <StyledModal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact"
      >
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              //console.log(values);
              //Je sais que c'est pas la bonne méthode mais sa marche ^^'
              window.open(
                `mailto:f.colard@ecole-ipssi.net?subject=PokedexReactJS&body=Name: ${values.name}%0AEmail: ${values.email}%0AMessage: ${values.message}`,
                "_blank"
              );
              setSubmitting(false);
            }, 500);
          }}
        >
          <StyledForm action="mailto:f.colard@ecole-ipssi.net">
            <StyledRow>
              <label htmlFor="name">Name</label>
              <StyledField id="name" name="name" placeholder="Name" required />
            </StyledRow>
            <StyledRow>
              <label htmlFor="email">Email</label>
              <StyledField
                id="email"
                name="email"
                placeholder="contact@example.com"
                type="email"
                required
              />
            </StyledRow>
            <StyledRow>
              <label htmlFor="message">Message</label>
              <StyledField
                id="message"
                name="message"
                placeholder="Hello world!"
                type="text"
                required
              />
            </StyledRow>
            <StyledRow>
              <button type="submit">Submit</button>
            </StyledRow>
          </StyledForm>
        </Formik>
      </StyledModal>
      {children}
    </AppContext.Provider>
  );
}
