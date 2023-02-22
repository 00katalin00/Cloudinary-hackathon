import { useState } from 'react'

export default function Header () {
    const [count, setCount] = useState(0)

    return (
        <header>
            <div>
                <h1>Texture.img</h1>
                <p>Convert your favourite images to text</p>
            </div>
        </header>
    )
}