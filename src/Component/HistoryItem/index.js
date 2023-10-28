import './index.css'

const HistoryItem = props => {
  const {userHistory, deleteUserItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userHistory
  const deleteItem = () => {
    deleteUserItem(id)
  }
  return (
    <li className="listStyle">
      <div className="listConttainer">
        <p className="timeAcc">{timeAccessed}</p>
        <img src={logoUrl} className="img-size" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <div className="img-Container">
        <button type="button" data-testid="delete" onClick={deleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="del-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
