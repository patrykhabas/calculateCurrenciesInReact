function Section({ result }) {
  return (
    <section>
      <h3>Przelicz swoją walute</h3>
      <button type='submit'>Przelicz</button>
      <h4 className='result'>{result}</h4>
    </section>
  );
}
export default Section;
