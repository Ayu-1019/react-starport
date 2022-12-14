import { useContext, useState } from 'react'
import { Box, Flex, Img } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import Logo from '@/assets/img/logo.png'
import MyButton from '@/components/MyButton'
import FloatProxy from '@/components/FloatProxy'
import useIsEnglish from '@/hooks/useIsEnglish'
import Condition from '@/contexts/condition'

const Home = () => {
  const navigate = useNavigate()
  const isEnglish = useIsEnglish()

  const { size, setSize } = useContext(Condition)

  return (
    <Flex
      direction="column"
      alignItems="center"
      maxW="1420px"
      justifyContent="center"
      mx="auto"
      mb={100}
    >
      <Box w={300} h={300}>
        <Img width={300} src={Logo} />
      </Box>
      <Box pb={20} fontSize={18}>
        🛰
        {isEnglish
          ? ' Shared component across routes with animations'
          : ' 跨路由组件共享动画'}
      </Box>
      <Flex gap={20}>
        <MyButton onClick={() => setSize(!size)}>
          {isEnglish ? 'toggle size' : '改变尺寸'}
        </MyButton>
        <MyButton onClick={() => navigate('/list')}>go List</MyButton>
      </Flex>
      <Flex wrap="wrap" justifyContent="center" transition="all 900" mt={20}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
          <FloatProxy
            key={item}
            id={item}
            w={size ? '15rem' : '16rem'}
            h={size ? '12rem' : '9rem'}
            m={size ? 10 : 0}
            borderRadius={size ? 10 : 0}
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
