import React from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button} from './style';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            /*HeaderWrapper就是一个带样式的DEV标签*/
            <HeaderWrapper>
                    <Logo href="/"/>
                    <Nav >
                        <NavItem className="left">首页</NavItem>
                        <NavItem className="left">下载APP</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right">Aa</NavItem>
                        <NavSearch/>
                    </Nav>
                    <Addition>
                        <Button className="writting">写文章</Button>
                        <Button className="reg">注册</Button>
                        
                    </Addition>
            </HeaderWrapper>
        );
    }
}

export default Header;