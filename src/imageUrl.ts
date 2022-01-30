import base64Encode from "./base64Encode";
import useBasePath from "./lib/useBasePath";

const imageUrl = ({
  src,
  firstFrame,
}: {
  src: string | null | undefined;
  firstFrame?: boolean | null | undefined;
}): string | null | undefined => {
  const basePath = useBasePath();

  if (src) {
    return `${basePath || ""}/api/image/${
      firstFrame ? "firstFrame/" : ""
    }${base64Encode(src)}`;
  }

  return src;
};

export default imageUrl;
