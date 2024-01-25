import styled from "styled-components";

const StyledFormContainer = styled.div`
  padding: 2rem;
  margin: 6rem;
  background-color: var(--primary-color-light);
  border-radius: 5px;
  width: 80rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  input,
  textarea,
  button {
    font-size: 2rem;
    padding: 1rem;
    border-radius: 5px;
    border: none;
  }
`;

const Name = styled.input`
  grid-column: span 2;
`;
const Phone = styled.input``;
const Email = styled.input`
  grid-column: span 3;
`;
const Message = styled.textarea`
  grid-column: span 3;
`;
const ButtonSubmit = styled.button`
  grid-column: 3/4;
  background-color: var(--primary-color);
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    color: var(--terciary-color);
    box-shadow: none;
  }
`;

function FormContainer() {
  return (
    <StyledFormContainer>
      <Form
        action="https://formsubmit.co/amiguelmoreno00@gmail.com"
        method="POST"
      >
        <Name name="name" type="text" id="name" placeholder="Name" required />

        <Phone name="telefono" type="tel" id="tel" placeholder="Phone Number" />

        <Email
          name="correo"
          type="email"
          id="email"
          placeholder="Email"
          required
        />

        <Message
          id="mensaje"
          name="mensaje"
          rows="5"
          placeholder="Leave a message here...I will answer you as soon as possible 😊"
        ></Message>

        <input
          type="hidden"
          name="_next"
          value="https://amiguelmoreno.netlify.app/thanks.html"
        ></input>
        <input type="hidden" name="_captcha" value="true" />
        <ButtonSubmit type="submit">Submit</ButtonSubmit>
      </Form>
    </StyledFormContainer>
  );
}

export default FormContainer;
