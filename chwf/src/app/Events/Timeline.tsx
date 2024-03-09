// components/Timeline.js
import React from 'react';
import styles from'./VerticalLine.module.css'
const Timeline = ({ events }) => {
  return (
    <div className={styles.timeline}>
      <ul>
        {events.map((event, index) => (
          <li key={index} className={`${styles.timelineitem} ${styles[event.side]}`}>
            <div className={styles.timelinedot}></div>
            <div className={styles.timelinecontent}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <time>{event.date}</time>
              <br />
            </div>
          </li>
         
        ))}
         <li className={styles.timelineSpacer}><br/></li>
      </ul>
    </div>
  );
};

export default Timeline;
