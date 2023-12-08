import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import Likerender from './components/Likerender';
import Postrender from './components/postrender';
import Render from './components/render';
function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div>
      <div>
        <h1>Render Props</h1>
        <Render ren ={(arr1,arr2)=>{return <Likerender count = {arr1} funct = {arr2}/>}} />
        <Render ren ={(arr1,arr2)=>{return <Postrender count = {arr1} funct = {arr2}/>}} />


      </div>
    </div>
  );
}

export default App;
