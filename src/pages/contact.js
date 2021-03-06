import React from 'react';
import { PaddedContainer, MultiColumnLayout, H1, H5 } from 'Components';
import tw, { styled, css, theme } from 'twin.macro';
import { useDarkMode } from 'Context';
import isPropValid from '@emotion/is-prop-valid';

const colorOnHover = props =>
	!props.isDarkMode
		? css`
				&:hover {
					color: ${theme('colors.primary')};
				}
		  `
		: css`
				&:hover {
					color: ${theme('colors.secondary')};
				}
		  `;

const StyledLink = styled('a', { shouldForwardProp: isPropValid })([
	tw`no-underline cursor-pointer font-header-sans font-bold xs:mt-lg font-bold`,
	colorOnHover,
	css`
		& > * {
			/*letter-spacing: -0.1rem;*/
			margin-bottom: 0.5rem;
		}
	`
]);

const ContactPage = () => {
	const [isDarkMode] = useDarkMode();
	return (
		<PaddedContainer>
			{/* <MultiColumnLayout> */}
			{/* <div css={[css`max-width: 1000px; width: 100%; margin: 5rem auto;`]}> */}
			<H1 tw='my-xl'>Let’s Chat.</H1>

			<MultiColumnLayout tw='mb-lg xl:col-count-2'>
				<div tw='mb-xl'>
					<H5
						paragraph
						css={[
							css`
								max-width: 600px;
							`
						]}
					>
						I’m currently open to hearing out new opportunities! Let me know if you think we should collaborate — I’d love to chat!
					</H5>
					<H5>I’m not meeting people in person at this time due to COVID-19, but hopefully this will all be over soon. When it is, let’s grab a cup of coffee!</H5>
				</div>

				<div tw='my-xl'>
					<StyledLink isDarkMode={isDarkMode} href='mailto:maksiyote@gmail.com'>
						<H5>
							<b>Email:</b> maksiyote@gmail.com
						</H5>
					</StyledLink>
					<H5 paragraph>
						<b>Phone:</b> (1)-917-803-1401
					</H5>

					<StyledLink isDarkMode={isDarkMode} href='https://www.linkedin.com/in/marioaks/'>
						<H5>LinkedIn</H5>
					</StyledLink>
					<StyledLink isDarkMode={isDarkMode} href='https://github.com/marioaks'>
						<H5>Github</H5>
					</StyledLink>
					<StyledLink isDarkMode={isDarkMode} href='https://twitter.com/maksiyote'>
						<H5>Twitter</H5>
					</StyledLink>
					<StyledLink isDarkMode={isDarkMode} href='https://www.instagram.com/maksiyote/'>
						<H5>Instagram</H5>
					</StyledLink>
				</div>
			</MultiColumnLayout>
			{/* </div> */}
		</PaddedContainer>
	);
};

export default ContactPage;
