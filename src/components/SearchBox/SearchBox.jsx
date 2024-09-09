import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';

import { changeFilter, selectFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector(selectFilter);

  const handleInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label className={css.searchInput}>
        <span>Find contacts by name</span>
        <input
          type="text"
          name="searchBar"
          value={searchValue}
          onChange={handleInput}
        />
      </label>
    </div>
  );
};

export default SearchBox;
