import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

interface Props {
    searchByName: string;
    setSearchByName: React.Dispatch<React.SetStateAction<string>>;
    searchByYear: string;
    setSearchByYear: React.Dispatch<React.SetStateAction<string>>;
    filterByType: string;
    setFilterByType: React.Dispatch<React.SetStateAction<string>>;
}

const MovieFilterBar = ({searchByName, setSearchByName, searchByYear, setSearchByYear, filterByType, setFilterByType} : Props) => {

    const onCheckboxBtnClick = (selected: string) => {
        if (filterByType === selected) {
            setFilterByType("");
        } else {
            setFilterByType(selected);
        }
      };

    return (
        <div className="movie-search-bar">
            {/* <p>Selected: {JSON.stringify(filterByType)}</p> */}
            <div className='search-by-name-field'>
                <input 
                    type="text"
                    className='form-control input-field'
                    value={searchByName}
                    onChange={(e) => setSearchByName(e.target.value)}
                    placeholder='Search By Movie Name'
                />
            </div>
            <div className='search-by-year-field'>
                <input 
                    type="text" 
                    className="form-control input-field" 
                    value={searchByYear}
                    onChange={(e) => setSearchByYear(e.target.value)}
                    placeholder="Search By Release Year"
                />
            </div>
            <div className='filter-type-field'>
                <ButtonGroup>
                    <Button
                        color="primary"
                        outline
                        onClick={() => onCheckboxBtnClick("movie")}
                        active={filterByType === "movie"} // Active if "movie" is selected
                    >
                        Movie
                    </Button>
                    <Button
                        color="primary"
                        outline
                        onClick={() => onCheckboxBtnClick("series")}
                        active={filterByType === "series"} // Active if "series" is selected
                    >
                        TV Series
                    </Button>
                    <Button
                        color="primary"
                        outline
                        onClick={() => onCheckboxBtnClick("episode")}
                        active={filterByType === "episode"} // Active if "episode" is selected
                    >
                        TV Series Episodes
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default MovieFilterBar;
