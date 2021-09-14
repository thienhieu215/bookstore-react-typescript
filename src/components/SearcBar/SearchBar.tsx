import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import style from './Searchbar.module.scss'

const SearchBar = () => {

  const [keyword, setKeyword] = useState<string>('')
  let history = useHistory();

  const pressEnter = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      history.push({
        pathname: '/search',
        search: `?keyword=${keyword}&page=1`,
      });
      setKeyword('')
    }
  }

  const clickBtn = (): void => {
    history.push({
      pathname: '/search',
      search: `?keyword=${keyword}&page=1`,
    });
    setKeyword('')
  }

  return (
    <InputGroup>
      <FormControl
        className={style.searchfield}
        placeholder="keyword..." value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => pressEnter(e)}
      />
      &nbsp;
      <button className={style.searchBtn} disabled={keyword === ''} onClick={() => clickBtn()}>
        <SearchIcon />
      </button>
    </InputGroup>
  );
};

export default SearchBar;
