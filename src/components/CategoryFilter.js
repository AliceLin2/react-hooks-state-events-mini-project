import React from "react";

function CategoryFilter({categories, onSelectCategory}) {
  //const [className, setClassName] = useState("")
  function handleCategoryFilter(e){
    const siblings = e.target.parentElement.children
    Array.from(siblings).forEach(sibling=>{
      if(sibling.classList!==undefined){
        sibling.classList.remove("selected")
      }
    })
    e.target.className = "selected"
    onSelectCategory(e.target.innerText)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category=>{
        return <button key={category} onClick={handleCategoryFilter}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
