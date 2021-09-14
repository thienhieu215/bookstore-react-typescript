import { Card, Row, Col } from 'react-bootstrap'
import style from '../GridView/Card.module.scss'

const Skeleton = ({ type }: SkeletonProps) => {

  const GridViewSkeleton = () => {
    return (
      <Card className={style.Card}>
        <div className={style.skeletonImg}></div>
        <Card.Body>
          <div className={style.skeletonText}></div>
          <div className={style.skeletonText}></div>
          <div className={style.skeletonText}></div>
        </Card.Body>
      </Card>
    )
  }

  const GridViewSkeletonMobile = () => {
    return (
      <Row className={style.mobileCard}>
        <Col xs={4}>
          <div className={style.skeletonImg}></div>
        </Col>
        <Col className={style.titleprice} xs={8}>
          <div className={style.skeletonText}></div>
          <div className={style.skeletonText}></div>
          <div className={style.skeletonText}></div>
        </Col>
      </Row>
    )
  }

  return (
    <>
      {type === 'grid' ? Array(10).fill(<GridViewSkeleton />)
        : type === 'mobileList' ? Array(10).fill(<GridViewSkeletonMobile />)
        : null
      }
    </>
  )
}

type SkeletonProps = {
  type: string
}

export default Skeleton;
