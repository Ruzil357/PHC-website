import React from 'react'
import styles from '../styles/Home.module.css'
import {lines} from '../data/Home.js'
import Typist from 'react-typist'
import MetaDecorator from '../components/MetaDecorator'

function Home() {
	const heroLine = lines[Math.floor(Math.random() * lines.length)]

	return (
		<div className={styles.main}>
			<MetaDecorator
				title={'Home'}
				description={
					'Investing Society is a club at Pathways School Noida. Open the website to learn more'
				}
			/>

			<h1 className={'header'}>Investing Society</h1>
			<h3 className={`subheader text-center ${styles.subTitle}`}>
				<Typist
					avgTypingDelay={50}
					stdTypingDelay={20}
					cursor={{
						show: true,
						blink: true,
						element: '|',
						hideWhenDone: true,
						hideWhenDoneDelay: 500,
					}}
				>
					{heroLine}
				</Typist>
			</h3>
		</div>
	)
}

export default Home
