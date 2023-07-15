window.addEventListener('wheel', handleZoom);
window.addEventListener('keydown', handleKeyDown);

function handleZoom(event) {
  const devicePixelRatio = window.devicePixelRatio;
  const { deltaY } = event;

  if ((devicePixelRatio === 2 && deltaY > 0) ||
      (devicePixelRatio === 1.5 && deltaY < 0)) {
    event.preventDefault();
  }
}

function handleKeyDown(event) {
  const devicePixelRatio = window.devicePixelRatio;
  const { key } = event;
  
  if ((devicePixelRatio === 2 && (key === '+' || key === '=')) ||
      (devicePixelRatio === 1.5 && (key === '-' || key === '_'))) {
    event.preventDefault();
  }
}
