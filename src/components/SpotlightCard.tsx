import { useRef, useState, ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

const SpotlightCard = ({ children, className = "" }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`card-spotlight ${className}`}
    >
      <div
        className="spotlight"
        style={{
          background: `radial-gradient(circle 250px at ${pos.x}px ${pos.y}px, rgba(212,168,83,0.07), transparent)`,
          opacity: hovering ? 1 : 0,
        }}
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
};

export default SpotlightCard;
