import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Component/Banner';
import RecentProject from './Component/RecentProject';
import Post from './Component/Post';
import Newsletter from './Component/Newsletter';
export default function Home() {
  return (
    <>
     <Banner/>
     <RecentProject/>
     <Post/>
     <Newsletter/>
    </>
  );
}
