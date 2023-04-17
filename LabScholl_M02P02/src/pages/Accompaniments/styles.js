import styled from 'styled-components'

export const AccompanimentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  background: #e5e5e5;
  box-shadow: 0 var(--spacing-4) var(--spacing-3) rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius-2);
  height: 90vh;  
`

export const AccompanimentsSection = styled.section`
  width: 828px;
  max-width: 100%;
`

export const AccompanimentsSectionCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--spacing-5);
`
export const ListHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: safe;
  width: 80vh;  
  height: 36px;
  margin-top: 16px;
`
