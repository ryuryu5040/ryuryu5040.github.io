import Link from "next/link";

type Props = {
  link: string;
  label?: string;
};

export default function Button({ link,  label,}: Props) {
  return (
    <Link href={link}>
      <button
        className="
          rounded-xl
          bg-gray-500
          px-8
          py-4
          text-xl
          font-semibold
          text-white
          shadow-lg
          transition
          hover:bg-gray-600
          hover:scale-105
          mx-3
        "
      >
        {label}
      </button>
    </Link>
  );
}
