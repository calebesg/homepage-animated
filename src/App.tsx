import GlobalStyles from './styles/global'
import { Main, Section, Sticky } from './styles'
import { StickyFirstAndSecond } from './components/StickyFirstAndSecond'
import { Header } from './components/Header'

export function App() {
  return (
    <>
      <Header />

      <Main style={{ height: '1610vh' }}>
        <Section style={{ height: '72.7%' }}>
          <StickyFirstAndSecond />
        </Section>

        <Section style={{ height: '9.7%' }}>
          <Sticky className="third" />
        </Section>

        <Section style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </Section>
      </Main>

      <GlobalStyles />
    </>
  )
}
