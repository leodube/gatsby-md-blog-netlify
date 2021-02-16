const React = require("react")

const HeadComponents = [
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
];

const PostBodyComponents = [
  <script src="/netlify-identity-body-component.js"></script>
]

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents(HeadComponents);
  setPostBodyComponents(PostBodyComponents)
};
