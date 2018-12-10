import React, {
    Component
} from 'react';
import Ban from '../Home/Home.css'

/* 星球展示 */
class StarBall extends Component{
    constructor(){
        super();
        this.state = {
            animName : false
        }
    }
    componentWillMount () {
        this.timer = setInterval(() => {
          this.setState({ animName: !this.state.animName })
        }, 2000)
    }
    componentWillUnmount () {
        clearInterval(this.timer)
    }
    render(){
      let animName = this.state.animName ? 'fadeOutUp' : 'fadeInDown';
      return (
        // <div className={`${Ban.starBall} wow ${animName}`} data-wow-duration="2s" data-wow-delay="1">
        // </div>
        <div className={`${Ban.starBall}`}>
        </div>
      )
    }
  }


  export default StarBall;
