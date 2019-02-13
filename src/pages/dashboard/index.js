import React from 'react';
import { connect } from 'dva'


const Dashboard = ({ location, dispatch, dashboard, loading }) => {
    const { title } = dashboard;
    return (
        <h3>{title}</h3>
    )
};

export default connect(({ dashboard, loading }) => ({ dashboard, loading }))(Dashboard)