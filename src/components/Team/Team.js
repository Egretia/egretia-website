import React, {
    Component
} from 'react';
import axios from 'axios';
import Link from 'react-router-dom/Link';
//引入wow
import {WOW} from 'wowjs';
import TeamStyle from './Team.css'

import inTu from './img/inTu.png'
import tiTu from './img/tiTu.png'

/* 各种背景及点缀星球浮动元素 */
class EmbellishLists extends Component{
    render(){
        let showsBall = [];
        let showsBJ = [];
        for (let i = 0; i < 13; i++){
            showsBall.push(<EmbellishListsBall key={i} EmqClass={TeamStyle.posBall}/>)
        }
        for(let i = 0 ; i< 3;i++){
            showsBJ.push(<EmbellishListsBJ key={i} EmbClass={TeamStyle.posBJ}/>)
        }
        return (
            <div className={TeamStyle.ControlF}>
                {/* 虚线及阴影背景 */}
                {showsBJ}
                {/* 球球背景及特效 */}
                <div className={`${TeamStyle.BallF}`}>
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
/* 产品列表展示区域 */
class ProductLists extends Component{
    LinkHref(linkF){
        window.open(linkF)
    }
    render(){
        return (
            <li className={TeamStyle.teamListClass}>
                <h3 className="wow flipInX" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="10"  
            data-wow-iteration="1"></h3>
                <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="10"  
            data-wow-iteration="1">{this.props.item.teamListName}</p>
                <h4 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="10"  
            data-wow-iteration="1">{this.props.item.teamListPosition}</h4>
                <h5 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="10"  
            data-wow-iteration="1"><img onClick={this.LinkHref.bind(this,this.props.item.LinkteamList)} src={this.props.item.teamListImg1} alt=""/><img onClick={this.LinkHref.bind(this,this.props.item.LinkteamList)} src={this.props.item.teamListImg2} alt=""/></h5>
                <h6 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="10"  
            data-wow-iteration="1">{this.props.item.teamListCon}</h6>
            </li>
        )
    }
}
/* 加入JoinEgretia */
class JoinEgretia extends Component{
    LinkHref(linkF){
        window.open(linkF)
    }
    render(){
        const Lang = window.Intl;
        return (
            <div className={`${TeamStyle.JoinEgretia} wow fadeInUp`} data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset="10"  
            data-wow-iteration="1">
                <h3>{Lang.get("Team_JoinEgretia")}</h3>
                <p onClick={this.LinkHref.bind(this,Lang.get("LinkTeam_recruit"))}>{Lang.get("Team_recruit")}</p>
            </div>
        )
    }
}
class TeamRoot extends Component {
    render() {
        const Lang = window.Intl;
        const ProductListsJson = [
            {
                "teamListName" : Lang.get("Team_name"),
                "teamListPosition" : Lang.get("Team_position"),
                "teamListImg1" : inTu,
                "teamListImg2" : tiTu,
                "teamListCon" : Lang.get("Team_content"),
                "LinkteamList" : Lang.get("LinkTeam_in1"),
            },
            {
                "teamListName" : Lang.get("Team_name1"),
                "teamListPosition" : Lang.get("Team_position1"),
                "teamListImg1" : inTu,
                "teamListImg2" : tiTu,
                "teamListCon" : Lang.get("Team_content1"),
                "LinkteamList" : Lang.get("LinkTeam_in2"),
            },
            {
                "teamListName" : Lang.get("Team_name2"),
                "teamListPosition" : Lang.get("Team_position"),
                "teamListImg1" : inTu,
                "teamListImg2" : tiTu,
                "teamListCon" : Lang.get("Team_content2"),
                "LinkteamList" : Lang.get("LinkTeam_in3"),
            },
            {
                "teamListName" : Lang.get("Team_name3"),
                "teamListPosition" : Lang.get("Team_position"),
                "teamListImg1" : inTu,
                "teamListImg2" : tiTu,
                "teamListCon" : Lang.get("Team_content3"),
                "LinkteamList" : Lang.get("LinkTeam_in4"),
            },
            {
                "teamListName" : Lang.get("Team_name4"),
                "teamListPosition" : Lang.get("Team_position"),
                "teamListImg1" : inTu,
                "teamListImg2" : tiTu,
                "teamListCon" : Lang.get("Team_content4"),
                "LinkteamList" : Lang.get("LinkTeam_in5"),
            }
        ]
        /* 顾问JSON列表 */
        const AdviserListsJson = [
            {
                "teamListName" : Lang.get("Team_name5"),
                "teamListPosition" : Lang.get("Team_position"),
                "teamListImg1" : inTu,
                "teamListImg2" : tiTu,
                "teamListCon" : Lang.get("Team_content5"),
            },
            {
                "teamListName" : Lang.get("Team_name6"),
                "teamListPosition" : Lang.get("Team_position"),
                "teamListImg1" : inTu,
                "teamListImg2" : tiTu,
                "teamListCon" : Lang.get("Team_content6"),
            },
            {
                "teamListName" : Lang.get("Team_name7"),
                "teamListPosition" : Lang.get("Team_position"),
                "teamListImg1" : inTu,
                "teamListImg2" : tiTu,
                "teamListCon" : Lang.get("Team_content7"),
            },
            {
                "teamListName" : Lang.get("Team_name8"),
                "teamListPosition" : Lang.get("Team_position"),
                "teamListImg1" : inTu,
                "teamListImg2" : tiTu,
                "teamListCon" : Lang.get("Team_content8"),
            }

        ]
        return ( 
            <div>
               <div className={TeamStyle.bannerBJ}>
                </div>
                <div className= {`contain`}>
                    <div className={TeamStyle.teamList}>
                        <h3>{Lang.get("Team_tit1")}</h3>
                        <ul>
                            {ProductListsJson.map((item , index) => 
                                <ProductLists key={index} item={item}/>
                            )}
                        </ul>
                        <h3>{Lang.get("Team_tit2")}</h3>
                        <ul>
                            {AdviserListsJson.map((item , index) => 
                                <ProductLists key={index} item={item}/>
                            )}
                        </ul>
                    </div>

                    {/* 加入Egretia 先期隐藏 */}
                    {/* <JoinEgretia /> */}
                </div>
                <Embellish />
            </div>
        )
    }
}


class Team extends Component {
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
            <TeamRoot/>
        )
    }
}
export default Team;