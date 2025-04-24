import { useEffect, useRef } from 'react';

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

interface UseFocusTrapOptions {
  containerRef: React.RefObject<HTMLDivElement | null>;
  isActive: boolean;
  onDeactivate?: () => void;
}

/**
 * useFocusTrap
 * - Moves focus into the container when activated
 * - Traps Tab/Shift+Tab within
 * - Closes on Escape and restores focus
 */
export default function useFocusTrap({ containerRef, isActive, onDeactivate }: UseFocusTrapOptions) {
  const previousFocused = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isActive) return;
    const container = containerRef.current;
    if (!container) return;

    // Remember where focus was
    previousFocused.current = document.activeElement as HTMLDivElement;

    // Find focusable elements
    const focusableEls = Array.from(
      container.querySelectorAll<HTMLDivElement>(FOCUSABLE_SELECTORS)
    );
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    // Move focus into the container
    firstEl?.focus();

    // Keydown handler
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onDeactivate?.();
        return;
      }
      if (e.key !== 'Tab') return;

      const active = document.activeElement as HTMLElement;
      if (!e.shiftKey && active === lastEl) {
        // Tab on last → wrap to first
        e.preventDefault();
        firstEl?.focus();
      } else if (e.shiftKey && active === firstEl) {
        // Shift+Tab on first → wrap to last
        e.preventDefault();
        lastEl?.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    // Cleanup: remove listener & restore focus
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocused.current?.focus();
    };
  }, [containerRef, isActive, onDeactivate]);
}