import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Slide from 'react-reveal'
import Section from '../components/Section';
import CardAndModal from "../components/CardAndModal"

import '../sections/projects.css'

const Background = () => (
    <div></div>
);

const Projects = () => (
    <Section.Container sytle="margin:-200px" id="projects" Background={Background}>
      <Section.Header name="Projects" icon="💻" label="person" />
        <Slide left>
            <StaticQuery
                query={graphql`
                    {
                        allContentfulProject {
                            edges {
                                node {
                                    id
                                    title
                                    miniTags
                                    miniDescription {
                                        miniDescription
                                    }
                                    extTags
                                    extTech
                                    extPeople
                                    extDescription {
                                        childContentfulRichText {
                                            html
                                        }
                                    }
                                    images {
                                        fluid {
                                            src
                                        }
                                    }
                                }
                            }
                        }
                    }
                `}

                render={data => 
                    <div class="project-row">
                        {data.allContentfulProject.edges.map((p) =>
                            <CardAndModal 
                                title={p.node.title}
                                keyword1={p.node.miniTags}
                                description={p.node.miniDescription.miniDescription}
                                tags={p.node.extTags}
                                technologies={p.node.extTech}
                                people={p.node.extPeople}
                                text={p.node.extDescription.childContentfulRichText.html}
                                images={p.node.images}
                            />
                        )}
                    </div>
                }
            ></StaticQuery>
        </Slide>
    </Section.Container>
)

export default Projects;