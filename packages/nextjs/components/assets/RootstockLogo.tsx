import Image from "next/image";

export const RootstockLogo = ({ className }: { className: string }) => {
  return <Image src="/rootstock.svg" alt="Rootstock Logo" className={className} width={16} height={16} />;
};
