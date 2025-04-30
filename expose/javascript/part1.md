1. values added: 20
2. final result: 20
3. You should not use var because is has no block-scope, and instead uses function/global scope. This can often create unintended implementations with redirection of variables since creating a duplicate-named variable will not error with var, while it will with let.
4. values added: 20
5. This line will error because the let variable result has a block-scope within the if statement.
6. values added: 0
7. This like will error because the const variable result has a block-scope within the if state
