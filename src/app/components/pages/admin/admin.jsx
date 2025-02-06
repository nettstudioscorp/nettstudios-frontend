import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../login/services/userService';
import { agendaService } from '../agenda/services/agenda.service';
// import { videosService } from '../games/videos/api/MemberExclusiveVideosList.Service';
import '../admin/admin.css';

const EventModal = ({ isOpen, onClose, onSave, selectedEvent }) => {
  const [eventData, setEventData] = useState({
    title: selectedEvent ? selectedEvent.title : '',
    startTime: selectedEvent ? selectedEvent.startTime : '',
    date: selectedEvent ? selectedEvent.date : '',
  });

  useEffect(() => {
    if (selectedEvent) {
      setEventData({
        title: selectedEvent.title,
        startTime: selectedEvent.startTime,
        date: selectedEvent.date,
      });
    }
  }, [selectedEvent]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(eventData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{selectedEvent ? 'Editar Evento' : 'Adicionar Evento'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Título do Evento:</label>
            <input
              type="text"
              value={eventData.title}
              onChange={(e) =>
                setEventData({ ...eventData, title: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Horário:</label>
            <input
              type="time"
              value={eventData.startTime}
              onChange={(e) =>
                setEventData({ ...eventData, startTime: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Data:</label>
            <input
              type="date"
              value={eventData.date}
              onChange={(e) =>
                setEventData({ ...eventData, date: e.target.value })
              }
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="save-button">
              Salvar
            </button>
            <button type="button" onClick={onClose} className="cancel-button">
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const VideoModal = ({ isOpen, onClose, onSave, selectedVideo }) => {
  const [videoData, setVideoData] = useState({
    title: selectedVideo ? selectedVideo.snippet.title : '',
    videoId: selectedVideo ? selectedVideo.videoId : '',
    description: selectedVideo ? selectedVideo.snippet.description : '',
  });

  useEffect(() => {
    if (selectedVideo) {
      setVideoData({
        title: selectedVideo.snippet.title,
        videoId: selectedVideo.videoId,
        description: selectedVideo.snippet.description,
      });
    }
  }, [selectedVideo]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(videoData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{selectedVideo ? 'Editar Vídeo' : 'Adicionar Vídeo'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Título do Vídeo:</label>
            <input
              type="text"
              value={videoData.title}
              onChange={(e) =>
                setVideoData({ ...videoData, title: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>ID do Vídeo:</label>
            <input
              type="text"
              value={videoData.videoId}
              onChange={(e) =>
                setVideoData({ ...videoData, videoId: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Descrição:</label>
            <textarea
              value={videoData.description}
              onChange={(e) =>
                setVideoData({ ...videoData, description: e.target.value })
              }
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="save-button">
              Salvar
            </button>
            <button type="button" onClick={onClose} className="cancel-button">
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Admin = () => {
  const [events, setEvents] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = UserService.getUser();
    if (!isAdmin(user)) {
      alert('Acesso negado. Você não tem permissão para acessar esta página.');
      navigate('/');
      return;
    }
    loadEvents();
    // loadVideos();
  }, [navigate]);

  const isAdmin = (user) => {
    return user?.email === 'alanrochaarg2001@gmail.com';
  };

  const loadEvents = () => {
    const savedEvents = agendaService.getEvents();
    setEvents(savedEvents);
  };

  // const loadVideos = () => {
  //   const savedVideos = videosService.getVideos();
  //   setVideos(savedVideos);
  // };

  const handleAddEvent = (eventData) => {
    agendaService.addEvent(eventData);
    loadEvents();
    setIsEventModalOpen(false);
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setIsEventModalOpen(true);
  };

  const handleDeleteEvent = (eventId) => {
    agendaService.deleteEventById(eventId);
    loadEvents();
  };

  // const handleAddVideo = (videoData) => {
  //   videosService.addVideo({
  //     videoId: videoData.videoId,
  //     snippet: {
  //       title: videoData.title,
  //       description: videoData.description,
  //       thumbnails: {
  //         medium: {
  //           url: 'https://example.com/thumbnail.jpg',
  //         },
  //       },
  //     },
  //   });
  //   loadVideos();
  //   setIsVideoModalOpen(false);
  // };

  // const handleEditVideo = (video) => {
  //   setSelectedVideo(video);
  //   setIsVideoModalOpen(true);
  // };

  // const handleUpdateVideo = (videoData) => {
  //   videosService.updateVideo(selectedVideo.id, {
  //     videoId: videoData.videoId,
  //     snippet: {
  //       title: videoData.title,
  //       description: videoData.description,
  //     },
  //   });
  //   loadVideos();
  //   setIsVideoModalOpen(false);
  // };

  // const handleDeleteVideo = (videoId) => {
  //   videosService.deleteVideoById(videoId);
  //   loadVideos();
  // };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Administrador</h1>
      <div className="admin-sections">
        <div className="admin-section">
          <h2>Agenda</h2>
          <button
            className="add-button"
            onClick={() => setIsEventModalOpen(true)}
          >
            Adicionar Evento
          </button>
          <ul className="item-list">
            {events.map((event) => (
              <li key={event.id} className="item">
                <span>
                  {event.title} - {event.startTime}
                </span>
                <div className="item-buttons">
                  <button onClick={() => handleEditEvent(event)}>Editar</button>
                  <button onClick={() => handleDeleteEvent(event.id)}>
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/*  TODO: <div className="admin-section">
          <h2>Vídeos Exclusivos</h2>
          <button
            className="add-button"
            onClick={() => setIsVideoModalOpen(true)}
          >
            Adicionar Vídeo
          </button>
          <ul className="item-list">
            {videos.map((video) => (
              <li key={video.videoId} className="item">
                <span>{video.snippet.title}</span>
                <div className="item-buttons">
                  <button onClick={() => handleEditVideo(video)}>Editar</button>
                  <button onClick={() => handleDeleteVideo(video.videoId)}>
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div> */}
      </div>

      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
        onSave={handleAddEvent}
        selectedEvent={selectedEvent}
      />

      {/* <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onSave={selectedVideo ? handleUpdateVideo : handleAddVideo}
        selectedVideo={selectedVideo}
      /> */}
    </div>
  );
};

export default Admin;
