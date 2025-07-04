/**
 * Counter utility function - Simple click counter implementation
 * 
 * This appears to be a utility from Vite's default template that may not be
 * actively used in the current radio station website. It demonstrates basic
 * DOM manipulation and event handling patterns.
 * 
 * Note: This file might be safe to remove if not being used elsewhere
 * in the application, as it seems to be leftover from the initial Vite setup.
 * 
 * @param {HTMLElement} element - The DOM element to attach the counter to
 */
export function setupCounter(element) {
  // Initialize counter value
  let counter = 0
  
  /**
   * Updates the counter value and DOM display
   * @param {number} count - The new counter value to set
   */
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  
  // Add click event listener to increment counter
  element.addEventListener('click', () => setCounter(counter + 1))
  
  // Initialize counter display with zero
  setCounter(0)
}
