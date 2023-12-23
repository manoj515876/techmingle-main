import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './components//About/About';
import Articles from './components/Blog/Articles';
import Books from './components/Books/Books';
import Clubs from './components/Clubs/Clubs';
import Gaming from './components/Gaming/Gaming';
import Jobs from './components/Internship/Jobs';
import Podcast from './components/Podcast/Podcast';
import Practice from './components/Practice/Practice';
import Workshop from './components/Workshop/Workshop';
import Navbar from './components/Navbar/Navbar';
import PostPodcast from './components/Podcast/PostPodcast';
import ViewPodcast from './components/Podcast/ViewPodcast';
import PublishBooks from './components/Books/PublishBooks';
import ViewBooks from './components/Books/ViewBooks';
function App() {
  return (
   <>
   <Navbar/>
      <div>
    <Routes>        
      <Route path="/"  element={<About/>} />
      <Route path="/Gaming"  element={<Gaming/>} />
      <Route path="/Practice"  element={<Practice/>} />
      <Route path="/Podcast"  element={<Podcast/>} />
      <Route path="/Workshop"  element={<Workshop/>} />
      <Route path="/Books"  element={<Books/>} />
      <Route path="/Jobs"  element={<Jobs/>} />
      <Route path="/Articles"  element={<Articles/>} />
      <Route path="/Clubs"  element={<Clubs/>} />
      <Route path="/PostPodcast"  element={<PostPodcast/>}/>
      <Route path="/ViewPodcast" element={<ViewPodcast/>}/>
      <Route path="/PublishBooks" element={<PublishBooks/>}/>
      <Route path="/ViewBooks" element={<ViewBooks/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
