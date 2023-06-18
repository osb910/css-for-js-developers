import {FC} from 'react';
import styled from 'styled-components';

import {WEIGHTS} from '../../constants';

const Logo: FC = delegated => {
  return (
    <Link href='/'>
      <Wrapper {...delegated}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;
