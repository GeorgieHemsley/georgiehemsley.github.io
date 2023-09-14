class Modal {
    constructor() {
        this.modal = document.querySelector(".modal")
        this.cover = document.querySelector(".cover")
    }
    open() {
        this.modal.classList.add("active")
        openBtn.classList.add("active")
        this.cover.classList.add("active")
    }
    close() {
        this.modal.classList.remove("active")
        openBtn.classList.remove("active")
        this.cover.classList.remove("active")
    }
} 
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");
const cover = document.querySelector(".cover")
const modal = new Modal()

openBtn.addEventListener('click', function(event) {
    modal.open()
})
closeBtn.addEventListener('click', function(event) {
    modal.close()
})