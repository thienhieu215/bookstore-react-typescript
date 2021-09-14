import { Card } from 'react-bootstrap'
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

  return (
    <>
      {type === 'grid'
        ?
        Array(10).fill(<GridViewSkeleton />)
        :
        <h1>a</h1>}
    </>
  )
}

type SkeletonProps = {
  type: string
}

export default Skeleton;
