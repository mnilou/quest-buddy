import * as React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {createEventId} from '../../util/event-utils';
import API from '../../util/API';
import './calendar.css';

export default class Calendar extends React.Component {
  state = {
    weekendsVisible: true,
    events: [{title: 'event 1', date: '2020-11-20'}],
  };

  render() {
    return (
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
            // selectMirror={true}
            dayMaxEvents={true}
            // weekends={this.state.weekendsVisible}
            // initialEvents={this.state.currentEvents} // alternatively, use the `events` setting to fetch from a feed
            select={this.handleDateSelect}
            // eventClick={this.handleEventClick}
            // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            // eventAdd={function(){}}
            /* you can update a remote database when these fire:
                eventChange={function(){}}
                eventRemove={function(){}}
                */
          />
        </div>
      </div>
    );
  }
  handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    if (title) {
      const event = {title, date: selectInfo.startStr};
      this.setState(
        (prevState) => ({
          events: [...prevState.events, event],
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
