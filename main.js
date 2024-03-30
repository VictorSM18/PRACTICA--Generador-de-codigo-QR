const qrcode = document.getElementById("qr");
const inputUrl = document.getElementById("url");
const downloadBtn = document.getElementById("download");
const shareBtn = document.getElementById("share");
const getQR = document.querySelector(".get-qr");
const qrContainer = document.getElementById("qr-container");
const inputContainer = document.getElementById("first-container");

getQR.addEventListener("click", () => {
    let myQR = new QRCode(qrcode, inputUrl.value);

    const canvas = document.querySelector("canvas");
    const pngDataUrl = canvas.toDataURL("image/png");

    downloadBtn.href = pngDataUrl;

    inputContainer.classList.add("no-display");
    qrContainer.classList.remove("no-display");
});

shareBtn.addEventListener("click", () => {
    const canvas = document.querySelector("canvas");
    const pngDataUrl = canvas.toDataURL("image/png");
    navigator.clipboard.writeText(pngDataUrl);
    alert("QR code URL copied to clipboard!");
});
