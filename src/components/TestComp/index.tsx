/**
  *
  *
  * TestComp Component
  *
  *
*/

import React from 'react';
import { Container } from './styled';
import IProps from './index.interface';

/**
  * the `componentName` comes from prompets actions
  * properCase to captalize each word first Letter 
*/

const TestComp: React.FC<IProps> = (props): JSX.Element => {

  return (
    <Container>
      TestComp
    </Container>
  );
};

export default  React.memo(TestComp) ;
