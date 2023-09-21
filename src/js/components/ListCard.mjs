import Button from "./Button.mjs";
import { lsRemove } from "../services/handlelocalestorage.mjs";
import renderTodos from "../services/rendertodos.mjs";

export default function ListCard(task, i) {
  const listCard = document.createElement("div");
  const taskText = document.createElement("p");
  taskText.innerText = task;

  listCard.append(
    taskText,
    Button("X", "warning", () => {
      lsRemove(i);
      renderTodos();
    })
  );
  return listCard;
}
