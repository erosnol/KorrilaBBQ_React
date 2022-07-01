

const Receipt = (props) => {
  const {person, order} = props.receipt;

   return (
    <div>
      <h2>{person}</h2>
      
      <div> 
        <p>Main: {order.main}</p>
        <p>Protein: {order.protein}</p>
        <p>Rice: {order.rice}</p>
        <p>Sauce: {order.sauce}</p>
        <p>Drink: {order.drink}</p>
        <p>Cost: ${order.cost}</p>
      </div>

    </div>
  )
   
}

export default Receipt