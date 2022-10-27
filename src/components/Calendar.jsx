import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountItem from "./CountItem";

const BIRTH_DAY = new Date("5-8-1999");

const getBirthday = () => {
  const now = new Date();

  if (now.getMonth() > BIRTH_DAY.getMonth()) {
    return new Date(
      now.getFullYear() + 1,
      BIRTH_DAY.getMonth(),
      BIRTH_DAY.getDate()
    );
  }

  if (now.getMonth() < BIRTH_DAY.getMonth()) {
    return new Date(
      now.getFullYear(),
      BIRTH_DAY.getMonth(),
      BIRTH_DAY.getDate()
    );
  }

  if (now.getMonth() === BIRTH_DAY.getMonth()) {
    if (now.getDate() > BIRTH_DAY.getDate()) {
      return new Date(
        now.getFullYear() + 1,
        BIRTH_DAY.getMonth(),
        BIRTH_DAY.getDate()
      );
    } else {
      return new Date(
        now.getFullYear(),
        BIRTH_DAY.getMonth(),
        BIRTH_DAY.getDate()
      );
    }
  }

  // ตัวกันเหนียว
  return new Date(now.getFullYear(), BIRTH_DAY.getMonth(), BIRTH_DAY.getDate());
};

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
    let now = new Date();

    if (
      birthDate.getDate() === now.getDate() &&
      birthDate.getMonth() === now.getMonth() &&
      birthDate.getFullYear() === now.getFullYear()
    ) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const birthDateTime = birthDate.getTime();

    let timeCount = (birthDateTime - now.getTime()) / 1000;

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
      const dateCount = getCountdown(getBirthday());
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
