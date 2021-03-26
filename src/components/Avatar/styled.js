import styled from 'styled-components';
import media from 'styled-media-query';

export const AvatarWrapper = styled.div`
  .gatsby-image-wrapper {
  border-radius: 30%;
  height: 9.25rem;
  margin: auto;
  width: 9.25rem;

  ${media.lessThan("large")`
    height: 2.875rem;
    width: 2.875rem;
  `}
  }
`