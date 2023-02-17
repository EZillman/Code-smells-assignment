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

class Temp {
  constructor(public cityName: string, public dateOfMeasurement: Date, public temperature: number) {}
}

function averageWeeklyTemperature(temperatures: Temp[]) {
  let numberOfWeekDays = 7
  let millisecondsInAWeek = 604800000;
  let dailyTemperatures = 0;

  for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i].cityName === "Stockholm") {
      if (temperatures[i].dateOfMeasurement.getTime() > Date.now() - millisecondsInAWeek) {
        dailyTemperatures += temperatures[i].temperature;
      }
    }
  }

  return dailyTemperatures / numberOfWeekDays;
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
  let container = document.createElement('div');
  let title = createTitle(productInfo.name);
  let price = createPrice(productInfo.price);
  let image = createImg(productInfo.image);

  container.appendChild(title);
  container.appendChild(price);
  container.appendChild(image);
  productInfo.parent.appendChild(container);
};

function createTitle(name: string) {
  let productTitle = document.createElement('h4') as HTMLHeadElement;
  productTitle.innerHTML = name;

  return productTitle;
};

function createPrice(price: number) {
  let productPrice = document.createElement('strong') as HTMLElement;
  productPrice.innerHTML = price.toString();

  return productPrice;
};

function createImg(imageSrc: string) {
  let productImage = document.createElement('img') as HTMLImageElement;
  productImage.src = imageSrc;

  return productImage;
};


/*
  5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
  går att göra betydligt bättre. Gör om så många som du kan hitta!
  */

function presentStudents(students: Student[]) {
  for (const student of students){
    const container = document.createElement('li');
    let checkbox = createCheckbox(student.handedInOnTime);
    container.appendChild(checkbox);

    let listOfStudents = student.handedInOnTime
    ? document.querySelector('ul#passedstudents')
    : document.querySelector('ul#failedstudents');

    listOfStudents?.appendChild(container);
    }
};

function createCheckbox(checkBoolean: boolean) {
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = checkBoolean;

  return checkbox;
}


/*
  6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
  Lorem, ipsum, dolor, sit, amet
  Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
  */

function concatenateStrings() {
  let texts: string[] = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet'];

  return texts.join('');
};


/* 
7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
    Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
    fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
    lösning som är hållbar och skalar bättre. 
*/

class UserInformation {
  constructor(
    public name: string,
    public birthday: Date,
    public email: string,
    public password: string,
    public adress?: string,
    public avatar?: string
  ) {}
  

  calculateUserAge(): number {
    let usersYearOfBirth: number = 1970;

    let ageDiff = Date.now() - this.birthday.getTime();
    let ageDate = new Date(ageDiff);
    let userAge = Math.abs(ageDate.getUTCFullYear() - usersYearOfBirth);

    return userAge;
  }
}; 


function createUser(userInformation: UserInformation) {
  // Validation
  let usersAge = userInformation.calculateUserAge();
  let minimumAge: number = 20;

  if ((usersAge >= minimumAge)) {
    // Logik för att skapa en användare
  } else {
    return "Du är under 20 år";
  }
}