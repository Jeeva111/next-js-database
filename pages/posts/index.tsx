export default function Posts(props: { posts: Posts[]; }) {
    return (
        <>
            <h3>Posts {props.posts.length}</h3>
            {
                props.posts.map((value:Posts) => {
                    return(
                        <div key={value.id}>
                            <p><b>{value.title}</b></p>
                            <p>{value.body}</p>
                        </div>
                    );
                })
            }
        </>
    );
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return {
        props: {
            posts: data as Posts[]
        }
    }
}

interface Posts {
    userId: string;
    id: string;
    title: string;
    body: string;
}