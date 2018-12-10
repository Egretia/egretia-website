import React, { Component } from 'react';
//路由配置
import {Link} from 'react-router-dom';
import footer from './Footer.css';
//引入wow
import {WOW} from 'wowjs';
import whileLogo from './img/whiteLogo.png'


const Egretia = () => {
    return (
        <div className= {footer.Egretia}>
            <img src={whileLogo} alt=""/>
        </div>
    )
}

/* 列表项 */
class FooterLists extends Component{
    render(){
        return (
            <ul className={footer.FooterLists}>
                <li><FooterList handPan={this.props.handPan}/></li>
                <li><FooterList1 /></li>
                <li><FooterList2 /></li>
                <li><FooterList3 onclick={this.props.onclick}/></li>
            </ul>
        )
    }
}
/* 列表项 */
class FooterList extends Component{
    handerAddClass(index){
        document.documentElement.scrollTop = document.body.scrollTop =0;
        this.props.handPan(index);
    }
    LinkHref(linkF){
        window.open(linkF)
    }
    render(){
        const Lang = window.Intl;
        return (
            <ul className={`${footer.FooterList}`}>
                <li>
                    <h3>{Lang.get("Footer_wumen_tit")}</h3>
                </li>
                <li>
                    <p><Link onClick={this.handerAddClass.bind(this , 2)} to="/Product">{Lang.get("Footer_wumen_list1")}</Link></p>
                </li>
                <li>
                    <p><Link onClick={this.handerAddClass.bind(this , 3)} to="/Developer">{Lang.get("Footer_wumen_list3")}</Link></p>
                </li>
                <li>
                    <p><Link onClick={this.handerAddClass.bind(this , 4)} to="/Team">{Lang.get("Footer_wumen_list4")}</Link></p>
                </li>
                <li>
                     <p onClick={this.LinkHref.bind(this,Lang.get("Footer_wumen_boke"))}>{Lang.get("Footer_wumen_list5")}</p>
                </li>
            </ul>
        )
    }
}
class FooterList1 extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <ul className={`${footer.FooterList}`}>
                <li>
                    <h3>{Lang.get("Footer_resources_tit")}</h3>
                </li>
                <li>
                    <p><a href={Lang.get("LinkFooter_resources_list1")} target="_blank">{Lang.get("Footer_resources_list1")}</a></p>
                </li>
                <li>
                    <p><a href={Lang.get("LinkFooter_resources_list2")} target="_blank">{Lang.get("Footer_resources_list2")}</a></p>
                </li>
            </ul>
        )
    }
}
class FooterList2 extends Component{
    LinkHref(linkF){
        window.open(linkF)
    }
    render(){
        const Lang = window.Intl;
        return (
            <ul className={`${footer.FooterList}`}>
                <li>
                    <h3>{Lang.get("Footer_join_tit")}</h3>
                </li>
                <li>
                    <p><a href={Lang.get("LinkFooter_resources_list3")} target="_blank">{Lang.get("Footer_resources_list3")}</a></p>
                </li> 
                <li>
                    <p><a href={Lang.get("LinkFooter_resources_list5")} target="_blank">{Lang.get("Footer_resources_list5")}</a></p>
                </li>
                {/* <li onClick={this.LinkHref.bind(this,Lang.get("LinkFooter_join_list1"))}>
                    <p>{Lang.get("Footer_join_list1")}</p>
                </li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkFooter_join_list2"))}>
                    <p>{Lang.get("Footer_join_list2")}</p>
                </li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkFooter_join_list3"))}>
                    <p>{Lang.get("Footer_join_list3")}</p>
                </li> */}
                {/* <li>
                    <p>{Lang.get("Footer_join_list4")}</p>
                </li> */}
            </ul>
        )
    }
}
class FooterList3 extends Component{
    toggleLang(lang){
        this.props.onclick(lang)
    }
    render(){
        const Lang = window.Intl;
        return (
            <ul className={`${footer.FooterList}`}>
                <li>
                    <h3>{Lang.get("Footer_lang_tit")}</h3>
                </li>
                <li>
                    <p onClick={this.toggleLang.bind(this,'zh')}>{Lang.get("Footer_lang_list1")}</p>
                </li>
                <li>
                    <p onClick={this.toggleLang.bind(this,'en')}>{Lang.get("Footer_lang_list2")}</p>
                </li>
            </ul>
        )
    }
}
class BottomBarList extends Component{
    LinkHref(linkF){
        window.open(linkF)
    }
    render(){
        const Lang = window.Intl;
        return (
            <ul>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkFooter_linkin"))}></li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkFooter_reddit"))}></li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkFooter_telegram"))}></li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkFooter_bit"))}></li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkFooter_github"))}></li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkFooter_twitter"))}></li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkFooter_mail"))}></li>
                <li onClick={this.LinkHref.bind(this,Lang.get("LinkFooter_facebook"))}></li>
            </ul>
        )
    }
}
/* 底部图标文字 */
class BottomBar extends Component{
    render(){
        const Lang = window.Intl;
        return (
            <div className={footer.BootomBar}>
                <div>
                    <p>{Lang.get("BootomBar_p1")}</p>
                    <p>{Lang.get("BootomBar_p2")}</p>
                </div>
                <BottomBarList />
            </div>
        )
    }
}
class Footer extends Component {
    componentDidMount(){
        new WOW({
            live: false
        }).init();
    }
    render() {
      return (
        <div className={footer.Footer}>
            <div className={`contain ${footer.FooterWidth}`}>
                <Egretia />
                <FooterLists onclick={this.props.onclick} handPan={this.props.handPan}/>
                <BottomBar />
            </div>
        </div>
      );
    }
  }

export default Footer;