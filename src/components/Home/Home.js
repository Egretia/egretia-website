import React, {
    Component
} from 'react';
import axios from 'axios';
import Link from 'react-router-dom/Link';
//引入wow
import {WOW} from 'wowjs';
import Ban from './Home.css'
/* 引入星球 */
import StarBall from '../Persons/StarBall'

import HomeLists from './HomeList';
/* 引入相关图片 */
import shizhong from './img/shizhong.png';
import gongzuoliu from './img/gongzuoliu.png';
import ershiwan from './img/ershiwan.png';
import yonghushu from './img/yonghushu.png';
import firstshadow from './img/firstShadow.png'
/* 滚动计数 */
import CountUp from 'react-countup';

/* 星球数量 */
class StarBalls extends Component{
    render(){
        return (
            <div className={Ban.starBalls}>
                <StarBall/>
                <StarBall/>
                <StarBall/>
                <StarBall/>
                <StarBall/>
            </div>
        )
    }
}
  /* 立即下载 最新功能 */
class DownloadImmediately extends Component{
    LinkHref(linkF){
        window.open(linkF)
    }
    render(){
        const Lang = window.Intl;
        return (
            <div className={Ban.DownloadImmediately}>
                <p onClick={this.LinkHref.bind(this,Lang.get("LinknavHeader_product"))}>{Lang.get("EGRETIA_download")}</p>
                {/* <p><Link to="Product">{Lang.get("EGRETIA_download")}</Link></p> */}
                <h3 onClick={this.LinkHref.bind(this,Lang.get("LinknavHeader_doc"))}>{Lang.get("EGRETIA_Latest")}</h3>
            </div>
        )
    }
}
/* 工作流列表展示 */
class Workflow extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <div className={`${Ban.workflow}`}>
                <ul>
                    <li>
                        <p><img src={shizhong} alt=""/></p>
                        <h3><CountUp start={0} end={Lang.get("workflow_num1")} /> {Lang.get("workflow_company1")}</h3>
                        <h4>{Lang.get("workflow_contain1")}</h4>
                    </li>
                    <li>
                        <p><img src={gongzuoliu} alt=""/></p>
                        <h3><CountUp start={0} end={Lang.get("workflow_num2")} /> {Lang.get("workflow_company2")}</h3>
                        <h4>{Lang.get("workflow_contain2")}</h4>
                    </li>
                    <li>
                        <p><img src={ershiwan} alt=""/></p>
                        <h3><span>{Lang.get("workflow_num3")}</span> {Lang.get("workflow_company3")}</h3>
                        <h4>{Lang.get("workflow_contain3")}</h4>
                    </li>
                    <li>
                        <p><img src={yonghushu} alt=""/></p>
                        <h3><CountUp start={0} end={Lang.get("workflow_num4")} /> {Lang.get("workflow_company4")}</h3>
                        <h4>{Lang.get("workflow_contain4")}</h4>
                    </li>
                </ul>
            </div>
        )
    }
}
/* 浮动呼吸动画 */
class FloatAnimate extends Component{
    render(){
        return (
            /*  data-wow-iteration="infinite" 无限次 */
            <div className={`${this.props.FloatAn}`} data-wow-duration={this.props.duration} data-wow-delay="0s">
            </div>
        )
    }
}
class FloatAnimate1 extends Component{
    constructor(){
        super();
        this.state = {
            animName : false
        }
    }
    componentWillMount () {
        this.timer = setInterval(() => {
          this.setState({ animName: !this.state.animName })
        }, 5000)
    }
    componentWillUnmount () {
        clearInterval(this.timer)
    }
    render(){
        let animName = this.state.animName ? 'slideOutUp' : 'slideInDown';
        return (
            /*  data-wow-iteration="infinite" 无限次 */
            <div className={`${Ban.FloatAnimate} wow ${animName}`} data-wow-duration="5s" data-wow-delay="0s">
            </div>
        )
    }
}
/* 第一个模板显示区域 */
class EgretiaContain extends Component{
    constructor(){
        super();
        this.state = {
            animName : false
        }
    }
    componentWillMount () {
        this.timer = setInterval(() => {
          this.setState({ animName: !this.state.animName })
        }, 4000)
    }
    componentWillUnmount () {
        clearInterval(this.timer)
    }
    render(){
        const Lang = window.Intl;
        let animName = this.state.animName ? 'slideOutUp' : 'slideInDown';
        return (
            <div className={Ban.FathAnim}>
                <div className={`${Ban.EgretiaContain}`}>
                    <div className={`${Ban.RCcontain}`}>
                        <h1>{Lang.get("EGRETIA_RC")} <span>{Lang.get("EGRETIA_Edition")}</span></h1>
                        <p>{Lang.get("EGRETIA_yunText")}</p>
                        <p>{Lang.get("EGRETIA_numText")}</p>
                        <DownloadImmediately />
                    </div>
                    <FloatAnimate FloatAn={`${Ban.FloatAnimate} wow ${animName}`} duration="4s"/>
                    <FloatAnimate1/>
                    <FloatAnimate FloatAn={`${Ban.FloatAnimate} wow`} duration="2.6s"/>
                    <FloatAnimate FloatAn={`${Ban.FloatAnimate} wow`} duration="2.6s"/>
                    <FloatAnimate FloatAn={`${Ban.FloatAnimate} wow`} duration="2.6s"/>
                    <FloatAnimate FloatAn={`${Ban.FloatAnimate} wow`} duration="2.6s"/>
                    <Workflow />
                </div>
            </div>
        )
    }
}
/* 第一个三角阴影区域 */
class FirstShadow extends Component{
    render(){
        return (
            <div className={Ban.firstShadow}>
                <img src={firstshadow} alt=""/>
            </div>
        )
    }
}
class HomeRoot extends Component {
    render() {
        return ( 
            <div>
                <div className={Ban.bannerBJ}>
                    <div className= {`contain`}>
                        <EgretiaContain />
                        <StarBalls />
                    </div>
                </div>
                <FirstShadow />
                <HomeLists />
            </div>
           
        )
    }
}


class Home extends Component {
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
            <HomeRoot/>
        )
    }
}
export default Home;