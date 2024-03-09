// pages/index.js
import React from 'react';
import Timeline from './Timeline';
import styles from'./SpeechBubbles.module.css'

const events = [
  { title: 'Event 1', description: 'Description for event 1', date: '2023-01-01' ,side:'left'},
  { title: 'Event 2', description: 'Description for event 2', date: '2023-06-15' ,side:'right'},
  { title: 'Event 3', description: 'Description for event 3', date: '2024-02-20' ,side:'left'},
  { title: 'Event 1', description: 'Description for event 1', date: '2023-01-01' ,side:'right'},
  { title: 'Event 2', description: 'Description for event 2', date: '2023-06-15' ,side:'left'},
  { title: 'Event 3', description: 'Description for event 3', date: '2024-02-20' ,side:'right'},
  { title: 'Event 1', description: 'Description for event 1', date: '2023-01-01' ,side:'left'},
  { title: 'Event 2', description: 'Description for event 2', date: '2023-06-15' ,side:'right'},
  { title: 'Event 3', description: 'Description for event 3', date: '2024-02-20' ,side:'left'},
  { title: 'Event 1', description: 'Description for event 1', date: '2023-01-01' ,side:'right'},
  { title: 'Event 2', description: 'Description for event 2', date: '2023-06-15' ,side:'left'},
  { title: 'Event 3', description: 'Description for event 3', date: '2024-02-20' ,side:'right'},
];

const IndexPage = () => {
  return (
    <div className={styles.calendar}>
        
    <div className={styles.container}>
    <h1>Our Events this year</h1>
      <Timeline events={events}/>
    </div>
    </div>
  );
};

export default IndexPage;
