import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const IconContainer = styled.View<Props>`
  height: 56px;
  width: 55px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  background-color: #000000;

  
  ${({ isFocused }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: #DC1637;   
  `};
`;


export const InputText = styled(TextInput) <Props>`
  flex: 1;
  background-color: #DCDCDC;
  color: #000000;
  padding: 0 23px;

  ${({ isFocused }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: #00BFFF;    
  `};
`;