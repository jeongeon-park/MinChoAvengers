import React from "react";
import '../App.css';
import {Progress} from 'semantic-ui-react';
import slide1 from "../images/cs231n_2017_lecture16/40EA23FD1.jpeg"
import slide2 from "../images/cs231n_2017_lecture16/40EA23FD2.jpeg"
import slide3 from "../images/cs231n_2017_lecture16/40EA23FD3.jpeg"
import slide4 from "../images/cs231n_2017_lecture16/40EA23FD4.jpeg"
import slide5 from "../images/cs231n_2017_lecture16/40EA23FD5.jpeg"
import slide6 from "../images/cs231n_2017_lecture16/40EA23FD6.jpeg"
import slide7 from "../images/cs231n_2017_lecture16/40EA23FD7.jpeg"
import slide8 from "../images/cs231n_2017_lecture16/40EA23FD8.jpeg"
import slide9 from "../images/cs231n_2017_lecture16/40EA23FD9.jpeg"
import slide10 from "../images/cs231n_2017_lecture16/40EA23FD10.jpeg"
import 'semantic-ui-css/semantic.min.css'
import { Clickable } from 'react-clickable';
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";

const databaseURL = "https://minchoom-cs473.firebaseio.com"

// Helper Functions
function flagToImg(flagTime) {
    const slide_timestamps = [0, 42, 60, 220, 420, 600, 715, 732, 960, 985, 1153, 1333, 1520, 1680, 1860, 1950, 1990, 2100, 2270, 2460];
    var i = 0;
    while(slide_timestamps[++i] < flagTime);
    //console.log("closest is ", slide_timestamps[--i]);
    switch (i) {
      case 0:
        return slide1;
      case 1:
        return slide2;
      case 2:
        return slide3;
      case 3:
        return slide4;
      case 4:
        return slide5;
      case 5:
        return slide6;
      case 6:
        return slide7;
      case 7:
        return slide8;
      case 8:
        return slide9;
      case 9:
        return slide10;
  
    }
    return i;
  }

function formatTime(time) {
    time = Math.round(time);
  
    var minutes = Math.floor(time / 60),
        seconds = time - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ":" + seconds;
}

  const override = css`
  position: absolute;
  font-size: 5px;
  height: 5px;
  left: 69vw; 
  margin-top: -3.8vh;
`;

function aggregate(flags){
    var aggregatedFlags = [];
    var sortedArray = flags.sort(function(a, b) {
        return b[1] - a[1];
      }).reverse();
    console.log(sortedArray);
    for (var i=1; i<sortedArray.length; i++){
        var flagTime = sortedArray[i][1];
        var prevFlagTime = sortedArray[i-1][1];
        console.log('aggregate', flagTime, prevFlagTime, sortedArray[i][0], sortedArray[i-1][0]);
        if (flagTime > prevFlagTime + 60 || sortedArray[i][0] !== sortedArray[i-1][0]){
            aggregatedFlags.push(sortedArray[i]);
        }
        
    }
    console.log(aggregatedFlags)
    if(sortedArray.length)
        aggregatedFlags.push(sortedArray[0]);
    return aggregatedFlags;
}

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFlags: this.props.flags,
            questions: [],
            hoverPreview: false,
        };
        this.getFlagData = this.getFlagData.bind(this)
        this.getQuestionData = this.getQuestionData.bind(this)
        this.getUnresolvedQuestions = this.getUnresolvedQuestions.bind(this);

        this.showPreview = this.showPreview.bind(this);
    }

    componentDidMount() {
        this.getFlagData();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.videoTime !== this.props.videoTime){
            this.getFlagData()
            this.getQuestionData()
        }
      }
    
    getFlagData = () => {
        //console.log(this.props.flags)
        fetch( `${databaseURL+'/flags'}/.json`).then(res => {
            if (res.status !== 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(res => {
            if (res) {
                const keys = Object.keys(res)
                
                const filteredFlags = keys.map((k)=>[res[k]['label'], res[k]['time'], k, res[k]['sessionId']])
                .filter(e => (e[1]<=this.props.videoTime))

                this.setState({
                    currentFlags: filteredFlags
                })
                
            }
            
        })
      }

    getQuestionData = () => {
        fetch( `${databaseURL+'/catchup/questions'}/.json`)
        .then(res => {
            if (res.status !== 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(res => {
            if (res) {
                const questionKeys = Object.keys(res)
                const questions = questionKeys.map((k)=>[res[k]['answered'], res[k]['answeredSessions'], res[k]['flagId'], res[k]['flagLabel'], res[k]['questionText'], res[k]['sessionId'], res[k]['time'], k]).sort(function(first, second) {
                    return first[6] - second[6];
                })
                
                this.setState({
                    questions: questions,
                })
            }
            
        })
    }

    getUnresolvedQuestions = (flagId) => {
        const unresolvedQuestions = this.state.questions.filter(e => (e[2] === flagId)).filter(q => (q[0] === false)).length
        return unresolvedQuestions;
    }

    showPreview = (index) => {
        this.setState({hoverPreview: index});
    }



    render() {
        const { flags, videoTime, flagClickHandler, showLoading } = this.props;
        const { currentFlags, hoverPreview } = this.state;
        const { showPreview} = this;
        var allFlags = flags.concat(currentFlags);
        var aggregatedFlags = aggregate(allFlags);
        return (
            <div className="progressBar-container">
                <div className="progressBar">
                    {
                    aggregatedFlags.map((value, index) => 
                    <div onMouseOut = {() => this.setState({hoverPreview: false})}>
                        <div className="preview" hidden={hoverPreview !== index} onMouseOver = {showPreview} onMouseOut = {() => this.setState({hoverPreview: false})} style={{left: value[1]/videoTime*65+"%"}}>
                            <img   className={hoverPreview ? 'questionImg' : 'flag-loading-hidden'} src={flagToImg(value[1])}  />
                            <div className={hoverPreview ? null : 'flag-loading-hidden'}style={{color: 'grey'}}>Flagged at {formatTime(value[1])}</div>
                        </div>
                        <Clickable onClick={() => flagClickHandler(value)}>
                            <div className="flag-tip" key={value[1]} style={{left: value[1]/videoTime*65+"%"}} onMouseOver={showPreview(index)}>
                                { value[0] === "Activity" 
                                    ?
                                    '📝'
                                    :
                                    value[0] === "Emphasis"
                                    ?
                                    '⭐'
                                    :
                                    value[0] === "Exclusive Material"
                                    ?
                                    '➕'
                                    :
                                    value[0] === "Notice"
                                    ?
                                    '📌'
                                    :
                                    value[0] === "Q&A"
                                    ?
                                    '🙋'
                                    :
                                    null
                                }
                                { this.getUnresolvedQuestions(value[2]) >= 1
                                    ?
                                    <div className="unresolvedQuestion">{this.getUnresolvedQuestions(value[2])}</div>
                                    :
                                    null
                                }
                                
                            </div>
                        </Clickable>
                    </div>
                    )}
                    <div className={showLoading ? 'flag-loading' : 'flag-loading-hidden'}> 
                    Flags being aggregated
                    </div>
                    {/* <div className={showLoading ? 'flag-loading' : 'flag-loading'}>  */}
                    <ScaleLoader
                        css={override}
                        height={10}
                        radius={1}
                        color={"black"}
                        loading={showLoading}
                    />
                    {/* </div> */}
                    <Progress percent={95} color='light-grey' />
                    <div className="time-progress">{formatTime(videoTime)}</div>
                </div>
            </div>
        );
    }};