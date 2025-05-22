import Image from "next/image";

export default function ImageTile() {
  return (
    <section className="hidden md:flex section-wrapper flex-col">
      <h1 className="leading-tight tracking-tight text-center md:text-left">
        <span className="block">
          Do not let <span className="block sm:hidden" />
          memories fade
        </span>
        <span className="flex items-center justify-center md:justify-start gap-3 mt-2">
          Secure them forever
          <img
            src="/icons/aeternum-logo3.svg"
            alt="Aeternum logo representing memory preservation"
            title="Aeternum logo"
            className="hidden md:block w-[90px] md:h-[80px]"
          />
        </span>
      </h1>

      <p className="text-lg md:text-xl mt-4 mb-5 md:mb-0 text-center md:text-left">
        <span className="sr-only">
          Preserve your memories today with Aeternum.
        </span>
        Your memories, your legacy – <span className="block sm:hidden" />
        begin preserving them today.
      </p>

      <div className="relative overflow-x-hidden w-full md:-mt-18">
        <div className="w-[120%]">
          <div className="hidden md:flex flex-row gap-3 h-[900px] w-[110%] overflow-hidden">
            <div className="flex flex-col justify-end gap-3 basis-[12%]">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/image-tile1.jpg"
                  alt="Tile 1"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col justify-end gap-3 basis-[10%]">
              <div className="relative w-full h-[250px]">
                <Image
                  src="/images/image-tile2.jpg"
                  alt="Tile 2"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative w-full h-[250px]">
                <Image
                  src="/images/image-tile3.jpg"
                  alt="Tile 3"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col justify-end gap-3 basis-[13%]">
              <div className="relative w-full h-[300px]">
                <Image
                  src="/images/image-tile4.jpg"
                  alt="Tile 4"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative w-full h-[160px]">
                <Image
                  src="/images/image-tile5.jpg"
                  alt="Tile 5"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative w-full h-[160px]">
                <Image
                  src="/images/image-tile6.jpg"
                  alt="Tile 6"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col justify-end gap-3 basis-[16.66%]">
              <div className="relative w-full h-[180px]">
                <Image
                  src="/images/image-tile9.jpg"
                  alt="Tile 9"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative w-full h-[380px]">
                <Image
                  src="/images/image-tile8.jpg"
                  alt="Tile 8"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative w-full h-[180px]">
                <Image
                  src="/images/image-tile7.jpg"
                  alt="Tile 7"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col justify-end gap-3 basis-[16.66%]">
              <div className="relative w-full h-[300px]">
                <Image
                  src="/images/image-tile12.jpg"
                  alt="Tile 12"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative w-full h-[350px]">
                <Image
                  src="/images/image-tile11.jpg"
                  alt="Tile 11"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative w-full h-[180px]">
                <Image
                  src="/images/image-tile10.jpg"
                  alt="Tile 10"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col justify-end gap-3 basis-[16.66%]">
              <div className="relative w-full h-[380px]">
                <Image
                  src="/images/image-tile15.jpg"
                  alt="Tile 15"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative w-full h-[380px]">
                <Image
                  src="/images/image-tile14.jpg"
                  alt="Tile 14"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative w-full h-[180px]">
                <Image
                  src="/images/image-tile13.jpg"
                  alt="Tile 13"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
