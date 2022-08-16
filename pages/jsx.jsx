import Layout from "../components/Layout"

export default function Jsx() {
    const title = <h1>JXS concepts</h1>

    function subtitle() {
        return <h2>{'test'.toUpperCase()}</h2>
    }
    return (
        <Layout title='Understanding JSX'>
            {title}
            {subtitle()}
            <p>
                {JSON.stringify({name: 'Fábio', age: 35})}
            </p>
        </Layout>
    )
}