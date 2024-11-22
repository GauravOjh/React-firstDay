import logo from './assets/reactimg.png'

function MainContent(){
    return(
        <div>
            <div>
                <img src={logo} alt="" width='40px'/>
            </div>
            <div>
            <h1>Fun Facts About this React App</h1>

            <ul>
                <li>React is a JavaScript library for building user interfaces.</li>
                <li>It uses reusable components for efficient UI development.</li>
                <li>React optimizes rendering with a virtual DOM.</li>
                <li>Developers describe UI states; React updates the view.</li>
                <li>It has a large community and many supporting libraries.</li>
            </ul>  
        </div>
        </div>
    )
}

export default MainContent;