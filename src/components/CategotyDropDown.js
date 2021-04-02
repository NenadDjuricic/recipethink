import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import mealeapi from "../apis/mealapi";


const CategoryDropDown = () => {
  const [category, setCategory] = useState([]);
  const onClickCategory = async () => {

    try {
      const response = await mealeapi.get(`/list.php?c=list`);
      const data = response.data.meals;
      setCategory(data);
    } catch(error) {

      alert(error.message);
    }
  }

  const renderCategories = category.map((cat) => {
    return <li key={cat.strCategory}>
      <Link to={{
        pathname: `/category/${cat.strCategory}`,
        state: { category: cat.strCategory }
      }} className="dropdown-item">
        {cat.strCategory}
      </Link>
    </li>
  });

  return (
    <div className="dropdown">
      <button
        className="btn btn-warning btn-large rounded-pill dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={onClickCategory}
      >
        Categories
                </button>

      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {renderCategories}
      </ul>

    </div>
  )

}

export default CategoryDropDown;