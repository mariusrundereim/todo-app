import Button from "./Button.mjs";
import { lsRemove } from "../services/handlelocalestorage.mjs";
import renderTodos from "../services/rendertodos.mjs";

export default function ListCard(task, i) {
  const listCard = document.createElement("div");
  const taskText = document.createElement("p");
  taskText.innerText = task;

  listCard.append(
    taskText,
    Button("Remove", "warning", () => {
      lsRemove(i);
      renderTodos();
    }),
    Button("Edit", "success", () => {
      renderTodos();
    })
  );
  return listCard;
}
