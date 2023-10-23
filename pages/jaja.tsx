import {NextPageWithLayout} from "@/pages/_app";

const Jaja: NextPageWithLayout = () => {
    return <p>hello world</p>
}

Jaja.getLayout = function getLayout(page: ReactElement) {
    return (
        <div>
            <h2>No layout</h2>
            {page}
        </div>
    )
}

export default Jaja