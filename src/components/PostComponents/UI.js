import React from "react";
import {css, theme} from "twin.macro";
import { H2, H3, H4, H5, H6 } from "../Typography"
import { Link } from "gatsby"
import LeftArrow from 'Assets/icons/left-arrow.svg'
import { Divider } from "../ui"
import PostsList from "../PostsList/PostsList"
import { Fluid } from "./Fluid" 
import { textMaxWidth } from "./utils"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export { Divider } from "../ui"
export const hr = () => <div css={[css`height: ${theme('spacing.sm')}`]}/>

export const BackButton = () => (
	<Link tw="mb-lg no-underline" to="/work/"><H6 tw="opacity-75 hover:opacity-50"> <LeftArrow css={[css`fill: currentColor; height: 12px; margin-right: .5rem`]}/> Back to all work</H6></Link>
)

export const MorePostsFooter = ({posts, title}) => (
	<>
		<Divider/>
		<H2 tw="mb-xs">Did you like that last post?</H2>
		<H5 style={{maxWidth: textMaxWidth}}>Here's more of my work similar to {title}</H5>

		<Fluid maxWidth="1100px">
			<PostsList maxImgWidth={500} minImgWidth={500} posts={posts}/>
		</Fluid>
	</>
)



	// <>
	// 	<Divider/>
	// 	<div tw="grid">
	// 		<div>
	// 			<H3><img src={LeftArrow} css={[css`height: 12px; margin-right: .5rem`]}/>{prev.name}</H3>
	// 			<H6>{prev.description}</H6>
	// 		</div>
	// 		<div>
	// 			<H3><img src={LeftArrow} css={[css`height: 12px; margin-right: .5rem`]}/>{prev.name}</H3>
	// 			<H6>{prev.description}</H6>
	// 		</div>
	// 	</div>
	// </>
// )