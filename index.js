"use strict";

// ------------------- Variables started ------------------------------

let selectOption = $("#regionName");
let baseURL = "https://islomapi.uz/api/present/day";
let tong = $(".tong");
let quyosh = $(".quyosh");
let peshin = $(".peshin");
let asr = $(".asr");
let shom = $(".shom");
let xufton = $(".xufton");
let region = $(".regionName");
let dateTime = $('#datetime')
let regionNames = $(".header-title");

//--------------------- Variables ended ---------------------------------

// ------------------------Main Render data -----------------------------

function mainRenderData(object) {
  object.forEach((el) => {
    let div = createElement(
      "div",
      "prayer-time",
       `      
        <h3>Tong</h3>
        <img src="./assets/images/svg/isha-prayer1.svg" alt="bomdod">
        <h2>${el.tong_saharlik}</h2>
        `
    );
  });
}
                     
// -------------------------Main Render data end---------------------------

// -------------------------Render data ----------------------------------
function renderData(loop) {
  loop.forEach((el) => {
    let div = createElement("option", "value", `${el}`);
    selectOption.append(div);
  });
}

renderData(provencie);

// -------------------------Render data end-------------------------------

// -------------------------Find time------------------------------------
async function findTime(el) {
  try {
    let response = await fetch(baseURL + `?region=${el}`);
    let result = await response.json();
    // console.log(result);
    tong.textContent = result.times.tong_saharlik;
    quyosh.textContent = result.times.quyosh;
    peshin.textContent = result.times.peshin;
    asr.textContent = result.times.asr;
    shom.textContent = result.times.shom_iftor;
    xufton.textContent = result.times.hufton;
  } catch (err) {
    console.log(err);
  }
}

selectOption.addEventListener("change", (e) => {
  region.textContent = e.target.value;
  findTime(e.target.value);
});

// -------------------------Find time end------------------------------------


// async function timeAllCountry(el) {
//   try {
//     let response = await fetch(baseURL + `?region=${el}`);
//     let result = await response.json();
//     console.log(result);
//     dateTime.textContent = result.date;
//     dateTime.textContent = result.date;
//     dateTime.textContent = result.date;
//     dateTime.textContent = result.date;
//     dateTime.textContent = result.date;
//     dateTime.textContent = result.date;
//   } catch (err) {
//     console.log(err);
//   }
// }

// selectOption.addEventListener("change", (e) => {
//   region.textContent = e.target.value;
//   timeAllCountry(e.target.value);
// });


// async function findTimes(el) {
//   try {
//     let response = await fetch(baseURL + `?region=${el}`);
//     let result = await response.json();
//     console.log(result);
//     tong.textContent = result.times.tong_saharlik;
//     quyosh.textContent = result.times.quyosh;
//     peshin.textContent = result.times.peshin;
//     asr.textContent = result.times.asr;
//     shom.textContent = result.times.shom_iftor;
//     xufton.textContent = result.times.hufton;
//   } catch (err) {
//     console.log(err);
//   }
// }

// regionNames.addEventListener("click", (e) => {
//   region.textContent = e.target.value;
//   findTimes(e.target.value);
// });
