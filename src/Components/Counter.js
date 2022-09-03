import withCounter from "./HOC/withCounter";

const Counter =(props)=>{
  const {count,incrementCount}=props
  return(
    <div>
      <button type="button" onClick={incrementCount} >Click {count}</button>
    </div>
  )
}
export default withCounter(Counter)