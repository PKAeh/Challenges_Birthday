import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountItem from "./CountItem";

const BIRTH_DAY = new Date("5-8-2023");

const Calendar = () => {
  //state
  const [dateCount, setDateCount] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  //function input TimeStamp and then return day,hours,minutes and seconds
  const getCountdown = (birthDate) => {
    let now = new Date().getTime();

    let timeCount = (birthDate - now) / 1000;

    let days = timeCount / (60 * 60 * 24); //convert seconds to days
    let hours = (timeCount % (60 * 60 * 24)) / (60 * 60); //convert seconds to hours
    let minutes = (timeCount % (60 * 60)) / 60; // let minutes
    let seconds = timeCount % 60; // let seconds
    return {
      days: Math.floor(days),
      hours: Math.floor(hours),
      minutes: Math.floor(minutes),
      seconds: Math.floor(seconds),
    };
  };

  useEffect(() => {
    const intervalTask = setInterval(() => {
      const dateCount = getCountdown(BIRTH_DAY.getTime());
      setDateCount(dateCount);
    }, 1000); //1000 millisecond = 1 second
    return () => clearInterval(intervalTask);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <CountItem title={"Days"} count={dateCount.days} />
        </Col>
        <Col>
          <CountItem title={"Hours"} count={dateCount.hours} />
        </Col>
        <Col>
          <CountItem title={"Minutes"} count={dateCount.minutes} />
        </Col>
        <Col>
          <CountItem title={"Seconds"} count={dateCount.seconds} />
        </Col>
      </Row>
    </Container>
  );
};

export default Calendar;
