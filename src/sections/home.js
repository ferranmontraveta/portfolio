import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Text, Heading, Flex, Box } from 'rebass';
import TextLoop from 'react-text-loop';
import Logo from '../components/Logo';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
  
const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const Home = () => (
    <Section.Container id="home">
        <StaticQuery
            query={graphql`
                {
                    contentfulSkills {
                        skills
                    }
                }
            `}
            render={data => 
                <Fragment>
                    <Heading
                        textAlign="center"
                        fontFamily="Exo"
                        color='rgba(255, 255, 0, 0.555)'
                    >
                        <h2>This is a work in progress, final version coming soon! :)</h2>
                    </Heading>

                    <Logo name="FERRAN" surnames="MONTRAVETA ROCA" />

                    <Heading
                        fontFamily="Exo"
                        color="rgb(61, 176, 199)"
                        fontSize={[3, 4, 5]}
                        mb={[3, 5]}
                        textAlign="center"
                        style={centerHorizontally}
                    >
                        <TextLoop interval={3000}>
                            {data.contentfulSkills.skills
                                .sort(() => Math.random() - 0.5)
                                .map(text => (
                                    <Text width={[300, 800]} key={text}>
                                        {text}
                                    </Text>
                                ))
                            }
                        </TextLoop>
                    </Heading>

                    <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
                        <Box mx={3} fontSize={[5, 6, 6]}>
                            <SocialLink
                                fontAwesomeIcon="fab fa-linkedin"
                                name="LinkedIn"
                                url="https://www.linkedin.com/in/ferranmontraveta/"
                                color="rgb(61, 176, 199)"
                            />
                        </Box>
                        <Box mx={3} fontSize={[5, 6, 6]}>
                            <SocialLink
                                fontAwesomeIcon="fab fa-github"
                                name="Github"
                                url="https://github.com/ferranmontraveta"
                                color="rgb(61, 176, 199)"
                            />
                        </Box>
                        <Box mx={3} fontSize={[5, 6, 6]}>
                            <SocialLink
                                fontAwesomeIcon="fab fa-envelope"
                                name="Contact Me"
                                url="https://ferranmontraveta.typeform.com/to/qaXwzo"
                                color="rgb(61, 176, 199)"
                            />
                        </Box>
                    </Flex>
                </Fragment>
            }
        ></StaticQuery>
    </Section.Container>
)
  
export default Home