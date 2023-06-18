import {FC, ReactNode} from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';

interface BreadcrumbsProps {
  children: ReactNode;
}

interface CrumbProps {
  href: string;
  children: ReactNode;
  delegated?: any;
}

interface BreadCrumbsComposition extends FC<BreadcrumbsProps> {
  Crumb: FC<CrumbProps>;
}

const Breadcrumbs: BreadCrumbsComposition = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};

const Crumb: FC<CrumbProps> = ({href, children, delegated}) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href} {...delegated}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

const CrumbWrapper = styled.div`
  &:not(:first-of-type) {
    margin-left: 8px;

    &::before {
      content: '/';
      margin-right: 8px;
      color: ${COLORS.gray[300]};
    }
  }
`;

const CrumbLink = styled.a`
  color: ${COLORS.gray[700]};
  text-decoration: none;

  &:hover {
    color: ${COLORS.gray[900]};
  }
`;

const Wrapper = styled.nav`
  display: flex;
  font-size: 0.875rem;
`;

Breadcrumbs.Crumb = Crumb;

export default Breadcrumbs;
