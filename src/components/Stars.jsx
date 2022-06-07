export default function Stars() {

  function addStars (event) {
      event.preventDefault()
      const star = event.target
      console.log(star.value)
  }

  return (
    <form>
      <p className="clasificacion" ></p>
      <input type="radio" name="star" value="1" onClick={addStars}/>
      <label >★</label>
      <input type="radio" name="star" value="2" onClick={addStars}/>
      <label >★</label>
      <input type="radio" name="star" value="3" onClick={addStars}/>
      <label>★</label>
      <input type="radio" name="star" value="4" onClick={addStars}/>
      <label >★</label>
      <input type="radio" name="star" value="5" onClick={addStars}/>
      <label >★</label>
    </form>
  );
}
