import {Button} from "react-bootstrap";
import "./Searchbar.scss"
import {useEffect, useRef, useState} from "react";

function Searchbar({onChange, onSubmit, onBlur, hint, suggestions, containerClassName, contentClassName, value, clearIconClassName, searchIconClassName, searchContainerClassName, suggestionsClassName}) {
    const containerRef = useRef()
    const inputRef= useRef()
    const [isFocused, setFocused] = useState(false)
    const [textValue, setTextValue] = useState(value ? value : "")
    const [filteredSuggestions, setFilteredSuggestions] = useState([])

    useEffect(() => {
        if (containerRef.current.contains(document.activeElement)) {
            setFocused(true)
        } else {
            setFocused(false)
        }
    }, [document.activeElement])

    useEffect(()=>{
        setFilteredSuggestions(suggestions?suggestions:[])
        filterSuggestions()
    }, [suggestions])

    useEffect(() => {
        setTextValue(value? value : "");
    }, [value])

    useEffect(() => {
        filterSuggestions();
    }, [textValue])

    const handleChange = (event) => {
        event.preventDefault();
        setTextValue(event.target.value)

        filterSuggestions()
        onChange && onChange(event.target.value);
    };

    const handleSubmit = (text) => {
        onSubmit && onSubmit((typeof text === "string")?text:textValue);
        setTextValue("")
    };

    const handleFocus = () => {

        setFocused(true)
    }

    const handleBlur = () => {

        setFocused(false)
        onBlur && onBlur(textValue);
    }

    const handleSuggestionClick = (event) => {
        setTextValue(event.target.textContent)
        handleSubmit(event.target.textContent)
    }

    const filterSuggestions = () => {
        if (suggestions) {
            setFilteredSuggestions(suggestions.filter((item) => (item.match(new RegExp(textValue, 'i')))))
        }
    }

    return (<div className={"search-container " + containerClassName}>
        <div id={"buttonContainer"} className={"d-flex flex-column outlineBorder bg-light foreground position-relative " + contentClassName}
             ref={containerRef} onBlur={handleBlur} onFocus={handleFocus}>
            <form onSubmit={handleSubmit} autoComplete={"off"}>
                <div className={"d-flex flex-row " + searchContainerClassName}>
                    <input id={"searchBar"}
                           ref={inputRef}
                           className={"w-100 border-0 bg-transparent outline-none ms-2"}
                           name={"searchTerm"}
                           type={"search"}
                           placeholder={hint}
                           onChange={handleChange}
                           value={textValue ? textValue.toString() : ""}
                           autoComplete={"off"}/>
                    <Button variant={"flush"}
                        aria-label="Clear input"
                        title="Clear input"
                        onClick={(e) => {
                            e.preventDefault();
                            setTextValue("");
                            inputRef.current.focus();
                        }}
                    ><svg xmlns="http://www.w3.org/2000/svg"
                             className={"bi bi-x-lg clear-input-button " + clearIconClassName} viewBox="0 0 16 16">
                            <path
                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                    </Button>
                    <Button variant={"flush"} type={"submit"} className={"ms-auto me-2"}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className={"bi search-icon " + searchIconClassName} viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </Button>
                </div>
            </form>
            {suggestions ?
                <div className={`${isFocused ? "" : "h-0"}  z-1 animate-height suggestion-box `}>
                    <hr className={"m-1"}/>
                <div className={"d-flex flex-column"}>
                    {filteredSuggestions.map((suggestion, index) => (
                        <p key={index} onClick={handleSuggestionClick} className={"suggestion " + suggestionsClassName}>{suggestion}</p>
                    ))}
                </div>
            </div> : ""}
        </div>
    </div>)
}

export default Searchbar;
