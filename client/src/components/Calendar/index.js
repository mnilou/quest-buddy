import React, {useRef} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import API from '../../util/API';
import './calendar.css';

const EventTitleInputModal = ({onSubmit, eventDate, onClose}) => {
  const inputRef = useRef();
  const handleSubmit = () => {
    onSubmit(inputRef.current.value);
    inputRef.current.value = '';
      };
      const handleClose = () => onClose(true);
  return (
    <div
      style={{
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(51, 51, 51, 0.3)',
      }}
    >
      <div className="p-5 bg-light">
        <h4 className="mb-3">Creating event on {eventDate}</h4>
        <div className="form-group">
          <label htmlFor="event-title">Event Title</label>
          <div className="input-group">
            <input
              ref={inputRef}
              type="text"
              id="event-title"
              className="form-control"
              placeholder="Climbing the Mountain Part 1"
            />
            <div className="input-group-append">
              <button
                onClick={handleSubmit}
                className="btn btn-outline-secondary"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={inputRef.handleClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default class Calendar extends React.Component {
  state = {
    weekendsVisible: true,
    events: [{title: 'event 1', date: '2020-11-20'}],
    showEventTitleInput: false,
    selectInfo: null,
  };

  render() {
    return (
      <div>
        <div className="calendar">
          <div className="calendar-main">
            <FullCalendar
              events={this.state.events}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              dayMaxEvents={true}
              select={this.handleDateSelect}
              eventClick={this.handleEventClick}
            />
          </div>
        </div>
        {this.state.showEventTitleInput && (
          <EventTitleInputModal
            onSubmit={this.handleEventTitleSubmit}
            eventDate={this.state.selectInfo && this.state.selectInfo.startStr}
          />
        )}
      </div>
    );
  }
  handleDateSelect = (selectInfo) => {
    this.setState({showEventTitleInput: true, selectInfo});
  };

  handleEventTitleSubmit = (title) => {
    if (title) {
      const event = {title, date: this.state.selectInfo.startStr};
      // send request to add event in the .then call lines 50-58
      this.setState(
        (prevState) => ({
          events: [...prevState.events, event],
          showEventTitleInput: false,
          selectInfo: null,
        }),
        () => {
          console.log(this.state.events);
        }
      );
    }
  };
  handleEventClick = (clickInfo) => {
    if (
      `Are you sure you want to delete the event '${clickInfo.event.title}'`
    ) {
      clickInfo.event.remove();
    }
  };
}
