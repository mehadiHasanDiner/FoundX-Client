import Link from "next/link";
import Container from "../../ui/Container";
import { Button } from "@nextui-org/button";
import envConfig from "@/src/config/envConfig";
import { getRecentPosts } from "@/src/services/RecentPosts";

const RecentPosts = async () => {

  const {data:posts} = await getRecentPosts();
  console.log(posts)


  return (
    <Container>
      <div className="section-title, my-8">
        <h2 className="mb-2 text-centert text-2xl"> Recently Found Items</h2>
        <p className="text-center">
          A list of item have been recently reported
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {
            posts.map((item)=><p>{item.title}</p>)
        }
      </div>
      <div className="flex justify-center">
        <Button className="rounded-md bg-default-900 text-default-50 size-10">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPosts;
