import youtubeLogo from './assets/youtube.png'
import burgerMenu from './assets/burger-menu.png'
import searchIcon from './assets/search.png'
import micIcon from './assets/microphone.png'
import plusIcon from './assets/add.png'
import bellIcon from './assets/bell.png'
import userPfp from './assets/hannipfp.jpg'
import mainVideo from './assets/picklerick.jpg'
import channelPfp from './assets/aslogo.png'
import sortBy from './assets/descending.png'
import like from './assets/like.png'
import disLike from './assets/dislike.png'
import shareButton from './assets/share.png'
import downloadButton from './assets/downloads.png'
import clipButton from './assets/scissors.png'



export default function YouTubeWatchTemplate() {
  return (
    <div className="min-h-screen bg-black text-white">
    
      <header className="flex items-center justify-between px-4 h-14 border-b border-neutral-800">
        <div className="flex items-center gap-4">
          <img src={burgerMenu} alt="Burger Menu" className="w-5 l-5 mx-auto"/>
          <img
        src={youtubeLogo}
        alt="YouTube Logo"
        className="w-10 l-10 mx-auto"
      />
          <span className="font-semibold text-lg">YouTube</span>
        </div>

        <div className="flex items-center gap-2 w-full max-w-xl">
          <div className="flex-1 h-9 bg-neutral-800 rounded-l-full flex items-center px-3" >
            <h3>Search</h3>
          </div>
          <div className="w-12 h-9 bg-neutral-700 rounded-r-full flex items-center justify-center">
           <img
             src={searchIcon}
             alt="Search"
             className="w-8 h-8"
            />
           </div>
          <div className="w-9 h-9 bg-neutral-700 rounded-full flex items-center justify-center">
            <img
             src={micIcon}
             alt="Microphone"
             className="w-8 h-8"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-25 h-8 bg-neutral-700 rounded-full flex items-center px-3 gap-2">
            <img
             src={plusIcon}
             alt="Microphone"
             className="w-5 h-5"
            />
            <h4>Create</h4>
          </div>            
          <div className="w-8 h-8  bg-neutral-700 rounded-full flex items-center justify-center">
            <img
            src={bellIcon}
            alt='Bell'
            className="w-5 h-5"
            />
          </div>
          <div className="w-8 h-8 bg-neutral-600 rounded-full items-center justify-center">
            <img
            src={userPfp}
            alt='User Profile Picture'
            className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </header>

      
      <main className="flex gap-6 px-6 py-6">
        
        <div className="flex-1 max-w-5xl">
        
          <div className="aspect-video bg-neutral-800 rounded-xl mb-4">
            <img src={mainVideo} alt="playingVid" 
            className="rounded-xl"/>
          </div>

       
          <h1 className="text-xl font-semibold mb-2">
            Rick and Morty - Pickle Rick Highlights
          </h1>

          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <img src={channelPfp} alt="channel logo"/>
              </div>
              <div>
                <div className="font-semibold">Adult Swim</div>
                <div className="text-sm text-neutral-400">
                  444T subscribers
                </div>
              </div>
              <button className="ml-4 px-4 py-2 bg-neutral-700 text-white rounded-full font-semibold">
                Join
              </button>
              <button className="px-4 py-2 bg-white text-black rounded-full font-semibold">
                Subscribe
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-9 w-36 bg-neutral-800 rounded-full flex items-center justify-center">
  
              <div className="flex items-center space-x-1 px-3">
                <img src={like} alt="upvote" className="h-5 w-5" />
                <h4>14M</h4>
              </div>
              <div className="h-5 border-l border-gray-500 mx-2"></div>
              <div className="flex items-center space-x-1 px-3">
                <img src={disLike} alt="downvote" className="h-5 w-5" />
              </div>
            </div>

              <div className="h-9 w-25 bg-neutral-800 rounded-full flex items-center justify-center gap-2">
              <img src={shareButton} alt="share button" className="w-6 l-6" />
              <h4>Share</h4>
              </div>
              <div className="h-9 w-30 bg-neutral-800 rounded-full flex items-center justify-center gap-2">
              <img src={downloadButton} alt="share button" className="w-5 l-5" />
              <h4>Download</h4>
              </div>
              <div className="h-9 w-25 bg-neutral-800 rounded-full flex items-center justify-center gap-2">
              <img src={clipButton} alt="share button" className="w-6 l-6" />
              <h4>Clip</h4>
              </div>
             
            </div>
          </div>

          
          <div className="bg-neutral-900 rounded-xl p-4 text-sm text-neutral-300">
            <p>
              Rick and Morty - Pickle Rick Highlights |
              Riggity Riggity Rekt Son !!!.
            </p>
            <p className="mt-2 text-neutral-400">
              467Q views • 4 months ago
            </p>
          </div>
          <div className="p-4 flex items-center space-x-5">
            <h1>444 Comments</h1>
            <div className="flex items-center gap-1">
            <img src={sortBy} alt="Sort by" className="w-8 h-8" />
            <h2>Sort By</h2>
            </div>
          </div>
          
        </div>

        
        <aside className="w-[380px] flex-shrink-0">
          <div className="flex gap-2 mb-4">
            <div className="px-3 py-1 bg-white text-black rounded-full text-sm">
              All
            </div>
            <div className="px-3 py-1 bg-neutral-800 rounded-full text-sm">
              From your search
            </div>
            <div className="px-3 py-1 bg-neutral-800 rounded-full text-sm">
              Rick & Morty
            </div>
          </div>

         
          <div className="space-y-4">
            
              <div className="flex gap-3">
                <div className="w-40 aspect-video bg-neutral-800 rounded-lg" />
                <div className="flex-1">
                  <div className="h-4 bg-neutral-700 rounded mb-2" />
                  <div className="h-4 bg-neutral-700 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-neutral-800 rounded w-1/2" />
                </div>
              </div>
            
          </div>
        </aside>
      </main>
    </div>
  );
}



// import './App.css'
// import youtubeLogo from './assets/youtube.png'

// function App() {
//   return (
//     <>
//       <h1 className="text-4xl font-bold text-blue-500">
//         Tailwind v4 is working 🚀
//       </h1>

//       <img
//         src={youtubeLogo}
//         alt="YouTube Logo"
//         className="w-20 mx-auto"
//       />
//     </>
//   )
// }

// export default App
