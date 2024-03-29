import styled, { css } from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;

    margin-top: 1.6rem;
  }
`

const btnConfig = {
  success: {
    bgColor: 'green-500',
    color: 'gray-100',
    bgColorHover: 'green-700',
  },
  danger: {
    bgColor: 'red-500',
    color: 'gray-100',
    bgColorHover: 'red-700',
  },
}

export type CountdownButtonVariant = keyof typeof btnConfig

interface CountdownButtonProps {
  $variant: CountdownButtonVariant
}

export const CountdownButton = styled.button<CountdownButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  border: 0;
  border-radius: 8px;

  margin: 8px;
  padding: 1.6rem 4rem;
  gap: 0.8rem;

  cursor: pointer;

  transition:
    color 0.15s ease,
    background-color 0.15s ease;

  ${({ $variant, theme }) => css`
    background-color: ${theme[btnConfig[$variant].bgColor]};
    color: ${theme[btnConfig[$variant].color]};

    &:not(:disabled):hover {
      background-color: ${theme[btnConfig[$variant].bgColorHover]};
    }
  `}

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
