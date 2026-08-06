import "./SearchBar.css";

import { Search } from "lucide-react";

function SearchBar({
    value,
    onChange
}) {

    return(

        <div className="search-bar">

            <Search
                size={20}
            />

            <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Search products..."
/>

        </div>

    );

}

export default SearchBar;