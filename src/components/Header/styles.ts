import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.header)`
  width: 100%;
  height: 100px;
  background-color: rgba(144, 224, 239, 0.6);

  position: fixed;
  top: 0;
  z-index: 999;
`
