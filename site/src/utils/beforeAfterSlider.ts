/**
 * Initializes an interactive before-and-after image slider.
 * This utility handles dragging, touch events, and keyboard navigation for accessibility.
 *
 * @param sliderElement The main container element for the slider.
 */
export function initializeBeforeAfterSlider(sliderElement: HTMLElement): void {
  if (!sliderElement) {
    console.error('Slider element not found.');
    return;
  }

  const beforeImageContainer = sliderElement.querySelector<HTMLElement>('[data-slider-before-image-container]');
  const afterImage = sliderElement.querySelector<HTMLImageElement>('[data-slider-after-image]');
  const handle = sliderElement.querySelector<HTMLElement>('[data-slider-handle]');
  const divider = sliderElement.querySelector<HTMLElement>('[data-slider-divider]');

  if (!beforeImageContainer || !afterImage || !handle || !divider) {
    console.error('One or more slider internal elements not found.');
    return;
  }

  let isDragging = false;
  let startX = 0;
  let initialHandleLeft = 0;

  /**
   * Updates the slider's position based on a given X coordinate.
   * Ensures the position stays within the bounds of the slider container.
   * @param clientX The X coordinate from a mouse or touch event.
   */
  const updateSliderPosition = (clientX: number): void => {
    const rect = sliderElement.getBoundingClientRect();
    const minX = rect.left;
    const maxX = rect.right;

    // Calculate new position relative to the container
    let newX = Math.max(minX, Math.min(clientX, maxX));
    const percentage = ((newX - minX) / rect.width) * 100;

    // Update the width of the 'after' image container and the handle's position
    beforeImageContainer.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;

    // Update ARIA value for accessibility
    handle.setAttribute('aria-valuenow', Math.round(percentage).toString());
  };

  /**
   * Handles the start of a drag operation (mouse down or touch start).
   * @param event The mouse or touch event.
   */
  const startDrag = (event: MouseEvent | TouchEvent): void => {
    event.preventDefault(); // Prevent default browser drag behavior
    isDragging = true;
    startX = (event as MouseEvent).clientX || (event as TouchEvent).touches[0].clientX;
    initialHandleLeft = handle.offsetLeft;

    sliderElement.classList.add('cursor-grabbing'); // Visual feedback for dragging
    handle.focus(); // Ensure handle is focused when dragging starts
  };

  /**
   * Handles the movement during a drag operation (mouse move or touch move).
   * @param event The mouse or touch event.
   */
  const onDrag = (event: MouseEvent | TouchEvent): void => {
    if (!isDragging) return;

    const clientX = (event as MouseEvent).clientX || (event as TouchEvent).touches[0].clientX;
    updateSliderPosition(clientX);
  };

  /**
   * Handles the end of a drag operation (mouse up or touch end).
   */
  const endDrag = (): void => {
    isDragging = false;
    sliderElement.classList.remove('cursor-grabbing');
  };

  /**
   * Handles keyboard navigation for the slider handle.
   * @param event The keyboard event.
   */
  const handleKeyDown = (event: KeyboardEvent): void => {
    const step = 2; // Move by 2% on each key press
    const currentPercentage = parseFloat(handle.getAttribute('aria-valuenow') || '50');
    let newPercentage = currentPercentage;

    if (event.key === 'ArrowLeft') {
      newPercentage = Math.max(0, currentPercentage - step);
    } else if (event.key === 'ArrowRight') {
      newPercentage = Math.min(100, currentPercentage + step);
    } else {
      return; // Not an arrow key, do nothing
    }

    event.preventDefault(); // Prevent page scrolling
    const rect = sliderElement.getBoundingClientRect();
    const newX = rect.left + (rect.width * newPercentage / 100);
    updateSliderPosition(newX);
  };

  // Attach event listeners
  handle.addEventListener('mousedown', startDrag);
  handle.addEventListener('touchstart', startDrag, { passive: false }); // passive: false to allow preventDefault

  document.addEventListener('mousemove', onDrag);
  document.addEventListener('touchmove', onDrag, { passive: false });

  document.addEventListener('mouseup', endDrag);
  document.addEventListener('touchend', endDrag);

  handle.addEventListener('keydown', handleKeyDown);

  // Initial setup: center the slider
  updateSliderPosition(sliderElement.getBoundingClientRect().left + sliderElement.getBoundingClientRect().width / 2);

  // Set handle tabindex for keyboard accessibility
  handle.setAttribute('tabindex', '0');
  handle.setAttribute('role', 'slider');
  handle.setAttribute('aria-valuemin', '0');
  handle.setAttribute('aria-valuemax', '100');
  handle.setAttribute('aria-label', 'Image comparison slider');

  // Ensure images are fully loaded before calculating size
  const images = [beforeImageContainer.querySelector('img'), afterImage];
  let loadedCount = 0;
  const checkImagesLoaded = () => {
    loadedCount++;
    if (loadedCount === images.length) {
      // Re-center after images are fully loaded to ensure correct dimensions
      updateSliderPosition(sliderElement.getBoundingClientRect().left + sliderElement.getBoundingClientRect().width / 2);
    }
  };

  images.forEach(img => {
    if (img && img.complete) {
      checkImagesLoaded();
    } else if (img) {
      img.addEventListener('load', checkImagesLoaded);
    }
  });

  // Handle window resize to re-center and adjust slider position
  let resizeTimeout: number | undefined;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(() => {
      updateSliderPosition(sliderElement.getBoundingClientRect().left + sliderElement.getBoundingClientRect().width / 2);
    }, 100);
  });
}