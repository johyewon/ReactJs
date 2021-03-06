import React from "react";
import styled from "styled-components/native";
import { useColorScheme } from "react-native";

const Score = styled.Text<{ isDark: boolean }>`
  color: ${(props) => (props.isDark ? "white" : props.theme.textColor)};
  font-size: 10px;
  font-weight: 600;
`;

interface VoteProps {
  average: number;
}

const Vote: React.FC<VoteProps> = ({ average }) => {
  const isDark = useColorScheme() === "dark";

  return <Score>{average == 0 ? `Coming soon` : `⭐️ ${average}/10`}</Score>;
};

export default Vote;
