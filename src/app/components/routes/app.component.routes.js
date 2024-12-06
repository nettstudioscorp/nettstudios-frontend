import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeComponent from '../pages/home/Home';
import NavbarComponent from '../navbar/Navbar';
import FooterComponent from '../footer/Footer';

import VideosLists from '../pages/games/videos/VideosList';
import VideoPlayer from '../pages/games/videos/VideoPlayer';
import VideoPlayerVideoID from '../pages/games/videos/VideoPlayer';

import Playlist from '../pages/games/playlists/Playlist';
import PlaylistPlayer from '../pages/games/playlists/PlayListPlayer';
import PlaylistPlayerID from '../pages/games/playlists/PlayListPlayer';

import Live from '../pages/games/live/Live';
import LivePlayer from '../pages/games/live/LivePlayer';
import LivePlayerID from '../pages/games/live/LivePlayer';

import NewsComponent from '../pages/games/news/News';
// import MemberComponent from '../pages/member/member.component';
import AboutComponent from '../pages/games/about/About';
import UpdatesCenter from '../pages/games/updatesCenter/updateCenter';
import HelpComponent from '../pages/help/help.component';
import Login from '../pages/login/Login';

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />

        <Route path="/login" element={<Login />} />
        <Route path="/news/" element={<NewsComponent />} />
        {/* <Route path="/member" element={<MemberComponent />} /> */}
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/updates" element={<UpdatesCenter />} />
        <Route path="/help" element={<HelpComponent />} />

        <Route path="/videos" element={<VideosLists />} />
        <Route path="/watch/:videoId" element={<VideoPlayer />} />
        <Route path="/videos/:videoId" element={<VideoPlayerVideoID />} />

        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlist/:gameId" element={<PlaylistPlayerID />} />
        <Route path="/playlist/gameplays" element={<PlaylistPlayer />} />

        <Route path="/lives" element={<Live />} />
        <Route path="/live/:gameId" element={<LivePlayerID />} />
        <Route path="/live/gameplays" element={<LivePlayer />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
