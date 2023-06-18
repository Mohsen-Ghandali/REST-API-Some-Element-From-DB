// Select the root elements
const root = {
    1: document.querySelector(".root1"),
    2: document.querySelector(".root2"),
    3: document.querySelector(".root3"),
    4: document.querySelector(".root4"),
    5: document.querySelector(".root5"),
    6: document.querySelector(".root6"),
    7: document.querySelector(".root7"),
    8: document.querySelector(".root8")
  };
  
  // Fetch the data
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/element");
    const data = await response.json();
    return data;
  };
  
  // Populate the HTML
  const populateRoot = (data, element, id) => {
    let html = "";
    for (let i = 0; i < data.length; i++) {
      html += 
      `
      <span>${data[i][id]}</span>
      `
      ;
    }
    element.innerHTML = html;
  };
  
  // Fetch the data and populate the HTML
  fetchData().then((data) => {
    for (let i = 1; i <= 8; i++) {
      populateRoot(data, root[i], `id${i}`);
    }
  });


 //another method with "for" .........................................  
 

// // Select the root elements
// const root1 = document.querySelector(".root1")
// const root2 = document.querySelector(".root2")
// const root3 = document.querySelector(".root3")
// const root4 = document.querySelector(".root4")
// const root5 = document.querySelector(".root5")
// const root6 = document.querySelector(".root6")
// const root7 = document.querySelector(".root7")
// const root8 = document.querySelector(".root8")

// // Fetch the data
// const fetchData = async () => {
//     const response = await fetch("http://localhost:3000/element")
//     const data = await response.json()
//     return data
// }

// // Populate the HTML for root1
// const populateRoot1 = (data) => {
//     let html = ""
//     data.forEach((elem) => {
//         html += `<span>${elem.id1}</span>`
//     })
//     root1.innerHTML = html
// }

// // Populate the HTML for root2
// const populateRoot2 = (data) => {
//     let html = ""
//     data.forEach((elem) => {
//         html += `<span>${elem.id2}</span>`
//     })
//     root2.innerHTML = html
// }

// // Populate the HTML for root3
// const populateRoot3 = (data) => {
//     let html = ""
//     data.forEach((elem) => {
//         html += `<span>${elem.id3}</span>`
//     })
//     root3.innerHTML = html
// }

// // Populate the HTML for root4
// const populateRoot4 = (data) => {
//     let html = ""
//     data.forEach((elem) => {
//         html += `<span>${elem.id4}</span>`
//     })
//     root4.innerHTML = html
// }

// // Populate the HTML for root5
// const populateRoot5 = (data) => {
//     let html = ""
//     data.forEach((elem) => {
//         html += `<span>${elem.id5}</span>`
//     })
//     root5.innerHTML = html
// }

// // Populate the HTML for root6
// const populateRoot6 = (data) => {
//     let html = ""
//     data.forEach((elem) => {
//         html += `<span>${elem.id6}</span>`
//     })
//     root6.innerHTML = html
// }

// // Populate the HTML for root7
// const populateRoot7 = (data) => {
//     let html = ""
//     data.forEach((elem) => {
//         html += `<span>${elem.id7}</span>`
//     })
//     root7.innerHTML = html
// }

// // Populate the HTML for root8
// const populateRoot8 = (data) => {
//     let html = ""
//     data.forEach((elem) => {
//         html += `<span>${elem.id8}</span>`
//     })
//     root8.innerHTML = html
// }

// // Fetch the data and populate the HTML
// fetchData().then((data) => {
//     populateRoot1(data)
//     populateRoot2(data)
//     populateRoot3(data)
//     populateRoot4(data)
//     populateRoot5(data)
//     populateRoot6(data)
//     populateRoot7(data)
//     populateRoot8(data)
// })






