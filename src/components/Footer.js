import React from 'react';
import styled from 'styled-components';
import { Text, Box, Link, Flex } from 'rebass';
import Fade from 'react-reveal/Fade';
import SocialLink from './SocialLink';

const FooterContainer = styled.footer`
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const TextFooter = styled(Text)`
  color: ${props => props.theme.colors.primaryLight};
  font-size: 3vw;

  @media screen and (min-width: 800px) {
    font-size: 1.5rem;
  }

  & a {
    color: ${props => props.theme.colors.primaryLight};
    font-size: 3vw;

    @media screen and (min-width: 800px) {
      font-size: 1.5rem;
    }
  }
`;

const Footer = () => (
  <Box p={1} backgroundColor="#a9ddd615">
    <FooterContainer>
      <Fade left>
        <TextFooter>
          <span>{`Ferran Montraveta's Portfolio - Build from `}</span>
          <Link target="_blank" href="https://github.com/EmaSuriano/gatsby-starter-mate/blob/master/README.md">Mate</Link>
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </TextFooter>
      </Fade>
      <Flex>
        <Fade right>
          <Box mx={2} fontSize={1}>
              <SocialLink
                  fontAwesomeIcon="fab fa-linkedin"
                  name="LinkedIn"
                  url="https://www.linkedin.com/in/ferranmontraveta/"
                  color="rgb(61, 176, 199)"
              />
          </Box>
          <Box mx={2} fontSize={1}>
              <SocialLink
                  fontAwesomeIcon="fab fa-github"
                  name="Github"
                  url="https://github.com/ferranmontraveta"
                  color="rgb(61, 176, 199)"
              />
          </Box>
          <Box mx={2,20} fontSize={1}>
              <SocialLink
                  fontAwesomeIcon="fab fa-envelope"
                  name="Contact Me"
                  url="https://ferranmontraveta.typeform.com/to/qaXwzo"
                  color="rgb(61, 176, 199)"
              />
          </Box>
        </Fade>
      </Flex>
    </FooterContainer>
  </Box>
);

export default Footer;
