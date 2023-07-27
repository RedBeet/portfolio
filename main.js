let observer = new IntersectionObserver((element)=>{
    element.forEach((box)=>{
        if (box.isIntersecting){
            box.target.style.opacity = 1;
            box.target.style.left = 0;
        } else {
            box.target.style.opacity = 0;
        }
    })
})
let hello = document.querySelector("#hello")
let world = document.querySelector("#world")
let block = document.querySelectorAll(".block")
observer.observe(hello)
observer.observe(world)
observer.observe(block[0])
observer.observe(block[1])
observer.observe(block[2])
observer.observe(block[3])
observer.observe(block[4])
observer.observe(block[5])