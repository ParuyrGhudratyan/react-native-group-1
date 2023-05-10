import './App.css'; 
import LoginForm from './Form/forms.js';
import {useEffect, useState } from 'react';

// function MyForm(){
//     return(
// <form>
// <input type="email" name="email" placeholder="Username" /><br/><br/>
// <input type="password" name ="password" placeholder="Password" /><br /><br/>
// <span>Remember me</span>
// <input type="checkbox" name = "remember" /><br/><br/>
// <input type="button" name="button" id="button" value="SIGN IN"></input>
// </form>
//     )
// }
// export default MyForm
//----------------------------------------------------------------------------------------
// function App(){
//     const arr = ['a','b','c','d','e','f']
//     return(
//         <>
//         {arr.map((item , index)=><p key={index.toString()}>{item}</p>)}
//         </>
//     )
// }
// export default App
//----------------------------------------------------------------
// function App(){
//     const [count,setCount] = useState(12)
//     const onChenge = ()=>{
//         setCount(count+1)
//     }
// return(
//     <>
//     {count}
//     <button onClick={onChenge}>+</button>
//     </>

// )
// }
// export default App
//--------------------------------------------------------------------
// function App() {
//   let [count, setCount]=useState(12);
//   const countAdd=()=>{
//     setCount(count+1);
//   }
//   const countMinus=()=>{
//     setCount(count-1);
//   }
//   return (
//     <div>
//       <Counter count={count}/>
//       <MyButton title={'+'} count={count} handleClick={countAdd}/>
//       <MyButton title={'-'} count={count} handleClick={countMinus}/>
//     </div>
//   );
// }
// export default App;
//----------------------------------------------------------------
// function App(){
//     const [list,setList] =useState ([1,2,3,4,5]);
//     const changeList = ()=> {
//       setList([...list,list.at(-1)+1]);
//         }
//     return(
//         <>
//         <button onClick= {changeList}>+</button>
//         {list.map((item , index)=><p key={index.toString} style = {{color:item%10? 'black' : 'red'}}>{item}</p>)}
//         </>
//     )
// }
// export default App
//----------------------------------------------------------------------------
// function MyForm(){
//   const [formValues,setFormValues] = useState({email: '',password: '',remember: false})
//   const [isLogedin, setIsLogedin] = useState(false)
//   const onChenge = (event)=>{
//     if(event.target.name === 'remember'){
//       setFormValues({...formValues,[event.target.name]: event.target.checked})
//     }else{
//       setFormValues({...formValues,[event.target.name]: event.target.value})
//     }
//   }
//   const handleLogin = (event)=>{
//     event.preventDefault();
//     if(formValues.remember){
//       localStorage.setItem('userData',JSON.stringify(formValues))
//     }else{
//       sessionStorage.setItem('userData',JSON.stringify(formValues))
//     }
//     setIsLogedin(true)
//   }
//   const logout = ()=>{
//     localStorage.clear()
//     sessionStorage.clear()
//     setIsLogedin(false)
//   }
// useEffect(()=>{
// const userData = localStorag.getItem('userData') || sessionStorage.getItem('userData');
// if(userData){
//   setIsLogedin(true)
// }
//   },[]);
//     return(
//       <div>
//         {isLogedin?
//         <div>
//           <button onClick={logout}>Դուրս Գալ</button>
//           </div>
//           :<LoginForm
//           onChange={onChenge}
//           handleLogin={handleLogin}
//           />
//         }
//       </div>
//     );
//   }
//   export default MyForm
// 