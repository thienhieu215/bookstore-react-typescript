import React, { useState, useEffect } from 'react';
import Grid, { Product } from '../components/GridView/GridView'
import { Container } from 'react-bootstrap'
import { searchBookAPI } from '../components/api';
import SearchBar from '../components/SearcBar/SearchBar';
import Pagination from '../components/Pagination';
import { useLocation } from 'react-router';
import style from './Page.module.scss'

const SearchResults = () => {

  const [searchBookList, setSearchBookList] = useState<Array<Product>>([])
  const [totalSearchNum, setTotalSearchNum] = useState<number>(1)

  const { search } = useLocation()
  const searchParams = new URLSearchParams(search)
  const keywordParams: string = searchParams.get('keyword')!
  const pageParams: string = searchParams.get('page')!

  const getSearchResult = async (searchKeyword: string, searchPage: string): Promise<any> => {
    let result = await searchBookAPI(searchKeyword, searchPage)
    setSearchBookList(result.data.books)
    setTotalSearchNum(result.data.total)
  }

  useEffect(() => {
    getSearchResult(keywordParams, pageParams)
  }, [keywordParams, pageParams])

  return (
    <Container className={style.SearchPage}>
      <h1 className={style.Title}>"
        <span className={style.keyword}>{`${keywordParams.toUpperCase()}`}</span>
        " search results
      </h1>
      <Grid newBooksList={searchBookList} />
      <Pagination totalItems={totalSearchNum} page={pageParams} keyword={keywordParams} />
    </Container>
  );
};

export default SearchResults;
