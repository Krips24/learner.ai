"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface FooterProps {
  children?: React.ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="fixed bottom-0 w-full z-40"
    >
      {/* Main Footer Content */}
      <div className="bg-gradient-to-t from-gray-900/90 to-transparent pt-6">
        {children ? (
          children
        ) : (
          <div className="flex justify-around items-center py-3 px-6 backdrop-blur-lg rounded-t-xl border-t border-gray-800">
            {["News", "Quiz", "AI", "Profile"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="flex flex-col items-center text-gray-300 hover:text-white transition-colors group"
              >
                <div className="h-8 w-8 flex items-center justify-center mb-1 rounded-full group-hover:bg-gray-800/50">
                  {item === "AI" && (
                    <span className="text-xs bg-gradient-to-r from-blue-500 to-[#99FF33] bg-clip-text text-transparent font-medium">
                      {item}
                    </span>
                  )}
                  {item !== "AI" && <span className="text-xs">{item}</span>}
                </div>
                <div className="h-[2px] w-4 bg-transparent group-hover:bg-[#99FF33] transition-all" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.footer>
  );
}
