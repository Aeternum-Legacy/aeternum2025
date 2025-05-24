import MemoryPreservationMobile from "./mobile/MemoryPreservationMobile";
import MemoryPreservationDesktop from "./desktop/MemoryPreservationDesktop";

export default function MemoryPreservationSection() {
  return (
    <>
      <MemoryPreservationMobile />
      <MemoryPreservationDesktop />
    </>
  );
}
