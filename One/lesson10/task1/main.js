var s = "Recursion is sometimes used humorously in computer science, programming, philosophy, or mathematics textbooks, generally by giving a circular definition or self-reference, in which the putative recursive step does not get closer to a base case, but instead leads to an infinite regress. It is not unusual for such books to include a joke entry in their glossary along the lines of:Recursion, see Recursion.[6]A variation is found on page 269 in the index of some editions of Brian Kernighan and Dennis Ritchies book The C Programming Language; the index entry recursively references itself (recursion 86, 139, 141, 182, 202, 269). The earliest version of this joke was in Software Tools by Kernighan and Plauger, and also appears in The UNIX Programming Environment by Kernighan and Pike. It did not appear in the first edition of The C Programming Language.";

// Найти все случаи появления комбинаций букв "the".
// То есть это не обязательно артикль, но и в слове "then" тоже найдётся это сочетание букв.

const pattern = /the/gi;

console.log(s.match(pattern));

// Найти все цифры.

const pattern2 = /\d+/g;

console.log(s.match(pattern2));

// Найти все слова "the".Именно отдельно стоящие слова, а не как в первой задаче.

const pattern3 = /\bthe\b/gi;

console.log(s.match(pattern3));

// Найти первую "не цифру"

const pattern4 = /\D/i;

console.log(s.match(pattern4));

// Найти все случаи, когда в тексте встречаются подряд идущие символы "in" или "on"

const pattern5 = /\b(in)\b|\b(on)\b/gi;

console.log(s.match(pattern5));