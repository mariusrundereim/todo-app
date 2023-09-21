export default function Input(
  inputName,
  placeholder = "to do task here",
  type = "text",
  styles = ""
) {
  const input = document.createElement("input");
  input.classList.add(`input${styles ? `,${styles}` : ""}`);
  input.setAttribute("type", type);
  input.setAttribute("placeholder", placeholder);
  inputName ? input.setAttribute("name", inputName) : "";
  return input;
}
