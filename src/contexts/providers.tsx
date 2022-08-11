import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { TransactionProvider } from './TransactionContext'

interface ProviderProps {
  children: ReactNode
}

export function Providers({ children }: ProviderProps) {
  return (
    <TransactionProvider>
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </TransactionProvider>
  )
}
