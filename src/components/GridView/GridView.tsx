import { Container } from 'react-bootstrap'
import MediaQuery from 'react-responsive'
import Skeleton from '../Skeleton/Skeleton';
import FullsizeCard from './FullsizeCard';
import MobileCard from './MobileCard';

export interface Product {
  isbn13: string,
  title: string,
  subtitle: string,
  price: string,
  image: string
};

const GridView = ({ newBooksList }: GridViewProps) => {

  return (
    <Container>
      <MediaQuery maxWidth={768}>
        {newBooksList.length === 0
          ?
          <Skeleton type={'mobileList'} />
          :
          (
            newBooksList.map((product, index) => (
              <MobileCard productInfo={product} />
            ))
          )
        }
        {/* <Skeleton type={'mobileList'} />
        {newBooksList.map((product, index) => (
          <MobileCard productInfo={product} />
        ))} */}
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {newBooksList.length === 0
            ?
            <Skeleton type={'grid'} />
            :
            (
              newBooksList.map((product, index) => (
                <FullsizeCard productInfo={product} />
              ))
            )
          }
        </div>
      </MediaQuery>
    </Container>
  );
};

type GridViewProps = {
  newBooksList: Array<Product>,
}

export default GridView;
