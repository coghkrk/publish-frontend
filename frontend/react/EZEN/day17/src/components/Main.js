import React from 'react';
import { Link, Route } from 'react-router-dom';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
import Test7 from './Test7';
import Test8 from './Test8';
import Test9 from './Test9';
import Test10 from './Test10';
import Test11 from './Test11';
import Test12 from './Test12';
import Test13 from './Test13';


const Main = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/test1">Test1</Link></li>
                    <li><Link to="/test2">Test2</Link></li>
                    <li><Link to="/test3">Test3</Link></li>
                    <li><Link to="/test4">Test4</Link></li>
                    <li><Link to="/test5">Test5</Link></li>
                    <li><Link to="/test6">Test6</Link></li>                   
                    <li><Link to="/test7">Test7</Link></li>                   
                    <li><Link to="/test8">Test8</Link></li>                   
                    <li><Link to="/test9">Test9</Link></li>                   
                    <li><Link to="/test10">Test10</Link></li>                   
                    <li><Link to="/test11">Test11</Link></li>                   
                    <li><Link to="/test12">Test12</Link></li>                   
                    <li><Link to="/test13">Test13</Link></li>                   
                </ul>
            </nav>

            <Route path="/test1" component={Test1} />
            <Route path="/test2" component={Test2} />
            <Route path="/test3" component={Test3} />
            <Route path="/test4" component={Test4} />
            <Route path="/test5" component={Test5} />
            <Route path="/test6" component={Test6} />           
            <Route path="/test7" component={Test7} />           
            <Route path="/test8" component={Test8} />           
            <Route path="/test9" component={Test9} />           
            <Route path="/test10" component={Test10} />           
            <Route path="/test11" component={Test11} />           
            <Route path="/test12" component={Test12} />           
            <Route path="/test13" component={Test13} />           
            
        </div>
    );
};

export default Main;