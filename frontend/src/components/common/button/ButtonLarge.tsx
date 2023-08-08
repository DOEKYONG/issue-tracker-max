import { styled } from 'styled-components';
import Button from './BaseButton';

const ButtonLarge = styled(Button)`
  width: ${({ flexible }) => (flexible ? 'auto' : '240px')};
  height: 56px;
  ${({ theme }) => theme.font.available.medium[20]}

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default ButtonLarge;
