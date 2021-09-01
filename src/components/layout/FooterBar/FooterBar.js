import React from 'react';
import { Container, Title, Socials, ButtonContent } from './FooterBar.styles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Button from '../../common/Button/Button';

const FooterBar = () => {
  return (
    <Container>
      <Title>WEBSTER</Title>
      <Socials>
        <a
          href={'https://github.com/Webster2020'}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>
            <ButtonContent>
              <AiFillGithub />
            </ButtonContent>
          </Button>
        </a>
        <a
          href={'https://linkedin.com/in/michal-szwajgier'}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>
            <ButtonContent>
              <AiFillLinkedin />
            </ButtonContent>
          </Button>
        </a>
      </Socials>
    </Container>
  );
};

export default FooterBar;
