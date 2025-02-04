import { useRef, useEffect, useState } from 'react';
import { useSprings, animated, SpringValue } from '@react-spring/web';

// Module-level flag to track if the animation has been run already in this SPA session.
let hasAnimatedGlobal = false;

interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, any>;
  animationTo?: Record<string, any>[];
  easing?: (t: number) => number | string;
  onAnimationComplete?: () => void;
}

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = 'easeOutCubic',
  onAnimationComplete,
}) => {
  // Determine if we should bypass the animation
  const alreadyAnimated = hasAnimatedGlobal;
  
  // Split the text into words or letters.
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');

  // Define default "from" state based on the animation direction.
  const defaultFrom: Record<string, any> =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
      : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

  // Define default "to" states (animation steps)
  const defaultTo: Record<string, any>[] = [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
    },
    {
      filter: 'blur(0px)',
      opacity: 1,
      transform: 'translate3d(0,0,0)',
    },
  ];

  // Determine the final state from the last step of the provided animation,
  // or use the default final step.
  const finalState =
    (animationTo && animationTo[animationTo.length - 1]) || defaultTo[defaultTo.length - 1];

  // If we've already animated, simply render the text with the final style.
  if (alreadyAnimated) {
    return (
      <p className={`blur-text ${className} flex flex-wrap`}>
        {elements.map((el, index) => (
          <span
            key={index}
            className="inline-block"
            style={finalState} // Immediately apply final style
          >
            {el === ' ' ? '\u00A0' : el}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </span>
        ))}
      </p>
    );
  }

  // Otherwise, prepare to run the animation.
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  // Set up the IntersectionObserver so that we trigger the animation when the element is in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setInView(true);
          setHasAnimated(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold, rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [threshold, rootMargin, hasAnimated]);

  // Set up springs for each letter/word.
  const springs = useSprings(
    elements.length,
    elements.map((_, i) => {
      const baseProps = {
        from: animationFrom || defaultFrom,
        delay: i * delay,
        config: { easing: easing as any },
      };

      return {
        ...baseProps,
        to: inView
          ? async (next: (arg: Record<string, SpringValue<any>>) => Promise<void>) => {
              for (const step of (animationTo || defaultTo)) {
                await next(step);
              }
              animatedCount.current += 1;
              // When every element has animated, mark the global flag.
              if (animatedCount.current === elements.length) {
                if (onAnimationComplete) {
                  onAnimationComplete();
                }
                hasAnimatedGlobal = true;
              }
            }
          : animationFrom || defaultFrom,
      };
    })
  );

  return (
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className="inline-block transition-transform will-change-[transform,filter,opacity]"
        >
          {elements[index] === ' ' ? '\u00A0' : elements[index]}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </animated.span>
      ))}
    </p>
  );
};

export default BlurText;
