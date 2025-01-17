// document this function!
// eslint-disable-next-line folders/match-regex
export const renderList = (toRender = []) => {
  const ulEl = document.createElement('ul');

  for (const nextItem of toRender) {
    const liEl = document.createElement('li');
    liEl.innerText = nextItem;
    ulEl.appendChild(liEl);
  }

  return ulEl;
};
