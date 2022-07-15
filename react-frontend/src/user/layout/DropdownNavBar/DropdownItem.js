import React from "react";
import { Link } from "react-router-dom";
import { getProductsByCategory } from "../../../redux/actions/productsActions";
import { getCategoriesByRoot } from "../../../redux/actions/categoriesActions";
import { useDispatch } from "react-redux";

const DropdownItem = ({ category_name, categories }) => {
  const cates = categories.filter(
    (cat) => cat.category_root_name === category_name
  );
  const dispatch = useDispatch();
  const onClick = (event) => {
    dispatch(getProductsByCategory(event.target.name));
    dispatch(getCategoriesByRoot(event.target.name));
  };
  return (
    <div>
      <div style={{ height: "100px", position: "absolute" }}></div>
      <div className="row">
        {cates.map((cate) => {
          return (
            <div className="col-12" key={cate.category_id}>
              <Link
                key={cate.category_id}
                to={`/${cate.category_root_name}/${cate.category_name}`}
                name={cate.category_name}
                onClick={onClick}
              >
                {cate.category_name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DropdownItem;
