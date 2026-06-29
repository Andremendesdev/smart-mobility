import { ASSETS } from "@/lib/assets";

const Logo = ({ className = "h-10 md:h-12 w-auto shrink-0" }) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={ASSETS.logo}
      alt="Smart Mobility"
      width={729}
      height={198}
      className={className}
      decoding="async"
      fetchPriority="high"
    />
  );
};

export default Logo;
