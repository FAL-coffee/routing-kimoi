import Link from "next/link";
import { Card } from "@/app/_components/Card/Card";

export default function NestedPage() {
  return (
    <div className="container mx-auto pt-3">
      <h3 className="text-xl font-bold pb-5">nested page</h3>
      <Card>
        <div className="">
          <h4 className="text-lg font-bold py-5">
            以下のディレクトリのコンポーネントがここに表示されています。
          </h4>
          <div className="mockup-code">
            <pre>
              <code>/app/(demo)/parallel/nested/page.tsx</code>
            </pre>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold py-3">
            parallelトップページへのリンク↓
          </h4>
          <Link href="/parallel" className="text-blue-600">
            /app(demo)/parallel/default.tsx
          </Link>
        </div>
      </Card>
    </div>
  );
}
