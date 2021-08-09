//Importing project items
import projectItems from './components/data.js';

//Creating HTML article element for each project item
const projectList = projectItems.map((project) => {
  let projectArticle = document.createElement('article');
  projectArticle.classList.add('project-item');
  projectArticle.setAttribute('id', project.id);
  projectArticle.innerHTML = `
    <div class="card">
      <h3>${project.name}</h3>
      <img src=${project.cardImage.src} alt=${project.cardImage.alt}>
      <a class="btn open">Learn More</a>
    </div>
    <div class="modal">
      <div class="project-description">
        <div class="slideshow-container">
        </div>
        <div class="slideshow-btns">
          <a class="prev modal-btn">&#10094;</a>
          <a class="next modal-btn">&#10095;</a>
        </div>
        <h3>${project.name}</h3>
        <h4>${project.language}</h4>
        <p>${project.description}</p>
        <div class="modal-buttons">
          <a class="btn" href=${project.gitHubUrl} target="_blank" rel="noopener noreferrer">View on Github</a>
          <a class="close modal-btn">&times;</a>
        </div>
      </div>
    </div>
    `;
  //Set up slideshow images
  project.slideshow.forEach((image) => {
    let imgContainer = document.createElement('div');
    imgContainer.classList.add('slideshow-img');
    let index = project.slideshow.indexOf(image);
    imgContainer.setAttribute('data-index', index);
    if (index == 0) {
      imgContainer.classList.add('active');
    }
    imgContainer.innerHTML = `
      <img src=${image} alt="Screenshot of ${project.name}">
      `;
    projectArticle
      .querySelector('.slideshow-container')
      .appendChild(imgContainer);
  });

  //Add event listeners for slideshow buttons
  let nextBtn = projectArticle.querySelector('.next');
  let prevBtn = projectArticle.querySelector('.prev');

  nextBtn.addEventListener('click', () => {
    let currImg = projectArticle.querySelector('.active');
    currImg.classList.remove('active');
    if (currImg.getAttribute('data-index') == project.slideshow.length - 1) {
      currImg.parentElement.firstElementChild.classList.add('active');
    } else {
      currImg.nextElementSibling.classList.add('active');
    }
  });
  prevBtn.addEventListener('click', () => {
    let currImg = projectArticle.querySelector('.active');
    currImg.classList.remove('active');
    if (currImg.getAttribute('data-index') == 0) {
      currImg.parentElement.lastElementChild.classList.add('active');
    } else {
      currImg.previousElementSibling.classList.add('active');
    }
  });

  //Event listeners for buttons to open/close modal box
  let learnMore = projectArticle.querySelector('.open');
  let close = projectArticle.querySelector('.close');

  learnMore.addEventListener('click', () => {
    project.openModal();
  });

  close.addEventListener('click', () => {
    project.closeModal();
    //Reset slideshow to image 1
    let currImg = projectArticle.querySelector('.active');
    if (currImg.getAttribute('data-index') != 0) {
      currImg.classList.remove('active');
      currImg.parentElement.firstElementChild.classList.add('active');
    }
  });

  return projectArticle;
});

//Append project items to Projects section
const projectsContainer = document.querySelector('#projects .container');

projectList.forEach((projectItem) => {
  projectsContainer.appendChild(projectItem);
});

//Sticky navbar
const navbar = document.querySelector('nav');

const stickyPos = navbar.offsetTop;

const toggleSticky = () => {
  if (window.pageYOffset >= stickyPos) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

window.onscroll = toggleSticky;

//Open/close navbar menu on small screens
const navicon = document.querySelector('.navicon');

const navLinks = document.querySelector('nav ul');

navicon.addEventListener('click', function () {
  navLinks.classList.toggle('visible');
});
