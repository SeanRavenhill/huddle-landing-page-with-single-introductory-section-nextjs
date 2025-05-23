// useNoScroll.ts

// Import React hooks for side effects
import { useEffect } from "react";

/**
 * Custom Hook: useNoScroll
 *
 * Locks or unlocks vertical scrolling of the document body based on the provided flag.
 *
 * When `lock` is true, the hook adds the CSS class 'no-scroll' to the document's body,
 * which disables vertical scrolling. If `lock` is false, it removes the class, allowing scrolling.
 *
 * The hook also cleans up by ensuring the class is removed when the component unmounts or when
 * the `lock` value changes.
 *
 * @param {boolean} lock - A flag indicating whether to lock the body scroll (true = lock, false = unlock).
 */

export default function useNoScroll(lock: boolean) {

  // If lock is true, disable vertical scrolling by adding the class, otherwise enable scrolling.
  useEffect(() => {
    if(lock) {
      document.body.classList.add('no-scroll'); // Disable vertical scrolling.

    } else {
      document.body.classList.remove('no-scroll'); // Enable vertical scrolling.

    }

    // Cleanup function: remove the class to ensure the body scroll is enabled when the component unmounts.
    return () => {
      document.body.classList.remove('no-scroll');

    }
  }, [lock]); // Re-run the effect whenever the lock flag changes.
}