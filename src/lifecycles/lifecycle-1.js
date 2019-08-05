import React , {Component} from 'react'
import '../App.css'

class LifeCycle extends Component{
  constructor(){
    super()

    this.state={
      value1:"state of lifecycle 1",
      value4:""
    }

    console.log("constructor")
  }

  static getDerivedStateFromProps(prevprops, prevstate){
  console.log("=>getDerivedStateFromProps<=" , prevprops,prevstate)

  return{
    value2 : "state of lifecycle2"
  }
  } 


  componentDidMount(){
    console.log("component did mount chalgaya 5 sec baad")
    setTimeout(()=>{
      this.setState({
        value3:"state of lifecycle 3"
      })
    },5000)
  
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate" , nextProps,nextState)
    // console.log("agar return false karogay to value 3 ni dekhaounga")
    // return false

    console.log("agar return true karogay to value 3  dekhaounga")
    return true
    

  }
  

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("=>getSnapshotBeforeUpdate<=" ,prevProps,prevState )

    return "component did update ke paas jaraha hn"
  }


  componentDidUpdate(nextProps,nextState,snapshot){   //jab first time chalega to ("main setState se aya hn ==>",this.state.value4) null hoga
                                                      //jab second time chelga getDerivedStateFromProps se value 3 ki update milegi
                                                      //then ("main setState se aya hn ==>",this.state.value4) "componenet did update chal gaya ha" ye ayega
                                                      //kyun ke ye lifecycle kaam hi tab karega jab isko koi update (getDerivedStateFromProps se) milegi , jo humare case main value 3 se mil rahi ha
        if(this.state.value4 === ""){
     this.setState({
         value4:"componenet did update chal gaya ha"
     })
    }
    console.log("mjhe ye return mila ha ==>",snapshot,nextProps,nextState,"main setState se aya hn ==>",this.state.value4)


  }

  componentWillUnmount(){
    console.log("main component hatt jaane ke baad chalunga")
  }
  
  render(){
    console.log("render")
    return(
      <div>
        <h1>
      Hello{this.props.name}
      </h1>
        <h2>{this.state.value1}</h2>
        <h3>{this.state.value2}</h3>
        <h4>{this.state.value3}</h4>
        <h5>{this.state.value4}</h5>



      </div>
    )
  }
}

export default LifeCycle