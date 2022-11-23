import { useContext, useState } from 'react'
import { Box, Flex, Img } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import Logo from '@/assets/img/logo.png'
import Button from '@/components/Button'
import FloatProxy from '@/components/FloatProxy'
import Language from '@/contexts/language'
import useIsEnglish from '@/hooks/useIsEnglish'

const Home = () => {
  const navigate = useNavigate()
  const [size, setSize] = useState(false)
  const { language } = useContext(Language)
  const isEnglish = useIsEnglish()

  return (
    <Flex
      direction="column"
      alignItems="center"
      maxW="1480px"
      justifyContent="center"
      mx="auto"
      mb={100}
    >
      <Img width={300} src={Logo} />
      <Box pb={20} fontSize={18}>
        🛰{' '}
        {isEnglish
          ? 'Shared component across routes with animations'
          : '夸路由组件共享动画'}
      </Box>
      <Button onClick={() => setSize(!size)}>toggle</Button>
      <Flex
        wrap="wrap"
        justifyContent="center"
        gap={size ? 15 : 0}
        transition="all 800ms"
      >
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(item => (
          <FloatProxy
            key={item}
            port={item}
            w={60}
            h={30}
            m="5"
            rounded="xl"
            cursor="pointer"
            overflow="hidden"
            onClick={() => navigate('/about/' + item)}
          />
        ))}
      </Flex>
    </Flex>
  )
}

export default Home
