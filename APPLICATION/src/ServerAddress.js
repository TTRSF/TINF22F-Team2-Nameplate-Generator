import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const ServerAddress = ({onLoad}) => {
    const [query] = useSearchParams();

    useEffect(()=>{
        onLoad&&onLoad(query.get("server"))
    }, [onLoad, query]);

  return <p className="m-auto">{query.get("server")}</p>
};
export default ServerAddress;