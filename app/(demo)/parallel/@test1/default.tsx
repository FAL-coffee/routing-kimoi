import { Card } from "@/app/_components/Card/Card";

export default function ParallelPageTest1() {
  return (
    <div className="container mx-auto pt-5">
      <h3 className="text-xl font-bold">test1</h3>
      <Card>
        <div className="">
          <h4>以下のディレクトリのコンポーネントがここに表示されています。</h4>
          <div className="mockup-code">
            <pre>
              <code>/app/(demo)/parallel/@test1/default.tsx</code>
            </pre>
          </div>
        </div>
      </Card>
    </div>
  );
}
