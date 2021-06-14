import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
    render() {
        return (
            <FootStyle className="text-center p-3">
                <div>Fueled by Beans</div>
            </FootStyle>
        )
    }
}

const FootStyle = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: var(--mainBlue);
    color: white;
`;
