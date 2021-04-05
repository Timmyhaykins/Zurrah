<template>
  <div class="top-bar">
    <a href="#" id="logo">
      <span>Z</span>
    </a>
    <div class="info">
      <div class="balance-info">
        <div class="total">
          <h2>201 342.00 <span>USD</span></h2>
          <p>Total Balance</p>
        </div>

        <div class="available">
          <h2>35 000 000.00 <span> USD</span></h2>
          <p>Total Balance</p>
        </div>
      </div>

      <div class="profile-info">
        <button>Online Support</button>
        <button>Back Call</button>
        <div class="profile">
          <span class="online"></span>
        </div>
      </div>
    </div>
  </div>

  <div id="nav">
    <router-link to="/">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
      <span>Home</span>
    </router-link>
    <router-link to="/transfers">
      <svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m5.5 13c-.13 0-.258-.051-.354-.146l-5-5c-.195-.195-.195-.512 0-.707l5-5c.144-.144.358-.187.545-.109.187.077.309.26.309.462v2.5h10c.551 0 1 .449 1 1v3c0 .551-.449 1-1 1h-10v2.5c0 .202-.122.385-.309.462-.062.026-.127.038-.191.038zm-4.293-5.5 3.793 3.793v-1.793c0-.276.224-.5.5-.5h10.5v-3h-10.5c-.276 0-.5-.224-.5-.5v-1.793z"/>
      <path d="m18.5 22c-.064 0-.129-.012-.191-.038-.187-.077-.309-.26-.309-.462v-2.5h-10c-.551 0-1-.449-1-1v-3c0-.551.449-1 1-1h10v-2.5c0-.202.122-.385.309-.462.188-.077.402-.035.545.108l5 5c.195.195.195.512 0 .707l-5 5c-.096.096-.224.147-.354.147zm-10.5-7v3h10.5c.276 0 .5.224.5.5v1.793l3.793-3.793-3.793-3.793v1.793c0 .276-.224.5-.5.5z"/>
      </svg>
      <span>Transfers</span>
    </router-link>
    <router-link to="/accounts">
      <svg enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="m482 275.99h-10v-70c0-27.596-19.378-50.736-45.238-56.568l-45.515-78.834c-6.67-11.553-17.44-19.818-30.327-23.271-9.099-2.437-18.481-2.258-27.279 0.398l-33.096-33.097c-19.475-19.473-51.159-19.475-70.634 0l-133.37 133.37h-28.541c-31.981 0-58 26.019-58 58v248c0 31.981 26.019 58 58 58h133c5.522 0 10-4.478 10-10s-4.478-10-10-10h-133c-20.953 0-38-17.047-38-38v-248c0-20.953 17.047-38 38-38h356c20.953 0 38 17.047 38 38v70h-74c-29.775 0-54 24.225-54 54s24.225 54 54 54h74v70c0 20.953-17.047 38-38 38h-133c-5.522 0-10 4.478-10 10s4.478 10 10 10h133c31.981 0 58-26.019 58-58v-70h10c16.542 0 30-13.458 30-30v-48c0-16.541-13.458-30-30-30zm-136.26-209.35c7.726 2.07 14.184 7.025 18.183 13.952l38.915 67.402h-215.55l135.73-78.363c6.926-3.998 14.994-5.062 22.723-2.991zm-111.69-37.875c5.655-5.656 13.176-8.771 21.174-8.771 7.999 0 15.52 3.115 21.175 8.771l28.331 28.331-157.44 90.898h-32.468zm257.95 325.23c0 5.514-4.486 10-10 10h-104c-18.748 0-34-15.252-34-34s15.252-34 34-34h104c5.514 0 10 4.486 10 10z"/>
      <path d="m376.33 319.99c-2.63 0-5.21 1.069-7.07 2.93s-2.93 4.43-2.93 7.07c0 2.63 1.069 5.21 2.93 7.069 1.86 1.86 4.44 2.931 7.07 2.931 2.64 0 5.21-1.07 7.069-2.931 1.87-1.859 2.931-4.439 2.931-7.069s-1.061-5.21-2.931-7.07c-1.859-1.86-4.429-2.93-7.069-2.93z"/>
      <path d="m236 491.99c-2.63 0-5.21 1.069-7.07 2.93s-2.93 4.44-2.93 7.07 1.069 5.21 2.93 7.069c1.86 1.86 4.44 2.931 7.07 2.931s5.21-1.07 7.069-2.931c1.86-1.859 2.931-4.439 2.931-7.069s-1.07-5.21-2.931-7.07c-1.859-1.86-4.439-2.93-7.069-2.93z"/>
      </svg>
      <span>Accounts</span>
    </router-link>
    <router-link to="/payments">
      <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="m35.326 77.205h8.716a1.75 1.75 0 0 0 0-3.5h-8.716a1.75 1.75 0 0 0 0 3.5z"/>
      <path d="m50.78 75.455a1.751 1.751 0 0 0 1.75 1.75h40.144a1.75 1.75 0 0 0 0-3.5h-40.144a1.75 1.75 0 0 0-1.75 1.75z"/>
      <path d="m35.326 88.585h8.716a1.75 1.75 0 1 0 0-3.5h-8.716a1.75 1.75 0 0 0 0 3.5z"/>
      <path d="m92.674 85.085h-40.144a1.75 1.75 0 0 0 0 3.5h40.144a1.75 1.75 0 0 0 0-3.5z"/>
      <path d="m35.326 99.966h8.716a1.75 1.75 0 0 0 0-3.5h-8.716a1.75 1.75 0 0 0 0 3.5z"/>
      <path d="m92.674 96.466h-40.144a1.75 1.75 0 1 0 0 3.5h40.144a1.75 1.75 0 0 0 0-3.5z"/>
      <path d="m57.793 46.715-2.193 2.708a12.462 12.462 0 0 0 7.09 3.255v2.038h2.77v-1.947c4.412-.3 6.938-2.86 6.938-6.359 0-3.712-2.77-5.142-6.938-6.085v-5.725a9.951 9.951 0 0 1 4.321 2.282l2.068-2.8a11.308 11.308 0 0 0 -6.389-2.83v-1.88h-2.768v1.856c-3.744.456-6.269 2.981-6.269 6.267 0 3.591 2.525 4.93 6.269 5.9v5.933a10.4 10.4 0 0 1 -4.899-2.613zm7.667-2.615c2.16.639 3.134 1.278 3.134 2.677 0 1.339-1.065 2.5-3.134 2.739zm-5.2-6.937a2.873 2.873 0 0 1 2.435-2.617v5.054c-1.647-.583-2.438-1.222-2.438-2.439z"/>
      <path d="m64 64.541a22.5 22.5 0 1 0-22.5-22.5 22.522 22.522 0 0 0 22.5 22.5zm0-41.494a19 19 0 1 1-19 19 19.018 19.018 0 0 1 19-19z"/>
      <path d="m106.46 4.557h-84.91a1.75 1.75 0 0 0-1.75 1.75v115.39a1.75 1.75 0 0 0 2.988 1.238l7.253-7.254 7.254 7.254a1.751 1.751 0 0 0 2.475 0l7.253-7.254 7.254 7.254a1.751 1.751 0 0 0 2.475 0l7.253-7.254 7.254 7.254a1.751 1.751 0 0 0 2.475 0l7.253-7.253 7.253 7.253a1.751 1.751 0 0 0 2.475 0l7.254-7.254 7.253 7.254a1.75 1.75 0 0 0 2.988-1.238v-115.39a1.75 1.75 0 0 0-1.75-1.75zm-1.75 112.91-5.5-5.5a1.75 1.75 0 0 0-2.474 0l-7.254 7.254-7.254-7.254a1.75 1.75 0 0 0-2.474 0l-7.254 7.254-7.254-7.254a1.75 1.75 0 0 0-2.474 0l-7.254 7.254-7.254-7.254a1.75 1.75 0 0 0-2.474 0l-7.254 7.254-7.254-7.254a1.75 1.75 0 0 0-2.474 0l-5.5 5.5v-109.41h81.41z"/>
      </svg>
      <span>Payments</span>
    </router-link>
    <router-link to="/support">
      <svg enable-background="new 0 0 420.96 420.96" version="1.1" viewBox="0 0 420.96 420.96" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <path d="m354.48 144c0-79.529-64.471-144-144-144s-144 64.471-144 144c-20.56 2.56-40 16-40 47.2v75.2c0 35.2 24.64 48 48 48h23.2c4.418 0 8-3.582 8-8v-154.88c0-4.418-3.582-8-8-8h-15.2c0-70.692 57.308-128 128-128s128 57.308 128 128h-15.2c-4.418 0-8 3.582-8 8v154.64c0 4.418 3.582 8 8 8h15.2c-2.24 54.96-28.64 67.84-81.36 70.16v-5.36c0-8.837-7.163-16-16-16h-50.32c-8.837 0-16 7.163-16 16v26c0 8.837 7.163 16 16 16h50.48c8.837 0 16-7.163 16-16v-4.64c50.72-2.32 94.56-12.8 97.2-86.64 20.56-2.56 40-16 40-47.2v-75.2c0-31.36-19.36-44.72-40-47.28zm-264.8 14.96v139.2h-15.6c-11.84 0-32-4.16-32-32v-75.2c0-27.6 19.92-32 32-32h15.6zm151.6 233.92v12.16h-50.48v-26h50.48v13.84zm137.2-126.48c0 27.6-19.92 32-32 32h-15.2v-138.88h15.6c11.84 0 32 4.16 32 32l-0.4 74.88z"/>
      </svg>
      <span>Support</span>
    </router-link>
  </div>
  <router-view />
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#app{
  min-height: 100vh;
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 80px 1fr;
}

.top-bar{
  grid-column: 1/3;
  grid-row: 1/2;
}

.top-bar #logo{
  display: inline-block;
  width: 80px;
  height: 80px;
  background-color: dodgerblue; 
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size:30px;
  text-decoration: none;
  box-shadow: 2px 2px 18px #82bdf7;
}

.top-bar #logo:hover{
  box-shadow: 3px 3px 18px #419cf7;
}

#nav{
  grid-column: 1/2;
  grid-row: 2/3;
  display: grid;
  grid-template-rows: repeat(5, 100px );
}

#nav a{
  text-decoration: none;
  background-color: #f3f3f3;
  color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
}

#nav a svg{
  width: 50%;
  fill: #aaa;
  margin-bottom: 5px;
}

#nav .router-link-active{
  color: black;
  font-weight: 700;
  background-color: #fff;
  box-shadow: 0px 3px 18px #ddd;
}

#nav .router-link-active svg{
  fill: #419cf7;
  color: #419cf7;
}

.top-bar{
  display: flex;
}

.top-bar .info{
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.top-bar .info .balance-info{
  display: flex;
}

.top-bar .info .balance-info > div{
  margin-right: 40px;
}

.top-bar .info .balance-info h2{
  font-weight: 500;
}

.top-bar .info .balance-info h2 span{
  font-weight: 500;
  font-size: 15px;
}

.top-bar .info .balance-info p{
  color: #aaa;
}

.top-bar .info .profile-info {
  display: flex;
  align-items: center;
}

.top-bar .info .profile-info button{
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  outline: none;
  background-color: #419cf7;
  color: #fff;
  cursor: pointer;
  margin: 0px 10px;
}

.top-bar .info .profile-info .profile{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #444;
  position: relative;
  display: inline-block;
  margin: 0px 20px;
}

.top-bar .info .profile-info .profile span{
  width: 5px;
  height: 5px;
  border-radius: 50%;
  border: 5px solid #419cf7;
  position: absolute;
  bottom: 0;
  right: 2px;
}
</style>
