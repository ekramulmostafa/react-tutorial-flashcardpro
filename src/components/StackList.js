import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import stacks from '../data/stacks.json'
import { connect } from 'react-redux'
import { setStack } from '../action'
import { bindActionCreators } from 'redux'

class StackList extends Component {
    render(){
        console.log('stacklist props', this.props)
        return(
            <div>
                {
                    stacks.map(stack => {
                        return(
                            <Link
                                to='/stack'
                                key={ stack.id }
                                onClick={()=>this.props.setStack(stack)}
                            >
                                <h4>{stack.title}</h4>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

function mapDispatchTOProps(dispatch){
    return bindActionCreators({setStack}, dispatch)
}

const connectComponent = connect(null, mapDispatchTOProps)

export default connectComponent(StackList);