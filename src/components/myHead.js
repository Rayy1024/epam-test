import React from "react";
import { Helmet } from "react-helmet";

class myHead extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="JOI Energy" />
          <link rel="stylesheet" href="index.css" />
          <link rel="stylesheet" href="basscss.css" />
          <script src="frontpage.js" type="module"></script>
          <title>JOI Energy</title>
        </Helmet>
      </>
    );
  }
}

export default myHead;
