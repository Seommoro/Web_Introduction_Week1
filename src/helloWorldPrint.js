if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}
function initializeCode() {
  const printHelloWorldButton = document.getElementById("my-button");

  printHelloWorldButton.addEventListener("click", function () {
    const hwHeader = document.getElementById("hwHeader");
    console.log("hello world");
    hwHeader.innerText = "My notebook";
  });
  const addDataButton = document.getElementById("add-data");

  addDataButton.addEventListener("click", function () {
    const aList = document.getElementById("arbitraryList");
    let newListing = document.createElement("li");

    newListing.innerText = document.getElementById("newText").value;
    aList.appendChild(newListing);
  });
}
