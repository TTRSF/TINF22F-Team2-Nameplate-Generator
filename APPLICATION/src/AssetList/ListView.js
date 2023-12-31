import React from "react";
import {useSearchParams} from "react-router-dom";
import PropTypes from "prop-types";
import Searchbar from "../Searchbar";
import AssetList from "./AssetList";

export function withRouter(Children){
    return(props)=>{
        const [query, setQuery] = useSearchParams();
        return <Children {...props}  filterTerm={query.get("search")} query={query} setQuery={setQuery}/>
    }
}

class ListView extends React.Component{
    static propTypes={
        tableData: PropTypes.array,
        serverAddress: PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state= {
            filteredTableData: [],
            filterTerm: this.props.filterTerm ? this.props.filterTerm : ""
        }
    }



    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps!==this.props){
            this.updateFilter(this.props.filterTerm?this.props.filterTerm:"")
        }
    }

    componentDidMount() {
        this.filterTableData();
    }

    updateFilter=(term)=>{
        this.setState({filterTerm:term}, ()=>{
            this.filterTableData();
        })
    };

    updateRoute=()=>{
        this.props.setQuery(Object.fromEntries([...this.props.query.entries(), ["search", this.state.filterTerm]]))
    };

    filterTableData = (filterString = this.state.filterTerm) => {
        this.setState({filteredTableData: this.props.tableData.filter(item => item.idShort.toLowerCase().includes(filterString.toLowerCase()))})
    };

render(){
    return(
    <div className="ListView">
        <Searchbar hint={"Asset Name"}
                   buttonText={"SearchText"}
                   contentClassName={"list-searchbar"}
                   searchContainerClassName={"list-search-container"}
                   containerClassName={"list-searchbar-container mt-3"}
                   iconClassName={"list-searchbar-icon"}
                   onChange={this.updateFilter}
                   onBlur={this.updateFilter}
                    value={this.state.filterTerm}
                    onSubmit={this.updateRoute}></Searchbar>
        <AssetList tableData={this.state.filteredTableData}></AssetList>
    </div>);
}
}

export default withRouter(ListView);