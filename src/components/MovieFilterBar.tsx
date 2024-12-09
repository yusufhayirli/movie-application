import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setSearchByName, setSearchByYear, setFilterByType } from '../redux/movieSlice';
import { Button, ButtonGroup } from 'reactstrap';

const MovieFilterBar: React.FC = () => {
  const dispatch = useDispatch();
  const { searchByName, searchByYear, filterByType } = useSelector(
    (state: RootState) => state.movies
  );

  const onCheckboxBtnClick = (selected: string) => {
    dispatch(setFilterByType(filterByType === selected ? '' : selected));
  };

  return (
    <div className="movie-search-bar">
      <div className="search-by-name-field">
        <input
          type="text"
          className="form-control input-field"
          value={searchByName}
          onChange={(e) => dispatch(setSearchByName(e.target.value))}
          placeholder="Search By Movie Name"
        />
      </div>
      <div className="search-by-year-field">
        <input
          type="text"
          className="form-control input-field"
          value={searchByYear}
          onChange={(e) => dispatch(setSearchByYear(e.target.value))}
          placeholder="Search By Release Year"
        />
      </div>
      <div className="filter-type-field">
        <ButtonGroup>
          <Button
            color="primary"
            outline
            onClick={() => onCheckboxBtnClick('movie')}
            active={filterByType === 'movie'}
          >
            Movie
          </Button>
          <Button
            color="primary"
            outline
            onClick={() => onCheckboxBtnClick('series')}
            active={filterByType === 'series'}
          >
            TV Series
          </Button>
          <Button
            color="primary"
            outline
            onClick={() => onCheckboxBtnClick('episode')}
            active={filterByType === 'episode'}
          >
            TV Series Episodes
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default MovieFilterBar;
