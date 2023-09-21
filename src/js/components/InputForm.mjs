import { lsAdd } from "../services/handlelocalestorage.mjs";
// import render to dos
import Input from "./Input.mjs";
import Button from "./Button.mjs";

export default function InputForm() {
  const inputForm = document.createElement("form");
  const todoInput = Input();
  inputForm.appendChild(todoInput);
  inputForm.appendChild(
    Button("add task", "submit", (e) => {
      e.preventDefault();
      if (todoInput.value) {
        // lsAdd(todoInput.value)
      }
    })
  );
}
