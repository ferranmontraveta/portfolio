import React from 'react';
import ReactHelmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

const Helmet = ({ theme = {} }) => (
  <StaticQuery
    render={data => {
      const name = "Ferran Montraveta";
      const description = "My portfolio";
      const title = `${name} Portfolio`;

      return (
        <ReactHelmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="theme-color" content={theme.background} />
          <meta itemProp="name" content={title} />
          <meta itemProp="description" content={description} />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta name="og:site_name" content={title} />
          <meta name="og:locale" content="en_US" />
          <meta name="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </ReactHelmet>
      );
    }}
  />
);

Helmet.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object,
};

export default withTheme(Helmet);