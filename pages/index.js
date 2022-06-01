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
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMail
} from 'react-icons/io5'
import { FaEthereum } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import Image from 'next/image'
import React from 'react'
import Junior from '../public/images/junior.jpg'
import Sophomore from '../public/images/sophomore.jpg'
import Freshman from '../public/images/freshman.jpg'
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
        Hello, I&apos;m a Software Developer based in Bolivia
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Andrés Aquin
          </Heading>
          <p>Software Developer</p>
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
          Andrés is a Software developer and Smart Contract Developer. Working
          with protocols DEFI on Ethereum, Avalanche and Solana
        </Paragraph>
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
            Focus:
          </Heading>
          <Paragraph>Blockchain, Smart Contracts, Finance.</Paragraph>
        </Section>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="mailto:akaquin@umsa.bo" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<SiGmail />}>
                akaquin@umsa.bo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:mr@andrus.tech" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<IoMail />}>
                mr@andrus.tech
              </Button>
            </Link>
          </ListItem>
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
            <Link
              href="https://www.linkedin.com/in/andr%C3%A9s-aquin/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @andresaquin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://opensea.io/Andruss" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<FaEthereum />}
              >
                0xac05...A957
              </Button>
            </Link>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://opensea.io/assets/matic/0x1ed25648382c2e6da067313e5dacb4f138bc8b33/2/"
            title="Junior"
            thumbnail={Junior}
          >
            Junior Batch Developer NFT
          </GridItem>
          <GridItem
            href="https://opensea.io/assets/matic/0x1ed25648382c2e6da067313e5dacb4f138bc8b33/1/"
            title="Sophomore"
            thumbnail={Sophomore}
          >
            Sophomore Batch Developer NFT
          </GridItem>
          <GridItem
            href="https://opensea.io/assets/matic/0x1ed25648382c2e6da067313e5dacb4f138bc8b33/0/"
            title="Freshman"
            thumbnail={Freshman}
          >
            Freshman Batch Developer NFT
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
