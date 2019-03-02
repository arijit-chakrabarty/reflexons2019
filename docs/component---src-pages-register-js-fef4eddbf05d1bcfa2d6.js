(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,a){"use strict";a.r(t);var n=a(260),s=a.n(n),i=(a(33),a(176),a(262)),r=a.n(i),o=(a(151),a(7)),m=a.n(o),l=a(52),u=a.n(l),h=a(0),c=a.n(h),p=a(146),d=a(263),y=a.n(d);y.a.initializeApp({databaseURL:"https://reflexons-2019.firebaseio.com"});var f=y.a,g=(a(289),a(152)),E=a(150),b=(a(293),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={name:"",institution:"",stream:"",course:"",year:"",phone:"",email:"",teamSize:"",teammembers:"",event:""},a.handleSubmit=a.handleSubmit.bind(u()(u()(a))),a.handleChange=a.handleChange.bind(u()(u()(a))),a}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){null!==this.props.location.state&&this.setState({event:this.props.location.state.event}),null!==this.props.location.state&&(this.maxTeamSize=this.props.location.state.maxTeam,"Solo, Duo, Squad"===this.props.location.state.maxTeam?this.maxTeamSize=4:"1 bot per team"===this.props.location.state.maxTeam?this.maxTeamSize=5:this.maxTeamSize=this.props.location.state.maxTeam,console.log("team size: "+this.props.location.state.maxTeam)),this.register=f.database().ref("registrations")},a.displaySuccess=function(e){var t=document.querySelector(".success-msg");t.innerHTML=e,t.style.height="auto",t.style.display="block",setTimeout(function(){t.style.height="0",t.style.display="none"},3e3)},a.displayError=function(e){var t=document.querySelector(".error-msg");t.innerHTML=e,t.style.height="auto",t.style.display="block",setTimeout(function(){t.style.height="0",t.style.display="none"},3e3)},a.verify=function(e){if(""===e.name)return this.displayError("Enter your name"),!1;if(""===e.institution)return this.displayError("Enter your institution's name"),!1;if(""===e.stream)return this.displayError("Enter your field's name"),!1;if(""===e.course)return this.displayError("Enter your course name"),!1;if(""===e.year)return this.displayError("Enter the year of studies at your institution"),!1;if(isNaN(e.year))return this.displayError("Enter a valid year of study (between 1 and 5)"),!1;if(!/[1-5]/.test(e.year))return this.displayError("Years of studying should be between 1 and 5"),!1;if(""===e.phone)return this.displayError("Enter a phone number (for contacting you)"),!1;if(10!==e.phone.length)return this.displayError("Enter a 10 digit phone number"),!1;if(!/^\d+$/.test(e.phone))return this.displayError("Enter a valid phone number"),!1;if(""===e.email)return this.displayError("Enter an email address (for contacting you)"),!1;if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.email))return this.displayError("Enter a valid email address"),!1;if(this.maxTeamProcess()){if(""===e.teamSize)return this.displayError("Enter your team's size"),!1;if(isNaN(e.teamSize))return this.displayError("Enter your team's size in digits (between 1 and "+this.maxTeamSize+")"),!1;if(parseInt(e.teamSize)<1||parseInt(e.teamSize)>this.maxTeamSize)return this.displayError("Your team's size should be between 1 and "+this.maxTeamSize),!1}return!this.maxTeamProcess()||""!==e.teammembers||(this.displayError("Enter your team members' names"),!1)},a.handleSubmit=function(){var e=r()(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=Object.assign({},this.state),this.verify(a)&&(f.database().ref("registrations").push().set({name:a.name,institution:a.institution,stream:a.stream,course:a.course,year:a.year,phone:a.phone,email:a.email,event:a.event,teamSize:a.teamSize,teamMembers:a.teammembers}),this.setState({name:"",institution:"",stream:"",course:"",year:"",phone:"",email:"",teamSize:"",teammembers:""}),this.displaySuccess("Thank you for registering! We will get back to you soon."),setTimeout(function(){window.location="/"},3e3));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.maxTeamProcess=function(){return this.maxTeamSize>1||"Solo, Duo, Squad"===this.maxTeamSize||"1 bot per team"===this.maxTeamSize},a.handleChange=function(e){switch(e.target.name){case"name":this.setState({name:e.target.value});break;case"institution":this.setState({institution:e.target.value});break;case"stream":this.setState({stream:e.target.value});break;case"course":this.setState({course:e.target.value});break;case"year":this.setState({year:e.target.value});break;case"phone":this.setState({phone:e.target.value});break;case"email":this.setState({email:e.target.value});break;case"teamsize":this.setState({teamSize:e.target.value});break;case"teammember":this.setState({teammembers:e.target.value});break;default:console.log("Error: "+e)}},a.render=function(){var e=this.props.location.state;return null==e||null===e.event||void 0===e.event||""===e.event?c.a.createElement(g.a,null,c.a.createElement(E.a,{title:"Event Registration"}),c.a.createElement("div",{className:"event-not-found"},"First, select an ",c.a.createElement(p.Link,{to:"/#section-2"},"event")," from the homepage",c.a.createElement("span",null,"Tip: open the menu and tap on 'Events'"))):c.a.createElement(g.a,null,c.a.createElement(E.a,{title:e.event+" Registration"}),c.a.createElement("div",{className:"register-form"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"page-heading"},e.event||""," Registration"),c.a.createElement("input",{className:"input-field",type:"text",name:"name",placeholder:"Enter Name",onChange:this.handleChange,value:this.state.name}),c.a.createElement("span",{className:"focus-border"}),c.a.createElement("input",{className:"input-field",type:"text",name:"institution",placeholder:"Name Of Institution",onChange:this.handleChange,value:this.state.institution}),c.a.createElement("input",{className:"input-field",type:"text",name:"stream",placeholder:"Enter Your Stream",onChange:this.handleChange,value:this.state.stream}),c.a.createElement("input",{className:"input-field",type:"text",name:"course",placeholder:"Enter Your Course",onChange:this.handleChange,value:this.state.course}),c.a.createElement("input",{className:"input-field",type:"text",name:"year",placeholder:"Which year (of studies) are you in? [example: 2nd year of college]",onChange:this.handleChange,value:this.state.year}),c.a.createElement("input",{className:"input-field",type:"tel",name:"phone",placeholder:"Enter Your Phone Number",onChange:this.handleChange,value:this.state.phone}),c.a.createElement("input",{className:"input-field",type:"email",name:"email",placeholder:"Enter Your Email ID",onChange:this.handleChange,value:this.state.email}),this.maxTeamProcess()?c.a.createElement("input",{className:"input-field",name:"teamsize",placeholder:"# of Team Members",onChange:this.handleChange,value:this.state.teamSize}):"",this.maxTeamProcess()?c.a.createElement("input",{className:"input-field",name:"teammember",placeholder:"Enter Names Of Team Members",onChange:this.handleChange,value:this.state.teammembers}):"",c.a.createElement("div",{className:"error-msg",style:{height:0,display:"none"}}),c.a.createElement("div",{className:"success-msg",style:{height:0,display:"none"}}),c.a.createElement("input",{className:"input-field submit-button btn btn-lg btn-outline-success",type:"submit"}))))},t}(h.Component));t.default=b},293:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-register-js-fef4eddbf05d1bcfa2d6.js.map