import { useDispatch, useSelector } from 'react-redux';

import { selectFilter } from '../redux/filters/selectors';
import { changeFilter } from '../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector(selectFilter);

  const handleInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className="form">
      <label className="field">
        <span>Find contacts by name</span>
        <input
          className="input"
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
