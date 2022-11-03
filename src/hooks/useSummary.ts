import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
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

  return summary
}
