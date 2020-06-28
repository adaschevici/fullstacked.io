/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Inner from '../../elements/inner'
import Content from '../../elements/content'

import Gallery from '../gallery'
import Logo from '../logo'

const Hero = ({ offset, factor = 1 }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { regex: "/assets/images/[A-Za-z0-9_]*.png/" } }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)
  const images = data.allFile.nodes
  console.log(images)

  return (
    <div>
      <Content
        sx={{ variant: `texts.bigger` }}
        speed={0.4}
        offset={offset}
        factor={factor}
      >
        <Gallery images={images} />
        <Inner>
          <Logo withWriting outerWidth={380} />
        </Inner>
      </Content>
    </div>
  )
}

export default Hero
