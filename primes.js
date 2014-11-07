var BitArray = require('bit-array');

function sieve (n) {
    var i, j, k, m, s = new BitArray(n + 1), p = [2], z = Math.floor(Math.sqrt(n));

    for (i = 3; i < n; i += 2) {
        s.set(i, true);
    }

    for (j = 0; z > j; j++) {
        if (s.get(j)) {
            p.push(j);
            for (k = j * 2; k <= n; k += j) {
                s.set(k, false);
            }
        }
    }

    for (m = z; m < n; m++) {
        if (s.get(m)) {
            p.push(m);
        }
    }

    return p;
}

console.log(sieve(1e9).length);
