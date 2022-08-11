import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer } from './styles'
import { useContextSelector } from 'use-context-selector'
import { TransactionContext } from '../../contexts/TransactionContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputsType = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(TransactionContext, (ctx) => {
    return ctx.fetchTransactions
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    reset,
  } = useForm<SearchFormInputsType>({
    resolver: zodResolver(searchFormSchema),
  })

  const { query } = watch()

  async function handleSearchTransactions({ query }: SearchFormInputsType) {
    await fetchTransactions(query)

    reset()
  }

  const isSubmiButtonDisabled = isSubmitting || query === ''

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmiButtonDisabled}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
