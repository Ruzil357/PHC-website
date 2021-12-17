import React, { Fragment } from 'react'
import styles from '../../styles/Hackathon2.module.scss'
import { animated, config, useSpring } from 'react-spring'
import MetaDecorator from '../../components/MetaDecorator'
import { IoIosArrowDown } from 'react-icons/io'
import useTimer from '../../hooks/useTimer'
import Fade from 'react-reveal/Fade'

const Timer = ({ style }) => {
  const [timeLeft, _] = useTimer(new Date(2022, 0, 7, 11, 0, 0))

  return (
    <animated.p style={style} className={styles.countdown}>
      {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M <span className={styles.seconds}>: {timeLeft.seconds}S</span>
    </animated.p>
  )
}

const Hero = () => {
  const animationConfig = {
    config: config.stiff,
    from: { opacity: 0 },
    to: { opacity: 1 },
  }

  const initStyle = useSpring({
    ...animationConfig,
    delay: 250,
  })
  const arrowStyle = useSpring({
    ...animationConfig,
    delay: 750,
  })

  return (
    <Fragment>
      <div className={styles.heroContainer}>
        <animated.p style={initStyle} className={styles.hero}>
          PSN Hackathon 2.0
        </animated.p>
        <Timer style={initStyle} />
      </div>
      <animated.a style={arrowStyle} href={'#view'} className={styles.viewDetailsArrow}>
        <IoIosArrowDown />
      </animated.a>
    </Fragment>
  )
}

const Info = ({ header, subheader, description }) => {
  return (
    <span className={styles.infoContainer}>
      <span>
        <p className={styles.header}>
          {header}
        </p>
        <p className={styles.subHeader}>
          {subheader}
        </p>
      </span>
      <p className={styles.description}>
      {
        description.map((x, index) => (
          <Fragment key={index}>
            {x}
            {index !== description.length - 1 && <br />}
          </Fragment>
        ))
      }
      </p>
    </span>
  )
}

const Content = () => {
  return (
    <div className={styles.contentContainer} id={'view'}>
      <div className={styles.info}>
        <Fade>
          <Info
            header={'7-9'}
            subheader={'January, 2021'}
            description={[
              `Come join us at 11am IST!`,
            ]}
          />
          <hr />
          <Info
            header={56}
            subheader={'Hours'}
            description={[
              `Fresh, Fast and Productive`,
            ]}
          />
          <hr />
          <Info
            header={'9000'}
            subheader={'Rupees in Prizes'}
            description={[
              `Create a hack and`,
              `win handsome prizes!`,
            ]}
          />
        </Fade>
      </div>
      <p className={styles.infoText}>Pre-registerations open soon.</p>
    </div>
  )
}

const Hackathon2 = () => {
  return (
    <div className={styles.pageContainer}>
      <MetaDecorator
        title={'Hackathon 2.0'}
        description={
          'PSN Hackathon 2.0 is the PSN Hack Club\'s 2nd ever hackathon. Pre-registrations open soon'
        }
      />
      <Hero />
      <Content />
    </div>
  )
}

export default Hackathon2
