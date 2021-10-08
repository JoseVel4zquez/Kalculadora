import styled from "styled-components";
import React from "react";

export const ButtonContainer = styled.View`
    flex-direction: ${props => props.isPortrait ? 'row' : 'column'};
    flex-wrap: 'wrap';
`