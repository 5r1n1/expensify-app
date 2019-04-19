const add = (a, b) => a + b;
const genGreeting = (name = 'Anonymous') => `Hello ${name}!`

test ('should add two numbers', () => {
  expect (add (3, 4)).toBe (7)
})

test ('should generate greeting', () => {
  expect (genGreeting ('Mike')).toBe ('Hello Mike!')
})

test ('should generate greeting with no name', () => {
  expect (genGreeting ()).toBe ('Hello Anonymous!')
})
