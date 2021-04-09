import styled from "styled-components";

export const Card = styled.div`
  border-radius: 20px;
  border: 1px solid #dadce0;
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.div`
  max-height: 170px;
  overflow: hidden;

  img {
    width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

export const CardBody = styled.div`
  padding: 17px;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

export const ProductName = styled.p`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 1.25rem;
`;

export const ProductPrice = styled.div`
  p:nth-child(1) {
    color: #bdb6b6;
    font-size: 12px;
  }

  p:nth-child(2) {
    color: var(--color-dark);
    font-size: 15px;
    font-weight: 700;

    span {
      font-size: 20px;
      color: #000;
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;

  a:nth-child(1) {
    padding: 10px;
    border-radius: 20px;
    color: var(--color-light);
    background: var(--color-success);
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:nth-child(2) {
    padding: 13px;
    border-radius: 100%;
    color: var(--color-light);
    background: var(--color-info);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
