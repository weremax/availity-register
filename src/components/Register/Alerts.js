import React from 'react';
import { Alert } from 'reactstrap';

const Alerts = ({ type, message }) => (
    <Alert color={type}>
        {message}
    </Alert>
);

export default Alerts;

