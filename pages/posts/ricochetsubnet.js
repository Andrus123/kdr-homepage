import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Ricochet">
      <Container>
        <Title>
          Ricochet <Badge>2022</Badge>
        </Title>
        <P>A Crosschain DEX focused on zero slippage</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="#">
              http://www.ricochet.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Solana/Ethereum/Avalanche/Polygon</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Rust, Solidity, NextJs, React Native</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="#">
              How to build a Crosschain Protocol without lossing billions in the
              way <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/ricochet.png" alt="Ricochet" />
      </Container>
    </Layout>
  )
}
export default Work
