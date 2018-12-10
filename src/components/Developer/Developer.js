import React, {
    Component
} from 'react';
import axios from 'axios';
import Link from 'react-router-dom/Link';
//引入wow
import {WOW} from 'wowjs';
import DeveStyle from './Developer.css'

 import Product1 from './img/diannao.png'
 import tubiao1 from './img/tubiao1.png'
 import tubiao2 from './img/tubiao2.png'
 import tubiao3 from './img/tubiao3.png'
 import tubiao4 from './img/tubiao4.png'

 import EgretiaIntroductionListtubiao1 from './img/EgretiaIntroductionListtubiao1.png'
 import EgretiaIntroductionListtubiao2 from './img/EgretiaIntroductionListtubiao2.png'
 import EgretiaIntroductionListtubiao3 from './img/EgretiaIntroductionListtubiao3.png'
 import EgretiaIntroductionListtubiao4 from './img/EgretiaIntroductionListtubiao4.png'

 import weixin from './img/weixin.png'
 import qq from './img/qq.png'

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
                <p><span>{this.props.moonText}</span><span>{this.props.moonText1}</span></p>
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
                <p>
                    <img src={this.props.item.tubiao} alt=""/>
                </p>
                <h3 onClick={this.LinkHref.bind(this, this.props.item.LinkHr)}>{this.props.item.text}</h3>
            </li>
        )
    }
}
/* 了解跨平台的HTML5 */
class ProductLists extends Component{
    render(){
        const Lang = window.Intl;
        let ulListJson = [{
                "tubiao" :tubiao1 ,
                "text" : Lang.get("DeveloperLists_text1"), 
                "LinkHr" : Lang.get("LinkDeveloperLists_text1")
            },{
                "tubiao" :tubiao2 ,
                "text" : Lang.get("DeveloperLists_text2"),
                "LinkHr" : Lang.get("LinkDeveloperLists_text2")
            },{
                "tubiao" :tubiao3 ,
                "text" : Lang.get("DeveloperLists_text3"),
                "LinkHr" : Lang.get("LinkDeveloperLists_text3")
            },{
                "tubiao" :tubiao4 ,
                "text" : Lang.get("DeveloperLists_text4"),
                "LinkHr" : Lang.get("LinkDeveloperLists_text4")
            }
        ]
        return (
            <div className={this.props.item.ProudctListsClass}>
                <div className={DeveStyle.fatherP}>
                    <h3>{this.props.item.ProudctListsTitle}</h3>
                </div>
                <h4>
                    <img src={this.props.item.ProudctListsImg} alt=""/>
                </h4>
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
                <h3 onClick={this.LinkHref.bind(this,this.props.item.LinkHr)}>{this.props.item.text}</h3>
                <pre>{this.props.item.title}</pre>
                <p>
                    <img src={this.props.item.tubiao} alt=""/>
                </p>
            </li>
        )
    }
}
/* Egretia入门 */
class EgretiaIntroduction extends Component{
    render(){
        const Lang = window.Intl;
        let ulListJson = [{
                "tubiao" :EgretiaIntroductionListtubiao1 ,
                "title" : Lang.get("DeveloperEgretia_title1"),
                "LinkHr" : Lang.get("LinkDeveloperEgretia_text1"),
                "text" : Lang.get("DeveloperEgretia_text1") 
            },{
                "tubiao" :EgretiaIntroductionListtubiao2 ,
                "title" : Lang.get("DeveloperEgretia_title2"),
                "LinkHr" : Lang.get("LinkDeveloperEgretia_text2"),
                "text" : Lang.get("DeveloperEgretia_text2") 
            },{
                "tubiao" :EgretiaIntroductionListtubiao3 ,
                "title" : Lang.get("DeveloperEgretia_title3"),
                "LinkHr" : Lang.get("LinkDeveloperEgretia_text3"),
                "text" : Lang.get("DeveloperEgretia_text3") 
            },{
                "tubiao" :EgretiaIntroductionListtubiao4 ,
                "title" : Lang.get("DeveloperEgretia_title4"),
                "LinkHr" : Lang.get("LinkDeveloperEgretia_text4"),
                "text" : Lang.get("DeveloperEgretia_text4") 
            }
        ]
        return (
            <div className={DeveStyle.EgretiaIntroduction}>
                <h3>{Lang.get("DeveloperEgretia_tit")}</h3>
                <ul>
                    {ulListJson.map((item , index) => 
                        <EgretiaIntroductionList key={index} item={item}/>
                    )}
                </ul>
                <p>
                    <span>{Lang.get("DeveloperEgretia_Join")}</span>
                    <img src={weixin} alt=""/>
                    <img src={qq} alt=""/>
                </p>
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
                "ProudctListsTitle" : Lang.get("DeveloperLists_tit"),
                "ProudctListsImg" : Product1,
            }
        ]
        return ( 
            <div>
               <div className={DeveStyle.bannerBJ}>
                    <div className= {`contain`}>
                        <Moon moonClass = {DeveStyle.Moon} moonText={Lang.get("Developer_navTit1")} moonText1={Lang.get("Developer_navTit2")}/>
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