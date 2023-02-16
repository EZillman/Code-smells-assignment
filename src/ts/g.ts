/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

function getLength(jumpings: number[]): number {
  return jumpings.reduce(
    (jumpDistanceSoFar, currentJump) => { return jumpDistanceSoFar + currentJump}
  );
};


/*
  2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
  */

class Student {
  constructor(
    public name: string,
    public handedInOnTime: boolean,
    public passed: boolean
  ) {}
};

function getStudentStatus(student: Student): string {
  if(student.name == 'Sebastian' && student.handedInOnTime && student.passed) {
    return 'VG';
  } else {
    return 'IG';
  }
};

/*
  3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
  Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
  */

/* TA BORT INNAN INLÄMNING
class Temp {
  constructor(public q: string, public where: Date, public v: number) {}
}

function averageWeeklyTemperature(heights: Temp[]) {
  let r = 0;

  for (let who = 0; who < heights.length; who++) {
    if (heights[who].q === "Stockholm") {
      if (heights[who].where.getTime() > Date.now() - 604800000) {
        r += heights[who].v;
      }
    }
  }

  return r / 7;
}*/


class Temp {
  constructor(public q: string, public where: Date, public v: number) {}
}

function averageWeeklyTemperature(heights: Temp[]) {
  let numberOfWeekDays = 7
  let aWeekInMilliseconds = 604800000;
  let averageTemperature = 0;

  for (let who = 0; who < heights.length; who++) {
    if (heights[who].q === "Stockholm") {
      if (heights[who].where.getTime() > Date.now() - aWeekInMilliseconds) {
        averageTemperature += heights[who].v;
      }
    }
  }

  return averageTemperature / numberOfWeekDays;
}




/*
  4. Följande funktion kommer att presentera ett objekt i dom:en. 
  Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
  */

interface IProductInfo{
  name: string,
  price: number,
  amount: number,
  description: string,
  image: string,
  parent: HTMLElement
};

function showProduct(productInfo: IProductInfo) {
  const container = document.createElement('div');
  container.innerHTML = `
    <h4>${productInfo.name}</h4>
    <img src='${productInfo.image}'>
    <strong>${productInfo.price.toString()}</strong>`;

    productInfo.parent.appendChild(container);
};


/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
  */
function presentStudents(students: Student[]) {
  for (const student of students) {
    if (student.handedInOnTime) {
      let container = document.createElement("div");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = true;

      container.appendChild(checkbox);
      let listOfStudents = document.querySelector("ul#passedstudents");
      listOfStudents?.appendChild(container);
    } else {
      let container = document.createElement("div");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = false;

      container.appendChild(checkbox);
      let listOfStudents = document.querySelector("ul#failedstudents");
      listOfStudents?.appendChild(container);
    }
  }
}

/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */
function concatenateStrings() {
  let result = "";
  result += "Lorem";
  result += "ipsum";
  result += "dolor";
  result += "sit";
  result += "amet";

  return result;
}

/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/

/*
function createUser(
  name: string,
  birthday: Date,
  email: string,
  password: string
) {
  // Validation

  let ageDiff = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDiff);
  let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  console.log(userAge);

  if (!(userAge < 20)) {
    // Logik för att skapa en användare
  } else {
    return "Du är under 20 år";
  }
} */

/**
 * CODE SMELLS:
 * Magic numbers, 20 och 1970
 * 
 *  
 */

interface IUserInformation {
    name: string,
    birthday: Date,
    email: string,
    password: string,
    adress?: string,
    avatar?: string
}

function createUser(userInformation: IUserInformation) {
  // Validation

  let ageDiff = Date.now() - userInformation.birthday.getTime();
  let ageDate = new Date(ageDiff);
  let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);

  console.log(userAge);

  if ((userAge >= 20)) {
    // Logik för att skapa en användare
  } else {
    return "Du är under 20 år";
  }
}