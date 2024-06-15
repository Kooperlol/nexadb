import styled, { keyframes } from "styled-components";

const flash = keyframes`
  0% {
    background-position: 200% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: -200% 50%;
  }
`;

const Text = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(
    270deg,
    #8e2de2,
    #8e2de2,
    #ffffff,
    #8e2de2,
    #8e2de2
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${flash} 4s ease-in-out infinite;
  text-align: center;
`;

const AnimatedText = ({ children }: { children: React.ReactNode }) => {
  return <Text>{children}</Text>;
};

export default AnimatedText;
