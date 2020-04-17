let available_agents = [
  {
    id: 1,
    name: 'Elizabeth Fisher',
    image: 'elizabethfisher',
  },
  {
    id: 2,
    name: 'Andreea Lucas',
    image: 'andreealucas',
  },
  {
    id: 3,
    name: 'Jonathan Carpenter',
    image: 'jonathancarpenter',
  },
  {
    id: 4,
    name: 'Kelly Young',
    image: 'kellyyoung',
  },
  {
    id: 5,
    name: 'Doris Patel',
    image: 'dorispatel',
  },
  {
    id: 6,
    name: 'Harry Palmer',
    image: 'harrypalmer',
  },
  {
    id: 7,
    name: 'Jonathan Gibson',
    image: 'jonathangibson',
  },
  {
    id: 8,
    name: 'Elizabeth Fisher',
    image: 'elizabethfisher',
  },
  {
    id: 9,
    name: 'Andreea Lucas',
    image: 'andreealucas',
  },
  {
    id: 10,
    name: 'Jonathan Carpenter',
    image: 'jonathancarpenter',
  },
];
let assigned_agents = [];
let availableListLiArray;

const availableList = document.querySelector('.available-list');
const assignedList = document.querySelector('.assigned-list');

const RenderList = function (arr) {
  let html = '';
  arr.forEach((person) => {
    html =
      html +
      ` <li data-id=${person.id} class='list-item'>
    <img src=${'./imgs/' + person.image + '.png'} alt=${person.image} /><span>
      ${person.name}</span
    >
  </li>`;
  });
  return html;
};

const addSelectedClassForAvailList = (e) => {
  availableListLiArray.forEach((el) => el.classList.remove('selected'));
  if (e.target.className === 'list-item') {
    e.target.classList.add('selected');
  } else {
    e.target.parentElement.classList.add('selected');
  }
};

const addSelectedClassForAssignedList = (e) => {
  assignedListLiArray.forEach((el) => el.classList.remove('selected'));
  if (e.target.className === 'list-item') {
    e.target.classList.add('selected');
  } else {
    e.target.parentElement.classList.add('selected');
  }
};

const renderHtml = () => {
  availableList.innerHTML =
    available_agents.length === 0
      ? '<h2>There are no agents available currently</h2>'
      : RenderList(available_agents);

  assignedList.innerHTML =
    assigned_agents.length === 0
      ? '<h2>There are no agents available currently</h2>'
      : RenderList(assigned_agents);

  addEventListenerToList();
};

const assignAgent = (e) => {
  const el = document.querySelector('.available-list .selected');
  const id = el.dataset.id;
  const index = available_agents.findIndex((agent) => {
    return agent.id == id;
  });
  const assignedAgent = available_agents.splice(index, 1);
  assigned_agents.push(assignedAgent[0]);
  renderHtml();
};

const revokeAgent = (e) => {
  const el = document.querySelector('.assigned-list .selected');
  const id = el.dataset.id;
  const index = assigned_agents.findIndex((agent) => {
    return agent.id == id;
  });
  const availableAgent = assigned_agents.splice(index, 1);
  available_agents.push(availableAgent[0]);
  renderHtml();
};

const addEventListenerToList = () => {
  availableListLiArray = Array.from(
    document.querySelectorAll('.available-list li')
  );

  availableListLiArray.forEach((el) => {
    el.addEventListener('click', addSelectedClassForAvailList);
  });

  if (availableListLiArray.length > 0)
    availableListLiArray[0].classList.add('selected');

  assignedListLiArray = Array.from(
    document.querySelectorAll('.assigned-list li')
  );

  assignedListLiArray.forEach((el) => {
    el.addEventListener('click', addSelectedClassForAssignedList);
  });

  if (assignedListLiArray.length > 0)
    assignedListLiArray[0].classList.add('selected');
};

window.onload = (e) => {
  const availableList = document.querySelector('.available-list');
  availableList.innerHTML = RenderList(available_agents);
  addEventListenerToList();

  document.querySelector('.btn-grant').addEventListener('click', assignAgent);
  document.querySelector('.btn-revoke').addEventListener('click', revokeAgent);
};
