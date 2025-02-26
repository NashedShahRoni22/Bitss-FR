import useIsWpVersion from "../hooks/useIsWpVersion";

export default function ProductVersion({ mdTextLeft = false }) {
  const isWpVersion = useIsWpVersion();

  return (
    <h3
      className={`mb-2.5 text-center text-xl font-medium text-primary ${mdTextLeft && "md:text-left"}`}
    >
      {isWpVersion ? "WordPress" : "JavaScript"} Version
    </h3>
  );
}
