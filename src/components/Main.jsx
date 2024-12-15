export default function Main(props) {
    const {data} = props
    return(
        <div className='imgContainer'>
            <img className="bgImage" src={data?.hdurl} alt="mars-demo-picture"/>
            {/* <img className='bgImage' src='mars.png' alt="mars-demo-picture"/> */}
        </div>
        
        
    )
}