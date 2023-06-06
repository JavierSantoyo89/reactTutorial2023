/* eslint-disable react/prop-types */
import { useState } from "react"

function TwitterFollowCard({  userName,  name,  initialIsFollowing  }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const avatar = `https://unavatar.io/${userName}`
  const text = isFollowing ? "Siguiendo" : "Seguir"
  let buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button"
  return (
    <article className="tw-followCard ">
      <header className="tw-followCard-header">
        <img className="tw-followCard-avatar" src={avatar} alt="avatar icon" />

        <div className="tw-followCard-info">
          <strong> {name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}
export default TwitterFollowCard
