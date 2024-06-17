"use client";
import { IconButton } from "@chakra-ui/react";
import { MdLanguage } from "react-icons/md";
import LocalSwitcher from "./local-switcher";
import { useTranslations } from "next-intl";

import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import { FaLanguage } from "react-icons/fa";

const SettingsMenu = () => {
  const t = useTranslations("Header");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton
        icon={<MdLanguage />}
        backgroundColor={"purple.600"}
        color="white"
        className="w-min h-min"
        title={t("settings.language.value")}
        aria-label="Language settings"
        onClick={() => setIsOpen(true)}
      />
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

type SpringModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpringModal: React.FC<SpringModalProps> = ({ isOpen, setIsOpen }) => {
  const t = useTranslations("Header");
  const tButtons = useTranslations("Buttons");
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FaLanguage />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                {t("settings.language.value")}
              </h3>
              <br />
              <div className="text-black bg-white">
                <LocalSwitcher />
              </div>
              <br />
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  {tButtons("close")}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SettingsMenu;
