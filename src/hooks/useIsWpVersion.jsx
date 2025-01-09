import { useParams } from "react-router";

export default function useIsWpVersion() {
  const { version } = useParams();
  return version === "wp";
}
