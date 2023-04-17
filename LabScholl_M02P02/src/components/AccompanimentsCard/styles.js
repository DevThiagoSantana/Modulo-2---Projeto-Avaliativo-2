import styled from 'styled-components'

export const AccompanimentsCardContainer = styled.div`
  width: 310px;
  padding: var(--spacing-6) var(--spacing-8);
  border-radius: var(--border-radius-1);
  background-color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: var(--spacing-4);
  `

export const AccompanimentsCardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  color: var(--primary);
`

export const AccompanimentsCardDuration = styled.div`
  display: flex;
  gap: var(--spacing-3);
  align-items: center;
  font-weight: var(--font-medium);
  font-size: 16px;
  line-height: 19px;
  color: var(--dark-gray);
`
