import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-6);
`

export const NotFoundContainerImg = styled.img`
  max-width: 100%;
`

export const NotFoundContainerH2 = styled.h2`
  font-family: "Inter";
  font-style: var(--font-bold);
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: var(--primary);
  text-align: center;
`
