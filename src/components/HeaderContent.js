import React from "react";
import {Menu} from 'antd';

const HeaderContent = ({ items, onMenuClick }) => {
    const onClick = (e) => {
        if (onMenuClick) {
            onMenuClick(e)
        }
    };
    return <Menu mode="horizontal" defaultSelectedKeys={['0']} items={items} style={{ flex: 1, minWidth: 0, }} onClick={onClick}/>
};

export default HeaderContent