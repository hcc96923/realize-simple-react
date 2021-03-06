import React from './react';
import ReactDOM from './react-dom';

/* 
    验证类组件
*/
class Conuter extends React.Component {
    constructor(props) {
        super(props); // 继承父组件的props 默认为{}
        this.state = { // 继承父组件的state和setState方法
            count: 0
        }
    }
    // 验证生命周期
    componentDidMount() {
        // 不对setState优化的话，setState会被执行很多次对性能有很大的损耗
        // react会将多个setState合并为一个setState来执行

        // for (let index = 0; index < 100; index++) {
        //     this.setState(prevState => {
        //         return {
        //             count: prevState.count + 1
        //         }
        //     });
        // }
        console.log('componentDidMount');
    };
    componentDidUpdate() {
        
        console.log('componentDidUpdate');
    };
    componentWillUnmount() {
        
        console.log('componentWillUnmount');
    };
    onAddCount() {
        // this.setState( (a, b) => {
        //     return {
        //         count: this.state.count+1
        //     }
        // });
        this.setState({ count: this.state.count+1 });
    };
    // 类组件的render以及函数组件的return都会返回一个react element。而且这个element包含两个属性：type:(string|ReactClass)和props:Object
    // 虚拟DOM是对组件实例的描述也是对DOM节点的描述
    // 每次props的更新都会先反映到虚拟DOM树上面然后才会映射到真实的DOM树上面进行渲染
    render() {
        return (
            <div id="div">
                <h1 id="h1">{this.state.count}</h1>
                <button id="button" onClick={this.onAddCount.bind(this)}>ADD</button>
            </div>
        );
    };
};
/* 
    验证函数组件
*/
function App() {
    return (
        <h1 id="h1">Hello World</h1>
    )
};
// ReactDOM.render就是将虚拟DOM（经过babel插件转换后的jsx代码）渲染成真实的DOM挂载到目标DOM下面
ReactDOM.render(<Conuter />, document.getElementById('root'));