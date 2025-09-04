import React from "react";
import Link from "next/link";
import { FlowLogo } from "./assets/FlowLogo";
import { hardhat } from "viem/chains";
import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Faucet } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";

/**
 * Site footer
 */
export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  return (
    <div className="min-h-0 py-5 px-1 mb-11 lg:mb-0 bg-base-100">
      <div>
        <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
          <div className="flex flex-col md:flex-row gap-2 pointer-events-auto">
            {nativeCurrencyPrice > 0 && (
              <div>
                <div className="btn btn-primary btn-sm font-epilogue font-medium gap-1 cursor-auto bg-flow-green text-flow-black hover:bg-flow-green-dark">
                  <CurrencyDollarIcon className="h-4 w-4" />
                  <span>{nativeCurrencyPrice.toFixed(2)}</span>
                </div>
              </div>
            )}
            {isLocalNetwork && (
              <>
                <Faucet />
                <Link
                  href="/blockexplorer"
                  passHref
                  className="btn btn-primary btn-sm font-epilogue font-medium gap-1 bg-flow-green text-flow-black hover:bg-flow-green-dark"
                >
                  <MagnifyingGlassIcon className="h-4 w-4" />
                  <span>Block Explorer</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-full">
        <ul className="menu menu-horizontal w-full">
          <div className="flex justify-center items-center gap-2 text-sm w-full font-epilogue">
            <div className="text-center">
              {/* TODO: add the scaffold-eth-flow repo link */}
              <a
                href="https://github.com/siddhant-k08/scaffold-eth-flow"
                target="_blank"
                rel="noreferrer"
                className="link text-accent-blue-normal hover:text-accent-blue-dark font-medium"
              >
                Fork me
              </a>
            </div>
            <span className="text-base-content">·</span>
            <div className="flex justify-center items-center gap-2">
              <p className="m-0 text-center text-base-content">
                Built with <HeartIcon className="inline-block h-4 w-4 text-accent-pink-normal" /> at
              </p>
              <a
                className="flex justify-center items-center gap-1 hover:opacity-80 transition-opacity"
                href="https://buidlguidl.com/"
                target="_blank"
                rel="noreferrer"
              >
                <BuidlGuidlLogo className="w-3 h-5 pb-1" />
                <span className="link text-accent-blue-normal hover:text-accent-blue-dark font-medium">BuidlGuidl</span>
              </a>
              <p className="text-base-content">and</p>
              <a
                className="flex justify-center items-center gap-1 hover:opacity-80 transition-opacity"
                href="https://flow.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FlowLogo className="w-3 h-5 pb-1" />
                <span className="link text-flow-green hover:text-flow-green-dark font-medium">Flow</span>
              </a>
            </div>
            <span className="text-base-content">·</span>
            <div className="text-center">
              <a
                href="https://t.me/joinchat/KByvmRe5wkR-8F_zz6AjpA"
                target="_blank"
                rel="noreferrer"
                className="link text-accent-blue-normal hover:text-accent-blue-dark font-medium"
              >
                {/* TODO: Add link to github repo to create issue */}
                Support
              </a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
