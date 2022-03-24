import React from 'react'
import styles from '../styles/About.module.scss'
import SocialIconWrapper from '../components/SocialIcon'
import {icons} from '../data/SocialData'
import MetaDecorator from '../components/MetaDecorator'
import {sections} from "../data/About";

const SocialIcons = () => (
  <ul className={styles.iconList}>
    {icons.map((icon) => (
      <li className={styles.icon} key={icon.url}>
        <SocialIconWrapper data={icon}/>
      </li>
    ))}
  </ul>
)

const Section = ({header, content}) => (
  <React.Fragment>
    <p className={`subheader ${styles.header}`}>{header}</p>
    {
      content.map(x => (
        <p className={`content ${styles.content}`} key={x}>{x}</p>
      ))
    }
    <br/>
  </React.Fragment>
)

function About() {
  return (
    <div className={`container ${styles.container}`}>
      <MetaDecorator
        title={'About'}
        description={
          'PSN Hack Club is a club under the global Hack Club network at Pathways School Noida. Open the website to learn more'
        }
      />

      {
        sections.map((section, index) => (
          <Section {...section} key={index}/>
        ))
      }

      {/*<SocialIcons/>*/}
    </div>
  )
}

export default About
