window.setTimeout(function () {
  addIpTooltip();
}, 1000);

var ip;

chrome.storage.local.get(["ip"], function (result) {
  ip = result;
});

function addIpTooltip() {
  const body = document.querySelector("body");
  const div = document.createElement("div");
  div.innerHTML = `My ip: ${window.ip.ip}`;
  div.style.position = "fixed";
  div.style.zIndex = "11111111";
  div.style.top = "0";
  div.style.right = "10px";
  div.style.fontSize = "24px";
  body.appendChild(div);
}
