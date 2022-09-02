// 캔버스 부르기
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const lineWidth = document.querySelector("#line-width");

// 캔버스 크기 조정
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

const colors = [
    "#f03e3e",
    "#e64980",
    "#be4bdb",
    "#7950f2",
    "#4c6ef5",
    "#228be6",
    "#15aabf",
    "#12b886",
    "#40c057",
    "#82c91e",
    "#fab005",
    "#fd7e14"];

let isPainting = false;

function onMousemove (event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }

    ctx.moveTo(event.offsetX, event.offsetY);
    // const strokeColor = colors[Math.floor(Math.random() * colors.length)]
    // ctx.strokeStyle = strokeColor;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

function startPainting(event) {
    isPainting = true;
}

function canclePainting(event) {
    isPainting = false;
}

function onLineWidthChange(event) {
    ctx.lineWidth = event.target.value;
    ctx.beginPath();
}

canvas.addEventListener("mousemove", onMousemove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", canclePainting);
canvas.addEventListener("mouseleave", canclePainting);
lineWidth.addEventListener("change", onLineWidthChange);
