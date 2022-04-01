import React from 'react'
import styles from '../../styles/Events.module.css'
import {EventsData} from "../../data/Events";
import Card from "../../components/UI/Card";
import MetaDecorator from "../../components/MetaDecorator";


function Events() {
  return (
    <div className={`${styles.main} items-center`}>
      <MetaDecorator
				title={'Events'}
				description={
					'The Investing Society hosts and has hosted many events in the past. Open the website to learn more'
				}
			/>
      <p className={'subheader'}>Events</p>
      <p className={`${styles.description} content text-center`}>
        The Investing Society hosts and has hosted many events in the past, make sure to checkout past events
        and lookout for upcoming ones!
      </p>
      <div className={styles.eventCardHolder}>
        {
          EventsData.map(data => (
            <Card
              key={data.id}
              className={styles.eventCard}
              onClick={() => {
                if (data.link) window.open(`events/${data.link}`, '_self')
              }}
            >
              <img alt={data.image} src={data.image} className={styles.image}/>
              <p className={" contentHeader text-center"}>{data.type}</p>
              <p className={"content text-center text-gray-400 pb-4"}>{data.dates}</p>
              <p className={"content text-center"}>{data.name}</p>
              <p className={"content text-center text-gray-400"}>{data.description}</p>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default Events
