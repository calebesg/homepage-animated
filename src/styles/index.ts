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
      background-color: #caf0f8;
      height: 100%;
      display: flex;
      align-items: flex-end;

      .left-side {
        width: 50%;
        height: 100%;
        background-color: #00b4d8;
      }

      .right-side {
        width: 50%;
        height: 100%;

        .right-image {
          width: 100%;
          height: 100%;
          background-color: #00b4d8;
        }
      }
    }

    .b {
      background-color: #0077b6;
      width: 100%;
      height: 100%;
    }

    .c {
      background-color: #03045e;
      width: 100%;
      height: 100%;
    }
  }

  .second {
    background-color: #90e0ef;
  }

  .third {
    background-color: #90e0ef;
  }

  .fourth {
    background-color: #caf0f8;
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
