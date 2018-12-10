import React, {
    Component
} from 'react';
import axios from 'axios';
import Link from 'react-router-dom/Link';
//引入wow
import {WOW} from 'wowjs';
import DeveStyle from './Union.css'

import Product1 from './img/diannao.png'
import Union_1 from './img/Union_1.png'

let UnionsImg = {
    "Union_1" : "Union_1",
    "Union_2" : "Union_2",
    "Union_3" : "Union_3",
    "Union_4" : "Union_4",
    "Union_5" : "Union_5",
    "Union_6" : "Union_6",
    "Union_7" : "Union_7",
    "Union_8" : "Union_8",
    "Union_9" : "Union_9",
}
let UnionsImgs = Object.keys(UnionsImg).map(item => require("./img/" + item + ".png"));

/* 各种背景及点缀星球浮动元素 */
class EmbellishLists extends Component{
    render(){
        let showsBall = [];
        let showsBJ = [];
        for (let i = 0; i < 11; i++){
            showsBall.push(<EmbellishListsBall key={i} EmqClass={DeveStyle.posBall}/>)
        }
        for(let i = 0 ; i< 5;i++){
            showsBJ.push(<EmbellishListsBJ key={i} EmbClass={DeveStyle.posBJ}/>)
        }
        return (
            <div className={DeveStyle.ControlF}>
                {/* 虚线及阴影背景 */}
                {showsBJ}
                {/* 球球背景及特效 */}
                <div className={`${DeveStyle.BallF}`}>
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
                {/* <p><span>{this.props.moonText}</span><span>{this.props.moonText1}</span></p> */}
                <p>{this.props.moonText}</p>
            </div>
        )
    }
}

class ProductList extends Component{
    LinkHref(linkF){
        window.open(linkF)
    }
    render(){
        return (
            <li className={DeveStyle.ProductList}>
                <h3>{this.props.item.text}</h3>
            </li>
        )
    }
}
/* 了解跨平台的HTML5 */
class ProductLists extends Component{
    render(){
        const Lang = window.Intl;
        let ulListJson = [{
                "text" : Lang.get("Union_text1"), 
            },{
                "text" : Lang.get("Union_text2"),
            }
        ]
        return (
            <div className={this.props.item.ProudctListsClass}>
                <div className={DeveStyle.fatherP}>
                    <h3>{this.props.item.ProudctListsTitle}</h3>
                </div>
                <ul>
                   {ulListJson.map((item , index) => 
                        <ProductList key={index} item={item}/>
                    )}
                </ul>
            </div>
        )
    }
}
class EgretiaIntroductionList extends Component{
    LinkHref(linkF){
        window.open(linkF)
    }
    render(){
        return (
            <li className={DeveStyle.EgretiaIntroductionList}>
                <h3><img src={this.props.item.tubiao} alt=""/><span> {this.props.item.title}</span></h3>
                <p>{this.props.item.text}</p>
                <h4>
                    <span onClick={this.LinkHref.bind(this,this.props.item.LinkHr)}>{this.props.item.LinkBtn}</span>
                    <span onClick={this.LinkHref.bind(this,this.props.item.LinkHr1)}>{this.props.item.LinkBtn1}</span>
                </h4>
            </li>
        )
    }
}
/* Egretia入门 */
class EgretiaIntroduction extends Component{
    render(){
        const Lang = window.Intl;
        let ulListJson = [{
                "tubiao" :UnionsImgs[0] ,
                "title" : Lang.get("UnionEgretia_text1"),
                "text" : Lang.get("UnionEgretia_title1"), 
                "LinkHr" : Lang.get("LinkUnionEgretia_text1"),
                "LinkHr1" : Lang.get("LinkUnionEgretia_doc1"),
                "LinkBtn" : Lang.get("UnionEgretia_btn"),
                "LinkBtn1" : Lang.get("UnionEgretia_btn1"),
            },{
                "tubiao" :UnionsImgs[1] ,
                "title" : Lang.get("UnionEgretia_text2"),
                "text" : Lang.get("UnionEgretia_title2"), 
                "LinkHr" : Lang.get("LinkUnionEgretia_text2"),
                "LinkHr1" : Lang.get("LinkUnionEgretia_doc2"),
                "LinkBtn" : Lang.get("UnionEgretia_btn"),
                "LinkBtn1" : Lang.get("UnionEgretia_btn1"),
            },{
                "tubiao" :UnionsImgs[2] ,
                "title" : Lang.get("UnionEgretia_text3"),
                "text" : Lang.get("UnionEgretia_title3"), 
                "LinkHr" : Lang.get("LinkUnionEgretia_text3"),
                "LinkHr1" : Lang.get("LinkUnionEgretia_doc3"),
                "LinkBtn" : Lang.get("UnionEgretia_btn"),
                "LinkBtn1" : Lang.get("UnionEgretia_btn1"),
            },{
                "tubiao" :UnionsImgs[3] ,
                "title" : Lang.get("UnionEgretia_text4"),
                "text" : Lang.get("UnionEgretia_title4"), 
                "LinkHr" : Lang.get("LinkUnionEgretia_text4"),
                "LinkHr1" : Lang.get("LinkUnionEgretia_doc4"),
                "LinkBtn" : Lang.get("UnionEgretia_btn"),
                "LinkBtn1" : Lang.get("UnionEgretia_btn1"),
            },{
                "tubiao" :UnionsImgs[4] ,
                "title" : Lang.get("UnionEgretia_text5"),
                "text" : Lang.get("UnionEgretia_title5"), 
                "LinkHr" : Lang.get("LinkUnionEgretia_text5"),
                "LinkHr1" : Lang.get("LinkUnionEgretia_doc5"),
                "LinkBtn" : Lang.get("UnionEgretia_btn"),
                "LinkBtn1" : Lang.get("UnionEgretia_btn1"),
            },{
                "tubiao" :UnionsImgs[5] ,
                "title" : Lang.get("UnionEgretia_text6"),
                "text" : Lang.get("UnionEgretia_title6"), 
                "LinkHr" : Lang.get("LinkUnionEgretia_text6"),
                "LinkHr1" : Lang.get("LinkUnionEgretia_doc6"),
                "LinkBtn" : Lang.get("UnionEgretia_btn"),
                "LinkBtn1" : Lang.get("UnionEgretia_btn1"),
            },{
                "tubiao" :UnionsImgs[6] ,
                "title" : Lang.get("UnionEgretia_text7"),
                "text" : Lang.get("UnionEgretia_title7"), 
                "LinkHr" : Lang.get("LinkUnionEgretia_text7"),
                "LinkHr1" : Lang.get("LinkUnionEgretia_doc7"),
                "LinkBtn" : Lang.get("UnionEgretia_btn"),
                "LinkBtn1" : Lang.get("UnionEgretia_btn1"),
            },{
                "tubiao" :UnionsImgs[7] ,
                "title" : Lang.get("UnionEgretia_text8"),
                "text" : Lang.get("UnionEgretia_title8"), 
                "LinkHr" : Lang.get("LinkUnionEgretia_text8"),
                "LinkHr1" : Lang.get("LinkUnionEgretia_doc8"),
                "LinkBtn" : Lang.get("UnionEgretia_btn"),
                "LinkBtn1" : Lang.get("UnionEgretia_btn1"),
            }
            ,{
                "tubiao" :UnionsImgs[8] ,
                "title" : Lang.get("UnionEgretia_text9"),
                "text" : Lang.get("UnionEgretia_title9"), 
                "LinkHr" : Lang.get("LinkUnionEgretia_text9"),
                "LinkHr1" : Lang.get("LinkUnionEgretia_doc9"),
                "LinkBtn" : Lang.get("UnionEgretia_btn"),
                "LinkBtn1" : Lang.get("UnionEgretia_btn1"),
            }
        ]
        return (
            <div className={DeveStyle.EgretiaIntroduction}>
                <h3>{Lang.get("UnionEgretia_tit")}</h3>
                <ul>
                    {ulListJson.map((item , index) => 
                        <EgretiaIntroductionList key={index} item={item}/>
                    )}
                </ul>
                <h3>{Lang.get("JoinUnionEgretia_tit")}</h3>
            </div>
        )
    }
}
class ProductRoot extends Component {
    render() {
        const Lang = window.Intl;
        const ProductListsJson = [
            {
                "ProudctListsClass" : `${DeveStyle.ProductLists}`,
                "ProudctListsTitle" : Lang.get("Union_tit"),
                "ProudctListsImg" : Product1,
            }
        ]
        return ( 
            <div>
               <div className={DeveStyle.bannerBJ}>
                    <div className= {`contain`}>
                        <Moon moonClass = {DeveStyle.Moon} moonText={Lang.get("Union_navTit1")} moonText1={Lang.get("Union_navTit2")}/>
                    </div>
                </div>
                <div className={DeveStyle.father}>
                    {ProductListsJson.map((item , index) => 
                        <ProductLists key={index} item={item}/>
                    )}
                    <EgretiaIntroduction />
                </div>
                <Embellish />
            </div>
        )
    }
}


class Union extends Component {
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
export default Union;