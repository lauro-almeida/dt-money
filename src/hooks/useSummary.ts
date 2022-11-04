import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          acc.income += transaction.price
          acc.balance += transaction.price
        } else {
          acc.outcome += transaction.price
          acc.balance -= transaction.price
        }

        return acc
      },
      {
        income: 0,
        outcome: 0,
        balance: 0,
      },
    )
  }, [transactions])

  return summary
}
