import CanHit from "../../components/search/CanHit";
import HeaderSearch from "../../components/search/HeaderSearch";
import TopKeySearch from "../../components/search/TopKeySearch";

const SearchPage = () => {

    return (
        <div className="container-search">
            <HeaderSearch />
            <TopKeySearch />
            <CanHit />
        </div>
    )
}

export default SearchPage;