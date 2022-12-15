import './style/style.scss';

const toDoItemSection = document.querySelector('#toDoItemSection');

const todoArticles = [
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
    description: 'FÖrsta tömningen av trädgårdstunnan. Fyll på under veckan!',
  }];

/**
 * Sortering, startdatum, deadline, namn (i bokstavsordning) och visas i kategori (i bokstavsordning)?
 * Loop där objkekten körs i en array KLAR
 * Lägga in HTML strukturen KLAR
 * Lägga till färgändring till kategorierna? KLAR
 * Lägg till 5 dagar innan deadline med text i innerHTML
 * Lägg till röd skugga om deadlinen gått ut
 * Aktivera ta bort TODO
 * Aktivera Klarknapp och flytta längst ner i listan med grön bakgrundsfärg.
 *
 * Lägg till TODOs kommer fler punkter här in under när ovanstående är klart.
 */

function addColorToCategorys() {
  const categoryParts : NodeListOf<HTMLElement> = document.querySelectorAll('#category');
  console.log(categoryParts[0].innerHTML);

  for (let i = 0; i < categoryParts.length; i++) {
    if (categoryParts[i].innerHTML === 'Trädgård') {
      categoryParts[i].style.backgroundColor = 'green';
      categoryParts[i].style.color = 'white';
    } else if (categoryParts[i].innerHTML === 'Hus och hem') {
      categoryParts[i].style.backgroundColor = 'darkblue';
      categoryParts[i].style.color = 'white';
    } else if (categoryParts[i].innerHTML === 'Hantverkare') {
      categoryParts[i].style.backgroundColor = 'purple';
      categoryParts[i].style.color = 'white';
    }
  }
}

function updateTodoList() {
  if (toDoItemSection != null) {
    toDoItemSection.innerHTML = '';

    for (let i = 0; i < todoArticles.length; i++) {
      toDoItemSection.innerHTML
      += `<article class="toDoItemClass" id="toDoItem">
      <div class="datePartInTODOItem">
        <span class="toDaysDateClass" id="toDaysDate">${todoArticles[i].toDaysDate}</span>
        <span class="deadLineDateClass" id="deadLineDate">${todoArticles[i].deadLineDate}</span>
      </div>
      <p class="categoryClass" id="category">${todoArticles[i].category}</p>
      <h2 class="toDoNameClass" id="toDoName">${todoArticles[i].toDoName}</h2>
      <p class="descriptionClass" id="description">${todoArticles[i].description}</p>
      <p class="fiveDaysToDeadlineP" id="fiveDaysToDeadline"></p>
      <div class="todoButtonsDiv">
        <button class="deliteButtonClass" id="deliteButton">Radera</button>
        <button class="doneButtonClass" id="doneButton">Markera som klar</button>
      </div>      
    </article>`;
    }

    addColorToCategorys();
  }
}

updateTodoList();
