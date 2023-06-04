import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onDeleteTransaction = id => {
    const {transactionList} = this.state
    const updateTransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )
    this.setState({transactionList: updateTransactionList})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalanceAmount = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    let expensesAmount = 0
    let balanceAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state
    const balanceAmount = this.getBalanceAmount()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="app-bg-container">
        <div>
          <div className="profile-container">
            <h1 className="profile-name"> HI, Richard </h1>
            <p className="welcome-message">
              Welcome back to your{' '}
              <span className="welcome-message-span-element">
                Money Manager
              </span>
            </p>
          </div>
          <div>
            <MoneyDetails
              balanceAmount={balanceAmount}
              incomeAmount={incomeAmount}
              expensesAmount={expensesAmount}
            />
          </div>
          <div className="bottom-container">
            <div className="form-container">
              <form className="form">
                <h1 className="transaction-heading"> Add Transaction </h1>
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <input
                  id="title"
                  type="text"
                  className="text-bar"
                  placeholder="TITLE"
                  value={titleInput}
                  onChange={this.onChangeTitleInput}
                />
                <label className="label" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  id="amount"
                  type="text"
                  className="text-bar"
                  placeholder="AMOUNT"
                  value={amountInput}
                  onChange={this.onChangeAmountInput}
                />
                <label htmlFor="type" className="label">
                  TYPE
                </label>
                <select
                  id="type"
                  className="text-bar"
                  onChange={this.onChangeOptionId}
                  value={optionId}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="add-button"
                  onClick={this.onAddTransaction}
                >
                  Add
                </button>
              </form>
            </div>

            <div className="history-container">
              <h1 className="history-heading"> History </h1>
              <div className="history-titles">
                <p className="history-titles-name"> Title </p>
                <p className="history-titles-name"> Amount </p>
                <p className="history-titles-name"> Type </p>
              </div>
              <ul className="transaction-list-container">
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.onDeleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
