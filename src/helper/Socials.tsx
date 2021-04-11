import React from 'react';

import { Animated } from 'react-animated-css';
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi';

const Socials = () => {
	return (
		<>
			<a
				href="https://github.com/adriandelgg"
				target="_blank"
				rel="noreferrer"
			>
				<Animated
					animationInDelay={1000}
					animationIn="fadeInDown"
					animationOut="fadeOutUp"
					animationInDuration={1000}
					animationOutDuration={1000}
					isVisible={true}
				>
					<FiGithub />
				</Animated>
			</a>
			<a
				href="https://www.linkedin.com/in/adriandelgado1/"
				target="_blank"
				rel="noreferrer"
			>
				<Animated
					animationInDelay={1200}
					animationIn="fadeInDown"
					animationOut="fadeOutUp"
					animationInDuration={1000}
					animationOutDuration={1000}
					isVisible={true}
				>
					<FiLinkedin />
				</Animated>
			</a>
			<a
				href="https://www.instagram.com/cloudcoding/"
				target="_blank"
				rel="noreferrer"
			>
				<Animated
					animationInDelay={1400}
					animationIn="fadeInDown"
					animationOut="fadeOutUp"
					animationInDuration={1000}
					animationOutDuration={1000}
					isVisible={true}
				>
					<FiInstagram />
				</Animated>
			</a>
			<a
				href="https://twitter.com/cloudcoding_"
				target="_blank"
				rel="noreferrer"
			>
				<Animated
					animationInDelay={1600}
					animationIn="fadeInDown"
					animationOut="fadeOutUp"
					animationInDuration={1000}
					animationOutDuration={1000}
					isVisible={true}
				>
					<FiTwitter />
				</Animated>
			</a>
		</>
	);
};

export default Socials;
