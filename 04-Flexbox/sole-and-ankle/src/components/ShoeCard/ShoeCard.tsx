import {FC} from 'react';
import styled, {css} from 'styled-components';

import {COLORS, WEIGHTS} from '../../constants';
import {formatPrice, pluralize, isNewShoe} from '../../utils';
import Spacer from '../Spacer';

interface ShoeCardProps {
  slug: string;
  name: string;
  imageSrc: string;
  price: number;
  salePrice?: number;
  releaseDate: string;
  numOfColors: number;
}

const ShoeCard: FC<ShoeCardProps> = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  const variant: 'on-sale' | 'new-release' | 'default' = !!salePrice
    ? 'on-sale'
    : isNewShoe(releaseDate)
    ? 'new-release'
    : 'default';
  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper variant={variant}>
          <Image alt='' src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price onSale={salePrice !== undefined && salePrice > 0}>
            {formatPrice(price)}
          </Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {salePrice && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 1 0 300px;
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const ImageWrapper = styled.div<{variant: string}>`
  position: relative;
  background-color: ${COLORS.gray[300]};
  border-start-start-radius: 16px;
  border-start-end-radius: 16px;
  border-end-start-radius: 4px;
  border-end-end-radius: 4px;

  &::before {
    ${({variant}) =>
      css`
        content: '${variant === 'on-sale'
          ? 'Sale'
          : variant === 'new-release'
          ? 'Just Released!'
          : ''}';
      `}
    position: absolute;
    inset-block-start: 12px;
    inset-inline-end: -4px;
    padding-block: 0.5em;
    padding-inline: 0.75em;
    border-radius: 2px;
    ${({variant}) => css`
      background-color: ${variant === 'on-sale'
        ? COLORS.primary
        : variant === 'new-release'
        ? COLORS.secondary
        : ''};
    `}
    color: ${COLORS.white};
    font-weight: ${WEIGHTS.bold};
  }
`;

const Image = styled.img`
  inline-size: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span<{onSale: boolean}>`
  text-decoration: ${({onSale}) => onSale && 'line-through'};
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;
