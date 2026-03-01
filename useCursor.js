import { useEffect, useRef } from 'react';

export const useCustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) {
      dot.style.display = 'none';
      ring.style.display = 'none';
      return;
    }

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    };

    const sel = 'a, button, input, select, textarea, label, [role="button"], .card, .btn';

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(sel)) ring.classList.add('hovering');
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(sel)) ring.classList.remove('hovering');
    });
    document.addEventListener('mousedown', () => {
      dot.classList.add('clicking');
      ring.style.transform = 'translate(-50%,-50%) scale(0.8)';
    });
    document.addEventListener('mouseup', () => {
      dot.classList.remove('clicking');
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
    });
    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1';
      ring.style.opacity = '0.6';
    });

    animateRing();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return { dotRef, ringRef };
};
