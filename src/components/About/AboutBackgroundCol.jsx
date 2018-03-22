import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animate from 'react-move/Animate';
import { easePolyInOut } from 'd3-ease';

import { Col } from '../../utils/Grid';

const BackgroundCol = styled(Col)`
  border-width: 1px;
  border-left-style: solid;
  border-color: rgba(255, 255, 255, 0.2);
  background-color: rgba(0, 0, 0, 0.9);
  transform-origin: left;
`;

function AboutBackgroundCol(props) {
  return (
    <Animate
      // Weither to render or not (trigger enter/leave)
      show={props.show}
      // Starting state
      start={{
        scaleX: 0,
      }}
      // How to transform state on enter
      enter={{
        scaleX: [1],
        timing: {
          duration: 800,
          ease: easePolyInOut,
        },
      }}
      // How to handle interrupted enter and leave transitions.
      update={{
        scaleX: 0,
      }}
      // How to transform node state on leave
      leave={{
        scaleX: [0],
        timing: {
          delay: 800,
          duration: 800,
          ease: easePolyInOut,
        },
      }}
    >
      {(state) => {
        return (
          <BackgroundCol
            xs={2}
            style={{
              transform: `scaleX(${state.scaleX})`,
            }}
          />
        );
      }}
    </Animate>
  );
}

AboutBackgroundCol.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default AboutBackgroundCol;
