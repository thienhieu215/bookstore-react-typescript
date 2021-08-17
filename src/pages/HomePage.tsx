import React, { useState, useEffect } from 'react';
import Grid, { Product } from '../components/GridView/GridView'
import { Container } from 'react-bootstrap'
import { getNewBooksAPI, searchBookAPI } from '../components/api';
import style from './Page.module.scss'

const Home = () => {

  const [bookList, setBookList] = useState<Array<Product>>([])

  const getNewBooks = async (): Promise<any> => {
    let result = await getNewBooksAPI()
    setBookList(result.data.books)
  }

  useEffect(() => {
    getNewBooks()
  }, [])

  return (
    <Container className={style.HomePage}>
      <h1 className={style.Title} style={{ textAlign: 'left', fontWeight: 600 }}>
        New Books
      </h1>
      <Grid newBooksList={bookList} />
    </Container>
  );
};

export default Home;
