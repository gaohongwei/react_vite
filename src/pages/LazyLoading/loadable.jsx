import loadable from "@loadable/component";

const cmpPath1 = "@/pages/Home";
const ComponentHome = loadable(() => import(`../Home`));

function LoadableLoading() {
  return (
    <div>
      Loadable
      <ComponentHome />
    </div>
  );
}

export default LoadableLoading;
