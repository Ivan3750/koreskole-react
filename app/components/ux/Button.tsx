"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import "@/app/i18n";

const Button = ({
  label,
  locale,
}: {
  label: any;
  locale: any;
}) => (
  <Link href={`/${locale}/holdstart-vejle`} className="self-start">
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="hidden lg:flex items-center gap-2 px-6 h-11 rounded-full font-medium shadow-md"
      style={{ backgroundColor: "var(--color-yellow)", color: "#000" }}
    >
      {label}
      <motion.div whileHover={{ rotate: 45 }}>
        <ArrowUpRight size={16} />
      </motion.div>
    </motion.button>
  </Link>
);

export default Button;