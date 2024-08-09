//export a default JS function
//React: the first letter should be capital
//page.tsx: next js will create the routes automaticly /about
const about = "This is a software development company";

const aboutMe = (text: string) => {
    return text;
}
export default function About() {    // return an HTML element
    console.log("adsfasdf");
    return <div>
        <p>About: {aboutMe("text")}</p>
    </div>

}
