import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeComponent from '../pages/home/Home';
import NavbarComponent from '../navbar/Navbar';
import FooterComponent from '../footer/Footer';

import VideosLists from '../pages/videos/VideosList';
import VideoPlayer from '../pages/videos/VideoPlayer';
import VideoPlayerVideoID from '../pages/videos/VideoPlayer';

import MemberVideosList from '../pages/videos/MemberExclusiveVideosList';
import MemberVideosPlayer from '../pages/videos/MemberExclusiveVideosPlayer';
import MemberVideosPlayerID from '../pages/videos/MemberExclusiveVideosPlayer';

import Playlist from '../pages/playlists/Playlist';
import PlaylistPlayer from '../pages/playlists/PlayListPlayer';
import PlaylistPlayerID from '../pages/playlists/PlayListPlayer';

import Live from '../pages//live/Live';
import LivePlayer from '../pages//live/LivePlayer';
import LivePlayerID from '../pages/live/LivePlayer';

import UpdatesCenter from '../pages/updatesCenter/updateCenter';
import UpdateReport from '../pages/updatesCenter/updateReport';
import Community from '../pages/community/community';
import Member from '../pages/Members/member';

import NewsComponent from '../pages/news/News';
import Agenda from '../pages/agenda/agenda';
import Admin from '../pages/admin/admin';
import AdminHome from '../pages/admin/adminHome';

import AboutComponent from '../pages/about/About';
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
