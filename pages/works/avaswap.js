import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="dex">
      <Container>
        <Title>
          Automatic Market Maker on Avalanche<Badge>2022</Badge>
        </Title>
        <P>Dex on Fuji test network</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://avalanche-amm.vercel.app/">
              https://avalanche-amm.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform/Network</Meta>
            <span> Avalanche - Fuji </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Solidity, Remix, React</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="#">
              How to build a Crosschain Protocol without lossing billions in the
              way <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/swap.png" alt="swap" />
      </Container>
    </Layout>
  )
}
export default Work
