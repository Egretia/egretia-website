import React, { Component } from 'react';
//路由配置
import {Link} from 'react-router-dom';
import HeaderStyle from './Header.css';

import Footer from '../Footer/Footer'

import logoBJ from './img/white_logo.png'
import contraction from './img/fatherT.png'

//语言切换展示
class ShowToggleLang extends Component{
  toggleLang(lang){
    this.props.onclick(lang)
  }
  render(){
    let lang = this.props.lang;
    return (
      <div className={HeaderStyle.toggleLang}>
        <p onClick={this.toggleLang.bind(this,'zh')} style={lang === "zh" ? {"color" : "#FAC568"} : null}>中文</p>
        <p onClick={this.toggleLang.bind(this,'en')} style={lang === "en" ? {"color" : "#FAC568"} : null}>English</p> 
      </div>
    )
  }
}
//渲染列表项
class NavList extends Component{
  constructor(){
    super()
  }
  handerAddClass(index){
    document.documentElement.scrollTop = document.body.scrollTop =0;
    this.props.handPan(index);
  }
  LinkHref(linkF){
    window.open(linkF)
  }
  render(){
    const Lang = window.Intl;
    const indexColor = this.props.bjColor;
    const fontWi = this.props.lang;
    const styleFontWi = (fontWi === "en" ? HeaderStyle.ActiveFontWi : "");
    //console.log(styleFontWi)
    return (
      <ul ref={this.props.showCon}>
        <li>
          <a className={styleFontWi}>{Lang.get("navHeader_language")}</a>
          <ShowToggleLang onclick={this.props.onclick} lang = {this.props.lang}/>
        </li>
        <li onClick={this.handerAddClass.bind(this , 7)} className={indexColor===7 ? HeaderStyle.selectClick : null}><a className={styleFontWi} onClick={this.LinkHref.bind(this,Lang.get("Footer_wumen_boke"))}>{Lang.get("navHeader_Blog")}</a></li>
        <li onClick={this.handerAddClass.bind(this , 6)} className={indexColor===6 ? HeaderStyle.selectClick : null}><Link className={styleFontWi} to="/Union">{Lang.get("navHeader_Union")}</Link></li>
        <li onClick={this.handerAddClass.bind(this , 4)} className={indexColor===4 ? HeaderStyle.selectClick : null}><Link className={styleFontWi} to="/Team">{Lang.get("navHeader_team")}</Link></li>
        <li onClick={this.handerAddClass.bind(this , 3)} className={indexColor===3 ? HeaderStyle.selectClick : null}><Link className={styleFontWi} to="/Developer">{Lang.get("navHeader_developer")}</Link></li>
        <li onClick={this.handerAddClass.bind(this , 2)} className={indexColor===2 ? HeaderStyle.selectClick : null}><Link className={styleFontWi} to="/Product">{Lang.get("navHeader_product")}</Link></li>
        <li><a className={styleFontWi} onClick={this.LinkHref.bind(this,Lang.get("Footer_wumen_FootBall"))}>{Lang.get("navHeader_Football")}</a></li>
        <li onClick={this.handerAddClass.bind(this , 1)} className={indexColor===1 ? HeaderStyle.selectClick : null}><Link className={styleFontWi} to="/">{Lang.get("navHeader_home")}</Link></li> 
      </ul>
    )
  }
}

class MyHeader extends Component {
    constructor(props){
      super(props);
      this.windowScroll = React.createRef();
      this.showCon = React.createRef();
      this.showCon1 = React.createRef();
      this.showCon2 = React.createRef();
      this.state = {
        bjColor : 0
      }
    }
    handPan(index){
      this.showCon.current.style.display = "none";
      this.showCon1.current.style.display = "none";
      this.showCon2.current.style.display = "none";
      this.setState({
        bjColor : index
      })
    }
    componentDidMount() {
      switch (window.location.pathname){
        case "/" : 
          this.setState({
            bjColor : 1
          })
          break;
        case "/Product" : 
          this.setState({
            bjColor : 2
          })
          break;
        case "/Developer" : 
          this.setState({
            bjColor : 3
          })
          break;
        case "/Team" : 
          this.setState({
            bjColor : 4
          })
          break;
        case "/Union" : 
          this.setState({
            bjColor : 6
          })
          break;
        default:
          this.setState({
            bjColor : 1
          })
      }
      let _this = this;
      window.addEventListener('scroll', () => {
          _this.handleScroll();
      });
    }
    handleScroll(){
      var st =document.documentElement.scrollTop||document.body.scrollTop;
      if(st > 0) {
        this.windowScroll.current.style.background = '#0093FA';
      } else {
        this.windowScroll.current.style.background = 'rgba(0,0,0,0)';
      }
    }
    showContractionbar(){
      this.showCon.current.style.display = "block";
      this.showCon1.current.style.display = "block";
      this.showCon2.current.style.display = "block";
    }
    closeContractionbar(){
      this.showCon.current.style.display = "none";
      this.showCon1.current.style.display = "none";
      this.showCon2.current.style.display = "none";
    }
    render() {
      return (
        <div className={HeaderStyle.headerGolle}>
          <div className={HeaderStyle.navBJ} ref ={this.windowScroll}></div>
          <div className={HeaderStyle.navHeader}>
            <div className={`contain ${HeaderStyle.header}`}>
              <p className={HeaderStyle.logoBJ}><img src={logoBJ} alt=""/></p>
              <NavList onclick={this.props.onclick} lang={this.props.lang} bjColor={this.state.bjColor} handPan={this.handPan.bind(this)}/>
            </div>
          </div>
          {/* 移动端Header部分 */}
          <div className={HeaderStyle.Contractionbar}>
            <img onClick={this.showContractionbar.bind(this)} src={contraction} alt=""/>
          </div>
          <div ref ={this.showCon} className={HeaderStyle.zhezhao}>
          </div>
          <div ref ={this.showCon1} className={HeaderStyle.closeZhezhao}>
            <p onClick={this.closeContractionbar.bind(this)}>×</p>
            <NavList showCon ={this.showCon2} onclick={this.props.onclick} lang={this.props.lang} bjColor={this.state.bjColor} handPan={this.handPan.bind(this)}/>
          </div>
          {/* 移动端Header部分结束 */}
          {/* {React.cloneElement(this.props.children, { handPan: this.handPan.bind(this) })} */}
          {this.props.children}
          <Footer onclick={this.props.onclick} handPan={this.handPan.bind(this)}/>
        </div>
      );
    }
  }

export default MyHeader;