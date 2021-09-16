// NAMU DARBAI
   /*
rekursine funksija
sk1, sk2, max
 
spausdinti visus fibonaci skaicius mazesnius uz max
 
1, 1, 500000

1, 1, 2, 3
2,3,5
*/

let sk1 = 2;
let sk2 = 3;
let max = 500000;


function fibonac(a, b) {
    if ((sk1 >= 0 && sk2 >= 0) && (sk1 !== 0 || sk2 !== 0)) {
        if (b <= max) {
            console.log(`Sekantis narys: ${b}`);
            return fibonac(b, a + b)
        }
    } else {
        console.log(`\nBlogi skaičiai (arba nors vienas neigiamas, arba abu yra 0)\n`);
    }
}

fibonac(sk1, sk2);
