export default function createCore() {
  const state = {
    player: {
      x: 5,
      y: 5,
    },
    fruit: {
      x: 1,
      y: 1,
    },
    screen: {
      width: 10,
      height: 10,
    },
    points: 0,
  };
  function rules() {
    if (state.player.x === state.fruit.x && state.player.y === state.fruit.y) {
      state.points += 1;
      addFruit();
    }
  }
  function addFruit(command) {
    const fruitX = command
      ? command.fruitX
      : Math.floor(Math.random() * state.screen.width);
    const fruitY = command
      ? command.fruitY
      : Math.floor(Math.random() * state.screen.height);

    state.fruit = {
      x: fruitX,
      y: fruitY,
    };
  }
  function movePlayer(keyPressed) {
    const acceptedMoves = {
      ArrowUp(player) {
        if (player.y - 1 >= 0) {
          player.y = player.y - 1;
        }
      },
      ArrowRight(player) {
        if (player.x + 1 < state.screen.width) {
          player.x = player.x + 1;
        }
      },
      ArrowDown(player) {
        if (player.y + 1 < state.screen.height) {
          player.y = player.y + 1;
        }
      },
      ArrowLeft(player) {
        if (player.x - 1 >= 0) {
          player.x = player.x - 1;
        }
      },
    };
    const moveFunction = acceptedMoves[keyPressed];
    moveFunction(state.player);
  }
  return {
    movePlayer,
    addFruit,
    state,
    rules,
  };
}
