import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="dao">
      <Container>
        <Title>
          Chainlink Verifiable Randomness Function <Badge>2022</Badge>
        </Title>
        <P>A Lottery Game using Chainlink's VRF</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://chainlink-vrf-lottery-game.vercel.app/">
              https://chainlink-vrf-lottery-game.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform/Network</Meta>
            <span> Ethereum - Rinkeby | The Graph </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Solidity, Hardhat, Chainlink, Etherscan, TheGraph, NextJs
            </span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="#">
              How to build a Crosschain Protocol without lossing billions in the
              way <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/lottery.png" alt="lottery" />
      </Container>
    </Layout>
  )
}
export default Work
