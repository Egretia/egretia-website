import React, { Component } from 'react';
import Person from './Person/Person'
import PropTypes from 'prop-types';

import Header from '../Header/Header'



class TitleCe extends Component{
    static contextTypes = {
        themeColor : PropTypes.string
    }
    render(){
        const Lang = window.Intl;
        return (
            <h1>{Lang.get("lala")}</h1>
        )
    }
}

class Main extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {/* <Header lang = {this.props.lang} onclick={this.props.click} pageNum={this.props.pageNum}/> */}
                <TitleCe />
            </div>
        )
    }
}


//有状态组件

class Persons extends Component{
    // constructor(props){
    //     super(props)
    // }
    //更新组件声明周期钩子函数

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }

    render(){
        return this.props.persons.map((person , index) => {
            return <Person 
                        myclick={() => this.props.clicked(index)}
                        name = {person.name}
                        count = {person.count}
                        key = {person.id}
                        changed = {(event) => this.props.changed(event , person.id)}
    
                    />
        })
    }
} 

//export default Persons;
export default Main;
