import PropTypes from 'prop-types';
import React from 'react';


/**
 * The intro component
 */
const Intro = ( page ) => {

	const theme = page._pages[ page._ID ].theme ? page._pages[ page._ID ].theme : 'dark';

	return (
		<div className={`uikit-body uikit-grid intro intro--${ theme }`}>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="textwrapper">

							{ page.category && <span id={ (page.category).toLowerCase() } className="section__section intro__category">{ page.category }</span> }
							<h1 className="intro__headline">{ page.title ? page.title : page._pages[ page._ID ].title }</h1>
							{ page.subtitle && <p className="intro__subtitle">{ page.subtitle }</p> }
							{ page.metaTitle1 &&
								<div className="intro__metadata intro__metadata--intro small">
								  <dl>
									<dt>{ page.metaTitle1 }</dt>
									<dd>{ page.metaLink1 ? (
										<a href={ page.metaLink1 }>{ page.metaValue1 }</a>
										) : (
										<span>{ page.metaValue1 }</span>
										)}
									</dd>
									<dt>{ page.metaTitle2 }</dt>
									<dd>{ page.metaLink2 ? (
										<a href={ page.metaLink2 }>{ page.metaValue2 }</a>
										) : (
										<span>{ page.metaValue2 }</span>
										)}
									</dd>
								  </dl>
								</div>
							}
							<div className="intro__text">{ page._body }</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


Intro.propTypes = {
	/**
	 * category: Content strategy
	 */
	category: PropTypes.string,

	/**
	 * metaTitle1: Created by
	 */
	metaTitle1: PropTypes.string,

	/**
	 * metaValue1: Digital Transformation Agency, Department of Immigration and Border Protection
	 */
	metaValue1: PropTypes.string,

	/**
	 * metaLink1: http://google.com
	 */
	metaLink1: PropTypes.string,

	/**
	 * metaTitle2: 4 June 2017
	 */
	metaTitle2: PropTypes.string,

	/**
	 * metaValue2: 4 June 2017
	 */
	metaValue2: PropTypes.string,

	/**
	 * metaLink2: http://google.com
	 */
	metaLink2: PropTypes.string,

	/**
	 * title: Page title  # if not given, it takes the title from the current page
	 */
	title: PropTypes.string,

	/**
	 * subtitle: Welcome to our intro
	 */
	subtitle: PropTypes.string,

	/**
	 * _body: (text)(4)
	 */
	_body: PropTypes.node.isRequired,
};


Intro.defaultProps = {};


export default Intro;
