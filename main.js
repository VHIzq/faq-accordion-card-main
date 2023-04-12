const accordion = document.getElementsByClassName('container');
const labels = document.getElementsByClassName('label');

const changeClass = (elements, classItem) => {
  for (i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
      this.classList.toggle(classItem);
    });
  }
}

changeClass(accordion, 'active');
changeClass(labels, 'active');