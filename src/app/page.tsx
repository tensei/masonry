import * as Masonry from "@/components/masonry";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16">
      <main className="flex flex-col gap-4">
        <h1>masonry below</h1>

        <div className="size-[500px] bg-blue-500/80">
          <Masonry.Root columnCount={2} gap={10}>
            <Masonry.Item asChild>
              <div className="size-[100px] bg-red-500">item 1</div>
            </Masonry.Item>
            <Masonry.Item asChild>
              <div className="size-[100px] bg-red-500">item 2</div>
            </Masonry.Item>
            <Masonry.Item asChild>
              <div className="size-[100px] bg-red-500">item 3</div>
            </Masonry.Item>
          </Masonry.Root>
        </div>
      </main>
    </div>
  );
}
