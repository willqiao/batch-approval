(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,a){t.exports=a(37)},30:function(t,e,a){},37:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),i=a(20),r=a.n(i),l=(a(30),a(5)),o=a(6),c=a(8),h=a(7),d=a(9),m=a(11),u=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(h.a)(e).call(this,t))).state={cellClass:"squareStyle"},a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return console.log(this.props,"Cell"),n.a.createElement("div",{onClick:function(e){"squareStyle"===t.state.cellClass?t.setState({cellClass:"circleStyle"}):"circleStyle"===t.state.cellClass?t.setState({cellClass:"squareStyleFill"}):t.setState({cellClass:"squareStyle"})},className:"cellStyle"},n.a.createElement("div",{className:this.state.cellClass}))}}]),e}(s.Component),v=function(t){return n.a.createElement("div",{stlye:{position:"absolute",left:"50%",top:"35%"},className:"preloader-wrapper big "+t.displayProgress},n.a.createElement("div",{className:"spinner-layer spinner-blue-only"},n.a.createElement("div",{className:"circle-clipper left"},n.a.createElement("div",{className:"circle"})),n.a.createElement("div",{className:"gap-patch"},n.a.createElement("div",{className:"circle"})),n.a.createElement("div",{className:"circle-clipper right"},n.a.createElement("div",{className:"circle"}))))},f=(Object(m.b)(function(t){return{}},function(t){return{on_click:function(){return t({type:"good",data:"mydata"})}}})(u),function(t){var e={position:"relative",top:"200px",left:"200px",border:"1px solid",height:"1px",width:"45%",transform:"rotate("+t.seconds+")",transformOrigin:"0 0"};return n.a.createElement("div",Object.assign({style:{position:"relative",border:"1px solid",height:"400px",width:"400px",borderRadius:"50%"}},t),n.a.createElement("div",{style:e}))}),p=function(t){function e(){var t,a;Object(l.a)(this,e);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(c.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(n)))).state={test:"good job",rotateSecond:"0deg",displayProgress:"inactive",intervalHandle:null},a.unmount=!1,a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.unmount=!1;var e=setInterval(function(){t.setState({rotateSecond:6*(new Date).getSeconds()-90+"deg"})},1e3);this.setState({intervalHandle:e}),this.setState({displayProgress:"active"}),fetch("https://localhost:8443/batch-approval/tasks").then(function(t){return t.json()}).then(function(e){!1===t.unmount&&(t.setState({test:e[0].formattedCreatedTime}),t.setState({displayProgress:"inactive"}),console.log(t.state,"test2"))}).catch(function(t){return console.log(t)})}},{key:"componentWillUnmount",value:function(){this.unmount=!0,window.clearInterval(this.state.intervalHandle)}},{key:"render",value:function(){var t=this;return n.a.createElement("div",Object.assign({},this.props,{className:"App"}),n.a.createElement(f,{seconds:this.state.rotateSecond,onClick:function(e){t.setState({displayProgress:"active"}),fetch("https://localhost:8443/batch-approval/tasks").then(function(t){return t.json()}).then(function(e){t.setState({test:e[0].formattedCreatedTime}),t.setState({displayProgress:"inactive"}),console.log(t.state,"test2")}).catch(function(t){return console.log(t)})}}),n.a.createElement("div",null,this.state.rotateSecond," this s i\"s my n'fame fff   : ",(new Date).toISOString()," ",this.props.title),n.a.createElement(v,{displayProgress:this.state.displayProgress}))}}]),e}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(40),b=a(38),k=a(39),E=a(23),O={LOAD_TASKS:"LOAD_TASKS",GET_TASK:"GET_TASK",FETCH_TRACKS:"FETCH_TRACKS",FETCH_USER:"FETCH USER"},y=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.props.onGetTask(this.props.match.params.id)}},{key:"render",value:function(){var t=this;return console.log("hereagain",this.props),n.a.createElement("div",null,n.a.createElement("br",null)," ",this.props.match.params.id,n.a.createElement("button",{className:"waves-effect waves-light btn-small",onClick:function(){return t.props.onGetTask(t.props.match.params.id)}},"Get"),n.a.createElement("div",null,this.props.currentTask.taskName," ",n.a.createElement("br",null),this.props.currentTask.taskId," ",n.a.createElement("br",null),this.props.currentTask.taskCreated," ",n.a.createElement("br",null)))}}]),e}(s.Component),S=Object(m.b)(function(t){return Object(E.a)({},t)},function(t){return{onGetTask:function(e){fetch("https://willdemo-env.mmemiqpc4v.us-east-2.elasticbeanstalk.com:8443/batch-approval/task/"+e).then(function(t){return t.json()}).then(function(e){t({type:O.GET_TASK,task:{taskName:e.taskName,taskId:e.taskId,taskCreated:e.formattedCreatedTime}})}).catch(function(e){t({type:O.GET_TASK,task:{taskId:1,taskName:"Mock Data1",createdBy:"aaaaaa",taskOwner:"will",createdTime:1548932096,formattedCreatedTime:"2019-01-31T04:54:56-06:00[America/Chicago]"}})})}}})(y),j=a(13),w={currentTaskId:0,currentTask:{},alltasks:[]};var M=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://willdemo-env.mmemiqpc4v.us-east-2.elasticbeanstalk.com:8443/batch-approval/tasks").then(function(t){return t.json()}).then(function(e){t.props.loadTasks(e)}).catch(function(e){t.props.loadTasks([{taskId:1,taskName:"Mock Data1",createdBy:"aaaaaa",taskOwner:"will",createdTime:1548932096,formattedCreatedTime:"2019-01-31T04:54:56-06:00[America/Chicago]"},{taskId:2,taskName:"ffffff",createdBy:"aaaaaa",taskOwner:"will",createdTime:1548943928,formattedCreatedTime:"2019-01-31T08:12:08-06:00[America/Chicago]"},{taskId:3,taskName:"ffffff",createdBy:"aaaaaa",taskOwner:"will",createdTime:1548944501,formattedCreatedTime:"2019-01-31T08:21:41-06:00[America/Chicago]"},{taskId:4,taskName:"Mock Data 4",createdBy:"aaaaaa",taskOwner:"will",createdTime:1548947523,formattedCreatedTime:"2019-01-31T09:12:03-06:00[America/Chicago]"}])})}},{key:"render",value:function(){return console.log("userspage",this.props),n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m5"},n.a.createElement("div",{className:"card-panel teal"},n.a.createElement("span",{className:"white-text"},"The data comes from Spring Boot application running on AWS Beanstalk. Enjoy. https://willdemo-env.mmemiqpc4v.us-east-2.elasticbeanstalk.com:8443/")))),n.a.createElement("div",null,n.a.createElement("ul",{className:"collection"},this.props.alltasks.map(function(t){return n.a.createElement("li",{className:"collection-item",key:"userlist"+t.taskId}," ",n.a.createElement(b.a,{to:"/tasks/"+t.taskId},t.taskName+"-"+t.formattedCreatedTime," "))}))))}}]),e}(s.Component),N=Object(m.b)(function(t){return{alltasks:t.alltasks}},function(t){return{loadTasks:function(e){return t({type:O.LOAD_TASKS,alltasks:e})}}})(M),T=a(12),x=a(2),A=new Set(["1","2","3","4","5","6","7","8","9"]),C=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(h.a)(e).call(this,t))).matrix=[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]],console.log(a.matrix),a.state={matrix:a.matrix},a.solveHandler=a.solveHandler.bind(Object(x.a)(Object(x.a)(a))),a.solveHandlerHelper=a.solveHandlerHelper.bind(Object(x.a)(Object(x.a)(a))),a.validateSudoku=a.validateSudoku.bind(Object(x.a)(Object(x.a)(a))),a.flip=a.flip.bind(Object(x.a)(Object(x.a)(a))),a.reset=a.reset.bind(Object(x.a)(Object(x.a)(a))),a.findAll=a.findAll.bind(Object(x.a)(Object(x.a)(a))),a.findAllAvailableOptionMap=a.findAllAvailableOptionMap.bind(Object(x.a)(Object(x.a)(a))),a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"validateSudoku",value:function(){}},{key:"findAllAvailableOptionMap",value:function(t,e){var a=this;if("."===this.matrix[t][e]){var s=new Set;return Array(9).fill(1).forEach(function(e,n){"."===a.matrix[t][n]?s.has("."):s.add(a.matrix[t][n])}),Array(9).fill(1).forEach(function(t,n){"."===a.matrix[n][e]?s.has("."):s.add(a.matrix[n][e])}),Array(3).fill(1).forEach(function(n,i){Array(3).fill(1).forEach(function(n,r){var l=a.matrix[i+3*Math.floor(t/3)][r+3*Math.floor(e/3)];"."===l?s.has("."):s.add(l)})}),new Set(Object(T.a)(A).filter(function(t){return!s.has(t)}))}}},{key:"findAll",value:function(t,e){var a=this,s=(this.matrix[t][e],new Set);return Array(9).fill(1).forEach(function(e,n){"."===a.matrix[t][n]?s.has("."):s.add(a.matrix[t][n])}),Array(9).fill(1).forEach(function(t,n){"."===a.matrix[n][e]?s.has("."):s.add(a.matrix[n][e])}),Array(3).fill(1).forEach(function(n,i){Array(3).fill(1).forEach(function(n,r){var l=a.matrix[i+3*Math.floor(t/3)][r+3*Math.floor(e/3)];"."===l?s.has("."):s.add(l)})}),new Set(Object(T.a)(A).filter(function(t){return!s.has(t)}))}},{key:"solveHandler",value:function(){var t=JSON.parse(JSON.stringify(this.matrix));0==this.solveHandlerHelper(null)?(this.setState({matrix:t}),window.M.toast({html:"No Solution!"})):window.M.toast({html:"Found Solution!"})}},{key:"solveHandlerHelper",value:function(t){for(var e=0;e<9;e++)for(var a=0;a<9;a++){if("."===this.matrix[e][a]){if(null==(t=this.findAllAvailableOptionMap(e,a))||0===t.size)return!1;t=Object(T.a)(t);for(var s=0;s<t.length;s++){console.log("loop ",e,a,t,t[s]),this.matrix[e][a]=t[s];var n=JSON.parse(JSON.stringify(this.matrix));this.setState({matrix:n});var i=this.findAllAvailableOptionMap(e,a);if(1==this.solveHandlerHelper(i))return console.log("find ",e,a,t,i),!0;console.log("cant find ",e,a,t,i)}return this.matrix[e][a]=".",console.log("run out of options ",e,a,t),!1}}return!0}},{key:"flip",value:function(t,e){var a=this.findAll(t,e);if(null!=a&&0!==a.size){a.add("."),a.add(this.matrix[t][e]),console.log(a);for(var s=Object(T.a)(a).sort(),n=this.matrix[t][e],i=0;i<s.length;i++)if(console.log(this.matrix[t][e],s[i]===this.matrix[t][e],s[i],i),s[i]===this.matrix[t][e]){n=i==s.length-1?s[0]:s[i+1];break}this.matrix[t][e]=n;var r=JSON.parse(JSON.stringify(this.matrix));this.setState({matrix:r})}}},{key:"reset",value:function(){this.matrix=[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]],this.setState({matrix:this.matrix})}},{key:"render",value:function(){var t=this;return n.a.createElement("div",null,n.a.createElement("a",{className:"waves-effect waves-light btn",onClick:this.solveHandler},"Start Solving Sudoku"),n.a.createElement("a",{className:"waves-effect waves-light btn",style:{marginLeft:"30px"},onClick:this.reset},"Reset"),n.a.createElement("br",null),n.a.createElement("br",null),this.state.matrix.map(function(e,a){return n.a.createElement("div",{className:"row",key:"row"+a},e.map(function(e,s){return n.a.createElement("div",{className:"squareStyle left",style:{cursor:"pointer"},key:"cell"+s,onClick:function(){return t.flip(a,s)}},e)}))}))}}]),e}(s.Component),H=function(t){function e(){return Object(l.a)(this,e),Object(c.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return 0!==this.props.value?n.a.createElement("div",{className:"cellStyle"},n.a.createElement("div",{className:0===this.props.value?"squareStyle":9===this.props.value?"circleStyle":"squareStyleFill"})):n.a.createElement("div",{onClick:function(){t.props.onclickevent(t.props.i,t.props.j)},style:{cursor:"pointer"},className:"cellStyle"},n.a.createElement("div",{className:0===this.props.value?"squareStyle":9===this.props.value?"circleStyle":"squareStyleFill"}))}}]),e}(s.Component),I=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(c.a)(this,Object(h.a)(e).call(this,t))).state={data:[[0,0,0],[0,0,0],[0,0,0]],isEnd:!1},a.userMove=a.userMove.bind(Object(x.a)(Object(x.a)(a))),a.isOver=a.isOver.bind(Object(x.a)(Object(x.a)(a))),a.win=a.win.bind(Object(x.a)(Object(x.a)(a))),a.computerMove=a.computerMove.bind(Object(x.a)(Object(x.a)(a))),a.generateMove=a.generateMove.bind(Object(x.a)(Object(x.a)(a))),a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"generateMove",value:function(t,e,a){var s=this,n=JSON.parse(JSON.stringify(this.state.data));n[t][e]=a,this.setState({data:n},function(){s.isOver()?window.M.toast({html:s.winner}):9==a&&s.computerMove()})}},{key:"render",value:function(){var t=this;return n.a.createElement("div",null,this.state.data.map(function(e,a){return n.a.createElement("div",{key:"row"+a},e.map(function(e,s){return n.a.createElement(H,{key:"cell"+s,value:t.state.data[a][s],onclickevent:t.userMove,i:a,j:s})}))}))}},{key:"isOver",value:function(){console.log(this.state,"over",this.winner);for(var t=0;t<3;t++){if(1==this.win(this.state.data[t][0]+this.state.data[t][1]+this.state.data[t][2]))return!0;if(1==this.win(this.state.data[0][t]+this.state.data[1][t]+this.state.data[2][t]))return!0}if(console.log(this.state,"over1",this.winner),1==this.win(this.state.data[0][0]+this.state.data[1][1]+this.state.data[2][2]))return!0;if(1==this.win(this.state.data[0][2]+this.state.data[1][1]+this.state.data[2][0]))return!0;console.log(this.state,"over2",this.winner);for(var e=0;e<3;e++)for(var a=0;a<3;a++)if(console.log(this.state.data[e][a],0==this.state.data[e][a]),0==this.state.data[e][a])return!1;return console.log(this.state,"over3",this.winner),this.winner="Tie",!0}},{key:"win",value:function(t){return 3==t?(this.winner="Computer is winning",!0):27==t&&(this.winner="User is winning",!0)}},{key:"userMove",value:function(t,e){this.generateMove(t,e,9)}},{key:"computerMove",value:function(){var t=this.state.data[0][0]+this.state.data[1][1]+this.state.data[2][2];if(2==t)return 0==this.state.data[0][0]&&this.generateMove(0,0,1),0==this.state.data[1][1]&&this.generateMove(1,1,1),void(0==this.state.data[2][2]&&this.generateMove(2,2,1));var e=this.state.data[0][2]+this.state.data[1][1]+this.state.data[2][0];if(2==e)return 0==this.state.data[0][2]&&this.generateMove(0,2,1),0==this.state.data[1][1]&&this.generateMove(1,1,1),void(0==this.state.data[2][0]&&this.generateMove(2,0,1));for(var a=0;a<3;a++){if(2==this.state.data[a][0]+this.state.data[a][1]+this.state.data[a][2])return 0==this.state.data[a][0]&&this.generateMove(a,0,1),0==this.state.data[a][1]&&this.generateMove(a,1,1),void(0==this.state.data[a][2]&&this.generateMove(a,2,1));if(2==this.state.data[0][a]+this.state.data[1][a]+this.state.data[2][a])return 0==this.state.data[0][a]&&this.generateMove(0,a,1),0==this.state.data[1][a]&&this.generateMove(1,a,1),void(0==this.state.data[2][a]&&this.generateMove(2,a,1))}if(18==(t=this.state.data[0][0]+this.state.data[1][1]+this.state.data[2][2]))return 0==this.state.data[0][0]&&this.generateMove(0,0,1),0==this.state.data[1][1]&&this.generateMove(1,1,1),void(0==this.state.data[2][2]&&this.generateMove(2,2,1));if(18==(e=this.state.data[0][2]+this.state.data[1][1]+this.state.data[2][0]))return 0==this.state.data[0][2]&&this.generateMove(0,2,1),0==this.state.data[1][1]&&this.generateMove(1,1,1),void(0==this.state.data[2][0]&&this.generateMove(2,0,1));for(var s=0;s<3;s++){if(18==this.state.data[s][0]+this.state.data[s][1]+this.state.data[s][2])return 0==this.state.data[s][0]&&this.generateMove(s,0,1),0==this.state.data[s][1]&&this.generateMove(s,1,1),void(0==this.state.data[s][2]&&this.generateMove(s,2,1));if(18==this.state.data[0][s]+this.state.data[1][s]+this.state.data[2][s])return 0==this.state.data[0][s]&&this.generateMove(0,s,1),0==this.state.data[1][s]&&this.generateMove(1,s,1),void(0==this.state.data[2][s]&&this.generateMove(2,s,1))}if(0!=(t=this.state.data[0][0]+this.state.data[1][1]+this.state.data[2][2]))if(1!=t)if(0!=(e=this.state.data[0][2]+this.state.data[1][1]+this.state.data[2][0]))if(1!=e){for(var n=0;n<3;n++){var i=this.state.data[n][0]+this.state.data[n][1]+this.state.data[n][2];if(0==i)return void this.generateMove(n,0,1);if(1==i)return void(0==this.state.data[n][2]?this.generateMove(n,2,1):this.generateMove(n,1,1));var r=this.state.data[0][n]+this.state.data[1][n]+this.state.data[2][n];if(0==r)return void this.generateMove(0,n,1);if(1==r)return void(0==this.state.data[2][n]?this.generateMove(2,n,1):this.generateMove(1,n,1))}for(var l=0;l<this.state.data.length;l++)for(var o=0;o<this.state.data[l].length;o++)if(0==this.state.data[l][o])return void this.generateMove(l,o,1)}else 0==this.state.data[2][0]?this.generateMove(2,0,1):this.generateMove(1,1,1);else this.generateMove(0,2,1);else 0==this.state.data[2][2]?this.generateMove(2,2,1):this.generateMove(1,1,1);else this.generateMove(0,0,1)}}]),e}(s.Component),D=Object(j.b)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0,a=JSON.parse(JSON.stringify(t));return e.type===O.GET_TASK&&(a.currentTask=e.task),e.type===O.LOAD_TASKS&&(a.alltasks=e.alltasks),a});r.a.render(n.a.createElement(m.a,{store:D},n.a.createElement(k.a,{basename:"/batch-approval"},n.a.createElement("div",null,n.a.createElement("nav",null,n.a.createElement("div",{className:"nav-wrapper teal lighten-2"},n.a.createElement("div",{className:"brand-logo left",style:{paddingLeft:"20px"}},n.a.createElement("i",{className:"material-icons"},"cloud"),"Demo Site"),n.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},n.a.createElement(g.a,{path:"/",exact:!0,children:function(t){var e=t.match;return n.a.createElement("li",{className:e?"active":""},n.a.createElement(b.a,{to:"/"},n.a.createElement("i",{className:"small material-icons left"},"home"),"Home"))}}),n.a.createElement(g.a,{path:"/games",children:function(t){var e=t.match;return n.a.createElement("li",{className:e?"active":""},n.a.createElement(b.a,{to:"/games"},n.a.createElement("i",{className:"small material-icons left"},"games"),"Game",n.a.createElement("span",{className:"new badge red"})))}}),n.a.createElement(g.a,{path:"/tasks",children:function(t){var e=t.match;return n.a.createElement("li",{className:e?"active":""},n.a.createElement(b.a,{to:"/tasks"},n.a.createElement("i",{className:"small material-icons left"},"people"),"Tasks"))}}),n.a.createElement(g.a,{path:"/settings",children:function(t){var e=t.match;return n.a.createElement("li",{className:e?"active":""},n.a.createElement(b.a,{to:"/settings"},n.a.createElement("i",{className:"small material-icons left"},"settings"),"Tic Tac"))}})))),n.a.createElement("div",{className:"row",style:{padding:"15px"}},n.a.createElement("div",{className:"col l12 "},n.a.createElement(g.a,{path:"/",exact:!0,component:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m5"},n.a.createElement("div",{className:"card-panel teal"},n.a.createElement("span",{className:"white-text"},"Click each block to flip the numbers, and click Solve button to find a solution. Enjoy.")))),n.a.createElement(C,null))}}),n.a.createElement(g.a,{path:"/games",component:function(){return n.a.createElement(p,{id:"test1",title:" Addtional Title. "})}}),n.a.createElement(g.a,{path:"/tasks",exact:!0,component:N}),n.a.createElement(g.a,{path:"/tasks/:id",component:S}),n.a.createElement(g.a,{path:"/settings",component:I})))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.3c8a68ac.chunk.js.map