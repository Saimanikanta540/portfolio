import styled from '@emotion/styled'

// Premium Container Component - Reusable across all sections
const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;

  @media (max-width: 1200px) {
    padding: 0 32px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`

export default Container
