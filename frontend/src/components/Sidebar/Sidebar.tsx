export const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebarTop">
        <div className="usernameContainer">
          <button className="usernameButton">
            <img
              src="https://api.dicebear.com/9.x/notionists/svg"
              alt="avatar"
              className="userImage"
            />
            <div className="userDetails">
              <span className="username">Username Placeholder</span>
              <span className="useremail">placeholder@gmail.com</span>
            </div>
            <svg
              stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24"
              strokeLinecap="round" strokeLinejoin="round"
              className="downButton"
              height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
        <div className="navContainer">
          <button className="navButton" >
            <svg
              stroke="currentColor" fill="none" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
              className="homeIcon" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Dashboard</span>
          </button>
          <button className="navButton" >
            <svg
              stroke="currentColor" fill="none" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
              className="homeIcon" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Dashboard</span>
          </button>
          <button className="navButton" >
            <svg
              stroke="currentColor" fill="none" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
              className="homeIcon" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Dashboard</span>
          </button>
          <button className="navButton" >
            <svg
              stroke="currentColor" fill="none" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"
              className="homeIcon" height="1em" width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Dashboard</span>
          </button>
        </div>
      </div>
      <div className="sidebarFooter">


      </div>
    </div>
  )
}