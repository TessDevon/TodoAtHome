import './style/style.scss';

const toDoItemSection = document.querySelector('#toDoItemSection');

const todoArticles = [
  {
    toDaysDate: '2022-12-12',
    deadLineDate: '2023-03-15, 05:30',
    category: 'categoryGarden',
    toDoName: 'Första trädgårdstunnan',
    description: 'FÖrsta tömningen av trädgårdstunnan. Fyll på under veckan!',
  }, {
    toDaysDate: '2022-12-12',
    deadLineDate: '2023-05-30, 15:30',
    category: 'categoryHandyman',
    toDoName: 'Sotaren påbesök',
    description: 'Fråga om olika förbränningsalternativ.',
  }, {
    toDaysDate: '2022-12-14',
    deadLineDate: '2023-06-30, 08:00',
    category: 'categortHouse',
    toDoName: 'Måla om garaget',
    description: 'Målning av garage denna veckan med förtvätt och målning.',
  }, {
    toDaysDate: '2022-12-14',
    deadLineDate: '2023-03-05, 09:00',
    category: 'categoryGarden',
    toDoName: 'Första sådden',
    description: 'Börja förså Physalis och Vattenmelon.',
  }, {
    toDaysDate: '2022-12-14',
    deadLineDate: '2023-04-15, 10:00',
    category: 'categoryGarden',
    toDoName: 'Andra sådden',
    description: 'Dags att förså tomat och gurka',
  }, {
    toDaysDate: '2022-12-13',
    deadLineDate: '2023-03-15, 5:30',
    category: 'categoryGarden',
    toDoName: 'Första trädgårdstunnan',
    description: 'FÖrsta tömningen av trädgårdstunnan. Fyll på under veckan!',
  }];

/**
 * Sortering
 * Loop där objkekten körs i en array
 * Lägga in HTML strukturen.
 *
 *
 */

function updateTodoList() {
  toDoItemSection.innerHTML = '';

  for (let i = 0; i < todoArticles.length; i++) {
    toDoItemSection.innerHTML += 
    `<article class="toDoItemClass" id="toDoItem">
    <div class="datePartInTODOItem">
      <span class="toDaysDateClass" id="toDaysDate">${todoArticles[i].toDaysDate}</span>
      <span class="deadLineDateClass" id="deadLineDate">${todoArticles[i].deadLineDate}</span>
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
}

updateTodoList();