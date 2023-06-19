import {FC, ChangeEvent, Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';

import {WEIGHTS} from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

interface ShoeIndexProps {
  sortId: string;
  setSortId: Dispatch<SetStateAction<string>>;
}

const ShoeIndex: FC<ShoeIndexProps> = ({sortId, setSortId}) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label='Sort'
            value={sortId}
            onChange={(evt: ChangeEvent<HTMLSelectElement>) =>
              setSortId(evt.target.value)
            }
          >
            <option value='newest'>Newest Releases</option>
            <option value='price'>Price</option>
          </Select>
        </Header>
        <Spacer size={34} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href='/sale/shoes'>Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: baseline;
  gap: 4em;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25em;
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex: 1;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
