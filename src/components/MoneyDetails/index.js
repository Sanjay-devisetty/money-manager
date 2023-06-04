// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="money-details-list">
      <div className="money-container balance-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="amount-container">
          <p className="heading"> Your Balance</p>
          <p className="amount" data-textid="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </div>

      <div className="money-container income-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="amount-container">
          <p className="heading"> Your Income</p>
          <p className="amount" data-textid="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </div>

      <div className="money-container expense-container">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="amount-container">
          <p className="heading"> Your Expenses</p>
          <p className="amount" data-textid="expensesAmount">
            RS {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
