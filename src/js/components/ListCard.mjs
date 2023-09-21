import Button from "./Button.mjs";
// import lsremove
// renderTodos

export default function ListCard(task, i) {
  const listCard = document.createElement("div");
  const taskText = document.createElement("p");
  taskText.innerText = task;

  listCard.append(
    taskText,
    Button("X", "warning", () => {
      // lsRemove(i)
      // renderTodos
    })
  );
}
