// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onDeleteButton = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-list">
      <p className="transaction-items">{title}</p>
      <p className="transaction-items">Rs {amount}</p>
      <p className="transaction-items">{type}</p>
      <button
        type="button"
        data-testid="delete"
        className="delete-button"
        onClick={onDeleteButton}
      >
        <img
          className="delete-image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
