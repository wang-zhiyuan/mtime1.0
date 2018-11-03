import React,{Component} from 'react'


class Recommend extends Component {

    constructor(props){
        super(props)
        this.state={

    }

    }
    render() {
        return (
        <div className="recommend">
            <div className="titleBar">
                <p>
                    <i></i>
                    <b>你可能感兴趣</b>
                </p>
            </div>
            <div className="productList">
              {
                this.props.goodsList.length!==0?this.props.goodsList.map((item)=>
                  <div className="product" key={item.url} >
                    <a href={item.url}>
                      <img src={item.image} alt=""/>
                      <h3>
                        <span>{item.goodsTip}</span>
                        {item.longName}
                      </h3>
                      <p>￥{item.marketPrice}
                      </p>
                      {
                        item.iconText?
                        item.iconText==="预售"?<i style={{backgroundColor:'#5CD87E'}}>{item.iconText}</i>:<i>{item.iconText}</i>
                        :null
                      }
                    </a>
                  </div>
                ):null
              }
            </div>
        </div>

        );
    }
    componentDidUpdate(){
     console.log(this.props)
    }
   
}
export default Recommend