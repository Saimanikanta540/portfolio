import styled from '@emotion/styled'

// Premium Container Component - Reusable across all sections
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (min-width: 769px) {
    padding: 0 32px;
  }
`

export default Container
