(this.webpackJsonpjs2json=this.webpackJsonpjs2json||[]).push([[0],{21:function(e,t,n){e.exports=n(39)},26:function(e,t,n){},34:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(14),s=n.n(i),r=(n(26),n(15)),c=n(16),l=n(19),d=n(17),u=n(1),h=n(20),j=n(6),g=n.n(j),E=n(18),m=(n(34),n(35),n(36),n(37).js),b="default",p=function(e){function t(e,n){var o;return Object(r.a)(this,t),(o=Object(l.a)(this,Object(d.a)(t).call(this,e,n))).state={jsonEditorValue:b,jsEditorValue:b},o.onChangejsEditor=o.onChangejsEditor.bind(Object(u.a)(o)),o.onChangejsonEditor=o.onChangejsonEditor.bind(Object(u.a)(o)),o.onClickButton=o.onClickButton.bind(Object(u.a)(o)),o.onPastejsonEditor=o.onPastejsonEditor.bind(Object(u.a)(o)),o}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onPastejsonEditor",value:function(e){console.log("onPastejsonEditor:\n"+e.text)}},{key:"onClickButton",value:function(){var e=this.state.jsEditorValue;e=e.replace(/{{([A-Za-z0-9]*)}}/gm,"\xa4$1\xa3"),e=(e=m(e)).replace(/\xa4([A-Za-z0-9]*)\xa3/gm,"{{$1}}"),this.onChangejsEditor(e)}},{key:"onChangejsEditor",value:function(e){console.log("change jsEditor "),document.body.style.background="grey";var t="";e.split("\r\n").forEach((function(e){console.log("onChangejsEditor:\n"+e),t+=JSON.stringify(e),t+=",\n"})),t=t.replace(/,\n$/gm,""),this.setState({jsEditorValue:e,jsonEditorValue:t})}},{key:"onChangejsonEditor",value:function(e){document.body.style.background="grey";var t="";e.split("\n").forEach((function(e){e=(e=(e=(e=(e=e.replace(/^[\t,\ ]*"/gm,"")).replace(/,$/gm,"")).replace(/"$/gm,"")).replace(/\r/gm,"")).replace(/\n/gm,""),t+=e+="\\r\\n"})),t='"'+t+'"',console.log("onChangejsonEditor:\n"+t);try{t=JSON.parse(t),this.setState({jsonEditorValue:e,jsEditorValue:t})}catch(n){this.setState({jsonEditorValue:e}),document.body.style.background="orange"}}},{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"button"},a.a.createElement(E.a,{onClick:this.onClickButton},"F")),a.a.createElement("div",{className:"jsEditor"},a.a.createElement(g.a,{mode:"javascript",theme:"github",onChange:this.onChangejsEditor,value:this.state.jsEditorValue,name:"jsAceEditor",editorProps:{$blockScrolling:!0},style:{width:"740px",height:"500px"}})),a.a.createElement("div",{className:"jsonEditor"},a.a.createElement(g.a,{mode:"javascript",theme:"github",onChange:this.onChangejsonEditor,onPaste:this.onPastejsonEditor,name:"jsonAceEditor",editorProps:{$blockScrolling:!0},value:this.state.jsonEditorValue,wrapEnabled:!1,style:{width:"740px",height:"500px"}})))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.aad8c80c.chunk.js.map