import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import RENT_LIST from './data/rentList';
import { format } from 'date-fns';
import { Button } from '@material-tailwind/react';
import { isBefore, startOfDay } from 'date-fns';

function Book() {
  const param = useParams();
  const rent = RENT_LIST.find(option => param.id === option.id.toString());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  const today = startOfDay(new Date());
  const disabledDays = { before: today };

  useEffect(() => {
    function getAvailableTimes(date, rentOption) {
      const dayOfWeek = date.getDay();
      // This is a simplified example. You'll need to define how to get the actual available times.
      return ['10:00 AM', '11:00 AM', '12:00 PM'];
    }

    if (rent && selectedDate) {
      const times = getAvailableTimes(selectedDate, rent);
      setAvailableTimes(times);
    }
  }, [selectedDate, rent]);

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setSelectedTime(''); // Reset time selection when a new date is picked
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    // You can also proceed to booking or other actions here
    console.log(`Date: ${format(selectedDate, 'PP')}, Time: ${time}`);
  };

  const proceedWithBooking = () => {
    console.log(`Booking confirmed for Date: ${format(selectedDate, 'PP')}, Time: ${selectedTime}`);
    // Here you would handle the booking logic such as sending data to a server
  };

  return (
    <div>
      <h1>Book a Table</h1>
      <p>{rent.name}</p>
      <p>{rent.description}</p>
      <p>{rent.price}</p>
      <img src={rent.img} alt={rent.name} />

      <DayPicker
        mode="single"
        disabled={disabledDays}
        selected={selectedDate}
        onSelect={handleDayClick}
        footer={selectedDate ? `You selected ${format(selectedDate, 'PPP')}.` : 'Please pick a day.'}
      />

      {selectedDate && (
        <div>
          <h3>Available Times on {format(selectedDate, 'PPP')}:</h3>
          {availableTimes.length > 0 ? (
            availableTimes.map((time, index) => (
              <Button variant={time === selectedTime ? 'outlined' : 'gradient'} key={index} onClick={() => handleTimeSelection(time)}>
                {time}
              </Button>
            ))
          ) : (
            <p>No available times for this day.</p>
          )}
        </div>
      )}

      {selectedTime && (
        <div>
          <p>You have selected: {selectedTime}</p>
          <Button onClick={proceedWithBooking} variant="gradient">Proceed with Booking</Button>
        </div>
      )}
    </div>
  );
}

export default Book;
