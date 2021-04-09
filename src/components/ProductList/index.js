import React, { memo } from 'react';

import { Container } from './styles';

import ProductItem from '../ProductItem';

function ProductList() {
  return (
    <Container>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </Container>
  );
}

export default memo(ProductList);