import './style/style.scss';

/* KLART
 * Loop där objkekten körs i en array KLAR
 * Lägga in HTML strukturen KLAR
 * Lägga till färgändring till kategorierna? KLAR
 * Funktion där man lägger till Todos KLART
 */

/* ATT GÖRA
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

const toDoItemSection = document.querySelector('#toDoItemSection');
// hämtar upp sectionen där Todo-artiklarna ska skrivas in

const todoArticles = [ // arrayn med färdigskrivna Todo-objekt
  {
    toDaysDate: '2022-12-12',
    deadLineDate: '2023-03-15, 05:30',
    category: 'Trädgård',
    toDoName: 'Första trädgårdstunnan',
    description: 'FÖrsta tömningen av trädgårdstunnan. Fyll på under veckan!',
  }, {
    toDaysDate: '2022-12-12',
    deadLineDate: '2023-05-30, 15:30',
    category: 'Hantverkare',
    toDoName: 'Sotaren påbesök',
    description: 'Fråga om olika förbränningsalternativ.',
  }, {
    toDaysDate: '2022-12-14',
    deadLineDate: '2023-06-30, 08:00',
    category: 'Hus och hem',
    toDoName: 'Måla om garaget',
    description: 'Målning av garage denna veckan med förtvätt och målning.',
  }, {
    toDaysDate: '2022-12-14',
    deadLineDate: '2023-03-05, 09:00',
    category: 'Trädgård',
    toDoName: 'Första sådden',
    description: 'Börja förså Physalis och Vattenmelon.',
  }, {
    toDaysDate: '2022-12-14',
    deadLineDate: '2023-04-15, 10:00',
    category: 'Trädgård',
    toDoName: 'Andra sådden',
    description: 'Dags att förså tomat och gurka',
  }, {
    toDaysDate: '2022-12-13',
    deadLineDate: '2023-03-15, 5:30',
    category: 'Trädgård',
    toDoName: 'Första trädgårdstunnan',
    description: 'Första tömningen av trädgårdstunnan. Fyll på under veckan!',
  }];

function addColorToCategorys() { // funktion som stylar och aderar ikoner till kategorierna
  const categoryParts : NodeListOf<HTMLElement> = document.querySelectorAll('#category'); // hämtar kategorin
  const articleTodo : NodeListOf<HTMLElement> = document.querySelectorAll('#toDoItem'); // hämnar artiklarna/todos
  const categoryDivAddIcon : NodeListOf<HTMLElement> = document.querySelectorAll('#iconImg');
  // hämtar img där ikonen ska in
  console.log(categoryParts[0].innerHTML);

  for (let i = 0; i < categoryParts.length; i++) { // loop som kör igenom alla kategorier
    if (categoryParts[i].innerHTML === 'Trädgård') { // om kategorin är trädgård
      categoryParts[i].style.color = 'rgb(74, 119, 83)'; // ändras färgen till grön
      articleTodo[i].style.border = '5px solid rgb(74, 119, 83)'; // Todon får en grön ram
      categoryDivAddIcon[i].setAttribute('src', '/garden.jpg'); // Ikonen med blomma läggs till i img
      categoryDivAddIcon[i].setAttribute('alt', 'gardenIcon'); // med altvärde
    } else if (categoryParts[i].innerHTML === 'Hus och hem') { // om kategorin är hus och hem
      categoryParts[i].style.color = 'rgb(57, 57, 136)'; // så är textfärgen blå
      articleTodo[i].style.border = '5px solid rgb(57, 57, 136)'; // ramen runt blå
      categoryDivAddIcon[i].setAttribute('src', '/housesAndHomes.jpg'); // ikonen med huset läggs in i img
      categoryDivAddIcon[i].setAttribute('alt', 'homeIcon'); // alttext förs in
    } else if (categoryParts[i].innerHTML === 'Hantverkare') { // och om kategorin är hantverkare
      categoryParts[i].style.color = 'rgb(116, 59, 131)'; // blir textfärgen lila
      articleTodo[i].style.border = '5px solid rgb(116, 59, 131)'; // ram med lila färg runt
      categoryDivAddIcon[i].setAttribute('src', '/handyman.jpg'); // ikon med verktyg läggs in i img
      categoryDivAddIcon[i].setAttribute('alt', 'homeIcon'); // alttext läggs till
    }
  }
}

function updateTodoList() { // funktion som kör arrayn av todos och för över dem till HTML
  if (toDoItemSection != null) {
    toDoItemSection.innerHTML = ''; // innerHTML töms varje gång funktionen körs

    for (let i = 0; i < todoArticles.length; i++) { // loop som kör alla artiklarna, en i taget tills de är slut
      toDoItemSection.innerHTML // HTML-artiklarnas grund som adderas i sektoinen för todosen.
      += `<article class="toDoItemClass" id="toDoItem">
      <div class="datePartInTODOItem">
        <span class="toDaysDateClass" id="toDaysDate">${todoArticles[i].toDaysDate}</span>
        <span class="deadLineDateClass" id="deadLineDate">${todoArticles[i].deadLineDate}</span>
      </div>
      <div class="categoryDiv" id="categoryID">
        <img id="iconImg">
        <span class="categoryClass" id="category">${todoArticles[i].category}</span>
      </div>
        <h2 class="toDoNameClass" id="toDoName">${todoArticles[i].toDoName}</h2>
        <p class="descriptionClass" id="description">${todoArticles[i].description}</p>
      <p class="fiveDaysToDeadlineP" id="fiveDaysToDeadline"></p>
      <div class="todoButtonsDiv">
        <button class="deliteButtonClass" id="deliteButton">Radera</button>
        <button class="doneButtonClass" id="doneButton">Markera som klar</button>
      </div>      
    </article>`;
    }

    addColorToCategorys(); // kör funktionen för categorierna efter att listan uppdaterats
  }
}

updateTodoList();

const addNewTodoButton : HTMLElement = document.querySelector('#addNewTodoButtonID');
const deadLineDateInTodo : HTMLElement = document.querySelector('#deadlineDate');
const headerTodo : HTMLElement = document.querySelector('#nameOfToDo');
const descriptionTodo : HTMLElement = document.querySelector('#descriptionOfTodoArea');
const radioButtonGarden : HTMLElement = document.querySelector('#categoryGarden');
const radioButtonHome : HTMLElement = document.querySelector('#categoryHouse');
const radioButtonHandyman : HTMLElement = document.querySelector('#categoryHandyMan');

function addNewTodoItem(e) { // Funktion som startar ny todo.
  const today = new Date(); // Hämtar upp dagens datum
  const year = today.getFullYear(); // Hämtar endast året
  const month = today.getMonth(); // Hämtar endast måndaden
  const day = today.getDay(); // Hämtar endast dagen

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
    toDaysDate: todayYearMonthDay,
    deadLineDate: deadLineDateInTodo.value,
    category: categoryValue,
    toDoName: headerTodo.value,
    description: descriptionTodo.value
  };
  console.log(todoArticleToAdd);

  todoArticles.push(todoArticleToAdd);

  updateTodoList();
}

function addGarden() {
}

addNewTodoButton.addEventListener('click', addNewTodoItem);
