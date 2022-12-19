import './style/style.scss';

/* KLART
 * Loop där objkekten körs i en array KLAR
 * Lägga in HTML strukturen KLAR
 * Lägga till färgändring till kategorierna? KLAR
 * Funktion där man lägger till Todos KLART
 */

/* ATT GÖRA
 * Lägg till sparningar till LocalStorage för att spara de nya Todon.
 * Lägg till så det är två siffor i datumen, kolla Jennis film
 * Se över att få deadlinedatum att se bättre ut MDN
 * Tid:
 * Lägg till 5 dagar innan deadline med text i innerHTML
 * Lägg till röd skugga om deadlinen gått ut
 * Fler funktioner:
 * Aktivera ta bort TODO
 * Sortering, startdatum, deadline, namn (i bokstavsordning) och visas i kategori (i bokstavsordning)?
 * Aktivera Klarknapp och flytta längst ner i listan med grön bakgrundsfärg.
 */

/* Hur använda lokal storage? Sist i projektet..?
  Lagra objekt, detta fall den nya Todon som användaren skapar:
  localStorage.setItem('todoArticleToAdd', JSN.stringify(todoArticleToAdd));
  // Görs värdena om till sträng för att lagras på storage
  console.log(JSON.parse(localStroage.getItem('todoArticleToAdd')));
  // Då görs strängen om till objekt igen och kan användas i koden.
  Lagra Arrayer, detta fall. De arrayer som programmet skriver ut:
  localStorage.setItem('todoArticles', todoArticles); // Konverteras till sträng
  console.log(localStorage.getItem('todoArticles').split(',')); // Processa/konventera tillbaka till rätt format.
  localStorage.clear(); // Rensar bort data från programet i localStroage.
  */

const toDoItemSection = document.querySelector('#toDoItemSection');
// hämtar upp sectionen där Todo-artiklarna ska skrivas in

const todoArticles = [ // arrayn med färdigskrivna Todo-objekt
  {
    todaysDate: '2022-12-12',
    deadlineDate: '2023-03-15, 05:30',
    category: 'Trädgård',
    toDoName: 'Första trädgårdstunnan',
    description: 'FÖrsta tömningen av trädgårdstunnan. Fyll på under veckan!',
  }, {
    todaysDate: '2022-12-12',
    deadlineDate: '2023-05-30, 15:30',
    category: 'Hantverkare',
    toDoName: 'Sotaren påbesök',
    description: 'Fråga om olika förbränningsalternativ.',
  }, {
    todaysDate: '2022-12-14',
    deadlineDate: '2023-06-30, 08:00',
    category: 'Hus och hem',
    toDoName: 'Måla om garaget',
    description: 'Målning av garage denna veckan med förtvätt och målning.',
  }, {
    todaysDate: '2022-12-14',
    deadlineDate: '2023-03-05, 09:00',
    category: 'Trädgård',
    toDoName: 'Första sådden',
    description: 'Börja förså Physalis och Vattenmelon.',
  }, {
    todaysDate: '2022-12-14',
    deadlineDate: '2023-04-15, 10:00',
    category: 'Trädgård',
    toDoName: 'Andra sådden',
    description: 'Dags att förså tomat och gurka',
  }, {
    todaysDate: '2022-12-13',
    deadlineDate: '2023-03-15, 5:30',
    category: 'Trädgård',
    toDoName: 'Första trädgårdstunnan',
    description: 'Första tömningen av trädgårdstunnan. Fyll på under veckan!',
  }];

/**
* Funktion som stylar och adderar ikoner till kategorierna
*/
function addColorToCategorys() {
  const categoryParts : NodeListOf<HTMLElement> = document.querySelectorAll('#category'); // hämtar kategorin
  const articleTodo : NodeListOf<HTMLElement> = document.querySelectorAll('#toDoItem'); // hämnar artiklarna/todos
  const categoryDivAddIcon : NodeListOf<HTMLElement> = document.querySelectorAll('#iconImg');
  // hämtar img där ikonen ska in
  console.log(categoryParts[0].innerHTML);

  for (let i = 0; i < categoryParts.length; i++) { // loop som kör igenom alla kategorier
    if (categoryParts[i].innerHTML === 'Trädgård') { // om kategorin är trädgård
      categoryParts[i].classList.add('green'); // ändras färgen till grön
      articleTodo[i].classList.add('greenbordered'); // Todon får en grön ram
      categoryDivAddIcon[i].setAttribute('src', '/garden.jpg'); // Ikonen med blomma läggs till i img
      categoryDivAddIcon[i].setAttribute('alt', 'gardenIcon'); // med altvärde
    } else if (categoryParts[i].innerHTML === 'Hus och hem') { // om kategorin är hus och hem
      categoryParts[i].classList.add('blue'); // så är textfärgen blå
      articleTodo[i].classList.add('bluebordered'); // ramen runt blå
      categoryDivAddIcon[i].setAttribute('src', '/housesAndHomes.jpg'); // ikonen med huset läggs in i img
      categoryDivAddIcon[i].setAttribute('alt', 'homeIcon'); // alttext förs in
    } else if (categoryParts[i].innerHTML === 'Hantverkare') { // och om kategorin är hantverkare
      categoryParts[i].classList.add('purple'); // blir textfärgen lila
      articleTodo[i].classList.add('purplebordered'); // ram med lila färg runt
      categoryDivAddIcon[i].setAttribute('src', '/handyman.jpg'); // ikon med verktyg läggs in i img
      categoryDivAddIcon[i].setAttribute('alt', 'homeIcon'); // alttext läggs till
    }
  }
}

function removeTodo(e) {
  const index = e.target.getAttribute('todoIndex');
  if (index > -1) {
    todoArticles.splice(index, 1);
    updateTodoList();
  }
}

function updateTodoList() { // funktion som kör arrayn av todos och för över dem till HTML
  if (toDoItemSection != null) {
    toDoItemSection.innerHTML = ''; // innerHTML töms varje gång funktionen körs

    for (let i = 0; i < todoArticles.length; i++) { // loop som kör alla artiklarna, en i taget tills de är slut
      toDoItemSection.innerHTML // HTML-artiklarnas grund som adderas i sektoinen för todosen.
      += `<article class="toDoItemClass" id="toDoItem">
      <div class="datePartInTODOItem">
        <span class="todaysDateClass" id="todaysDate">${todoArticles[i].todaysDate}</span>
        <span class="deadlineDateClass" id="deadlineDate">${todoArticles[i].deadlineDate}</span>
      </div>
      <div class="categoryDiv" id="categoryID">
        <img id="iconImg">
        <span class="categoryClass" id="category">${todoArticles[i].category}</span>
      </div>
        <h2 class="toDoNameClass" id="toDoName">${todoArticles[i].toDoName}</h2>
        <p class="descriptionClass" id="description">${todoArticles[i].description}</p>
      <p class="fiveDaysToDeadlineP" id="fiveDaysToDeadline"></p>
      <div class="todoButtonsDiv">
        <button class="deliteButtonClass" todoIndex='${i}' id="deliteButton">Radera</button>
        <button class="doneButtonClass" todoIndex='${i}' id="doneButton">Markera som klar</button>
      </div>      
    </article>`;
    }

    addColorToCategorys(); // kör funktionen för categorierna efter att listan uppdaterats 
    const deliteTodoButton : NodeListOf<Element> | null = document.querySelectorAll('#deliteButton');

    for (let i = 0; i < deliteTodoButton.length; i++) {
      deliteTodoButton[i].addEventListener('click', removeTodo);
    }
  }
}

updateTodoList();

const addNewTodoButton : HTMLElement | null = document.querySelector('#addNewTodoButtonID');
const deadlineDateInTodo : HTMLElement | null = document.querySelector('#deadlineDate');
const deadLineTimeInTodo : HTMLElement | null = document.querySelector('#deadLineTime');
const headerTodo : HTMLElement | null = document.querySelector('#nameOfToDo');
const descriptionTodo : HTMLElement | null = document.querySelector('#descriptionOfTodoArea');
const radioButtonGarden : HTMLFormElement | null = document.querySelector('#categoryGarden');
const radioButtonHome : HTMLFormElement | null = document.querySelector('#categoryHouse');
const radioButtonHandyman : HTMLFormElement | null = document.querySelector('#categoryHandyMan');

function addNewTodoItem(e:MouseEvent) { // Funktion som startar ny todo.
  const today = new Date(); // Hämtar upp dagens datum
  const year = today.getFullYear(); // Hämtar endast året
  const month = (String(today.getMonth() + 1).padStart(2, '0'));
  // Hämtar endast måndaden, om månaden är ensiffrigt läggs det på en nolla före.
  const day = (String(today.getDate()).padStart(2, '0'));
  // Hämtar endast dagen, om det är under tio läggs det på en nolla före.
  const todayYearMonthDay = year + '-' + month + '-' + day;
  // Dagens datum sätts ihop.

  let categoryValue;
  if (radioButtonGarden.checked) {
    categoryValue = 'Trädgård';
  } else if (radioButtonHome.checked) {
    categoryValue = 'Hus och hem';
  } else if (radioButtonHandyman.checked) {
    categoryValue = 'Hantverkare';
  };

  e.preventDefault();
  const todoArticleToAdd = {
    todaysDate: todayYearMonthDay,
    deadlineDate: deadlineDateInTodo.value + (', ') + deadLineTimeInTodo.value,
    category: categoryValue,
    toDoName: headerTodo.value,
    description: descriptionTodo.value
  };
  console.log(todoArticleToAdd);

  todoArticles.push(todoArticleToAdd);

  updateTodoList();
}

addNewTodoButton.addEventListener('click', addNewTodoItem);
