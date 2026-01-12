import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2 className="font-semibold text-xl text-primary ">
        All Category({categories.length})
      </h2>
      <nav className="grid grid-cols-1 mt-5 left-aside ">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive }) => ` py-4 px-10
              ${isActive ? "bg-base-300 font-semibold" : "hover:bg-base-200"}
             `}
          >
            {category.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Category;
