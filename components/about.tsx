import Image from "next/image";
import { ArrowRight, Clock, Package, Users } from "lucide-react";
import { Button } from "./ui/button";

export default function About() {
  return (
    <section className="container mx-auto py-16 px-4 lg:py-24">
      <div className="mx-auto">
        <div className="mb-12 text-center">
          <div className="inline-block mb-3">
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              Tentang Kami
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
            Yufa Grape
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-100 rounded-full -z-10"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-green-600 transition-all duration-500 hover:shadow-green-200/50">
              <Image
                src="/bg-main.webp"
                alt="Kebun Yufa"
                width={1920}
                height={1080}
                className="object-cover w-full h-[400px] md:h-[500px] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium">
                  Tampak kebun Yufa Grape
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Menyediakan produk bibit anggur import dan berkualitas sejak 2020
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Yufa Grape adalah penyedia bibit anggur impor yang berkualitas
              tinggi. Kami berkomitmen untuk menyediakan bibit unggul yang
              sehat, terpercaya, dan siap tanam, guna mendukung pertumbuhan
              kebun anggur yang produktif dan berkelanjutan.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7 pt-4">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Clock className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">24 Jam</h3>
                  <p className="text-gray-600">Siap melayani 24 jam</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Package className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Fleksibel</h3>
                  <p className="text-gray-600">
                    Melayani pembelian eceran maupun partai besar.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Free Konsultasi</h3>
                  <p className="text-gray-600">
                    Konsultasi dan pendampingan gratis
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="inline-flex items-center bg-green-600 text-white font-medium hover:bg-green-700 transition-colors group"
            >
              Kunjungi Kebun Kami
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-xl bg-green-50">
            <p className="text-base md:text-4xl font-bold text-green-700">4+</p>
            <p className="text-gray-700">Tahun Pengalaman</p>
          </div>
          <div className="p-6 rounded-xl bg-green-50">
            <p className="text-base md:text-4xl font-bold text-green-700">
              20+
            </p>
            <p className="text-gray-700">Jenis Tanaman</p>
          </div>
          <div className="p-6 rounded-xl bg-green-50">
            <p className="text-base md:text-4xl font-bold text-green-700">
              100+
            </p>
            <p className="text-gray-700">Pelanggan Puas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
