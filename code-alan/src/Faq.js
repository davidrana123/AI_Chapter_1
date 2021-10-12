import React from 'react';
import './Faq.css';
import img1 from './img/photo.jpg';
import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import FAQ_LIST from './faq.json';

export const Faq = ({ index, setIndex, currentFaqId, setCurrentFaqId }) => {
  return (
    <>
      {/* <Flex direction="column" p={4}>
        <Box mb="8">
          <Heading size="md">Frequently Asked Questions</Heading>
        </Box>
        <Accordion allowToggle index={index}>
          {FAQ_LIST.map(faq => (
            <AccordionItem key={faq.id} name={`accordion-button-${faq.id}`}>
              <AccordionButton
                onClick={() => {
                  if (faq.id === currentFaqId) {
                    console.log('True');
                    setCurrentFaqId(null);
                    setIndex(null);
                  } else {
                    setCurrentFaqId(faq.id);
                    setIndex(faq.id - 1);
                  }
                }}
              >
                <ul class="honeycomb">
                  <li class="honeycomb-cell">
                    <img class="honeycomb-cell_img" src={img1} />
                    <div class="honeycomb-cell_title">{faq.question}</div>
                  </li>
                </ul>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex> */}
      <body>
        <header class="site-header clearfix">
          <nav>
            <div class="logo">{/* <h1>David AI</h1> */}</div>
          </nav>
          <section>
            <div class="leftside">
              <img src={img1} />
            </div>
            <div class="rightside">
              <h1>My 1 AI Project</h1>
              <p>Ask Question About The David</p>
              <button>Welcome</button>
            </div>
          </section>
        </header>
      </body>
    </>
  );
};
