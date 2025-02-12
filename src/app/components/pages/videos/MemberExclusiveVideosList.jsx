// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import { fetchExclusiveVideos } from './api/MemberExclusiveVideosList.Service';
// import '../videos/css/VideosList.css';
// import { Link } from 'react-router-dom';

// const MemberExclusiveVideosList = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [activeFilter, setActiveFilter] = useState('recent');
//   const [videos, setVideos] = useState([]);
//   const [visibleVideos, setVisibleVideos] = useState(27);
//   const videosPerLoad = 27;

//   useEffect(() => {
//     const getExclusiveVideos = async () => {
//       try {
//         const data = await fetchExclusiveVideos();
//         setVideos(data);
//       } catch (error) {
//         console.error('Erro ao carregar vídeos exclusivos:', error);
//       }
//     };

//     getExclusiveVideos();
//   }, []);

//   const openModal = (video) => {
//     setSelectedVideo(video);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSelectedVideo(null);
//   };

//   const handleWatch = (url) => {
//     window.open(url, '_blank');
//     closeModal();
//   };

//   const handleFilter = (filter) => {
//     setActiveFilter(filter);
//   };

//   const loadMoreVideos = () => {
//     setVisibleVideos((prev) => prev + videosPerLoad);
//   };

//   const filteredVideos = () => {
//     let filtered;
//     switch (activeFilter) {
//       case 'recent':
//         filtered = [...videos].sort(
//           (a, b) =>
//             new Date(b.snippet.description.split(' • ')[1]) -
//             new Date(a.snippet.description.split(' • ')[1])
//         );
//         break;
//       case 'popular':
//         filtered = [...videos].sort(
//           (a, b) =>
//             parseInt(b.snippet.description.split(' ')[0]) -
//             parseInt(a.snippet.description.split(' ')[0])
//         );
//         break;
//       case 'oldest':
//         filtered = [...videos].sort(
//           (a, b) =>
//             new Date(a.snippet.description.split(' • ')[1]) -
//             new Date(b.snippet.description.split(' • ')[1])
//         );
//         break;
//       default:
//         filtered = videos;
//     }
//     return filtered.slice(0, visibleVideos);
//   };

//   const hasMoreVideos = videos.length > visibleVideos;

//   return (
//     <div className="videos-container">
//       <div className="video-grid">
//         {filteredVideos().map((video) => (
//           <div className="video-item" key={video.id}>
//             <Link
//               to={`/exclusive-videos/${video.videoId}`}
//               className="video-link"
//             >
//               <img
//                 src={video.snippet.thumbnails.medium.url}
//                 alt={video.snippet.title}
//                 loading="lazy"
//               />
//               <div className="video-status">
//                 {video.dub ? 'Dub' : ''} {video.leg ? 'Leg' : ''}{' '}
//                 {video.legendado ? 'Legendado' : ''}
//               </div>
//               <h3>{video.snippet.title}</h3>
//             </Link>
//           </div>
//         ))}
//       </div>

//       {hasMoreVideos && (
//         <div className="load-more-container">
//           <button className="load-more-button" onClick={loadMoreVideos}>
//             Carregar Mais
//           </button>
//         </div>
//       )}

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Choose Watch Option"
//         className="modal"
//         overlayClassName="modal-overlay"
//       >
//         <h2>{selectedVideo?.snippet.title}</h2>
//         <button
//           className="btn-internal"
//           onClick={() => handleWatch(`/watch/${selectedVideo?.videoId}`)}
//         >
//           Assistir
//         </button>
//         <button className="button-modal-close" onClick={closeModal}>
//           Fechar
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default MemberExclusiveVideosList;
