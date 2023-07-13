import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

//import thumRico from '../public/images/ricochet.png'
import thumWhite from '../public/images/whitelist.png'
import thumNft from '../public/images/ipfs-nfts.png'
import thumDao from '../public/images/dao.png'
import thumVRF from '../public/images/lottery.png'
import thumSwap from '../public/images/swap.png'
import thumMarket from '../public/images/nftmarketplace.png'
import thumPost from '../public/images/postland.png'
import thumForo from '../public/images/forochallenge.png'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="foro" title="foroAlura" thumbnail={thumForo}>
              A Rest API for a forum, with auth0, MySQL, and Hibernate
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="postland" title="Postland" thumbnail={thumPost}>
              A Real-Estate Web App fetching an API from Rapid-API's
            </WorkGridItem>
          </Section>
          {/* <Section>
            <WorkGridItem id="ricochet" title="Ricochet" thumbnail={thumRico}>
              A smart contract based decentralized exchange platform with
              minimun slipage, cross-chain leverage + swaps
              </WorkGridItem>
            </Section> */}
          <Section>
            <WorkGridItem
              id="nftmarketplace"
              title="Nft Marketplace Mobile"
              thumbnail={thumMarket}
            >
              A React Native mobile UI for a NFT marketplace, with a showcase
              page deployed on IPFS
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="whitelist"
              title="Whitelist"
              thumbnail={thumWhite}
            >
              A whitelist dapp for NFT drop
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="ipfs-nfts" title="NFTs" thumbnail={thumNft}>
              A NFT collection on IPFS for the whitelisted addresses
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="dao" title="DAO" thumbnail={thumDao}>
              A DAO for investment of NFT's for the NFT's holders
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="chainlinkvrf" title="VRF" thumbnail={thumVRF}>
              A VRF based lottery for the NFT's holders
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="avaswap" title="AvaSwap" thumbnail={thumSwap}>
              A decentralized exchange on Avalanche
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
