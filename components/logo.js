import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`
const Logo = () => {
  const cubeImg = `/images/cube${useColorModeValue('', '-dark')}.png`
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <Image src={cubeImg} alt="cube" width={20} height={20} />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="Bakbak One, cursive"
          ml={3}
        >
          Andrus
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
