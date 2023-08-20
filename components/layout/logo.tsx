import { Store } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href={"/"}
      className="flex items-center justify-center gap-2 text-xl font-extrabold text-violet-900"
    >
      <Store className="w-10 h-10 text-violet-600" />
      <span className="hidden sm:inline-block">Store</span>
    </Link>
  );
}
