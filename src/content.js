function content(){
    return(

    <div class="center-flex-container flex-item">

      <div class="home">
        <h1>Home</h1>
        <i class="fas fa-magic"></i>
      </div>

      <div class="post-tweet">
        <form>
            <div class="form-group-1">
                    <img src="./img/profile.jpg" alt="profile-pics"></img>
                    <input type="text" placeholder="What's happening?"></input>
            </div>

            <div class="form-group-2">

                    <div class="post-icons">
                        <i class="far fa-image"></i>
                        <i class="far fa-file-image"></i>
                        <i class="fas fa-stream"></i>
                        <i class="far fa-smile"></i>
                        <i class="far fa-calendar-check"></i>
                    </div>

                    <button class="btn" type="submit">Tweet</button>
            </div>
        </form>
      </div>

        <div class="tweets">

          <div class="user-pics">
            <img src="./img/user1.jpg" alt="user1"></img>
          </div>

          <div class="user-content-box">
            
                <div class="user-names">
                <hi class="full-name">Eric Alvarez</hi>
                <p class="user-name">@eric_alvarez</p>
                <p class="time"> . 2hrs</p>
                </div>

                <div class="user-content">
                <p>If the whole world was blind, how many people would you impress?
                    <a href="#">#100daysofcode</a>
                    <a href="#">#javascript</a>
                    <a href="#">#womenwhocode</a>
                </p>

                <img src="./img/content1.jpg" alt="content1"></img>

                </div>
    
                <div class="content-icons">
                <i class="far fa-comment blue"> 273</i>
                <i class="fas fa-retweet green"> 2k</i>
                <i class="far fa-heart red"> 3k</i>
                <i class="fas fa-chevron-up blue"></i>
                </div>
  
          </div>
          
        </div>

        <section class="follow-users-box">

          <div class="follow-header">
            <h1 class="main-text">Who to follow</h1>
            <i class="fas fa-chevron-down"></i>
          </div>

            <div class="follow-user">

                <div class="related-followers">
                <p class="sub-text">
                <i class="fas fa-user"></i>
                Ellie Jamie and 20 others follow</p>

            </div>

            <div class="user-profile">
              <div class="user-pics">

                <img src="./img/user6.jpg" alt="user6">
                </img>

              </div>

              <div class="user-profile-content">
                <div class="title-container">
                  <div class="user-names">
                    <div class="full-name"><h1 class="main-text">Linda Shelton #BlackLivesMatter</h1></div>
                    <div class="user-name"><p class="sub-text">@Linda_shelton</p></div>
                  </div>

                  <div class="follow-btn"><a href="#">follow</a></div>

                </div>
                <div class="bio-container">
                  <p><a href="#">♯WordPress/Php</a> Geek Smiling face with sunglasses <a href="#">♯JavascriptDeveloper</a> Slightly smiling face <a href="#">♯ToolsCreator</a> <a href="#">♯http://webscreenshot.now.sh</a> Always ready to help with code Handshake</p>
                </div>
                
              </div>

            </div>

          </div>

          <div class="follow-user">
            <div class="related-followers">
              <p class="sub-text"><i class="fas fa-user"></i> JavaScript Ninja and 200 others follow</p>
            </div>

            <div class="user-profile">
              <div class="user-pics"><img src="./img/user7.jpg" alt="user7"></img>
              </div>

              <div class="user-profile-content">
                <div class="title-container">
                  <div class="user-names">
                    <div class="full-name"><h1 class="main-text">Gavin Johnson #JavaScript</h1></div>
                    <div class="user-name"><p class="sub-text">@Gavinjohnson</p></div>
                  </div>

                  <div class="follow-btn"><a href="#">follow</a></div>

                </div>
                <div class="bio-container">
                    <p>
                        <a href="#">♯JavascriptDeveloper</a>
                         Avocado | Fire Speaker | Fire Teacher | Youtube - 
                        <a href="#">http://bit.ly/jqqyt</a> |
                        <a href="#"> @twilio</a>
                        Champion | Motto: 
                        <a href="#">#LearnBuildTeach</a>
                    </p>
                </div>
                
              </div>

            </div>

          </div>

          <div class="follow-user">
                <div class="related-followers">
                    <p class="sub-text">
                        <i class="fas fa-user"></i>
                     The Code Boy and 50 others follow</p>
                </div>

                <div class="user-profile">
                    
                <div class="user-pics">
                    <img src="./img/user8.jpg" alt="user8"></img>
                </div>

                <div class="user-profile-content">
                        <div class="title-container">

                        <div class="user-names">
                                <div class="full-name">
                                    <h1 class="main-text">William D Gallucci</h1>
                                </div>

                                <div class="user-name">
                                    <p class="sub-text">@Iamwilliamd_shelton</p>
                                </div>
                        </div>

                        <div class="follow-btn">
                            <a href="#">follow</a>
                        </div>

                        </div>

                        <div class="bio-container">
                        <p>software engineer at 
                            <a href="#">@soonastudios</a>

                            . career switcher. vue + rails. tweeting about tech, books, startups, and big ideas. writing @ 
                            
                            <a href="#">http://jamestucker.dev.</a>
                        </p>
                        </div>
                </div>

                </div>
          </div>

        </section>

    </div>

    )
}

export default content