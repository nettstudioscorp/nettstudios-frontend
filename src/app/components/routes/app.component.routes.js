import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeComponent from '../pages/home/Home';
import NavbarComponent from '../navbar/Navbar';
import FooterComponent from '../footer/Footer';

import VideosLists from '../pages/games/videos/VideosList';
import VideoPlayer from '../pages/games/videos/VideoPlayer';
import VideoPlayerVideoID from '../pages/games/videos/VideoPlayer';

import MemberVideosList from '../pages/games/videos/MemberExclusiveVideosList';
import MemberVideosPlayer from '../pages/games/videos/MemberExclusiveVideosPlayer';
import MemberVideosPlayerID from '../pages/games/videos/MemberExclusiveVideosPlayer';

import Playlist from '../pages/games/playlists/Playlist';
import PlaylistPlayer from '../pages/games/playlists/PlayListPlayer';
import PlaylistPlayerID from '../pages/games/playlists/PlayListPlayer';

import Live from '../pages/games/live/Live';
import LivePlayer from '../pages/games/live/LivePlayer';
import LivePlayerID from '../pages/games/live/LivePlayer';

import UpdatesCenter from '../pages/games/updatesCenter/updateCenter';
import UpdateReport from '../pages/games/updatesCenter/updateReport';
import Community from '../pages/games/community/community';
import Member from '../pages/Members/member';

import NewsComponent from '../pages/games/news/News';
import Agenda from '../pages/agenda/agenda';
import Admin from '../pages/admin/admin';
import AdminHome from '../pages/admin/adminHome';

import AboutComponent from '../pages/games/about/About';
import Contact from '../pages/contact/contact';
import TermsUse from '../pages/termsUse/termsUse';
import PrivacyPolicy from '../pages/privacyPolicy/privacyPolicy';

import Login from '../pages/login/Login';
import EditProfile from '../../components/conta/ProfileEditModal';

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-home" element={<AdminHome />} />

        <Route path="/login" element={<Login />} />
        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/news/" element={<NewsComponent />} />

        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/termos-de-uso" element={<TermsUse />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />

        <Route path="/videos" element={<VideosLists />} />
        <Route path="videos" element={<VideoPlayer />} />
        <Route path="/watch/:videoId" element={<VideoPlayer />} />
        <Route path="/videos/:videoId" element={<VideoPlayerVideoID />} />

        <Route path="/exclusive-videos" element={<MemberVideosList />} />
        <Route path="/watch/:videoId" element={<MemberVideosPlayer />} />
        <Route
          path="/exclusive-videos/:videoId"
          element={<MemberVideosPlayerID />}
        />

        <Route path="/playlists" element={<Playlist />} />
        <Route path="/playlist/:gameId" element={<PlaylistPlayerID />} />
        <Route path="/playlist/gameplays" element={<PlaylistPlayer />} />

        <Route path="/lives" element={<Live />} />
        <Route path="/live/:gameId" element={<LivePlayerID />} />
        <Route path="/live/gameplays" element={<LivePlayer />} />

        <Route path="/comunidade" element={<Community />} />
        <Route path="/member" element={<Member />} />
        <Route path="/agenda" element={<Agenda />} />

        <Route path="/updates" element={<UpdatesCenter />} />
        <Route path="/update/:id" element={<UpdateReport />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default App;
