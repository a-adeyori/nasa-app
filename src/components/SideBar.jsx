export default function SideBar(props){
    const {handleToggleModal} = props
    return(
        <div className='sidebar'>
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>The Brutal Martian Landscape</h2>
                <div>
                    <p>Description</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ipsum dolorum veniam quis quibusdam adipisci, earum nostrum asperiores, ex repellendus, libero aliquam molestiae magnam temporibus iusto? Dignissimos quasi quaerat excepturi.
                    </p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}