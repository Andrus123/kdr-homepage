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
          DAO <Badge>2022</Badge>
        </Title>
        <P>A DAO for investment of NFT's</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://dao-liart.vercel.app/">
              https://dao-liart.vercel.app/ <ExternalLinkIcon mx="2px" />
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
            <Link href="https://github.com/Andrus123/dao" target="_blank">
              https://github.com/Andrus123/dao <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/dao.png" alt="dao" />
      </Container>
    </Layout>
  )
}
export default Work
export { getServerSideProps } from '../../components/chakra'
