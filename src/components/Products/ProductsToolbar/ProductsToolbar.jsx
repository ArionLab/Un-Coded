import "./ProductsToolbar.css";

import SearchBar from "../SearchBar/SearchBar";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

function ProductsToolbar({
    search,
    setSearch,
    category,
    setCategory
}){

    return (

        <div className="products-toolbar">

           <SearchBar
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>

           <CategoryFilter
    category={category}
    setCategory={setCategory}
/>

        </div>

    );

}

export default ProductsToolbar;