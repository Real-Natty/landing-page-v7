// let timeoutId;

// function startTimer() {
//   // 1000 milliseconds = 1 second
//   //   2000 = 2 seconds
//   timeoutId = setTimeout(() => {
//     // window.alert("hello")
//     document.body.innerText = "This is after 2 seconds";
//   }, 2000);
// }

// function clearTimer() {
//   clearTimeout(timeoutId);
// }

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => {
//     document.body.innerText = json.title;
//   })
//   .catch((reason) => console.log("An error just occured ooo", reason));

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => {
// const list = document.createElement("ol");

// json.forEach((item) => {
//   const listItem = document.createElement("li");
//   listItem.innerText = item.title;

//   list.appendChild(listItem);
// });

// document.body.appendChild(list);
// const table = document.createElement("table");
// const tableRow = document.createElement("tr");
// const rows = ["ID", "title"];

// rows.forEach((row) => {
//   const head = document.createElement("th");
//   this.innerText = john;
//   tableRow.appendChild(head);
// });
// tableBody.appendChild(tableRow);
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => {
//     // Create table dom
//     const table = document.createElement("table");

// Create thead and thead tr
// const tableHead = document.createElement("thead");
// const tableHeadTr = document.createElement("tr");

// Create the th
// const tableHeadTrTh1 = document.createElement("th");
// const tableHeadTrTh2 = document.createElement("th");
// const tableHeadTrTh3 = document.createElement("th");
// const tableHeadTrTh4 = document.createElement("th");

// tableHeadTrTh1.innerText = "ID";
// tableHeadTrTh2.innerText = "User Id";
// tableHeadTrTh3.innerText = "Title";
// tableHeadTrTh4.innerText = "Status";

// tableHeadTr.appendChild(tableHeadTrTh1);
// tableHeadTr.appendChild(tableHeadTrTh2);
// tableHeadTr.appendChild(tableHeadTrTh3);
// tableHeadTr.appendChild(tableHeadTrTh4);

// tableHead.appendChild(tableHeadTr);
// table.appendChild(tableHead);

// Create tbody and tbody tr
// const tableBody = document.createElement("tbody");

// const tableBodyTr1 = createTableBodyTr(
//   "044",
//   "Peter",
//   "Another banger",
//   "pending"
// );

// tableBody.appendChild(tableBodyTr1);

// //second table body tr
// const tableBodyTr2 = createTableBodyTr(
//   "08",
//   "Jane",
//   "Some long stories",
//   "completed"
// );

// tableBody.appendChild(tableBodyTr2);

//     json.forEach((item) => {
//       const id = item.id;
//       const userId = item.userId;
//       const title = item.title;
//       const status = item.status ? "completed" : "pending";
//       const tr = createTableBodyTr(id, userId, title, status);

//       tableBody.appendChild(tr);
//     });

//     table.appendChild(tableBody);
//     table.style.borderCollapse = "collapse";
//     document.body.appendChild(table);
//   })

//   .catch((reason) => console.log("An error just occured ooo", reason));

// function createTableBodyTr(id, userId, title, status) {
//   // Create a tr
//   const tr = document.createElement("tr");

//   // Create the tds
//   const tdId = document.createElement("td");
//   const tdUserId = document.createElement("td");
//   const tdTitle = document.createElement("td");
//   const tdStatus = document.createElement("td");

//   //   Add the texts from the api
//   tdId.innerText = id;
//   tdUserId.innerText = userId;
//   tdTitle.innerText = title;
//   tdStatus.innerText = status;

//   //   Add styles to our tds
//   tdId.style.border = "1px solid gray";
//   tdUserId.style.border = "1px solid gray";
//   tdTitle.style.border = "1px solid gray";
//   tdStatus.style.border = "1px solid gray";

//   //   Add the td to the tr
//   tr.appendChild(tdId);
//   tr.appendChild(tdUserId);
//   tr.appendChild(tdTitle);
//   tr.appendChild(tdStatus);

//   //   const tds = [tdId, tdUserId, tdTitle, tdStatus];

//   //   tr.append(tds);

//   return tr;
// }
// const openBtn = document.getElementById("openModal");
// const closeBtn = document.getElementById("closeModal");
// const modal = document.getElementById("modal");

// openBtn.addEventListener("click", () => {
//   modal.classList.add("open");
// });

// closeBtn.addEventListener("click", () => {
//   modal.classList.remove("close");
// });
// const popup = document.getElementById("popup");

// function openPopup() {
//   popup.classList.add("open-popup");
//   // console.log("Popup opened");
// }

// function closePopup() {
//   popup.classList.remove("open-popup");
// }
