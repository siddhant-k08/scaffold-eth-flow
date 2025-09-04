import Image from "next/image";
import flowSvg from "./flow.svg";

export const FlowLogo = ({ className }: { className: string }) => {
  return <Image src={flowSvg} alt="Flow Logo" className={className} width={16} height={16} />;
};
