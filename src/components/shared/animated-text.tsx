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

const Text = styled.h1<{ size: string }>`
  font-size: ${(props) => props.size};
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
  text-align: left;
`;

interface AnimatedTextProps {
  children: React.ReactNode;
  size?: string;
}

const AnimatedText = ({ children, size = "2rem" }: AnimatedTextProps) => {
  return <Text size={size}>{children}</Text>;
};

export default AnimatedText;
