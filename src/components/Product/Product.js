import React, {
    Component
} from 'react';
import axios from 'axios';
import Link from 'react-router-dom/Link';
//引入wow
import {WOW} from 'wowjs';
import ProductStyle from './Product.css'

import moon from './img/homeKV.png'
import Allin from './img/Allin.png'
import Product1 from './img/Product1.png'
import Product2 from './img/Product2.png'
import Product3 from './img/Product3.png'
import Product4 from './img/Product4.png'
import Product5 from './img/Product5.png'
import { link } from 'fs';

//引入谷歌统计
import reactGAEvent from '../GAEvent/GAEvent.js';
import ReactGA from 'react-ga';


/* 各种背景及点缀星球浮动元素 */
class EmbellishLists extends Component{
    render(){
        let showsBall = [];
        let showsBJ = [];
        for (let i = 0; i < 13; i++){
            showsBall.push(<EmbellishListsBall key={i} EmqClass={ProductStyle.posBall}/>)
        }
        for(let i = 0 ; i< 6;i++){
            showsBJ.push(<EmbellishListsBJ key={i} EmbClass={ProductStyle.posBJ}/>)
        }
        return (
            <div className={ProductStyle.ControlF}>
                {/* 虚线及阴影背景 */}
                {showsBJ}
                {/* 球球背景及特效 */}
                <div className={`${ProductStyle.BallF}`}>
                    {showsBall}
                </div>
            </div>
        )
    }
}
class EmbellishListsBJ extends Component{
    render(){
        return (
            <div className={this.props.EmbClass}>
            </div>
        )
    }
}
/* 球球背景及特效 */
class EmbellishListsBall extends Component{
    render(){
        return (
            <div className={this.props.EmqClass}>
            </div>
        )
    }
}
class Embellish extends Component{
    render(){
        return (
            <div>
                <EmbellishLists />
            </div>
        )
    }
}

/* 月亮标记 */
class Moon extends Component{
    render(){
        return (
            <div className={this.props.moonClass}>
                <img src={this.props.imgPath} alt=""/>
            </div>
        )
    }
}


//判断当前操作系统
function detectOS() {
    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform ==
        "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac";
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux";
    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") >
            -1;
        if (isWin2K) return "Win2000";
        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -
            1;
        if (isWinXP) return "WinXP";
        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") >
            -1;
        if (isWin2003) return "Win2003";
        var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf(
            "Windows Vista") > -1;
        if (isWinVista) return "WinVista";
        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) return "Win7";
    }
    return "other";
}

/* 产品列表展示区域 */
class ProductLists extends Component{
   
    LinkHref(linkF , GoogleLabel){
        //GA会统计到主页面的访问
        ReactGA.event({category:'Product', action:'Click', label: GoogleLabel});
        if(linkF === "http://smartide.egretia.io" || linkF ==="http://smartide.egretia.io/smartstore/#/home"){
            window.open(linkF)
            return false;
        }
        var isInstalled = false;
        var system = detectOS();
        var ifr = document.createElement('iframe');
        document.body.appendChild(ifr);
        // alert(encodeURI('egret://tools/install/Egret Wing 3'));
        ifr.src = linkF; //打开app的协议，有app同事提供
        window.onblur = function () {
            isInstalled = true;
           // document.body.removeChild(ifr);
        };　
        if (isInstalled == false) {
            window.setTimeout(function () {
                document.body.removeChild(ifr);
                if (system === 'Mac') {
                    window.location.href = "http://tool.egret-labs.org/EgretLauncher/EgretLauncher-1.0.53.dmg"; //打开app下载地址，有app同事提供
                } else {
                    window.location.href = "http://tool.egret-labs.org/EgretLauncher/EgretLauncher-1.0.53.exe"; //打开app下载地址，有app同事提供 
                }
            }, 1000)
        }
    }
    LinkHrefDoc(linkF , GoogleLabel){
        //GA会统计到主页面的访问
        ReactGA.event({category:'Product', action:'Click', label: `${GoogleLabel} Doc`});
        window.open(linkF)
    }
    render(){
        const Lang = window.Intl;
        return (
            <div className={this.props.item.ProudctListsClass}>
                <div className={ProductStyle.fatherP}>
                    <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{this.props.item.ProudctListsTitle}</h3>
                    <pre className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="10"  
            data-wow-iteration="1">{this.props.item.ProudctListsText}</pre>
                    <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset="10"  
            data-wow-iteration="1">
                        <p  onClick={this.LinkHref.bind(window,this.props.item.linkH,this.props.item.ProudctListsTitle)}>{this.props.item.ProudctListsBtn}</p>
                        <h3 onClick={this.LinkHrefDoc.bind(this,this.props.item.egretDoc,this.props.item.ProudctListsTitle)}>{this.props.item.ProudctListsBtn1}</h3>
                    </div>
                </div>
                <h4>
                    <img src={this.props.item.ProudctListsImg} alt=""/>
                </h4>
            </div>
        )
    }
}
class ProductRoot extends Component {
    render() {
        const Lang = window.Intl;
        const ProductListsJson = [
            {
                "ProudctListsClass" : `${ProductStyle.ProductLists}`,
                "ProudctListsTitle" : Lang.get("ProudctLists_Title"),
                "ProudctListsText" : Lang.get("ProudctLists_Text"),
                "ProudctListsBtn" : Lang.get("ProudctLists_Btn2"),
                "ProudctListsBtn1" : Lang.get("ProudctLists_Btn1"),
                "egretDoc" : Lang.get("LinkProudctLists_EngineDoc"),
                "ProudctListsImg" : Product1,
                "linkH" : Lang.get("LinkProudctLists_Engine")
            },
            {
                "ProudctListsClass" : `${ProductStyle.ProductLists}`,
                "ProudctListsTitle" : Lang.get("ProudctLists_Title1"),
                "ProudctListsText" : Lang.get("ProudctLists_Text1"),
                "ProudctListsBtn" : Lang.get("ProudctLists_Btn2"),
                "ProudctListsBtn1" : Lang.get("ProudctLists_Btn1"),
                "egretDoc" : Lang.get("LinkProudctLists_WingDoc"),
                "ProudctListsImg" : Product2,
                "linkH" : Lang.get("LinkProudctLists_Wing")
            },
            {
                "ProudctListsClass" : `${ProductStyle.ProductLists}`,
                "ProudctListsTitle" : Lang.get("ProudctLists_Title2"),
                "ProudctListsText" : Lang.get("ProudctLists_Text2"),
                "ProudctListsBtn" : Lang.get("ProudctLists_Btn2"),
                "ProudctListsBtn1" : Lang.get("ProudctLists_Btn1"),
                "egretDoc" : Lang.get("LinkProudctLists_serverDoc"),
                "ProudctListsImg" : Product3,
                "linkH" : Lang.get("LinkProudctLists_server")
            },
            {
                "ProudctListsClass" : `${ProductStyle.ProductLists}`,
                "ProudctListsTitle" : Lang.get("ProudctLists_Title3"),
                "ProudctListsText" : Lang.get("ProudctLists_Text3"),
                "ProudctListsBtn" : Lang.get("ProudctLists_Btn"),
                "ProudctListsBtn1" : Lang.get("ProudctLists_Btn1"),
                "egretDoc" : Lang.get("LinkProudctLists_smartIDEDoc"),
                "ProudctListsImg" : Product4,
                "linkH" : Lang.get("LinkProudctLists_smartIDE")
            },
            {
                "ProudctListsClass" : `${ProductStyle.ProductLists}`,
                "ProudctListsTitle" : Lang.get("ProudctLists_Title4"),
                "ProudctListsText" : Lang.get("ProudctLists_Text4"),
                "ProudctListsBtn" : Lang.get("ProudctLists_Btn"),
                "ProudctListsBtn1" : Lang.get("ProudctLists_Btn1"),
                "egretDoc" : Lang.get("LinkProudctLists_SmartStoreDoc"),
                "ProudctListsImg" : Product5,
                "linkH" : Lang.get("LinkProudctLists_SmartStore")
            },
        ]
        return ( 
            <div>
               <div className={ProductStyle.bannerBJ}>
                    <div className= {`contain`}>
                        <Moon moonClass = {ProductStyle.Moon} imgPath={moon}/>
                        <Moon moonClass = {ProductStyle.Allin} imgPath={Allin}/>
                    </div>
                </div>
                <div className={ProductStyle.father}>
                    {ProductListsJson.map((item , index) => 
                        <ProductLists key={index} item={item}/>
                    )}
                </div>
                <Embellish />
            </div>
        )
    }
}

class Product extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        new WOW({
            live: false
        }).init();
    }
    render() {
        return ( 
            <ProductRoot/>
        )
    }
}
export default Product;