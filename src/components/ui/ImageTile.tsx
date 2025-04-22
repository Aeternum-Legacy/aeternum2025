import Image from "next/image";

export default function ImageTile() {
  return (
    <>
      <div className="hidden md:flex flex-row gap-1.5 h-[900px] w-[110%] overflow-hidden">
        <div className="flex flex-col justify-end gap-1.5 basis-[12%]">
          <div className="relative w-full h-[400px]">
            <Image
              src="/images/image-tile1.jpg"
              alt="Tile 1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-end gap-1.5 basis-[10%]">
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

        <div className="flex flex-col justify-end gap-1.5 basis-[13%]">
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

        <div className="flex flex-col justify-end gap-1.5 basis-[16.66%]">
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

        <div className="flex flex-col justify-end gap-1.5 basis-[16.66%]">
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

        <div className="flex flex-col justify-end gap-1.5 basis-[16.66%]">
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

      <div className="relative overflow-hidden -ml-4 block md:hidden">
        <div className="grid grid-cols-3 gap-1 w-[115%]">
          {[
            "image-tile12.jpg",
            "image-tile15.jpg",
            "image-tile9.jpg",
            "image-tile2.jpg",
            "image-tile1.jpg",
            "image-tile6.jpg",
          ].map((src, index) => (
            <div key={index} className="relative w-full h-[200px]">
              <Image
                src={`/images/${src}`}
                alt={`Tile ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
