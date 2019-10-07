import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import markdownRenderer from '../components/MarkdownRenderer';

const Background = () => (
  <div>  </div>
);

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.2s ease-out;

  &:hover {
    border-radius: 10%;
  }
`;

const About = () => (
  <Section.Container id="about" Background={Background}>
    <Section.Header name="About me" icon="🙋‍♂️" label="person" />
    <StaticQuery
      query={graphql`
        {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            image {
              fluid {
                src
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                <ReactMarkdown
                  source={data.contentfulAbout.aboutMe.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>

            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: '300px', margin: 'auto' }}
            >
              <Fade right>
                <ProfilePicture
                  src={data.contentfulAbout.image.fluid.src}
                  mt={[4, 4, 0]}
                  ml={[0, 0, 1]}
                />
              </Fade>
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default About;