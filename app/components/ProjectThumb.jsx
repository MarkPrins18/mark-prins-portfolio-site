import Image from "next/image";

export default function ProjectThumb({ type, title }) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={`/projects/${type}.png`}
        alt={`Website van ${title}`}
        fill
        priority
        className="object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
      />
    </div>
  );
}
