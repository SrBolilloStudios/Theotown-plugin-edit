interface IconProps {
  id: string;
  className?: string;
  size?: number;
}

function Icon({ id, className = "", size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <use href={`/icons.svg#${id}`} />
    </svg>
  );
}

export { Icon };
