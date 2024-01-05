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
  }
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;

  width: 100%;

  color: ${(props) => props.theme['gray-100']};

  font-size: 1.8rem;
  font-weight: 700;
`

const BaseInput = styled.input`
  background-color: transparent;
  color: ${(props) => props.theme['gray-100']};

  height: 4rem;
  padding: 0 0.8rem;

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  font-weight: 700;
  font-size: 1.8rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 6.4rem;

  &:disabled {
    cursor: not-allowed;
  }
`

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1.6rem;

  font-family: 'Roboto Mono', monospace, sans-serif;
  font-size: 16rem;
  line-height: 12.8rem;

  color: ${(props) => props.theme['gray-100']};

  span {
    background-color: ${(props) => props.theme['gray-700']};

    padding: 3.2rem 1.6rem;

    border-radius: 8px;
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;

  width: 6.4rem;

  padding: 3.2rem 0;

  color: ${(props) => props.theme['green-500']};

  overflow: hidden;
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
