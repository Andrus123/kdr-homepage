import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
import React from 'react'
React.useLayoutEffect = React.useEffect

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Bolivia
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Andrés Aquin
          </Heading>
          <p>Smart Contract Developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/andres.jpg"
              alt="Profile image"
              borderRadius="full"
              width="110%"
              height="150%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Andrés is a software developer and a Smart Contract Developer.
        </Paragraph>
        <NextLink href="#">
          <Link>Ricochet</Link>
        </NextLink>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portofilio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in La Paz, Bolivia
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed undergraduate studies in Commerce Engineering at the
          Catholic University of San Pablo
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Apprenticeship at Think Tank 'Libera' Bolivia.
        </BioSection>
        <BioSection>
          <BioYear>2017 to present</BioYear>
          Undergraduate studies in Computer Science at the University Mayor of
          San Andrés
        </BioSection>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I love:
          </Heading>
          <Paragraph>Blockchain, Smart Contracts, Music, Films.</Paragraph>
        </Section>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/andrus123" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @andrus123
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/andysmachine" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @andysmachine
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/andres-aquin" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @andresaquin
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
