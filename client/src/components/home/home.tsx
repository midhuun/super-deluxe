import Newsletter from '../newsletter'
import ProductList from '../products/ProductList'
import TopItems from '../products/topItems'
import VideoCard from './videoCard'

const Home = () => {
  return (
    <>
      <Newsletter />
      <TopItems/>  
      <ProductList/>
      <VideoCard/>
    </>
  )
}

export default Home