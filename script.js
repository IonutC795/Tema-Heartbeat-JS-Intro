// Tema Js Intro
//   Ex 1 : Returnează un boolean dacă un număr este divizibil cu 10

// Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.

// Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.

// În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.

const esteDivizibilCu10 = () => {
    return numar % 10 === 0;
};

let numar = 20;
console.log(esteDivizibilCu10(numar));

//   Ex 2 : Scrieți o funcție numită tellFortune care:

// primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
// afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
// În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).

const tellFortune = (N, Z, Y, X) => {
    console.log(`Vei fi un ${X} în ${Y}, căsătorit cu ${Z} și vei avea ${N} copii.`);
};

tellFortune(2, "Madalina", "New York", "programator");

//   Ex 3 : Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii

// Veți crea o funcție care va returna un șir de caractere (string) 
// care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

const getDayOfWeek = (dayNumber) => {
    switch (dayNumber) {
        case 1:
            return "Luni";
        case 2:
            return "Marți";
        case 3:
            return "Miercuri";
        case 4:
            return "Joi";
        case 5:
            return "Vineri";
        case 6:
            return "Sâmbătă";
        case 7:
            return "Duminică";
    }
    if (dayNumber > 7) {
        return "Nu există o zi cu acest număr!";
    };
};

console.log(getDayOfWeek(8)); 

