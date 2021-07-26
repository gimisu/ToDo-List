const images = [
    "몬스터대학교.jpg",
    "소울.jpg",
    "알라딘.jpg",
    "코코.jpg",
    "토이스토리.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);