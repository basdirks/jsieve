jsieve
======

> echo "var primes = require('./primes'); console.log(primes(50000000).length)" | time node
3001134
8.02 user

Runs out of memory for large enough n. 
