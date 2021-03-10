import * as GameItemsStyles from 'components/GameItem/styles'

import styled from 'styled-components'

export const Wrapper = styled.div`
  ${GameItemsStyles.Wrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`
