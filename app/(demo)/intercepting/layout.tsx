export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="text-center pt-5">
      <h2 className="text-2xl font-bold">Intercepting Routes</h2>
      {props.children}
      {props.modal}
    </div>
  );
}
