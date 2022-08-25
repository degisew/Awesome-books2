import AwesomeBooks from './logic.js';

const dynamicMaincontainer = document.querySelector('.dynamic-contents-div');
const bookListLink = document.getElementById('list');
const defaultSelectedLink = document.getElementById('auto-focus');
const bookAddLink = document.getElementById('add');
const contactLink = document.getElementById('contact');
const currentDate = document.getElementById('date-time-div');
// Creating All dynamic parts here dynamically.

// Creating DateTime function
const today = new Date();
const date = `${today.getFullYear()}-${
  today.getMonth() + 1
}-${today.getDate()}`;
const x = today.getHours() < 12 ? 'am' : 'pm';
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} ${x}`;

const dateTime = `${date} ${time}`;

currentDate.innerHTML = dateTime;

// Creating Awesome Books List Page
const listDiv = document.createElement('div');
listDiv.className = 'list-div';
// Creating List Heading
const listHeading = document.createElement('h1');
listHeading.textContent = 'All Awesome Books';
listHeading.id = 'list-heading';
// Creating Add-book Page
const addDiv = document.createElement('div');
addDiv.className = 'add-div';
// Creating a Heading
const addBookHeading = document.createElement('h1');
addBookHeading.textContent = 'Add a new Book';
// Creating Form
const form = document.createElement('form');
form.id = 'form';
// Title Input Field
const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.setAttribute('required', '');
titleInput.placeholder = 'Title';
titleInput.id = 'title';
titleInput.className = 'input';
// Author Input Field
const authorInput = document.createElement('input');
authorInput.type = 'text';
authorInput.setAttribute('required', '');
authorInput.placeholder = 'Author';
authorInput.id = 'author';
authorInput.className = 'input';
// Creating Add Button
const addBtn = document.createElement('button');
addBtn.type = 'submit';
addBtn.textContent = 'Add';
addBtn.className = 'add-btn';
// Appending All form elements to form
form.append(titleInput, authorInput, addBtn);
// Appending the Form to addDiv
addDiv.append(addBookHeading, form);
// Creating Contact Page
const contactDiv = document.createElement('div');
contactDiv.className = 'contact-me';
// Creating Contact Heading
const contactHeading = document.createElement('h1');
contactHeading.textContent = 'Contact Information';
// Creaying Contact Question Paragraph
const contactquesstion = document.createElement('p');
contactquesstion.textContent = 'Do you have any question or You just want to say"Hello"? You can reach out us!';
// Creating Contact Details Ul
const contactInfo = document.createElement('ul');
contactInfo.className = 'contact-detail';
// Creating Ul lists

// Creating Email list
const email = document.createElement('li');
const emailContent = document.createElement('b');
emailContent.textContent = 'Email: jegisew21@gmail.com';
email.append(emailContent);
// Creating phone list
const phone = document.createElement('li');
const phoneContent = document.createElement('b');
phoneContent.textContent = 'Phone: +251953059021';
phone.append(phoneContent);
// Creating address list
const address = document.createElement('li');
const addressContent = document.createElement('b');
addressContent.textContent = 'Address: Bahir Dar, Ethiopia';
address.append(addressContent);
// Appending All lists to their Parent Ul
contactInfo.append(email, phone, address);
// Appending All Elements to Contact Div
contactDiv.append(contactHeading, contactquesstion, contactInfo);
// Adding All three Dynamic Pages to their mai Container
dynamicMaincontainer.append(listHeading, listDiv, addDiv, contactDiv);

bookListLink.addEventListener('click', (e) => {
  e.preventDefault();
  listHeading.style.display = 'block';
  listDiv.style.display = 'block';
  addDiv.style.display = 'none';
  contactDiv.style.display = 'none';
  defaultSelectedLink.style.color = 'rgb(18, 126, 234)';
  window.location.reload();
});
bookAddLink.addEventListener('click', (e) => {
  e.preventDefault();
  listHeading.style.display = 'none';
  listDiv.style.display = 'none';
  addDiv.style.display = 'flex';
  contactDiv.style.display = 'none';
  defaultSelectedLink.style.color = 'black';
});
contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  listHeading.style.display = 'none';
  listDiv.style.display = 'none';
  addDiv.style.display = 'none';
  contactDiv.style.display = 'flex';
  defaultSelectedLink.style.color = 'black';
});

window.addEventListener('load', () => {
  AwesomeBooks.displayBookList();
  defaultSelectedLink.style.color = 'rgb(18, 126, 234)';
});
AwesomeBooks.displayBookList().forEach((singleBook) => {
  listDiv.innerHTML
        += `
          <div class="inner-container">
          <div>
        <p>"${singleBook.title}"&nbsp;<b>By</b>&nbsp;${singleBook.author}</p>
        </div>
        <button type="button" id="${singleBook.title}" class="remove-btn">Remove</button>
          </div>
        `;
});
// Adding Functionality
// Adding logic to add button
form.addEventListener('submit', (e) => {
  e.preventDefault();
  AwesomeBooks.addBook(titleInput.value, authorInput.value);
  titleInput.value = '';
  authorInput.value = '';
  AwesomeBooks.displayBookList();
});

const allRemoveBtns = document.querySelectorAll('.remove-btn');
allRemoveBtns.forEach((singleBtn, index) => {
  singleBtn.addEventListener('click', () => {
    AwesomeBooks.removeBook(index);
    window.location.reload();
  });
});