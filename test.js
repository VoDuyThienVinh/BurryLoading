'use strict';

const bgEl = document.querySelector('.bg');
const loadingEl = document.querySelector('.loading-text');

// console.log({bgEl, loadingEl});

let loading = 0;
let blur = 70;

setInterval(() => {
  loading++;
  let percent = loading / 70 * 100; // 1.4;
  blur--;


  bgEl.style.filter = `blur(${blur}px)`;
  loadingEl.innerHTML = `${percent}%`
}, 100);

function eventLoading () {

}

// 100 % ti le vs bat ki so nao ?
/**
 * loading 100%
 * 70px
 * 1% * 2000 /100
 * 1 * 2000 / 100 = blur
 * loading * blur original 
 */