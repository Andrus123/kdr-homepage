import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="ipfs-nfts">
      <Container>
        <Title>
          NFT Collection on IPFS <Badge>2022</Badge>
        </Title>
        <P>The NFT Collection for the whitelisted</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://ipfs-nft-s.vercel.app/">
              https://ipfs-nft-s.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform/Network</Meta>
            <span> Ethereum - Rinkeby | IPFS </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Solidity, Hardhat, NextJs</span>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/Andrus123/IPFS-NFTs" target="_blank">
              https://github.com/Andrus123/IPFS-NFTs{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/ipfs-nfts.png" alt="nfts" />
      </Container>
    </Layout>
  )
}
export default Work
export { getServerSideProps } from '../../components/chakra'
