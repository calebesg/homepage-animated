import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Main = styled(motion.div)`
  .first {
    background-color: red;
    overflow: hidden;

    .offset {
      width: 100%;
      height: 100%;
    }

    .a {
      background-color: #f5f1ea;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background-color: #7dbb91;
      }

      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          width: 100%;
          height: 100%;
          background-color: #7dbb91;
        }
      }
    }

    .b {
      background-color: #582534;
      width: 100%;
      height: 100%;
    }

    .c {
      background-color: #0a7397;
      width: 100%;
      height: 100%;
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
