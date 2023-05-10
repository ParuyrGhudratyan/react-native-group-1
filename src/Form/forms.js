function LoginForm({onChange,handleLogin}){
  return(
    <form className="App">
    <input type="email" name="email" placeholder="Գրեք Ձեր էլ․ հասցեն"  onInput = {onChange}/><br/><br/>
    <input type="password" name ="password" placeholder="Գրեք Ձեր Գաղտնաբառը" onInput = {onChange}/><br/><br/>
    <span>Հիշել ինձ</span>
    <input type="checkbox" name = "remember" /><br/><br/>
    <button onClick =  {handleLogin}>Մուտք</button>
    </form>
  )
}
export default LoginForm