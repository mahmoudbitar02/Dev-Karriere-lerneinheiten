import { Outlet, useParams } from "react-router-dom";

function FirstRouteDetail() {
  const { itemId } = useParams();

  return (
    <>
      Product Detail für {itemId} <Outlet />
    </>
  );
}

export default FirstRouteDetail;
