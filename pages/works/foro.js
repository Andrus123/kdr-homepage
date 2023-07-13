import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Foro Rest API">
      <Container>
        <Title>
          Spring REST Api for a web app forum<Badge>2023</Badge>
        </Title>
        <P>CRUD Operations based api</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform/Network</Meta>
            <span> Spring </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>SpringBoot, MySQL, Hibernate, Java</span>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/Andrus123/challenge-one-foro-alura.git" target="_blank">
            https://github.com/Andrus123/challenge-one-foro-alura.git{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/forochallenge.png" alt="foroapp" />
      </Container>
    </Layout>
  )
}
export default Work
export { getServerSideProps } from '../../components/chakra'
