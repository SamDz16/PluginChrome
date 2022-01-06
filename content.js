// Grab the Execute Query Button from "https://dbpedia.org/sparql"
const executeQuery = document.querySelector("#run")

// Create a div element to contain label and input
const div = document.createElement("div")

// Creat the label element
const label = document.createElement("label")
label.setAttribute("for", "algo")
label.append("Do you want to use Luis algorithms ?")
label.style.marginLeft = "10px"

// Create the checkbox element
const input = document.createElement("input")
input.setAttribute("type", "checkbox")
input.setAttribute("id", "algo")
input.setAttribute("name", "algo")

// Apprnd the two elements to the div element
div.append(input, label)

// And then append the div element right before the execute query button
document.querySelector("#run").insertAdjacentElement("beforeBegin", div)

// Create a global variable to hold true or fale in order to know whether a user has thecked the checkbox or not
let luisAlgorithmsChecked = false

// Add event listener to track whether the user would like to use the Luis algorithms or not
// and modify a global variable
input.addEventListener('change', () => {
    luisAlgorithmsChecked = input.checked

    const sparqlForm = document.querySelector("#sparql_form");

    if (luisAlgorithmsChecked) {
        
        sparqlForm.addEventListener("submit", luisAlgorithm)
    } else {
        sparqlForm.removeEventListener('submit', luisAlgorithm, {passive: true})
    }
})

const luisAlgorithm =  (e) => {
    e.preventDefault()

     alert("I am going to use Luis algorithms")
}


