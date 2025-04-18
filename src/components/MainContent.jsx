function MainContent() {
  const [textareaValue, setTextareaValue] = useState('');
  const items = textareaValue
    .split('\n')

  return (
    <main className="max-w-3xl mx-auto mt-12 px-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 transition-shadow hover:shadow-xl">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Decide My Life!</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
          You can type one item per line. Remove or edit directly.
        </p>

        <textarea
          rows={6}
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          placeholder="Type one item per line..."
          className="w-full p-2 rounded border dark:bg-gray-700 dark:text-white resize-none"
        />

        <h3 className="mt-6 mb-2 font-semibold text-lg">Your Items:</h3>
        <ul className="list-disc list-inside text-gray-800 dark:text-gray-200">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default MainContent;