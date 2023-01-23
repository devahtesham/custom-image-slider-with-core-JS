let images = [
    // "./images/1.png",
    // "./images/2.png",
    // "./images/3.png",
    // "./images/4.png",
]
const allImages = document.querySelectorAll(".slider-img img");
allImages.forEach((img)=>{
    let imgUrl = img.getAttribute("src");
    images.push(imgUrl)
})
//  console.log("IMAGES",images)
const activeImgEl = document.getElementById("activeImg");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
let currentImg = null

const setActiveImg = (targetImage)=>{
    currentImg = targetImage
    activeImgEl.setAttribute("src",targetImage)
}
// setActiveImg(images[3])

leftArrow.addEventListener("click",()=>{
    let currentIndex = images.indexOf(currentImg)
    if (currentIndex - 1 < 0){
        currentIndex = images.length - 1
    }else{
        currentIndex--
    }
    setActiveImg(images[currentIndex])
})
rightArrow.addEventListener("click",()=>{
    let currentIndex = images.indexOf(currentImg);
    if(currentIndex + 1 === images.length){
        currentIndex = 0
    }else{
        currentIndex++;
    }
    setActiveImg(images[currentIndex])
})