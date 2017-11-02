
import Armoirie from "./js/models/armoirie"
import styles from "./css/main.css"

// Get all armoiries
const armoirieAnchors = [].slice.call(document.querySelectorAll(".timeline__item"))
const armoiries = [].slice.call(document.querySelectorAll(".armoirie"))

armoirieAnchors.map((anchor) => {
    anchor.addEventListener("click", (e)=> {

        const clickedAnchor = e.target.getAttribute("data-id")
        
        armoirieAnchors.map((anchor) => {
            anchor.classList.remove("is-active")
        })

        e.target.classList.add("is-active")

        armoiries.map((armoirie) => {
            let armoirieId = armoirie.getAttribute("data-id")
            armoirieId == clickedAnchor ? armoirie.classList.add("is-visible") : armoirie.classList.remove("is-visible");
        })
    })
})
