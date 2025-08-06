"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterProps {
  children?: React.ReactNode;
}

export function Footer({ children }: FooterProps) {
  const pathname = usePathname();
  const currentPage = pathname.split("/")[1] || "dashboard"; // Get the first part of path

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
            {["Dashboard", "News", "Quiz", "AI", "Profile"].map((item) => {
              const itemPath = item.toLowerCase();
              const isActive =
                currentPage === itemPath ||
                (currentPage === "" && itemPath === "dashboard");

              return (
                <Link
                  key={item}
                  href={`/${itemPath}`}
                  className={`flex flex-col items-center transition-colors group ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <div
                    className={`h-8 w-8 flex items-center justify-center mb-1 rounded-full ${
                      isActive ? "" : "group-hover:bg-gray-800/50"
                    }`}
                  >
                    {item === "AI" && (
                      <span
                        className={`text-xs ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500 to-[#99FF33] bg-clip-text text-transparent font-medium"
                            : "bg-gradient-to-r from-blue-500 to-[#99FF33] bg-clip-text text-transparent"
                        }`}
                      >
                        {item}
                      </span>
                    )}
                    {item !== "AI" && <span className="text-xs">{item}</span>}
                  </div>
                  <div
                    className={`h-[2px] w-4 transition-all ${
                      isActive
                        ? "bg-[#99FF33]"
                        : "bg-transparent group-hover:bg-[#99FF33]"
                    }`}
                  />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </motion.footer>
  );
}
