import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled(motion.div)`
  .first {
    background-color: red;
    overflow: hidden;

    .offset {
    }

    .a {
      background-color: #f5f1ea;
    }

    .b {
      background-color: #582534;
    }

    .c {
      background-color: #0a7397;
    }
  }

  .second {
    background-color: green;
  }

  .third {
    background-color: yellow;
  }

  .fourth {
    background-color: blue;
  }
`

export const Section = styled(motion.div)`
  position: relative;
`

export const Sticky = styled(motion.div)`
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`
