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
    const newDiv = document.createElement("div")
    const newContent = document.createTextNode(newArr)
    newP.appendChild(newContent)
    const currentDiv = document.getElementById("emojis")
    document.body.insertBefore(newDiv, currentDiv)  
  }

  addBananas() {
    let newArr = emojis.map(banana)
  }  
}
