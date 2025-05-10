import Image from "next/image";
import { PhoneCall, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";

const grapeProducts = [
  {
    id: 1,
    name: "Anggur Anggur",
    description: "Deskripsi",
    price: 75000,
    image: "/bg-main.webp",
  },
  {
    id: 2,
    name: "Anggur Anggur",
    description: "Deskripsi",
    price: 85000,
    image: "/bg-main.webp",
  },
  {
    id: 3,
    name: "Anggur Anggur",
    description: "Deskripsi",
    price: 95000,
    image: "/bg-main.webp",
  },
  {
    id: 4,
    name: "Anggur",
    description: "Deskripsi",
    price: 80000,
    image: "/bg-main.webp",
  },
  {
    id: 5,
    name: "Anggur",
    description: "Deskripsi",
    price: 80000,
    image: "/bg-main.webp",
  },
  {
    id: 6,
    name: "Anggur",
    description: "Deskripsi",
    price: 80000,
    image: "/bg-main.webp",
  },
  {
    id: 7,
    name: "Anggur",
    description: "Deskripsi",
    price: 80000,
    image: "/bg-main.webp",
  },
  {
    id: 8,
    name: "Anggur",
    description: "Deskripsi",
    price: 80000,
    image: "/bg-main.webp",
  },
];

export default function Products() {
  return (
    <section className="w-full h-full bg-green-50 py-16 lg:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              Produk
            </span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-4">
            Bibit Anggur Berkualitas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilihan bibit anggur terbaik untuk hasil panen yang melimpah dan
            berkualitas tinggi. (Silahkan cek stok terlebih dahulu)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {grapeProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-green-700">
                    Rp {product.price.toLocaleString()}
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg flex items-center text-sm font-medium transition-colors">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Cek
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-600 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Butuh Bibit Anggur dalam Jumlah Besar?
            </h3>
            <p className="text-green-100">
              Kami juga melayani pemesanan bibit anggur dalam jumlah besar.
            </p>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center">
            <PhoneCall className="h-4 w-4 mr-2" />
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
}
