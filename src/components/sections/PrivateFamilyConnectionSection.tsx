import PrivateFamilyConnectionMobile from "./mobile/PrivateFamilyConnectionMobile";
import PrivateFamilyConnectionDesktop from "./desktop/PrivateFamilyConnectionDesktop";

export default function PrivateFamilyConnectionSection() {
  return (
    <>
      <PrivateFamilyConnectionMobile />
      <PrivateFamilyConnectionDesktop />
    </>
  );
}
