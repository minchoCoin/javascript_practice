const images = ["0.PNG","1.PNG","2.PNG"];

const chosenimage = images[Math.floor(Math.random()*images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenimage}`;

document.body.appendChild(bgimage);

function changeimage(){
    const targetImage = document.querySelector("img");
    const rechooseImg = images[Math.floor(Math.random()*images.length)];
    targetImage.src = `img/${rechooseImg}`;

}

setInterval(changeimage,10000);