import React from "react";
import styled from "styled-components";

// Centering container style
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
`;

const Container = styled.div`
  background-color: #333; /* Dark grey background, unchanged */
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 800px; /* Increased width */
  max-width: 100%;
  min-height: 500px; /* Increased height */
  color: #fff; /* White text color */
`;

const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signinIn !== true
      ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
      : null}
`;

const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(100%);` : null}
`;

const Form = styled.form`
  background-color: #333; /* Dark grey background, unchanged */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  margin: 0;
  color: #fff; /* White text color */
`;

const Input = styled.input`
  background-color: #555; /* Slightly lighter grey for inputs */
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  color: #fff; /* White text color */
  caret-color: #5e60ce; /* Cursor color to match button */
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #5e60ce;
  background-color: #5e60ce; /* Updated button color */
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;

const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

const Anchor = styled.a`
  color: #fff; /* White text color */
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

const Overlay = styled.div`
  background: linear-gradient(to right, #5e60ce, #fd79a8); /* Updated gradient: Purple to Orangish-Pink */
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(50%);` : null}
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(0);` : null}
`;

const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(20%);` : null}
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  color: #fff; /* White text color */
`;

const LoginSignup = () => {
  const [signIn, toggle] = React.useState(true);

  return (
    <CenteredContainer>
      <Container>
        <SignUpContainer signinIn={signIn}>
          <Form>
            <Title>Create Account</Title>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Sign Up</Button>
          </Form>
        </SignUpContainer>

        <SignInContainer signinIn={signIn}>
          <Form>
            <Title>Sign In</Title>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Anchor href="#">Forgot your password?</Anchor>
            <Button>Sign In</Button>
          </Form>
        </SignInContainer>

        <OverlayContainer signinIn={signIn}>
          <Overlay signinIn={signIn}>
            <LeftOverlayPanel signinIn={signIn}>
              <Title>Welcome Back!</Title>
              <Paragraph>
                To keep connected with us please login with your personal info
              </Paragraph>
              <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
            </LeftOverlayPanel>

            <RightOverlayPanel signinIn={signIn}>
              <Title>Hello!</Title>
              <Paragraph>
                Enter your personal details and start your journey with us
              </Paragraph>
              <GhostButton onClick={() => toggle(false)}>Sign Up</GhostButton>
            </RightOverlayPanel>
          </Overlay>
        </OverlayContainer>
      </Container>
    </CenteredContainer>
  );
};

export default LoginSignup;
