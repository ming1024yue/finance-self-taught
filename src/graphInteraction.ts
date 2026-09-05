const initialized = new WeakSet<HTMLCanvasElement>();

export function enableGraphInteraction() {
  const setup = (canvas: HTMLCanvasElement) => {
    if (initialized.has(canvas)) return;
    initialized.add(canvas);

    let offsetX = 0;
    let offsetY = 0;
    let scale = 1;
    let dragging = false;
    let startX = 0;
    let startY = 0;
    let originX = 0;
    let originY = 0;

    const render = () => {
      canvas.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
    };
    const reset = () => {
      offsetX = 0;
      offsetY = 0;
      scale = 1;
      render();
    };

    canvas.addEventListener("pointerdown", (event) => {
      dragging = true;
      startX = event.clientX;
      startY = event.clientY;
      originX = offsetX;
      originY = offsetY;
      canvas.classList.add("dragging");
      canvas.setPointerCapture(event.pointerId);
    });
    canvas.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      offsetX = Math.max(-320, Math.min(320, originX + event.clientX - startX));
      offsetY = Math.max(-240, Math.min(240, originY + event.clientY - startY));
      render();
    });
    const stop = (event: PointerEvent) => {
      dragging = false;
      canvas.classList.remove("dragging");
      if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    };
    canvas.addEventListener("pointerup", stop);
    canvas.addEventListener("pointercancel", stop);
    canvas.addEventListener("wheel", (event) => {
      event.preventDefault();
      scale = Math.max(.72, Math.min(1.75, scale * (event.deltaY > 0 ? .92 : 1.08)));
      render();
    }, { passive: false });
    canvas.addEventListener("dblclick", reset);
  };

  const findCanvas = () => {
    const canvas = document.querySelector<HTMLCanvasElement>(".graph-shell canvas");
    if (!canvas) return false;
    setup(canvas);
    return true;
  };
  if (!findCanvas()) {
    const observer = new MutationObserver(() => {
      if (findCanvas()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}
