import { Providers } from './contexts/providers'

import { Transactions } from './pages/Transactions'

import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <Providers>
      <Transactions />

      <GlobalStyle />
    </Providers>
  )
}
