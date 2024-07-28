export default function MyButton({ user, condition }) {
    return (
        <>
            {condition ? console.log(user) : console.log("HUI")}
            {/* {console.log(user)} */}
            <button className="MyButton" onClick={() => alert(`HUI ${user}`)}>I'm a button, CLICK ME</button>
        </>
    );
}