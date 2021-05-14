// Class definition for Project items
class Project {
    constructor(
        id,
        name,
        cardImageSrc,
        cardImageAlt,
        description,
        modalImageSrc,
        modalImageAlt,
        gitHubUrl,
    ) {
        this.id = id;
        this.name = name;
        this.cardImage = {
            src: cardImageSrc,
            alt: cardImageAlt,
        };
        this.description = description;
        this.modalImage = {
            src: modalImageSrc,
            alt: modalImageAlt,
        };
        this.gitHubUrl = gitHubUrl;
    }
    openModal() {
        let modal = document.querySelector("#" + this.id + " .modal");
        modal.style.display = "block";
    }
    closeModal() {
        let modal = document.querySelector("#" + this.id + " .modal");
        modal.style.display = "none";
    }
}

export default Project;