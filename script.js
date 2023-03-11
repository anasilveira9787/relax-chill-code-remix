const cards = document.querySelectorAll(".card")

console.log(cards)

cards.forEach(card => {
    card.addEventListener('click', handlemusic);
  });

  function handlemusic() {    
    let checkPlay = this.classList.contains("active")
    let audio = this.lastChild

    if(checkPlay) {        
        this.classList.remove("active")
        audio.pause()
        return
    }
    this.classList.add("active")
    audio.play()
  }