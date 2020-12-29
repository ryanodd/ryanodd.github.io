import React, { FunctionComponent } from "react";
import { Row, Col } from "jsxstyle";
import { Popover } from "antd";
import { InfoCircleFilled } from "@ant-design/icons";

interface HeaderBarProps {
  style?: {}
};

const infoTooltipContent = (
  <Col
    width={180}
  >
  {"Council Room is a deck tracking tool for the card game 'Dominion Online'. Just paste your game's log, and each player's stats will appear."}
  </Col>
)


export const HeaderBar: FunctionComponent<HeaderBarProps> = ({style}) => {  
  return (
      <Row
        style={{
          ...style, 
          'backgroundColor': '#202020',
          'padding': 10,
          'justifyContent': 'space-between',
        }}
      >
        <Col
          fontSize={30}
          color='#E0E0E0'
        >
          {'Council Room'}
        </Col>
          <Col
            fontSize={16}
            color='#E0E0E0'
            justifyContent='center'
          >
            <Popover
              arrowPointAtCenter
              placement='bottomRight'
              content={infoTooltipContent}
            >
              <span>
                <InfoCircleFilled/>
                {' What is this?'}
              </span>
            </Popover>
          </Col>
      </Row>
  );
}