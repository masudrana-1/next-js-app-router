const DynamicBlogPage = ({params, searchParams}) => {

    console.log(searchParams)

    return (
        <div>
            <h1>This is Dynamic bloc page of id : {params.id}</h1>
        </div>
    );
};

export default DynamicBlogPage;