import TodoApp from "./TodoApp";

export default function Home() {
  return (
    <>
      <header className="container">
        <h1>Todo</h1>
      </header>
      <main className="container">
        <article>
          <TodoApp />
        </article>
      </main>
      <footer className="container">
        <small>small todo application</small>
      </footer>
    </>
  );
}
