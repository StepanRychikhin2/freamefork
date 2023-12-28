const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'O', 'P'];
    let currentKeyIndex;
    let isGameOver = true;

    function startGame() {
      currentKeyIndex = 0;
      isGameOver = false;
      updCurrentKey();
    }

    function updCurrentKey() {
      $('#key').text(keys[currentKeyIndex]);
    }

    function KeyDown(event) {
      if (!isGameOver) {
        const pressedKey = event.key.toUpperCase();
        const correctKey = keys[currentKeyIndex];

        if (pressedKey === correctKey) {
          currentKeyIndex++;
          if (currentKeyIndex < keys.length) {
            updCurrentKey();
          } else {
            endGame(true);
          }
        } else {
          endGame(false);
        }
      }
    }

    function endGame(win) {
      isGameOver = true;
      const message = win ? 'Ви виграли' : 'Ви приграли';
      $('#message').text(message);
    }

    function handleNewGame() {
      startGame();
      $('#message').text('Натисніть клавішу для початку гри.');
    }

    $(document).ready(function () {
      startGame();

      $(document).on('keydown', KeyDown);

      $('#newGameBtn').on('click', function () {
        handleNewGame();
        PNotify.success({ text: 'Нова гра розпочгата' });
      });

      $(document).on('keypress', function (event) {
        event.preventDefault();
      });
    });