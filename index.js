const lines = [
  {
    background: '#FF9393',
    updateTime: 1000,
    elements: [
      { background: '#fff', width: 25 },
      { background: '#FEBD01', width: 25 },
      { background: '#FE01AD', width: 25 },
    ],
  },
  {
    background: '#8F6FFF',
    updateTime: 2000,
  },
  {
    background: '#57FF8D',
    updateTime: 4000,
    elements: [
      { background: '#fff', width: 25 },
      { background: '#4C286F', width: 25 },
      { background: '#0B85B6', width: 10 },
      { background: '#092631', width: 25 },
    ],
  },
  {
    background: '#215505',
    updateTime: 500,
    elements: [
      { background: '#8AA993', width: 25 },
      { background: '#828E05', width: 50 },
      { background: '#7A7E4C', width: 25 },
    ],
  },
  {
    background: '#6D9995',
    updateTime: 100,
  },
  {
    background: '#ADACAE',
    updateTime: 1500,
    elements: [
      { background: '#1A4F7A', width: 60 },
      { background: '#EDAD25', width: 20 },
      { background: '#F9EB18', width: 20 },
    ],
  },
];

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const setNewColor = line => {
  const newColor = generateRandomColor();
  line.style.backgroundColor = newColor;
};

const changeColor = array => {
  const divs = document.querySelectorAll('.line');
  const timers = [];
  for (let i = 0; i < divs.length; i += 1) {
    timers[i] = setInterval(() => {
      setNewColor(divs[i]);
    }, array[i].updateTime);
  }
};

const createLines = array => {
  array.forEach(line => {
    const windowHeight = window.innerHeight;
    const newDiv = document.createElement('div');
    newDiv.classList.add('line');
    newDiv.style.width = '100%';
    newDiv.style.display = 'flex';
    newDiv.style.backgroundColor = line.background;
    newDiv.style.height = `${Math.round(windowHeight / lines.length).toString()}px`;
    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(newDiv);
    if (line.elements) {
      line.elements.forEach(elem => {
        const element = document.createElement('div');
        element.style.width = `${elem.width}%`;
        element.style.height = '100%';
        element.style.opacity = '0.5';
        element.style.background = elem.background;
        element.style.background = elem.background;
        newDiv.appendChild(element);
      });
    }
  });
};

createLines(lines);
changeColor(lines);
