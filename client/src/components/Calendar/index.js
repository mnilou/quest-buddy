import React, {useRef} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import API from '../../util/API';
import './calendar.css';

const EventTitleInputModal = ({onSubmit, eventDate, onClose}) => {
  const inputRef = useRef();
  const handleSubmit = () => {
    onSubmit(inputRef.current.value);
    inputRef.current.value = '';
  };
  const handleClose = () => onClose();
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
      <form>
        <div className="form-group">
          <h4 className="p-5 bg-light">Creating event on {eventDate}</h4>
          <label htmlFor="event-title">Event Title</label>
          <input
            ref={inputRef}
            type="text"
            id="event-title"
            className="form-control"
            placeholder="Climbing the Mountain Part 1"
          />
        </div>
        <div className="form-group">
          <label htmlfor="description"> Event Description</label>
          <textarea
            type="text"
            className="form-control"
            id="event-description"
            rows="5"
            placeholder="It was a dark and lonely night in the land of Neverwinter. Your journey begins."
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="btn btn-outline-secondary"
          type="button"
        >
          Submit
        </button>
        <div className="footer">
          <button onClick={handleClose}>Close</button>
        </div>
      </form>
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
              initialView="dayGridWeek"
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
            onClose={this.handleClose}
          />
        )}
      </div>
    );
  }
  handleDateSelect = (selectInfo) => {
    this.setState({showEventTitleInput: true, selectInfo});
  };

  handleEventTitleSubmit = (title) => {
    if (title && this.props.campaignId) {
      const event = {
        title,
        date: this.state.selectInfo.startStr,
        campaignId: this.props.campaignId,
      };

      API.createSession(event)
        .then((results) => {
          console.log(results);
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
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  handleClose = () => {
    this.setState({showEventTitleInput: false});
  };

  handleEventClick = (clickInfo) => {
    const title = clickInfo.event.title;

    API.getSessionIdByCampaign(title, this.props.campaignId)
      .then((results) => {
        const sessionId = results.data._id;

        this.props.sessionClick(title, sessionId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
