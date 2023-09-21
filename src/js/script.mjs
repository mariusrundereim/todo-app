import renderTodos from "./services/rendertodos.mjs";
import InputForm from "./components/InputForm.mjs";
import { root } from "./env.mjs";

// Heading
const heading = document.createElement("h1");
heading.textContent = "Todo";
root.appendChild(heading);

root.appendChild(InputForm());

const todosContainer = document.createElement("div");
todosContainer.classList.add("todosContainer");
root.appendChild(todosContainer);
renderTodos();
