

function rightNavBar(){
    return(
    <div class="left-flex-container flex-item">
        <div class="nav-links">
            <ul>
            <li class="nav-items logo"><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li class="nav-items current-page"><a href="#"><i class="fas fa-home"></i> Home</a></li>
            <li class="nav-items"><a href="#"><i class="fas fa-hashtag"></i> Explore</a></li>
            <li class="nav-items"><a href="#"><i class="far fa-bell"></i> Notifications</a></li>
            <li class="nav-items"><a href="#"><i class="far fa-envelope"></i> Messages</a></li>
            <li class="nav-items"><a href="#"><i class="far fa-bookmark"></i> Bookmarks</a></li>
            <li class="nav-items"><a href="#"><i class="far fa-list-alt"></i> Lists</a></li>
            <li class="nav-items"><a href="#"><i class="far fa-user"></i> Profile</a></li>
            <li class="nav-items"><a href="#"><i class="fas fa-ellipsis-h more-icon"></i> More</a></li>
            </ul>
        </div>
        
        <div class="tweet">
            <a href="#">Tweet</a>
        </div>

        <div class="profile-box">
                <img src="./img/profile.jpg" alt="profile"></img>
                <div class="profile-link">
                    <p class="full-name">David Herbert</p>
                    <p class="user-name">@king.david</p>
                </div>
                <div class="options-icon">
                    <i class="fas fa-caret-down"></i>
                </div>
        </div>
    </div>
    )
}

export default rightNavBar