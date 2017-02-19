import React,{PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';
import Loading from '../common/Loading';
const Header = ({loading})=>{
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">首页</IndexLink>
      {" | "}

      <Link to="/courses" activeClassName="active">课程学习</Link>
      {" | "}
      <Link to="/about" activeClassName="active">关于我</Link>
      {loading&&<Loading/>}
    </nav>);
};

Header.propTypes={
  loading:PropTypes.bool.isRequired
};

export default Header;
