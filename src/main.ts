import './style/style.scss';
import './style/style.scss';
import garden from './garden.jpg';
import housesAndHomes from '/housesAndHomes.jpg';
import handyman from '/handyman.jpg';


/* KLARA TODO
 * Loop där objkekten körs i en array
 * Lägga in HTML strukturen
 * Lägga till färgändring till kategorierna?
 * Funktion där man lägger till Todos
 * Lägg till så det är två siffor i datumen, kolla Jennis film
 * Se över att få deadlinedatum att se bättre ut MDN
 * Aktivera ta bort TODO
 * Sortering, startdatum, deadline, namn (i bokstavsordning) och visas i kategori (i bokstavsordning)?
 * Filtrering
 * Lägga till 5 dagar innan deadline med text i innerHTML
 * Lägg till röd skugga och byt röda texten när tiden har gått ut.
 * Rätta deliteknappen som inte hittar rätt index när listan är sorterad.
 * Aktivera Klarknapp och flytta längst ner i listan med grå bakgrundsfärg och kryss i texten på knappen.
 * Kolla av validering och Lighthouse bifoga filerna.
 * Lägg till sparningar till LocalStorage för att spara de nya Todon.
 * Se över TS och lägg till kodkommnetarer.
 */

const toDoItemSection = document.querySelector('#toDoItemSection');
// hämtar upp sectionen där Todo-artiklarna ska skrivas in

type Todo = {
  todaysDate: string;
  deadlineDate: string;
  category: 'Trädgård' | 'Hantverkare' | 'Hus och hem';
  toDoName: string;
  description: string;
  isCompleted: boolean;
  todoArticlesIndex?: number;
};

let todoArticles: Todo[] = [
  // arrayn med färdigskrivna Todo-objekt

  {
    todaysDate: '2022-12-12',
    deadlineDate: '2023-03-06, 05:30',
    category: 'Trädgård',
    toDoName: 'Första trädgårdstunnan',
    description: 'Första tömningen av trädgårdstunnan. Fyll på under veckan!',
    isCompleted: false,
  },
  {
    todaysDate: '2022-12-12',
    deadlineDate: '2023-05-30, 15:30',
    category: 'Hantverkare',
    toDoName: 'Sotaren påbesök',
    description: 'Fråga om olika förbränningsalternativ.',
    isCompleted: false,
  },
  {
    todaysDate: '2022-12-14',
    deadlineDate: '2023-02-12, 08:00',
    category: 'Trädgård',
    toDoName: 'Grönsakslandet',
    description: 'Gräva ner grenar i komposten.',
    isCompleted: false,
  },
  {
    todaysDate: '2022-12-14',
    deadlineDate: '2023-02-05, 09:00',
    category: 'Hus och hem',
    toDoName: 'Första sådden',
    description: 'Börja förså Physalis och Vattenmelon.',
    isCompleted: false,
  },
  {
    todaysDate: '2022-12-14',
    deadlineDate: '2023-04-15, 10:00',
    category: 'Trädgård',
    toDoName: 'Andra sådden',
    description: 'Dags att förså tomat och gurka',
    isCompleted: false,
  },
  {
    todaysDate: '2022-12-13',
    deadlineDate: '2022-12-26, 5:30',
    category: 'Hantverkare',
    toDoName: 'El-killen ska fixa utebelysningen',
    description: 'Första tömningen av trädgårdstunnan. Fyll på under veckan!',
    isCompleted: false,
  },
  {
    todaysDate: '2022-12-14',
    deadlineDate: '2022-12-12, 08:00',
    category: 'Hus och hem',
    toDoName: 'Julpynta',
    description: 'Hela huset.',
    isCompleted: false,
  },
];

/**
 * Funktion som stylar och adderar ikoner till kategorierna
 */
function addColorToCategorys() {
  const deadlinesDateDiv: NodeListOf<HTMLElement> = document.querySelectorAll('#deadlineDateDiv');
  const categoryParts: NodeListOf<HTMLElement> = document.querySelectorAll('#category'); // hämtar kategorin
  const articleTodo: NodeListOf<HTMLElement> = document.querySelectorAll('#toDoItem'); // hämnar artiklarna/todos
  const categoryDivAddIcon: NodeListOf<HTMLElement> = document.querySelectorAll('#iconImg');
  // hämtar img där ikonen ska in

  const pickUpIsCompliteButton = document.querySelectorAll('#doneButton'); // hämta lägg till todoknapp
  const ComplietedButtonDeliteRedText = document.querySelectorAll('#fiveDaysToDeadline');
  // hämta textfältet med den rödstylade texten.

  for (let i = 0; i < categoryParts.length; i++) {
    // loop som kör igenom alla kategorier
    const index = pickUpIsCompliteButton[i].getAttribute('todoIndex');
    if (!Number.isNaN(index)) {
      if (todoArticles[index].isCompleted) {
        // om klarmarkerad så läggs todon längst ner i listan
        pickUpIsCompliteButton[i].innerHTML = 'Klar!'; // klarknappens text ändras
        articleTodo[i].classList.add('IsComplietedBorder'); // lägger till grå ram
        ComplietedButtonDeliteRedText[i].innerHTML = ''; // den röda texten töms
      }
    }
    if (new Date() >= new Date(deadlinesDateDiv[i].innerHTML)) {
      articleTodo[i].classList.add('deadlineCSS'); // lägger till röd ram
    }
    if (categoryParts[i].innerHTML === 'Trädgård') {
      // om kategorin är trädgård
      categoryParts[i].classList.add('green'); // ändras färgen till grön
      articleTodo[i].classList.add('greenbordered'); // Todon får en grön ram
      categoryDivAddIcon[i].setAttribute('src', garden); // Ikonen med blomma läggs till i img
      categoryDivAddIcon[i].setAttribute('alt', 'gardenIcon'); // med altvärde
    } else if (categoryParts[i].innerHTML === 'Hus och hem') {
      // om kategorin är hus och hem
      categoryParts[i].classList.add('blue'); // så är textfärgen blå
      articleTodo[i].classList.add('bluebordered'); // ramen runt blå
      categoryDivAddIcon[i].setAttribute('src', housesAndHomes); // ikonen med huset läggs in i img
      categoryDivAddIcon[i].setAttribute('alt', 'homeIcon'); // alttext förs in
    } else if (categoryParts[i].innerHTML === 'Hantverkare') {
      // och om kategorin är hantverkare
      categoryParts[i].classList.add('purple'); // blir textfärgen lila
      articleTodo[i].classList.add('purplebordered'); // ram med lila färg runt
      categoryDivAddIcon[i].setAttribute('src', handyman); // ikon med verktyg läggs in i img
      categoryDivAddIcon[i].setAttribute('alt', 'homeIcon'); // alttext läggs till
    }
  }
}

const sortByCategory: HTMLFormElement | null = document.querySelector('#categoryRadio');
const sortByCreatedate: HTMLFormElement | null = document.querySelector('#createDateRadio');
const sortByDeadlinedate: HTMLFormElement | null = document.querySelector('#deadlineRadio');
const sortByNameOfTodo: HTMLFormElement | null = document.querySelector('#toDoNameRadio');
const filtreGarden: HTMLFormElement | null = document.querySelector('#filtreGarden');
const filtreHandyman: HTMLFormElement | null = document.querySelector('#filtreHandyman');
const filtreHome: HTMLFormElement | null = document.querySelector('#filtreHome');
const filtreAll: HTMLFormElement | null = document.querySelector('#filtreAll');

/**
 * Sortering och filtering av todos
 */
function sortandfilterlist() {
  let todoArticlesCopy: Todo[] = [...todoArticles];
  // Gör en kopia av arrayns med todos. Annars skrives dessa över när man kör filter.
  for (let i = 0; i < todoArticlesCopy.length; i++) {
    todoArticlesCopy[i].todoArticlesIndex = i;
    // kopian har en egenskap av orginalets index, läggs till till objekten
  }
  /**
   * Sortering av todos
   */
  if (sortByCreatedate != null && sortByCreatedate.checked) {
    // Om radiobutton för skapandedatum är checkad
    todoArticlesCopy.sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) {
        return 1;
      }
      if (!a.isCompleted && b.isCompleted) {
        return -1;
      }
      return new Date(a.todaysDate).getTime() - new Date(b.todaysDate).getTime(); // hämtar epoch-time
    }); // sorteras listan datum i ordning
  } else if (sortByDeadlinedate != null && sortByDeadlinedate.checked) {
    // Om radiobutton deadline datum är checked
    todoArticlesCopy.sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) {
        return 1;
      }
      if (!a.isCompleted && b.isCompleted) {
        return -1;
      }
      return new Date(a.deadlineDate).getTime() - new Date(b.deadlineDate).getTime();
    });
    // sorteras listan datum i ordning
  } else if (sortByCategory != null && sortByCategory.checked) {
    // Om radiobutton för kategori är checkad
    todoArticlesCopy.sort((a, b) => {
      // Sorteras listan
      if (a.isCompleted && !b.isCompleted) {
        return 1;
      }
      if (!a.isCompleted && b.isCompleted) {
        return -1;
      }
      if (a.category > b.category) {
        // i bokstavsordning
        return 1;
      }
      if (a.category < b.category) {
        // om den returnerar omvänd ordning
        return -1; // Visar den falskt
      }
      return 0; // Om den är oräfrndrad utgångsvärdet
    });
  } else if (sortByNameOfTodo != null && sortByNameOfTodo.checked) {
    todoArticlesCopy.sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) {
        return 1;
      }
      if (!a.isCompleted && b.isCompleted) {
        return -1;
      }
      if (a.toDoName > b.toDoName) {
        return 1;
      }
      if (a.toDoName < b.toDoName) {
        return -1;
      }
      return 0;
    });
  } else {
    todoArticlesCopy.sort((a, b) => {
      if (a.isCompleted && !b.isCompleted) {
        return 1;
      }
      if (!a.isCompleted && b.isCompleted) {
        return -1;
      }
      return 0;
    });
  }
  /**
   * Filter av todos
   * */
  if (filtreGarden != null && filtreGarden.checked) {
    const gardenTodos = todoArticlesCopy.filter((todoGarden) => todoGarden.category === 'Trädgård');
    todoArticlesCopy = gardenTodos;
  }
  if (filtreHandyman != null && filtreHandyman.checked) {
    const handymanTodos = todoArticlesCopy.filter((todoHandyman) => todoHandyman.category === 'Hantverkare');
    todoArticlesCopy = handymanTodos;
  }
  if (filtreHome != null && filtreHome.checked) {
    const homeTodos = todoArticlesCopy.filter((todosHome) => todosHome.category === 'Hus och hem');
    todoArticlesCopy = homeTodos;
  }
  if (filtreAll != null && filtreAll.checked) {
    const allTodos = todoArticlesCopy;
    todoArticlesCopy = allTodos;
  }
  return todoArticlesCopy;
}

function dueText(todoArticle: Todo) {
  if (new Date() >= new Date(todoArticle.deadlineDate)) {
    return 'Deadline är uppnådd!';
  }
  if (Number(new Date(todoArticle.deadlineDate)) < Number(new Date()) + 5 * 24 * 60 * 60 * 1000) {
    return 'Nu är det inom fem dagar till deadline!';
  }
  return '';
  // Text som uppmärksammar deadlinespannet inom fem dagar och deadlinens utgång.
}

/**
 * Funktion som kör arrayn av todos och för över dem till HTML
 */
function updateTodoList() {
  if (toDoItemSection != null) {
    toDoItemSection.innerHTML = ''; // innerHTML töms varje gång funktionen körs
    const saveInLocalStorage = JSON.stringify(todoArticles);
    localStorage.setItem('Todos', saveInLocalStorage); // sparar todoarticles som stäng i localStroage

    const todoArticlesSortFiltreList = sortandfilterlist();

    for (let i = 0; i < todoArticlesSortFiltreList.length; i++) {
      // loop som kör alla artiklarna, en i taget tills de är slut
      toDoItemSection.innerHTML // HTML-artiklarnas grund som adderas i sektoinen för todosen.
      += `<article class="toDoItemClass" id="toDoItem">
      <div class="datePartInTODOItem">
        <span class="todaysDateClass" id="todaysDate">${todoArticlesSortFiltreList[i].todaysDate}</span>
        <span class="deadlineDateClass" id="deadlineDateDiv">${todoArticlesSortFiltreList[i].deadlineDate}</span>
      </div>
      <div id="categoryID" class="categoryDiv">
        <img id="iconImg" class="iconImgClass">
        <span class="categoryClass" id="category">${todoArticlesSortFiltreList[i].category}</span>
      </div>
        <h2 class="toDoNameClass" id="toDoName">${todoArticlesSortFiltreList[i].toDoName}</h2>
        <p class="descriptionClass" id="description">${todoArticlesSortFiltreList[i].description}</p>
      <p class="fiveDaysToDeadlineP" id="fiveDaysToDeadline">${dueText(todoArticlesSortFiltreList[i])}</p>
      <div class="todoButtonsDiv">
        <button class="deliteButtonClass" todoIndex='${todoArticlesSortFiltreList[i].todoArticlesIndex}' 
        id="deliteButton">Radera</button>
        <button class="doneButtonClass" todoIndex='${todoArticlesSortFiltreList[i].todoArticlesIndex}' 
        id="doneButton">Markera som klar</button>
      </div>      
    </article>`;
    }

    addColorToCategorys(); // kör funktionen för categorierna efter att listan uppdaterats
    const deliteTodoButton: NodeListOf<Element> | null = document.querySelectorAll('#deliteButton');
    const markDoneTodo: NodeListOf<Element> | null = document.querySelectorAll('#doneButton');

    for (let i = 0; i < deliteTodoButton.length; i++) {
      deliteTodoButton[i].addEventListener('click', removeTodo);
      // när man trycker på delite, startas functionen removeTodo
    }
    for (let i = 0; i < markDoneTodo.length; i++) {
      markDoneTodo[i].addEventListener('click', moveMarckedTodoLastPlace);
      // när man markerar tododn som klar startar funktionen som lägger den sist i flödet
    }
  }
}

/**
 * Funktion som tar bort todos
 */
function removeTodo(e: Event) {
  const index = e.target.getAttribute('todoIndex'); // Väljer ut attributet todoIndex
  if (index > -1) {
    // Om index finns
    todoArticles.splice(index, 1); // så ska det aktuella indexet tas bort, endast ett index
    updateTodoList(); // Uppdaterar nya listan
  }
}

// Flyttar den märkta todon längst ner i flödet.
function moveMarckedTodoLastPlace(e: Event) {
  const index = e.target.getAttribute('todoIndex');
  if (index > -1) {
    todoArticles[index].isCompleted = true;
    updateTodoList();
  }
}

sortByCategory?.addEventListener('click', updateTodoList);
sortByCreatedate?.addEventListener('click', updateTodoList);
sortByDeadlinedate?.addEventListener('click', updateTodoList);
sortByNameOfTodo?.addEventListener('click', updateTodoList);
filtreGarden?.addEventListener('click', updateTodoList);
filtreHandyman?.addEventListener('click', updateTodoList);
filtreHome?.addEventListener('click', updateTodoList);
filtreAll?.addEventListener('click', updateTodoList);

const dataInLocalstorage = localStorage.getItem('Todos');
if (dataInLocalstorage != null) {
  // om localstorage har ett värde som inte är noll
  todoArticles = JSON.parse(localStorage.getItem('Todos')); // laddas datan in från localstorage till todoArticles
}

updateTodoList();

const addNewTodoButton: HTMLElement | null = document.querySelector('#addNewTodoButtonID');
const deadlineDateInTodo: HTMLElement | null = document.querySelector('#deadlineDate');
const deadLineTimeInTodo: HTMLElement | null = document.querySelector('#deadLineTime');
const headerTodo: HTMLElement | null = document.querySelector('#nameOfToDo');
const descriptionTodo: HTMLElement | null = document.querySelector('#descriptionOfTodoArea');
const radioButtonGarden: HTMLFormElement | null = document.querySelector('#categoryGarden');
const radioButtonHome: HTMLFormElement | null = document.querySelector('#categoryHouse');
const radioButtonHandyman: HTMLFormElement | null = document.querySelector('#categoryHandyMan');

/**
 * Funktion som startar ny tododatum för Todon
 */
function addNewTodoItem(e: MouseEvent) {
  const today = new Date(); // Hämtar upp dagens datum
  const year = today.getFullYear(); // Hämtar endast året
  const month = String(today.getMonth() + 1).padStart(2, '0');
  // Hämtar endast måndaden, om månaden är ensiffrigt läggs det på en nolla före.
  const day = String(today.getDate()).padStart(2, '0');
  // Hämtar endast dagen, om det är under tio läggs det på en nolla före.
  const todayYearMonthDay = year + '-' + month + '-' + day;
  // Dagens datum sätts ihop.

  /**
   * Sätter värdet i kategorin utifrån vilken radiobutton i formuläret som är ifyllt.
   */
  let categoryValue;
  if (radioButtonGarden != null && radioButtonGarden.checked) {
    categoryValue = 'Trädgård';
  } else if (radioButtonHome != null && radioButtonHome.checked) {
    categoryValue = 'Hus och hem';
  } else if (radioButtonHandyman != null && radioButtonHandyman.checked) {
    categoryValue = 'Hantverkare';
  }

  e.preventDefault(); // Nollar knappens egenskaper som laddar om sidan vid tryck
  /**
   * Skapar variabel innehållande ett todo-objekt med den data som användaren fyllt i och skapat i sitt todo-formulär.
   */
  const todoArticleToAdd = {
    todaysDate: todayYearMonthDay,
    deadlineDate: deadlineDateInTodo.value + ', ' + deadLineTimeInTodo.value,
    category: categoryValue,
    toDoName: headerTodo.value,
    description: descriptionTodo.value,
    isCompleted: false,
  };

  todoArticles.push(todoArticleToAdd); // Objeket pushas till arrayn med todo-objekt

  updateTodoList(); // Körs för att få med det nya todo-objektet
  document.getElementById('formNewTodo').reset();
}

addNewTodoButton?.addEventListener('click', addNewTodoItem); // När Lägg till todoknapp klickas startar funktionen

const addButton: HTMLFormElement | null = document.querySelector('#addNewTodoButtonID');
const deadlineDateCheck: HTMLFormElement | null = document.querySelector('#deadlineDate');
const todoNameCheck: HTMLFormElement | null = document.querySelector('#nameOfToDo');
const descriptionTodoCheck: HTMLFormElement | null = document.querySelector('#descriptionOfTodoArea');
const gardenTodoscheck: HTMLFormElement | null = document.querySelector('#categoryGarden');
const homeTodosCheck: HTMLFormElement | null = document.querySelector('#categoryHouse');
const handymanTodosCheck: HTMLFormElement | null = document.querySelector('#categoryHandyMan');

/**
 * Funktion som aktiverar lägg till todo om kraven uppfylls.
 * Kräver att fälten inte är tomma för att kunna lägga till en todo.
 */
function activateAddButton() {
  if (
    deadlineDateCheck != null && deadlineDateCheck.value !== ''
    && todoNameCheck != null && todoNameCheck.value !== ''
    && descriptionTodoCheck != null && descriptionTodoCheck.value !== ''
    && ((gardenTodoscheck != null && gardenTodoscheck.checked)
    || (homeTodosCheck != null && homeTodosCheck.checked)
    || (handymanTodosCheck != null && handymanTodosCheck.checked))
  ) {
    addButton?.removeAttribute('disabled');
  } else {
    addButton?.setAttribute('disabled', '');
  }
}

deadlineDateCheck?.addEventListener('input', activateAddButton);
gardenTodoscheck?.addEventListener('click', activateAddButton);
homeTodosCheck?.addEventListener('click', activateAddButton);
handymanTodosCheck?.addEventListener('click', activateAddButton);
todoNameCheck?.addEventListener('input', activateAddButton);
descriptionTodoCheck?.addEventListener('input', activateAddButton);
