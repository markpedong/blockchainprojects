const networks = document.querySelectorAll("#card__header");
const selectNetwork = document.querySelector("#select__network");

// This is for changing the Network in the Button
[...networks].map((el) =>
  el.addEventListener("click", function (e) {
    const network = e.target;

    selectNetwork.innerHTML = network.innerHTML;
    console.log(network);
  })
);
