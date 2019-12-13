import React from 'react';
import CalendarStyle from "./CalendarStyle"
import withStyles from '@material-ui/core/styles/withStyles';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';
// needed for dayClick
// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { fetchAllTrainings } from "../../actions/calendarAction"
import { connect } from "react-redux"

class Calendar extends React.Component {
    calendarComponentRef = React.createRef();
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    //Todo link customer on event clicked
    componentDidMount() {
        console.log("here")
        this.props.getTrainings()
    }
    render() {
        const { classes } = this.props
        console.log(this.props)
        return (
            <div className={classes.calendarLayout}>
                <div className={classes.calendarLayoutTop}>
                </div>
                <div className={classes.calendar}>
                    <FullCalendar
                        defaultView="dayGridMonth"
                        header={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                        }}
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        ref={this.calendarComponentRef}
                        weekends={false}
                        events={this.props.trainings}
                        dateClick={this.handleDateClick}
                    />
                </div>
            </div>
        );
    }

    //Todo, allow adding customized event
    handleDateClick = arg => {
        if (window.confirm("Would you like to add an training event to " + arg.dateStr + " ?")) {
            this.setState({
                calendarEvents: this.state.calendarEvents.concat({
                    title: "New Event",
                    start: arg.date,
                    allDay: arg.allDay
                })
            });
        }
    };
}



const mapDispatchToProps = dispatch => ({
    getTrainings: () => {
        dispatch(fetchAllTrainings())
    }
});


const mapStateToProps = state => ({
    trainings: state.trainings.trainings
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(CalendarStyle)(Calendar));
