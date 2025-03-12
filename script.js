let body = document.getElementsByTagName("body")[0];


const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

function init_toppage(){
    let logo = document.getElementsByClassName("logo")[0];
    let contents = document.getElementsByClassName("contents");
    logo.style.opacity = 0;
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.opacity = 0;
    }
    typyng('.typing','提供：Delphyilia──');
}

async function appear_logo(){
    body.style.backgroundColor = "black";
    let logo = document.getElementsByClassName("logo")[0];
    for (let i = 0; i < 100; i++) {
        let opacity_level = i/100;
        await sleep(25);
        console.log(opacity_level);
        logo.style.opacity = String(opacity_level);
    }
    let contents = document.getElementsByClassName("contents");
    for (let j=0; j < 100; j++){
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.opacity = j/100;
    }
    await sleep(5);
    }
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
    setTimeout(init_toppage(), 0);
    //setTimeout(typyng('.typing','提供：Delphyilia──'),0);
    //setTimeout(appear_logo, 1000);
  });
  