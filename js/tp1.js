// TP1 Front
//////////////////////////////////////////////////////////////////////
// fonction principale,
// qui dépend d'autres fonctions définies plus loin dans ce fichier...

function runFunction() {
    "use strict";

    exo1(10000);

    exo2_1();
    exo2_2();
    exo2_3();
    exo2_4();

    exo3();

    exo4();
}

//////////////////////////////////////////////////////////////////////

// Exercice 1
function exo1(limit) {
    "use strict";
    const res = [];
    for (let n = 2; n <= limit; n++) {
        let somme = 1;
        for (let d = 2; d * d <= n; d++) {
            if (n % d === 0) {
                somme += d;
                const compl = n / d;
                if (compl !== d) {
                    somme += compl;
                }
            }
        }
        if (somme === n) {
            res.push(n);
        }
    }
    window.console.log("Exercice 1 :", res);
    return res;

}

//////////////////////////////////////////////////////////////////////

// Exercice 2
function exo2_1() {
    "use strict";
    window.console.log("Exercice 2.1");
    /*  - Number("A")   -> NaN
        - 2 + "12"      -> 212
        - 2 + (+"12")   -> 14
        - (+"A")        -> NaN
        - 2 * "12"      -> 24
        - 2 * "A"       -> NaN
        - 1/0           -> Infinity
        - 1/-0          -> -Infinity
     */
}

function exo2_2() {
    "use strict";
    window.console.log("Exercice 2.2");
    /*  - NaN === NaN   -> false
        - NaN !== NaN   -> true
        - isNaN(NaN)    -> true
     */
}

function exo2_3() {
    "use strict";
    window.console.log("Exercice 2.3");
    // undefined
}

function exo2_4() {
    "use strict";
    window.console.log("Exercice 2.4");
    /*  x = null        y = null        - x === y -> true  | x == y -> true
        x = null        y = undefined   - x === y -> false | x == y -> true
        x = undefined   y = null        - x === y -> false | x == y -> true
        x = undefined   y = undefined   - x === y -> true  | x == y -> true
     */
}

//////////////////////////////////////////////////////////////////////

// Exercice 3

function escapeText(s){ "use strict"; var p = document.createElement('p'); p.textContent = s; return p.innerHTML; }

function appendText(text) {
    "use strict";
    document.getElementById("text").innerHTML += escapeText(text) + "<br>";
}

function exo3() {
    "use strict";

    document.getElementById("text").innerHTML = "";

    appendText("Exercice 3");
    var list = [1, 2, 4];
    appendText(camlListOfArray(list) === "[1; 2; 4]")

    var palindromes = ["", "a", "BB", "BOB", "ESOPERESTEICIETSEREPOSE"];
    var nonPalindromes = ["Bob", "BABA"];
    palindromes.forEach((word) => appendText(estPalindrome(word)))

    var esop = "ESOPERESTEICIETSEREPOSE"
    nonPalindromes.forEach((word) => appendText(estPalindrome(word)))

    var testsEmail = ["a@b.fr", "john.doe@firm.co.uk", "somebody@domain"];
    testsEmail.forEach((email) => appendText(estEmail(email)))
}

function camlListOfArray(tableau) {
    "use strict";
    let texte = "["
    let n = tableau.length
    for (let i = 0; i < n - 1; i++)
        texte += tableau[i] + "; "
    texte += tableau[n - 1] + "]"
    return texte
}

function estPalindrome(texte) {
    "use strict";
    let n = texte.replaceAll(" ", "").length
    if (n < 2) return true
    let i = 0
    while (i < n / 2 - 1 && texte.charAt(i) === texte.charAt(n - i - 1)) i++
    return texte.charAt(i) === texte.charAt(n - i - 1)
}

function listeOccurrences(search, texte) {
    "use strict";
    let list
    for (let i = 0; i < texte.length; i++) {
        if (search === texte.charAt(i)) {
            list += texte.indexOf(i)
        }
    }
}

function estEmail(texte) {
    "use strict";
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(texte)
}

//////////////////////////////////////////////////////////////////////

// Exercice 4
function exo4() {
    "use strict";
    appendText("Exercice 4");
    // TODO
    appendText("TODO : ajoutez le résulat de chaque opération")
}


