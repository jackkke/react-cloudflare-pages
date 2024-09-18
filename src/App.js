import React, {Component} from 'react';
import {Layout} from 'antd';
import HeaderContent from "./components/HeaderContent";
import ContentContent from "./components/ContentContent";

const {Header, Content, Footer} = Layout;

class App extends Component {
    state = {
        breadcrumbItems: ['首页'],
        currentComponent: 'HomePage',
        items: [
            {
                key: '0',
                label: '首页',
                breadcrumb: ['首页'],
                current: 'HomePage',
            },
            {
                key: '1',
                label: '格式化',
                children: [
                    {
                        type: 'group',
                        label: 'JSON',
                        children: [
                            {
                                label: '格式化',
                                key: 'json-format',
                                breadcrumb: ['格式化', 'JSON', '格式化'],
                                current: 'JsonFormatter',
                            },
                            {
                                label: '转Java对象',
                                key: 'json-to-java',
                                breadcrumb: ['格式化', 'JSON', '转Java对象'],
                                current: 'JsonToJava',
                            },
                        ],
                    },
                    {
                        label: 'SQL格式化',
                        key: 'sql-format',
                        breadcrumb: ['格式化', 'SQL格式化'],
                        current: 'SqlFormatter',
                    },
                ],
            }
        ],
    };

    componentDidMount() {
    }
    findItem = (key, items) => {
        for (const item of items) {
            if (item.key === key) {
                return item;
            } else if (item.children) {
                const childItem = this.findItem(key, item.children);
                if (childItem) return childItem;
            }
        }
    }

    handleMenuClick = ({ key }) => {
        const item = this.findItem(key, this.state.items)
        this.setState({
            breadcrumbItems: item.breadcrumb,
            currentComponent: item.current,
        });
    };

    render() {
        const { items, breadcrumbItems, currentComponent,  } = this.state; // 解构 state 以提高代码可读性
        return (
            <Layout>
                <Header style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    background: 'white',
                    alignItems: 'center',
                }}>
                    <HeaderContent items={items} onMenuClick={this.handleMenuClick}></HeaderContent>
                </Header>
                <Content style={{padding: '0 24px',height: 'calc(100vh - 130.5px)' }}>
                    <ContentContent breadcrumbItems={breadcrumbItems} currentComponent={currentComponent}></ContentContent>
                </Content>
                <Footer style={{textAlign: 'center',}}>
                    Zion Tools ©{new Date().getFullYear()} Created by Zion Ham
                </Footer>
            </Layout>
        )
    }
}

export default App;
