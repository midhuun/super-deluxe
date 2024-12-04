import { lazy, Suspense } from 'react'
import Newsletter from '../newsletter'
import TopItems from '../products/topItems'
import VideoCard from './videoCard'
import Loading from '../loading'
import Quality from '../quality/quality'
const ProductList = lazy(() => import('../products/ProductList'))
const Home = () => {
  return (
    <>
      <Newsletter />
      <TopItems/>  
      <Suspense fallback={<div>Loading...</div>} >
      <ProductList/>
      </Suspense>
      <Quality/>
      <VideoCard/>
    </>
  )
}

export default Home