import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Whitelist">
      <Container>
        <Title>
          Whitelist <Badge>2022</Badge>
        </Title>
        <P>A whitelist page for a NFT drop</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://whitelistdapp-ten.vercel.app/">
              https://whitelistdapp-ten.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform/Network</Meta>
            <span>Ethereum/Rinkeby</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Solidity, Hardhat, NextJs</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="#">
              How to build a Crosschain Protocol without lossing billions in the
              way <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/whitelist.png" alt="whitelist" />
      </Container>
    </Layout>
  )
}
export default Work
export { getServerSideProps } from '../../components/chakra'
