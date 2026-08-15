import Image from "next/image";
import BrowserWindow from "./browser-window";

interface ProjectImageProps {
  image: string;
  title: string;
}

export default function ProjectImage({
  image,
  title,
}: ProjectImageProps) {
  return (
    <BrowserWindow>
      <div
        className="
          relative
          aspect-[16/10]
          w-full
          overflow-hidden
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, 900px"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />
      </div>
    </BrowserWindow>
  );
}