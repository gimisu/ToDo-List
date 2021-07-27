const images = [
    "몬스터대학교.jpg",
    "소울.jpg",
    "알라딘.jpg",
    "토이스토리.jpg",
    "디즈니성.jpg",
    "라이언킹.jpg",
    "코코.jpg",
    "미녀와야수.jpg",
    "푸.jpg",
    "알라딘2.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.prepend(bgImage);