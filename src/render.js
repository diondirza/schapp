import calcPosition from './calc';

export default function render(data) {
  const container = document.querySelector('.bars');
  const doc = document.createDocumentFragment();
  const source = data.map(calcPosition);

  source.forEach(({ text, ...styleProps }) => {
    const element = document.createElement('div');

    element.classList.add('bar');
    element.style.top = styleProps.top;
    element.style.left = styleProps.left;
    element.style.height = styleProps.height;
    element.style.width = styleProps.width;
    element.innerText = text;

    doc.appendChild(element);
  });

  if (container.childNodes.length) {
    const range = document.createRange();

    range.selectNodeContents(container);
    range.deleteContents();
    range.insertNode(doc);
  } else {
    container.appendChild(doc);
  }
}
