import Markdown from 'react-markdown'

export default function Recipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <Markdown>{props.text}</Markdown>
        </section>
    )
}



