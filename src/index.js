import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css'
//引入redux状态控制器
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './container/App';      //通过App引入导航
import registerServiceWorker from './registerServiceWorker';

//引入谷歌统计
import ReactGA from 'react-ga';

class Index extends Component{
    componentDidMount(){
        ReactGA.initialize('UA-115624238-1');
        ReactGA.set({page :window.location.pathname});
        ReactGA.pageview(window.location.pathname);
    }
    componentWillReceiveProps(){
        ReactGA.set({page :window.location.pathname});
        ReactGA.pageview(window.location.pathname);
    }
    render(){
        return (
            <App />
        )
    }
}
ReactDOM.render(
    <Index />
//   <Pro />
    , document.getElementById('root')
)
registerServiceWorker();





// //定义reducer
// const reduces = (state = 0 , action) => {
//     switch(action.type){
//         case "ADD":
//             return state + 1;
//             break;
//         case "DES":
//             return state -1;
//             break;
//         default : 
//             return state    
//     }
// }
// //定义store
// const store = createStore(reduces);
// console.log(store.getState())

// class Pro extends Component{
//     //注入store
//     render(){
//         return (
//             <Provider store = {store}>
//                 <App />
//             </Provider>
//         )
//     }
// }





// ReactDOM.render(
//     <BrowserRouter>
//         <App title="父组件向子组件App传值，app向子组件Header传值"/>
//     </BrowserRouter>
//     , document.getElementById('root')
// );

// class Clock extends Component{
//     constructor(props){
//         super(props);
//         this.state = {date : new Date()};
//     }
//     tick(){
//         this.setState({
//             date : new Date()
//         })
//     }
//     componentWillMount(){
//         clearInterval(this.timerID)
//     }
//     componentDidMount(){
//         this.timerID = setInterval(
//             () => {
//                 this.tick();
//             },1000
//         )
//     }
//     render(){
//         return (
//             <div>
//                 <h3>Hello World!</h3>
//                 <p>当前时间: {this.state.date.toLocaleTimeString()}</p>
//             </div>
//         )
//     }
// }


// class Toggle extends Component{
//     constructor(props){
//         super(props)
//         this.state = {isToggleOn : false};
//         this.handerClick = this.handerClick.bind(this)
//     }
//     handerClick(){
//         this.setState({
//             isToggleOn : !this.state.isToggleOn
//         })
//     }
//     render(){
//         return (
//             <button onClick={this.handerClick}>
//                 {this.state.isToggleOn ? "ON" : "OFF"}
//             </button>
//         )
//     }
// }




// const UserGreeting = (props) => {
//     return <h1>Welcome back!</h1>;
// }
// const GuesGreeting = (props) => {
//     return <h1>Please sign up.</h1>
// }
// const Greeting = (props) => {
//     if(props.isLogin){
//         return <UserGreeting />
//     }else{
//         return <GuesGreeting />
//     }
// }
// const LoginButton =  (props) => {
//     return <button onClick={props.onClick}>Login</button>
// }
// const LogoutButton = (props) => {
//     return <button onClick={props.onClick}>Logout</button>
// }
// class LoginControl extends Component{
//     constructor(props){
//         super(props);
//         this.state = {isLogin : false}
//         this.handleLoginClick = this.handleLoginClick.bind(this)
//         this.handleLogoutClick = this.handleLogoutClick.bind(this)
//     }
//     handleLoginClick(){
//         this.setState({
//             isLogin : false
//         })
//     }
//     handleLogoutClick(){
//         this.setState({
//             isLogin : true
//         })
//     }
//     render(){
//         const isLogin = this.state.isLogin;
//         let button;
//         if(isLogin){
//             button = <LoginButton onClick = {this.handleLoginClick}/>
//         }else{
//             button = <LogoutButton onClick = {this.handleLogoutClick} />
//         }
//         return (
//             <div>
//                 <Greeting isLogin={isLogin} />
//                 {button}
//             </div>
//         )
//     }
// }


// const ListItem = (props) => {
//     return <li>{props.value}</li>    
// }

// const Numbers = (props) => {
//     let numbers = props.numbers;
//     let itemList = numbers.map( (number) =>
//        <ListItem key = {number.toString()} value={number}/>
//     )
//     return (
//         <ul>{itemList}</ul>
//     )
// }

// const numbers = [1,2,3,4,5];


// const Blog = (props) => {
//     const sidebar = (
//         <ul>
//             {props.posts.map((post) => 
//                 <li key = {post.id}>{post.title}</li>
//             )}
//         </ul>
//     );
//     const content =  props.posts.map((post) => 
//         (
//             <div key = {post.id}>
//                 <h3>{post.title}</h3>
//                 <h3>{post.content}</h3>
//             </div>
//         )
//     )
//     return (
//         <div>
//             {sidebar}
//             <br/>
//             {content}
//         </div>
//     )
// }   

// const posts = [
//     {id : 1 , title : "测试" , content : "内容"},
//     {id : 2 , title : "测试2" , content : "内容2"}
// ]


// const NumberList = (props) => {
//     const numbers = props.numbers;
//     return (
//         <ul>
//             {
//                 numbers.map((number , index) => 
//                     <li key = {index}>{number.text}</li>
//                 )
//             }
//         </ul>
//     )
// }
// const posts = [{text : "111"} , {text : "222"}];


// class NameForm extends Component{
//     constructor(props){
//         super(props)
//         this.state = {value : ''};
//         this.handerChange = this.handerChange.bind(this)
//         this.handerSubmit = this.handerSubmit.bind(this)
//     }
//     handerChange (event){
//         this.setState({value : event.target.value.toUpperCase()})
//     }
//     handerSubmit (event){
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }
//     render(){
//         return (
//             <form onSubmit = {this.handerSubmit}>
//                 Name : 
//                 <input type= "text" onChange = {(event) => this.handerChange(event)} value={this.state.value}/>
//                 <input type="submit" value = "Submit"/>
//             </form>
//         )
//     }
// }


// class FlavorForm extends Component{
//     constructor(props){
//         super(props);
//         this.state = {value : "coconut"};
//         this.handerChange = this.handerChange.bind(this)
//         this.handerSubmit = this.handerSubmit.bind(this)
//     }
//     handerChange(event){
//         this.setState({value : event.target.value})
//     }
//     handerSubmit(event){
//         alert(this.state.value);
//         event.preventDefault();
//     }
//     render(){
//         return (
//             <form onSubmit={this.handerSubmit}>
//                 <label>
//                     select:
//                     <select value = {this.state.value} onChange={this.handerChange}>
//                         <option value="Grapefruit">Grapefruit</option>
//                         <option value="lime">Lime</option>
//                         <option value="coconut">Coconut</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit"/>
//             </form>
//         )
//     }
// }


// class Reservation extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isHoing : true,
//             numberOfGuests : 2
//         }

//         this.handerInputChange = this.handerInputChange.bind(this)
//     }
//     handerInputChange(event){
//         const target = event.target;
//         const value = target.type ==="checkbox" ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name] : value
//         })
//     }
//     render(){
//         return (
//             <form> 
//                 <label>
//                     Is going : 
//                     <input name = "isGoing" type="checkbox" checked={this.state.isHoing} onChange={this.handerInputChange}/>
//                 </label>
//                 <br/>
//                 <label>
//                     Number of guests :
//                     <input name = "numberOfGuests" type = "number" value = {this.state.numberOfGuests} onChange={this.handerInputChange}/>
//                 </label>
//             </form>
//         )
//     }
// }

// const BoilingVerdict = (props) => {
//     if(props.celsius >= 100){
//         return <p>沸腾</p>
//     }else{
//         return <p>不沸腾</p>
//     }
// }


// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
// };

// class TemperatureInput extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//     }
  
//     handleChange(e) {
//       this.props.onTemperatureChange(e.target.value);
//     }
  
//     render() {
//       const temperature = this.props.temperature;
//       const scale = this.props.scale;
//       return (
//         <fieldset>
//           <legend>Enter temperature in {scaleNames[scale]}:</legend>
//           <input value={temperature}
//                  onChange={this.handleChange} />
//         </fieldset>
//       );
//     }
//   }
// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
//   }
  
//   function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
//   }
//   function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//       return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
//   }
//   class Calculator extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//       this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//       this.state = {temperature: '', scale: 'c'};
//     }
  
//     handleCelsiusChange(temperature) {
//       this.setState({scale: 'c', temperature});
//     }
  
//     handleFahrenheitChange(temperature) {
//       this.setState({scale: 'f', temperature});
//     }
  
//     render() {
//       const scale = this.state.scale;
//       const temperature = this.state.temperature;
//       const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//       const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
  
//       return (
//         <div>
//           <TemperatureInput
//             scale="c"
//             temperature={celsius}
//             onTemperatureChange={this.handleCelsiusChange} />
  
//           <TemperatureInput
//             scale="f"
//             temperature={fahrenheit}
//             onTemperatureChange={this.handleFahrenheitChange} />
  
//           <BoilingVerdict
//             celsius={parseFloat(celsius)} />
  
//         </div>
//       );
//     }
//   }

