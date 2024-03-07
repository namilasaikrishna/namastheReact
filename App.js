const headingDiv = React.createElement('div',{'id':"container"},[
    React.createElement('div',{'id':'subContainer'},[
        React.createElement('h1',{'id':'heading'},'i am an h1 tag'),
        React.createElement('h2',{'id':'heading2'},'i am an h2 tag')
    ]),
    React.createElement('div',{'id':'main'},[
        React.createElement('h1',{'id':'main-heading'},"i ama second part of heading"),
        React.createElement('h2',{'id':'mainSub-heading'},'i am the second section heading')
    ])
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(headingDiv)