import React, { useState, useEffect } from 'react';
import '../agenda/agenda.css';
import { UserService } from '../login/services/userService';
import { agendaService } from './services/agenda.service';
import { HolidaysService } from './services/holidays.service';

const EventModal = ({ isOpen, onClose, onSave, selectedDate }) => {
  const [eventData, setEventData] = useState({
    title: '',
    startTime: '',
    date: selectedDate,
    type: 'online',
    campus: '',
    modalidade: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(eventData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Adicionar Evento</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Título do Evento:</label>
            <input
              type="text"
              value={eventData.title}
              onChange={(e) =>
                setEventData({ ...eventData, title: e.target.value })
              }
              required
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
              required
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
              required
            />
          </div>

          <div className="form-group">
            <label>Tipo:</label>
            <select
              value={eventData.type}
              onChange={(e) =>
                setEventData({ ...eventData, type: e.target.value })
              }
            >
              {/* <option value="online">Online</option>
              <option value="presencial">Presencial</option> */}
            </select>
          </div>

          <div className="form-group">
            <label>Campus:</label>
            <input
              type="text"
              value={eventData.campus}
              onChange={(e) =>
                setEventData({ ...eventData, campus: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            {/* <label>Modalidade:</label> */}
            <input
              type="text"
              value={eventData.modalidade}
              onChange={(e) =>
                setEventData({ ...eventData, modalidade: e.target.value })
              }
            />
          </div>

          <div className="modal-buttons">
            <button type="submit" className="save-button">
              Salvar
            </button>
            <button type="button" onClick={onClose} className="cancel-button">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const EventTooltip = ({ event }) => {
  return (
    <div className="event-tooltip">
      <h4>{event.title}</h4>
      <div className="event-details">
        <p>
          <strong>Horário:</strong> {event.startTime}
        </p>
        {/* <p>
          <strong>Local:</strong>{' '}
          {event.type === 'online' ? 'Online' : event.campus}
        </p> */}
        <p>
          <strong>Status:</strong>{' '}
          <span className={`status-${event.status}`}>{event.status}</span>
        </p>
        {event.description && <p>{event.description}</p>}
      </div>
    </div>
  );
};

const WeekView = ({ selectedDate, events }) => {
  const getWeekStart = (date) => {
    const curr = new Date(date);
    const first = curr.getDate() - curr.getDay();
    return new Date(curr.setDate(first));
  };

  const formatDateBR = (date) => {
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
  };

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const weekStart = getWeekStart(selectedDate);
    const day = new Date(weekStart);
    day.setDate(weekStart.getDate() + i);
    return day;
  });

  const weekDayNames = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];

  const timeSlots = Array.from({ length: 14 }, (_, i) => {
    const hour = i + 9;
    return `${hour.toString().padStart(2, '0')}:00`;
  });

  const getEventsForTimeSlot = (date, time) => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear() &&
        event.startTime === time
      );
    });
  };

  return (
    <div className="week-view">
      <div className="week-header">
        {weekDays.map((date, index) => (
          <div key={index} className="week-day-header">
            <div className="day-header">
              <span className="day-name">{weekDayNames[index]}</span>
              <span className="day-date">
                {formatDateBR(date).split('/').slice(0, 2).join('/')}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="week-grid">
        {timeSlots.map((time) => (
          <div key={time} className="time-row">
            <div className="time-slot">{time}</div>
            {weekDays.map((date, dayIndex) => (
              <div key={`${date}-${dayIndex}`} className="day-slot">
                {getEventsForTimeSlot(date, time).map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={`event-item ${event.styleClass}`}
                    title={event.description}
                  >
                    <span className="event-time">{event.startTime}</span>
                    <span className="event-title">{event.title}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Agenda = () => {
  const [user, setUser] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const currentUser = UserService.getUser();
    setUser(currentUser);
    loadEvents();
  }, []);

  const loadEvents = () => {
    const savedEvents = agendaService.getEvents();
    setEvents(savedEvents);
  };

  const isAdmin = () => {
    return agendaService.isAdmin(user?.email);
  };

  const navigateDate = (direction) => {
    const newDate = new Date(selectedDate);
    if (viewMode === 'month') {
      newDate.setMonth(newDate.getMonth() + direction);
    } else {
      newDate.setDate(newDate.getDate() + direction * 7);
    }
    setSelectedDate(newDate);
  };

  const goToToday = () => {
    setSelectedDate(new Date());
  };

  const getFirstDayOfWeek = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfWeek = firstDay.getDay();
    firstDay.setDate(firstDay.getDate() - dayOfWeek);
    return firstDay;
  };

  const formatDate = (date) => {
    return `${date.getDate().toString().padStart(2, '0')}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}`;
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = [];

    let currentDay = new Date(firstDay);
    while (currentDay.getDay() !== 0) {
      currentDay.setDate(currentDay.getDate() - 1);
    }

    while (currentDay <= lastDay || currentDay.getDay() !== 0) {
      daysInMonth.push({
        date: new Date(currentDay),
        isCurrentMonth: currentDay.getMonth() === month,
      });
      currentDay.setDate(currentDay.getDate() + 1);
    }

    return daysInMonth;
  };

  const renderDayEvents = (date) => {
    const dayEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.toDateString() === date.toDateString();
    });

    console.log('Eventos do dia:', dayEvents);

    return (
      <div className="day-events">
        {dayEvents.map((event) => (
          <div
            key={event.id}
            className={`event-item ${event.type} status-${event.status}`}
            data-tooltip-id={`event-${event.id}`}
          >
            <span className="event-time">{event.startTime}</span>
            <span className="event-title">{event.title}</span>
            <EventTooltip event={event} />
          </div>
        ))}
      </div>
    );
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedDate);

    return daysInMonth.map((dayInfo) => {
      const holiday = HolidaysService.isHoliday(dayInfo.date);
      return (
        <div
          key={dayInfo.date.toISOString()}
          className={`day-cell ${!dayInfo.isCurrentMonth ? 'other-month' : ''} ${
            holiday ? 'holiday' : ''
          }`}
        >
          <div className={`date-header ${holiday ? 'holiday' : ''}`}>
            <span className="date-number">{dayInfo.date.getDate()}</span>
            {holiday && <div className="holiday-name">{holiday.name}</div>}
          </div>
          {renderDayEvents(dayInfo.date)}
        </div>
      );
    });
  };

  const handleAddEvent = (eventData) => {
    agendaService.addEvent(eventData);
    loadEvents();
    console.log('Eventos carregados:', events);
  };

  const formatarData = (data) => {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = String(data.getFullYear()).slice(-2);
    return `${dia}/${mes}/${ano}`;
  };

  const obterCorPorTipo = (tipo) => {
    switch (tipo) {
      case 'lançamento':
        return 'green';
      case 'retorno':
        return 'red';
      case 'série recorrente':
        return 'blue';
      default:
        return 'black';
    }
  };

  const diaDaSemanaCorreto = (data) => {
    const dia = data.getDay();
    return dia === 2 ? 'Quarta' : 'Outro';
  };

  const handleHojeClick = () => {
    const hojeElement = document.getElementById('hoje');
    hojeElement.classList.add('animacao-hoje');
    setTimeout(() => {
      hojeElement.classList.remove('animacao-hoje');
    }, 1000);
  };

  return (
    <div className="agenda-container">
      <div className="agenda-header">
        <br />
        <br />
        <br />
        <h1>📅 Agenda de atividades</h1>
        <p>
          Fique por dentro da nossa programação! Confira gameplays emocionantes
          e as últimas notícias do universo dos games na nossa agenda!" 🚀
        </p>

        <div className="agenda-controls">
          <div className="navigation-controls">
            <button className="today-button" onClick={goToToday}>
              Hoje
            </button>
            <button onClick={() => navigateDate(-1)}>&lt;</button>
            <h2 className="h2">
              {selectedDate.toLocaleDateString('pt-BR', {
                month: 'long',
                year: 'numeric',
              })}
            </h2>
            <button onClick={() => navigateDate(1)}>&gt;</button>
          </div>

          <div className="view-controls">
            <button
              className={viewMode === 'month' ? 'active' : ''}
              onClick={() => setViewMode('month')}
            >
              Mês
            </button>
            <button
              className={viewMode === 'week' ? 'active' : ''}
              onClick={() => setViewMode('week')}
            >
              Semana
            </button>
          </div>
        </div>
      </div>

      <div className="calendar-grid">
        {viewMode === 'month' ? (
          <>
            <div className="weekdays">
              <div>Domingo</div>
              <div>Segunda</div>
              <div>Terça</div>
              <div>Quarta</div>
              <div>Quinta</div>
              <div>Sexta</div>
              <div>Sábado</div>
            </div>
            <div className="calendar-body">{renderCalendar()}</div>
          </>
        ) : (
          <WeekView selectedDate={selectedDate} events={events} />
        )}
      </div>

      {isAdmin() && (
        <>
          <button
            className="add-event-button"
            onClick={() => setIsModalOpen(true)}
          >
            + Adicionar Evento
          </button>
          <EventModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddEvent}
            selectedDate={selectedDate}
          />
        </>
      )}
      <br />
      <br />
      <br />
    </div>
  );
};

export default Agenda;
