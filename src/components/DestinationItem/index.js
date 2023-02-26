// Write your code here
import './index.css'

const DestinationItem = props => {
  const {item} = props
  return (
    <li className="list-item">
      <img className="destination-img" src={item.imgUrl} alt={`${item.name}`} />
      <div>
        <p className="destination-name">{item.name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
