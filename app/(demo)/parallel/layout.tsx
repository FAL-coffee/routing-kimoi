export default function Layout(props: {
  children: React.ReactNode;
  test1: React.ReactNode;
  test2: React.ReactNode;
  test3: React.ReactNode;
}) {
  return (
    <div className="text-center pt-5">
      <h2 className="text-2xl font-bold">Parallel Routes</h2>
      <div>{props.children}</div>
      <div>{props.test1}</div>
      <div>{props.test2}</div>
      <div>{props.test3}</div>
    </div>
  );
}
