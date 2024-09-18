import React from "react";
import {Breadcrumb} from 'antd';
import HomePage from "../page/HomePage";
import JsonFormatter from "../page/JsonFormatter";

const componentMap = {
    HomePage: HomePage,
    JsonFormatter: JsonFormatter,
    // JsonToJava: JsonToJava,
    // SqlFormatter: SqlFormatter,
};

const ContentContent = ({breadcrumbItems, currentComponent}) => {
    const ComponentToRender = componentMap[currentComponent] || HomePage;
    return (
        <>
            <Breadcrumb style={{margin: '16px 0'}} items={breadcrumbItems.map((item) => {
                return {title: item}
            })}/>
            <div style={{background: '#fff', padding: 24, height: '100%'}}>
                <ComponentToRender/>
            </div>
        </>
    )
};

export default ContentContent