import {
  useCreateNewPostMutation,
  useGetAllPostsQuery,
} from "./app/api/jsonPlaceHolderAPI";

function App() {
  const { data, isLoading, error } = useGetAllPostsQuery();
  const [createPost, { data: createdData, error: createError }] =
    useCreateNewPostMutation();

  const details = {
    id: "6",
    title: "Test post",
    user: "Manjunath",
  };

  const sendPost = async () => {
    await createPost(details);
  };

  console.log("created data", createdData);
  console.log("refetch data", data);
  console.log("createError", createError);

  return (
    <div>
      <div className="font-bold text-5xl text-center italic">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error..</p>}
        {createError?.error && <p>{createError?.error}</p>}
        <h1>this is for testing the apis</h1>{" "}
        <p>collections length {data?.length}</p>
      </div>
      <button onClick={sendPost}>send post</button>
    </div>
  );
}

export default App;
