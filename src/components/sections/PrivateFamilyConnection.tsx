import PrivateFamilyConnectionMobile from "./mobile/PrivateFamilyConnectionMobile";
import PrivateFamilyConnectionDesktop from "./desktop/PrivateFamilyConnectionDesktop";

export default function PrivateFamilyConnection() {
  return (
    <>
      <PrivateFamilyConnectionMobile />
      <PrivateFamilyConnectionDesktop />
    </>
  );
}
