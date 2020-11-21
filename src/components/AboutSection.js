// import images
import home1 from '../img/home1.png'
// import styles
import {
	StyledAbout,
	StyledDescription,
	StyledImage,
	StyledHide,
} from '../styles'
// import framer motion
import { motion } from 'framer-motion'

const AboutSection = () => {
	return (
		<StyledAbout>
			<StyledDescription>
				<div className='title'>
					<StyledHide>
						<h2>We work to make</h2>
					</StyledHide>
					<StyledHide>
						<h2>
							Your <span>dreams</span> come
						</h2>
					</StyledHide>
					<StyledHide>
						<h2>true.</h2>
					</StyledHide>
				</div>
				<p>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills
				</p>
				<button>Contact us</button>
			</StyledDescription>
			<StyledImage>
				<img src={home1} alt='Guy with a camera' />
			</StyledImage>
		</StyledAbout>
	)
}

export default AboutSection