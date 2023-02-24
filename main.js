import "./style.css";

const res = await fetch("https://swapi.dev/api/people/");
if (!res.ok) {
  throw new Error("Something went wrong");
}

const data = await res.json();

const appEl = document.querySelector("#app");

data?.results?.forEach((person) => {
  const personEl = document.createElement("div");
  personEl.classList.add("person");
  personEl.innerHTML = `
  <h2>${person.name}</h2>
  <p>Height: ${person.height}</p>
  <p>Mass: ${person.mass}</p>
  <p>Hair Color: ${person.hair_color}</p>
  `;

  appEl.appendChild(personEl);
});
