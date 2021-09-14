import { Pagination, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import style from './Pagination.module.scss'

const PaginationComp = ({ totalItems, page, keyword }: PaginationProps) => {

  let currentPage = parseInt(page)
  const totalPages = Math.ceil(totalItems / 10)
  let history = useHistory();

  const changePage = (page: number): void => {
    history.push({
      pathname: '/search',
      search: `?keyword=${keyword}&page=${page}`,
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const itemsIcrease = (start: number, end: number): any => {
    let items = []
    for (let i = start; i <= end; i++) {
      items.push(
        <Pagination.Item key={i} className={currentPage === i ? style.active : style.inactive} onClick={() => changePage(i)}>
          {i}
        </Pagination.Item>
      )
    }
    return items
  }

  return (
    <Row className={style.centeredRow}>
      <Col lg={4} sm={8} md={6} xs={10} className={style.centeredCol}>

        {totalPages <= 10 &&
          <Pagination>
            {itemsIcrease(1, totalPages)}
          </Pagination>
        }

        {totalPages > 10 &&
          <Pagination >
            <Pagination.Prev className={style.inactive} disabled={currentPage <= 1} onClick={() => changePage(currentPage - 1)} />
            <Pagination.Item className={currentPage === 1 ? style.active : style.inactive} onClick={() => changePage(1)}>{1}</Pagination.Item>
            {(currentPage < 4) &&
              <>
                {itemsIcrease(2, 6)}
              </>}

            {currentPage >= 4 && <Pagination.Ellipsis className={style.inactive} />}
            {(currentPage >= 4 && currentPage <= totalPages - 4) &&
              <>
                <Pagination.Item className={style.inactive} onClick={() => changePage(currentPage - 2)}>{currentPage - 2}</Pagination.Item>
                <Pagination.Item className={style.inactive} onClick={() => changePage(currentPage - 1)}>{currentPage - 1}</Pagination.Item>
                <Pagination.Item className={style.active} onClick={() => changePage(currentPage)}>{currentPage}</Pagination.Item>
                <Pagination.Item className={style.inactive} onClick={() => changePage(currentPage + 1)}>{currentPage + 1}</Pagination.Item>
                <Pagination.Item className={style.inactive} onClick={() => changePage(currentPage + 2)}>{currentPage + 2}</Pagination.Item>
              </>}
            {currentPage <= totalPages - 4 && <Pagination.Ellipsis className={style.inactive} />}

            {(currentPage > totalPages - 4) &&
              <>
                {itemsIcrease(totalPages - 5, totalPages - 1)}
              </>}
            <Pagination.Item className={currentPage === totalPages ? style.active : style.inactive} onClick={() => changePage(totalPages)}>{totalPages}</Pagination.Item>
            <Pagination.Next className={style.inactive} disabled={currentPage >= totalPages} onClick={() => changePage(currentPage + 1)} />
          </Pagination>
        }

      </Col>
    </Row >
  );
};

type PaginationProps = {
  totalItems: number,
  page: string,
  keyword: string
}

export default PaginationComp;
