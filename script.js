// Quiz data structure organized by subjects and quizzes
const quizData = {
  "Web Development": {
    "HTML Basics": [
      {
        question: "What does HTML stand for?",
        answers: [
          { text: "Hyper Text Markup Language", correct: true },
          { text: "High Text Machine Language", correct: false },
          { text: "Hyper Text Machine Learning", correct: false },
          { text: "Hyper Text Marking Language", correct: false },
        ],
      },
      {
        question: "What is the purpose of the `alt` attribute in an `<img>` tag?",
        answers: [
          { text: "To specify the URL of the image", correct: false },
          { text: "To provide alternative text for the image", correct: true },
          { text: "To align the image", correct: false },
          { text: "To style the image with CSS", correct: false },
        ],
      },
      {
        question: "What is the purpose of the <head> tag in HTML?",
        answers: [
          { text: "To contain meta information about the document", correct: true },
          { text: "To display the title of the page", correct: false },
          { text: "To include the main content of the page", correct: false },
          { text: "To declare the doctype", correct: false },
        ],
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
          { text: "<a>", correct: true },
          { text: "<link>", correct: false },
          { text: "<href>", correct: false },
          { text: "<url>", correct: false },
        ],
      },
      {
        question: "Which HTML element is used to define the structure of an HTML table?",
        answers: [
          { text: "<table>", correct: true },
          { text: "<tab>", correct: false },
          { text: "<tbl>", correct: false },
          { text: "<grid>", correct: false },
        ],
      },
      {
        question: "Which HTML tag is used for creating a dropdown list?",
        answers: [
          { text: "<select>", correct: true },
          { text: "<dropdown>", correct: false },
          { text: "<option>", correct: false },
          { text: "<list>", correct: false },
        ],
      },
      {
        question: "What does the HTML <br> element do?",
        answers: [
          { text: "Creates a line break", correct: true },
          { text: "Creates a paragraph break", correct: false },
          { text: "Creates a page break", correct: false },
          { text: "Creates a section break", correct: false },
        ],
      },
      {
        question: "Which HTML element defines the title of a document?",
        answers: [
          { text: "<title>", correct: true },
          { text: "<header>", correct: false },
          { text: "<heading>", correct: false },
          { text: "<top>", correct: false },
        ],
      },
      {
        question: "Which HTML tag is used to define an unordered list?",
        answers: [
          { text: "<ul>", correct: true },
          { text: "<ol>", correct: false },
          { text: "<list>", correct: false },
          { text: "<li>", correct: false },
        ],
      },
      {
        question: "Which HTML attribute specifies an alternate text for an image?",
        answers: [
          { text: "alt", correct: true },
          { text: "title", correct: false },
          { text: "src", correct: false },
          { text: "description", correct: false },
        ],
      },
    ],
    "CSS Fundamentals": [
      {
        question: "Which CSS property is used to change the text color?",
        answers: [
          { text: "color", correct: true },
          { text: "font-color", correct: false },
          { text: "text-color", correct: false },
          { text: "background-color", correct: false },
        ],
      },
      {
        question: "Which CSS property controls the layout of elements?",
        answers: [
          { text: "display", correct: true },
          { text: "position", correct: false },
          { text: "float", correct: false },
          { text: "visibility", correct: false },
        ],
      },
      {
        question: "Which CSS property is used to create space inside an element, between the content and the border?",
        answers: [
          { text: "padding", correct: true },
          { text: "margin", correct: false },
          { text: "border-spacing", correct: false },
          { text: "spacing", correct: false },
        ],
      },
      {
        question: "Which CSS property is used to set the background color of an element?",
        answers: [
          { text: "background-color", correct: true },
          { text: "bgcolor", correct: false },
          { text: "color-background", correct: false },
          { text: "element-color", correct: false },
        ],
      },
      {
        question: "Which CSS property controls the size of the font?",
        answers: [
          { text: "font-size", correct: true },
          { text: "text-size", correct: false },
          { text: "font-height", correct: false },
          { text: "text-height", correct: false },
        ],
      },
      {
        question: "Which CSS property controls the spacing between lines of text?",
        answers: [
          { text: "line-height", correct: true },
          { text: "spacing", correct: false },
          { text: "line-spacing", correct: false },
          { text: "text-spacing", correct: false },
        ],
      },
      {
        question: "Which CSS property is used to make text bold?",
        answers: [
          { text: "font-weight", correct: true },
          { text: "text-weight", correct: false },
          { text: "bold", correct: false },
          { text: "text-style", correct: false },
        ],
      },
      {
        question: "Which CSS property is used to specify the transparency of an element?",
        answers: [
          { text: "opacity", correct: true },
          { text: "transparency", correct: false },
          { text: "visibility", correct: false },
          { text: "filter", correct: false },
        ],
      },
      {
        question: "What does CSS stand for?",
        answers: [
          { text: "Cascading Style Sheets", correct: true },
          { text: "Creative Style System", correct: false },
          { text: "Computer Style Sheets", correct: false },
          { text: "Colorful Style Sheets", correct: false },
        ],
      },
      {
        question: "Which CSS property is used to add shadows to text?",
        answers: [
          { text: "text-shadow", correct: true },
          { text: "font-shadow", correct: false },
          { text: "text-effect", correct: false },
          { text: "shadow-effect", correct: false },
        ],
      },
    ],
    "JavaScript Essentials": [
      {
        question: "Which is the correct JavaScript syntax to write 'Hello World'?",
        answers: [
          { text: "print('Hello World');", correct: false },
          { text: "document.write('Hello World');", correct: true },
          { text: "echo('Hello World');", correct: false },
          { text: "console.print('Hello World');", correct: false },
        ],
      },
      {
        question: "Which of the following is a valid way to add comments in JavaScript?",
        answers: [
          { text: "// This is a comment", correct: true },
          { text: "/* This is a comment */", correct: true },
          { text: "# This is a comment", correct: false },
          { text: "!-- This is a comment --", correct: false },
        ],
      },
      {
        question: "How do you declare a JavaScript variable?",
        answers: [
          { text: "let myVariable;", correct: true },
          { text: "var = myVariable;", correct: false },
          { text: "variable myVariable;", correct: false },
          { text: "myVariable: var;", correct: false },
        ],
      },
      {
        question: "Which JavaScript method is used to find an HTML element by ID?",
        answers: [
          { text: "document.getElementById", correct: true },
          { text: "document.getElementsById", correct: false },
          { text: "document.querySelector", correct: false },
          { text: "document.getElement", correct: false },
        ],
      },
      {
        question: "What will be the output of console.log(typeof [])?",
        answers: [
          { text: "object", correct: true },
          { text: "array", correct: false },
          { text: "undefined", correct: false },
          { text: "string", correct: false },
        ],
      },
      {
        question: "How do you write a conditional statement in JavaScript?",
        answers: [
          { text: "if (condition) { ... }", correct: true },
          { text: "when (condition) { ... }", correct: false },
          { text: "if condition { ... }", correct: false },
          { text: "condition if { ... }", correct: false },
        ],
      },
      {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
          { text: "const colors = ['red', 'green', 'blue']", correct: true },
          { text: "const colors = 'red', 'green', 'blue'", correct: false },
          { text: "const colors = (red, green, blue)", correct: false },
          { text: "const colors = {red, green, blue}", correct: false },
        ],
      },
      {
        question: "What will the following code return: Boolean(10 > 9)?",
        answers: [
          { text: "true", correct: true },
          { text: "false", correct: false },
          { text: "NaN", correct: false },
          { text: "undefined", correct: false },
        ],
      },
      {
        question: "How do you call a function named 'myFunction'?",
        answers: [
          { text: "myFunction()", correct: true },
          { text: "call myFunction()", correct: false },
          { text: "call function myFunction()", correct: false },
          { text: "function.myFunction()", correct: false },
        ],
      },
      {
        question: "How to add an element at the end of an array?",
        answers: [
          { text: "push()", correct: true },
          { text: "append()", correct: false },
          { text: "add()", correct: false },
          { text: "addLast()", correct: false },
        ],
      },
    ],
  },
  "Science": {
    "Basic Physics": [
      {
        question: "What is the SI unit of force?",
        answers: [
          { text: "Newton", correct: true },
          { text: "Joule", correct: false },
          { text: "Watt", correct: false },
          { text: "Pascal", correct: false },
        ],
      },
      {
        question: "Which law of motion states that 'For every action, there is an equal and opposite reaction'?",
        answers: [
          { text: "First Law", correct: false },
          { text: "Second Law", correct: false },
          { text: "Third Law", correct: true },
          { text: "Fourth Law", correct: false },
        ],
      },
      {
        question: "What is the formula for kinetic energy?",
        answers: [
          { text: "KE = 1/2 × m × v²", correct: true },
          { text: "KE = m × g × h", correct: false },
          { text: "KE = F × d", correct: false },
          { text: "KE = m × v", correct: false },
        ],
      },
      {
        question: "What is the unit of electric current?",
        answers: [
          { text: "Ampere", correct: true },
          { text: "Volt", correct: false },
          { text: "Ohm", correct: false },
          { text: "Watt", correct: false },
        ],
      },
      {
        question: "What is the law of conservation of energy?",
        answers: [
          { text: "Energy cannot be created or destroyed, only transformed", correct: true },
          { text: "Energy can be created but not destroyed", correct: false },
          { text: "Energy can be destroyed but not created", correct: false },
          { text: "Energy can be both created and destroyed", correct: false },
        ],
      },
      {
        question: "What is the SI unit of pressure?",
        answers: [
          { text: "Pascal", correct: true },
          { text: "Newton", correct: false },
          { text: "Joule", correct: false },
          { text: "Bar", correct: false },
        ],
      },
      {
        question: "Who proposed the theory of relativity?",
        answers: [
          { text: "Albert Einstein", correct: true },
          { text: "Isaac Newton", correct: false },
          { text: "Niels Bohr", correct: false },
          { text: "Galileo Galilei", correct: false },
        ],
      },
      {
        question: "What is the unit of frequency?",
        answers: [
          { text: "Hertz", correct: true },
          { text: "Second", correct: false },
          { text: "Meter", correct: false },
          { text: "Joule", correct: false },
        ],
      },
      {
        question: "What type of waves are sound waves?",
        answers: [
          { text: "Longitudinal waves", correct: true },
          { text: "Transverse waves", correct: false },
          { text: "Electromagnetic waves", correct: false },
          { text: "Surface waves", correct: false },
        ],
      },
      {
        question: "What is the speed of light in a vacuum?",
        answers: [
          { text: "3 × 10⁸ m/s", correct: true },
          { text: "3 × 10⁶ m/s", correct: false },
          { text: "3 × 10⁴ m/s", correct: false },
          { text: "3 × 10¹⁰ m/s", correct: false },
        ],
      },
    ],
    "Chemistry Concepts": [
      {
        question: "What is the chemical symbol for gold?",
        answers: [
          { text: "Au", correct: true },
          { text: "Ag", correct: false },
          { text: "Fe", correct: false },
          { text: "Go", correct: false },
        ],
      },
      {
        question: "What is the pH of a neutral solution?",
        answers: [
          { text: "7", correct: true },
          { text: "0", correct: false },
          { text: "14", correct: false },
          { text: "1", correct: false },
        ],
      },
      {
        question: "Which of these is NOT a noble gas?",
        answers: [
          { text: "Helium", correct: false },
          { text: "Neon", correct: false },
          { text: "Chlorine", correct: true },
          { text: "Argon", correct: false },
        ],
      },
      {
        question: "What is the chemical formula for water?",
        answers: [
          { text: "H₂O", correct: true },
          { text: "CO₂", correct: false },
          { text: "NaCl", correct: false },
          { text: "CH₄", correct: false },
        ],
      },
      {
        question: "What is the most abundant gas in Earth's atmosphere?",
        answers: [
          { text: "Nitrogen", correct: true },
          { text: "Oxygen", correct: false },
          { text: "Carbon dioxide", correct: false },
          { text: "Hydrogen", correct: false },
        ],
      },
      {
        question: "What is the chemical symbol for the element oxygen?",
        answers: [
          { text: "O", correct: true },
          { text: "Ox", correct: false },
          { text: "Oz", correct: false },
          { text: "Om", correct: false },
        ],
      },
      {
        question: "What is the atomic number of carbon?",
        answers: [
          { text: "6", correct: true },
          { text: "12", correct: false },
          { text: "8", correct: false },
          { text: "14", correct: false },
        ],
      },
      {
        question: "Which of the following is an acid?",
        answers: [
          { text: "HCl", correct: true },
          { text: "NaOH", correct: false },
          { text: "KOH", correct: false },
          { text: "MgO", correct: false },
        ],
      },
      {
        question: "What is the process called when a solid changes directly to a gas?",
        answers: [
          { text: "Sublimation", correct: true },
          { text: "Condensation", correct: false },
          { text: "Deposition", correct: false },
          { text: "Evaporation", correct: false },
        ],
      },
      {
        question: "What is the main component of natural gas?",
        answers: [
          { text: "Methane", correct: true },
          { text: "Ethane", correct: false },
          { text: "Propane", correct: false },
          { text: "Butane", correct: false },
        ],
      },
    ],
    "Biology Basics": [
      {
        question: "What is the powerhouse of the cell?",
        answers: [
          { text: "Mitochondria", correct: true },
          { text: "Nucleus", correct: false },
          { text: "Ribosome", correct: false },
          { text: "Endoplasmic reticulum", correct: false },
        ],
      },
      {
        question: "What is the process by which plants make their own food?",
        answers: [
          { text: "Photosynthesis", correct: true },
          { text: "Respiration", correct: false },
          { text: "Digestion", correct: false },
          { text: "Fermentation", correct: false },
        ],
      },
      {
        question: "What is the largest organ in the human body?",
        answers: [
          { text: "Skin", correct: true },
          { text: "Liver", correct: false },
          { text: "Heart", correct: false },
          { text: "Brain", correct: false },
        ],
      },
      {
        question: "What is the basic unit of life?",
        answers: [
          { text: "Cell", correct: true },
          { text: "Atom", correct: false },
          { text: "Molecule", correct: false },
          { text: "Organ", correct: false },
        ],
      },
      {
        question: "Which of the following is NOT a type of blood cell?",
        answers: [
          { text: "Neuron", correct: true },
          { text: "Red blood cell", correct: false },
          { text: "White blood cell", correct: false },
          { text: "Platelet", correct: false },
        ],
      },
      {
        question: "What is the main function of the respiratory system?",
        answers: [
          { text: "Gas exchange", correct: true },
          { text: "Digestion", correct: false },
          { text: "Excretion", correct: false },
          { text: "Circulation", correct: false },
        ],
      },
      {
        question: "What is the scientific name for humans?",
        answers: [
          { text: "Homo sapiens", correct: true },
          { text: "Homo erectus", correct: false },
          { text: "Homo neanderthalensis", correct: false },
          { text: "Homo habilis", correct: false },
        ],
      },
      {
        question: "Which of the following is a vestigial organ in humans?",
        answers: [
          { text: "Appendix", correct: true },
          { text: "Heart", correct: false },
          { text: "Lungs", correct: false },
          { text: "Kidneys", correct: false },
        ],
      },
      {
        question: "What is the process of cell division called?",
        answers: [
          { text: "Mitosis", correct: true },
          { text: "Meiosis", correct: false },
          { text: "Photosynthesis", correct: false },
          { text: "Respiration", correct: false },
        ],
      },
      {
        question: "What carries genetic information in cells?",
        answers: [
          { text: "DNA", correct: true },
          { text: "RNA", correct: false },
          { text: "Protein", correct: false },
          { text: "Lipid", correct: false },
        ],
      },
    ],
  },
  "Mathematics": {
    "Algebra": [
      {
        question: "What is the solution to x² - 5x + 6 = 0?",
        answers: [
          { text: "x = 2, x = 3", correct: true },
          { text: "x = -2, x = -3", correct: false },
          { text: "x = 2, x = -3", correct: false },
          { text: "x = -2, x = 3", correct: false },
        ],
      },
      {
        question: "If f(x) = 2x + 3, what is f(4)?",
        answers: [
          { text: "11", correct: true },
          { text: "8", correct: false },
          { text: "7", correct: false },
          { text: "10", correct: false },
        ],
      },
      {
        question: "What is the value of x in the equation 3x - 7 = 14?",
        answers: [
          { text: "7", correct: true },
          { text: "6", correct: false },
          { text: "8", correct: false },
          { text: "9", correct: false },
        ],
      },
      {
        question: "What is the slope of the line y = 3x + 2?",
        answers: [
          { text: "3", correct: true },
          { text: "2", correct: false },
          { text: "0", correct: false },
          { text: "1", correct: false },
        ],
      },
      {
        question: "Which of the following is a linear equation?",
        answers: [
          { text: "y = 2x + 5", correct: true },
          { text: "y = x²", correct: false },
          { text: "y = 1/x", correct: false },
          { text: "y = √x", correct: false },
        ],
      },
      {
        question: "What is the value of y when x = 3 in the equation y = x² - 4?",
        answers: [
          { text: "5", correct: true },
          { text: "9", correct: false },
          { text: "1", correct: false },
          { text: "-1", correct: false },
        ],
      },
      {
        question: "What is the domain of the function f(x) = 1/(x-2)?",
        answers: [
          { text: "All real numbers except 2", correct: true },
          { text: "All real numbers", correct: false },
          { text: "All real numbers except 0", correct: false },
          { text: "All positive numbers", correct: false },
        ],
      },
      {
        question: "What is the factored form of x² - 9?",
        answers: [
          { text: "(x+3)(x-3)", correct: true },
          { text: "(x-3)(x-3)", correct: false },
          { text: "(x+3)(x+3)", correct: false },
          { text: "(x+9)(x-1)", correct: false },
        ],
      },
      {
        question: "If a + b = 10 and a - b = 4, what is a?",
        answers: [
          { text: "7", correct: true },
          { text: "3", correct: false },
          { text: "6", correct: false },
          { text: "5", correct: false },
        ],
      },
      {
        question: "Which equation represents a circle with center (2, 3) and radius 4?",
        answers: [
          { text: "(x-2)² + (y-3)² = 16", correct: true },
          { text: "(x+2)² + (y+3)² = 16", correct: false },
          { text: "(x-2)² + (y-3)² = 4", correct: false },
          { text: "(x-3)² + (y-2)² = 16", correct: false },
        ],
      },
    ],
    "Geometry": [
      {
        question: "What is the formula for the area of a circle?",
        answers: [
          { text: "A = πr²", correct: true },
          { text: "A = 2πr", correct: false },
          { text: "A = πd", correct: false },
          { text: "A = 4πr²", correct: false },
        ],
      },
      {
        question: "What is the sum of angles in a triangle?",
        answers: [
          { text: "180°", correct: true },
          { text: "360°", correct: false },
          { text: "90°", correct: false },
          { text: "270°", correct: false },
        ],
      },
      {
        question: "What is the Pythagorean theorem?",
        answers: [
          { text: "a² + b² = c²", correct: true },
          { text: "a + b = c", correct: false },
          { text: "a × b = c", correct: false },
          { text: "a² - b² = c²", correct: false },
        ],
      },
      {
        question: "What is the volume of a cube with side length 3?",
        answers: [
          { text: "27", correct: true },
          { text: "9", correct: false },
          { text: "6", correct: false },
          { text: "18", correct: false },
        ],
      },
      {
        question: "Which of the following is a property of a rhombus?",
        answers: [
          { text: "All sides are equal", correct: true },
          { text: "All angles are 90°", correct: false },
          { text: "Only opposite sides are equal", correct: false },
          { text: "No sides are equal", correct: false },
        ],
      },
      {
        question: "What is the formula for the perimeter of a rectangle?",
        answers: [
          { text: "P = 2(l + w)", correct: true },
          { text: "P = l × w", correct: false },
          { text: "P = 2l + w", correct: false },
          { text: "P = 4s", correct: false },
        ],
      },
      {
        question: "What is the area of a triangle with base 6 and height 4?",
        answers: [
          { text: "12", correct: true },
          { text: "24", correct: false },
          { text: "8", correct: false },
          { text: "10", correct: false },
        ],
      },
      {
        question: "How many degrees are in a full circle?",
        answers: [
          { text: "360°", correct: true },
          { text: "180°", correct: false },
          { text: "90°", correct: false },
          { text: "270°", correct: false },
        ],
      },
      {
        question: "What is the value of π (pi) to two decimal places?",
        answers: [
          { text: "3.14", correct: true },
          { text: "3.12", correct: false },
          { text: "3.16", correct: false },
          { text: "3.18", correct: false },
        ],
      },
      {
        question: "Which of the following is a regular polygon?",
        answers: [
          { text: "Square", correct: true },
          { text: "Rectangle", correct: false },
          { text: "Scalene triangle", correct: false },
          { text: "Isosceles triangle", correct: false },
        ],
      },
    ],
    "Calculus": [
      {
        question: "What is the derivative of x²?",
        answers: [
          { text: "2x", correct: true },
          { text: "x", correct: false },
          { text: "2", correct: false },
          { text: "x²", correct: false },
        ],
      },
      {
        question: "What is the integral of 2x?",
        answers: [
          { text: "x² + C", correct: true },
          { text: "2x² + C", correct: false },
          { text: "x + C", correct: false },
          { text: "2 + C", correct: false },
        ],
      },
      {
        question: "What is the limit of (1+1/n)^n as n approaches infinity?",
        answers: [
          { text: "e", correct: true },
          { text: "1", correct: false },
          { text: "0", correct: false },
          { text: "∞", correct: false },
        ],
      },
      {
        question: "What is the derivative of sin(x)?",
        answers: [
          { text: "cos(x)", correct: true },
          { text: "-sin(x)", correct: false },
          { text: "tan(x)", correct: false },
          { text: "-cos(x)", correct: false },
        ],
      },
      {
        question: "What is the integral of e^x?",
        answers: [
          { text: "e^x + C", correct: true },
          { text: "e^(x+1) + C", correct: false },
          { text: "xe^x + C", correct: false },
          { text: "ln(x) + C", correct: false },
        ],
      },
      {
        question: "What is the derivative of ln(x)?",
        answers: [
          { text: "1/x", correct: true },
          { text: "x", correct: false },
          { text: "ln(x)/x", correct: false },
          { text: "x ln(x)", correct: false },
        ],
      },
      {
        question: "What is the chain rule used for?",
        answers: [
          { text: "Finding the derivative of a composite function", correct: true },
          { text: "Finding the integral of a composite function", correct: false },
          { text: "Finding the limit of a function", correct: false },
          { text: "Finding the value of a function", correct: false },
        ],
      },
      {
        question: "Which of the following is an application of integration?",
        answers: [
          { text: "Finding the area under a curve", correct: true },
          { text: "Finding the slope of a curve", correct: false },
          { text: "Finding the limit of a function", correct: false },
          { text: "Finding the domain of a function", correct: false },
        ],
      },
      {
        question: "What is the second derivative of f(x) = 3x³ + 2x² - 5x + 1?",
        answers: [
          { text: "f''(x) = 18x + 4", correct: true },
          { text: "f''(x) = 9x² + 4x", correct: false },
          { text: "f''(x) = 9x² + 4x - 5", correct: false },
          { text: "f''(x) = 18x² + 4", correct: false },
        ],
      },
      {
        question: "What is the mean value theorem used for?",
        answers: [
          { text: "To find a point where the derivative equals the average rate of change", correct: true },
          { text: "To find the maximum value of a function", correct: false },
          { text: "To find the minimum value of a function", correct: false },
          { text: "To find the inflection points of a function", correct: false },
        ],
      },
    ],
  }
};

// DOM Elements
const subjectScreen = document.getElementById("subject-screen");
const quizSelectionScreen = document.getElementById("quiz-selection-screen");
const quizScreen = document.getElementById("quiz-screen");
const subjectContainer = document.getElementById("subject-container");
const quizContainer = document.getElementById("quiz-container");
const selectedSubjectTitle = document.getElementById("selected-subject-title");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const backToSubjectsBtn = document.getElementById("back-to-subjects-btn");
const backToQuizzesBtn = document.getElementById("back-to-quizzes-btn");
const progressBar = document.getElementById("progress-bar");
const totalSubjectsElement = document.getElementById("total-subjects");
const totalQuizzesElement = document.getElementById("total-quizzes");
const totalQuestionsElement = document.getElementById("total-questions");
const availableQuizzesElement = document.getElementById("available-quizzes");

// Variables
let currentSubject = "";
let currentQuiz = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

// Initialize the app
function initApp() {
  loadSubjects();
  setupEventListeners();
  updateDashboardStats();
  showActiveScreen(subjectScreen);
}

// Update dashboard statistics
function updateDashboardStats() {
  // Count subjects
  const subjectCount = Object.keys(quizData).length;
  totalSubjectsElement.textContent = subjectCount;
  
  // Count total quizzes
  let quizCount = 0;
  let questionCount = 0;
  
  Object.keys(quizData).forEach(subject => {
    const subjectQuizzes = Object.keys(quizData[subject]).length;
    quizCount += subjectQuizzes;
    
    // Count total questions
    Object.keys(quizData[subject]).forEach(quiz => {
      questionCount += quizData[subject][quiz].length;
    });
  });
  
  totalQuizzesElement.textContent = quizCount;
  totalQuestionsElement.textContent = questionCount;
}

// Load all subjects
function loadSubjects() {
  subjectContainer.innerHTML = "";
  
  Object.keys(quizData).forEach(subject => {
    const button = document.createElement("button");
    button.innerHTML = `
      <span class="subject-icon"><i class="fas fa-${getSubjectIcon(subject)}"></i></span>
      <span>${subject}</span>
    `;
    button.classList.add("subject-btn");
    button.dataset.subject = subject;
    subjectContainer.appendChild(button);
  });
}

// Get icon based on subject
function getSubjectIcon(subject) {
  switch(subject) {
    case "Web Development":
      return "code";
    case "Science":
      return "flask";
    case "Mathematics":
      return "calculator";
    default:
      return "book";
  }
}

// Get icon based on quiz
function getQuizIcon(quiz) {
  if (quiz.includes("HTML")) return "html5";
  if (quiz.includes("CSS")) return "css3-alt";
  if (quiz.includes("JavaScript")) return "js";
  if (quiz.includes("Physics")) return "atom";
  if (quiz.includes("Chemistry")) return "vial";
  if (quiz.includes("Biology")) return "dna";
  if (quiz.includes("Algebra")) return "superscript";
  if (quiz.includes("Geometry")) return "shapes";
  if (quiz.includes("Calculus")) return "chart-line";
  return "book";
}

// Load quizzes for a specific subject
function loadQuizzes(subject) {
  currentSubject = subject;
  selectedSubjectTitle.innerText = `${subject} - Quizzes`;
  quizContainer.innerHTML = "";
  
  const quizzes = Object.keys(quizData[subject]);
  availableQuizzesElement.textContent = quizzes.length;
  
  quizzes.forEach(quiz => {
    const button = document.createElement("button");
    button.innerHTML = `
      <span class="quiz-icon"><i class="fas fa-${getQuizIcon(quiz)}"></i></span>
      <span>${quiz}</span>
      <span class="question-count">10 Questions</span>
    `;
    button.classList.add("quiz-btn");
    button.dataset.quiz = quiz;
    quizContainer.appendChild(button);
  });
}

// Set up event listeners
function setupEventListeners() {
  // Subject selection
  subjectContainer.addEventListener("click", e => {
    const button = e.target.closest(".subject-btn");
    if (button) {
      const selectedSubject = button.dataset.subject;
      loadQuizzes(selectedSubject);
      showActiveScreen(quizSelectionScreen);
    }
  });
  
  // Quiz selection
  quizContainer.addEventListener("click", e => {
    const button = e.target.closest(".quiz-btn");
    if (button) {
      const selectedQuiz = button.dataset.quiz;
      startQuiz(currentSubject, selectedQuiz);
    }
  });
  
  // Navigation buttons
  backToSubjectsBtn.addEventListener("click", () => {
    showActiveScreen(subjectScreen);
  });
  
  backToQuizzesBtn.addEventListener("click", () => {
    stopTimer();
    showActiveScreen(quizSelectionScreen);
  });
  
  // Next button
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < currentQuestions.length) {
      handleNextButton();
    } else {
      showActiveScreen(quizSelectionScreen);
    }
  });
}

// Show active screen and hide others
function showActiveScreen(activeScreen) {
  // Hide all screens
  subjectScreen.classList.remove("active");
  quizSelectionScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  
  // Show active screen
  activeScreen.classList.add("active");
}

// Start a quiz
function startQuiz(subject, quiz) {
  currentSubject = subject;
  currentQuiz = quiz;
  currentQuestions = quizData[subject][quiz];
  currentQuestionIndex = 0;
  score = 0;
  
  showActiveScreen(quizScreen);
  nextButton.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
  updateProgressBar();
  showQuestion();
}

// Update progress bar
function updateProgressBar() {
  const progressPercentage = (currentQuestionIndex / currentQuestions.length) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

// Show the current question
function showQuestion() {
  resetState();
  updateProgressBar();
  
  let currentQuestion = currentQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
  
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    
    button.addEventListener("click", e => {
      stopTimer();
      selectAnswer(e);
    });
  });
  
  startTimer();
}

// Reset question state
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

// Handle answer selection
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  
  Array.from(answerButton.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  
  nextButton.style.display = "block";
}

// Handle next button
function handleNextButton() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Show the final score
function showScore() {
  resetState();
  updateProgressBar(); // Update to 100%
  timerElement.style.display = "none";
  
  let scoreMessage;
  const scorePercentage = (score / currentQuestions.length) * 100;
  
  if (scorePercentage >= 80) {
    scoreMessage = `<i class="fas fa-trophy" style="color: gold;"></i> Excellent!`;
  } else if (scorePercentage >= 60) {
    scoreMessage = `<i class="fas fa-medal" style="color: silver;"></i> Good job!`;
  } else {
    scoreMessage = `<i class="fas fa-book"></i> Keep learning!`;
  }
  
  questionElement.innerHTML = `
    <div style="text-align: center;">
      <h3>${scoreMessage}</h3>
      <p>You scored ${score} out of ${currentQuestions.length}!</p>
    </div>
  `;
  
  // Ensure only one 'Back to Quizzes' button is displayed
  if (!nextButton.classList.contains('back-to-quizzes')) {
    nextButton.innerHTML = 'Back to Quizzes <i class="fas fa-list"></i>';
    nextButton.classList.add('back-to-quizzes');
  }
  nextButton.style.display = "block";
}

// Timer functions
function startTimer() {
  timeLeft = 10;
  timerElement.style.display = "block";
  timerElement.innerHTML = `<i class="fas fa-clock"></i> Time Left: ${timeLeft}s`;
  
  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.innerHTML = `<i class="fas fa-clock"></i> Time Left: ${timeLeft}s`;
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function handleTimeout() {
  Array.from(answerButton.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  
  nextButton.style.display = "block";
}

// Initialize the app when the page loads
window.addEventListener("DOMContentLoaded", initApp);
