import React, {
    Component
} from 'react';
import HomeStyles from './HomeList.css'
import axios from 'axios';
import liuchenquan from './img/liuchengyuan.png';
import liuchen from './img/liucheng.png';
import kuozhan from './img/kuozhan.png';
import yiyukuozhan from './img/yiyukuozhan.png';
import jiangbei from './img/jiangbei.png';
import quanqiu from './img/quanqiu.png';
/* 弹框控件 */
import ShowAlert from '../ShowAlert/ShowAlert';
//引入wow
import {WOW} from 'wowjs';
//引入Config
import Config from '../config/Config';
/* 四步图片 */
import shili from './img/shili.png';
import APIwendang from './img/APIwendang.png';
import hello from './img/hello.png';
import kaifazhe from './img/kaifazhe.png';
/* 展示作品图片 */
import showLists_1 from './img/showList_1.png';
import showLists_2 from './img/showList_2.png';
import showLists_3 from './img/showList_3.png';
/* 独家战略图片 */
import exclusiveStrategy from './img/ExclusiveStrategy.png';
/* 合作伙伴图标批量引入 */
const matchs = {
    "cooperation_01" : "cooperation_01",
    "cooperation_08" : "cooperation_08",
    "cooperation_02" : "cooperation_02",
    "cooperation_03" : "cooperation_03",
    "cooperation_04" : "cooperation_04",
    "cooperation_05" : "cooperation_05",
    "cooperation_06" : "cooperation_06",
    "cooperation_07" : "cooperation_07",
    "cooperation_09" : "cooperation_09",
    "cooperation_10" : "cooperation_10",
    "cooperation_11" : "cooperation_11",
    "cooperation_12" : "cooperation_12",
    "cooperation_13" : "cooperation_13",
    "cooperation_14" : "cooperation_14",
    "cooperation_15" : "cooperation_15",
    "cooperation_16" : "cooperation_16",
    "cooperation_17" : "cooperation_17",
    "cooperation_18" : "cooperation_18",
    "cooperation_19" : "cooperation_19",
    "cooperation_20" : "cooperation_20",
    "cooperation_21" : "cooperation_21",
    "cooperation_22" : "cooperation_22",
    "cooperation_23" : "cooperation_23",
    // "cooperation_24" : "cooperation_24",
    "cooperation_25" : "cooperation_25",
    "cooperation_26" : "cooperation_26",
    "cooperation_27" : "cooperation_27",
}
const tickets = Object.keys(matchs).map(item => require("./img/" + item + ".png"));   
class HomeLists extends Component{
    componentDidMount(){  
        new WOW({
            live: false
        }).init();
    }
    render(){
        return (
            <div>
                <HomeList1 />
                <HomeList2 />
                <HomeList3 />
                <FourSteps />
                <ShowWorks />
                <DevelopmentRoute />
                <MediaCoverage />
                <ExclusiveStrategy />
                <CooperativePartner />
                <Subscribe/>
            </div>
        )
    }
}

class FourLists extends Component{
    LinkClick(linkHref){
        window.open(linkHref);
    }
    render(){
        const Lang = window.Intl;
        return (
            <ul className={`${HomeStyles.fourLists}`}>
                <li onClick={this.LinkClick.bind(this,Lang.get("LinkfourSteps_text1"))}>
                    <h3>{Lang.get("fourSteps_title1")}</h3>
                    <p><img src={hello} alt=""/></p>
                    <h4>{Lang.get("fourSteps_text1")}</h4>
                </li>
                <li onClick={this.LinkClick.bind(this,Lang.get("LinkfourSteps_text2"))}>
                    <h3>{Lang.get("fourSteps_title2")}</h3>
                    <p><img src={APIwendang} alt=""/></p>
                    <h4>{Lang.get("fourSteps_text2")}</h4>
                </li>
                <li onClick={this.LinkClick.bind(this,Lang.get("LinkfourSteps_text3"))}>
                    <h3>{Lang.get("fourSteps_title3")}</h3>
                    <p><img src={shili} alt=""/></p>
                    <h4>{Lang.get("fourSteps_text3")}</h4>
                </li>
                <li onClick={this.LinkClick.bind(this,Lang.get("LinkfourSteps_text4"))}>
                    <h3>{Lang.get("fourSteps_title4")}</h3>
                    <p><img src={kaifazhe} alt=""/></p>
                    <h4>{Lang.get("fourSteps_text4")}</h4>
                </li>
            </ul>
        )
    }
}

/* 只需四步 */
class FourSteps extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <div className={HomeStyles.fourSteps}>
                <div className={HomeStyles.fourStepsAfter}>
                    <div className={`contain ${HomeStyles.tuList}`}>
                        <p>{Lang.get("fourSteps_header")}</p>
                        <FourLists/>
                    </div>
                </div>
            </div>
        )
    }
}
/* 展示三款卓越游戏 */
class ShowLists extends Component{
    LinkHref(linkF){
        window.open(linkF)
    }
    render(){
        const Lang = window.Intl;
        return (
            <ul className={`${HomeStyles.showLists}`}>
                <li>
                    <p onClick={this.LinkHref.bind(this,Lang.get("LinkShowLists_title1"))}><img src={showLists_2} alt=""/></p>
                    <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("ShowLists_title1")}</h3>
                    <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("ShowLists_text1")}</h4>
                </li>
                <li>
                    <p onClick={this.LinkHref.bind(this,Lang.get("LinkShowLists_title2"))}><img src={showLists_1} alt=""/></p>
                    <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("ShowLists_title2")}</h3>
                    <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("ShowLists_text2")}</h4>
                </li>
                <li>
                    <p onClick={this.LinkHref.bind(this,Lang.get("LinkShowLists_title3"))}><img src={showLists_3} alt=""/></p>
                    <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("ShowLists_title3")}</h3>
                    <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("ShowLists_text3")}</h4>
                </li>
            </ul>
        )
    }
}
/* 作品展示 */
class ShowWorks extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <div className={HomeStyles.showWorks}>
                <div className={`contain ${HomeStyles.tuList}`}>
                    <p>{Lang.get("showWorks_header")}</p>
                    <ShowLists />
                </div>
                <LeftAssembly imgType={HomeStyles.leftAssembly}/>
            </div>
        )
    }
}
/* 左侧背景组件 */
class LeftAssembly extends Component{
    render(){
        return (
            <div className={this.props.imgType}>
            </div>
        )
    }
}
/* 发展路线 时间轴 */
class DevelopmentRoute extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <div className={HomeStyles.developmentRoute}>
                <h2>{Lang.get("developmentRoute_header")}</h2>
                <div className={HomeStyles.timeAxis}>
                    <div className={`contain`}>
                        <TopTimeAxis />
                        <BottomTimeAxis />
                    </div>
                </div>
            </div>
        )
    }
}
class TopTimeAxis extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <ul className={`${HomeStyles.TopTimeAxis}`} >
                <li>
                    <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_topTitle1")}</h3>
                    <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_topTime1")}</p>
                </li>
                <li>
                    <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_topTitle2")}</h3>
                    <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_topTime2")}</p>
                </li>
                <li>
                    <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_topTitle3")}</h3>
                    <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_topTime3")}</p>
                </li>
                <li>
                    <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_topTitle4")}</h3>
                    <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_topTime4")}</p>
                </li>
                 <li>
                    <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_topTitle5")}</h3>
                    <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_topTime5")}</p>
                </li>
            </ul>
        )
    }
}
class BottomTimeAxis extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <ul className={`${HomeStyles.BottomTimeAxis}`}>
                <li>
                    <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_tbomTime1")}</p>
                    <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_bomTitle1")}</h3>
                </li>
                <li>
                    <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_tbomTime2")}</p>
                    <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_bomTitle2")}</h3>
                </li>
                <li>
                    <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_tbomTime3")}</p>
                    <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_bomTitle3")}</h3>
                </li>
                <li>
                    <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_tbomTime4")}</p>
                    <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get("developmentRoute_bomTitle4")}</h3>
                </li>
            </ul>
        )
    }
}
/* 报道列表 */
class MediaCoverageList extends Component{
    LinkHref(linkF){
        window.open(linkF)
    }
    render(){
        const Lang = window.Intl;
        return (
            <ul className={HomeStyles.MediaList}>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkMedia_link1"))} className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">
                    <h3>{Lang.get("Media_title1")}</h3>
                    <p>{Lang.get("Media_text1")}</p>
                    <h5>
                        {/* <span>{Lang.get("Media_type1")}</span> */}
                        <span></span>
                    </h5>
                </li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkMedia_link2"))} className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">
                    <h3>{Lang.get("Media_title2")}</h3>
                    <p>{Lang.get("Media_text2")}</p>
                    <h5>
                        <span></span>
                    </h5>
                </li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkMedia_link3"))} className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">
                    <h3>{Lang.get("Media_title3")}</h3>
                    <p>{Lang.get("Media_text3")}</p>
                    <h5>
                        <span></span>
                    </h5>
                </li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkMedia_link4"))} className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">
                    <h3>{Lang.get("Media_title4")}</h3>
                    <p>{Lang.get("Media_text4")}</p>
                    <h5>
                        <span></span>
                    </h5>
                </li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkMedia_link5"))} className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" data-wow-offset="10"  
            data-wow-iteration="1">
                    <h3>{Lang.get("Media_title5")}</h3>
                    <p>{Lang.get("Media_text5")}</p>
                    <h5>
                        <span></span>
                    </h5>
                </li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkMedia_link6"))} className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" data-wow-offset="10"  
            data-wow-iteration="1">
                    <h3>{Lang.get("Media_title6")}</h3>
                    <p>{Lang.get("Media_text6")}</p>
                    <h5>
                        <span></span>
                    </h5>
                </li>
            </ul>
        )
    }
}
/* 媒体报道 */
class MediaCoverage extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <div className={HomeStyles.MediaCover}>
                <div className={`contain ${HomeStyles.Media}`}>
                    <p>{Lang.get("Media_header")}</p>
                    <MediaCoverageList />
                </div>
                <LeftAssembly imgType={HomeStyles.leftFang}/>
            </div>
        )
    }
}
/* 独家战略 */
class ExclusiveStrategy extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <div className={HomeStyles.ExclusiveStrategy}>
                <h3>{Lang.get("ExclusiveStrategy_title")}</h3>
                <p><img src={exclusiveStrategy} alt=""/></p>
                <h4>{Lang.get("ExclusiveStrategy_text")}</h4>
            </div>
        )
    }
}
/* 合作伙伴 */
class CooperativePartner extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <div className={HomeStyles.CooperativePartner}>
                <div className={`contain ${HomeStyles.cooperativePartner}`}>
                    <h3>{Lang.get("CooperativePartner_title")}</h3>
                    <CooperativePartnerLists />
                </div>
            </div>
        )
    }
}
class CooperativePartnerLists extends Component{
    render(){
        return (
            <ul>
                {tickets.map((item , index) => <CooperativePartnerList ImgPath={item} key={index}/>)}
            </ul>
        )
    }
}
class CooperativePartnerList extends Component{
    render(){
        return (
            <li><img src={this.props.ImgPath} alt=""/></li>
        )
    }
}

/* 订阅我们的动态 */
class Subscribe extends Component{
    constructor(){
        super();
        this.myRef = React.createRef();
        this.state = {
            show : false,
            alertType : ''
        }
    }
    onHideAlert(){
        this.setState({show : false})
    }
    handerClick(){
        let EmailVal = this.myRef.current.value;
        let regemail = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if(EmailVal === ""){
            this.setState({show : true , alertType : 'Subscribe_alertText'})
            this.myRef.current.focus();
            return false;
        }else if(!(regemail.test(EmailVal))){
            this.setState({show : true , alertType : 'Subscribe_alertText1'})
            this.myRef.current.focus();
            return false;
        };
        //ajax
        axios.get(`${Config}/public/subscribe?email=${EmailVal}`)
            .then(res => {
                this.setState({show : true , alertType : 'Subscribe_alertSuccess'})
            })
    }
    render(){
        const Lang = window.Intl;
        return (
            <div className={`${HomeStyles.Subscribe}`}>
                <h3>{Lang.get("Subscribe_title")}</h3>
                <p><input ref={this.myRef} type="text" placeholder={Lang.get("Subscribe_place")}/></p>
                <h4 onClick={this.handerClick.bind(this)}>{Lang.get("Subscribe_btn")}</h4>
                <ShowAlert
                    AlertShow={this.state.show}
                    ShowAlertTitle={Lang.get("Subscribe_alertTit")}
                    ShowAlertContain={Lang.get(this.state.alertType)}
                    ShowAlertBtn = {Lang.get("Subscribe_alertBtn")}
                    onHideAlert = {this.onHideAlert.bind(this)}
                />
            </div>
        )
    }
}
/* 从上之下三个列表 */
class HomeList1 extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <div className={`${HomeStyles.verifying}`}>
                <div className="contain">
                    <div className={`${HomeStyles.verifyingContain}`}>
                        <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1"><img src={liuchen} alt=""/></p>
                        <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get('HomeList_title1')}</h3>
                        <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get('HomeList_text1')}</h4>
                    </div>
                    <h5><img src={liuchenquan} alt=""/></h5>
                </div>
            </div>
        )
    }
}
class HomeList2 extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <div className={`${HomeStyles.verifying} ${HomeStyles.leftJian}`}>
                <div className="contain">
                    <div className={`${HomeStyles.verifyingContain}`} style={{"float" : "right"}}>
                        <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1"><img src={kuozhan} alt=""/></p>
                        <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get('HomeList_title2')}</h3>
                        <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get('HomeList_text2')}</h4>
                    </div>
                    <h5 style={{"float" : "left" ,"marginLeft" : "0"}}><img src={yiyukuozhan} alt=""/></h5>
                </div>
            </div>
        )
    }
}
class HomeList3 extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <div className={`${HomeStyles.verifying}`} style={{"background" : "rgba(0,0,0,0)"}}>
                <div className="contain">
                    <div className={`${HomeStyles.verifyingContain}`}>
                        <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1"><img src={jiangbei} alt=""/></p>
                        <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get('HomeList_title3')}</h3>
                        <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s" data-wow-offset="10"  
            data-wow-iteration="1">{Lang.get('HomeList_text3')}</h4>
                    </div>
                    <h5><img src={quanqiu} alt=""/></h5>
                </div>
            </div>
        )
    }
}

export default HomeLists;