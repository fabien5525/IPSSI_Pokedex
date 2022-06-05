import { ErrorMessage, Field, Formik, Form, FormikHelpers } from "formik";
import styled from "styled-components";

const StyledMain = styled.main`
  width: 50vw;
  transform: translate(50%, 25%);
  overflow: hidden;
  position: relative;
  background: url("https://lh3.googleusercontent.com/6ObGgH3qiiOYrkZyd2dsxvvaulkjw2h-RF-I9764grYVGxz6dM_SYOW7EfUkvTIgUxtKOmpnYBrH0tDkJvsoYGLPYtAfgs_hM06Oyxo2QyiB19nNAOA0lqgQAX5Pf1i7qjCCN54cJnGW3jsmA2YbhHaL3cMSdKY8hzOk7QGXxyAALPANU-aQs88FlS9RT8uaL59K4yhFFHBhZzTZ9aj3dWxgrT0FRJy5fQJjM6qEZTnsrAc9cstFsyyYX7tHSQasMc9ER7ypAQjPHqj9gxEjLz4DDPFgY4vBx_3XgQ-fD5QdxCR3N5XuxFfovbeKwI2sPCfr4uP2IhNW684qPHD2uH1GCE1FQ8JZt8IXpsNevzVE0yNOmFGcHa064wGkTPCtjTQcZ0Y6KOnqBUDfKWqt5UkkKGz_C5QM3sDuMUHa6cNmwejLkF-RDrWNnPr_-6MYIziztw7ExYZYJ71HWEyPNRqREeSO6wgw2O38OyzTwE_eJ4K0KOYyqVGL8Jw9tn6bKpLJsoVtQ17rXg0N57uG41Jqa-P5q8AltDWmsePSzBstx5pAFbcrRkizwESHAlV_JnsYcNeIFUZTOSKDxZuvlafr9PVK3dbIdEp1EHz6QnM_6MCXRSaaP3Nu9FocxRd_nlOGDG1X-_sBpXLsmooM7bGmopx1HzUux9ROKzPyJg=w1135-h638-no")
    no-repeat;
  background-size: cover;
  border-radius: 10px;
  color: rgba(22, 20, 20, 0.63);
`;

const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  padding: 65px 0;
  background: linear-gradient(rgba(255, 202, 0, 0.4), #ffca00 60%);
`;

const StyledRow = styled.div`
  text-align: center;
  margin: 20px 0;
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

const ContactForm = () => {
  return (
    <StyledMain>
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
            console.log(values);
            window.open(`mailto:f.colard@ecole-ipssi.net?subject=PokedexReactJS&body=Name: ${values.name}%0AEmail: ${values.email}%0AMessage: ${values.message}`, '_blank');
            setSubmitting(false);
          }, 500);
        }}
      >
        <StyledForm action="mailto:f.colard@ecole-ipssi.net">
          <StyledRow>
            <label htmlFor="name">Name</label>
            <StyledField id="name" name="name" placeholder="John" />
          </StyledRow>
          <StyledRow>
            <label htmlFor="email">Email</label>
            <StyledField
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />
          </StyledRow>
          <StyledRow>
            <label htmlFor="message">Message</label>
            <StyledField
                id="message"
                name="message"
                placeholder="Hello"
                type="text"
            />
          </StyledRow>
          <StyledRow>
            <button type="submit">Submit</button>
          </StyledRow>
        </StyledForm>
      </Formik>
    </StyledMain>
  );
};

const Contact = () => {
  return <ContactForm />;
};

export default Contact;
