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
          React Native UI for a NFT Marketplace mobile app<Badge>2022</Badge>
        </Title>
        <P>Mobile App with showcase Website deployed on IPFS</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://jolly-wave-2677.on.fleek.co/">
              https://jolly-wave-2677.on.fleek.co/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform/Network</Meta>
            <span> Expo - IPFS </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React Native, Expo SDK, Fleek, IPFS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/nftmarketplace.png" alt="mobileappnft" />
      </Container>
    </Layout>
  )
}
export default Work
