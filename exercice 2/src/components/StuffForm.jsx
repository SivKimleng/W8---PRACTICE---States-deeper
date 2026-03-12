export default function StuffForm() {

  function handleSubmit (e) {
    e.preventDefault();
  }

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" />

      <p>Stuff price</p>
      <input type="search" placeholder="15" />

      <button>Add Stuff</button>
    </form>
  );
}
