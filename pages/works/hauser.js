import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Real-Estate App">
      <Container>
        <Title>
          Web App Real-Estate prototype using a real API<Badge>2022</Badge>
        </Title>
        <P>NextJS based Web-App connected to a Rapid API</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://hauser.vercel.app/" target="_blank">
              https://hauser.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform/Network</Meta>
            <span> Vercel, RapidAPI </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, RapidAPI, Chakra UI</span>
          </ListItem>
        </List>

        <WorkImage src="/images/hauser.png" alt="realestateapp" />
      </Container>
    </Layout>
  )
}
export default Work
export { getServerSideProps } from '../../components/chakra'
