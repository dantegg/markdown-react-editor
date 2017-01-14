/**
 * Created by dantegg on 2017/1/14.
 */
import React,{Component} from 'react'
import marked from 'marked'
import './css/editor.css'
import './css/iconfont/iconfont.css'

class Editor extends Component{
    constructor(props){
        super(props)
        this.state={
            markedText:''
        }
    }

    textChange(e){
        console.log(e.target.value)
        let preText = e.target.value
        let markedText = marked(preText)
        this.setState({
            markedText:markedText
        })
    }

    render(){
        return(
            <div>
                <h1>Editor</h1>
                <div>
                    <div className="editor-button">
                        <div>
                            <i className="iconfont icon-xieti" />
                        </div>
                        <div>
                            <i className="iconfont icon-ai-code" />
                        </div>
                        <div>
                            <i className="iconfont icon-link" />
                        </div>
                        <div>
                            <i className="iconfont icon-707bianjiqi_shanchuxian" />
                        </div>
                        <div>
                            <i className="iconfont icon-jiacu" />
                        </div>
                        <div>
                            <i className="iconfont icon-wuxupailie" />
                        </div>
                    </div>
                    <div className="editor-main">
                        <div className="editor-main-left">
                           <textarea className="editor-main-left-text" onChange={this.textChange.bind(this)}/>
                        </div>
                        <div className="editor-main-right" dangerouslySetInnerHTML={{__html:this.state.markedText}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Editor