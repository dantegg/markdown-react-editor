/**
 * Created by dantegg on 2017/1/14.
 */
import React,{Component} from 'react'
// import './highlight/styles/tomorrow-night-blue.css'
//import highlight from 'highlight'
import marked from 'marked'
import './css/editor.css'
import './css/iconfont/iconfont.css'
//
// marked.setOptions({
//     highlight: function (code) {
//         return require('highlight').highlightAuto(code).value;
//     }
// });


class Editor extends Component{
    constructor(props){
        super(props)
        this.state={
            markedText:'',
            inputText:''
        }
    }

    textChange(e){
        //console.log(e.target.value)
        let preText = e.target.value
        let markedText = marked(preText)
        this.setState({
            inputText:preText
        },()=>{
            this.setState({
                markedText:markedText
            })
        })

    }

    xieti(){
        let start = this.refs.text.selectionStart
        let end = this.refs.text.selectionEnd
        start = parseInt(start)
        end = parseInt(end)
        let temp = this.state.inputText
        let preText = temp.substring(0,start)
        let afterText = temp.substring(end)
        let xieTi = '*'+temp.substring(start,end)+'*'
        this.setState({
            inputText:preText+xieTi+afterText,
            markedText:marked(preText+xieTi+afterText)
        },()=>{
            if(start === end) {
                if(this.refs.text.setSelectionRange) {
                    // IE Support
                    this.refs.text.focus();
                    this.refs.text.setSelectionRange(start+1, start+1);
                }else if (this.refs.text.createTextRange) {
                    // Firefox support
                    var range = this.refs.text.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', start+1);
                    range.moveStart('character', start+1);
                    range.select();
                }
                this.setState({
                    markedText:marked(this.refs.text.value)
                })
            }
        })
    }

    link(){
        let start = this.refs.text.selectionStart
        let end = this.refs.text.selectionEnd
        start = parseInt(start)
        end = parseInt(end)
        let temp = this.state.inputText
        let preText = temp.substring(0,start)
        let afterText = temp.substring(end)
        let xieTi = '['+temp.substring(start,end)+'](http://www.example.com)'
        this.setState({
            inputText:preText+xieTi+afterText,
            markedText:marked(preText+xieTi+afterText)
        },()=>{
            if(start === end) {
                if(this.refs.text.setSelectionRange) {
                    // IE Support
                    this.refs.text.focus();
                    this.refs.text.setSelectionRange(start+1, start+1);
                }else if (this.refs.text.createTextRange) {
                    // Firefox support
                    var range = this.refs.text.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', start+1);
                    range.moveStart('character', start+1);
                    range.select();
                }
                this.setState({
                    markedText:marked(this.refs.text.value)
                })
            }
        })
    }

    code(){
        let start = this.refs.text.selectionStart
        let end = this.refs.text.selectionEnd
        start = parseInt(start)
        end = parseInt(end)
        let temp = this.state.inputText
        let preText = temp.substring(0,start)
        let afterText = temp.substring(end)
        let xieTi = '```\n'+temp.substring(start,end)+'\n```'
        this.setState({
            inputText:preText+xieTi+afterText,
            markedText:marked(preText+xieTi+afterText)
        },()=>{
            if(start === end) {
                if(this.refs.text.setSelectionRange) {
                    // IE Support
                    this.refs.text.focus();
                    this.refs.text.setSelectionRange(start+4, start+4);
                }else if (this.refs.text.createTextRange) {
                    // Firefox support
                    var range = this.refs.text.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', start+4);
                    range.moveStart('character', start+4);
                    range.select();
                }
                this.setState({
                    markedText:marked(this.refs.text.value)
                })
            }
        })
    }

    deleteLine(){
        let start = this.refs.text.selectionStart
        let end = this.refs.text.selectionEnd
        start = parseInt(start)
        end = parseInt(end)
        let temp = this.state.inputText
        let preText = temp.substring(0,start)
        let afterText = temp.substring(end)
        let xieTi = '~~'+temp.substring(start,end)+'~~'
        this.setState({
            inputText:preText+xieTi+afterText,
            markedText:marked(preText+xieTi+afterText)
        },()=>{
            if(start === end) {
                if(this.refs.text.setSelectionRange) {
                    // IE Support
                    this.refs.text.focus();
                    this.refs.text.setSelectionRange(start+2, start+2);
                }else if (this.refs.text.createTextRange) {
                    // Firefox support
                    var range = this.refs.text.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', start+2);
                    range.moveStart('character', start+2);
                    range.select();
                }
                this.setState({
                    markedText:marked(this.refs.text.value)
                })
            }
        })
    }

    fontBold(){
        let start = this.refs.text.selectionStart
        let end = this.refs.text.selectionEnd
        start = parseInt(start)
        end = parseInt(end)
        console.log('text',this.refs.text.value)
        console.log('start',start,'end',end)
        let temp = this.state.inputText
        let preText = temp.substring(0,start)
        let afterText = temp.substring(end)
        let xieTi = '**'+temp.substring(start,end)+'**'
        this.setState({
            inputText:preText+xieTi+afterText,
            markedText:marked(preText+xieTi+afterText)
        },()=>{
            if(start === end) {
                if(this.refs.text.setSelectionRange) {
                    // IE Support
                    this.refs.text.focus();
                    this.refs.text.setSelectionRange(start+2, start+2);
                }else if (this.refs.text.createTextRange) {
                    // Firefox support
                    var range = this.refs.text.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', start+2);
                    range.moveStart('character', start+2);
                    range.select();
                }
                this.setState({
                    markedText:marked(this.refs.text.value)
                })
            }
        })
    }

    sortList(){
        let start = this.refs.text.selectionStart
        let end = this.refs.text.selectionEnd
        start = parseInt(start)
        end = parseInt(end)
        let temp = this.state.inputText
        let preText = temp.substring(0,start)
        //console.log('pre',preText)
        let afterText = temp.substring(end)
        let xieTi = '  \n -   \n'
        this.setState({
            inputText:preText+xieTi+afterText,
            markedText:marked(preText+xieTi+afterText)
        },()=>{
            if(start === end) {
                if(this.refs.text.setSelectionRange) {
                    // IE Support
                    this.refs.text.focus();
                    this.refs.text.setSelectionRange(start+6, start+6);
                }else if (this.refs.text.createTextRange) {
                    // Firefox support
                    var range = this.refs.text.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', start+7);
                    range.moveStart('character', start+7);
                    range.select();
                }
                this.setState({
                    markedText:marked(this.refs.text.value)
                })
            }
        })

    }

    render(){
        return(
            <div>
                <h1>Editor</h1>
                <div>
                    <div className="editor-button">
                        <div onClick={this.xieti.bind(this)}>
                            <i className="iconfont icon-xieti" />
                        </div>
                        <div onClick={this.code.bind(this)}>
                            <i className="iconfont icon-ai-code" />
                        </div>
                        <div onClick={this.link.bind(this)}>
                            <i className="iconfont icon-link" />
                        </div>
                        <div onClick={this.deleteLine.bind(this)}>
                            <i className="iconfont icon-707bianjiqi_shanchuxian" />
                        </div>
                        <div onClick={this.sortList.bind(this)}>
                            <i className="iconfont icon-wuxupailie" />
                        </div>
                        <div onClick={this.fontBold.bind(this)}>
                            <i className="iconfont icon-jiacu" />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="editor-main">
                        <div className="editor-main-left">
                           <textarea ref="text" className="editor-main-left-text" value={this.state.inputText} onChange={this.textChange.bind(this)}/>
                        </div>
                        <div className="markdown-body" dangerouslySetInnerHTML={{__html:this.state.markedText}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Editor