import React, { FunctionComponent, ChangeEvent } from 'react';
import { Input } from 'antd';
import { Col } from 'jsxstyle';

const { TextArea } = Input;

interface CardContainerProps {
  pasteCallback: (event: ChangeEvent<HTMLTextAreaElement>) => void,
  style?: {}
};

export const PasteLogBox: FunctionComponent<CardContainerProps> = ({pasteCallback, style}) => {  
  return (
    <Col style={{...style, 'backgroundColor': 'darkgreen'}}>
      <TextArea
        rows={4}
        placeholder={'Paste deck here...'}
        onChange={pasteCallback}
        style={{
          'width': '100%'
        }}
      />
    </Col>
  );
}
