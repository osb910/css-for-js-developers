import {FC} from 'react';
import styled from 'styled-components';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid: FC = () => {
  return (
    <Wrapper>
      {SHOES.map(shoe => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ShoeGrid;
