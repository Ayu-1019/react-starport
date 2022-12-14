import { FC, useEffect, useState } from 'react'
import { Box, Img } from '@chakra-ui/react'

import { useLocation } from 'react-router-dom'

interface ImageProps {
  src: string
  reversalSrc: string
}

const Image: FC<ImageProps> = ({ src, reversalSrc }) => {
  const [counter, setCounter] = useState(0)
  const [imgSrc, setImgSrc] = useState(src)
  const [isReversal, setIsReversal] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // setTimeout(() => {
    setImgSrc(isReversal ? src : reversalSrc)
    // }, 500)
  }, [isReversal])

  return (
    <Box
      position="relative"
      w="100%"
      h="100%"
      cursor="pointer"
      transition="all 900ms"
      onClick={() =>
        location.pathname.includes('/about/') && setIsReversal(!isReversal)
      }
    >
      <Box
        position="absolute"
        w={20}
        textAlign="center"
        bottom="0"
        left="50%"
        right="50%"
        transform="translateX(-50%)"
        color="white"
        cursor="pointer"
        onClick={e => {
          e.stopPropagation()
          setCounter(counter + 1)
        }}
      >
        {counter}
      </Box>
      <Img
        objectFit="cover"
        w="100%"
        h="100%"
        // transform={isReversal ? 'rotateY(0deg)' : 'rotateY(180deg)'}
        // transition="all 1s"
        src={imgSrc}
      />
    </Box>
  )
}

export default Image
