export const useScaleToFit = (designWidth = 1920, designHeight = 1080) => {
  const updateScale = (element: HTMLElement | null) => {
    if (!element) return
    const scale = Math.min(window.innerWidth / designWidth, window.innerHeight / designHeight)
    element.style.transform = `scale(${scale})`
    element.style.transformOrigin = 'left top'
    element.style.left = `${(window.innerWidth - designWidth * scale) / 2}px`
    element.style.top = `${(window.innerHeight - designHeight * scale) / 2}px`
  }

  return { updateScale }
}
