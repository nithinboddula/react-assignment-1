// Write your code here
import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyItem
  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="item-container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="logo" />
      <div className="domain-container">
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>

      <button
        data-testid="delete"
        type="button"
        className="button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
