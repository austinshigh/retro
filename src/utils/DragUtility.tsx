export const setDragImage = (ev: React.DragEvent<HTMLElement>) => {
  let img = document.createElement("img")
  img.src = "https://i.ibb.co/48MwZNN/Single-Pixel.png"
  document.body.appendChild(img)
  ev.dataTransfer.setDragImage(img, 0, 0)
}
