class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timeStatus = container.querySelector('.status__time');
    this.time;
    this.clock;

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.timeStatus.textContent = this.time;
    this.timer();
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
      
      function keyCode(event) {
        if ((this.currentSymbol.textContent).charCodeAt() - 32 === event.keyCode) {
          this.success();
        } else {
          this.fail();
        }
      }

      let keyPress = keyCode.bind(this);
      document.addEventListener("keydown", keyPress);
  }

  timer() {    
    this.clock = setInterval(() => {
      this.time = Math.round((this.time - 0.1) * 10) / 10;
      if (this.time <= 0) {
        this.timeStatus.textContent = 0;
        this.fail();
      };
      this.timeStatus.textContent = this.time;
      console.log("timer is done");
    }, 100);
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      clearInterval(this.clock);
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      clearInterval(this.clock);
      this.reset();
    }
    this.setNewWord();
    this.timeStatus.textContent = this.time;
  }

  setNewWord() {
    const word = this.getWord();
    this.time = word.length;
    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  
}

new Game(document.getElementById('game'))

