import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    this.emojis.forEach(emoji => {
      const p = document.createElement("p")
      p.textContent = emoji;
      this.div.appendChild(p)
    })
    
  }

  addBananas() {
    let newArr = emojis.map(banana)
  }  
}

alert("hello");
