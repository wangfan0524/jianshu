import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export  const HeaderWrapper = styled.div`
  position: relative;
  height:56px;
  border-bottom:1px solid #f0f0f0
`;

export const Logo = styled.a`
  position:absolute;
  top:0;
  left:0;
  display:block;
  height:56px;
  width:100px;
  background:url(${logoPic});
  background-size:contain
`;
export const Nav = styled.div`
 
  width:960px;
  height:100%;
  padding-right:70px;
  box-sizing:border-box;
  margin:0 auto;
`;

export const NavItem = styled.div`
/*如果当前是NavItem组件，同时NavItem有class并且等于left，则左浮动，等于right，则右浮动*/
 line-height:56px;
 padding:0 15px;
 font-size:17px;
 color: #333;
&.left{
     float:left;
 }
 &.right{
     float:right;
     color: #969696;
 }
 &.active{
     color:#ea6f5a
 }
`;
export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
width:160px;
height:38px;
padding:0 20px;
margin-top:9px;
margin-left:20px;
box-sizing:border-box;
border:none;
border-radius:19px;
background-color:#eee;
font-size:14px;
&::placeholder{
    color:#999
}
`

export const Addition=styled.div`
position:absolute;
right:0px;
top:0px;
height:56px;
`

export const Button=styled.div`
float:right;
margin-top:9px;
margin-right:20px;
padding: 0 20px;
line-height:38px;
border-radius:20px;
border:1px solid #ec6149;
font-size:14px;
&.reg{
    color:#ec6149;
}
&.writting{
    color:#fff;
    background:#ec6149; 
}
`