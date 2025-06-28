import { useParser } from "./useParser";
const Facebook = () => {
  const userId = "gaohongwei";
  useParser(userId);
  return <div>Facebook</div>;
};

export default Facebook;
