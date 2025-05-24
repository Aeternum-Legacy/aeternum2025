import ImageTileDesktop from "./desktop/ImageTileDesktop";
import ImageTileMobile from "./mobile/ImageTileMobile";

export default function ImageTileSection() {
  return (
    <>
      <ImageTileMobile />
      <ImageTileDesktop />
    </>
   
  );
}
