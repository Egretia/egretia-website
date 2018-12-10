import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css'; 
//路由配置
import {BrowserRouter, Route,Link,Switch} from 'react-router-dom'; //BrowserRouter路径不加#号须有服务器支持HashRouter会有#
import Header from '../components/Header/Header' //引入导航
import Home from '../components/Home/Home'
import Developer from '../components/Developer/Developer'
import Main from '../components/Persons/Persons'
 import Product from '../components/Product/Product';
 import Team from '../components/Team/Team';
 import Union from '../components/Union/Union';
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types';
/* 引入语言文档的方法 */
import intl from '../messageformat/Intl'
 
class App extends Component {
  constructor(){
    super();
    let lang = "";
    let userLanguage = (navigator.browserLanguage || navigator.language).toLowerCase()
    let language = localStorage.getItem("language");
    if(language === "zh"){
      lang = "zh"
    }else if(language === "en"){
      lang = "en";
      document.body.style.fontFamily = "Barlow-Regular";
    }else{
      if(userLanguage === "zh-cn"){
        lang = "zh"
      }else{
        lang = "en";
        document.body.style.fontFamily = "Barlow-Regular";
      }
    }
    this.state = {
      LanguageType : lang
    }
    this.Intl = new intl(this.state.LanguageType);
  }
  toggleLang(lang){
    localStorage.setItem("language" , lang)
    //this.setState({LanguageType : lang})
    window.location.reload(true)
  }
  render() {
    this.Intl.set(this.state.LanguageType);
    window.Intl = this.Intl;
    return (
      <BrowserRouter>
        <Header onclick={this.toggleLang.bind(this)} lang={this.state.LanguageType}>
          {/* 路由适配地址   后期页面如果有跳转   直接在下面添加就可以 */}
            <Route exact path="/" component={Home} />
            <Route path="/Product" component={Product} />
            <Route path="/Developer" component={Developer} />
            <Route path="/Team" component={Team} />
            <Route path="/Union" component={Union} />
            {/* <Route path="/bb" component={About2} />
            <Route path="/cc" component={About3} /> */}
        </Header>
      </BrowserRouter>
    )
  }
}
 export default App;
