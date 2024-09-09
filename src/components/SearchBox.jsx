import { useDispatch, useSelector } from 'react-redux';

import { changeFilter, selectFilter } from '../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector(selectFilter);

  const handleInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label className="flex flex-col w-full max-w-[250px] gap-2">
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
