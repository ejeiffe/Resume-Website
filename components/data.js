//Project item data
import Project from "./project.js";

const referenceManager = new Project(
    "ref-man",
    "Reference Manager",
    "../images/journal.png",
    "Article icon",
    'Inspired by <a href="https://endnote.com/" target="_blank" rel="noopener noreferrer">EndNote</a>, I created a simple application for storing bibliographic information on journal articles in a searchable database. This project taught me how to build and query a database with sqlite3 and how to build a GUI with PyQt.',
    ["../images/ref-man-1.png",
    "../images/ref-man-2.png",
    "../images/ref-man-3.png",
    "../images/ref-man-4.png"],
    "https://github.com/ejeiffe/Reference-Manager"
);

const toDoList = new Project(
    "to-do",
    "To-Do List",
    "../images/checkbox.png",
    "Checkbox icon",
    "This application keeps track of tasks, projects, and deadlines. Building it enabled me to develop my SQL skills and experiment with tables and tabbed layouts for the user interface.",
    ["../images/to-do-1.png",
    "../images/to-do-2.png",
    "../images/to-do-3.png",
    "../images/to-do-4.png"],
    "https://github.com/ejeiffe/To-Do-List"
);

const analogueGenerator = new Project(
    "ana-gen",
    "Analogue Generator",
    "../images/structure.png",
    "Chemical structure icon",
    "I built this application to solve a professional problem: the need to quickly and easily generate chemical structures for drug design projects. In a few clicks, the Analogue Generator creates a .csv file of SMILES strings ready for molecular modelling.",
    ["../images/ana-gen-1.png",
    "../images/ana-gen-2.png",
    "../images/ana-gen-3.png",
    "../images/ana-gen-4.png"],
    "https://github.com/ejeiffe/Analogue_Generator"
);

const projectItems = [referenceManager, toDoList, analogueGenerator];

export default projectItems;