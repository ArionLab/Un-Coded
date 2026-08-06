import "./CategoryFilter.css";

const categories = [

    "All",

    "Whey",

    "Bars",

    "Chips"

];

function CategoryFilter({

    category,

    setCategory

}){

    return(

        <div className="category-filter">

            {categories.map((item)=>(

                <button

                    key={item}

                    className={
                        category===item
                        ? "active"
                        : ""
                    }

                    onClick={()=>setCategory(item)}

                >

                    {item}

                </button>

            ))}

        </div>

    );

}

export default CategoryFilter;