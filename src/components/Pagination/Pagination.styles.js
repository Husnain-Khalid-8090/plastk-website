import { styled } from 'linaria/react';

export const PaginationList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const PaginationHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 23px;
`;

export const TotalItems = styled.span`
  font-size: var(--font-size-xs);
`;

export const PaginationButton = styled.button`
  position: relative;
  display: flex;
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  color: #19191b;
  border: 1px solid #eae9f2;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background: var(--white);

  &:hover {
    color: var(--primary);
  }
  &.selected {
    background: var(--primary);
    color: var(--white);
  }
`;

export const SelectHolder = styled.div`
  min-width: 110px;
  .react-select__control {
    font-size: var(--font-size-xs);
    padding-left: 10px;
    padding-right: 10px;
  }
  .react-select__menu {
    font-size: var(--font-size-xs);
  }
`;
