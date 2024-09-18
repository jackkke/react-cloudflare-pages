import React, { useState } from 'react';
import {Input, Row, Col} from 'antd';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const {TextArea} = Input;
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('sql', sql);

const CodeHighlighter = ({ language, codeString }) => {
    return (
        <SyntaxHighlighter language={language} style={docco}>
            {codeString}
        </SyntaxHighlighter>
    );
};


const JsonFormatter = () => {
    const [jsonCode, setJsonCode] = useState(`{
    "name": "John",
    "age": 30,
    "city": "New York"
  }`);

    const change = (e) => {
        try {
            JSON.parse(e.target.value)
            setJsonCode(e.target.value)
        } catch (e) {}
    }
    return (
        <>
            <Row style={{
                height: 'calc(100% - 54px)'
            }}>
                <Col span={12}>
                    <TextArea value={jsonCode} style={{height: '100%', resize: 'none'}} onChange={change}/>
                </Col>
                <Col span={12} style={{ margin: '-14px 0' }}>
                    <CodeHighlighter language="json" codeString={JSON.stringify(JSON.parse(jsonCode), null, 2)}/>
                    {/*<TextArea style={{height: '100%', resize: 'none'}}/>*/}
                </Col>

            </Row>
        </>
    );
};

export default JsonFormatter;
