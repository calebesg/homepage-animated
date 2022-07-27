import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.header)`
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.2);

  position: fixed;
  top: 0;
  z-index: 999;
`
