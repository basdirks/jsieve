function sieve(n) {
    var i, j, k, m, s = {}, p = [2], z = Math.floor(Math.sqrt(n));

    for (i = 3; i < n; i += 2) {
        s[i] = true;
    }

    for (j = 0; z > j; j++) {
        if (s[j]) {
            p.push(j);
            for (k = j * 2; k <= n; k += j) {
                s[k] = false;
            }
        }
    }

    for (m = z; m < n; m++) {
        if (s[m]) {
            p.push(m);
        }
    }

    return p;
}
