export default function createKeyboardListener(document, core) {
  document.addEventListener("keydown", handleKeydown);
  function handleKeydown(event) {
    const keyPressed = event.key;
    core.movePlayer(keyPressed);
  }
}
