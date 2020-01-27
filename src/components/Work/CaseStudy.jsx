import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import SlideBackground from '../SlideBackground';
import AppearClose from '../AppearClose';
import SlideBox from '../SlideBox';

const CaseStudyFlex = styled(Flex)`
  position: fixed;
  min-height: 100vh;
  height: 100vh;
  z-index: ${props => props.zIndex}
`;

const WrapperFlex = styled(Flex)`
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;

const HeaderFlex = styled(Flex)`
  position: relative;
`;

const HeaderImage = styled.img`
  width: 100%;
  height: auto;
`;

const HeaderTextFlex = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  text-shadow: 2px 2px #ff0000;
`;

const CaseStudyTitle = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  text-align: center;
  font-size: 82px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 2.2rem;
  }
`;

const CaseStudySubtitle = styled.h2`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 32px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.2rem;
  }
`;

const CaseStudyBody = styled.p`
  font-family: ${props => props.theme.typography.body.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.grey};
  font-size: 22px;
  line-height: 28px;
  white-space: pre-wrap;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.2rem;
    line-height: 1.2;
  }
`;

const FeatureTitle = styled.h1`
  font-family: ${props => props.theme.typography.title.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  text-align: center;
  font-size: 60px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.8rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.typography.subtitle.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.dark};
  font-size: 32px;
  margin-bottom: 8px;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
`;

const SectionBody = styled.p`
  font-family: ${props => props.theme.typography.body.fontFamily};
  color: ${props => props.theme.color.contrast};
  opacity: ${props => props.theme.opacity.grey};
  font-size: 18px;
  line-height: 24px;
  white-space: pre-wrap;
  @media (max-width: ${props => props.theme.breakpoint.md}px) { {
    font-size: 1.2rem;
    line-height: 1.2;
  }
`;

const SectionImage = styled.img`
  width: 100%;
  height: auto;
`;

class CaseStudy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zIndex: -1,
    };

    this.handleOnLeaved = this.handleOnLeaved.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Change z-index to 1 on show
    if (this.props.show !== nextProps.show) {
      if (nextProps.show) {
        this.setState({
          zIndex: 1,
        });
      }
    }
  }

  handleOnLeaved() {
    // Change z-index to -1 on leave animation's end
    this.setState({
      zIndex: -1,
    });
  }

  renderFeatures() {
    return (this.props.caseStudy ? this.props.caseStudy.features : []).map(feature => (
      <Flex flexDirection="column">
        <HeaderFlex>
          <HeaderImage src={feature.image.src} alt={this.props.caseStudy.image.alt} />
          <HeaderTextFlex alignItems="center" justifyContent="center" flexDirection="column">
            <FeatureTitle>{feature.title}</FeatureTitle>
          </HeaderTextFlex>
        </HeaderFlex>
        <Flex ml="25%" my="100px" width={4 / 8} flexDirection="column">
          <SectionTitle>Challenges</SectionTitle>
          {feature.challenge.paragraphs.map((paragraph, index) => (
            <Flex mb={index === feature.challenge.paragraphs.length - 1 ? '0px' : '32px'}>
              <SectionBody>{paragraph}</SectionBody>
            </Flex>
          ))}:
        </Flex>
        <Flex ml="12.5%" width={6 / 8}>
          <SectionImage src={feature.challenge.image.src} alt={feature.challenge.image.alt} />
        </Flex>
        <Flex ml="25%" my="100px" width={4 / 8} flexDirection="column">
          <SectionTitle>Solution</SectionTitle>
          {feature.solution.paragraphs.map((paragraph, index) => (
            <Flex mb={index === feature.solution.paragraphs.length - 1 ? '0px' : '32px'}>
              <SectionBody>{paragraph}</SectionBody>
            </Flex>
          ))}:
        </Flex>
        <Flex ml="12.5%" width={6 / 8}>
          <SectionImage src={feature.solution.image.src} alt={feature.solution.image.alt} />
        </Flex>
        <Flex ml="25%" my="100px" width={4 / 8} flexDirection="column">
          <SectionTitle>Results</SectionTitle>
          {feature.result.paragraphs.map((paragraph, index) => (
            <Flex mb={index === feature.result.paragraphs.length - 1 ? '0px' : '32px'}>
              <SectionBody>{paragraph}</SectionBody>
            </Flex>
          ))}:
        </Flex>
      </Flex>
    ));
  }

  render() {
    return (
      <CaseStudyFlex width={1} zIndex={this.state.zIndex}>
        <WrapperFlex width={1} flexDirection="column">
          <SlideBox width={1} flex="1 0 auto" show={this.props.show}>
            <HeaderFlex>
              <HeaderImage src={this.props.caseStudy.image.src} alt={this.props.caseStudy.image.alt} />
              <HeaderTextFlex alignItems="center" justifyContent="center" flexDirection="column">
                <CaseStudyTitle>{this.props.caseStudy.title}</CaseStudyTitle>
                <CaseStudySubtitle>{this.props.caseStudy.subtitle}</CaseStudySubtitle>
              </HeaderTextFlex>
            </HeaderFlex>
            <Flex ml="25%" my="100px" width={4 / 8}>
              <CaseStudyBody>{this.props.caseStudy.description}</CaseStudyBody>
            </Flex>
            {this.renderFeatures()}
          </SlideBox>
        </WrapperFlex>
        <AppearClose show={this.props.show} onShowChange={this.props.onShowChange} />
        <SlideBackground show={this.props.show} onLeaved={this.handleOnLeaved} breakpoint={this.props.breakpoint} />
      </CaseStudyFlex>
    );
  }
}

CaseStudy.defaultProps = {
  caseStudy: {
    id: null,
    title: '',
    description: '',
    image: {
      src: '',
      alt: '',
    },
    features: [],
  },
};

CaseStudy.propTypes = {
  show: PropTypes.bool.isRequired,
  onShowChange: PropTypes.func.isRequired,
  breakpoint: PropTypes.shape({
    xsAndUp: PropTypes.bool.isRequired,
    smAndUp: PropTypes.bool.isRequired,
    mdAndUp: PropTypes.bool.isRequired,
    lgAndUp: PropTypes.bool.isRequired,
    xlAndUp: PropTypes.bool.isRequired,
  }).isRequired,
  caseStudy: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }),
    features: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
      challenge: PropTypes.shape({
        features: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
        })),
      }),
    })),
  }),
};

export default CaseStudy;
