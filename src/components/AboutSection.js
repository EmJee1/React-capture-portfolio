// import images
import home1 from '../img/home1.png'
// import styles
import {
	StyledAbout,
	StyledDescription,
	StyledImage,
	StyledHide,
} from '../styles'
// import animation
import { motion } from 'framer-motion'
import { titleAnimation, fade, photoAnimation } from '../animation'
// import components
import Wave from './Wave'

const AboutSection = () => {
	return (
		<StyledAbout>
			<StyledDescription>
				<motion.div	className='title'>
					<StyledHide>
						<motion.h2 variants={titleAnimation}>We work to make</motion.h2>
					</StyledHide>
					<StyledHide>
						<motion.h2 variants={titleAnimation}>
							Your <span>dreams</span> come
						</motion.h2>
					</StyledHide>
					<StyledHide>
						<motion.h2 variants={titleAnimation}>true.</motion.h2>
					</StyledHide>
				</motion.div>
				<motion.p variants={fade}>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills
				</motion.p>
				<motion.button variants={fade}>Contact us</motion.button>
			</StyledDescription>
			<StyledImage>
				<motion.img variants={photoAnimation} src={home1} alt='Guy with a camera' />
			</StyledImage>
			<Wave />
		</StyledAbout>
	)
}

export default AboutSection