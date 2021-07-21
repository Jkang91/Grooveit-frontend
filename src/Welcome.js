import style from "./welcome.module.css";

function Welcome (){
    return (
        <h2 className={style.welcome}>
            Are you tired of wanting to learn to dance? Grooveit allows you to browse through
            different videos to learn all different types of dance that you want! Simply add 
            the videos to your favorite and watch them how many times you want. It also helps 
            to upload your own progress to see how much better you've gotten.  Hope you get
            into the Groove of things!
        </h2>
    )
}

export default Welcome;