import Layout from '../components/Layout';


export default function Errors({err}) {

    return (
        <Layout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">{err}</h1>
            </div>
        </Layout>
    );
}
