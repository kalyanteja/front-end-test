import React from 'react';
import CustomerCard from './CustomerCard';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import Content from './Content';

export default (props) =>
    <CustomerCard>
        <ProfilePicture imageHash={props.imageHash}/>
        <Content>
            <Name>{props.name}</Name>
            <div><small>Expected time: </small>{props.expectedTime}</div>
        </Content>
    </CustomerCard>;
