// Class definition for Project items
class Project {
  constructor(
    id,
    name,
    cardImageSrc,
    cardImageAlt,
    language,
    description,
    slideshow,
    gitHubUrl
  ) {
    this.id = id;
    this.name = name;
    this.cardImage = {
      src: cardImageSrc,
      alt: cardImageAlt,
    };
    this.language = language;
    this.description = description;
    this.slideshow = slideshow;
    this.gitHubUrl = gitHubUrl;
  }
  openModal() {
    let modal = document.querySelector('#' + this.id + ' .modal');
    modal.style.display = 'block';
  }
  closeModal() {
    let modal = document.querySelector('#' + this.id + ' .modal');
    modal.style.display = 'none';
  }
}

export default Project;
