import { styled } from 'linaria/react';

export const StyledAlert = styled.div`
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  font-size: var(--font-size-sm);
  line-height: 1.25rem;
  @media (min-width: 768px) {
    padding: 1rem 3.9375rem 1rem 1rem;
  }

  color: ${({ $type }) => {
    if ($type === 'success') {
      return 'var(--success)';
    }
    if ($type === 'info') {
      return 'var(--info)';
    }
    if ($type === 'error') {
      return 'var(--danger)';
    }
    if ($type === 'warning') {
      return 'var(--warning)';
    }
    return 'var(--success)';
  }};

  background: ${({ $type }) => {
    if ($type === 'success') {
      return '#f2f9f0';
    }
    if ($type === 'info') {
      return '#f3f5fe';
    }
    if ($type === 'error') {
      return '#fef0f4';
    }
    if ($type === 'warning') {
      return '#fffaf2';
    }
    return '#f2f9f0';
  }};
`;

export const Message = styled.p`
  color: inherit;
  margin: 0;
`;
