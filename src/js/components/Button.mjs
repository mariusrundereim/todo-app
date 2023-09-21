export default function Button(innerText, addClass, cb, type = "button") {
  const btn = document.createElement("button");
  const styles = `btn${addClass ? `,${addClass}` : ""}`;
  //const styles = 'btn${addClass} || ""';
  btn.classList.add(styles);
  btn.textContent = innerText;
  btn.setAttribute("type", type);
  btn.addEventListener("click", cb);
  return btn;
}
