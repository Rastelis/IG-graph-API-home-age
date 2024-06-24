const queryString = window.location.search;
// console.log(queryString);

const text = document.createElement('div');
text.textContent = queryString;
document.body.append(text);
