import { removeExpense, addExpense, editExpense } from "../../actions/expenses";

test ('testing removeExpense...', () => {
  expect (removeExpense ({ id: '123abc' }))
    .toHaveProperty ('type', 'REMOVE_EXPENSE')
    .toHaveProperty ('id', '123abc')
})

test ('testing addExpense...', () => {
  expect (addExpense ({ description: '', note: '', amount: 2345, createdAt: 1555686915102 }))
    .toHaveProperty ('type', 'ADD_EXPENSE')
    .toHaveProperty ('txn')
})

test ('testing editExpense...', () => {
  expect (editExpense ({ id: '123abc', updates: { description: 'new'}}))
    .toHaveProperty ('type', 'EDIT_EXPENSE')
    .toHaveProperty ('id', '123abc')
    .toHaveProperty ('updates')
})