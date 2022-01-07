// Create a div element to contain label and input
const div = document.createElement("div")

// Creat the label element
const label = document.createElement("label")
label.setAttribute("for", "algo")
label.append("Do you want to use Louise algorithms ?")
label.style.marginLeft = "10px"

// Create the checkbox element
const input = document.createElement("input")
input.setAttribute("type", "checkbox")
input.setAttribute("id", "algo")
input.setAttribute("name", "algo")

// Apprnd the two elements to the div element
div.append(input, label)

// Grab the Execute Query Button from "https://dbpedia.org/sparql"
const executeQuery = document.querySelector("#run")

// And then append the div element right before the execute query button
executeQuery.insertAdjacentElement("beforeBegin", div)

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

// JSON PLACEHOLDER API
const BASE_URL = "https://jsonplaceholder.typicode.com/users";
let users = [];

// ON LOAD
window.addEventListener("load", async() => {
    users = await loadUsers(BASE_URL);
} )


const luisAlgorithm = async (e) => {
    e.preventDefault()

    console.log(users)
}

// const userDiv = document.createElement('div')
// userDiv.id = "users"
// const ol = document.createElement("ol")
// userDiv.append(ol)
// const li = document.createElement("li")
// li.setAttribute("v-for", "user in users")
// li.append("{{user.name}}")
// ol.append(li)
// document.querySelector("#options").insertAdjacentElement("beforebegin", userDiv)

// loadUsers from JSONPLACEHOLDER API
const loadUsers = async(url) => {
    const response = await fetch(url)
    const users = await response.json()
    return users
} 

// Create Vue component
Vue.component("user", {
    template: "<p>{{users.name}}</p>"
})

// WASM SECTION : LOAD WASM : hello.wasm file
const go = new Go();

WebAssembly.instantiateStreaming(fetch('./wasm/hello.wasm'), go.importObject).then(
	(result) => {
		go.run(result.instance);
	}
);