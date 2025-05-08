"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/bg-main.webp"
          alt="Kebun Yufa"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
              Yufa Grape Yogyakarta
            </h1>

            <p className="text-base md:text-xl max-w-2xl mx-auto mb-8 text-gray-100 font-medium">
              Menyediakan berbagai jenis bibit anggur import murah dan
              berkualitas
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button
                size="lg"
                className="bg-green-700 hover:bg-green-800 text-white font-medium text-base px-6 w-full sm:w-auto"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Pesan Sekarang
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-black font-medium text-base px-6 w-full sm:w-auto"
              >
                Lihat Produk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
