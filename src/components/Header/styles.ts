import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 4.8rem;
      height: 4.8rem;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      transition:
        color 0.15s ease,
        border-color 0.15s ease;

      &:hover {
        border-bottom-color: ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
