export default function renderScreen(screen, core) {
  const state = {
    context: null,
    points: null,
  };

  function start(screen) {
    state.context = screen.getContext("2d");
    state.context.fillStyle = "white";
    state.context.clearRect(0, 0, 10, 10);
    state.points = document.getElementById("points");
  }

  function renderElement(color, x, y) {
    state.context.fillStyle = color;
    state.context.fillRect(x, y, 1, 1);
  }

  function renderPoints(points) {
    state.points.innerHTML = points;
  }

  start(screen);
  core.rules();

  const { x: xPlayer, y: yPlayer } = core.state.player;
  const { x: xFruit, y: yFruit } = core.state.fruit;
  const { points } = core.state;

  renderElement("black", xPlayer, yPlayer);
  renderElement("red", xFruit, yFruit);
  renderPoints(points);

  setTimeout(() => {
    renderScreen(screen, core);
  }, 50);
}
