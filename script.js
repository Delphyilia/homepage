let logo = document.getElementsByClassName("logo")[0];
let body = document.getElementsByTagName("body")[0];


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function appear_logo(){
    body.style.backgroundColor = "black";
    for (let i = 0; i < 100; i++) {
        let opacity_level = i/100;
        await sleep(50);
        console.log(opacity_level);
        logo.style.opacity = String(opacity_level);
    }
    //body.style.backgroundColor = '#1f4173';
}

async function typyng(el, sentence){
    console.log(sentence);
    document.querySelector(el).style.color = "white";
    for (let i = 0; i < sentence.length; i++) {
        document.querySelector(el).textContent += sentence.charAt(i);
        await sleep(100);
        console.log(sentence.charAt(i));
    }
    await sleep(1000);
    document.querySelector(el).textContent = "";
    appear_logo();
}

// ページが完全に読み込まれた後に実行
window.addEventListener('load', () => {
    setTimeout(typyng('.typing','Delphyilia presents──'),0);
    //setTimeout(appear_logo, 1000);
  });
  